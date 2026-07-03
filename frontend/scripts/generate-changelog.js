/* Emit a readable before/after changelog table (text, no images) to the
   scratchpad for publishing as an Artifact. Run with node 20. */
const fs = require('fs');
const OUT = '/private/tmp/claude-501/-Users-mr-khan-ux-portfolio-2026/1b4b3fad-febc-4307-bb7e-148c02078e35/scratchpad/portfolio-changelog.html';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// cat: P0 | Jargon | Copy | A11y | Fix | Consistency | Credibility
const SECTIONS = [
  {
    id: 'p0', title: 'Site-wide & blockers', sub: 'The fixes that were invisible in the screenshots because they live in code or off-screen.',
    rows: [
      { cat: 'P0', what: 'LinkedIn link', before: `Every LinkedIn button pointed at https://linkedin.com/ (the marketing homepage)`, after: `https://www.linkedin.com/in/thekhanfaraz (your real profile, found in your resume PDF)`, note: `Recruiters treat LinkedIn as mandatory; a dead placeholder reads as broken or fake.` },
      { cat: 'P0', what: 'Fabricated testimonials deleted', before: `3 invented quotes with stock pravatar faces, e.g. "quietly the best UX designer of his generation" (lila ortiz, ceo)`, after: `Removed from the codebase entirely (was hidden behind a flag, one toggle from going live)`, note: `Career-level risk if the flag were ever flipped, or someone read the source.` },
      { cat: 'P0', what: 'Fake rating + timeline deleted', before: `"4.9 / 5 across 30+ engagements" and a "journey" list ("Joined a Berlin fintech as their 4th hire", "Went solo")`, after: `Deleted. The Berlin/solo story contradicted your real India-based work history.`, note: `` },
      { cat: 'P0', what: 'Meridian leaked note', before: `A note-to-self was rendering live on the page: "A lean intro, then the spine of each point."`, after: `Removed.`, note: `` },
      { cat: 'P0', what: 'Slate prototype rebrand', before: `The embedded prototype still said "RecruitOS" (browser title, frame label, in-product wordmark, "R" monogram)`, after: `All renamed to "Slate" / "S" monogram, matching the case study.`, note: `A first-time reviewer would have thought it was a different product.` },
      { cat: 'Fix', what: 'Slate prototype caption', before: `"click anything. it answers from your sources, cites every claim, and flags what's stale"  (that describes Almanac, not Slate)`, after: `"click anything. the copilot sources, ranks and drafts. nothing sends without you."`, note: `` },
    ],
  },
  {
    id: 'a11y', title: 'Rendering & accessibility fixes', sub: 'Bugs and behavior, hard to see in a static capture.',
    rows: [
      { cat: 'Fix', what: 'Mobile nav (390px)', before: `The white nav pill overflowed the phone: "My Work" was cut to "My Wo" and "Book a call" sat off-screen`, after: `Below 640px the bar collapses to logo + a hamburger that opens a Work / About / Contact + Book a call sheet`, note: `The single most visible mobile bug on a designer's own site.` },
      { cat: 'Fix', what: 'White-on-white numbers (Aurora)', before: `Design-goal numbers 02 and 04 were white text on white cards, so invisible`, after: `Numbers turn magenta on the white cards`, note: `` },
      { cat: 'Fix', what: 'White-on-white eyebrows (Slate)', before: `"PRINCIPLE 02" and "PRINCIPLE 04" were white on white cards, so invisible`, after: `Eyebrows turn magenta on the white cards`, note: `` },
      { cat: 'A11y', what: 'Reduced-motion support', before: `The marquee (30s infinite) and entrance animations ran regardless of the OS "reduce motion" setting`, after: `Added a prefers-reduced-motion rule that stops the marquee and shows content statically`, note: `WCAG 2.2.2. You list accessibility as a skill, so this was worth closing.` },
      { cat: 'Fix', what: 'Back-to-top button', before: `Floated bottom-center, sitting on top of body text on mobile`, after: `Moved to bottom-right`, note: `` },
      { cat: 'Fix', what: '404 page', before: `Any wrong URL silently rendered the homepage under the bad address`, after: `A real branded 404 page with links to Work and Contact`, note: `` },
    ],
  },
  {
    id: 'hero', title: 'Landing hero & navigation', sub: 'Positioning changes. The eyebrow is the important addition.',
    rows: [
      { cat: 'Copy', what: 'Role eyebrow ADDED', before: `(nothing) — "Senior UX Lead" appeared only in the footer`, after: `A magenta line under the headline: "Senior UX Lead · Enterprise, Fintech & Analytics"`, note: `Now a recruiter sees your level and domain in the first second. Placed below the headline so your 44px nav gap is untouched.` },
      { cat: 'Copy', what: 'Sub-line lead', before: `"12+ years across Graphic/Brand design, UX, data & development."`, after: `"12+ years across UX, product and data, with roots in brand and code."`, note: `Leading with "Graphic/Brand design" read as generalist to a product screener.` },
      { cat: 'Consistency', what: 'Nav labels', before: `This is Me / My Work / Get in Touch`, after: `Work / About / Contact`, note: `Personality belongs in the copy; wayfinding should be boring.` },
      { cat: 'Consistency', what: 'Hero buttons', before: `See What I Do / Know Me`, after: `View My Work / About Me`, note: `` },
    ],
  },
  {
    id: 'aurora', title: 'Aurora — engineering jargon removed', sub: 'The biggest offender: the AngularJS migration ran through the whole case study. Your hard rule = no engineering jargon.',
    rows: [
      { cat: 'Jargon', what: 'Subtitle', before: `embedded an in-canvas AI composer (Helio AI) during a parallel AngularJS-to-Angular migration`, after: `embedded an in-canvas AI composer (Helio AI) while the platform was being rebuilt on modern foundations` },
      { cat: 'Jargon', what: 'TL;DR', before: `I used its AngularJS-to-Angular migration as the window to fix a legacy, engineer-led UI.`, after: `I used a once-in-a-decade platform rebuild as the window to fix a legacy, engineer-led UI.` },
      { cat: 'Jargon', what: 'TL;DR (handoff)', before: `Every asset shipped dev-ready, linked to a user story.`, after: `Every screen shipped ready to build, traceable to the exact requirement it served.` },
      { cat: 'Jargon', what: 'Tools card', before: `Figma, FigJam, Azure DevOps`, after: `Figma, FigJam` },
      { cat: 'Jargon', what: 'Intro', before: `while we finished a long-planned move from AngularJS to modern Angular`, after: `while the team finished a long-planned rebuild of the product's foundations` },
      { cat: 'Jargon', what: 'Project Context', before: `The product was migrating from AngularJS to Angular; the platform team treated that engineering work as a once-in-a-decade window`, after: `The product was being rebuilt from the ground up; the team treated that once-in-a-decade window as the chance` },
      { cat: 'Jargon', what: 'In-scope list', before: `Dev-ready assets linked to Azure DevOps user stories`, after: `Build-ready design files, each traceable to its requirement` },
      { cat: 'Jargon', what: 'Assumptions card', before: `The new Angular component library can absorb design tokens without breaking semantic versioning`, after: `The new component library could adopt the design tokens without disrupting work already in flight` },
      { cat: 'Jargon', what: 'UX Audit intro', before: `The rigid AngularJS codebase made each one harder to fix.`, after: `The rigid legacy platform made each one harder to fix.` },
      { cat: 'Jargon', what: 'Head of Product quote', before: `The Angular migration is once-in-a-decade leverage. We use it to fix what engineering-led design left broken, not just port it forward.`, after: `The platform rebuild is once-in-a-decade leverage. We use it to fix what engineering-led design left broken, not just carry it forward.` },
      { cat: 'Jargon', what: 'Engineering Lead quote', before: `I'm open to AI integration but we cannot block journey creation on model latency. Streaming output with graceful fallbacks is non-negotiable.`, after: `I'm open to AI, but building a campaign can never wait on it. If a suggestion is slow, the writer keeps working and nothing stalls.` },
      { cat: 'Jargon', what: 'Design goal', before: `Components, variables, and styles linked to Azure DevOps user stories for engineering pickup.`, after: `Components, variables, and styles linked to the exact requirements engineers were building from.` },
      { cat: 'Jargon', what: 'Final design intro', before: `with each frame linked to its Azure DevOps user story`, after: `with each frame linked to the requirement it fulfils` },
      { cat: 'Jargon', what: 'Design system intro', before: `Tokens, components, and patterns were linked directly to Azure DevOps user stories so engineering could pick them up`, after: `Tokens, components, and patterns were linked directly to the team's build plan so engineers could pick them up` },
      { cat: 'Jargon', what: 'Iteration round 4', before: `Migration-aligned refinement — Worked alongside engineering through the AngularJS to Angular migration to keep the design implementable`, after: `Rebuild-aligned refinement — Worked alongside engineering through the platform rebuild to keep the design buildable` },
      { cat: 'Jargon', what: 'Iteration round 5', before: `with each frame linked to its user story before dev handoff`, after: `with each frame linked to the requirement it serves before handoff to engineering` },
      { cat: 'Jargon', what: 'What went well', before: `Helio AI integration stayed on schedule thanks to a streaming-first contract negotiated with backend in week 3.`, after: `Helio AI stayed on schedule because we agreed early on one rule: a suggestion appears right away, and the writer never waits on it to keep working.` },
      { cat: 'Credibility', what: 'NDA disclosure ADDED', before: `(nothing) — "Aurora" and "Helio" read as real product names`, after: `Added: "Aurora and Helio are stand-in names; the real client is kept confidential under NDA."`, note: `Meridian was disclosed as anonymized but Aurora/FinVista weren't, which could read as fabrication.` },
    ],
  },
  {
    id: 'meridian', title: 'Meridian — jargon softened', sub: 'Data-pipeline language turned into plain UX language, plus one logic fix.',
    rows: [
      { cat: 'Jargon', what: 'Design principle', before: `Design to what Power BI renders — Agree with the engine before drawing anything pretty. Native drill-through, not a custom framework the team can't actually ship.`, after: `Design to what Power BI can show — Agree with the tool's limits before drawing anything pretty. Native drill-through, nothing custom the build team couldn't actually deliver.` },
      { cat: 'Jargon', what: 'Constraint', before: `Power BI rendering limits — ...not a bespoke framework, so engineering could actually build it.`, after: `Power BI's native limits — ...nothing custom-built, so the team could actually ship it.` },
      { cat: 'Jargon', what: 'Constraint (data)', before: `Slate (the enrollment CRM) and the SIS were the source of truth. I designed to the live data contract, not an idealized one.`, after: `Slate (the admissions system) and the student-records system already owned every number. I designed to the data the university actually has, not an idealized one.` },
      { cat: 'Jargon', what: 'Validation', before: `The IR analysts... confirmed the surface matched their data contract.`, after: `The IR analysts... confirmed every number on screen means exactly what their records say.` },
      { cat: 'Jargon', what: 'Body: where a dashboard sits', before: `The dashboard is the last mile of a CRM and SIS pipeline. Slate runs about half the enrollment-CRM market... I designed to what Power BI can actually render`, after: `A dashboard like this sits at the very end of the university's admissions and student-records systems. Slate is where about half of universities run admissions... I designed to what Power BI can actually show` },
      { cat: 'Jargon', what: 'Body: how I worked', before: `agree with what Power BI can render before drawing anything pretty ... (drill-through, not some custom framework)`, after: `agree with what Power BI can show before drawing anything pretty ... (drill-through, no custom workarounds)` },
      { cat: 'Jargon', what: 'Info-architecture diagram', before: `Slate CRM / Student Information System / Power BI semantic layer / shared metric definitions`, after: `Slate / Student records system / Shared metric definitions / one meaning per number` },
      { cat: 'Jargon', what: 'Outcome card', before: `A data layer on the Common Data Set and IPEDS, the standardized spine four ad-hoc dashboards never had.`, after: `Every metric traces to the Common Data Set and IPEDS, the common spine four ad-hoc dashboards never had.` },
      { cat: 'Jargon', what: 'Forward outlook', before: `CRM-to-BI keeps consolidating — Tighter, more live integration, so summer melt is something you watch as it happens.`, after: `Admissions data keeps getting closer to live — The data keeps moving closer to real time, so summer melt is something you watch as it happens, not something you find out about later.` },
      { cat: 'Fix', what: 'Principle 01 vs the Overview', before: `"...so there's no Institute-wide total anywhere." (but the Overview shows an institute-wide total, a contradiction)`, after: `"...so rates never blend across levels. The Overview may total counts; percentages and yield only ever live per level."`, note: `Reconciled the stated rule with what the design actually does, so it survives an interview probe.` },
    ],
  },
  {
    id: 'finvista-slate-joat', title: 'FinVista, Slate & JOAT — jargon', sub: 'The remaining confirmed engineering terms.',
    rows: [
      { cat: 'Jargon', what: 'FinVista — out of scope', before: `Third-party API integration logic`, after: `Connections to outside services, behind the scenes` },
      { cat: 'Jargon', what: 'FinVista — design system', before: `I built them on auto-layout and variants, so engineering could pull each one straight into the build.`, after: `I built them on auto-layout and variants, so every component could be recreated exactly as designed, with nothing lost in handoff.` },
      { cat: 'Credibility', what: 'FinVista — NDA disclosure ADDED', before: `(nothing) — "FinVista" read as a real product name`, after: `Added: "FinVista is a stand-in name; the client's identity is kept confidential under NDA."` },
      { cat: 'Jargon', what: 'Slate — tool sprawl', before: `a recruiter is the only integration layer connecting an ATS, a CRM, job boards, LinkedIn, email, a comms app, spreadsheets, and a reporting deck. Manually, all day.`, after: `the recruiter is the only thing holding an ATS, a CRM, job boards, LinkedIn, email, a chat app, spreadsheets, and a reporting deck together. By hand, all day.` },
      { cat: 'Jargon', what: 'Slate — ecosystem label', before: `System of record (that nobody trusts)`, after: `The official file (that nobody trusts)` },
      { cat: 'Jargon', what: 'Slate — competitive table', before: `NL search across desk`, after: `Plain-English search across the desk` },
      { cat: 'Jargon', what: 'Slate — the gap', before: `Incumbents are systems of record with AI bolted on; point tools own a feature, not the workflow.`, after: `Incumbents are filing cabinets with AI bolted on; point tools own a feature, not the workflow.` },
      { cat: 'Jargon', what: 'Slate — lifecycle', before: `Add candidates via resume / profile → structured records.`, after: `Add candidates from a resume or profile; each becomes a clean, complete candidate card.` },
      { cat: 'Jargon', what: 'JOAT — Set Your Price', before: `...drive a live minimum-profit calc; the no-risk promise sits beside the CTA.`, after: `...update a live minimum-profit figure; the no-risk promise sits beside the CTA.` },
    ],
  },
  {
    id: 'credibility', title: 'About & consistency', sub: 'Voice, accuracy, and the small details a skeptical reviewer stacks up.',
    rows: [
      { cat: 'Credibility', what: 'About bio rewrite', before: `"...across India's buzzing tech hubs... I aim to pair creative flair with smart functionality. ...leading UX/UI projects that put users first... bring my passion for human-centered design..."`, after: `"...12+ years in the messy end of product design: enterprise dashboards, lending flows, analytics tools... I like taking something dense and complicated and making it feel obvious. I sit right between design, data, and engineering..."`, note: `The old bio used the exact cliches screeners flag. Rewritten in your Contact-FAQ voice.` },
      { cat: 'Credibility', what: 'Geography claim', before: `A little over twelve years, across a few different countries.`, after: `A little over twelve years, based in India and working with clients across several countries.`, note: `Every listed role is in India; "different countries" read as inflation.` },
      { cat: 'Consistency', what: 'FinVista wordmark', before: `Case-study hero read "Finvista" (lowercase v) while every card read "FinVista"`, after: `"FinVista" everywhere` },
      { cat: 'Consistency', what: 'Demo-card heading', before: `"Point A Swarm Of AI Agents At Any Website." (auto Title-Cased) vs the destination page's sentence case`, after: `Both now sentence case: "Point a swarm of AI agents at any website."` },
      { cat: 'Consistency', what: 'Job title', before: `Mixed: "Sr. UX Lead", "Sr. User Experience Lead"`, after: `Standardized to "Senior UX Lead"` },
      { cat: 'Consistency', what: 'Phone / email / spelling', before: `"+91 - 7795661693"; "Abdulfarazkhan@outlook.com"; "favourite"`, after: `"+91 77956 61693"; "abdulfarazkhan@outlook.com"; "favorite" (US spelling to match the rest of the site)` },
    ],
  },
];

const CAT_COLORS = {
  P0: '#FF9DB6', Jargon: '#8FB4FF', Copy: '#F5B33A', 'A11y': '#79EEA6', Fix: '#C9A6FF', Consistency: '#79D0EE', Credibility: '#F5379B',
};

let nav = '';
let body = '';
let total = 0;
for (const s of SECTIONS) {
  nav += `<a href="#${s.id}">${esc(s.title)}</a>`;
  let rows = '';
  for (const r of s.rows) {
    total++;
    const col = CAT_COLORS[r.cat] || '#A79FB6';
    const note = r.note ? `<p class="why">${esc(r.note)}</p>` : '';
    rows += `<div class="change">
      <div class="chd"><span class="cat" style="color:${col};border-color:${col}33;background:${col}14">${esc(r.cat)}</span><h3>${esc(r.what)}</h3></div>
      <div class="ba">
        <div class="col b"><span class="lab">Before</span><p>${esc(r.before)}</p></div>
        <div class="col a"><span class="lab">After</span><p>${esc(r.after)}</p></div>
      </div>${note}
    </div>`;
  }
  body += `<section id="${s.id}"><div class="shead"><h2>${esc(s.title)}</h2><p>${esc(s.sub)}</p></div>${rows}</section>`;
}

const html = `<title>Portfolio audit · what changed</title>
<style>
  :root{--bg:#0E0212;--panel:#181126;--panel2:#1C1430;--line:rgba(255,255,255,.10);--ink:#F4F3FA;--muted:#A79FB6;--mag:#F5379B;--blue:#4E86FF;
    --bred:#FF9DB6;--bredbg:#2A0C16;--agrn:#79EEA6;--agrnbg:#0A2214;
    --serif:"Iowan Old Style",Georgia,"Times New Roman",serif;--sans:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;--mono:ui-monospace,"SF Mono",Menlo,monospace;}
  *{box-sizing:border-box;}
  .wrap{background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.55;background-image:radial-gradient(56rem 28rem at 82% -10%,rgba(78,134,255,.12),transparent 60%),radial-gradient(40rem 24rem at 4% 2%,rgba(245,55,155,.10),transparent 55%);}
  .inner{max-width:1080px;margin:0 auto;padding:clamp(26px,4vw,52px) clamp(16px,4vw,36px) 72px;}
  .kick{font-family:var(--mono);font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--mag);margin:0 0 12px;}
  h1{font-family:var(--serif);font-weight:600;font-size:clamp(28px,4.6vw,46px);line-height:1.05;margin:0 0 12px;letter-spacing:-.01em;text-wrap:balance;}
  h1 em{font-style:italic;color:var(--muted);}
  .lede{max-width:64ch;color:var(--muted);font-size:15.5px;margin:0 0 22px;}
  .legend{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 6px;}
  .lg{font-family:var(--mono);font-size:11px;letter-spacing:.06em;padding:4px 9px;border-radius:999px;border:1px solid;}
  .topnav{position:sticky;top:0;z-index:20;background:rgba(14,2,18,.94);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);}
  .topnav .in{max-width:1080px;margin:0 auto;padding:10px clamp(16px,4vw,36px);display:flex;flex-wrap:wrap;gap:6px;}
  .topnav a{font-family:var(--mono);font-size:11px;color:var(--muted);text-decoration:none;padding:4px 10px;border:1px solid var(--line);border-radius:999px;white-space:nowrap;}
  .topnav a:hover{color:var(--ink);border-color:var(--mag);}
  section{margin-top:clamp(30px,4vw,48px);}
  .shead{border-top:1px solid var(--line);padding-top:18px;margin-bottom:14px;}
  .shead h2{font-family:var(--serif);font-weight:600;font-size:clamp(19px,2.5vw,26px);margin:0 0 4px;letter-spacing:-.01em;}
  .shead p{color:var(--muted);font-size:13.5px;margin:0;max-width:80ch;}
  .change{border:1px solid var(--line);border-radius:14px;background:linear-gradient(180deg,var(--panel),rgba(24,17,38,.55));padding:14px 16px;margin-bottom:12px;}
  .chd{display:flex;align-items:baseline;gap:10px;margin-bottom:10px;flex-wrap:wrap;}
  .cat{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:3px 8px;border-radius:6px;border:1px solid;}
  .chd h3{font-family:var(--sans);font-weight:650;font-size:15px;margin:0;color:var(--ink);}
  .ba{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .col{border-radius:10px;padding:10px 12px;border:1px solid var(--line);}
  .col.b{background:var(--bredbg);border-color:#5a1e2e;}
  .col.a{background:var(--agrnbg);border-color:#164a2c;}
  .col .lab{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:5px;}
  .col.b .lab{color:var(--bred);} .col.a .lab{color:var(--agrn);}
  .col p{margin:0;font-size:13.5px;color:#E7E2F0;white-space:pre-wrap;}
  .col.b p{color:#F1CBD6;}
  .why{margin:10px 0 0;font-size:12.5px;color:var(--muted);padding-left:14px;border-left:2px solid var(--mag);}
  footer{margin-top:40px;border-top:1px solid var(--line);padding-top:20px;color:var(--muted);font-size:12.5px;}
  @media (max-width:760px){.ba{grid-template-columns:1fr;}}
</style>
<div class="topnav"><div class="in">${nav}</div></div>
<div class="wrap"><div class="inner">
  <p class="kick">Portfolio audit &middot; change log</p>
  <h1>What changed, <em>in words</em></h1>
  <p class="lede">Every edit from the go-live audit, with the exact text before and after, so you can read the changes the downscaled screenshots can't show. ${total} changes across the site. Nothing here is deployed yet.</p>
  <div class="legend">
    ${Object.entries(CAT_COLORS).map(([k, c]) => `<span class="lg" style="color:${c};border-color:${c}44;background:${c}12">${k}</span>`).join('')}
  </div>
  ${body}
  <footer>The visual side-by-side lives in the companion "before / after" board. Full-resolution captures are in the project at frontend/.audit/. Nothing is live until you say deploy.</footer>
</div></div>`;

fs.writeFileSync(OUT, html);
console.log('wrote ' + OUT + '  (' + total + ' changes, ' + Math.round(html.length / 1024) + ' KB)');
