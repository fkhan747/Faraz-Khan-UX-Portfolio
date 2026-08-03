/* Build .audit/compare.html: a before/after visual diff of every captured route.
   Pairs before/after slices by filename and lays them side by side. Open the
   file directly in a browser (relative ./before + ./after paths resolve).
   Run: node scripts/generate-compare.js */
const fs = require('fs');
const path = require('path');

const AUDIT = path.join(__dirname, '..', '.audit');
const BEFORE = path.join(AUDIT, 'before');
const AFTER = path.join(AUDIT, 'after');

const LABELS = {
  landing: 'Landing', projects: 'Work / Projects', about: 'About', contact: 'Contact',
  'case-finvista': 'Case · FinVista', 'case-aurora': 'Case · Aurora',
  'case-meridian': 'Case · Meridian', 'case-threadfold': 'Case · Threadfold',
  'case-slate': 'Case · Slate', 'agentic-workflow': 'Agentic Audit demo',
};
// Where the fixes are most visible, called out per route.
const NOTES = {
  landing: 'Role/domain eyebrow added, sub-line leads with UX, nav = Work/About/Contact, FAB moved bottom-right, fake testimonials deleted.',
  projects: 'Nav relabeled; demo-card heading now sentence-case (matches its page).',
  about: 'Bio rewritten in a specific, human voice (cliches removed).',
  contact: 'Geography claim corrected; UK/US spelling normalized.',
  'case-finvista': 'Wordmark FinVista casing; NDA disclosure; jargon softened (auto-layout handoff, out-of-scope).',
  'case-aurora': 'Engineering jargon removed across the page (migration language, Azure DevOps, streaming/backend); NDA disclosure; goal-number contrast fixed.',
  'case-meridian': 'Leaked authoring note removed; jargon softened (data contract, CRM/SIS, semantic layer); principle 01 reconciled with the Overview.',
  'case-threadfold': 'Minor jargon fix (profit "calc" to "figure").',
  'case-slate': 'Prototype rebranded RecruitOS to Slate; principle 02/04 eyebrows now visible; prototype hint fixed; jargon softened.',
  'agentic-workflow': 'No content change (reference).',
};
const ROUTE_ORDER = ['landing', 'projects', 'about', 'contact', 'case-finvista', 'case-aurora', 'case-meridian', 'case-threadfold', 'case-slate', 'agentic-workflow'];

function shots(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f)).sort();
}

function routes() {
  const set = new Set();
  for (const base of [BEFORE, AFTER]) {
    if (!fs.existsSync(base)) continue;
    for (const d of fs.readdirSync(base)) {
      if (fs.statSync(path.join(base, d)).isDirectory()) set.add(d);
    }
  }
  return [...set].sort((a, b) => (ROUTE_ORDER.indexOf(a) + 1 || 99) - (ROUTE_ORDER.indexOf(b) + 1 || 99));
}

const rs = routes();
let nav = '';
let body = '';

for (const slug of rs) {
  const label = LABELS[slug] || slug;
  const beforeShots = shots(path.join(BEFORE, slug));
  const afterShots = shots(path.join(AFTER, slug));
  const all = [...new Set([...beforeShots, ...afterShots])].sort();
  nav += `<a href="#${slug}">${label}</a>`;
  const note = NOTES[slug] ? `<p class="note">${NOTES[slug]}</p>` : '';
  let rows = '';
  for (const f of all) {
    const b = beforeShots.includes(f) ? `<img loading="lazy" src="./before/${slug}/${f}" alt="before ${slug} ${f}">` : `<div class="missing">not present before</div>`;
    const a = afterShots.includes(f) ? `<img loading="lazy" src="./after/${slug}/${f}" alt="after ${slug} ${f}">` : `<div class="missing">not present after</div>`;
    const kind = f.startsWith('m-') ? 'mobile' : 'desktop';
    rows += `<div class="row"><div class="cell"><span class="slice">${f} · ${kind}</span>${b}</div><div class="cell"><span class="slice">${f} · ${kind}</span>${a}</div></div>`;
  }
  body += `<section id="${slug}"><h2>${label}</h2>${note}<div class="hdr"><span class="tag before">BEFORE</span><span class="tag after">AFTER</span></div>${rows}</section>`;
}

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Portfolio audit · before / after</title>
<style>
  :root { --bg:#100210; --card:#181126; --ink:#F4F3FA; --muted:#A29CB4; --mag:#F5379B; --blue:#075EFD; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--bg); color:var(--ink); font:15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
  header { position:sticky; top:0; z-index:10; background:rgba(16,2,16,0.95); backdrop-filter:blur(8px); border-bottom:1px solid rgba(255,255,255,0.1); padding:14px 20px; }
  header h1 { margin:0 0 8px; font-size:18px; }
  header h1 small { color:var(--muted); font-weight:400; font-size:13px; }
  nav { display:flex; flex-wrap:wrap; gap:6px; }
  nav a { font-size:12px; color:var(--muted); text-decoration:none; padding:4px 10px; border:1px solid rgba(255,255,255,0.14); border-radius:999px; white-space:nowrap; }
  nav a:hover { color:var(--ink); border-color:var(--mag); }
  section { padding:28px 20px 10px; border-bottom:1px solid rgba(255,255,255,0.08); scroll-margin-top:96px; }
  h2 { font-size:22px; margin:0 0 4px; }
  .note { color:var(--muted); max-width:900px; margin:0 0 14px; font-size:13.5px; }
  .hdr { display:grid; grid-template-columns:1fr 1fr; gap:16px; position:sticky; top:92px; z-index:5; margin-bottom:8px; }
  .tag { font:600 11px/1 ui-monospace,monospace; letter-spacing:.15em; padding:6px 10px; border-radius:6px; text-align:center; }
  .tag.before { background:#3a1020; color:#ff9db6; }
  .tag.after { background:#0d2a17; color:#7ff0a8; }
  .row { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
  .cell { position:relative; border:1px solid rgba(255,255,255,0.1); border-radius:10px; overflow:hidden; background:#000; min-height:60px; }
  .cell img { display:block; width:100%; height:auto; }
  .slice { position:absolute; top:6px; left:6px; z-index:2; font:600 10px/1 ui-monospace,monospace; background:rgba(0,0,0,0.65); color:#fff; padding:3px 6px; border-radius:4px; }
  .missing { display:grid; place-items:center; height:200px; color:var(--muted); font-size:12px; font-style:italic; }
  @media (max-width:800px){ .hdr,.row{ grid-template-columns:1fr; } .hdr{ position:static; } }
</style></head><body>
<header>
  <h1>Portfolio audit &middot; before / after <small>rendered at 1440px (desktop) and 390px (mobile)</small></h1>
  <nav>${nav}</nav>
</header>
${body}
<section style="border:0;color:var(--muted);font-size:12px">Generated locally. Left = before fixes, right = after. Images are viewport slices top-to-bottom.</section>
</body></html>`;

fs.writeFileSync(path.join(AUDIT, 'compare.html'), html);
const pairs = rs.reduce((n, s) => n + [...new Set([...shots(path.join(BEFORE, s)), ...shots(path.join(AFTER, s))])].length, 0);
console.log(`compare.html written: ${rs.length} routes, ${pairs} slice pairs -> ${path.join(AUDIT, 'compare.html')}`);
