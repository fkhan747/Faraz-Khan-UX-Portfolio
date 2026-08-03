/* Shared visual language for the light-theme case studies.

   Follows the pilot: warm paper, Playfair display serif, one accent per case
   study taken from that project's own brand, hairline rules, generous space.

   The reading rhythm is borrowed from the Eleken reference Faraz sent: every
   section is a CLAIM as a heading, two or three short paragraphs underneath,
   then a visual with a plain caption. No section-number eyebrows, no abstract
   labels like "Research" or "Process". The heading says what I did.

   `--acc` is set per page so the same stylesheet serves every case study. */

export const CASE_CSS = `
  .cl{
    --paper:#EFEDE7; --ink:#171512; --muted:#6B665D; --line:#DCD7CC;
    background:var(--paper); color:var(--ink);
    font-family:'Outfit',system-ui,sans-serif;
  }
  .cl-wrap{ max-width:1120px; margin:0 auto; padding:0 32px; }
  .cl-read{ max-width:820px; }           /* the measure for all prose */

  /* ── Masthead ─────────────────────────────────────────────────────── */
  .cl-top{ position:sticky; top:0; z-index:30; background:rgba(239,237,231,.86);
    backdrop-filter:blur(10px); border-bottom:1px solid var(--line); }
  .cl-top-in{ max-width:1120px; margin:0 auto; padding:14px 32px;
    display:flex; align-items:center; justify-content:space-between; }
  .cl-back{ font-size:13.5px; color:var(--muted); text-decoration:none; }
  .cl-back:hover{ color:var(--ink); }
  .cl-mark{ font-family:'Playfair Display',serif; font-size:17px; letter-spacing:-.02em; }

  .cl-h1{ font-family:'Playfair Display',serif; font-weight:400;
    font-size:clamp(2.6rem,6vw,5.2rem); line-height:1; letter-spacing:-.034em; }
  .cl-deck{ font-size:clamp(1.15rem,1.9vw,1.5rem); line-height:1.45; color:var(--ink);
    max-width:24ch; margin-top:26px; }

  /* Facts strip under the hero */
  .cl-facts{ display:grid; grid-template-columns:repeat(4,1fr); gap:24px;
    border-top:1px solid var(--line); padding-top:22px; margin-top:52px; }
  @media (max-width:760px){ .cl-facts{ grid-template-columns:repeat(2,1fr); gap:18px; } }
  .cl-fact dt{ font-size:11.5px; letter-spacing:.13em; text-transform:uppercase; color:var(--muted); }
  .cl-fact dd{ font-size:15.5px; margin:6px 0 0; line-height:1.4; }

  /* ── Sections ─────────────────────────────────────────────────────── */
  .cl-sec{ padding:82px 0 0; }
  .cl-sec-first{ padding-top:62px; }
  .cl-h2{ font-family:'Playfair Display',serif; font-weight:400;
    font-size:clamp(1.7rem,3.1vw,2.5rem); line-height:1.14; letter-spacing:-.022em;
    max-width:26ch; margin-bottom:32px; }
  .cl-p{ font-size:17.5px; line-height:1.72; color:var(--ink); }
  .cl-p + .cl-p{ margin-top:32px; }
  .cl-p b{ font-weight:600; }
  .cl-quiet{ color:var(--muted); }

  /* Pull line: the one sentence per section worth saying out loud. */
  .cl-pull{ font-family:'Playfair Display',serif; font-size:clamp(1.3rem,2.3vw,1.85rem);
    line-height:1.32; letter-spacing:-.018em; margin:32px 0; 
    padding-left:22px; border-left:2px solid var(--acc); max-width:34ch; }

  /* ── Figures ──────────────────────────────────────────────────────── */
  .cl-fig{ margin:32px 0 0; position:relative; }
  .cl-fig img{ width:100%; display:block; border-radius:4px; border:1px solid var(--line);
    background:#fff; }
  .cl-fig figcaption{ font-size:13px; color:var(--muted); margin-top:12px; }
  .cl-fig-wide{ max-width:none; }
  .cl-duo{ display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
  @media (max-width:820px){ .cl-duo{ grid-template-columns:1fr; } }
  .cl-duo figure{ margin:0; }

  /* Small inline label used above a heading only where it earns it. */
  .cl-tag{ display:inline-block; font-size:11.5px; letter-spacing:.13em;
    text-transform:uppercase; color:var(--acc); margin-bottom:14px; }


  /* ── Artefact exhibits ────────────────────────────────────────────
     The IA / flow / persona / wireframe components were built for the dark
     page. Rather than fork them, they are re-themed in place here: the dark
     surface becomes paper, and the light-on-dark text tokens invert. One
     override set, so every case study picks it up for free. */
  .cl-exhibit{ margin-top:32px; }
  .cl-exhibit .dark-card{ background-color:#FFFFFF !important; border:1px solid var(--line); }
  .cl-exhibit .dark-card::before, .cl-exhibit .dark-card::after{ display:none !important; }
  .cl-exhibit [class*="text-[#F4F3FA]"],
  .cl-exhibit [class*="text-[#F7F5FF]"],
  .cl-exhibit [class*="text-[#EDEBF5]"]{ color:var(--ink) !important; }
  .cl-exhibit [class*="text-[#A29CB4]"],
  .cl-exhibit [class*="text-white"]{ color:var(--muted) !important; }
  .cl-exhibit [class*="border-white"]{ border-color:var(--line) !important; }
  .cl-exhibit [class*="bg-white/5"]{ background-color:rgba(23,21,18,.04) !important; }
  /* Anything that paints its own solid fill keeps its own white text. */
  .cl-exhibit [style*="background"] [class*="text-white"],
  .cl-exhibit [class*="text-white"][style*="background"]{ color:#fff !important; }
  .cl-exhibit h3, .cl-exhibit h4{ color:var(--ink); }
  /* The artefact components were authored with the old site magenta. Inside a
     case study the only accent allowed is that project's own brand colour, so
     every magenta token is remapped to --acc. */
  .cl-exhibit [class*="text-[#F5379B]"],
  .cl-exhibit [class*="text-[#F0186C]"],
  .cl-exhibit [class*="text-[#C71E73]"]{ color:var(--acc) !important; }
  .cl-exhibit [class*="bg-[#F5379B]"],
  .cl-exhibit [class*="bg-[#F0186C]"]{ background-color:var(--acc) !important; }
  .cl-exhibit [class*="border-[#F5379B]"],
  .cl-exhibit [class*="border-[#C71E73]"]{ border-color:var(--acc) !important; }
    .cl-exhibit svg [stroke="#F5379B"], .cl-exhibit svg [fill="#F5379B"]{ stroke:var(--acc); fill:var(--acc); }
  /* Tailwind arbitrary-value utilities compile to literal hex, so the opacity
     variants have to be listed explicitly rather than matched by prefix. */
  .cl-exhibit [class*="bg-[#F5379B]/"]{ background-color:color-mix(in srgb, var(--acc) 8%, transparent) !important; }
  .cl-exhibit [class*="border-[#F5379B]/"]{ border-color:color-mix(in srgb, var(--acc) 30%, transparent) !important; }

  /* ── Expand affordance ───────────────────────────────────────────
     Every figure is clickable into the shared Lightbox. The button is always
     present for discoverability rather than hover-only, which would hide it
     entirely on touch. */
  .cl-zoom{ position:absolute; top:12px; right:12px; z-index:2;
    width:34px; height:34px; display:grid; place-items:center;
    border-radius:6px; cursor:pointer; border:1px solid var(--line);
    background:rgba(255,255,255,.86); backdrop-filter:blur(6px);
    color:var(--ink); opacity:.72; transition:opacity .18s ease, background-color .18s ease; }
  .cl-fig:hover .cl-zoom{ opacity:1; background:#fff; }
  .cl-zoom:focus-visible{ outline:2px solid var(--acc); outline-offset:2px; opacity:1; }
  .cl-figbtn{ display:block; width:100%; padding:0; border:0; background:none; cursor:zoom-in; }

  /* ── Callout: the honest-scope box ────────────────────────────────── */
  .cl-note{ margin-top:44px; padding:26px 28px; background:var(--ink); color:var(--paper);
    border-radius:4px; }
  .cl-note p{ font-size:16.5px; line-height:1.66; }
  .cl-note p + p{ margin-top:.9em; }

  /* ── Footer nav ───────────────────────────────────────────────────── */
  .cl-end{ margin-top:96px; border-top:1px solid var(--line); padding:38px 0 90px;
    display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
  .cl-btn{ display:inline-block; padding:12px 24px; border-radius:9999px; font-size:15px;
    font-weight:600; text-decoration:none; background:var(--ink); color:var(--paper); }
  .cl-btn-ghost{ background:transparent; color:var(--ink); border:1px solid var(--ink); }

  @media (prefers-reduced-motion: reduce){ .cl *{ transition:none !important; } }
`;
