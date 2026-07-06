/**
 * shoot-site.mjs — full-site preview capture.
 * Serves frontend/build statically and captures an above-the-fold screenshot
 * of every route, with scroll-reveal forced visible so nothing renders blank.
 *   node scripts/shoot-site.mjs
 */
import { chromium } from "playwright";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

const REPO = "/Users/mr.khan/ux-portfolio-2026";
const SERVE_DIR = join(REPO, "frontend/build");
const OUT_DIR = "/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/site-shots";
const PORT = 4181;
const BASE = `http://localhost:${PORT}`;

const MIME = { ".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",
  ".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".ico":"image/x-icon",
  ".woff":"font/woff",".woff2":"font/woff2",".webp":"image/webp",".txt":"text/plain" };

function startServer(){
  return new Promise((res)=>{
    const server = http.createServer(async (req,rr)=>{
      let p = decodeURIComponent((req.url||"/").split("?")[0]);
      const tryFiles = [];
      if (p.endsWith("/")) tryFiles.push(join(SERVE_DIR, p, "index.html"));
      else if (!extname(p)) { tryFiles.push(join(SERVE_DIR, p, "index.html")); tryFiles.push(join(SERVE_DIR, p)); }
      else tryFiles.push(join(SERVE_DIR, p));
      tryFiles.push(join(SERVE_DIR, "index.html"));
      for (const f of tryFiles){
        try { const data = await readFile(f); rr.writeHead(200,{ "Content-Type": MIME[extname(f)]||"application/octet-stream" }); rr.end(data); return; }
        catch {}
      }
      rr.writeHead(404); rr.end("nf");
    });
    server.listen(PORT, ()=>res(server));
  });
}

const ROUTES = [
  ["01-landing", "/"],
  ["02-projects", "/projects"],
  ["03-about", "/about"],
  ["04-contact", "/contact"],
  ["05-case-finvista", "/case/finvista"],
  ["06-case-aurora", "/case/aurora"],
  ["07-case-meridian", "/case/meridian"],
  ["08-case-joat", "/case/somethings-cooking"],
  ["09-case-slate", "/case/recruitos"],
  ["10-case-crux", "/case/decisionos"],
];
const wait = (ms)=>new Promise(r=>setTimeout(r,ms));

(async ()=>{
  await mkdir(OUT_DIR,{recursive:true});
  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport:{width:1440,height:1024}, deviceScaleFactor:1 });
  for (const [name,route] of ROUTES){
    try{
      await page.goto(BASE+route, { waitUntil:"networkidle" });
      await page.addStyleTag({ content:"*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}" });
      await page.evaluate(async ()=>{ try{ await document.fonts.ready; }catch(e){} });
      await page.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?0:new Promise(r=>{i.onload=i.onerror=r; setTimeout(r,2500);}))));
      await wait(500);
      await page.screenshot({ path: join(OUT_DIR, name+".png") });
      console.log("ok", name, route);
    }catch(e){ console.warn("fail", name, "-", e.message); }
  }
  await browser.close(); server.close();
  console.log("done ->", OUT_DIR);
})();
