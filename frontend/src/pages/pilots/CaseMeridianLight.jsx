import { Link } from "react-router-dom";
import { Maximize2 } from "lucide-react";
import { useLightbox } from "../../components/Lightbox";
import { CASE_CSS } from "./caseLight";
import MeridianPersonas from "../../components/meridian/Personas";
import MeridianFlow from "../../components/meridian/UserFlow";
import MeridianIA from "../../components/meridian/InfoArchitecture";
import MeridianWireframes from "../../components/meridian/Wireframes";
import MeridianFiveProblems from "../../components/meridian/FiveProblems";

/* MERIDIAN, light language + narrated voice + named method.

   Two things are doing work here at once:

   1. VOICE, from the Eleken RedOwl case Faraz referenced. First person, past
      tense, chronological. Every heading is a claim about what I did, never a
      label. Two or three short paragraphs, then a visual. It should read out
      loud in an interview with no editing.

   2. METHOD, made explicit. Each section carries a small step label naming the
      actual UX method, because a recruiter scanning for process needs to see
      the words "problem statement", "persona", "information architecture",
      "wireframes". The narration explains the thinking; the label names the
      technique. Neither one alone was enough.

   Artefacts are the existing components from the dark case study, re-themed in
   place by .cl-exhibit rather than forked. Facts unchanged, client anonymised,
   figures scaled (stated in the closing note). */

const ACCENT = "#8E2131";

const FACTS = [
  ["Role", "Lead UX designer, UX and data viz"],
  ["Client", "A university, anonymised"],
  ["Platform", "Power BI"],
  ["Scope", "Four departments, one platform"],
];

/* Every figure opens in the shared Lightbox. The expand button is always
   visible rather than hover-only, so it is discoverable on touch too. */
function Fig({ src, alt, cap, flush }) {
  const { open } = useLightbox();
  return (
    <figure className="cl-fig" style={flush ? { marginTop: 0 } : undefined}>
      <button type="button" className="cl-figbtn" onClick={() => open({ src, alt, caption: cap })}>
        <img src={src} alt={alt} loading="lazy" />
      </button>
      <span className="cl-zoom" role="button" tabIndex={0} aria-label={`Open ${alt} full screen`}
        onClick={() => open({ src, alt, caption: cap })}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open({ src, alt, caption: cap }); } }}>
        <Maximize2 size={15} strokeWidth={1.9} />
      </span>
      <figcaption>{cap}</figcaption>
    </figure>
  );
}

/* Step label + claim heading, the pattern every section uses. */
function Head({ step, children }) {
  return (
    <>
      <span className="cl-tag">{step}</span>
      <h2 className="cl-h2">{children}</h2>
    </>
  );
}

export default function CaseMeridianLight() {
  return (
    <div className="cl" style={{ "--acc": ACCENT }}>
      <style>{CASE_CSS}</style>

      <header className="cl-top">
        <div className="cl-top-in">
          <Link to="/pilot/metalab" className="cl-back">← All work</Link>
          <span className="cl-mark">Faraz Khan</span>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="cl-wrap" style={{ paddingTop: 74 }}>
        <h1 className="cl-h1">Meridian</h1>
        <p className="cl-deck">
          How I turned four disconnected dashboards into one platform a dean can read in seconds.
        </p>
        <dl className="cl-facts">
          {FACTS.map(([k, v]) => (
            <div className="cl-fact" key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>

      <main className="cl-wrap">

        {/* 01 CONTEXT */}
        <section className="cl-sec cl-sec-first">
          <div className="cl-read">
            <Head step="01 · Context">They had all the data already. They just could not read it.</Head>
            <p className="cl-p">
              Meridian is a university. I am calling them that because the real client is under an NDA.
            </p>
            <p className="cl-p">
              They came to me with four separate Power BI dashboards, one each for undergraduate
              admissions, graduate admissions, research and HR. Four departments built them, four
              people owned them, and none of them spoke to each other.
            </p>
            <p className="cl-p">
              What I kept hearing from leadership was a version of the same sentence: I have the
              numbers, I just cannot find the answer.
            </p>
          </div>
          <Fig src="/meridian/legacy/four-dashboards.png" alt="The four legacy dashboards side by side" cap="The four dashboards I was handed on day one" />
        </section>

        {/* 02 PROBLEM STATEMENT */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="02 · Problem statement">So I wrote the problem down in one sentence before touching anything.</Head>
            <p className="cl-p">
              Getting this right mattered, because the brief I was given was &ldquo;make the dashboards
              nicer&rdquo; and that would have produced a prettier version of the same problem.
            </p>
            <p className="cl-pull">
              University leaders can see every number and still cannot answer how the institution is
              doing, because the data is split across four tools that each speak a different language.
            </p>
            <p className="cl-p cl-quiet">
              Two different readers collide on the same screen: a dean with ninety seconds between
              meetings who wants the headline, and an analyst who wants to pull it apart for an hour.
              The old tools served neither.
            </p>
          </div>
        </section>

        {/* 03 HEURISTIC AUDIT */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="03 · Heuristic evaluation">I scored all four dashboards against Nielsen&apos;s heuristics.</Head>
            <p className="cl-p">
              I went through them screen by screen and rated every problem 0 to 4 for severity, then
              tied each one back to a real person and a real task rather than to a rule.
            </p>
            <p className="cl-p">
              The same faults kept coming up. Maroon backgrounds fighting the data, pie charts
              everywhere, type small enough that you lean into the monitor, and every screen showing
              exactly one year.
            </p>
            <p className="cl-pull">
              One year of a number is a photograph. Nobody can tell you if someone is getting healthier
              from one photograph.
            </p>
          </div>
          <div className="cl-duo">
            <Fig flush src="/meridian/legacy/gender-pie.png" alt="Legacy pie chart" cap="Composition shown as a pie, repeatedly" />
            <Fig flush src="/meridian/legacy/geo-pie.png" alt="Legacy geography pie chart" cap="Geography, also a pie" />
          </div>
          <div className="cl-exhibit"><MeridianFiveProblems /></div>
        </section>

        {/* 04 SECONDARY RESEARCH */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="04 · Secondary research">Then I read what was actually happening across the sector.</Head>
            <p className="cl-p">
              I wanted to know which pressures were real before drawing anything, so I worked through
              published sector research: enrolment forecasts, the shift on test-optional policy, and
              what changed after the 2023 Supreme Court ruling.
            </p>
            <p className="cl-p">
              Six findings came out of it and I turned each into a rule the design had to obey. The
              most useful was geographic. College-age population is shrinking in the Northeast and
              growing in the South, so where an applicant comes from is not a detail. It became a
              top-level filter.
            </p>
          </div>
          <Fig src="/meridian/legacy/intl-country.png" alt="Legacy international students by country" cap="The old international view: one year, no trend" />
        </section>

        {/* 05 THE KEY INSIGHT */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="05 · Key insight">One blended number was quietly lying on every screen.</Head>
            <p className="cl-p">
              Meridian&apos;s graduate population is about <b>48% international</b>. Undergraduates are
              about <b>4%</b>. The old dashboards blended them into a single figure of roughly 20%.
            </p>
            <p className="cl-p">
              That 20% describes a student who does not exist anywhere on campus. It is like averaging
              your oven and your freezer and calling it room temperature. Technically a number,
              completely useless.
            </p>
            <p className="cl-p">
              So I made it a hard rule: population mixes never blend across levels.
            </p>
          </div>
          <Fig src="/meridian/legacy/by-school.png" alt="Legacy breakdown by school" cap="The old breakdowns mixed levels without saying so" />
        </section>

        {/* 06 PERSONAS */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="06 · Personas">I built the personas around reading speed, not job titles.</Head>
            <p className="cl-p">
              The useful split was not job title versus job title. It was how long each person has and what
              they are willing to do to get an answer.
            </p>
            <p className="cl-p">
              One lands for ninety seconds and needs the headline handed to them. The other will happily
              spend an hour pulling a cohort apart. Every screen had to serve both without compromising
              for either, which is where the headline-then-drill structure came from.
            </p>
          </div>
          <div className="cl-exhibit"><MeridianPersonas /></div>
        </section>

        {/* 07 USER FLOW */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="07 · User flow">I mapped the route from landing to decision.</Head>
            <p className="cl-p">
              Before laying out a single screen I wrote down the path: land on the overview, read the
              headline, pick a module, filter to a cohort, then act or export.
            </p>
            <p className="cl-p">
              Writing it out is what exposed how much of the old experience was spent orienting rather
              than reading. That orienting time is the thing the whole redesign is aimed at.
            </p>
          </div>
          <div className="cl-exhibit"><MeridianFlow /></div>
        </section>

        {/* 08 INFORMATION ARCHITECTURE */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="08 · Information architecture">I rebuilt it as one platform with five tabs.</Head>
            <p className="cl-p">
              The fix was structural, not decorative. One shared navigation. The Overview answers a
              single question, how is the institution doing, and each of the other four tabs owns its
              department.
            </p>
            <p className="cl-p">
              Every view opens on a multi-year trend by default and every number carries a year-on-year
              change. A raw count does not start a conversation. Down 25% does.
            </p>
            <p className="cl-pull">Learn one page and you can read them all.</p>
          </div>
          <div className="cl-exhibit"><MeridianIA /></div>
        </section>

        {/* 09 WIREFRAMES */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="09 · Wireframes">I explored the hardest screens in grayscale first.</Head>
            <p className="cl-p">
              I sketched the difficult layouts before any visual design, putting the options side by
              side so the structure had to win on its own merits rather than on styling.
            </p>
            <p className="cl-p">
              This is also where the Power BI constraint got settled. Everything had to be buildable
              with native behaviour, native drill-through and standard visuals. I could have drawn
              something gorgeous the build team could not ship, so I agreed the limits with engineering
              up front and designed inside them.
            </p>
          </div>
          <div className="cl-exhibit"><MeridianWireframes /></div>
        </section>

        {/* 10 UI DESIGN */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="10 · UI design">The undergrad and graduate tabs look identical and share no data at all.</Head>
            <p className="cl-p">
              Undergraduate is a tension rather than a headline. Applications fell, acceptance went from
              about 43% to 51%, enrolment 17% to 21%. They are taking a bigger share of a smaller pool
              and converting better.
            </p>
            <p className="cl-p">
              Graduate runs on a different engine. Small pool, heavy international skew, and two thirds
              of admitted students never enrol, so I built that tab around stage conversion instead of
              application volume. India is the largest source country, which means a visa policy change
              is not a news story here. It is an enrolment event.
            </p>
            <p className="cl-p cl-quiet">
              One shared admissions template would have halved the build and the team wanted it. I
              pushed back, because merging the two would have recreated the exact problem I was there
              to fix.
            </p>
          </div>
          <div className="cl-duo">
            <Fig flush src="/meridian-mocks/real/png/ug-summary.png" alt="Undergraduate tab" cap="Undergraduate, built around the funnel" />
            <Fig flush src="/meridian-mocks/real/png/grad-summary.png" alt="Graduate tab" cap="Graduate, built around stage conversion" />
          </div>
          <Fig src="/meridian-mocks/real/png/overview.png" alt="The Overview tab" cap="Overview: the whole institution on one screen" />
        </section>

        {/* 11 THE SIMPLEST FIX */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="11 · Data visualisation">The highest-value fix was almost embarrassingly simple.</Head>
            <p className="cl-p">
              People kept confusing three numbers: funding won, awards currently managed, and money
              actually spent. Three different things with very different totals.
            </p>
            <p className="cl-p">
              The old dashboard put them in three separate pie charts, so people were comparing slices
              across charts, which humans are genuinely bad at. I put them side by side in one band with
              one clear definition each. No new data, no clever visualisation.
            </p>
          </div>
          <Fig src="/meridian-mocks/real/png/research-expenditures.png" alt="Research tab, money over time" cap="Research: the three money numbers, side by side" />
        </section>

        {/* 12 RESTRAINT + ETHICS */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="12 · Ethics and restraint">On HR and AI, the design decisions were about what not to build.</Head>
            <p className="cl-p">
              Headcount splits into faculty and staff, two populations with different rules, so they
              never share a number. Demographics on that tab are composition, never performance, small
              counts are suppressed, and the views degrade gracefully when a category cannot be
              released after the 2023 ruling.
            </p>
            <p className="cl-p">
              Predictive analytics in admissions carries a documented bias risk, so Ask Meridian
              summarises and explains what is already on screen and nothing more. It never scores an
              applicant. That was not a feature decision, it was a line I was not willing to cross.
            </p>
          </div>
          <div className="cl-duo">
            <Fig flush src="/meridian-mocks/real/png/hr-headcount.png" alt="HR tab, headcount" cap="HR: faculty and staff kept apart on purpose" />
            <Fig flush src="/meridian-mocks/real/png/overview-ai-open.png" alt="Ask Meridian AI panel" cap="Ask Meridian: it explains, it does not decide" />
          </div>
        </section>

        {/* 13 VALIDATION */}
        <section className="cl-sec">
          <div className="cl-read">
            <Head step="13 · Validation">The analysts who own the data signed off on every number.</Head>
            <p className="cl-p">
              The validation that mattered most was the institutional research team. They own this data
              and have to defend it in front of a board, and they confirmed every number on screen means
              exactly what their records say.
            </p>
            <p className="cl-p">
              If those people do not trust it, nothing else about the project matters.
            </p>
            <p className="cl-p" style={{ marginTop: 32 }}>
              The thing I took away from this one is that the hardest work was not visual at all. It was
              deciding what a number is allowed to mean, and then holding that line on every screen.
            </p>
          </div>
          <Fig src="/meridian/real/map.png" alt="Applications by geography" cap="Geography as a first-class filter, not a sub-chart" />
        </section>

        <div className="cl-end">
          <Link to="/pilot/metalab" className="cl-btn">All work</Link>
          <Link to="/contact" className="cl-btn cl-btn-ghost">Get in touch</Link>
        </div>
      </main>
    </div>
  );
}
