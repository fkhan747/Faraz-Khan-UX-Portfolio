/* Emit a self-contained before/after highlights page (images inlined as data
   URIs) to the scratchpad, for publishing as an Artifact. Run with node 20. */
const fs = require('fs');
const path = require('path');

const CMP = '/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/cmp';
const OUT = '/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/before-after.html';
const uri = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(CMP, f)).toString('base64');

const PAIRS = [
  {
    id: 'hero', kind: 'Landing · desktop', title: 'The hero now states who you are',
    before: uri('before_hero.jpg'), after: uri('after_hero.jpg'),
    changes: [
      'Added the mono eyebrow "Senior UX Lead · Enterprise, Fintech & Analytics" so seniority and domain read in the first second (they were only in the footer before).',
      'Sub-line now leads with UX and product, not "Graphic/Brand design".',
      'Nav relabeled to the plain Work / About / Contact.',
    ],
  },
  {
    id: 'mnav', kind: 'Landing · mobile (390px)', title: 'Mobile nav no longer clips',
    before: uri('before_mnav.jpg'), after: uri('after_mnav.jpg'),
    changes: [
      'Before: the white pill overflowed the phone, "My Work" was cut to "My Wo" and "Book a call" sat off-screen.',
      'After: the bar collapses to logo + a hamburger that opens a Work / About / Contact + Book a call sheet.',
    ],
  },
  {
    id: 'aurora', kind: 'Case · Aurora', title: 'Engineering jargon out of the case copy',
    before: uri('before_aurora.jpg'), after: uri('after_aurora.jpg'),
    changes: [
      'The hero opened on a "parallel AngularJS-to-Angular migration"; it now reads "while the platform was being rebuilt on modern foundations".',
      'Across the page, "Azure DevOps user stories", "streaming-first contract with backend", and "codebase" were all rewritten in plain UX language.',
    ],
  },
];

const P0 = [
  'LinkedIn button pointed at linkedin.com’s homepage → real profile (/in/thekhanfaraz).',
  'Fabricated testimonials, a 4.9/5 rating, and a fictional "Berlin fintech" timeline deleted from the codebase.',
  'Meridian: a leaked authoring note ("A lean intro, then the spine of each point.") that was live on the page, removed.',
  'Slate’s embedded prototype was still branded "RecruitOS" → renamed to Slate throughout; wrong prototype caption fixed.',
  'Invisible white-on-white numbers (Aurora goals) and eyebrows (Slate principles) made legible.',
  'A real 404 page replaces the old behavior of silently rendering the homepage under a wrong URL.',
];
const ALSO = [
  'Reduced-motion support added for the marquee + entrance animations (WCAG 2.2.2).',
  'Back-to-top button moved from bottom-center (over text) to bottom-right.',
  'FinVista wordmark casing fixed; job titles standardized to "Senior UX Lead"; phone + email formatting cleaned.',
  'NDA disclosure lines added to FinVista and Aurora (matching Meridian).',
  'About bio rewritten in your real voice; the "different countries" geography claim corrected.',
];

const chip = (n, l) => `<div class="chip"><span class="num">${n}</span><span class="lbl">${l}</span></div>`;
const pair = (p) => `
  <section class="pair" id="${p.id}">
    <div class="pairhead">
      <span class="eyebrow">${p.kind}</span>
      <h2>${p.title}</h2>
    </div>
    <div class="frames">
      <figure><span class="tag before">Before</span><img loading="lazy" alt="Before: ${p.title}" src="${p.before}"></figure>
      <figure><span class="tag after">After</span><img loading="lazy" alt="After: ${p.title}" src="${p.after}"></figure>
    </div>
    <ul class="changes">${p.changes.map((c) => `<li>${c}</li>`).join('')}</ul>
  </section>`;

const html = `<title>Portfolio go-live fixes · before / after</title>
<style>
  :root{
    --bg:#0E0212; --panel:#181126; --panel2:#1F1631; --line:rgba(255,255,255,.10);
    --ink:#F4F3FA; --muted:#A79FB6; --mag:#F5379B; --blue:#4E86FF;
    --before:#FF9DB6; --before-bg:#38101F; --after:#79EEA6; --after-bg:#0C2A18;
    --serif:"Iowan Old Style",Georgia,"Times New Roman",serif;
    --sans:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
    --mono:ui-monospace,"SF Mono",Menlo,monospace;
  }
  *{box-sizing:border-box;}
  .wrap{background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.55;
    background-image:radial-gradient(60rem 30rem at 78% -8%,rgba(78,134,255,.14),transparent 60%),radial-gradient(45rem 26rem at 6% 4%,rgba(245,55,155,.12),transparent 55%);}
  .inner{max-width:1120px;margin:0 auto;padding:clamp(28px,5vw,64px) clamp(18px,4vw,40px) 72px;}
  .kicker{font-family:var(--mono);font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--mag);margin:0 0 14px;}
  h1{font-family:var(--serif);font-weight:600;font-size:clamp(30px,5.4vw,52px);line-height:1.04;letter-spacing:-.01em;margin:0 0 14px;text-wrap:balance;}
  h1 em{font-style:italic;color:var(--muted);}
  .lede{max-width:60ch;color:var(--muted);font-size:clamp(15px,1.5vw,17px);margin:0 0 28px;}
  .chips{display:flex;flex-wrap:wrap;gap:12px;margin:0 0 8px;}
  .chip{display:flex;flex-direction:column;gap:2px;padding:12px 16px;border:1px solid var(--line);border-radius:14px;background:linear-gradient(180deg,var(--panel),rgba(24,17,38,.6));}
  .chip .num{font-family:var(--serif);font-size:26px;font-weight:600;font-variant-numeric:tabular-nums;}
  .chip .lbl{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);}
  .pair{margin-top:clamp(34px,5vw,60px);}
  .pairhead{border-top:1px solid var(--line);padding-top:20px;margin-bottom:16px;}
  .eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--blue);}
  .pairhead h2{font-family:var(--serif);font-weight:600;font-size:clamp(20px,2.6vw,28px);margin:6px 0 0;letter-spacing:-.01em;}
  .frames{display:grid;grid-template-columns:1fr 1fr;gap:clamp(12px,2vw,20px);}
  figure{position:relative;margin:0;border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#000;box-shadow:0 20px 50px -30px rgba(0,0,0,.9);}
  figure img{display:block;width:100%;height:auto;}
  .tag{position:absolute;top:10px;left:10px;z-index:2;font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding:5px 9px;border-radius:7px;}
  .tag.before{color:var(--before);background:var(--before-bg);}
  .tag.after{color:var(--after);background:var(--after-bg);}
  .changes{margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px;max-width:74ch;}
  .changes li{position:relative;padding-left:20px;color:#D9D3E6;font-size:14.5px;}
  .changes li::before{content:"";position:absolute;left:2px;top:9px;width:7px;height:7px;border-radius:2px;background:var(--mag);}
  .foot{margin-top:clamp(40px,6vw,72px);border-top:1px solid var(--line);padding-top:28px;display:grid;gap:26px;}
  .foot h3{font-family:var(--mono);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin:0 0 12px;}
  .cols{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
  .foot ul{margin:0;padding:0;list-style:none;display:grid;gap:8px;}
  .foot li{position:relative;padding-left:20px;color:#CFC8DD;font-size:14px;}
  .foot li::before{content:"";position:absolute;left:2px;top:8px;width:6px;height:6px;border-radius:50%;background:var(--blue);}
  .note{border:1px solid var(--line);border-radius:14px;padding:16px 18px;background:var(--panel);color:var(--muted);font-size:13.5px;}
  .note b{color:var(--ink);font-weight:600;}
  .note code{font-family:var(--mono);font-size:12px;color:var(--after);background:rgba(121,238,166,.08);padding:2px 6px;border-radius:5px;word-break:break-all;}
  @media (max-width:720px){.frames,.cols{grid-template-columns:1fr;}}
</style>
<div class="wrap"><div class="inner">
  <p class="kicker">Portfolio audit &middot; fixes applied</p>
  <h1>Before &amp; after, <em>side by side</em></h1>
  <p class="lede">The full multi-model audit flagged the issues; these are the ones now fixed and verified in the browser. Below are the clearest visual changes. Every route (10 pages, 92 viewport slices) has a full-resolution pair in the local comparison file.</p>
  <div class="chips">
    ${chip('6', 'P0 blockers cleared')}
    ${chip('5', 'case studies de-jargoned')}
    ${chip('92', 'before/after slices')}
    ${chip('0', 'fabricated claims left')}
  </div>
  ${PAIRS.map(pair).join('')}
  <div class="foot">
    <div>
      <h3>P0 blockers cleared</h3>
      <ul>${P0.map((x) => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="cols">
      <div><h3>Also fixed</h3><ul>${ALSO.map((x) => `<li>${x}</li>`).join('')}</ul></div>
      <div>
        <h3>See the full set</h3>
        <div class="note">Every page, desktop + mobile, at full resolution:<br><br><b>Open</b> <code>frontend/.audit/compare.html</code> in a browser. Re-run the capture after any change and regenerate it to refresh the whole board.</div>
      </div>
    </div>
  </div>
</div></div>`;

fs.writeFileSync(OUT, html);
console.log('wrote ' + OUT + '  (' + Math.round(html.length / 1024) + ' KB)');
