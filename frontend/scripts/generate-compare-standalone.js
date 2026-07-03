/* Build a SINGLE self-contained before/after HTML (all images inlined as data
   URIs) from the downscaled slices, so it can be downloaded and opened anywhere
   with no dependency on the .audit image folders.
   Run with node 20. */
const fs = require('fs');
const path = require('path');

const STD = '/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/cmp-std';
const OUT = '/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/portfolio-before-after.html';
const BEFORE = path.join(STD, 'before');
const AFTER = path.join(STD, 'after');

const LABELS = {
  landing: 'Landing', projects: 'Work / Projects', about: 'About', contact: 'Contact',
  'case-finvista': 'Case · FinVista', 'case-aurora': 'Case · Aurora',
  'case-meridian': 'Case · Meridian', 'case-joat': 'Case · Jack of All Threads',
  'case-slate': 'Case · Slate', 'agentic-workflow': 'Agentic Audit demo',
};
const NOTES = {
  landing: 'Role/domain eyebrow added, sub-line leads with UX, nav = Work/About/Contact, back-to-top moved bottom-right, fabricated testimonials deleted.',
  projects: 'Nav relabeled; demo-card heading now sentence-case (matches its page).',
  about: 'Bio rewritten in a specific, human voice; the cliches ("buzzing tech hubs", "creative flair", "passion for human-centered design") are gone.',
  contact: 'Geography claim corrected ("based in India, clients across several countries"); UK/US spelling normalized.',
  'case-finvista': 'Wordmark FinVista casing; NDA disclosure added; jargon softened (auto-layout handoff clause, out-of-scope list).',
  'case-aurora': 'Engineering jargon removed across the page (AngularJS migration, Azure DevOps, streaming/backend/codebase); NDA disclosure; goal-number contrast fixed.',
  'case-meridian': 'Leaked authoring note removed; jargon softened (data contract, CRM/SIS pipeline, semantic layer); principle 01 reconciled with the Overview KPI band.',
  'case-joat': 'Minor jargon fix (profit "calc" to "figure").',
  'case-slate': 'Prototype rebranded RecruitOS to Slate; principle 02/04 eyebrows now legible; prototype hint corrected; jargon softened.',
  'agentic-workflow': 'No content change (reference).',
};
const ORDER = ['landing', 'projects', 'about', 'contact', 'case-finvista', 'case-aurora', 'case-meridian', 'case-joat', 'case-slate', 'agentic-workflow'];

const uri = (p) => 'data:image/jpeg;base64,' + fs.readFileSync(p).toString('base64');
const shots = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /\.jpe?g$/i.test(f)).sort() : []);

const slugs = [...new Set([...shots(BEFORE), ...shots(AFTER)].concat(fs.existsSync(BEFORE) ? fs.readdirSync(BEFORE) : [], fs.existsSync(AFTER) ? fs.readdirSync(AFTER) : []))]
  .filter((s) => fs.existsSync(path.join(BEFORE, s)) || fs.existsSync(path.join(AFTER, s)))
  .filter((s) => fs.statSync(path.join(fs.existsSync(path.join(BEFORE, s)) ? BEFORE : AFTER, s)).isDirectory())
  .sort((a, b) => (ORDER.indexOf(a) + 1 || 99) - (ORDER.indexOf(b) + 1 || 99));

let nav = '';
let body = '';
for (const slug of slugs) {
  const label = LABELS[slug] || slug;
  const bs = shots(path.join(BEFORE, slug));
  const as = shots(path.join(AFTER, slug));
  const all = [...new Set([...bs, ...as])].sort();
  nav += `<a href="#${slug}">${label}</a>`;
  let rows = '';
  for (const f of all) {
    const kind = f.startsWith('m-') ? 'mobile' : 'desktop';
    const b = bs.includes(f) ? `<img loading="lazy" alt="before ${slug} ${f}" src="${uri(path.join(BEFORE, slug, f))}">` : `<div class="missing">not present before</div>`;
    const a = as.includes(f) ? `<img loading="lazy" alt="after ${slug} ${f}" src="${uri(path.join(AFTER, slug, f))}">` : `<div class="missing">not present after</div>`;
    rows += `<div class="row"><div class="cell"><span class="slice">${f} · ${kind}</span>${b}</div><div class="cell"><span class="slice">${f} · ${kind}</span>${a}</div></div>`;
  }
  const note = NOTES[slug] ? `<p class="note">${NOTES[slug]}</p>` : '';
  body += `<section id="${slug}"><h2>${label}</h2>${note}<div class="hdr"><span class="tag before">Before</span><span class="tag after">After</span></div>${rows}</section>`;
}

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Portfolio · before / after</title>
<style>
  :root{--bg:#0E0212;--card:#181126;--ink:#F4F3FA;--muted:#A79FB6;--mag:#F5379B;--blue:#4E86FF;
    --serif:"Iowan Old Style",Georgia,serif;--sans:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;--mono:ui-monospace,Menlo,monospace;}
  *{box-sizing:border-box;}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.5;}
  header{position:sticky;top:0;z-index:10;background:rgba(14,2,18,.96);backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,255,255,.1);padding:14px 20px;}
  header h1{margin:0 0 3px;font-family:var(--serif);font-weight:600;font-size:19px;}
  header p{margin:0 0 10px;color:var(--muted);font-size:12.5px;}
  nav{display:flex;flex-wrap:wrap;gap:6px;}
  nav a{font-family:var(--mono);font-size:11px;color:var(--muted);text-decoration:none;padding:4px 10px;border:1px solid rgba(255,255,255,.14);border-radius:999px;white-space:nowrap;}
  nav a:hover{color:var(--ink);border-color:var(--mag);}
  section{padding:26px 20px 6px;border-bottom:1px solid rgba(255,255,255,.08);scroll-margin-top:104px;}
  h2{font-family:var(--serif);font-weight:600;font-size:22px;margin:0 0 4px;}
  .note{color:var(--muted);max-width:900px;margin:0 0 14px;font-size:13px;}
  .hdr{display:grid;grid-template-columns:1fr 1fr;gap:16px;position:sticky;top:96px;z-index:5;margin-bottom:8px;}
  .tag{font-family:var(--mono);font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;padding:6px 10px;border-radius:6px;text-align:center;}
  .tag.before{background:#38101F;color:#FF9DB6;} .tag.after{background:#0C2A18;color:#79EEA6;}
  .row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}
  .cell{position:relative;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;background:#000;min-height:50px;}
  .cell img{display:block;width:100%;height:auto;}
  .slice{position:absolute;top:6px;left:6px;z-index:2;font-family:var(--mono);font-size:10px;background:rgba(0,0,0,.65);color:#fff;padding:3px 6px;border-radius:4px;}
  .missing{display:grid;place-items:center;height:160px;color:var(--muted);font-size:12px;font-style:italic;}
  footer{padding:22px 20px 40px;color:var(--muted);font-size:12px;}
  @media (max-width:820px){.hdr,.row{grid-template-columns:1fr;}.hdr{position:static;}}
</style></head><body>
<header>
  <h1>Portfolio &middot; before / after</h1>
  <p>Left = before the audit fixes, right = after. Desktop slices at 1440px, mobile at 390px, top-to-bottom. Self-contained: this one file has every image inside it.</p>
  <nav>${nav}</nav>
</header>
${body}
<footer>Generated ${slugs.length} routes. Full-resolution originals live in the project at frontend/.audit/. &copy; Faraz Khan.</footer>
</body></html>`;

fs.writeFileSync(OUT, html);
console.log('wrote ' + OUT + '  (' + (html.length / 1024 / 1024).toFixed(2) + ' MB)');
