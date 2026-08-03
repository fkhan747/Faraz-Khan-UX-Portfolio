// Renders the FinVista Material 3 screens to PNGs used by the case study.
//
//   node scripts/render-finvista-m3.mjs
//
// Source of truth: scripts/m3-source/finvista-m3.html. Edit that file, re-run
// this, and every screen updates together. Output goes to public/finvista/m3/
// at 2x (720x1520), which is what the case study points at.
//
// The script refuses to write anything if a screen fails a WCAG AA text
// contrast check, so a palette or token change cannot quietly ship an
// unreadable screen.
import puppeteer from "puppeteer";
import { mkdirSync, existsSync, rmSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = "file://" + join(ROOT, "scripts", "m3-source", "finvista-m3.html");
const OUT = join(ROOT, "public", "finvista", "m3");

const browser = await puppeteer.launch({ headless: true, args: ["--font-render-hinting=none"] });
const page = await browser.newPage();
await page.setViewport({ width: 1120, height: 900, deviceScaleFactor: 2 });
await page.goto(SRC, { waitUntil: "networkidle0" });

// --- contrast gate -------------------------------------------------------
const audit = await page.evaluate(() => {
  const rgba = (c) => { const m = c && c.match(/-?[\d.]+/g); return m ? { v: m.slice(0, 3).map(Number), a: m.length > 3 ? +m[3] : 1 } : null; };
  const bgOf = (el) => { let e = el; while (e) { const c = getComputedStyle(e).backgroundColor;
      if (c && !/rgba\(0, 0, 0, 0\)|transparent/.test(c)) return c;
      if (e.hasAttribute && e.hasAttribute("data-name")) break; e = e.parentElement; } return "rgb(255,255,255)"; };
  const lum = (v) => v.map((x) => { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); })
    .reduce((a, x, i) => a + x * [0.2126, 0.7152, 0.0722][i], 0);
  const fails = [];
  document.querySelectorAll("[data-name]").forEach((scr) => {
    scr.querySelectorAll("*").forEach((el) => {
      const t = (el.innerText || "").trim();
      if (!t || el.children.length > 0) return;
      const s = getComputedStyle(el);
      if (s.display === "none") return;
      // WCAG 1.4.3 exempts inactive (disabled) controls from contrast minimums,
      // and M3 specifies disabled at 38% opacity. The design system sheet shows
      // that state deliberately, so it is exempt rather than a failure.
      if (el.closest("[data-a11y-exempt]")) return;
      const B = rgba(bgOf(el)), F = rgba(s.color);
      if (!B || !F) return;
      const op = parseFloat(s.opacity) || 1;
      const eff = F.v.map((x, i) => Math.round(F.a * x + (1 - F.a) * B.v[i]))
                     .map((x, i) => Math.round(op * x + (1 - op) * B.v[i]));
      const L1 = lum(eff), L2 = lum(B.v);
      const r = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const px = parseFloat(s.fontSize);
      const big = px >= 24 || (px >= 18.66 && parseInt(s.fontWeight) >= 700);
      if (r < (big ? 3 : 4.5)) fails.push({ screen: scr.dataset.name, text: t.slice(0, 34), ratio: +r.toFixed(2), px });
    });
  });
  const names = [...document.querySelectorAll("[data-name]")].map((s) => s.dataset.name);
  const badIcons = [...document.querySelectorAll("svg.ico use")]
    .filter((u) => !document.querySelector(u.getAttribute("href"))).length;
  return { fails, names, badIcons };
});

if (audit.badIcons) {
  console.error(`REFUSING TO RENDER: ${audit.badIcons} icon reference(s) do not resolve.`);
  await browser.close(); process.exit(1);
}
if (audit.fails.length) {
  console.error("REFUSING TO RENDER: text below WCAG AA");
  audit.fails.slice(0, 12).forEach((f) => console.error(`  ${f.screen}: "${f.text}" ${f.ratio}:1 at ${f.px}px`));
  await browser.close(); process.exit(1);
}
console.log(`contrast OK across ${audit.names.length} screens, all icons resolve`);

// --- render --------------------------------------------------------------
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });

// Each screen is captured ALONE, scrolled to the origin. Capturing them from a
// long stacked page silently produced blank PNGs for anything past roughly
// 16k device pixels down, which is Chrome's texture limit. Isolating keeps
// every capture near 0,0 regardless of how many screens exist.
const written = [];
for (const name of audit.names) {
  await page.evaluate((n) => {
    document.querySelectorAll(".cell").forEach((c) => {
      const s = c.querySelector("[data-name]");
      c.style.display = s && s.dataset.name === n ? "" : "none";
    });
    const hd = document.querySelector(".hd");
    if (hd) hd.style.display = "none";
    window.scrollTo(0, 0);
  }, name);
  const el = await page.$(`[data-name="${name}"]`);
  const path = join(OUT, `${name}.png`);
  await el.screenshot({ path });
  written.push({ name, path, bytes: statSync(path).size });
}
await browser.close();

// A blank 720x1520 PNG compresses to about 7.5 KB. Every real screen is well
// over 60 KB. Anything small is a failed capture, and the script must say so
// rather than leave a blank screen on the case study.
const blank = written.filter((w) => w.bytes < 25000);
written.forEach((w) => console.log(`  finvista/m3/${w.name}.png  ${(w.bytes / 1024).toFixed(0)} KB`));
if (blank.length) {
  console.error(`\nFAILED: ${blank.length} screen(s) rendered blank:`);
  blank.forEach((w) => console.error(`  ${w.name} (${w.bytes} bytes)`));
  process.exit(1);
}
console.log(`\nrendered ${written.length} screens at 2x into public/finvista/m3/, none blank`);
