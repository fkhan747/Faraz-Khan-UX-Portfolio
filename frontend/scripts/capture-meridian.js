/* Capture each Meridian mockup as a PNG at width 1472 and natural height.
   Puppeteer 1.20 (already in node_modules via the frontend's deps).
   Run with: nvm use 20.20.2 && node scripts/capture-meridian.js
   Requires the dev server (or any static server) at http://localhost:3000. */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:3000/meridian-mocks/real';
const OUT = path.join(__dirname, '..', 'public', 'meridian-mocks', 'real', 'png');
const W = 1472;

const SCREENS = [
  'overview',
  'ug-summary',
  'ug-yoy',
  'ug-totals',
  'ug-drillthrough',
  'grad-summary',
  'hr-summary',
  'hr-headcount',
  'research-summary',
  'research-hindex',
  'research-expenditures',
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
    defaultViewport: { width: W, height: 900, deviceScaleFactor: 2 },
  });

  for (const name of SCREENS) {
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: 900, deviceScaleFactor: 2 });
    const url = `${BASE}/${name}.html`;
    process.stdout.write(`capturing ${name}... `);

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    // wait for webfonts so type renders crisp
    await page.evaluate(() => document.fonts && document.fonts.ready);
    // measure natural content height
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    // resize viewport to full content height; keep the floating Ask AI FAB
    // (it belongs in every shot at its natural bottom-right position).
    await page.setViewport({ width: W, height: h, deviceScaleFactor: 2 });
    await new Promise(r => setTimeout(r, 250));
    const file = path.join(OUT, `${name}.png`);
    await page.screenshot({ path: file, type: 'png' });
    const sz = (fs.statSync(file).size / 1024).toFixed(0);
    console.log(`${W}x${h} (${sz} KB)`);
    await page.close();
  }

  // bonus: one shot of Overview with the Ask AI modal open, for the AI section in the case study
  {
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: 1100, deviceScaleFactor: 2 });
    await page.goto(`${BASE}/overview.html`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts && document.fonts.ready);
    await page.evaluate(() => document.body.classList.add('ai-open'));
    await new Promise(r => setTimeout(r, 400));
    const file = path.join(OUT, 'overview-ai-open.png');
    await page.screenshot({ path: file, type: 'png' });
    console.log(`overview-ai-open: ${W}x1100 (${(fs.statSync(file).size/1024).toFixed(0)} KB)`);
    await page.close();
  }

  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
