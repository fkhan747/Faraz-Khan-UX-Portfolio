/* Shared neon / comic-panel visual language, mirrored from the landing hero.
   Used by the About and Contact pages. All classes are ab- prefixed so nothing
   leaks into the case studies (which keep their own restrained styling). */

export const NEON_CSS = `
  /* Buttons: same shape as before (12px radius, 13/26 padding), but wearing the
     landing hero's restrained treatment — 1px hairline border, solid accent fill
     on primary, no hard offset shadow and no tilt. */
  .ab-btn{
    position:relative; display:inline-flex; align-items:center; justify-content:center; gap:8px;
    border-radius:12px; border:1px solid #F5379B; padding:13px 26px;
    font-family:'Outfit',sans-serif; font-weight:700; font-size:15px;
    letter-spacing:0.02em; text-decoration:none; cursor:pointer;
    background:#F5379B; color:#FFFFFF;
    transition:background-color 0.14s ease-out, border-color 0.14s ease-out, transform 0.14s ease-out;
  }
  .ab-btn-ghost{
    background:transparent; color:#F4F3FA;
    border-color:rgba(244,243,250,0.28);
  }
  .ab-btn:active{ transform:translateY(1px); }
  .ab-btn:focus-visible{ outline:2px solid #2E78FF; outline-offset:3px; }
  @media (hover:hover) and (pointer:fine){
    .ab-btn:hover{ background:#D81F7E; border-color:#D81F7E; }
    .ab-btn-ghost:hover{ background:transparent; border-color:rgba(244,243,250,0.6); }
  }

  /* Glass chips: mono, dark glass, glow dot, like the landing chips. */
  .ab-chip{
    display:inline-flex; align-items:center; gap:8px;
    padding:8px 15px; border-radius:9999px;
    background:rgba(24,17,38,0.7); border:1px solid #2C2542;
    backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
    font-family:'JetBrains Mono',ui-monospace,monospace; font-weight:600;
    font-size:12.5px; letter-spacing:0.04em; color:#F4F3FA; white-space:nowrap;
    transition:border-color 0.2s ease, color 0.2s ease;
  }
  @media (hover:hover) and (pointer:fine){
    .ab-chip:hover{ border-color:#F0186C; color:#fff; }
  }
  .ab-chip-dot{ width:6px; height:6px; border-radius:9999px; flex:none; background:#F0186C; box-shadow:0 0 10px rgba(240,24,108,0.8); }

  /* Rotating headline word */
  .ab-slot{ position:relative; display:inline-block; }
  .ab-slot-sizer{ visibility:hidden; }
  .ab-word{ position:absolute; left:0; top:0; white-space:nowrap; }
  .ab-word-in{ animation:ab-word-in 260ms cubic-bezier(0.23,1,0.32,1) both; }
  .ab-word-out{ animation:ab-word-out 260ms cubic-bezier(0.23,1,0.32,1) forwards; }
  @keyframes ab-word-in{ from{ opacity:0; transform:translateY(0.5em); filter:blur(6px); } to{ opacity:1; transform:translateY(0); filter:blur(0); } }
  @keyframes ab-word-out{ from{ opacity:1; transform:translateY(0); } to{ opacity:0; transform:translateY(-0.5em); filter:blur(6px); } }

  /* Section eyebrows glitch on a seeded stagger (occasional, not constant). */
  .ab-glitch{ position:relative; }
  .ab-glitch::before, .ab-glitch::after{
    content:attr(data-text); position:absolute; left:0; top:0; width:100%;
    clip-path:inset(0 0 100% 0); opacity:0.9; pointer-events:none;
  }
  .ab-glitch::before{ color:#F0186C; }
  .ab-glitch::after{ color:#17C3E8; }
  @media (hover:hover) and (pointer:fine){
    .ab-glitch{ animation:ab-eb-glitch 6s steps(1,end) infinite; }
    .ab-glitch::before{ animation:ab-eb-a 6s steps(1,end) infinite; }
    .ab-glitch::after{ animation:ab-eb-b 6s steps(1,end) infinite; }
  }
  @keyframes ab-eb-glitch{ 0%,4%,100%{ transform:translate(0,0); } 1%{ transform:translate(-2px,0); } 2%{ transform:translate(2px,0); } 3%{ transform:translate(-1px,0); } }
  @keyframes ab-eb-a{ 0%,4%,100%{ clip-path:inset(0 0 100% 0); } 1%{ clip-path:inset(0 0 40% -4px); transform:translate(-3px,0); } 2%{ clip-path:inset(60% 0 0 -4px); transform:translate(-2px,1px); } }
  @keyframes ab-eb-b{ 0%,4%,100%{ clip-path:inset(0 0 100% 0); } 1%{ clip-path:inset(55% 0 0 4px); transform:translate(3px,0); } 2%{ clip-path:inset(0 0 55% 4px); transform:translate(2px,-1px); } }

  /* Ambient spark squiggles, dim, occasionally crackle. */
  .ab-sq{ position:absolute; overflow:visible; opacity:0.28; pointer-events:none; z-index:0; }
  @media (hover:hover) and (pointer:fine){
    .ab-sq-1{ animation:ab-spark 5.5s steps(1,end) infinite; }
    .ab-sq-2{ animation:ab-spark 6.5s steps(1,end) 0.4s infinite; }
    .ab-sq-3{ animation:ab-spark 7s steps(1,end) 0.8s infinite; }
  }
  @keyframes ab-spark{
    0%,90%,100%{ opacity:0.28; transform:translate(0,0) scale(1); }
    92%{ opacity:1; transform:translate(3px,-3px) scale(1.15); }
    94%{ opacity:0.4; transform:translate(-3px,2px) scale(0.9); }
    96%{ opacity:1; transform:translate(2px,2px) scale(1.08); }
  }
  /* Panels: flat, square to the grid, hairline border. No coloured borders, no
     hard offset shadows, no tilt. Hover lifts very slightly and warms the
     border rather than throwing a coloured block behind the card.
     (The ab-c1..c4 classes are kept so existing markup keeps working; they no
     longer tint the border, they only nudge the hover accent.) */
  .ab-card{
    --accent:rgba(244,243,250,0.34);
    position:relative; background:#181126; border-radius:14px;
    border:1px solid rgba(244,243,250,0.12);
    transition:transform 0.16s ease-out, border-color 0.16s ease-out, background-color 0.16s ease-out;
  }
  .ab-card.ab-c1, .ab-card.ab-c2, .ab-card.ab-c3, .ab-card.ab-c4, .ab-card.ab-flat{ --accent:rgba(244,243,250,0.34); }
  @media (hover:hover) and (pointer:fine){
    .ab-card:hover{ transform:translateY(-2px); border-color:var(--accent); background:#1C1430; }
  }
  .ab-card:focus-within{ border-color:var(--accent); }

  @media (prefers-reduced-motion: reduce){
    .ab-glitch, .ab-glitch::before, .ab-glitch::after, .ab-sq-1, .ab-sq-2, .ab-sq-3{ animation:none !important; }
    .ab-glitch::before, .ab-glitch::after{ display:none; }
    .ab-card{ transform:none !important; }
  }
`;

export function Squiggle({ className, color, rot }) {
  return (
    <svg className={`ab-sq ${className}`} style={{ transform: `rotate(${rot}deg)` }} viewBox="0 0 72 18" width="64" aria-hidden="true" focusable="false">
      <path d="M3 12 Q10 3 17 10 T31 10 T45 10 T59 10 L69 6" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
