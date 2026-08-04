/* Slide-band case-study system.

   Lifted from the portfolio template Faraz found. The template's whole point is
   that a project gets explained through COMPOSITION rather than through prose:
   a small dark eyebrow, one big coloured headline, three or four short bullets,
   and half the slide given to a visual. Nothing on a slide is a paragraph.

   So this stylesheet is band-based, not column-based. The previous light
   stylesheet (caseLight.js) centred one reading measure and let prose run;
   here every section is a full-width band with its own composition:

     .cd-split      copy on one side, full-bleed media on the other
     .cd-split-dark the same, but the far side is an ink panel (contrast beat)
     .cd-split-acc  the same, but the far side is the project's brand colour
     .cd-stat       one sentence, mostly air (the "how might we" slide)
     .cd-metrics    a strip of numbers, the thing recruiters scan for
     .cd-3up        three cards (edge cases, constraints)
     .cd-card       a white card holding a diagram artefact

   Colour: the template puts its headline in one saturated brand colour on a
   tinted panel. Ours does the same, but the colour is `--acc`, set per page
   from the project's own brand, so the same stylesheet serves every case
   study. --tint is that accent laid over paper at low alpha. */

export const DECK_CSS = `
  .cd{
    --paper:#EFEDE7; --ink:#171512; --muted:#6B665D; --line:#DCD7CC;
    --tint:color-mix(in srgb, var(--acc) 7%, #F4F2EC);
    background:var(--paper); color:var(--ink);
    font-family:'Outfit',system-ui,sans-serif;
    /* clip, not hidden. overflow-x:hidden computes overflow-y to auto, which
       makes this element a scroll container, and the sticky masthead then
       sticks to THIS box instead of the viewport, so it scrolls away. clip
       still clips sideways overflow without creating a scrollport.
       (No backticks in this file: it is one big CSS template literal.) */
    overflow-x:clip;
  }
  .cd *{ box-sizing:border-box; }

  /* ── Masthead ─────────────────────────────────────────────────────── */
  .cd-top{ position:sticky; top:0; z-index:40; background:rgba(239,237,231,.88);
    backdrop-filter:blur(10px); border-bottom:1px solid var(--line); }
  .cd-top-in{ max-width:1360px; margin:0 auto; padding:14px 40px;
    display:flex; align-items:center; justify-content:space-between; }
  .cd-back{ font-size:13.5px; color:var(--muted); text-decoration:none; }
  .cd-back:hover{ color:var(--ink); }
  .cd-mark{ font-family:'Playfair Display',serif; font-size:17px; letter-spacing:-.02em; }

  /* ── Band scaffolding ─────────────────────────────────────────────── */
  .cd-band{ padding:104px 0; }
  .cd-band-tight{ padding:72px 0; }
  .cd-in{ max-width:1360px; margin:0 auto; padding:0 40px; }
  @media (max-width:900px){ .cd-band{ padding:64px 0; } .cd-in{ padding:0 22px; } }

  /* The two type moves the template is built on. */
  .cd-eye{ font-size:12px; font-weight:700; letter-spacing:.085em;
    color:var(--ink); margin-bottom:14px; }
  .cd-h2{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(2rem,3.7vw,3.25rem); line-height:1.06; letter-spacing:-.025em;
    color:var(--acc); max-width:19ch; margin:0 0 34px; }
  .cd-h3{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(1.25rem,1.9vw,1.6rem); line-height:1.2; letter-spacing:-.02em;
    margin:0 0 18px; }

  /* Bullets, never paragraphs. Generous gap so four lines still breathe. */
  .cd-ul{ list-style:none; padding:0; margin:0; max-width:46ch; }
  .cd-ul li{ position:relative; padding-left:22px; font-size:17.5px; line-height:1.6; }
  .cd-ul li + li{ margin-top:26px; }
  .cd-ul li::before{ content:""; position:absolute; left:0; top:.62em;
    width:7px; height:7px; border-radius:50%; background:var(--acc); }
  .cd-ul b{ font-weight:600; }
  .cd-lede{ font-size:19px; line-height:1.6; max-width:44ch; margin:0 0 30px; }
  .cd-note{ font-size:13px; line-height:1.6; color:var(--muted); margin-top:34px; max-width:60ch; }

  /* ── Split bands ──────────────────────────────────────────────────── */
  .cd-split{ display:grid; grid-template-columns:1fr 1fr; align-items:stretch; min-height:600px; }
  /* --gut is the page gutter: whatever distance .cd-in's content sits from the
     viewport edge at this width. Split copy uses the same value, so every band
     on the page shares one left edge with the masthead and the hero. The 76px
     inner gutter fences the copy off the media half, making collision
     structurally impossible rather than a matter of text length. */
  .cd{ --gut:max(40px, calc((100vw - 1360px) / 2 + 40px)); }
  .cd-half{ background:var(--tint); display:flex; flex-direction:column;
    justify-content:center; padding:96px 76px 96px var(--gut); }
  .cd-half-in{ width:100%; max-width:600px; }
  .cd-split-rev .cd-half{ padding:96px var(--gut) 96px 76px; }
  .cd-split-rev .cd-half-in{ margin-left:auto; }
  .cd-split-rev .cd-media{ order:-1; }
  .cd-media{ position:relative; overflow:hidden; min-height:600px; background:var(--ink); }
  .cd-media img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
  .cd-media-pad{ background:var(--ink); display:grid; place-items:center; padding:64px; }
  .cd-media-acc{ background:var(--acc); }
  /* Product screens sit on the project's own colour panel, with a white frame
     around the screen itself so it reads as a mounted artefact rather than
     floating loose on the colour. Padding is tight so the screen fills more of
     the panel. */
  .cd-media-shot{ background:var(--acc); padding:40px; min-height:680px;
    display:grid; place-items:center; }
  /* The frame has to hug the screenshot, so the image box must shrink to the
     picture rather than the picture shrinking inside a fixed box. Sizing with
     max-width + max-height (not width:100% + object-fit) keeps the element box
     exactly the rendered image, so the border wraps the UI and nothing else.
     figure and button shrink-wrap for the same reason, which also puts the
     expand control on the screen's own corner. */
  .cd-media-shot figure{ margin:0; position:relative; width:auto; max-width:100%; }
  .cd-media-shot .cd-figbtn{ width:auto; max-width:100%; font-size:0; }
  .cd-media-shot img{ position:static; display:block; width:auto; height:auto;
    max-width:100%; max-height:600px; border:2px solid #fff; border-radius:12px;
    box-shadow:0 26px 60px rgba(0,0,0,.30); }
  @media (max-width:1000px){ .cd-media-shot{ padding:28px 22px; min-height:0; }
    .cd-media-shot img{ border-radius:10px; } }

  /* Phone screens on the brand panel. The device bezel is the frame here, so
     these skip the white border the wide shots take. One to three per panel;
     the page sets the width from the count. */
  .cd-media-phones{ background:var(--acc); padding:52px 40px; min-height:680px;
    display:flex; align-items:center; justify-content:center; gap:24px;
    position:relative; }
  /* The whole panel is one click target, with a single expand control pinned to
     its corner, because the screens in it are a set. */
  .cd-panel-btn{ display:flex; align-items:center; justify-content:center; gap:24px;
    width:100%; padding:0; border:0; background:none; cursor:zoom-in; }
  .cd-zoom-panel{ top:20px; right:20px; }
  .cd-phone{ margin:0; position:relative; display:block; width:100%; }
  /* .cd-media img is absolutely positioned and height:100% for the cover-cropped
     panels. A phone screenshot has to keep its own aspect instead, or the whole
     frame collapses to its padding. */
  .cd-media-phones img{ position:static; width:100%; height:auto; object-fit:contain; }
  @media (max-width:1000px){
    .cd-media-phones{ padding:44px 22px; min-height:0; gap:14px; }
  }
  @media (max-width:520px){
    .cd-media-phones{ flex-wrap:wrap; }
    .cd-phone{ max-width:180px !important; }
  }
  .cd-media-pad img{ position:static; width:100%; height:auto; object-fit:contain;
    max-height:520px; border-radius:6px; box-shadow:0 30px 70px rgba(0,0,0,.28); }
  .cd-panel-dark{ background:var(--ink); color:var(--paper);
    display:flex; flex-direction:column; justify-content:center; padding:96px var(--gut) 96px 76px; }
  .cd-panel-dark .cd-h3{ color:#fff; }
  .cd-panel-dark .cd-ul{ max-width:44ch; }
  .cd-panel-dark .cd-ul li::before{ background:var(--acc); }
  @media (max-width:1000px){
    .cd-split{ grid-template-columns:1fr; min-height:0; }
    .cd-half, .cd-split-rev .cd-half{ padding:56px 22px; }
    .cd-half-in, .cd-split-rev .cd-half-in{ max-width:none; padding:0; }
    .cd-split-rev .cd-media{ order:0; }
    .cd-media{ min-height:0; height:auto; }
    .cd-media img{ position:static; height:auto; }
    .cd-media-pad{ padding:40px 22px; }
    .cd-panel-dark{ padding:56px 22px; }
  }

  /* ── Statement band (the "how might we" slide) ────────────────────── */
  .cd-stat{ background:var(--tint); }
  .cd-stat-eye{ font-size:clamp(1rem,1.6vw,1.35rem); letter-spacing:.16em;
    text-transform:uppercase; color:var(--ink); margin-bottom:18px; }
  .cd-stat-q{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(1.9rem,4.4vw,3.9rem); line-height:1.1; letter-spacing:-.028em;
    color:var(--acc); max-width:20ch; margin:0; }

  /* ── Metric strip ─────────────────────────────────────────────────── */
  .cd-metrics{ display:grid; grid-template-columns:repeat(3,1fr); gap:1px;
    background:var(--line); border:1px solid var(--line); margin-top:44px; }
  @media (max-width:820px){ .cd-metrics{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:480px){ .cd-metrics{ grid-template-columns:1fr; } }
  .cd-metric{ background:var(--paper); padding:32px 28px; }
  .cd-metric-n{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(2.2rem,3.6vw,3.1rem); line-height:1; letter-spacing:-.03em; color:var(--acc); }
  .cd-metric-l{ font-size:14px; line-height:1.5; color:var(--muted); margin-top:12px; }
  /* Dark variant, used for the "before" strip so the two read as opposites. */
  .cd-dark{ background:var(--ink); color:var(--paper); }
  .cd-dark .cd-eye{ color:var(--paper); }
  .cd-dark .cd-h2{ color:#fff; }
  .cd-dark .cd-lede{ color:rgba(239,237,231,.8); }
  .cd-dark .cd-metrics{ background:rgba(255,255,255,.16); border-color:rgba(255,255,255,.16); }
  .cd-dark .cd-metric{ background:var(--ink); }
  .cd-dark .cd-metric-n{ color:#fff; }
  .cd-dark .cd-metric-l{ color:rgba(239,237,231,.62); }
  .cd-dark .cd-note{ color:rgba(239,237,231,.55); }

  /* Before → after pairs, the strip that answers "what changed". */
  .cd-shift{ display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
  /* A struck-through number next to a big one is ambiguous on its own ("4 1"
     reads as a pair, not a change), so the arrow carries the relationship. */
  .cd-shift-arrow{ font-size:15px; line-height:1; color:var(--muted); }
  .cd-dark .cd-shift-arrow{ color:rgba(239,237,231,.5); }
  .cd-shift-a{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(1.5rem,2.3vw,2rem); line-height:1; color:var(--muted);
    text-decoration:line-through; text-decoration-thickness:1.5px; }
  .cd-shift-b{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(2.2rem,3.6vw,3.1rem); line-height:1; letter-spacing:-.03em; color:var(--acc); }
  .cd-dark .cd-shift-b{ color:#fff; }
  .cd-dark .cd-shift-a{ color:rgba(239,237,231,.45); }

  /* Post-launch measurement, sitting under the before/after strip. Lighter
     weight than the strip above it so it reads as supporting evidence, not as
     a second headline. */
  .cd-measured{ display:grid; grid-template-columns:repeat(3,1fr); gap:34px; margin-top:40px; }
  @media (max-width:820px){ .cd-measured{ grid-template-columns:1fr; gap:22px; } }
  .cd-measured span{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:1.7rem; line-height:1; color:var(--acc); }
  .cd-dark .cd-measured span{ color:#fff; }
  .cd-measured p{ font-size:14.5px; line-height:1.5; color:var(--muted); margin:10px 0 0; }
  .cd-dark .cd-measured p{ color:rgba(239,237,231,.66); }

  /* ── Audit findings ───────────────────────────────────────────────
     Two-up rather than the three-up used for constraints, so the two card
     grids on the page stay distinguishable at a glance. The severity chip
     carries the method: these came out of a scored heuristic evaluation, not
     an opinion. */
  .cd-findings{ display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:44px; }
  @media (max-width:820px){ .cd-findings{ grid-template-columns:1fr; } }
  .cd-finding{ background:#fff; border:1px solid var(--line); border-radius:16px; padding:30px 28px; }
  .cd-sev{ display:inline-block; font-size:11px; font-weight:700; letter-spacing:.09em;
    text-transform:uppercase; color:var(--acc); border-radius:9999px; padding:6px 13px;
    margin-bottom:16px; background:color-mix(in srgb, var(--acc) 10%, transparent); }
  .cd-finding h3{ margin-bottom:10px; }
  .cd-finding p{ font-size:15.5px; line-height:1.6; color:var(--muted); margin:0; }
  /* Compact list inside a card, used for persona goals and challenges. */
  .cd-mini{ list-style:none; padding:0; margin:0; }
  .cd-mini li{ position:relative; padding-left:16px; font-size:15px; line-height:1.55;
    color:var(--muted); }
  .cd-mini li + li{ margin-top:12px; }
  .cd-mini li::before{ content:""; position:absolute; left:0; top:.6em;
    width:5px; height:5px; border-radius:50%; background:var(--acc); }
  .cd-mini b{ color:var(--ink); font-weight:600; }

  /* An aside set apart from the grid above it: used where something belongs to
     a section but is deliberately not one of its items. */
  .cd-aside{ margin-top:24px; border-left:3px solid var(--acc); padding:4px 0 4px 26px;
    max-width:72ch; }
  .cd-aside .cd-h3{ margin-bottom:10px; }
  .cd-aside p{ font-size:16.5px; line-height:1.62; color:var(--muted); margin:0; }


  /* ── Work mode vs handoff mode ────────────────────────────────────
     Two labelled columns of screens side by side. Full-width band rather
     than a split panel, because the whole point is comparing the two modes
     and that needs the screens big enough to actually read. */
  .cd-modes{ display:grid; grid-template-columns:1fr 1fr; gap:40px; margin-top:44px; }
  @media(max-width:900px){ .cd-modes{ grid-template-columns:1fr; gap:34px; } }
  .cd-mode-col{ background:var(--tint); border-radius:18px; padding:26px 24px 28px; }
  .cd-mode-lbl{ font-family:'Playfair Display',serif; font-weight:700; font-size:1.35rem;
    letter-spacing:-.02em; color:var(--acc); margin:0 0 6px; }
  .cd-mode-sub{ font-size:14.5px; line-height:1.55; color:var(--muted); margin:0 0 20px; max-width:38ch; }
  .cd-mode-row{ display:grid; grid-template-columns:1fr 1fr; gap:18px; }
  .cd-mode-row .cd-phone-cell img{ border-radius:12px; }

  /* ── Iteration list ───────────────────────────────────────────────── */
  .cd-iters{ margin-top:44px; border-top:1px solid var(--line); }
  .cd-iter{ display:grid; grid-template-columns:64px minmax(0,1fr);
    gap:24px; padding:32px 0; border-bottom:1px solid var(--line); }
  @media (max-width:700px){ .cd-iter{ grid-template-columns:1fr; gap:10px; } }
  .cd-iter-n{ font-family:'Playfair Display',serif; font-weight:700; font-size:1.6rem;
    line-height:1; color:var(--acc); }
  .cd-iter .cd-h3{ margin-bottom:10px; }
  .cd-iter p{ font-size:16.5px; line-height:1.62; color:var(--muted); margin:0; max-width:62ch; }

  /* ── Three-up cards ───────────────────────────────────────────────── */
  .cd-3up{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:44px; }
  @media (max-width:900px){ .cd-3up{ grid-template-columns:1fr; } }
  .cd-tile{ background:#fff; border:1px solid var(--line); border-radius:16px; padding:30px 28px; }
  .cd-tile .cd-h3{ font-size:1.2rem; margin-bottom:12px; }
  .cd-tile p{ font-size:15.5px; line-height:1.6; color:var(--muted); margin:0; }
  .cd-tile-k{ font-family:'Playfair Display',serif; font-weight:700; font-size:2rem;
    color:var(--acc); line-height:1; margin-bottom:14px; display:block; }

  /* ── Figures + artefact cards ─────────────────────────────────────── */
  .cd-card{ background:#fff; border:1px solid var(--line); border-radius:20px;
    padding:44px 40px; margin-top:44px; }
  @media (max-width:900px){ .cd-card{ padding:26px 18px; border-radius:14px; } }
  .cd-fig{ margin:44px 0 0; position:relative; }
  .cd-fig img{ width:100%; display:block; border-radius:8px; border:1px solid var(--line); background:#fff; }
  .cd-fig figcaption{ font-size:13px; color:var(--muted); margin-top:12px; }
  .cd-shots{ display:grid; grid-template-columns:repeat(2,1fr); gap:24px; margin-top:44px; }
  /* Three shots go three across rather than 2 + 1: never leave one alone. */
  .cd-shots-3{ grid-template-columns:repeat(3,1fr); }
  @media (max-width:1000px){ .cd-shots-3{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:820px){ .cd-shots, .cd-shots-3{ grid-template-columns:1fr; } }
  .cd-shots figure{ margin:0; position:relative; }

  /* "How it was run": the mechanics behind a method, set apart from the
     argument above it. Deliberately small and ruled rather than boxed, so it
     reads as a footnote a reader can skip and an interviewer can stop on. */
  .cd-how{ margin-top:30px; padding:2px 0 2px 20px; border-left:2px solid var(--acc);
    max-width:66ch; }
  .cd-how b{ display:block; font-size:11px; font-weight:700; letter-spacing:.09em;
    text-transform:uppercase; color:var(--acc); margin-bottom:6px; }
  .cd-how p{ margin:0; font-size:15px; line-height:1.6; color:var(--muted); }

  /* Full-column product screen on the brand panel. A dense desktop UI is
     illegible in the half-width Split panel that suits a phone screenshot, so
     web case studies put the screen across the whole column instead. */
  .cd-wide{ background:var(--acc); border-radius:20px; padding:40px; margin-top:44px; }
  .cd-wide figure{ margin:0; position:relative; }
  .cd-wide img{ width:100%; display:block; border-radius:8px;
    border:3px solid #fff; background:#fff; }
  .cd-wide figcaption{ font-size:13px; color:rgba(255,255,255,.82); margin-top:14px; }
  @media (max-width:900px){ .cd-wide{ padding:20px; border-radius:14px; }
    .cd-wide img{ border-width:2px; } }

  /* Gallery of phone screens. Portrait shots, so four across reads better than
     the two-up used for wide artefacts. */
  .cd-gallery{ display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:44px; }
  @media (max-width:900px){ .cd-gallery{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:460px){ .cd-gallery{ grid-template-columns:1fr; } }
  .cd-phone-cell{ margin:0; position:relative; }
  .cd-phone-cell img{ width:100%; display:block; border-radius:10px;
    border:1px solid var(--line); background:#fff; }
  .cd-phone-cell figcaption{ font-size:13px; color:var(--muted); margin-top:10px; }

  /* Expand affordance. Always visible rather than hover-only, so it is
     discoverable on touch. */
  .cd-zoom{ position:absolute; top:14px; right:14px; z-index:2;
    width:34px; height:34px; display:grid; place-items:center;
    border-radius:8px; cursor:pointer; border:1px solid var(--line);
    background:rgba(255,255,255,.88); backdrop-filter:blur(6px);
    color:var(--ink); opacity:.74; transition:opacity .18s ease, background-color .18s ease; }
  .cd-fig:hover .cd-zoom, .cd-shots figure:hover .cd-zoom{ opacity:1; background:#fff; }
  .cd-zoom:focus-visible{ outline:2px solid var(--acc); outline-offset:2px; opacity:1; }
  .cd-figbtn{ display:block; width:100%; padding:0; border:0; background:none; cursor:zoom-in; }

  /* ── Hero ─────────────────────────────────────────────────────────── */
  .cd-hero{ padding:96px 0 0; }
  .cd-h1{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(3.2rem,10vw,8.5rem); line-height:.92; letter-spacing:-.04em; margin:0; }
  /* Measure tuned so the standfirst breaks onto exactly two lines at desktop. */
  .cd-hero-deck{ font-size:clamp(1.15rem,1.7vw,1.5rem); line-height:1.42;
    max-width:56ch; margin:30px 0 0; }
  .cd-hero-img{ margin-top:64px; width:100%; display:block; }

  /* Overview columns (role / team / timeline). */
  .cd-cols{ display:grid; grid-template-columns:repeat(3,1fr); gap:40px; margin-top:8px; }
  @media (max-width:820px){ .cd-cols{ grid-template-columns:1fr; gap:34px; } }
  .cd-col h4{ font-size:15px; font-weight:700; margin:0 0 18px; }
  .cd-col ul{ list-style:none; padding:0; margin:0; }
  .cd-col li{ position:relative; padding-left:18px; font-size:16px; line-height:1.5; color:var(--ink); }
  .cd-col li + li{ margin-top:12px; }
  .cd-col li::before{ content:""; position:absolute; left:0; top:.6em;
    width:5px; height:5px; border-radius:50%; background:var(--acc); }

  /* ── Artefact exhibits ────────────────────────────────────────────
     The IA / flow / persona / wireframe components were authored for the dark
     site. Rather than fork them they are re-themed in place: dark surfaces
     become white, light-on-dark text tokens invert, and every magenta token is
     remapped to the project's own accent. One override set, so every case
     study picks it up for free. */
  .cd-exhibit .dark-card{ background-color:#FFFFFF !important; border:1px solid var(--line); }
  .cd-exhibit .dark-card::before, .cd-exhibit .dark-card::after{ display:none !important; }
  .cd-exhibit [class*="text-[#F4F3FA]"],
  .cd-exhibit [class*="text-[#F7F5FF]"],
  .cd-exhibit [class*="text-[#EDEBF5]"]{ color:var(--ink) !important; }
  .cd-exhibit [class*="text-[#A29CB4]"],
  .cd-exhibit [class*="text-white"]{ color:var(--muted) !important; }
  .cd-exhibit [class*="border-white"]{ border-color:var(--line) !important; }
  .cd-exhibit [class*="bg-white/5"]{ background-color:rgba(23,21,18,.04) !important; }
  .cd-exhibit [style*="background"] [class*="text-white"],
  .cd-exhibit [class*="text-white"][style*="background"]{ color:#fff !important; }

  /* Text sitting on a painted BRAND FILL keeps the light colour it was authored
     with. The blanket "text-white -> muted" rule above exists for text that used
     to sit on the dark page surface; on a green or navy fill it produced
     grey-on-green, which is what Faraz caught.

     The earlier guard only covered inline style="background:...". These
     components paint with Tailwind arbitrary classes instead, so the fills are
     listed here. They have to be listed rather than matched by prefix, because
     CSS cannot tell a dark hex from a light one and the pale tints in the same
     components (#DEF7E5, #F2F4F5, #DCDCDC...) must NOT be forced to white.
     ADDING A CASE STUDY: add its dark brand fills to this list. */
  .cd-exhibit :is(
      [class*="bg-[#0E8943]"], [class*="bg-[#0E7E3C]"],
      [class*="bg-[#174176]"], [class*="bg-[#114984]"],
      [class*="bg-[#2B8679]"], [class*="bg-[#1F6359]"], [class*="bg-[#1A4C49]"]
    ){ color:#fff !important; }
  .cd-exhibit :is(
      [class*="bg-[#0E8943]"], [class*="bg-[#0E7E3C]"],
      [class*="bg-[#174176]"], [class*="bg-[#114984]"],
      [class*="bg-[#2B8679]"], [class*="bg-[#1F6359]"], [class*="bg-[#1A4C49]"]
    ) *{ color:#fff !important; }
  /* The text-white/55 style labels go fully opaque too rather than staying
     translucent. At 55% over the brand green they only reached 3.2:1, and these
     are 10px labels. Weight and size carry the hierarchy instead of opacity. */
  .cd-exhibit :is(
      [class*="bg-[#0E8943]"], [class*="bg-[#0E7E3C]"],
      [class*="bg-[#174176]"], [class*="bg-[#114984]"],
      [class*="bg-[#2B8679]"], [class*="bg-[#1F6359]"], [class*="bg-[#1A4C49]"]
    ) [class*="text-white/"]{ color:#fff !important; }
  .cd-exhibit h3, .cd-exhibit h4{ color:var(--ink); }
  .cd-exhibit [class*="text-[#F5379B]"],
  .cd-exhibit [class*="text-[#F0186C]"],
  .cd-exhibit [class*="text-[#C71E73]"]{ color:var(--acc) !important; }
  .cd-exhibit [class*="bg-[#F5379B]"],
  .cd-exhibit [class*="bg-[#F0186C]"]{ background-color:var(--acc) !important; }
  .cd-exhibit [class*="border-[#F5379B]"],
  .cd-exhibit [class*="border-[#C71E73]"]{ border-color:var(--acc) !important; }
  .cd-exhibit svg [stroke="#F5379B"], .cd-exhibit svg [fill="#F5379B"]{ stroke:var(--acc); fill:var(--acc); }
  /* Tailwind arbitrary values compile to literal hex, so opacity variants have
     to be listed rather than matched by prefix. */
  .cd-exhibit [class*="bg-[#F5379B]/"]{ background-color:color-mix(in srgb, var(--acc) 8%, transparent) !important; }
  .cd-exhibit [class*="border-[#F5379B]/"]{ border-color:color-mix(in srgb, var(--acc) 30%, transparent) !important; }

  /* ── Thank-you close ──────────────────────────────────────────────
     Every case study is its own brand, so the closing chrome is painted in
     that project's accent rather than in a neutral site colour. Shape and
     size are fixed by the system; only the colour changes per case. */
  .cd-thanks{ background:var(--acc); color:#fff; padding:104px 0 96px; }
  /* .82 not .72: this rule serves all four accents, and on the lightest of
     them (Threadfold's burnt orange) 72% white lands at 4.35:1, under AA. */
  .cd-thanks .cd-eye{ color:rgba(255,255,255,.82); }
  .cd-thanks-h{ font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(2.6rem,6vw,4.6rem); line-height:1; letter-spacing:-.035em; margin:0 0 18px; }
  .cd-thanks-p{ font-size:18px; line-height:1.55; max-width:44ch; color:rgba(255,255,255,.86); margin:0; }
  .cd-next{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin:56px 0 44px; }
  @media (max-width:820px){ .cd-next{ grid-template-columns:1fr; gap:18px; } }
  .cd-next a{ text-decoration:none; color:#fff; display:block; }
  .cd-next-img{ aspect-ratio:16/10; overflow:hidden; border-radius:14px;
    border:1px solid rgba(255,255,255,.28); background:rgba(255,255,255,.08); }
  .cd-next-img img{ width:100%; height:100%; object-fit:cover; display:block;
    transition:transform .5s cubic-bezier(.16,1,.3,1); }
  .cd-next a:hover .cd-next-img img{ transform:scale(1.04); }
  .cd-next-t{ font-family:'Playfair Display',serif; font-weight:700; font-size:1.28rem;
    letter-spacing:-.02em; margin:16px 0 4px; }
  /* .78 not .7: at 70% these subtitles land at 4.39:1 on the brand panel,
     just under the 4.5:1 AA minimum for text this size. */
  .cd-next-k{ font-size:13.5px; color:rgba(255,255,255,.78); }

  .cd-end{ border-top:1px solid rgba(255,255,255,.24); padding:38px 0 0;
    display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
  /* Height and hover match the .cs-btn system the other case studies use, so
     every closing row behaves the same. The colours are inverted here because
     this band is painted in the case accent, not paper. */
  .cd-btn{ display:inline-flex; align-items:center; justify-content:center;
    min-height:52px; padding:0 26px; border-radius:9999px; font-size:15px;
    font-weight:600; text-decoration:none; background:#fff; color:var(--acc);
    white-space:nowrap; border:1px solid #fff; line-height:1;
    transition:background-color .16s ease-out, border-color .16s ease-out,
               color .16s ease-out, transform .16s ease-out; }
  .cd-btn-ghost{ background:transparent; color:#fff; border:1px solid rgba(255,255,255,.55); }
  .cd-btn:active{ transform:translateY(1px); }
  .cd-btn:focus-visible{ outline:2px solid #fff; outline-offset:3px; }
  @media (hover:hover) and (pointer:fine){
    .cd-btn:hover{ background:rgba(255,255,255,.88); border-color:rgba(255,255,255,.88); }
    .cd-btn-ghost:hover{ background:rgba(255,255,255,.14); border-color:#fff; color:#fff; }
  }

  @media (prefers-reduced-motion: reduce){ .cd *{ transition:none !important; } }
`;
