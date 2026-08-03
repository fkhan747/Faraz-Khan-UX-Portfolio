import { Link } from "react-router-dom";
import { useCaseData } from "../../components/CaseStudyGate";
import Reveal from "../../components/Reveal";
import { DECK_CSS } from "./caseDeck";
import { Fig, Head, Thanks, rich } from "./deckParts";

/* AURORA on the slide-band template. Same system as Meridian and FinVista,
   in indigo.

   CONFIDENTIALITY: every word of narrative copy lives in src/data/auroraCase.js
   under `deck`, not in this file, and arrives through useCaseData() only after
   the vault is unlocked. Nothing here is a string a reader would care about, so
   the bundle ships no confidential text. Screenshots go through the shared Fig /
   Shot parts, which render via VaultImage and decrypt at view time. The route is
   wrapped in CaseStudyGate in App.js.

   Aurora is a WEB product, so its exhibits are wide screens in Shot frames.
   FinVista's Phones part is deliberately unused here: a desktop screenshot in a
   phone bezel would be a lie about the product.

   Two bands FinVista carries are absent on purpose rather than by oversight:
   there is no user-flow diagram and no captured screenshot of the inherited
   product. The audit band carries the "before" in words and numbers instead of
   inventing an artefact. Same for the design system, which has no Figma capture
   and so states its claim in copy.

   To change wording, edit the data module. To change composition, edit here. */

/* Indigo. Meridian owns maroon and FinVista owns green, so the third case study
   in the set takes the cool end. It also happens to suit an enterprise suite. */
const ACCENT = "#2A3A8F";
const A = (n) => `/aurora/${n}`;

/* Copy over a full-column product screen.

   FinVista puts its copy and its screens side by side, which works because a
   phone screenshot is legible at half width. An Aurora screen is a dense
   desktop UI: at half width it is a thumbnail nobody can read. So the web case
   study stacks instead, giving the screen the whole column. */
function Dive({ eye, title, bullets, src, alt, cap }) {
  return (
    <section className="cd-band">
      <div className="cd-in">
        <Reveal>
          <Head eye={eye}>{title}</Head>
          <ul className="cd-ul" style={{ maxWidth: "74ch" }}>
            {bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
          </ul>
        </Reveal>
        <Reveal className="cd-wide">
          <Fig src={src} alt={alt} cap={cap} className="" />
        </Reveal>
      </div>
    </section>
  );
}

const NEXT_WORK = [
  ["/case/meridian", "/meridian/cover.jpg", "Meridian", "University analytics"],
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Assisted lending"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

export default function CaseAuroraDeck() {
  const au = useCaseData();
  const d = au.deck;

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
            <h1 className="cd-h1">{au.title}</h1>
            <p className="cd-hero-deck">{d.standfirst}</p>
          </Reveal>
        </div>
        <Reveal className="cd-in">
          <Fig src={A("cover.jpg")} alt="Aurora marketing automation platform" cap={d.heroCaption} />
        </Reveal>
      </section>

      {/* ── THE ENGAGEMENT ─────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="The engagement">Who I was, and for how long</Head></Reveal>
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

      {/* ── THE WINDOW ───────────────────────────────────────────────
          Constraints lead this case study rather than closing it. Aurora was
          an acquired product being rebuilt underneath me on somebody else's
          schedule, and that fact drove every decision downstream, so it is
          stated before the work rather than filed as an afterthought. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="The window">Everything here was decided by a deadline I did not set.</Head>
            <p className="cd-lede">
              Three facts about the situation shaped the design more than any research finding did.
              They are worth stating before the work, not after it.
            </p>
          </Reveal>
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

      {/* ── WHAT I INHERITED ───────────────────────────────────────── */}
      <Dive eye="What I inherited" title={d.background.title} bullets={d.background.bullets}
        src={A("03_RBJ_Content_Tab.jpg")} alt="Recurring campaign content tab"
        cap="The content tab, sharing a canvas with the schedule rather than sitting on its own page" />

      {/* ── BASELINE METRICS ───────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal>
            <Head eye="Taking stock">Six numbers that described the thing I had been handed.</Head>
            <p className="cd-lede">Every one of them became something the rebuild had to answer for.</p>
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
            <Head eye="Walking the product">One bar, every screen: could a marketer ship unaided?</Head>
            <p className="cd-lede">
              Mostly they could not. I went through the whole product against that single question,
              rating each issue 0 to 4 for severity. Four of them were doing most of the damage.
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
        </div>
      </section>

      {/* ── WHAT IT ADDED UP TO ──────────────────────────────────────
          The problem statement lands as the conclusion of the audit rather
          than as an opening claim. On this project I genuinely did not know
          what the problem was until I had walked the product. */}
      <section className="cd-band cd-stat">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">What it added up to</p>
            <p className="cd-stat-eye">The problem, once I could name it</p>
            <p className="cd-stat-q">{d.problem.statement}</p>
            <ul className="cd-ul" style={{ marginTop: 44, maxWidth: "64ch" }}>
              {d.problem.bullets.map((b, i) => <li key={i}>{rich(b)}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── THE SWITCH COUNT ───────────────────────────────────────── */}
      <Dive eye="The switch count" title={d.insight.title} bullets={d.insight.bullets}
        src={A("07_Composer_Empty_AI.jpg")} alt="Composer empty state with AI in reach"
        cap="The composer opens with AI already in reach, so help is never a page away" />

      {/* ── RULES FOR THE REBUILD ────────────────────────────────────
          Deliberately a plain full-width list, not the three-circle diagram
          used on Meridian. Three case studies reaching for the same device is
          exactly the pattern this page is trying not to have. */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Rules for the rebuild">What I decided before I drew anything</Head>
            <ul className="cd-ul" style={{ maxWidth: "76ch" }}>
              {d.themes.map(([t, body]) => <li key={t}><b>{t}.</b> {body}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── NEEDS vs FIRST RELEASE ─────────────────────────────────── */}
      <section className="cd-split">
        <div className="cd-half">
          <Reveal className="cd-half-in">
            <Head eye="What it had to deliver">Three things the work had to deliver</Head>
            <ul className="cd-ul">{d.needs.map((b, i) => <li key={i}>{rich(b)}</li>)}</ul>
          </Reveal>
        </div>
        <div className="cd-panel-dark">
          <Reveal>
            <h3 className="cd-h3">What went out the door</h3>
            <ul className="cd-ul">{d.firstRelease.map((b, i) => <li key={i}>{rich(b)}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      {/* ── PERSONAS ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Who shares this product">One tool, three jobs, pulling in different directions.</Head>
            <p className="cd-lede">
              One wants speed, one wants consistency, one wants to be left alone to write. The
              single-canvas design is what let all three have it.
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
          <Reveal className="cd-aside">
            <h3 className="cd-h3">And then there is the recipient.</h3>
            <p>{d.customerNote}</p>
          </Reveal>
        </div>
      </section>

      {/* ── EARLY EXPLORATIONS ─────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="On paper">Cheap to be wrong here, expensive to be wrong later.</Head>
            <p className="cd-lede">
              Two directions for the recurring flow, two for where the AI lives, then rough layouts
              to test the structure before any styling could rescue it.
            </p>
            <div className="cd-how"><b>How it was run</b><p>{d.how.explorations}</p></div>
          </Reveal>
          <div className="cd-shots">
            {d.sketches.map(([src, cap]) => (
              <Fig key={src} src={A(src)} alt={cap} cap={cap} />
            ))}
          </div>
          <div className="cd-shots">
            {d.wireframes.map(([src, cap]) => (
              <Fig key={src} src={A(src)} alt={cap} cap={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE DIVES ──────────────────────────────────────────── */}
      {d.dives.map((dive) => (
        <Dive key={dive.eye} eye={dive.eye} title={dive.title} bullets={dive.bullets}
          src={A(dive.shot[0])} alt={dive.shot[1]} cap={dive.shot[1]} />
      ))}

      {/* ── DESIGN SYSTEM ──────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal>
            <Head eye="The component library">The part of this that outlived both flows.</Head>
            <p className="cd-lede">{d.designSystemNote}</p>
          </Reveal>
        </div>
      </section>

      {/* Constraints are not here: they open this case study, under "The
          window", because the situation drove the design rather than limiting
          it at the margins. */}

      {/* ── SCREENS ────────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="The rebuilt surfaces">Where the two flows ended up.</Head>
            <p className="cd-lede">{d.screensNote}</p>
          </Reveal>
          <div className="cd-shots">
            {d.screens.map(([src, alt]) => (
              <Fig key={src} src={A(src)} alt={alt} cap={alt} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ─────────────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal><Head eye="Before and after">The same six numbers, at handover.</Head></Reveal>
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
            <Head eye="Five rounds">By round four we were arguing about words, not layouts.</Head>
            <p className="cd-lede">
              Twenty-plus participants across five rounds, each one narrowing the changes. The point
              at which the arguments turned into vocabulary arguments is how I knew the structure
              had settled.
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
      <Dive eye="What I carry forward" title={d.lessons.title} bullets={d.lessons.bullets}
        src={A("11_Composer_Blocks_Library_Panel.jpg")} alt="Blocks library shared across the suite"
        cap="The blocks library: the part of this project that outlived both flows I designed" />

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the directions that did not survive testing."
      />
    </div>
  );
}
