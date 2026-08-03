import { Link } from "react-router-dom";
import { useCaseData } from "../../components/CaseStudyGate";
import Reveal from "../../components/Reveal";
import { DECK_CSS } from "./caseDeck";
import { Fig, Shot, Phones, Head, Split, Venn, Thanks, rich } from "./deckParts";

/* FINVISTA on the slide-band template. Same system as Meridian, green.

   CONFIDENTIALITY: every word of narrative copy lives in src/data/finvistaCase.js
   under `deck`, not in this file, and arrives through useCaseData() only after
   the vault is unlocked. Nothing here is a string a reader would care about, so
   the bundle ships no confidential text. Screenshots go through the shared Fig /
   Shot / Phones parts, which render via VaultImage and decrypt at view time.
   The route is wrapped in CaseStudyGate in App.js, exactly like the dark page.

   To change wording, edit the data module. To change composition, edit here. */

/* Material 3 "Forest" primary, the palette chosen for the UI redesign. The
   case-study chrome and the product screens now run the same green. */
const ACCENT = "#16653C";
const F = (n) => `/finvista/${n}`;

const NEXT_WORK = [
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

export default function CaseFinvistaDeck() {
  const fv = useCaseData();
  const d = fv.deck;

  return (
    <div className="cd" style={{ "--acc": ACCENT }}>
      <style>{DECK_CSS}</style>

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
            <p className="cd-eye">{d.eyebrow}</p>
            <h1 className="cd-h1">{fv.title}</h1>
            <p className="cd-hero-deck">{d.standfirst}</p>
          </Reveal>
        </div>
        <Reveal className="cd-in">
          <Fig src={F("cover.jpg")} alt="FinVista lending app" cap={d.heroCaption} />
        </Reveal>
      </section>

      {/* ── SCOPE AND TEAM ─────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="Scope and team">Six products, five months, one proving ground</Head></Reveal>
          <div className="cd-cols">
            {d.overview.map((c, i) => (
              <Reveal className="cd-col" key={c.h} delay={i * 0.06}>
                <h4>{c.h}</h4>
                <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE THING NOBODY HAD DESIGNED ────────────────────────────
          This case study opens with its insight rather than working up to it.
          The handoff is the entire reason FinVista is interesting, and burying
          it eight bands deep made the first half read like any other app
          project. Everything after this band is a consequence of it. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Two pairs of hands">{d.insight.title}</Head>
            <ul className="cd-ul" style={{ maxWidth: "72ch" }}>
              {d.insight.bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
            </ul>
          </Reveal>
          <div className="cd-modes">
            <Reveal className="cd-mode-col">
              <p className="cd-mode-lbl">Work mode</p>
              <p className="cd-mode-sub">The executive, twenty times a day. Dense, fast, paper white.</p>
              <div className="cd-mode-row">
                <Fig src={F("m3/employment.png")} alt="Employment details, work mode" className="cd-phone-cell" />
                <Fig src={F("m3/vehicle.png")} alt="Vehicle selection, work mode" className="cd-phone-cell" />
              </div>
            </Reveal>
            <Reveal className="cd-mode-col" delay={0.08}>
              <p className="cd-mode-lbl">Handoff mode</p>
              <p className="cd-mode-sub">The customer, under a minute. One question, workspace hidden.</p>
              <div className="cd-mode-row">
                <Fig src={F("m3/consent.png")} alt="Credit check consent, handoff mode" className="cd-phone-cell" />
                <Fig src={F("m3/kfs.png")} alt="Key facts and e-signature, handoff mode" className="cd-phone-cell" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ──────────────────────────────────────── */}
      <section className="cd-band cd-stat">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">Why it mattered</p>
            <p className="cd-stat-eye">What the paper process cost</p>
            <p className="cd-stat-q">{d.problem.statement}</p>
            <ul className="cd-ul" style={{ marginTop: 44, maxWidth: "64ch" }}>
              {d.problem.bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── BACKGROUND ─────────────────────────────────────────────── */}
      <Split eye="The product" title={d.background.title} bullets={d.background.bullets.map(rich)}>
        <Phones items={[
          { src: F("m3/dashboard.png"), alt: "Applications queue" },
          { src: F("m3/vehicle.png"), alt: "Vehicle type selection" },
          { src: F("m3/summary.png"), alt: "Loan summary" },
        ]} />
      </Split>

      {/* ── BASELINE METRICS ───────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal>
            <Head eye="The paper process">What I was replacing, counted.</Head>
            <p className="cd-lede">Every one of them became a constraint on the design.</p>
          </Reveal>
          <div className="cd-metrics">
            {d.baseline.map(([n, l], i) => (
              <Reveal className="cd-metric" key={l} delay={i * 0.04}>
                <div className="cd-metric-n">{n}</div>
                <div className="cd-metric-l">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── UX AUDIT ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Teardown">I pulled apart the paper process and the five apps beating it.</Head>
            <p className="cd-lede">
              A heuristic sweep of both, every issue rated 0 to 4 for severity and tied to a real
              person and a real task. Four findings shaped everything that followed.
            </p>
            <div className="cd-how"><b>How it was run</b><p>{d.how.audit}</p></div>
          </Reveal>
          <div className="cd-findings">
            {d.audit.map(([sev, t, body], i) => (
              <Reveal className="cd-finding" key={t} delay={i * 0.05}>
                <span className="cd-sev">{sev}</span>
                <h3 className="cd-h3">{t}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          <div className="cd-shots">
            <Fig src={F("Navi.jpg")} alt="Navi app screens"
              cap="Navi: clean one-step-at-a-time flow, and only one product" />
            <Fig src={F("KreditBee.jpg")} alt="KreditBee app screens"
              cap="KreditBee: stepped onboarding, help always in reach, and still one product" />
          </div>
        </div>
      </section>

      {/* ── KEY THEMES ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,420px)", gap: 64, alignItems: "center" }}>
          <Reveal>
            <Head eye="Non-negotiables">What I refused to trade away.</Head>
            <ul className="cd-ul">
              {d.themes.map(([t, body]) => <li key={t}><b>{t}.</b> {body}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} style={{ width: "100%" }}>
            <Venn labels={d.vennLabels} center={d.vennCenter} />
          </Reveal>
        </div>
      </section>

      {/* The work-mode / handoff-mode contrast is not here: it opens the case
          study, under "Two pairs of hands". */}

      {/* ── NEEDS vs FIRST RELEASE ─────────────────────────────────── */}
      <section className="cd-split">
        <div className="cd-half">
          <Reveal className="cd-half-in">
            <Head eye="Two sets of needs">The executive and the customer want opposite things</Head>
            <ul className="cd-ul">{d.needs.map((b, i) => <li key={i}>{rich(b)}</li>)}</ul>
          </Reveal>
        </div>
        <div className="cd-panel-dark">
          <Reveal>
            <h3 className="cd-h3">Shipped in v1</h3>
            <ul className="cd-ul">{d.firstRelease.map((b, i) => <li key={i}>{rich(b)}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      {/* ── PERSONAS ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Who runs it">Three roles drive this app. None of them is the borrower.</Head>
            <p className="cd-lede">
              That distinction shaped the whole design, so it is worth stating plainly before
              anything else.
            </p>
            <div className="cd-how"><b>How it was run</b><p>{d.how.personas}</p></div>
          </Reveal>
          <div className="cd-3up">
            {d.personas.map(([name, role, body], i) => (
              <Reveal className="cd-tile" key={name} delay={i * 0.06}>
                <span className="cd-sev">{role}</span>
                <h3 className="cd-h3">{name}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          {/* The customer is deliberately set apart from the persona grid: they
              are a participant at specific moments, not a user of the product. */}
          <Reveal className="cd-aside">
            <h3 className="cd-h3">And then there is the customer.</h3>
            <p>{d.customerNote}</p>
          </Reveal>
        </div>
      </section>

      {/* ── USER FLOW ──────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="The eleven steps">One job per screen, start to disbursement.</Head>
            <p className="cd-lede">
              Onboarding at one end, disbursement at the other, and progress visible the whole way
              through.
            </p>
          </Reveal>
          <Reveal className="cd-card">
            <Fig src={F("svg-12.svg")} alt="The eleven-step two-wheeler loan journey"
              cap="Two-wheeler loan journey: welcome through to disbursement" />
          </Reveal>
        </div>
      </section>

      {/* ── WIREFRAMES ─────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Options on the table">Structure had to win without styling</Head>
            <p className="cd-lede">
              The hardest screens in grayscale, options side by side, so structure had to win on its
              own merits rather than on styling.
            </p>
            <div className="cd-how"><b>How it was run</b><p>{d.how.wireframes}</p></div>
          </Reveal>
          <div className="cd-shots">
            <Fig src={F("svg-13.svg")} alt="Loan application layout options"
              cap="Long form, accordion, or stepped wizard. The wizard won." />
            <Fig src={F("svg-14.svg")} alt="Dashboard layout options"
              cap="Plain list, status cards, or grouped by stage. Status cards won." />
            <Fig src={F("svg-15.svg")} alt="Progress indicator options"
              cap="Top bar, vertical stepper, or ring. The stepper kept every stage visible." />
          </div>
        </div>
      </section>

      {/* ── FEATURE DIVES ──────────────────────────────────────────── */}
      {d.dives.map((dive) => (
        <Split key={dive.eye} rev={dive.rev} eye={dive.eye} title={dive.title}
          bullets={dive.bullets.map(rich)}>
          <Phones items={dive.phones.map(([src, alt]) => ({ src: F(src), alt }))} />
        </Split>
      ))}

      {/* ── DESIGN SYSTEM ──────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="The library">Built once, then five more products assembled from it.</Head>
            <p className="cd-lede">
              Built on auto-layout, variants and tokens, so the handoff stayed clean and the next
              product journey assembled in days. Rendered from the same source file as the screens,
              so the system and the product cannot drift apart.
            </p>
          </Reveal>
          <Reveal>
            <Fig src={F("m3/system.png")} alt="FinVista design system in the Forest palette"
              cap="Colour roles, type scale, buttons, inputs, status and the handoff surface" />
          </Reveal>
        </div>
      </section>

      {/* ── CONSTRAINTS ────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="Hard limits">What I could not design away.</Head></Reveal>
          <div className="cd-3up">
            {d.constraints.map(([k, t, body], i) => (
              <Reveal className="cd-tile" key={k} delay={i * 0.06}>
                <span className="cd-tile-k">{k}</span>
                <h3 className="cd-h3">{t}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENS ────────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="The shipped app">The two-wheeler journey, end to end.</Head>
            <p className="cd-lede">{d.screensNote}</p>
          </Reveal>
          <div className="cd-gallery">
            {d.screens.map(([src, alt]) => (
              <Fig key={src} src={F(src)} alt={alt} cap={alt} className="cd-phone-cell" />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ─────────────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal><Head eye="What changed">Measured against the paper process.</Head></Reveal>
          <div className="cd-metrics">
            {d.impact.map(([a, b, l], i) => (
              <Reveal className="cd-metric" key={l} delay={i * 0.04}>
                <div className="cd-shift">
                  <span className="cd-shift-a">{a}</span>
                  <span className="cd-shift-arrow" aria-hidden="true">→</span>
                  <span className="cd-shift-b">{b}</span>
                </div>
                <div className="cd-metric-l">{l}</div>
              </Reveal>
            ))}
          </div>
          <div className="cd-measured">
            {d.measured.map(([n, l]) => (
              <div key={l}><span>{n}</span><p>{l}</p></div>
            ))}
          </div>
          <p className="cd-note">{d.impactNote}</p>
        </div>
      </section>

      {/* ── VALIDATION ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="In the store">The handoff took several attempts to get right.</Head>
            <p className="cd-lede">
              I ran Figma prototypes past internal stakeholders and sales executives across
              multiple rounds, then sat in a store and watched real customers take the phone at
              consent and signature steps. Four changes came out of it.
            </p>
            <div className="cd-how"><b>How it was run</b><p>{d.how.validation}</p></div>
          </Reveal>
          <div className="cd-iters">
            {d.iterations.map(([t, body], i) => (
              <Reveal className="cd-iter" key={t} delay={i * 0.05}>
                <span className="cd-iter-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="cd-h3">{t}</h3>
                  <p>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LESSONS ────────────────────────────────────────────────── */}
      <Split rev eye="What it taught me" title={d.lessons.title} bullets={d.lessons.bullets.map(rich)}>
        <Phones items={[
          { src: F("m3/disbursed.png"), alt: "Loan disbursed" },
          { src: F("m3/portfolio.png"), alt: "Portfolio, the store manager view" },
        ]} />
      </Split>

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the decisions that did not make it."
      />
    </div>
  );
}
