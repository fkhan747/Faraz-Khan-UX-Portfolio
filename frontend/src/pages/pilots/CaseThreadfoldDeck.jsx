import { Link } from "react-router-dom";
import { useCaseData } from "../../components/CaseStudyGate";
import Reveal from "../../components/Reveal";
import { DECK_CSS } from "./caseDeck";
import { Fig, Head, Thanks, rich } from "./deckParts";

/* JACK OF ALL THREADS on the slide-band template, in burnt orange.

   CONFIDENTIALITY: narrative copy lives in src/data/threadfoldCase.js under `deck`,
   not in this file, and arrives through useCaseData(). Images render via the
   shared Fig part, which goes through VaultImage. The route is wrapped in
   CaseStudyGate in App.js.

   THIS IS THE METHOD-HEAVY ONE. Threadfold was built from nothing rather than
   redesigned, so it is the only case in the set that can honestly show the
   front half of a product process, and it carries the weight for that:
   assumption mapping, two-sided research, a service blueprint, IA validation
   and five test rounds.

   Two things keep it from reading as a method parade, which the research on
   portfolio rejection says is itself a junior signal:

   1. Every method band is written as a DECISION with a tradeoff, not as an
      activity that happened. The assumption map exists to explain why creator
      promotion was designed for first; the blueprint exists because it
      surfaced two interface problems a journey map could not.
   2. Constructed figures and verifiable ones live in SEPARATE bands. "What
      moved" holds product instrumentation; "On the record" holds press and
      partners. See the METRICS note in the data module.

   The model band still leads, because teaching that model to a first-time
   visitor in one scroll WAS the design problem.

   To change wording, edit the data module. To change composition, edit here. */

/* Burnt orange. Meridian is maroon, FinVista green, Aurora indigo, so this
   takes the warm end. Verified at 5.8:1 on the paper ground and 5.0:1 on its
   own 10% tint, which is what the small severity/role labels sit on. */
const ACCENT = "#96420C";
const J = (n) => `/threadfold/${n}`;

const NEXT_WORK = [
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Assisted lending"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
];

/* Copy above a full-column screen. Threadfold's screens are wide responsive web, so
   they take the whole column like Aurora's rather than sitting in a phone
   frame beside the text. */
function Band({ eye, title, bullets, src, alt, cap, how }) {
  return (
    <section className="cd-band">
      <div className="cd-in">
        <Reveal>
          <Head eye={eye}>{title}</Head>
          <ul className="cd-ul" style={{ maxWidth: "74ch" }}>
            {bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
          </ul>
          {/* The mechanics of the method, kept separate from what it produced.
              An interviewer asking "but how did you actually do that" should
              find the answer on the page rather than have to ask. */}
          {how ? (
            <div className="cd-how"><b>How it was run</b><p>{how}</p></div>
          ) : null}
        </Reveal>
        {src ? (
          <Reveal className="cd-wide">
            <Fig src={src} alt={alt} cap={cap} className="" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export default function CaseThreadfoldDeck() {
  const jt = useCaseData();
  const d = jt.deck;

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
            <h1 className="cd-h1">{jt.title}</h1>
            <p className="cd-hero-deck">{d.standfirst}</p>
          </Reveal>
        </div>
        <Reveal className="cd-in">
          <Fig src={J("cover.jpg")} alt="Threadfold platform" cap={d.heroCaption} />
        </Reveal>
      </section>

      {/* ── WHAT I OWNED ───────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="My part in it">From a blank page to a live platform</Head></Reveal>
          <div className="cd-cols">
            {d.owned.map((c, i) => (
              <Reveal className="cd-col" key={c.h} delay={i * 0.06}>
                <h4>{c.h}</h4>
                <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MODEL ────────────────────────────────────────────────
          Leads the case study. Getting a first-time visitor to understand
          this in a single scroll was the actual design problem, so the page
          does to the reader what the homepage had to do to them. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="How a campaign works">You publicise. We produce. You keep the profit.</Head>
            <p className="cd-lede">
              Almost nobody arriving on this site had seen a crowdfunded t-shirt before, so the
              whole model had to land in one scroll before anyone would sign up. Here it is in the
              three steps the homepage used.
            </p>
          </Reveal>
          <div className="cd-3up">
            {d.model.map(([n, t, body], i) => (
              <Reveal className="cd-tile" key={n} delay={i * 0.06}>
                <span className="cd-tile-k">{n}</span>
                <h3 className="cd-h3">{t}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="cd-wide">
            <Fig src={J("01-homepage.jpg")} alt="Homepage explaining the model"
              cap="The homepage: model first, live campaigns second, press credibility third"
              className="" />
          </Reveal>
        </div>
      </section>

      {/* ── THE STACK IT REPLACED ──────────────────────────────────── */}
      <section className="cd-band cd-stat">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">The stack it replaced</p>
            <p className="cd-stat-eye">What selling a tee used to take</p>
            <p className="cd-stat-q">{d.problem.statement}</p>
            <ul className="cd-ul" style={{ marginTop: 44, maxWidth: "64ch" }}>
              {d.problem.bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── THE NUMBERS THAT ARE ACTUALLY TRUE ───────────────────────
          Structural facts about the product, not claimed outcomes. See the
          METRICS note in the data module. */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal>
            <Head eye="The shape of it">Six numbers, none of them a performance claim.</Head>
            <p className="cd-lede">
              These describe how the product works rather than how it performed. What moved is
              further down, once the methods that moved it have been shown.
            </p>
          </Reveal>
          <div className="cd-metrics">
            {d.facts.map(([n, l], i) => (
              <Reveal className="cd-metric" key={l} delay={i * 0.04}>
                <div className="cd-metric-n">{n}</div>
                <div className="cd-metric-l">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE BET ────────────────────────────────────────────────── */}
      <Band eye="The bet" title={d.bet.title} bullets={d.bet.bullets} />

      {/* ── ASSUMPTIONS ────────────────────────────────────────────── */}
      <Band eye="What could kill it" title={d.assumptions.title} bullets={d.assumptions.bullets}
        how={d.assumptions.how}
        src={J(d.assumptions.shot[0])} alt={d.assumptions.shot[1]} cap={d.assumptions.shot[1]} />

      {/* ── RESEARCH PLAN ──────────────────────────────────────────── */}
      <Band eye="Studying both sides" title={d.research.title} bullets={d.research.bullets}
        how={d.research.how}
        src={J(d.research.shot[0])} alt={d.research.shot[1]} cap={d.research.shot[1]} />

      {/* ── FINDINGS ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="What came back">Four things I did not expect.</Head>
            <p className="cd-lede">
              One of them broke the assumption the whole model rested on, which was the point of
              testing it before designing anything.
            </p>
          </Reveal>
          <div className="cd-findings">
            {d.findings.map(([t, body], i) => (
              <Reveal className="cd-finding" key={t} delay={i * 0.05}>
                <h3 className="cd-h3">{t}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="cd-how"><b>How it was run</b><p>{d.findingsHow}</p></Reveal>
        </div>
      </section>

      {/* ── SERVICE BLUEPRINT ────────────────────────────────────────
          The centrepiece of the method half. This product's promise lives
          almost entirely below the line of visibility, which is exactly the
          condition where a blueprint tells you something a journey map cannot. */}
      <Band eye="Service blueprint" title={d.blueprint.title} bullets={d.blueprint.bullets}
        how={d.blueprint.how}
        src={J(d.blueprint.shot[0])} alt={d.blueprint.shot[1]} cap={d.blueprint.shot[1]} />

      {/* ── TWO SIDES ──────────────────────────────────────────────── */}
      <Band eye="Two sides, one page" title={d.twoSides.title} bullets={d.twoSides.bullets}
        src={J("flow.svg")} alt="Raiser and buyer journeys meeting at the campaign page"
        cap="The raiser and buyer journeys, meeting at exactly one place" />

      {/* ── ARCHITECTURE ───────────────────────────────────────────── */}
      <Band eye="Under one roof" title={d.ia.title} bullets={d.ia.bullets}
        src={J("ia.svg")} alt="Information architecture across studio, storefront and back office"
        cap="Organised around three jobs, not three products" />

      {/* ── IA VALIDATION ──────────────────────────────────────────── */}
      <Band eye="Testing the structure" title={d.iaMethod.title} bullets={d.iaMethod.bullets}
        how={d.iaMethod.how}
        src={J(d.iaMethod.shot[0])} alt={d.iaMethod.shot[1]} cap={d.iaMethod.shot[1]} />

      {/* ── GRAYBOX ────────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Graybox first">Three screens carried the weight, so those got options.</Head>
            <p className="cd-lede">
              I blocked out the heaviest layouts in grayscale and pressure-tested each against its
              one job, before any visual design could make a weak structure look convincing.
            </p>
          </Reveal>
          <div className="cd-shots">
            {d.wireframes.map(([src, cap]) => (
              <Fig key={src} src={J(src)} alt={cap} cap={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE BANDS ──────────────────────────────────────────── */}
      {d.dives.map((dive) => (
        <Band key={dive.eye} eye={dive.eye} title={dive.title} bullets={dive.bullets}
          src={J(dive.shot[0])} alt={dive.shot[1]} cap={dive.shot[1]} />
      ))}

      {/* ── RESPONSIVE ───────────────────────────────────────────────
          Unique to this case study: it is the only responsive-web project in
          the set, and the only one where I got the platform priority wrong. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Desktop down to phone">{d.responsive.title}</Head>
            <ul className="cd-ul" style={{ maxWidth: "74ch" }}>
              {d.responsive.bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
            </ul>
          </Reveal>
          <div className="cd-gallery">
            {d.mobile.map(([src, alt]) => (
              <Fig key={src} src={J(src)} alt={`Mobile: ${alt}`} cap={alt} className="cd-phone-cell" />
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENS ────────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="The rest of the product">Both sides of the platform.</Head></Reveal>
          <div className="cd-shots">
            {d.screens.map(([src, alt]) => (
              <Fig key={src} src={J(src)} alt={alt} cap={alt} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEST ROUNDS ────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Five rounds">Each round took something away.</Head>
            <p className="cd-lede">
              Five participants per side per round, which is where new findings dry up for a single
              group. Two distinct groups meant ten people a round, not five.
            </p>
          </Reveal>
          <div className="cd-iters">
            {d.testing.map(([t, body], i) => (
              <Reveal className="cd-iter" key={t} delay={i * 0.05}>
                <span className="cd-iter-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="cd-h3">{t}</h3>
                  <p>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="cd-how"><b>How it was run</b><p>{d.testingHow}</p></Reveal>
        </div>
      </section>

      {/* ── OUTCOME ────────────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal><Head eye="What moved">The numbers the testing was aimed at.</Head></Reveal>
          <div className="cd-metrics">
            {d.outcome.map(([a, b, l], i) => (
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
            {d.outcomeMeasured.map(([n, l]) => (
              <div key={l}><span>{n}</span><p>{l}</p></div>
            ))}
          </div>
          <p className="cd-note">{d.outcomeNote}</p>
        </div>
      </section>

      {/* ── ON THE RECORD ────────────────────────────────────────────
          Kept separate from the outcome band above: this is the part someone
          could independently verify, so it does not get mixed in with the
          product's own instrumentation. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="On the record">What was written about it at the time.</Head>
            <ul className="cd-ul" style={{ maxWidth: "72ch" }}>
              {d.record.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT I WOULD CHANGE ────────────────────────────────────── */}
      <Band eye="With hindsight" title={d.differently.title} bullets={d.differently.bullets}
        src={J("05-campaign.jpg")} alt="Public campaign page"
        cap="The campaign page: the screen that most needed to behave like a landing page" />

      <Thanks
        items={NEXT_WORK}
        blurb="This is the oldest project here and the one I am most willing to pick apart. Happy to go through what I would rebuild."
      />
    </div>
  );
}
