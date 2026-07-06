import { chromium } from "playwright";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

const REPO = "/Users/mr.khan/ux-portfolio-2026";
const SERVE_DIR = join(REPO, "frontend/build");
const OUT = "/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/site-shots";
const PORT = 4182, BASE = `http://localhost:${PORT}`;
const MIME = { ".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".ico":"image/x-icon",".woff":"font/woff",".woff2":"font/woff2",".webp":"image/webp",".txt":"text/plain" };
function srv(){ return new Promise(res=>{ const s=http.createServer(async(req,rr)=>{ let p=decodeURIComponent((req.url||"/").split("?")[0]); const t=[]; if(p.endsWith("/"))t.push(join(SERVE_DIR,p,"index.html")); else if(!extname(p)){t.push(join(SERVE_DIR,p,"index.html"));t.push(join(SERVE_DIR,p));} else t.push(join(SERVE_DIR,p)); t.push(join(SERVE_DIR,"index.html")); for(const f of t){ try{const d=await readFile(f);rr.writeHead(200,{"Content-Type":MIME[extname(f)]||"application/octet-stream"});rr.end(d);return;}catch{} } rr.writeHead(404);rr.end("nf"); }); s.listen(PORT,()=>res(s)); }); }
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const force = "*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}";

(async()=>{
  await mkdir(OUT,{recursive:true});
  const server=await srv();
  const browser=await chromium.launch();
  const page=await browser.newPage({ viewport:{width:1440,height:1024}, deviceScaleFactor:1 });
  const settle = async ()=>{ await page.addStyleTag({content:force}); await page.evaluate(async()=>{try{await document.fonts.ready;}catch(e){}}); await page.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?0:new Promise(r=>{i.onload=i.onerror=r;setTimeout(r,2500);})))); await wait(400); };

  // Projects: scroll to the AI-native concepts row (Crux card)
  await page.goto(BASE+"/projects",{waitUntil:"networkidle"}); await settle();
  await page.evaluate(()=>{ const c=document.querySelector('a[href="/case/decisionos"]'); if(c) c.scrollIntoView({block:"center"}); });
  await wait(400); await page.screenshot({ path: join(OUT,"11-projects-concepts.png") }); console.log("ok concepts");

  // Crux case study: hero
  await page.goto(BASE+"/case/decisionos",{waitUntil:"networkidle"}); await settle();
  await page.screenshot({ path: join(OUT,"12-crux-hero.png") }); console.log("ok crux-hero");

  // Crux case study: the live prototype embed
  await page.evaluate(()=>{ const h=[...document.querySelectorAll('h3')].find(e=>/the live prototype/i.test(e.textContent)); if(h) h.scrollIntoView({block:"start"}); window.scrollBy(0,-30); });
  await wait(600); await page.screenshot({ path: join(OUT,"13-crux-prototype.png") }); console.log("ok crux-prototype");

  // Crux case study: the five key screens
  await page.evaluate(()=>{ const h=[...document.querySelectorAll('h3')].find(e=>/key screens/i.test(e.textContent)); if(h) h.scrollIntoView({block:"start"}); window.scrollBy(0,-30); });
  await wait(500); await page.screenshot({ path: join(OUT,"14-crux-keyscreens.png") }); console.log("ok crux-keyscreens");

  await browser.close(); server.close(); console.log("done");
})();
