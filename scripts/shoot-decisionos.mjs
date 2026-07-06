/**
 * shoot-decisionos.mjs
 * Captures clean screenshots of the Crux Control Room prototype for the case study.
 *
 * Run from the repo root:
 *   /Users/mr.khan/.nvm/versions/node/v20.20.2/bin/node scripts/shoot-decisionos.mjs
 *
 * It serves frontend/public statically, loads the prototype at each hash route,
 * runs any in-page setup, and writes PNGs to
 *   frontend/public/decisionos-shots/
 * which the case study references as /decisionos-shots/cr-<name>.png
 *
 * Requires Playwright Chromium:  npx playwright install chromium
 */
import { chromium } from "playwright";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");
const SERVE_DIR = join(ROOT, "frontend/public");
const OUT_DIR = join(ROOT, "frontend/public/decisionos-shots");

const PORT = 4179;
const BASE = `http://localhost:${PORT}`;
const PROTO = `${BASE}/decisionos/`;

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".webp": "image/webp", ".txt": "text/plain",
};

function startServer() {
  return new Promise((res) => {
    const server = http.createServer(async (req, reqRes) => {
      try {
        let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        if (urlPath.endsWith("/")) urlPath += "index.html";
        const data = await readFile(join(SERVE_DIR, urlPath));
        reqRes.writeHead(200, { "Content-Type": MIME[extname(join(SERVE_DIR, urlPath))] || "application/octet-stream" });
        reqRes.end(data);
      } catch {
        reqRes.writeHead(404); reqRes.end("not found");
      }
    });
    server.listen(PORT, () => res(server));
  });
}

const VIEW = { width: 1440, height: 940 };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Each shot loads the prototype directly at its hash, then runs optional in-page prep.
const SHOTS = [
  { name: "cr-01-overview",    hash: "#/overview",     prep: null },
  { name: "cr-02-review",      hash: "#/review",       prep: null },
  { name: "cr-03-autonomy",    hash: "#/agent/recon",  prep: () => { if (window.setAutonomy) window.setAutonomy("recon", "auto"); } },
  { name: "cr-04-audit",       hash: "#/audit",        prep: () => { if (window.toggleAudit) window.toggleAudit("h1"); } },
  { name: "cr-05-escalation",  hash: "#/escalation",   prep: null },
];

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const server = await startServer();
  console.log(`serving ${SERVE_DIR} at ${BASE}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEW, deviceScaleFactor: 2 });

  for (const shot of SHOTS) {
    try {
      await page.goto(PROTO + shot.hash, { waitUntil: "networkidle" });
      await page.evaluate(async () => { try { await document.fonts.ready; } catch (e) {} });
      await wait(500);
      if (shot.prep) { await page.evaluate(shot.prep); await wait(500); }
      // remove any transient toast entirely, then let the layout settle
      await page.evaluate(() => { const t = document.getElementById("toast"); if (t) t.remove(); }).catch(() => {});
      await wait(300);
      await page.screenshot({ path: join(OUT_DIR, `${shot.name}.png`) });
      console.log("ok", shot.name);
    } catch (e) {
      console.warn("fail", shot.name, "-", e.message);
    }
  }

  await browser.close();
  server.close();
  console.log(`\nDone. ${SHOTS.length} screens -> ${OUT_DIR}`);
})();
