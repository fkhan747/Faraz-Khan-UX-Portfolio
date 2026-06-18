/**
 * shoot-recruitos.mjs
 * Captures clean screenshots of the RecruitOS prototype for the case study.
 *
 * Run from the repo root (after `cd frontend && npm install`):
 *   node scripts/shoot-recruitos.mjs
 *
 * It serves frontend/build (or frontend/public) statically, drives the
 * prototype's own router with go(view, opts), and writes PNGs to
 *   frontend/public/recruitos-shots/
 * which the case study references as /recruitos-shots/<name>.png
 *
 * Requires Playwright Chromium:
 *   npx playwright install chromium
 */
import { chromium } from "playwright";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");

// Serve build/ if present (closest to production), else public/
const SERVE_DIR = existsSync(join(ROOT, "frontend/build/recruitos/index.html"))
  ? join(ROOT, "frontend/build")
  : join(ROOT, "frontend/public");

const OUT_DIR = join(ROOT, "frontend/public/recruitos-shots");

const PORT = 4178;
const BASE = `http://localhost:${PORT}`;
const PROTO = `${BASE}/recruitos/`;

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".webp": "image/webp",
};

function startServer() {
  return new Promise((res) => {
    const server = http.createServer(async (req, reqRes) => {
      try {
        let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        if (urlPath.endsWith("/")) urlPath += "index.html";
        const filePath = join(SERVE_DIR, urlPath);
        const data = await readFile(filePath);
        reqRes.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
        reqRes.end(data);
      } catch {
        reqRes.writeHead(404); reqRes.end("not found");
      }
    });
    server.listen(PORT, () => res(server));
  });
}

// Desktop viewport — the prototype is desktop-first.
const VIEW = { width: 1440, height: 960 };

// Each shot: drive the router, optionally run extra in-page setup, then capture.
// `prep` runs inside the page after navigation settles.
const SHOTS = [
  { name: "01-overview",     prep: () => window.go("overview") },
  { name: "02-projects",     prep: () => window.go("projects") },
  { name: "03-workspace",    prep: () => window.go("workspace", { projId: "acme" }) },
  { name: "04-analysis",     prep: () => window.go("candidate", { candId: "anaya" }) }, // candidate analysis = AI breakdown
  { name: "05-candidate",    prep: () => window.go("candidate", { candId: "marcus" }) },
  { name: "06-shortlist",    prep: () => window.go("shortlist") },
  { name: "07-outreach",     prep: () => window.go("outreach", { candId: "anaya" }) },
  { name: "08-share-client", prep: () => window.go("share-client") },
  { name: "09-candidates",   prep: () => window.go("candidates") },
  {
    name: "10-overview-ai",
    // open the Ask-AI copilot drawer over the overview
    prep: () => {
      window.go("overview");
      const open = document.querySelector('[data-action="open-chat"]') ||
                   document.querySelector('.cb-launch') ||
                   document.querySelector('.askbtn');
      if (open) open.click();
    },
  },
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const server = await startServer();
  console.log(`serving ${SERVE_DIR} at ${BASE}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEW, deviceScaleFactor: 2 });

  await page.goto(PROTO, { waitUntil: "networkidle" });
  await wait(700); // let init go('overview') + fonts settle

  // Sanity: confirm the router function exists in page scope.
  const hasGo = await page.evaluate(() => typeof window.go === "function" || typeof go === "function");
  if (!hasGo) {
    // go() is defined in global script scope; expose it on window for evaluate().
    await page.addScriptTag({ content: "window.go = go;" }).catch(() => {});
  } else {
    await page.evaluate(() => { if (typeof window.go !== "function" && typeof go === "function") window.go = go; });
  }

  for (const shot of SHOTS) {
    try {
      await page.evaluate(shot.prep);
      await wait(650); // view render + any AI "thinking" animation
      // close any transient toast that might overlap
      await page.evaluate(() => {
        const t = document.querySelector("#toast.show, #toast.open");
        if (t) t.classList.remove("show", "open");
      }).catch(() => {});
      const file = join(OUT_DIR, `${shot.name}.png`);
      await page.screenshot({ path: file });
      console.log("✓", shot.name);
    } catch (e) {
      console.warn("✗", shot.name, "—", e.message);
    }
  }

  await browser.close();
  server.close();
  console.log(`\nDone. ${SHOTS.length} screens → ${OUT_DIR}`);
  console.log("They're referenced by the case study as /recruitos-shots/<name>.png");
})();
