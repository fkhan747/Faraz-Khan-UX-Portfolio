/* Shared neon / comic-panel visual language, mirrored from the landing hero.
   Used by the About and Contact pages. All classes are ab- prefixed so nothing
   leaks into the case studies (which keep their own restrained styling). */

export const NEON_CSS = `
  /* Comic hard-shadow buttons (purple fill / yellow border / magenta shadow),
     with an RGB-split glitch tic on hover, exactly like the hero CTAs. */
  .ab-btn{
    --ab-rot: -1deg;
    position:relative; display:inline-flex; align-items:center; gap:8px;
    border-radius:12px; border:2px solid #F2D50F; padding:13px 26px;
    font-family:'Outfit',sans-serif; font-weight:700; font-size:15px;
    letter-spacing:0.01em; text-decoration:none; cursor:pointer;
    background:#7B2FBE; color:#F4F3FA; box-shadow:5px 5px 0 #F0186C;
    transform:rotate(var(--ab-rot));
    transition:transform 0.14s ease-out, box-shadow 0.14s ease-out;
  }
  .ab-btn-ghost{ --ab-rot: 1deg; background:transparent; box-shadow:5px 5px 0 #7B2FBE; }
  .ab-btn:active{ transform:translate(3px,3px) rotate(var(--ab-rot)) scale(0.97); box-shadow:2px 2px 0 #F0186C; }
  .ab-btn-ghost:active{ box-shadow:2px 2px 0 #7B2FBE; }
  .ab-btn:focus-visible{ outline:2px solid #17C3E8; outline-offset:3px; }
  @media (hover:hover) and (pointer:fine){
    .ab-btn:hover{ animation:ab-tic 0.9s steps(2,end) infinite; }
  }
  @keyframes ab-tic{
    0%,24%,100%{ text-shadow:none; }
    8%{ text-shadow:-2px 0 #F0186C, 2px 0 #F2D50F; transform:translate(-1px,1px) rotate(var(--ab-rot)); }
    16%{ text-shadow:2px 0 #F0186C, -2px 0 #F2D50F; transform:translate(1px,-1px) rotate(var(--ab-rot)); }
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

  /* Headline "o" with a comic-yellow dot. Self-contained (not the global
     .dot-o, whose --accent-yellow var is a stale alias for magenta), so the
     dot lands true yellow and nothing leaks into the case studies. */
  .ab-dot-o{ position:relative; display:inline-block; text-transform:lowercase; }
  .ab-dot-o::after{
    content:""; position:absolute; left:50%; top:50%;
    transform:translate(-50%,-45%);
    width:0.32em; height:0.32em; border-radius:50%;
    background:#F2D50F; box-shadow:0 0 0 2px #100210;
  }

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
  /* Comic panels: hard offset shadow, colored border, slight tilt, RGB-split
     glitch on hover (straightens up). Border/shadow cycle the four-pillar
     palette; grid cards alternate tilt for a scattered-panels feel. */
  .ab-card{
    --bd:#F2D50F; --sh:#F0186C; --tilt:-0.9deg;
    position:relative; background:#181126; border-radius:14px;
    border:2px solid var(--bd); box-shadow:6px 6px 0 var(--sh);
    transform:rotate(var(--tilt));
    transition:transform 0.16s ease-out, box-shadow 0.16s ease-out;
  }
  .ab-card:nth-of-type(4n+2){ --bd:#17C3E8; --sh:#7B2FBE; }
  .ab-card:nth-of-type(4n+3){ --bd:#F0186C; --sh:#F2D50F; }
  .ab-card:nth-of-type(4n+4){ --bd:#7B2FBE; --sh:#17C3E8; }
  .ab-card:nth-of-type(even){ --tilt:0.9deg; }
  .ab-card.ab-flat{ --tilt:0deg; }
  .ab-card.ab-c1{ --bd:#F2D50F; --sh:#F0186C; } .ab-card.ab-c2{ --bd:#17C3E8; --sh:#7B2FBE; }
  .ab-card.ab-c3{ --bd:#F0186C; --sh:#F2D50F; } .ab-card.ab-c4{ --bd:#7B2FBE; --sh:#17C3E8; }
  @media (hover:hover) and (pointer:fine){
    .ab-card:hover{ transform:rotate(0) translate(-2px,-2px); box-shadow:9px 9px 0 var(--sh); }
    .ab-card:hover > h3, .ab-card:hover .ab-card-t{ text-shadow:-2px 0 var(--sh), 2px 0 var(--bd); }
  }
  .ab-card:focus-within{ transform:rotate(0); }

  @media (prefers-reduced-motion: reduce){
    .ab-btn:hover, .ab-glitch, .ab-glitch::before, .ab-glitch::after, .ab-sq-1, .ab-sq-2, .ab-sq-3{ animation:none !important; }
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
