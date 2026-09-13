import { useCaseData } from "../../components/CaseStudyGate";
import Reveal from "../../components/Reveal";
import CaseTopBar from "../../components/CaseTopBar";
import { DECK_CSS } from "./caseDeck";
import { Fig, Thanks } from "./deckParts";

/* FINVISTA, restructured 2026-09-13. THIS IS THE LIVE PAGE at /case/finvista.

   WHAT THIS IS: the six-section structure from Faraz's "finvista revised.md",
   rendered on the slide-band design shared with CaseMeridianDeck. Every word
   of copy comes from `finvista.v3` in src/data/finvistaCase.js through
   useCaseData(), so this bundle ships no confidential text. The previous
   long-form page (overview / problem / research / ... / gallery) is in git
   history; its data keys stay in the module untouched.

   SECTION RHYTHM: eyebrow with the section number, a big accent headline,
   then the description DIRECTLY BELOW the headline on a wide measure. Faraz
   asked for this explicitly over the split (headline left, copy right) that
   the draft used: the copy was cramped on the right and the space wasted.

   ASSETS: product UI is the Material 3 set in public/finvista/m3; the
   explorations (svg-13 layout, svg-15 progress), the design-system sheets
   (022/025/026) and the wait states (051/052) are the original captures in
   public/finvista. The doc also asks for a looping hero MP4; none exists, so
   the hero is the two-mode split as a still. */

const ACCENT = "#16653C";

const NEXT_WORK = [
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

/* Page-local additions to the deck system, namespaced fv3-.
   NO BACKTICKS BELOW: one template literal; a stray backtick takes the build
   down with it. */
const V3_CSS = `
  /* ── Section head: eyebrow, headline, then copy below on a wide measure ── */
  .fv3-head{ max-width:1040px; }
  .fv3-n{ font-family:'JetBrains Mono',monospace; font-weight:600; color:var(--acc);
    margin-right:12px; letter-spacing:.14em; }
  .fv3-head .cd-h2{ max-width:24ch; margin-bottom:26px; }
  .fv3-lede{ font-size:19.5px; line-height:1.68; color:var(--ink); max-width:74ch; margin:0; }
  .fv3-lede + .fv3-lede{ margin-top:20px; }
  .cd-dark .fv3-lede{ color:rgba(239,237,231,.82); }

  /* ── Hero ─────────────────────────────────────────────────────────── */
  /* The deck's h1 is sized for a one-word title. This title runs to nine
     words, so it steps down and gets a measure. */
  .fv3-h1{ font-size:clamp(2.2rem,4.6vw,4rem); max-width:18ch; }
  .fv3-tags{ display:flex; flex-wrap:wrap; gap:8px; margin-top:28px; }
  .fv3-tag{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em;
    text-transform:uppercase; border:1px solid var(--line); background:#fff;
    padding:6px 10px; border-radius:3px; color:var(--muted); }
  .fv3-facts{ display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line);
    border:1px solid var(--line); margin-top:48px; }
  @media (max-width:760px){ .fv3-facts{ grid-template-columns:1fr; } }
  .fv3-fact{ background:var(--paper); padding:20px 22px; }
  .fv3-fact dt{ font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.16em;
    text-transform:uppercase; color:var(--muted); }
  .fv3-fact dd{ margin:8px 0 0; font-size:15.5px; line-height:1.5; }
  .fv3-hero{ margin-top:56px; background:var(--acc); padding:48px 40px; position:relative;
    display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:end; }
  @media (max-width:820px){ .fv3-hero{ grid-template-columns:1fr; padding:40px 22px 32px; } }
  .fv3-mode{ display:flex; flex-direction:column; align-items:center; gap:18px; }
  .fv3-mode-l{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.16em;
    text-transform:uppercase; color:rgba(255,255,255,.88); text-align:center; }
  .fv3-phone{ width:min(300px,100%); margin:0; border-radius:22px; border:6px solid #0f3d25;
    box-shadow:0 30px 60px rgba(0,0,0,.35); background:#fff; overflow:hidden; position:relative; }
  .fv3-phone img{ display:block; width:100%; }
  .fv3-phone .cd-zoom{ top:10px; right:10px; }

  /* ── Dilemma: ink panel + explanation ─────────────────────────────── */
  .fv3-dil{ display:grid; grid-template-columns:5fr 7fr; border:1px solid var(--line); margin-top:56px; }
  @media (max-width:900px){ .fv3-dil{ grid-template-columns:1fr; } }
  .fv3-dil-l{ background:var(--ink); color:var(--paper); padding:52px 44px; }
  .fv3-dil-l .cd-eye{ color:var(--paper); }
  .fv3-dil-q{ font-family:'Playfair Display',serif; font-weight:700; margin:0;
    font-size:clamp(1.7rem,3vw,2.6rem); line-height:1.1; letter-spacing:-.02em; }
  .fv3-dil-r{ background:#fff; padding:52px 44px; }
  .fv3-dil-r p{ font-size:17px; line-height:1.68; color:var(--ink); margin:0; }
  .fv3-dil-r p + p{ margin-top:18px; }
  @media (max-width:600px){ .fv3-dil-l, .fv3-dil-r{ padding:32px 24px; } }

  /* ── Constraint cards: one object, shared edges ───────────────────── */
  .fv3-cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line);
    border:1px solid var(--line); margin-top:48px; }
  @media (max-width:900px){ .fv3-cards{ grid-template-columns:1fr; } }
  .fv3-card{ background:#fff; padding:30px 28px; }
  .fv3-k{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.16em;
    text-transform:uppercase; color:var(--acc); display:block; margin-bottom:12px; }
  .fv3-card .cd-h3{ font-size:1.15rem; margin-bottom:10px; }
  .fv3-card p{ font-size:15px; line-height:1.6; color:var(--muted); margin:0; }

  /* ── Topology strip ───────────────────────────────────────────────── */
  .fv3-topo{ margin-top:48px; background:#fff; border:1px solid var(--line); padding:40px;
    position:relative; }
  @media (max-width:700px){ .fv3-topo{ padding:28px 22px; } }
  .fv3-topo-row{ display:grid; grid-template-columns:150px minmax(0,1fr); gap:28px; align-items:center; }
  @media (max-width:700px){ .fv3-topo-row{ grid-template-columns:1fr; gap:14px; } }
  .fv3-topo-row + .fv3-topo-row{ margin-top:28px; padding-top:28px; border-top:1px dashed var(--line); }
  .fv3-topo-k{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.16em;
    text-transform:uppercase; color:var(--muted); }
  .fv3-topo-k b{ display:block; font-family:'Outfit',system-ui,sans-serif; font-size:15px;
    letter-spacing:0; text-transform:none; color:var(--ink); margin-top:4px; }
  .fv3-flow{ display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
  .fv3-node{ padding:10px 14px; border:1px solid var(--line); border-radius:3px; font-size:13.5px;
    background:var(--paper); }
  .fv3-node-bad{ border-color:#C44; color:#8A2B2B; background:#FBEDEA; }
  .fv3-node-acc{ border-color:var(--acc); background:var(--tint); color:var(--acc); font-weight:600; }
  .fv3-arr{ color:var(--muted); font-family:'JetBrains Mono',monospace; }
  .fv3-flow-t{ font-size:12.5px; color:var(--muted); margin-top:10px; font-family:'JetBrains Mono',monospace; }

  /* ── States + handoff ─────────────────────────────────────────────── */
  .fv3-states{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:56px;
    align-items:start; margin-top:48px; }
  @media (max-width:900px){ .fv3-states{ grid-template-columns:1fr; gap:40px; } }
  .fv3-rule{ display:grid; grid-template-columns:56px minmax(0,1fr); gap:18px; padding:22px 0;
    border-top:1px solid var(--line); }
  .fv3-rule:last-child{ border-bottom:1px solid var(--line); }
  .fv3-rule-k{ font-family:'Playfair Display',serif; font-weight:700; font-size:2rem; line-height:1;
    color:var(--acc); }
  .fv3-rule .cd-h3{ font-family:'Outfit',system-ui,sans-serif; font-size:1.05rem; margin:2px 0 6px; }
  .fv3-rule p{ font-size:15.5px; line-height:1.62; color:var(--muted); margin:0; }
  .fv3-hand{ background:var(--acc); padding:40px 24px; position:relative;
    display:grid; grid-template-columns:minmax(0,1fr) auto minmax(0,1fr); gap:16px; align-items:center; }
  @media (max-width:520px){ .fv3-hand{ grid-template-columns:1fr; } .fv3-turn{ transform:rotate(90deg); } }
  .fv3-hand .fv3-phone{ width:100%; max-width:250px; margin:0 auto; }
  .fv3-turn{ font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.14em;
    text-transform:uppercase; color:#fff; text-align:center; line-height:1.6; }
  .fv3-turn svg{ display:block; margin:0 auto 8px; }
  .fv3-hand-l{ font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.14em;
    text-transform:uppercase; color:rgba(255,255,255,.88); text-align:center; margin-top:14px; }

  /* ── Flow strip: the eleven steps ─────────────────────────────────── */
  .fv3-strip-wrap{ margin-top:48px; overflow-x:auto; padding-bottom:8px; }
  .fv3-strip{ list-style:none; padding:0; margin:0; display:flex; min-width:1180px; }
  .fv3-strip li{ flex:1; padding:18px 14px 18px 18px; border:1px solid var(--line); border-right:0;
    background:#fff; display:flex; flex-direction:column; gap:6px; min-width:0; }
  .fv3-strip li:last-child{ border-right:1px solid var(--line); background:var(--tint); }
  .fv3-strip li.fv3-hs{ background:#FFF9D6; }
  .fv3-st-n{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.16em;
    color:var(--acc); font-weight:600; }
  .fv3-st-t{ font-size:14px; font-weight:700; line-height:1.3; }
  .fv3-st-h{ font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:.14em; color:var(--ink);
    opacity:.7; }
  .fv3-strip-cap{ font-size:13px; color:var(--muted); margin-top:12px; }


  /* ── Journey filmstrip: every screen in order, one connecting line ────
     Scrolls sideways inside its own container; the page never does. Each cell
     is a fixed-width phone so eleven of them read as one sequence. */
  .fv3-film-wrap{ margin-top:48px; overflow-x:auto; padding:8px 0 20px;
    scroll-snap-type:x proximity; -webkit-overflow-scrolling:touch; }
  .fv3-film{ list-style:none; margin:0 0 0 -24px; padding:0; display:flex; gap:0; width:max-content; }
  /* every cell carries the same padding, so every phone is the same width */
  .fv3-cell{ width:260px; flex:none; position:relative; padding:0 12px 0 24px; scroll-snap-align:start; }
  /* the connecting line runs behind the step number of every cell but the first */
  .fv3-cell + .fv3-cell::before{ content:""; position:absolute; left:-12px; top:11px; width:36px;
    height:1px; background:var(--line); }
  .fv3-cell-n{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.16em;
    color:var(--acc); font-weight:600; display:inline-block; background:var(--paper);
    padding-right:8px; position:relative; z-index:1; }
  .fv3-cell-hand{ font-family:'JetBrains Mono',monospace; font-size:9.5px; letter-spacing:.14em;
    margin-left:6px; background:var(--ink); color:#F2D50F; padding:3px 7px; border-radius:3px;
    vertical-align:1px; }
  .fv3-cell .cd-fig{ margin:14px 0 0; }
  /* captures differ slightly in height; one ratio keeps the captions on a line */
  .fv3-cell .cd-fig img{ border-radius:16px; aspect-ratio:9/19.2; object-fit:cover; object-position:top; }
  .fv3-cell-t{ font-weight:700; font-size:14.5px; margin:14px 0 0; color:var(--ink); }
  .fv3-cell-d{ font-size:13px; color:var(--muted); margin:2px 0 0; line-height:1.45; }
  .fv3-film-hint{ font-size:12.5px; color:var(--muted); margin-top:4px;
    font-family:'JetBrains Mono',monospace; letter-spacing:.06em; }
  @media (hover:hover){ .fv3-film-wrap{ scrollbar-width:thin; } }

  /* ── Testing metrics: from → to ───────────────────────────────────── */
  .fv3-metrics{ display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--line);
    border:1px solid var(--line); margin-top:48px; }
  @media (max-width:960px){ .fv3-metrics{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:480px){ .fv3-metrics{ grid-template-columns:1fr; } }
  .fv3-metric{ background:var(--paper); padding:32px 28px; }
  .fv3-metric-n{ font-family:'Playfair Display',serif; font-weight:700; line-height:1;
    font-size:clamp(2rem,3.2vw,2.8rem); letter-spacing:-.03em; color:var(--acc);
    font-variant-numeric:tabular-nums; white-space:nowrap; }
  .fv3-to{ font-family:'Outfit',system-ui,sans-serif; font-weight:400; color:var(--muted);
    font-size:.55em; vertical-align:middle; margin:0 6px; }
  .fv3-metric-l{ font-size:14.5px; line-height:1.5; color:var(--muted); margin-top:12px; }

  .fv3-friction{ display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line);
    border:1px solid var(--line); margin-top:20px; }
  @media (max-width:900px){ .fv3-friction{ grid-template-columns:1fr; } }
  .fv3-fr{ background:#fff; padding:30px 28px; }
  .fv3-fr .cd-h3{ font-size:1.2rem; margin-bottom:14px; }
  .fv3-fr p{ font-size:15.5px; line-height:1.62; color:var(--muted); margin:0; }
  .fv3-fr p + p{ margin-top:12px; }
  .fv3-fr b{ color:var(--ink); }

  .fv3-duo{ display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:48px; }
  @media (max-width:820px){ .fv3-duo{ grid-template-columns:1fr; } }
  /* Exploration diagram on the left, the shipped phone on the right, sized
     to the diagram's height rather than the column width. */
  .fv3-duo{ grid-template-columns:minmax(0,3fr) minmax(0,2fr); align-items:start; }
  .fv3-duo .cd-fig{ margin:0; }
  .fv3-duo-phone .cd-fig{ max-width:320px; margin:0 auto; }

  /* ── Wide figure with a stand-in marker ───────────────────────────── */
  .fv3-figwrap{ margin-top:48px; position:relative; }
  .fv3-figwrap .cd-fig{ margin:0; }

  /* ── Retro lessons on ink ─────────────────────────────────────────── */
  .fv3-lessons{ display:grid; grid-template-columns:1fr 1fr; gap:40px; margin-top:48px; }
  @media (max-width:900px){ .fv3-lessons{ grid-template-columns:1fr; gap:28px; } }
  .fv3-lesson{ border-top:1px solid rgba(239,237,231,.25); padding-top:22px; }
  .fv3-lesson .cd-h3{ color:var(--paper); font-size:1.2rem; margin-bottom:12px; }
  .fv3-lesson p{ font-size:15.5px; line-height:1.62; color:rgba(239,237,231,.8); margin:0; }
  .fv3-field{ margin-top:56px; background:var(--acc); padding:48px 40px; position:relative;
    display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:end; }
  @media (max-width:620px){ .fv3-field{ grid-template-columns:1fr; padding:40px 22px; } }
  .fv3-field .fv3-phone{ width:min(280px,100%); }
`;

/* Section head: number + eyebrow, headline, copy below on the wide measure. */
function SecHead({ n, eye, h, ps, p }) {
  const paras = ps || (p ? [p] : []);
  return (
    <Reveal className="fv3-head">
      <p className="cd-eye">{n ? <span className="fv3-n">{n}</span> : null}{eye}</p>
      <h2 className="cd-h2">{h}</h2>
      {paras.map((t) => <p className="fv3-lede" key={t.slice(0, 24)}>{t}</p>)}
    </Reveal>
  );
}

function Phone({ src, alt }) {
  return <Fig src={src} alt={alt} className="fv3-phone" />;
}

export default function CaseFinvistaLong() {
  const fv = useCaseData();
  const v = fv.v3;
  const { summary, context, innovation, architecture, journey, testing, scaling, retro } = v;

  return (
    <div className="cd" style={{ "--acc": ACCENT }} data-testid="finvista-long">
      <style>{DECK_CSS}</style>
      <style>{V3_CSS}</style>

      <CaseTopBar accent={ACCENT} />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="cd-hero">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">Case study · Enterprise fintech</p>
            <h1 className="cd-h1 fv3-h1">{v.title}</h1>
            <div className="fv3-tags">
              {v.tags.map((t) => <span className="fv3-tag" key={t}>{t}</span>)}
            </div>
            <dl className="fv3-facts">
              {v.facts.map((f) => (
                <div className="fv3-fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="fv3-hero">
            {[v.hero.left, v.hero.right].map((m) => (
              <div className="fv3-mode" key={m.label}>
                <span className="fv3-mode-l">{m.label}</span>
                <Phone src={m.src} alt={m.alt} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── EXECUTIVE SUMMARY ──────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <SecHead eye={summary.eye} h={summary.h} p={summary.p} />
          <Reveal className="fv3-dil">
            <div className="fv3-dil-l">
              <p className="cd-eye">{summary.dilemma.eye}</p>
              <p className="fv3-dil-q">{summary.dilemma.q}</p>
            </div>
            <div className="fv3-dil-r">
              {summary.dilemma.ps.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 CONTEXT ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <SecHead n={context.n} eye={context.eye} h={context.h} p={context.p} />
          <div className="fv3-cards">
            {context.cards.map((c, i) => (
              <Reveal className="fv3-card" key={c.k} delay={i * 0.05}>
                <span className="fv3-k">{c.k}</span>
                <h3 className="cd-h3">{c.t}</h3>
                <p>{c.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="fv3-topo">
            {[context.topology.before, context.topology.after].map((row, ri) => (
              <div className="fv3-topo-row" key={row.k}>
                <div className="fv3-topo-k">{row.k}<b>{row.t}</b></div>
                <div>
                  <div className="fv3-flow">
                    {row.nodes.map((nd, i) => {
                      const bad = nd.startsWith("!");
                      const label = bad ? nd.slice(1) : nd;
                      const cls = ri === 1 ? "fv3-node fv3-node-acc" : bad ? "fv3-node fv3-node-bad" : "fv3-node";
                      return (
                        <span key={label} style={{ display: "contents" }}>
                          {i > 0 ? <span className="fv3-arr">→</span> : null}
                          <span className={cls}>{label}</span>
                        </span>
                      );
                    })}
                  </div>
                  <div className="fv3-flow-t">{row.note}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── THE JOURNEY, SCREEN BY SCREEN ──────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <SecHead eye={journey.eye} h={journey.h} p={journey.p} />
          <Reveal className="fv3-film-wrap">
            <ol className="fv3-film" aria-label="The shipped journey in order">
              {journey.screens.map((sc, i) => (
                <li className="fv3-cell" key={sc.src}>
                  <span className="fv3-cell-n">{String(i + 1).padStart(2, "0")}</span>
                  {sc.hand ? <span className="fv3-cell-hand">HANDOFF</span> : null}
                  <Fig src={sc.src} alt={sc.t} />
                  <p className="fv3-cell-t">{sc.t}</p>
                  <p className="fv3-cell-d">{sc.d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <p className="fv3-film-hint">scroll sideways · tap any screen to open it</p>
        </div>
      </section>

      {/* ── 02 TWO READERS, ONE SCREEN ─────────────────────────────── */}
      <section className="cd-band" style={{ background: "var(--tint)" }}>
        <div className="cd-in">
          <SecHead n={innovation.n} eye={innovation.eye} h={`“${innovation.h}”`} p={innovation.p} />
          <div className="fv3-states">
            <Reveal>
              {innovation.states.map((s) => (
                <div className="fv3-rule" key={s.k}>
                  <div className="fv3-rule-k">{s.k}</div>
                  <div>
                    <h3 className="cd-h3">{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal className="fv3-hand" delay={0.08}>
              <div>
                <Phone src={innovation.handoff.a.src} alt={innovation.handoff.a.alt} />
                <div className="fv3-hand-l">{innovation.handoff.a.label}</div>
              </div>
              <div className="fv3-turn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
                  <path d="M6 18a12 12 0 0 1 20-9" /><path d="M26 4v6h-6" />
                  <path d="M30 18a12 12 0 0 1-20 9" /><path d="M10 32v-6h6" />
                </svg>
                hand<br />over
              </div>
              <div>
                <Phone src={innovation.handoff.b.src} alt={innovation.handoff.b.alt} />
                <div className="fv3-hand-l">{innovation.handoff.b.label}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 03 ARCHITECTURE ────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <SecHead n={architecture.n} eye={architecture.eye} h={architecture.h} ps={architecture.ps} />
          <Reveal className="fv3-strip-wrap" style={{ position: "relative" }}>
            <ol className="fv3-strip" aria-label="The eleven steps">
              {architecture.steps.map((t, i) => {
                const n = i + 1;
                const hs = architecture.handoffSteps.includes(n);
                return (
                  <li key={t} className={hs ? "fv3-hs" : undefined}>
                    <span className="fv3-st-n">{String(n).padStart(2, "0")}</span>
                    <b className="fv3-st-t">{t}</b>
                    {hs ? <span className="fv3-st-h">HANDOFF</span> : null}
                  </li>
                );
              })}
            </ol>
            <p className="fv3-strip-cap">Steps 03 and 08 are the two borrower handoffs.</p>
          </Reveal>
        </div>
      </section>

      {/* ── 04 USABILITY TESTING ───────────────────────────────────── */}
      <section className="cd-band" style={{ background: "var(--tint)" }}>
        <div className="cd-in">
          <SecHead n={testing.n} eye={testing.eye} h={testing.h} p={testing.p} />
          <div className="fv3-metrics">
            {testing.metrics.map((m, i) => (
              <Reveal className="fv3-metric" key={m.l} delay={i * 0.04}>
                <div className="fv3-metric-n">
                  {m.v ? m.v : <>{m.from}<span className="fv3-to">→</span>{m.to}</>}
                </div>
                <div className="fv3-metric-l">{m.l}</div>
              </Reveal>
            ))}
          </div>
          <Reveal><p className="cd-eye" style={{ marginTop: 56 }}>{testing.frictionEye}</p></Reveal>
          <div className="fv3-friction">
            {testing.friction.map((f, i) => (
              <Reveal className="fv3-fr" key={f.t} delay={i * 0.06}>
                <h3 className="cd-h3">{f.t}</h3>
                <p><b>Found.</b> {f.found}</p>
                <p><b>Fixed.</b> {f.fixed}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="cd-card">
            <Fig src={testing.layout.src} alt={testing.layout.alt} cap={testing.layout.cap} />
          </Reveal>
          <div className="fv3-duo">
            <Reveal className="cd-card" style={{ marginTop: 0 }}>
              <Fig src={testing.progress.src} alt={testing.progress.alt} cap={testing.progress.cap} />
            </Reveal>
            <Reveal delay={0.06} className="fv3-duo-phone">
              <Fig src={testing.shipped.src} alt={testing.shipped.alt} cap={testing.shipped.cap} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 05 SCALING ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <SecHead n={scaling.n} eye={scaling.eye} h={scaling.h} ps={scaling.ps} />
          <div className="cd-shots cd-shots-3">
            {scaling.system.map((sh) => (
              <Fig key={sh.src} src={sh.src} alt={sh.alt} cap={sh.cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 RETROSPECTIVE ───────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <SecHead n={retro.n} eye={retro.eye} h={retro.h} p={retro.p} />
          <div className="fv3-lessons">
            {retro.lessons.map((l, i) => (
              <Reveal className="fv3-lesson" key={l.t} delay={i * 0.06}>
                <h3 className="cd-h3">{l.t}</h3>
                <p>{l.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="fv3-field">
            {retro.waits.map((w) => (
              <div className="fv3-mode" key={w.src}>
                <Phone src={w.src} alt={w.alt} />
                <span className="fv3-mode-l">{w.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the decisions that did not make it."
      />
    </div>
  );
}
