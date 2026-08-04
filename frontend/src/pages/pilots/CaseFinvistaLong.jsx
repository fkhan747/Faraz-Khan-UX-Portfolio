import { useCaseData } from "../../components/CaseStudyGate";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { DECK_CSS } from "./caseDeck";
import { Fig, Head, Split, Phones, Venn, Thanks } from "./deckParts";

/* FINVISTA, long-form, on the light slide-band design. THIS IS THE LIVE PAGE
   at /case/finvista as of 2026-08-04.

   WHAT THIS IS: the same light treatment as CaseFinvistaDeck.jsx, but driven
   by the long-form keys of src/data/finvistaCase.js (overview, problem,
   research, insights, flow, design, designSystem, validation, impact,
   gallery) rather than the `deck` block. The deck version it replaced is not
   deleted: it still renders at /case/finvista-deck, and Meridian, Aurora and
   Threadfold are still on it until their long-form content is finalised.

   SCREENS: the product UI is the Material 3 set in public/finvista/m3, used
   exactly as the shipped deck uses it. The long-form data also references the
   older numbered captures; those are deliberately not used here, so the two
   light pages show one visual language for the product.

   CONFIDENTIALITY: same contract as the deck page. Every word of copy comes
   from the data module through useCaseData(), so this bundle ships no
   confidential text, and images render through Fig, which uses VaultImage. */

const ACCENT = "#16653C";
const F = (n) => `/finvista/${n}`;

const NEXT_WORK = [
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

/* The product screens, in the order the journey runs. The long-form gallery
   lists the older numbered captures; these are the current visual design and
   are used as they are. */
const JOURNEY_SCREENS = [
  ["m3/login.png", "Sign in, for sales and call centre staff"],
  ["m3/dashboard.png", "Applications queue"],
  ["m3/portfolio.png", "Portfolio, the store manager view"],
  ["m3/personal.png", "Personal details and live photo"],
  ["m3/address.png", "Address details"],
  ["m3/employment.png", "Employment details"],
  ["m3/vehicle.png", "Vehicle type selection"],
  ["m3/consent.png", "Credit bureau check consent"],
  ["m3/kfs.png", "Key facts statement and e-signature"],
  ["m3/summary.png", "Loan summary"],
  ["m3/disbursed.png", "Disbursed"],
];

/* Page-local additions to the deck system: a comparison table, the eleven-step
   grid, a persona card and the two-column retro. Namespaced fvl- so nothing
   here can reach the shipped deck pages.
   NO BACKTICKS BELOW: this is one template literal and a stray backtick in a
   comment terminates it and takes the build down with it. */
const LONG_CSS = `
  .fvl-table-wrap{ margin-top:44px; overflow-x:auto; border:1px solid var(--line);
    border-radius:16px; background:#fff; }
  .fvl-table{ width:100%; border-collapse:collapse; min-width:640px; }
  .fvl-table th, .fvl-table td{ text-align:left; padding:14px 18px; font-size:15px;
    border-bottom:1px solid var(--line); }
  .fvl-table thead th{ font-family:'JetBrains Mono',monospace; font-size:11px;
    text-transform:uppercase; letter-spacing:.16em; color:var(--muted); font-weight:600; }
  .fvl-table tbody th{ font-weight:600; color:var(--ink); }
  .fvl-table td{ color:var(--muted); text-align:center; }
  .fvl-table tbody tr:last-child th, .fvl-table tbody tr:last-child td{ border-bottom:0; }
  .fvl-yes{ color:var(--acc); font-weight:700; }

  .fvl-steps{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:44px; }
  @media (max-width:900px){ .fvl-steps{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:520px){ .fvl-steps{ grid-template-columns:1fr; } }
  .fvl-step{ background:#fff; border:1px solid var(--line); border-radius:14px; padding:18px 20px; }
  .fvl-step-n{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.16em;
    color:var(--acc); font-weight:600; display:block; margin-bottom:8px; }
  .fvl-step-t{ font-weight:700; font-size:15.5px; margin:0 0 4px; color:var(--ink); }
  .fvl-step-d{ font-size:14px; color:var(--muted); margin:0; line-height:1.5; }

  .fvl-persona{ background:#fff; border:1px solid var(--line); border-radius:16px; padding:30px 28px; }
  .fvl-persona-role{ font-family:'JetBrains Mono',monospace; font-size:11px;
    text-transform:uppercase; letter-spacing:.16em; color:var(--muted); display:block; margin-bottom:10px; }
  .fvl-quote{ font-family:'Playfair Display',serif; font-style:italic; font-size:1.15rem;
    line-height:1.45; color:var(--acc); margin:0 0 18px; }
  .fvl-pair{ margin-top:16px; }
  .fvl-pair-k{ font-size:13px; font-weight:700; color:var(--ink); margin:0; }
  .fvl-pair-v{ font-size:14.5px; color:var(--muted); margin:2px 0 0; line-height:1.55; }

  /* Two-column retro. Margin-based spacing, not flex gap: the prerender
     Chromium ignores gap and would run the columns together. */
  .fvl-retro{ display:grid; grid-template-columns:repeat(2,1fr); gap:24px; margin-top:44px; }
  @media (max-width:820px){ .fvl-retro{ grid-template-columns:1fr; } }
  .fvl-retro-col{ background:#fff; border:1px solid var(--line); border-radius:16px; padding:30px 28px; }
  .fvl-retro-col h3{ font-size:1.05rem; font-weight:700; margin:0 0 16px; color:var(--ink); }
  .fvl-retro-col ul{ list-style:none; padding:0; margin:0; }
  .fvl-retro-col li{ position:relative; padding-left:20px; font-size:15.5px; line-height:1.6;
    color:var(--muted); }
  .fvl-retro-col li + li{ margin-top:12px; }
  .fvl-retro-col li::before{ content:""; position:absolute; left:0; top:.62em;
    width:7px; height:7px; border-radius:50%; background:var(--acc); }

  /* Four impact metrics rather than the deck's three. Declared as a class, not
     an inline grid-template, so it still collapses at the deck's own
     breakpoints instead of forcing four columns onto a phone. */
  /* Two personas, not the deck's three. Same reasoning as fvl-metrics-4. */
  .fvl-2up{ grid-template-columns:repeat(2,1fr); }
  @media (max-width:900px){ .fvl-2up{ grid-template-columns:1fr; } }

  .fvl-metrics-4{ grid-template-columns:repeat(4,1fr); }
  @media (max-width:960px){ .fvl-metrics-4{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:480px){ .fvl-metrics-4{ grid-template-columns:1fr; } }

  .fvl-facts{ display:grid; grid-template-columns:repeat(6,1fr); gap:1px;
    background:var(--line); border:1px solid var(--line); margin-top:44px; }
  @media (max-width:900px){ .fvl-facts{ grid-template-columns:repeat(3,1fr); } }
  @media (max-width:520px){ .fvl-facts{ grid-template-columns:repeat(2,1fr); } }
  .fvl-fact{ background:#fff; padding:22px 18px; }
  .fvl-fact-k{ font-family:'JetBrains Mono',monospace; font-size:10px; text-transform:uppercase;
    letter-spacing:.16em; color:var(--muted); display:block; margin-bottom:8px; }
  .fvl-fact-v{ font-weight:700; font-size:15.5px; color:var(--ink); margin:0; line-height:1.35; }
`;

export default function CaseFinvistaLong() {
  const fv = useCaseData();
  const o = fv.overview;
  const p = fv.problem;
  const r = fv.research;
  const ins = fv.insights;
  const fl = fv.flow;
  const dz = fv.design;
  const ds = fv.designSystem;
  const val = fv.validation;
  const imp = fv.impact;
  const gal = fv.gallery;

  return (
    <div className="cd" style={{ "--acc": ACCENT }} data-testid="finvista-long">
      <style>{DECK_CSS}</style>
      <style>{LONG_CSS}</style>

      <header className="cd-top">
        <div className="cd-top-in">
          <Link to="/projects" className="cd-back">← All work</Link>
          <span className="cd-mark">Faraz Khan</span>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="cd-hero">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">UX case study · Fintech, digital lending</p>
            <h1 className="cd-h1">{fv.title}</h1>
            <p className="cd-hero-deck">{fv.subtitle}</p>
          </Reveal>
        </div>
        <Reveal className="cd-in">
          <Fig src={F("cover.jpg")} alt="FinVista lending app" cap={fv.deck.heroCaption} />
        </Reveal>
      </section>

      {/* ── OUTCOME COUNTER ────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal><Head eye="Outcome">What the work moved.</Head></Reveal>
          <div className="cd-metrics">
            {fv.hero.stats.map((s, i) => (
              <Reveal className="cd-metric" key={s.label} delay={i * 0.04}>
                <div className="cd-metric-n">{s.value}</div>
                <div className="cd-metric-l">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ───────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Project overview">{o.headline}</Head>
            <p className="cd-lede">{o.intro}</p>
          </Reveal>
          <Reveal className="cd-aside">
            <h3 className="cd-h3">{o.tldrTitle}</h3>
            <p>{o.tldr}</p>
          </Reveal>
          <div className="fvl-facts">
            {o.facts.map((f, i) => (
              <Reveal className="fvl-fact" key={f.label} delay={i * 0.03}>
                <span className="fvl-fact-k">{f.label}</span>
                <p className="fvl-fact-v">{f.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN PROCESS ─────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal><Head eye="How it ran">Four phases across five months.</Head></Reveal>
          <div className="cd-3up">
            {o.process.map((s, i) => (
              <Reveal className="cd-tile" key={s.step} delay={i * 0.05}>
                <span className="cd-tile-k">{s.step}</span>
                <h3 className="cd-h3">{s.title}</h3>
                <p>{s.duration}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LANDSCAPE ──────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal><Head eye="Product landscape">{o.productLandscape.intro}</Head></Reveal>
          <div className="cd-3up">
            {o.productLandscape.products.map((pr, i) => (
              <Reveal className="cd-tile" key={pr.name} delay={i * 0.06}>
                {pr.badge ? <span className="cd-sev">{pr.badge}</span> : null}
                <h3 className="cd-h3">{pr.name}</h3>
                <p>{pr.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO RUNS IT ────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Who runs it">Three roles drive this app. None of them is the borrower.</Head>
          </Reveal>
          <div className="cd-3up">
            {fv.primaryUsers.map((u, i) => (
              <Reveal className="cd-tile" key={u.label} delay={i * 0.06}>
                <h3 className="cd-h3">{u.label}</h3>
                <p>{u.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ────────────────────────────────────────────────── */}
      <section className="cd-band cd-stat">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">The problem</p>
            <p className="cd-stat-eye">{p.headline}</p>
            <p className="cd-stat-q">{p.coreChallenge}</p>
            <p className="cd-lede" style={{ marginTop: 44, maxWidth: "64ch" }}>{p.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal><Head eye="Three dimensions">What made it hard.</Head></Reveal>
          <div className="cd-3up">
            {p.dimensions.map((dim, i) => (
              <Reveal className="cd-tile" key={dim.title} delay={i * 0.06}>
                <h3 className="cd-h3">{dim.title}</h3>
                <p>{dim.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPE ──────────────────────────────────────────────────── */}
      <section className="cd-split">
        <div className="cd-half">
          <Reveal className="cd-half-in">
            <Head eye="Scope">What I took on</Head>
            <ul className="cd-ul">{p.inScope.map((s) => <li key={s}>{s}</li>)}</ul>
          </Reveal>
        </div>
        <div className="cd-panel-dark">
          <Reveal>
            <h3 className="cd-h3">Out of scope</h3>
            <ul className="cd-ul">{p.outOfScope.map((s) => <li key={s}>{s}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      {/* ── RESEARCH ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Teardown">{r.headline}</Head>
            <p className="cd-lede">{r.intro}</p>
          </Reveal>
          <div className="cd-shots">
            {r.competitive.map((c) => (
              <Fig key={c.name} src={c.image} alt={`${c.name} app screens`} cap={`${c.name}: ${c.notes}`} />
            ))}
          </div>
          <div className="fvl-table-wrap">
            <table className="fvl-table">
              <thead>
                <tr>{r.findingsTable.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
              </thead>
              <tbody>
                {r.findingsTable.rows.map(([pattern, ...cells]) => (
                  <tr key={pattern}>
                    <th scope="row">{pattern}</th>
                    {cells.map((c, i) => (
                      <td key={i} className={c === "✓" ? "fvl-yes" : undefined}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Reveal className="cd-aside">
            <h3 className="cd-h3">What the teardown settled</h3>
            <p>{r.keyInsight}</p>
          </Reveal>
          <div className="cd-3up">
            {r.approach.map((a, i) => (
              <Reveal className="cd-tile" key={a.title} delay={i * 0.06}>
                <h3 className="cd-h3">{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Two readers">{ins.headline}</Head>
            <p className="cd-lede">{ins.intro}</p>
          </Reveal>
          <div className="cd-3up fvl-2up">
            {ins.personas.map((per, i) => (
              <Reveal className="fvl-persona" key={per.name} delay={i * 0.06}>
                <span className="fvl-persona-role">{per.role}</span>
                <h3 className="cd-h3">{per.name}</h3>
                <p className="fvl-quote">“{per.quote}”</p>
                {per.challenges.map((c) => (
                  <div className="fvl-pair" key={c.t}>
                    <p className="fvl-pair-k">{c.t}</p>
                    <p className="fvl-pair-v">{c.d}</p>
                  </div>
                ))}
                {per.goals.map((g) => (
                  <div className="fvl-pair" key={g.t}>
                    <p className="fvl-pair-k">{g.t}</p>
                    <p className="fvl-pair-v">{g.d}</p>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div
          className="cd-in"
          style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,420px)", gap: 64, alignItems: "center" }}
        >
          <Reveal>
            <Head eye="Non-negotiables">The three rules the design had to keep.</Head>
            <ul className="cd-ul">
              {ins.principles.map((pr) => <li key={pr.t}><b>{pr.t}.</b> {pr.d}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} style={{ width: "100%" }}>
            <Venn
              labels={ins.principles.map((pr) => pr.t.split(" ")[0])}
              center="One journey"
            />
          </Reveal>
        </div>
      </section>

      {/* ── USER FLOW ──────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="The eleven steps">{fl.headline}</Head>
            <p className="cd-lede">{fl.intro}</p>
          </Reveal>
          <Reveal className="cd-card">
            <Fig src={fl.diagramSvg} alt={fl.diagramCaption} cap={fl.diagramCaption} />
          </Reveal>
          <div className="fvl-steps">
            {fl.tasks.map((t, i) => (
              <Reveal className="fvl-step" key={t.n} delay={(i % 4) * 0.04}>
                <span className="fvl-step-n">{String(t.n).padStart(2, "0")}</span>
                <p className="fvl-step-t">{t.t}</p>
                <p className="fvl-step-d">{t.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIREFRAMES ─────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Options on the table">{dz.headline}</Head>
            <p className="cd-lede">{dz.intro}</p>
            <div className="cd-how"><b>Wireframes</b><p>{dz.wireframes.intro}</p></div>
          </Reveal>
          <div className="cd-shots">
            {dz.wireframes.batches.map((b) => (
              <Fig key={b.src} src={b.src} alt={b.caption} cap={b.caption} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORATIONS ───────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal><Head eye="Explorations">{dz.explorations.intro}</Head></Reveal>
          {dz.explorations.images.map((im) => (
            <Reveal className="cd-card" key={im.src}>
              <Fig src={im.src} alt={im.caption} cap={im.caption} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── KEY DECISIONS, with the work-mode / handoff-mode pair ──── */}
      <Split
        eye="Four decisions"
        title="What the design actually rests on."
        bullets={dz.keyDecisions.map((k) => <><b>{k.t}.</b> {k.d}</>)}
      >
        <Phones items={[
          { src: F("m3/employment.png"), alt: "Employment details, work mode" },
          { src: F("m3/consent.png"), alt: "Credit bureau consent, handoff mode" },
          { src: F("m3/summary.png"), alt: "Loan summary" },
        ]} />
      </Split>

      {/* ── DESIGN SYSTEM ──────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="The library">{ds.headline}</Head>
            <p className="cd-lede">{ds.intro}</p>
          </Reveal>
          <Reveal>
            <Fig
              src={F("m3/system.png")}
              alt="FinVista design system in the Forest palette"
              cap="Colour roles, type scale, buttons, inputs, status and the handoff surface"
            />
          </Reveal>
          <Reveal className="cd-aside">
            <h3 className="cd-h3">What the library bought</h3>
            <p>{ds.systemImpact}</p>
          </Reveal>
        </div>
      </section>

      {/* ── VALIDATION ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="In the store">{val.headline}</Head>
            <p className="cd-lede">{val.intro}</p>
          </Reveal>
          <div className="cd-iters">
            {val.rounds.map((rd, i) => (
              <Reveal className="cd-iter" key={rd.t} delay={i * 0.05}>
                <span className="cd-iter-n">{String(rd.n).padStart(2, "0")}</span>
                <div>
                  <h3 className="cd-h3">{rd.t}</h3>
                  <p>{rd.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="cd-aside">
            <h3 className="cd-h3">Where it landed</h3>
            <p>{val.outcome}</p>
          </Reveal>
        </div>
      </section>

      {/* ── IMPACT ─────────────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal><Head eye="What changed">{imp.headline}</Head></Reveal>
          <div className="cd-metrics fvl-metrics-4">
            {imp.metrics.map((m, i) => (
              <Reveal className="cd-metric" key={m.l} delay={i * 0.04}>
                <div className="cd-metric-n">{m.v}</div>
                <div className="cd-metric-l">{m.l}</div>
                <p className="cd-note" style={{ marginTop: 8 }}>{m.s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETRO ──────────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal><Head eye="Honestly">What worked, and what I would change.</Head></Reveal>
          <div className="fvl-retro">
            <Reveal className="fvl-retro-col">
              <h3>What went well</h3>
              <ul>{imp.wentWell.map((w) => <li key={w}>{w}</li>)}</ul>
            </Reveal>
            <Reveal className="fvl-retro-col" delay={0.08}>
              <h3>What I would do differently</h3>
              <ul>{imp.differently.map((w) => <li key={w}>{w}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SCREENS ────────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="The shipped app">{gal.headline}</Head>
            <p className="cd-lede">{gal.intro}</p>
            <p className="cd-note">{fv.deck.screensNote}</p>
          </Reveal>
          <div className="cd-gallery">
            {JOURNEY_SCREENS.map(([src, alt]) => (
              <Fig key={src} src={F(src)} alt={alt} cap={alt} className="cd-phone-cell" />
            ))}
          </div>
        </div>
      </section>

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the decisions that did not make it."
      />
    </div>
  );
}
