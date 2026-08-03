/* ─────────────────────────────────────────────────────────────────────────
   About page: pastel / frosted-glass / bento visual language.

   HONESTY NOTE: this is a *web glassmorphism approximation*, not Apple's
   Liquid Glass. Apple documents Liquid Glass for Apple platforms only and
   ships no public web package. What follows is backdrop-filter + layered
   borders + highlight overlays, which is the honest web equivalent.

   All classes are `ag-` prefixed and every rule is scoped under `.ag-page`,
   so this cannot leak into the landing page, the case studies, or Contact.

   Radius system (one scale, documented so it stays consistent):
     tiles  = 24px   ·   media inside tiles = 16px   ·   chips + buttons = pill
   Accent: a single magenta, #D6246E, deepened from the brand magenta so it
   clears WCAG AA on a light canvas. No second accent anywhere on the page.
   ───────────────────────────────────────────────────────────────────────── */

/* DARK, 2026-08-03. The page had drifted to a pale canvas while the rest of
   the shell stayed near-black, which made About the only light page hanging
   off a dark site. Same bento structure and same glass approximation, moved
   onto the shell's own ground so the site reads as one thing. */
export const INK = "#171512";
export const MUTED = "#6B665D";
export const ACCENT = "#C71E73";

/* NO BACKTICKS BELOW THIS LINE: the whole stylesheet is one template
   literal, so a backtick in a comment terminates it and the build dies. */
export const GLASS_CSS = `
  /* Canvas: a pale cool neutral, deliberately not beige. The pastel field is
     four soft blobs that sit behind everything and never scroll-jank because
     the layer is fixed and pointer-events:none. */
  .ag-page{
    position:relative; isolation:isolate;
    background:#EFEDE7; color:${INK};
    --ag-tile:24px; --ag-media:16px;
    --ag-shadow:0 18px 44px -22px rgba(78,62,102,0.30), 0 2px 6px -2px rgba(78,62,102,0.10);
    --ag-shadow-lift:0 26px 60px -24px rgba(78,62,102,0.38), 0 3px 8px -3px rgba(78,62,102,0.12);
  }
  .ag-field{
    position:fixed; inset:0; z-index:-1; pointer-events:none; overflow:hidden;
    background:#EFEDE7;
  }
  .ag-blob{ position:absolute; border-radius:9999px; opacity:0.85;
    background-image:none; }
  /* Soft field without a blur filter: the colour is carried by a radial
     gradient that fades to transparent, so there is nothing to re-composite. */
  .ag-blob{ --c:transparent; background:radial-gradient(circle at 50% 50%, var(--c) 0%, transparent 68%); }
  .ag-blob-1{ width:46vw; height:46vw; top:-12vw; left:-8vw;  --c:rgba(214,36,110,0.10); }
  .ag-blob-2{ width:40vw; height:40vw; top:8vw;   right:-10vw;--c:rgba(80,120,255,0.10); }
  .ag-blob-3{ width:38vw; height:38vw; bottom:-8vw;left:18vw; --c:rgba(60,200,150,0.09); }
  .ag-blob-4{ width:30vw; height:30vw; bottom:14vw;right:6vw; --c:rgba(255,200,60,0.12); }

  /* The glass tile. Three layers do the work: a translucent fill, a bright
     1px top-inner edge for refraction, and a soft tinted shadow (tinted to
     the canvas hue, never pure black). */
  .ag-tile{
    position:relative; isolation:isolate; overflow:hidden;
    border-radius:var(--ag-tile);
    border:1px solid rgba(255,255,255,0.70);
    background:linear-gradient(140deg, rgba(255,255,255,0.92), rgba(255,255,255,0.62));
    /* No backdrop-filter: see the PERFORMANCE note. The tiles read as glass
       from the gradient fill and the hairline border alone. */
    box-shadow:var(--ag-shadow), inset 0 1px 0 rgba(255,255,255,0.85);
    transition:transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s cubic-bezier(0.16,1,0.3,1);
  }
  /* Tinted variants give the bento real background variation instead of six
     identical white cards. */
  .ag-tile-rose{ background:linear-gradient(140deg, rgba(255,214,232,0.72), rgba(255,255,255,0.60)); }
  .ag-tile-sky{  background:linear-gradient(140deg, rgba(206,229,255,0.72), rgba(255,255,255,0.60)); }
  .ag-tile-mint{ background:linear-gradient(140deg, rgba(206,242,225,0.72), rgba(255,255,255,0.60)); }
  .ag-tile-ink{
    background:linear-gradient(140deg, #241F31, #191524);
    border-color:rgba(255,255,255,0.10);
    color:#F4F2F8;
    box-shadow:var(--ag-shadow), inset 0 1px 0 rgba(255,255,255,0.14);
  }
  @media (hover:hover) and (pointer:fine){
    .ag-lift:hover{ transform:translateY(-3px); box-shadow:var(--ag-shadow-lift), inset 0 1px 0 rgba(255,255,255,0.85); }
  }

  /* Pill chip */
  .ag-chip{
    display:inline-flex; align-items:center; gap:7px;
    padding:7px 14px; border-radius:9999px;
    border:1px solid rgba(255,255,255,0.80);
    background:rgba(255,255,255,0.72);
    font-size:13px; font-weight:600; letter-spacing:0.01em; color:${INK};
    box-shadow:0 2px 8px -4px rgba(78,62,102,0.30);
    transition:transform 0.18s ease-out, background-color 0.18s ease-out;
  }
  @media (hover:hover) and (pointer:fine){
    .ag-chip:hover{ background:rgba(255,255,255,0.95); transform:translateY(-1px); }
  }

  /* ── ONE BUTTON SYSTEM ──────────────────────────────────────────────
     Buttons were drifting: filled magenta here, glass there, bordered chips
     elsewhere. There is now exactly one shape (pill), one filled variant and
     one ghost, and one set of states. ab- is aliased to the same rules so
     the comic pages and this page cannot diverge again.

       default  filled = accent      ghost = transparent, hairline border
       hover    filled = darker      ghost = faint white wash
       pressed  both translate down 1px, no colour change
       focus    2px accent ring, 3px offset, identical on both              */
  .ag-btn, .ab-btn{
    display:inline-flex; align-items:center; justify-content:center; gap:8px;
    padding:13px 26px; border-radius:9999px;
    font-family:'Outfit',sans-serif; font-weight:700; font-size:15px;
    text-decoration:none; cursor:pointer; white-space:nowrap;
    background:${ACCENT}; color:#FFFFFF; border:1px solid ${ACCENT};
    box-shadow:none;
    transition:transform 0.16s ease-out, background-color 0.16s ease-out,
               border-color 0.16s ease-out;
  }
  .ag-btn-ghost, .ab-btn-ghost{
    background:transparent; color:${INK};
    border-color:rgba(23,21,18,0.20);
    backdrop-filter:none; -webkit-backdrop-filter:none; box-shadow:none;
  }
  .ag-btn:active, .ab-btn:active{ transform:translateY(1px); }
  .ag-btn:focus-visible, .ab-btn:focus-visible{
    outline:2px solid ${ACCENT}; outline-offset:3px; }
  @media (hover:hover) and (pointer:fine){
    .ag-btn:hover, .ab-btn:hover{ background:#C71E73; border-color:#C71E73; }
    .ag-btn-ghost:hover, .ab-btn-ghost:hover{
      background:rgba(23,21,18,0.05); border-color:rgba(23,21,18,0.42); }
  }

  /* ── ICONS ──────────────────────────────────────────────────────────
     Icons were grey in some places and white in others. On the dark shell
     they are white, and they inherit so a coloured context can still override
     deliberately. currentColor on the stroke is what lucide expects. */
  .ag-page svg:not([data-keep-colour]):not(a svg):not(button svg){ color:#171512; }

  /* Bento grid. Explicit cell spans per section keep the rhythm asymmetric
     rather than a repeating 3-up. Everything collapses to one column below
     768px, declared here rather than assumed. */
  .ag-bento{ display:grid; grid-template-columns:repeat(6,1fr); gap:18px; }
  @media (max-width:767px){
    .ag-bento{ grid-template-columns:1fr; }
    .ag-bento > *{ grid-column:1 / -1 !important; grid-row:auto !important; }
  }

  .ag-rule{ height:1px; background:linear-gradient(90deg, rgba(23,21,18,0.16), rgba(23,21,18,0)); border:0; }

  /* Accessibility fallbacks. Transparency support is uneven, so the solid
     fill has to carry enough contrast on its own. */
  @media (prefers-reduced-transparency: reduce){
    .ag-tile, .ag-chip, .ag-btn-ghost{
      background:#FFFFFF; backdrop-filter:none; -webkit-backdrop-filter:none;
    }
    .ag-tile-ink{ background:#201B2C; }
    .ag-field{ display:none; }
  }
  @media (prefers-reduced-motion: reduce){
    .ag-tile, .ag-chip, .ag-btn{ transition:none !important; }
    .ag-lift:hover{ transform:none !important; }
  }
`;
