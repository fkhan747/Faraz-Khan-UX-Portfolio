/**
 * shoot-knowledgeos.mjs
 * Captures clean screenshots of the KnowledgeOS prototype for the case study.
 *
 * Run from the repo root (after `cd frontend && npm install`):
 *   npx playwright install chromium      # one time, if not already installed
 *   node scripts/shoot-knowledgeos.mjs
 *
 * It serves frontend/build (or frontend/public) statically, drives the
 * prototype's own router with window.go(view), and writes PNGs to
 *   frontend/public/knowledgeos-shots/
 * overwriting the old placeholder mockups, so the case study picks them up
 * with ZERO data-file changes (same filenames: hi-01 / hi-02 / hi-03).
 */
import { chromium } from "playwright";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");

const SERVE_DIR = existsSync(join(ROOT, "frontend/build/knowledgeos/index.html"))
  ? join(ROOT, "frontend/build")
  : join(ROOT, "frontend/public");

const OUT_DIR = join(ROOT, "frontend/public/knowledgeos-shots");

const PORT = 4181;
const BASE = `http://localhost:${PORT}`;
const PROTO = `${BASE}/knowledgeos/`;

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

// Desktop viewport — the prototype is desktop-first. fullPage avoids cropping the tall admin screen.
const VIEW = { width: 1440, height: 1024 };

const SHOTS = [
  { name: "hi-01-ask-answer", prep: () => window.go("ask") },
  { name: "hi-02-provenance", prep: () => window.go("provenance") },
  { name: "hi-03-admin",      prep: () => window.go("admin") },
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const server = await startServer();
  console.log(`serving ${SERVE_DIR} at ${BASE}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEW, deviceScaleFactor: 2 });

  await page.goto(PROTO, { waitUntil: "networkidle" });
  await wait(800); // let init render + IBM Plex fonts settle

  await page.evaluate(() => { if (typeof window.go !== "function" && typeof go === "function") window.go = go; }).catch(() => {});

  for (const shot of SHOTS) {
    try {
      await page.evaluate(shot.prep);
      await wait(600); // view render
      const file = join(OUT_DIR, `${shot.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log("✓", shot.name);
    } catch (e) {
      console.warn("✗", shot.name, "—", e.message);
    }
  }

  await browser.close();
  server.close();
  console.log(`\nDone. ${SHOTS.length} screens → ${OUT_DIR}`);
  console.log("Referenced by the case study as /knowledgeos-shots/<name>.png");
})();
