/* Capture every route of the portfolio as viewport slices for a visual audit.
   Desktop: 1440x1800 slices (dpr 1, jpeg). Mobile: 390x844 (dpr 2) for key pages.
   Run: nvm use 20.20.2 && node scripts/capture-audit.js <outDir>
   Requires the dev server at http://localhost:3000. */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:3000';
const OUT = process.argv[2];
if (!OUT) { console.error('usage: node capture-audit.js <outDir>'); process.exit(1); }

const ROUTES = [
  ['landing', '/'],
  ['projects', '/projects'],
  ['about', '/about'],
  ['contact', '/contact'],
  ['case-finvista', '/case/finvista'],
  ['case-aurora', '/case/aurora'],
  ['case-meridian', '/case/meridian'],
  ['case-joat', '/case/somethings-cooking'],
  ['case-slate', '/case/recruitos'],
  ['agentic-workflow', '/agentic-workflow'],
];
const MOBILE = { landing: 3, projects: 2, about: 2, 'case-meridian': 3 };
const SLICE_H = 1800;
const MAX_SLICES = 14;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function preparePage(page, url) {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  await sleep(1200);
  // Deterministic rendering: defeat scroll-reveal animation + smooth scroll.
  await page.addStyleTag({ content: '*{opacity:1 !important;transform:none !important;transition:none !important;animation:none !important} html{scroll-behavior:auto !important}' });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  // One pass through the page so lazy images load.
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 1200) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await sleep(120); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(400);
  return page.evaluate(() => document.documentElement.scrollHeight);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const manifest = {};

  for (const [slug, route] of ROUTES) {
    const dir = path.join(OUT, slug);
    fs.mkdirSync(dir, { recursive: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: SLICE_H, deviceScaleFactor: 1 });
    process.stdout.write(`desktop ${slug} ... `);
    const h = await preparePage(page, BASE + route);
    const n = Math.min(MAX_SLICES, Math.ceil(h / SLICE_H));
    const files = [];
    for (let i = 0; i < n; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * SLICE_H);
      await sleep(300);
      const f = path.join(dir, `d-${String(i + 1).padStart(2, '0')}.jpg`);
      await page.screenshot({ path: f, type: 'jpeg', quality: 70 });
      files.push(f);
    }
    manifest[slug] = { route, height: h, desktopSlices: files, mobile: [] };
    console.log(`${n} slices (page ${h}px)`);

    if (MOBILE[slug]) {
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
      await page.goto(BASE + route, { waitUntil: 'networkidle2', timeout: 45000 });
      await sleep(1000);
      await page.addStyleTag({ content: '*{opacity:1 !important;transform:none !important;transition:none !important;animation:none !important}' });
      await sleep(300);
      for (let i = 0; i < MOBILE[slug]; i++) {
        await page.evaluate((y) => window.scrollTo(0, y), i * 844);
        await sleep(300);
        const f = path.join(dir, `m-${String(i + 1).padStart(2, '0')}.jpg`);
        await page.screenshot({ path: f, type: 'jpeg', quality: 70 });
        manifest[slug].mobile.push(f);
      }
      console.log(`  mobile ${slug}: ${MOBILE[slug]} shots`);
    }
    await page.close();
  }

  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
  await browser.close();
  console.log('done -> ' + OUT);
})().catch((e) => { console.error(e); process.exit(1); });
