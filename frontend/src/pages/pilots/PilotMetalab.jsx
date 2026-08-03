import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

/* REDESIGN PILOT: snap-scrolled brand-colour sequence.

   Changes in this pass:
   1. SNAP SCROLL. The pilot root is its own scroll container with
      scroll-snap-type:y mandatory, so each project occupies exactly one
      screen and the wheel/trackpad swaps pages rather than scrolling
      continuously. Three entry animations are switchable via ?t=1|2|3.
   2. UI AS TEXTURE. Product screens are back, but cropped hard and scaled
      up so they read as material rather than as a floating window. Each
      panel names the crop so it is clear what you are looking at.
   3. NAME REVEAL. The intro sets FARAZ inside a field of dimmed letters,
      after the reference: the name resolves out of noise.
   4. SCROLL CUE on the intro panel only.
   5. NAV is a scrubber spine, not a pill list. See NOTE below.
   6. LINE-ART PORTRAIT generated from the real photograph.

   NOTE on the nav: three candidate sites for nav research (igloo.inc,
   locomotive.ca, cosmos.so) were blocked by the browsing policy, so this
   is built from established pattern vocabulary rather than from those
   specific references. The spine reads as a measuring instrument: ticks
   for each project, the active one extended and labelled, length encoding
   position in the sequence. It doubles as a progress indicator, which a
   pill list cannot do. */

const PANELS = [
  {
    id: "intro",
    n: "00",
    rail: "Faraz Khan",
    bg: "#EFEDE7",
    pale: true,
    lead: "Eleven years making dense, complicated software feel obvious. Enterprise dashboards, lending flows, analytics tools, and the AI layers going on top of them.",
  },
  {
    id: "meridian",
    n: "01",
    rail: "Meridian",
    name: "Meridian",
    kind: "Analytics · Power BI",
    lead: "One analytics platform for an entire university, built so leaders can read it in seconds instead of minutes.",
    bg: "#8E2131",
    swatch: "#A32638",
    cover: "/meridian/cover.jpg",
    to: "/pilot/case/meridian",
  },
  {
    id: "finvista",
    n: "02",
    rail: "FinVista",
    name: "FinVista",
    kind: "Fintech · Native Android",
    lead: "A lending app run by sales staff, designed around the moments they turn the phone around and hand it to the customer.",
    bg: "#16653C",
    swatch: "#1F7A48",
    cover: "/finvista/cover.jpg",
    to: "/case/finvista",
  },
  {
    id: "aurora",
    n: "03",
    rail: "Aurora",
    name: "Aurora",
    kind: "Marketing automation",
    lead: "Recurring-campaign setup dropped from three clicks to one, with the AI writer sitting where you already type.",
    bg: "#1F6359",
    swatch: "#2B8679",
    cover: "/aurora/cover.jpg",
    to: "/case/aurora",
  },
  {
    id: "threadfold",
    n: "04",
    rail: "Threadfold",
    name: "Threadfold",
    kind: "Crowdfunding commerce",
    lead: "India's first crowdfunding platform for custom apparel. Design a tee, set a goal, sell it before one is printed.",
    bg: "#B02F2F",
    swatch: "#F04848",
    cover: "/threadfold/cover.jpg",
    to: "/case/threadfold",
  },
  {
    id: "crux",
    n: "05",
    rail: "Crux",
    name: "Crux",
    kind: "Concept · Agent supervision",
    lead: "Five AI agents run a bank's daily operations while one human keeps every consequential call.",
    bg: "#161B22",
    swatch: "#E8519B",
    to: "/case/crux",
  },
  {
    id: "slate",
    n: "06",
    rail: "Slate",
    name: "Slate",
    kind: "Concept · AI recruiting",
    lead: "An AI recruiting workspace that sources, ranks and drafts, but never sends. The recruiter decides.",
    bg: "#1257B8",
    swatch: "#1A73E8",
    to: "/case/slate",
  },
  {
    id: "almanac",
    n: "07",
    rail: "Almanac",
    name: "Almanac",
    kind: "Concept · Knowledge engine",
    lead: "Ask in plain language, get one answer built from your company's own documents, every claim cited.",
    bg: "#0A6E76",
    swatch: "#0E9CA6",
    to: "/case/almanac",
  },
  { id: "all", n: "08", rail: "Contact", bg: "#171512", closing: true },
];

/* The name-reveal grid. FARAZ sits on the middle row; everything else is
   filler at low opacity, so the name resolves out of the noise. */
const GRID_ROWS = [
  ["K", "M", "T", "S", "V", "R", "P"],
  ["Q", "F", "A", "R", "A", "Z", "L"],
  ["X", "D", "H", "W", "J", "B", "N"],
];
const NAME_CELLS = new Set(["1-1", "1-2", "1-3", "1-4", "1-5"]);

const CSS = `
  .pm{
    height:100dvh; overflow-y:scroll; overflow-x:hidden;
    scroll-snap-type:y mandatory; scroll-behavior:smooth;
    position:relative; color:#fff; scrollbar-width:none;
  }
  .pm::-webkit-scrollbar{ display:none; }
  @media (prefers-reduced-motion: reduce){ .pm{ scroll-behavior:auto; } }

  .pm-field{ position:fixed; inset:0; z-index:0; transition:background-color 620ms cubic-bezier(.4,0,.2,1); }
  @media (prefers-reduced-motion: reduce){ .pm-field{ transition:none; } }

  .pm-panel{
    position:relative; z-index:1; height:100dvh; scroll-snap-align:start; scroll-snap-stop:always;
    display:flex; align-items:center; overflow:hidden;
  }
  .pm-inner{ position:relative; z-index:3; width:100%; padding:0 50% 0 252px; }
  @media (max-width:1279px){ .pm-inner{ padding-left:232px; padding-right:52%; } }
  @media (max-width:1023px){ .pm-inner{ padding:120px 22px 300px; } }

  /* ── ENTRY ANIMATIONS ─────────────────────────────────────────────
     Every variant animates transform + opacity only, and every one is
     switched off under prefers-reduced-motion. */
  .pm-anim{ will-change:transform,opacity; }
  /* T1 LIFT: copy rises and settles, media eases in behind it. */
  .t1 .pm-anim{ opacity:0; transform:translateY(30px); transition:opacity .62s cubic-bezier(.16,1,.3,1), transform .62s cubic-bezier(.16,1,.3,1); }
  .t1 .pm-anim-2{ transition-delay:.09s; } .t1 .pm-anim-3{ transition-delay:.17s; }
  .t1 [data-on="1"] .pm-anim{ opacity:1; transform:none; }
  .t1 .pm-media{ opacity:0; transform:scale(1.06); transition:opacity .8s ease, transform .9s cubic-bezier(.16,1,.3,1); }
  .t1 [data-on="1"] .pm-media{ opacity:1; transform:none; }

  /* T2 PUSH: the panel arrives as a slab from below, like a screen swap. */
  .t2 .pm-inner, .t2 .pm-media{ transform:translateY(46px); opacity:0;
    transition:transform .58s cubic-bezier(.33,1,.68,1), opacity .42s ease; }
  .t2 .pm-media{ transform:translateY(70px); transition-delay:.05s; }
  .t2 [data-on="1"] .pm-inner, .t2 [data-on="1"] .pm-media{ transform:none; opacity:1; }

  /* T3 CURTAIN: the media wipes open, the copy is unmasked line by line. */
  .t3 .pm-media{ clip-path:inset(0 0 0 100%); transition:clip-path .78s cubic-bezier(.76,0,.24,1); }
  .t3 [data-on="1"] .pm-media{ clip-path:inset(0 0 0 0); }
  .t3 .pm-anim{ clip-path:inset(0 0 100% 0); opacity:0;
    transition:clip-path .62s cubic-bezier(.76,0,.24,1), opacity .4s ease; }
  .t3 .pm-anim-2{ transition-delay:.1s; } .t3 .pm-anim-3{ transition-delay:.2s; }
  .t3 [data-on="1"] .pm-anim{ clip-path:inset(0 0 0 0); opacity:1; }


  /* T4 CARPET ROLL. The panel is a sheet pinned at one edge. Scrolling
     forward unrolls it downward from the top; scrolling back rolls it up
     again. The inner content counter-translates so it is *revealed* rather
     than squashed, which is what sells the roll rather than a wipe. A
     bright leading edge rides the boundary like the lip of the roll. */
  .t4 .pm-panel{ perspective:1800px; }
  .pm-roll{ position:absolute; inset:0; display:flex; align-items:center; }
  .t4 .pm-roll{
    transform-origin:top center;
    clip-path:inset(0 0 100% 0);
    transition:clip-path .82s cubic-bezier(.62,.02,.24,1), transform .82s cubic-bezier(.62,.02,.24,1);
    transform:rotateX(9deg);
  }
  .t4 .pm-roll > *{ transform:translateY(-12%); transition:transform .82s cubic-bezier(.62,.02,.24,1); }
  .t4 [data-on="1"] .pm-roll{ clip-path:inset(0 0 0 0); transform:rotateX(0deg); }
  .t4 [data-on="1"] .pm-roll > *{ transform:none; }
  /* Rolling back up: pin the sheet at the bottom instead. */
  .t4[data-dir="up"] .pm-roll{ transform-origin:bottom center; clip-path:inset(100% 0 0 0); transform:rotateX(-9deg); }
  .t4[data-dir="up"] .pm-roll > *{ transform:translateY(14%); }
  .t4[data-dir="up"] [data-on="1"] .pm-roll{ clip-path:inset(0 0 0 0); transform:rotateX(0deg); }
  .t4[data-dir="up"] [data-on="1"] .pm-roll > *{ transform:none; }
  /* The lip of the roll. */
  .t4 .pm-lip{
    position:absolute; left:0; right:0; height:2px; opacity:0; pointer-events:none; z-index:6;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,.85), transparent);
    box-shadow:0 0 26px 6px rgba(255,255,255,.28);
    transition:top .82s cubic-bezier(.62,.02,.24,1), opacity .3s ease;
    top:0;
  }
  .t4 [data-on="0"] .pm-lip{ opacity:.9; }
  .t4 [data-on="1"] .pm-lip{ top:100%; opacity:0; }
  .t4[data-dir="up"] .pm-lip{ top:100%; }
  .t4[data-dir="up"] [data-on="1"] .pm-lip{ top:0; }
  @media (prefers-reduced-motion: reduce){
    .t4 .pm-roll{ clip-path:none !important; transform:none !important; transition:none !important; }
    .t4 .pm-roll > *{ transform:none !important; }
    .t4 .pm-lip{ display:none; }
  }

  @media (prefers-reduced-motion: reduce){
    .pm-anim, .pm-media, .pm-inner{ opacity:1 !important; transform:none !important; clip-path:none !important; transition:none !important; }
  }

  /* ── MEDIA ────────────────────────────────────────────────────────── */
  .pm-media{ position:absolute; top:0; right:0; bottom:0; width:46%; z-index:2; }
  @media (max-width:1023px){ .pm-media{ top:auto; height:300px; width:100%; } }
  .pm-cover, .pm-detail{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
    clip-path:polygon(14% 0, 100% 0, 100% 100%, 0 100%); }
  @media (max-width:1023px){ .pm-cover, .pm-detail{ clip-path:none; } }
  .pm-scrim{ position:absolute; inset:0; clip-path:polygon(14% 0, 100% 0, 100% 100%, 0 100%);
    mix-blend-mode:multiply; opacity:.62; }
  @media (max-width:1023px){ .pm-scrim{ clip-path:none; } }

  /* ── SCRUBBER SPINE (nav) ─────────────────────────────────────────
     The label sits ABOVE its line rather than beside it, so long names
     never push the content column across, and the ticks can breathe. */
  .pm-spine{ position:fixed; left:0; top:50%; transform:translateY(-50%); z-index:40;
    display:flex; flex-direction:column; gap:26px; padding-left:34px; }
  .pm-tick{ position:relative; display:flex; flex-direction:column; align-items:flex-start; gap:7px;
    background:none; border:0; cursor:pointer; padding:0; }
  .pm-tick span{ font-size:12.5px; letter-spacing:.02em; line-height:1; white-space:nowrap;
    color:rgba(255,255,255,.55); opacity:0; transform:translateY(5px);
    transition:opacity .3s ease, transform .34s cubic-bezier(.16,1,.3,1), color .3s ease; }
  .pm-tick i{ display:block; height:1px; width:26px; background:rgba(255,255,255,.42);
    transition:width .34s cubic-bezier(.16,1,.3,1), background-color .34s ease; }
  .pm-tick:hover span{ opacity:.9; transform:none; }
  .pm-tick:hover i{ width:52px; background:rgba(255,255,255,.85); }
  .pm-tick[aria-current="true"] span{ opacity:1; transform:none; color:#fff; }
  .pm-tick[aria-current="true"] i{ width:86px; background:#fff; }
  .pm-spine-pale .pm-tick i{ background:rgba(23,21,18,.32); }
  .pm-spine-pale .pm-tick span{ color:rgba(23,21,18,.55); }
  .pm-spine-pale .pm-tick:hover i, .pm-spine-pale .pm-tick[aria-current="true"] i{ background:#171512; }
  .pm-spine-pale .pm-tick[aria-current="true"] span{ color:#171512; }
  @media (max-width:1023px){
    .pm-spine{ left:0; right:0; top:auto; bottom:0; transform:none; flex-direction:row;
      justify-content:center; gap:10px; padding:14px 0 18px; background:linear-gradient(transparent, rgba(0,0,0,.35)); }
    .pm-tick span{ display:none; }
    .pm-tick i{ width:18px; height:2px; }
    .pm-tick[aria-current="true"] i{ width:34px; }
  }

  /* ── CHROME ───────────────────────────────────────────────────────── */
  .pm-top{ position:fixed; top:0; left:0; right:0; z-index:50; display:flex;
    align-items:center; justify-content:space-between; padding:22px 28px; pointer-events:none; }
  .pm-top > *{ pointer-events:auto; }
  .pm-mark{ font-family:'Playfair Display',serif; font-size:18px; letter-spacing:-.02em; }
  .pm-count{ font-size:12px; letter-spacing:.14em; }

  .pm-name{ font-family:'Playfair Display',serif; font-weight:400;
    font-size:clamp(2.4rem,5.4vw,5.6rem); line-height:1; letter-spacing:-.032em; }
  .pm-lead{ font-size:16px; line-height:1.64; max-width:30ch; color:rgba(255,255,255,.82); }
  .pm-kind{ font-size:13px; color:rgba(255,255,255,.62); }
  .pm-swatch{ display:inline-flex; align-items:center; gap:8px; font-size:12px; color:rgba(255,255,255,.55); }
  .pm-swatch i{ width:10px; height:10px; border-radius:2px; }

  .pm-cta{ display:inline-block; padding:11px 22px; border-radius:9999px; font-size:14.5px;
    font-weight:600; text-decoration:none; border:0; cursor:pointer; font-family:inherit; }

  /* ── NAME GRID ────────────────────────────────────────────────────── */
  .pm-grid{ display:grid; grid-template-rows:repeat(3,auto); gap:6px; }
  .pm-grid-row{ display:flex; gap:clamp(14px,2.4vw,34px); }
  .pm-cell{ font-family:'Playfair Display',serif; line-height:1;
    font-size:clamp(1.6rem,3.4vw,3.2rem); color:rgba(23,21,18,.14); transition:color .5s ease; }
  .pm-cell-on{ color:#171512; }

  /* ── SCROLL CUE ───────────────────────────────────────────────────── */
  .pm-cue{ position:absolute; left:252px; bottom:44px; display:flex; align-items:center; gap:12px;
    font-size:11.5px; letter-spacing:.16em; color:rgba(23,21,18,.5); }
  .pm-cue-track{ position:relative; width:1px; height:38px; background:rgba(23,21,18,.2); overflow:hidden; }
  .pm-cue-track::after{ content:""; position:absolute; left:0; top:-40%; width:1px; height:40%;
    background:#171512; animation:pm-drop 1.9s cubic-bezier(.5,0,.5,1) infinite; }
  @keyframes pm-drop{ 0%{ top:-40%; } 60%,100%{ top:100%; } }
  @media (prefers-reduced-motion: reduce){ .pm-cue-track::after{ animation:none; top:0; } }
  @media (max-width:1023px){ .pm-cue{ left:22px; bottom:96px; } }
`;

const TRANSITIONS = { 4: "Roll", 1: "Lift", 2: "Push", 3: "Curtain" };

export default function PilotMetalab() {
  const [params, setParams] = useSearchParams();
  const t = ["1", "2", "3", "4"].includes(params.get("t")) ? params.get("t") : "4";
  const [active, setActive] = useState("intro");
  const [dir, setDir] = useState("down");
  const scroller = useRef(null);
  const refs = useRef({});
  const current = PANELS.find((p) => p.id === active) || PANELS[0];
  const pale = !!current.pale;

  useEffect(() => {
    const root = scroller.current;
    const els = Object.values(refs.current).filter(Boolean);
    if (!root || !els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.dataset.panel);
      },
      { root, threshold: [0.35, 0.6, 0.9] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Direction drives which edge the carpet hinges from. Read off the
     scroll container in a passive listener that only writes on change. */
  useEffect(() => {
    const el = scroller.current;
    if (!el) return undefined;
    let last = el.scrollTop;
    const onScroll = () => {
      const now = el.scrollTop;
      if (Math.abs(now - last) < 6) return;
      setDir((d) => {
        const next = now > last ? "down" : "up";
        last = now;
        return next === d ? d : next;
      });
      last = now;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (id) => refs.current[id]?.scrollIntoView({ block: "start" });

  return (
    <div className={`pm t${t}`} data-dir={dir} ref={scroller}>
      <style>{CSS}</style>
      <div className="pm-field" style={{ backgroundColor: current.bg }} aria-hidden="true" />

      <div className="pm-top" style={{ color: pale ? "#171512" : "#fff" }}>
        <span className="pm-mark">Faraz Khan</span>
        <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* transition switcher: pilot-only chrome */}
          <span style={{ display: "flex", gap: 6, flexWrap: "nowrap", fontFamily: "ui-monospace,monospace", fontSize: 11 }}>
            {Object.entries(TRANSITIONS).map(([k, label]) => (
              <button key={k} type="button"
                onClick={() => setParams({ t: k }, { replace: true })}
                style={{
                  padding: "5px 10px", borderRadius: 5, cursor: "pointer", font: "inherit", whiteSpace: "nowrap",
                  border: `1px solid ${pale ? "rgba(23,21,18,.28)" : "rgba(255,255,255,.34)"}`,
                  background: t === k ? (pale ? "#171512" : "#fff") : "transparent",
                  color: t === k ? (pale ? "#EFEDE7" : "#171512") : "inherit",
                }}>
                {k} {label}
              </button>
            ))}
          </span>
          <span className="pm-count">{current.n} / 08</span>
        </span>
      </div>

      {/* NAV: scrubber spine */}
      <nav className={`pm-spine ${pale ? "pm-spine-pale" : ""}`} aria-label="Work">
        {PANELS.map((p) => (
          <button key={p.id} type="button" className="pm-tick"
            aria-current={active === p.id ? "true" : undefined}
            onClick={() => jumpTo(p.id)}>
            <span>{p.rail}</span><i />
          </button>
        ))}
      </nav>

      {PANELS.map((p) => (
        <section key={p.id} data-panel={p.id} data-on={active === p.id ? "1" : "0"}
          ref={(el) => { refs.current[p.id] = el; }} className="pm-panel">
          <span className="pm-lip" aria-hidden="true" />
          <div className="pm-roll">

          {p.cover && (
            <div className="pm-media" aria-hidden="true">
              <img className="pm-cover" src={p.cover} alt="" loading="lazy" />
              <span className="pm-scrim" style={{ background: p.bg }} />
            </div>
          )}

          <div className="pm-inner">
            {p.id === "intro" && (
              <div style={{ color: "#171512" }}>
                <div className="pm-grid pm-anim" aria-label="Faraz">
                  {GRID_ROWS.map((row, r) => (
                    <div className="pm-grid-row" key={r}>
                      {row.map((ch, c) => (
                        <span key={c} className={`pm-cell ${NAME_CELLS.has(`${r}-${c}`) ? "pm-cell-on" : ""}`}
                          aria-hidden={!NAME_CELLS.has(`${r}-${c}`)}>{ch}</span>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="pm-anim pm-anim-2" style={{ fontSize: 13, margin: "26px 0 0", color: "rgba(23,21,18,.6)" }}>
                  Senior UX Lead. Pune, India.
                </p>
                <p className="pm-anim pm-anim-2" style={{ fontSize: 17, lineHeight: 1.62, marginTop: 14, maxWidth: "44ch", color: "rgba(23,21,18,.72)" }}>{p.lead}</p>
                <div className="pm-anim pm-anim-3" style={{ marginTop: 32, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button type="button" onClick={() => jumpTo("meridian")} className="pm-cta"
                    style={{ background: "#171512", color: "#EFEDE7", fontWeight: 600 }}>See the work</button>
                  <a href="/files/Faraz_Khan_Resume.pdf" className="pm-cta"
                    style={{ background: "transparent", color: "#171512", border: "1px solid #171512" }}>Résumé</a>
                </div>
              </div>
            )}

            {p.closing && (
              <div>
                <h2 className="pm-name pm-anim" style={{ maxWidth: "13ch" }}>Have an idea worth shipping?</h2>
                <div className="pm-anim pm-anim-2" style={{ marginTop: 38, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link to="/contact" className="pm-cta" style={{ background: "#EFEDE7", color: "#171512" }}>Get in touch</Link>
                  <Link to="/projects" className="pm-cta" style={{ background: "transparent", color: "#EFEDE7", border: "1px solid #EFEDE7" }}>All work</Link>
                </div>
              </div>
            )}

            {p.name && (
              <div style={{ maxWidth: 520 }}>
                <p className="pm-lead pm-anim" style={{ marginBottom: 28 }}>{p.lead}</p>
                <Link to={p.to} style={{ textDecoration: "none", color: "inherit" }}>
                  <h2 className="pm-name pm-anim pm-anim-2">{p.name}</h2>
                </Link>
                <div className="pm-anim pm-anim-3" style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
                  <span className="pm-kind">{p.kind}</span>
                  <span className="pm-swatch"><i style={{ background: p.swatch }} />{p.swatch}</span>
                </div>
              </div>
            )}
          </div>

          {/* Scroll cue lives on the intro only. */}
          {p.id === "intro" && (
            <div className="pm-cue">
              <span className="pm-cue-track" aria-hidden="true" />
              SCROLL
            </div>
          )}
          </div>
        </section>
      ))}
    </div>
  );
}
