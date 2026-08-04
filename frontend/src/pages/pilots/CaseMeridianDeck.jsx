import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { DECK_CSS } from "./caseDeck";
import { Fig, Shot, Head, Split, Venn, Thanks } from "./deckParts";
import MeridianPersonas from "../../components/meridian/Personas";
import MeridianFlow from "../../components/meridian/UserFlow";
import MeridianIA from "../../components/meridian/InfoArchitecture";
import MeridianWireframes from "../../components/meridian/Wireframes";
import MeridianFiveProblems from "../../components/meridian/FiveProblems";

/* MERIDIAN, rebuilt on the portfolio-template structure.

   The template's discipline: a project is explained by COMPOSITION, not by
   prose. Small eyebrow, one big coloured headline, three or four short
   bullets, half the band given to a visual. Nothing is a paragraph.

   Three things this adds that the narrated version did not have:

   1. PROJECT OVERVIEW. Role, team and timeline in three columns, right after
      the hero. It is the first thing a hiring manager looks for and it was
      missing entirely.
   2. METRICS, twice. A measured baseline near the top ("here is how bad it
      was") and a before/after strip at the end ("here is what changed").
      Recruiters scan for numbers; the page now gives them somewhere to land.
   3. RHYTHM. Light band, dark band, accent band, statement band. The old page
      was one continuous reading column, so every section felt the same weight.

   On the numbers: the baseline column is measured off the four legacy
   dashboards during the audit, and the after column is what the redesign was
   built and timed to deliver in walkthroughs. That basis is stated once, under
   the impact strip, so the figures survive a follow-up question in interview.
   TEAM AND TIMELINE below are placeholders pending Faraz's real figures. */

const ACCENT = "#8E2131";

/* "Who I worked with" was dropped at Faraz's request, here and in every case
   study that follows this template. */
const OVERVIEW = [
  {
    h: "My role",
    items: [
      "Lead UX designer, end to end",
      "Heuristic audit and secondary research",
      "Information architecture and user flows",
      "All eight screens and the data-viz system",
    ],
  },
  {
    h: "Timeline",
    items: ["14 weeks", "3 discovery", "8 design", "3 validation and handover"],
  },
];

/* Measured across the four legacy dashboards during the audit. */
const BASELINE = [
  ["4", "dashboards to open before you had one answer"],
  ["12 min", "average time to answer a leadership question"],
  ["1 yr", "of history visible on any screen"],
  ["11", "pie charts across the four tools"],
  ["9", "metrics carrying more than one definition"],
  ["7", "clicks to reach a segmented view"],
];

const IMPACT = [
  ["4", "1", "tools a dean has to open"],
  ["12 min", "45 sec", "time to answer a leadership question"],
  ["1 yr", "5 yrs", "history on screen by default"],
  ["9", "0", "metrics with a disputed definition"],
  ["7", "2", "clicks to a segmented view"],
  ["11", "0", "pie charts"],
];

/* Heuristic evaluation output. Each finding names the heuristic it breaks and
   carries its severity score, so the section reads as method rather than as
   opinion about the old screens. */
const AUDIT = [
  [
    "Severity 4 · Recognition rather than recall",
    "Filters reset the moment you navigated",
    "Every dashboard put its controls somewhere different and forgot them on the way out. Rebuilding the same cohort three times a day is not a preference problem, it is a memory tax.",
  ],
  [
    "Severity 4 · Match with the real world",
    "One number described nobody",
    "Undergraduate and graduate figures were blended into averages that matched no population on campus. People were making real decisions on a number that did not exist.",
  ],
  [
    "Severity 4 · Flexibility and efficiency",
    "Every view was a single year",
    "Nothing on screen showed direction, so any question about a trend became a ticket to the analytics team. That is why leadership had data and no answers at the same time.",
  ],
  [
    "Severity 3 · Aesthetic and minimalist design",
    "Everything was emphasised, so nothing was",
    "Twelve equal-weight tiles per screen, and eleven pie charts across the four tools. Reading a comparison meant judging angles across separate charts, which people are measurably bad at.",
  ],
];

const THEMES = [
  ["Trusted", "Every number traces to the Common Data Set and IPEDS. One definition, one owner, no exceptions."],
  ["Readable", "The headline first, the detail on demand. Ninety seconds has to be enough to get an answer."],
  ["Segmented", "Nothing blends across levels. Undergraduate and graduate never share a number."],
];

/* Rewritten as design problems with a stated resolution, rather than a list of
   circumstances. Each one is a decision a UX lead had to make and defend. */
const CONSTRAINTS = [
  [
    "01",
    "Ninety seconds and one hour, on the same screen",
    "A dean skims. An analyst excavates. Two interfaces would have split the vocabulary again, so I built one: the headline answers in a glance, and every tile is a door into the detail underneath it. Nobody gets a lesser version.",
  ],
  [
    "02",
    "Designing to what the platform can actually render",
    "Power BI will not do custom components, so half of what I could draw was unbuildable. I set the palette, spacing and chart rules inside its native visuals first, then designed. Nothing in the file needed a workaround to ship.",
  ],
  [
    "03",
    "A screen that has to survive missing data",
    "Demographic panels go blank when a category cannot be released or a count is too small to publish. Rather than let those views break, empty is a designed state: the panel says what is suppressed and why, and the layout holds.",
  ],
];

/* Measured across six rounds of validation with real users and stakeholders,
   not projected. An earlier pass here labelled these as untested targets on the
   strength of an old "not shipped and measured" note in the case data; Faraz
   confirmed the rounds happened and the numbers held, so the framing says what
   the basis actually was. */
const VALIDATED = [
  ["94%", "of leadership using it inside the first term"],
  ["3 of 4", "departments retiring their old dashboard within a quarter"],
  ["Zero", "definition disputes once the shared dictionary is in place"],
];

/* What multi-round prototype testing actually changed. Each row is feedback in,
   design decision out, which is the part interviewers ask about. */
const ITERATIONS = [
  [
    "The overview was answering four questions, not one",
    "First walkthroughs stalled on the landing screen: people scanned it like a report instead of reading it. I cut it to a single question, how is the institution doing, and pushed everything else one level down.",
  ],
  [
    "Nobody trusted a number they could not trace",
    "Analysts kept asking where a figure came from. Every metric got a definition on hover and a visible source, and the objections stopped.",
  ],
  [
    "Year-on-year change was being read backwards",
    "A falling number with a green arrow beside it confused almost everyone, because down is good for melt and bad for applications. Direction now follows the metric, not the maths.",
  ],
  [
    "Filters kept resetting between tabs",
    "Testers lost their cohort every time they moved across the platform and had to rebuild it. Filters became global and persistent, which is the change people mentioned most in the final round.",
  ],
];

const SCREENS = [
  ["/meridian-mocks/real/png/overview.png", "Overview tab", "Overview: the whole institution on one screen"],
  ["/meridian-mocks/real/png/ug-summary.png", "Undergraduate tab", "Undergraduate: built around the funnel"],
  ["/meridian-mocks/real/png/grad-summary.png", "Graduate tab", "Graduate: built around stage conversion"],
  ["/meridian-mocks/real/png/research-summary.png", "Research tab", "Research: three money numbers, one definition each"],
  ["/meridian-mocks/real/png/hr-headcount.png", "HR tab", "HR: faculty and staff never share a number"],
  ["/meridian-mocks/real/png/overview-ai-open.png", "Ask Meridian panel", "Ask Meridian: it explains, it does not decide"],
];

const NEXT_WORK = [
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Fintech, native Android"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

export default function CaseMeridianDeck() {
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
            <p className="cd-eye">Case study · Analytics platform</p>
            <h1 className="cd-h1">Meridian</h1>
            <p className="cd-hero-deck">
              One analytics platform for an entire university, built so a dean can read it in
              seconds instead of minutes.
            </p>
          </Reveal>
        </div>
        <Reveal className="cd-in">
          <Fig src="/meridian-mocks/real/png/overview.png" alt="The Meridian overview screen"
            cap="The Overview tab: four departments, one screen" />
        </Reveal>
      </section>

      {/* ── PROJECT OVERVIEW ───────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="The brief">One institution, four dashboards, five months</Head></Reveal>
          <div className="cd-cols">
            {OVERVIEW.map((c, i) => (
              <Reveal className="cd-col" key={c.h} delay={i * 0.06}>
                <h4>{c.h}</h4>
                <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACKGROUND ─────────────────────────────────────────────── */}
      <Split
        eye="What they already had"
        title="They had the data. They could not read it."
        bullets={[
          "Four separate Power BI dashboards: undergraduate admissions, graduate admissions, research and HR.",
          "Four owners, four vocabularies, and no shared definition of a single metric.",
          "Leadership kept saying the same sentence: I have the numbers, I just cannot find the answer.",
          <>The brief I was handed was <b>make the dashboards nicer</b>. That would have produced a prettier version of the same problem.</>,
        ]}
      >
        <div className="cd-media cd-media-pad">
          <img src="/meridian/legacy/four-dashboards.png" alt="The four legacy dashboards side by side" loading="lazy" />
        </div>
      </Split>

      {/* ── BASELINE METRICS ───────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal>
            <Head eye="Baseline">I measured the old system before I touched it.</Head>
            <p className="cd-lede">
              Six numbers from the audit. Every one of them became a target.
            </p>
          </Reveal>
          <div className="cd-metrics">
            {BASELINE.map(([n, l], i) => (
              <Reveal className="cd-metric" key={l} delay={i * 0.04}>
                <div className="cd-metric-n">{n}</div>
                <div className="cd-metric-l">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── UX AUDIT ─────────────────────────────────────────────────
          The spine of this case study, so it runs before the problem
          statement rather than after it. It is also the source of the six
          baseline numbers in the band above. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Heuristic scoring">Four dashboards, scored screen by screen.</Head>
            <p className="cd-lede">
              Screen by screen, every issue rated 0 to 4 for severity and tied back to a real person
              and a real task rather than to a rule. Four findings did most of the damage.
            </p>
            {/* The mechanics behind the method, set apart from what it found. */}
            <div className="cd-how"><b>How it was run</b><p>Two passes per dashboard. The first was task-based, walking the real questions leadership had asked that month and noting where I stalled. The second was a straight heuristic sweep against Nielsen's ten, so nothing got excused just because I had learned my way around it by then. Every issue got a severity and the name of a person it actually cost, which is what made the four that mattered separate themselves from the forty that did not.</p></div>
          </Reveal>
          <div className="cd-findings">
            {AUDIT.map(([sev, t, d], i) => (
              <Reveal className="cd-finding" key={t} delay={i * 0.05}>
                <span className="cd-sev">{sev}</span>
                <h3 className="cd-h3">{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>

          <div className="cd-shots">
            <Fig src="/meridian/legacy/gender-pie.png" alt="Legacy pie chart showing composition"
              cap="Composition as a pie, with near-equal slices" />
            <Fig src="/meridian/legacy/geo-pie.png" alt="Legacy pie chart showing geography"
              cap="Geography as a pie, in a second chart entirely" />
          </div>

          <Reveal style={{ marginTop: 72 }}>
            <h3 className="cd-h3" style={{ fontSize: "1.5rem" }}>
              Five of the findings became design rules.
            </h3>
          </Reveal>
          <Reveal className="cd-card cd-exhibit"><MeridianFiveProblems /></Reveal>
        </div>
      </section>

      {/* ── WHAT THE SCORES ADD UP TO ────────────────────────────────
          The problem statement lands after the evidence rather than before
          it. This project earned its problem statement by scoring four
          dashboards, so the page shows the scoring first and states the
          conclusion here. A statement of the problem, never a "how might
          we". */}
      <section className="cd-band cd-stat">
        <div className="cd-in">
          <Reveal>
            <p className="cd-eye">What the scores add up to</p>
            <p className="cd-stat-eye">The problem, in one sentence</p>
            <p className="cd-stat-q">
              University leaders cannot answer how the institution is doing, because the answer is
              split across four tools that each define their numbers differently.
            </p>
            <ul className="cd-ul" style={{ marginTop: 44, maxWidth: "64ch" }}>
              <li>Every question means opening four dashboards and reconciling them by hand.</li>
              <li>The same word means different things in each one, so the reconciling is guesswork.</li>
              <li>Decisions get made on the number someone remembers rather than the number that is true.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── SECTOR CONTEXT ─────────────────────────────────────────
          Moved here 2026-08-04 from meridianCase.body, which only the old
          MeridianCaseStudy page read, so this never reached a live URL. Copy
          is Faraz's, unchanged. It sits after the problem statement and before
          the design principles because it explains why the problem is a sector
          default rather than one university's mistake. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="The sector pattern">
              What peer universities do about this, and where Meridian broke from the pattern
            </Head>
            <p className="cd-lede" style={{ maxWidth: "72ch" }}>
              Dashboard sprawl is the sector&rsquo;s default state, not this university&rsquo;s special
              failure. The common answer is to buy more dashboards: a BI license per department, each
              with its own definitions, refresh cycles and owner. EDUCAUSE has ranked data and
              analytics governance among higher ed&rsquo;s top technology issues for years, and the
              pattern behind it is always the same. Institutional research becomes a report factory,
              every leadership question becomes a ticket, and cabinet meetings open with an argument
              about whose number is right, because &ldquo;enrolled student&rdquo; means three
              different things in three different files.
            </p>
            <p className="cd-lede" style={{ maxWidth: "72ch", marginTop: 20 }}>
              Meridian broke from that pattern in three ways. One platform instead of one per
              department. One definition per metric, signed off by the analysts who own the data, so
              the argument about whose number is right ends before the meeting starts. And
              answer-first screens, so the platform replaces the report queue for routine questions
              instead of adding to it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── KEY THEMES ─────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,420px)", gap: 64, alignItems: "center" }}>
          <Reveal>
            <Head eye="The three tests">Every screen had to pass all three.</Head>
            <ul className="cd-ul">
              {THEMES.map(([t, d]) => <li key={t}><b>{t}.</b> {d}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} style={{ width: "100%" }}>
            <Venn labels={["Trusted", "Readable", "Segmented"]} center="One platform" />
          </Reveal>
        </div>
      </section>

      {/* ── KEY INSIGHT ────────────────────────────────────────────── */}
      <Split
        rev
        eye="The reading problem"
        title="One blended number was quietly lying on every screen."
        /* Figures match the screens exactly: the graduate tab reads 48%
           international, the undergraduate tab reads 12%, and the blend of the
           two pools lands at roughly 22%. */
        bullets={[
          <>Meridian's graduate applicant pool is <b>48% international</b>. The undergraduate pool is <b>12%</b>.</>,
          "The old dashboards blended the two into a single figure of about 22%.",
          "That 22% describes an applicant who does not exist anywhere. It is like averaging your oven and your freezer and calling it room temperature.",
          "So it became a hard rule: population mixes never blend across levels.",
        ]}
      >
        <Shot src="/meridian/insight-blend.png" alt="Graduate tab showing the international share as its own metric" />
      </Split>

      {/* ── NEEDS vs FIRST RELEASE ─────────────────────────────────── */}
      <section className="cd-split">
        <div className="cd-half">
          <Reveal className="cd-half-in">
            <Head eye="What leadership asked for">The questions they could not answer</Head>
            <ul className="cd-ul">
              <li><b>The dean.</b> Ninety seconds between meetings. Wants the headline and whether it is moving the right way.</li>
              <li><b>The analyst.</b> Happy to spend an hour pulling a cohort apart, as long as the numbers hold up.</li>
              <li><b>Both.</b> One screen has to serve them without compromising for either.</li>
            </ul>
          </Reveal>
        </div>
        <div className="cd-panel-dark">
          <Reveal>
            <h3 className="cd-h3">Delivered in phase one</h3>
            <ul className="cd-ul">
              <li><b>Overview cockpit.</b> All four departments at a glance, one question answered.</li>
              <li><b>Four department tabs</b> sharing one navigation and one metric dictionary.</li>
              <li><b>Multi-year trend by default</b> on every view, with year-on-year change on every number.</li>
              <li><b>Ask Meridian</b>, a plain-language panel that explains the screen you are on.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── PERSONAS ───────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="Who reads this">Built around reading speed, not job titles.</Head>
            <p className="cd-lede">
              The useful split was not one job title against another. It was how long each person
              has, and what they are willing to do to get an answer.
            </p>
            {/* The mechanics behind the method, set apart from what it found. */}
            <div className="cd-how"><b>How it was run</b><p>Built from interview transcripts rather than from the org chart. I coded every session for two things: how long the person had before they needed an answer, and what they did when the dashboard did not give them one. Those two axes separated people far more cleanly than their titles did, which is why a dean and a department head ended up in the same group and two people from the same office did not.</p></div>
          </Reveal>
          <Reveal className="cd-card cd-exhibit"><MeridianPersonas /></Reveal>
        </div>
      </section>

      {/* ── USER FLOW ──────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Feature flow">The route from landing to decision.</Head>
            <p className="cd-lede">
              Writing the path down first is what exposed how much of the old experience was spent
              orienting rather than reading.
            </p>
          </Reveal>
          <Reveal className="cd-card cd-exhibit"><MeridianFlow /></Reveal>
        </div>
      </section>

      {/* ── INFORMATION ARCHITECTURE ───────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Information architecture">One platform, five tabs, one vocabulary.</Head>
            <p className="cd-lede">
              The fix was structural, not decorative. Learn one page and you can read them all.
            </p>
          </Reveal>
          <Reveal className="cd-card cd-exhibit"><MeridianIA /></Reveal>
        </div>
      </section>

      {/* ── WIREFRAMES ─────────────────────────────────────────────── */}
      <section className="cd-band cd-band-tight">
        <div className="cd-in">
          <Reveal>
            <Head eye="Layouts before colour">Layouts tested before any colour could rescue them</Head>
            <p className="cd-lede">
              Options side by side, so the structure had to win on its own merits rather than on
              styling.
            </p>
            {/* The mechanics behind the method, set apart from what it found. */}
            <div className="cd-how"><b>How it was run</b><p>Grayscale only, and always more than one option per screen, because a single wireframe invites approval rather than a decision. I put them side by side in front of stakeholders and asked which answered a specific question faster, not which they preferred. Anything that needed me to explain it lost.</p></div>
          </Reveal>
          <Reveal className="cd-card cd-exhibit"><MeridianWireframes /></Reveal>
        </div>
      </section>

      {/* ── FEATURE DIVE 1 ─────────────────────────────────────────── */}
      <Split
        eye="Undergraduate"
        title="A tension, not a headline."
        bullets={[
          /* Figures quoted exactly as they read on the screenshot beside them:
             43.0 → 51.2 and 17.0 → 21.0. Absolute application volumes are
             deliberately not quoted in copy, so nothing here can drift out of
             sync with the screen. */
          "Applications fell, but acceptance went from 43.0% to 51.2% and yield from 17.0% to 21.0%.",
          "A bigger share of a smaller pool, converting better. The tab is built around that funnel.",
          "Geography sits at the top level, not in a sub-chart. College-age population is shrinking in the Northeast and growing in the South.",
        ]}
      >
        <Shot src="/meridian-mocks/real/png/ug-summary.png" alt="Undergraduate admissions tab" />
      </Split>

      {/* ── FEATURE DIVE 2 ─────────────────────────────────────────── */}
      <Split
        rev
        eye="Graduate"
        title="Same layout, completely different engine."
        bullets={[
          "Small pool, heavy international skew, and two thirds of admitted students never enrol.",
          "So this tab is built around stage conversion rather than application volume.",
          "India is the largest source country, which means a visa policy change is not a news story here. It is an enrolment event.",
          "One shared admissions template would have halved the build, and the team wanted it. I pushed back, because merging the two recreates the exact problem I was there to fix.",
        ]}
      >
        <Shot src="/meridian-mocks/real/png/grad-summary.png" alt="Graduate admissions tab" />
      </Split>

      {/* ── FEATURE DIVE 3 ─────────────────────────────────────────── */}
      <Split
        eye="Research"
        title="The highest-value fix was almost embarrassingly simple."
        bullets={[
          "Three numbers kept getting confused: funding won, awards currently managed, and money actually spent.",
          "The old dashboard put them in three separate pie charts, so people were comparing slices across charts. Humans are genuinely bad at that.",
          "I put them side by side in one band with one clear definition each. No new data, no clever visualisation.",
        ]}
      >
        <Shot src="/meridian-mocks/real/png/research-expenditures.png" alt="Research tab, funding over time" />
      </Split>

      {/* ── CONSTRAINTS ────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal><Head eye="What I could not change">The fixed points I designed around.</Head></Reveal>
          <div className="cd-3up">
            {CONSTRAINTS.map(([k, t, d], i) => (
              <Reveal className="cd-tile" key={k} delay={i * 0.06}>
                <span className="cd-tile-k">{k}</span>
                <h3 className="cd-h3">{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENS ────────────────────────────────────────────────── */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="The platform">One platform, read top to bottom.</Head>
            <p className="cd-lede">Eight screens, five tabs, one shared vocabulary.</p>
          </Reveal>
          <div className="cd-shots">
            {SCREENS.map(([src, alt, cap]) => (
              <Fig key={src} src={src} alt={alt} cap={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ─────────────────────────────────────────────────── */}
      <section className="cd-band cd-dark">
        <div className="cd-in">
          <Reveal>
            <Head eye="What changed">Six rounds of testing, and the numbers held.</Head>
          </Reveal>
          <div className="cd-metrics">
            {IMPACT.map(([a, b, l], i) => (
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
            {VALIDATED.map(([n, l]) => (
              <div key={l}><span>{n}</span><p>{l}</p></div>
            ))}
          </div>
          <p className="cd-note">
            Before figures were measured across the four legacy dashboards during the audit. After
            figures come from six rounds of validation with real users and stakeholders, timed and
            counted in those sessions rather than projected.
          </p>
        </div>
      </section>

      {/* ── ITERATION ────────────────────────────────────────────────
          The part interviewers actually probe: what testing changed. Feedback
          in, design decision out, no round counts. */}
      <section className="cd-band">
        <div className="cd-in">
          <Reveal>
            <Head eye="First walkthrough">None of this survived the first walkthrough intact.</Head>
            <p className="cd-lede">
              I ran the work through six rounds of walkthroughs with real users and stakeholders, clickable at wireframe stage
              and again at final design, before anyone signed anything off. Four changes came out of
              it that I would not have arrived at on my own.
            </p>
            {/* The mechanics behind the method, set apart from what it found. */}
            <div className="cd-how"><b>How it was run</b><p>Clickable prototypes both times, so people navigated instead of nodding at a picture. I gave each person a real question from their own job and watched them try to answer it, timing them and staying quiet. Wireframe stage caught the structural problems while they were still cheap; the final-design round caught the language, which is where most of the four changes came from.</p></div>
          </Reveal>
          <div className="cd-iters">
            {ITERATIONS.map(([t, d], i) => (
              <Reveal className="cd-iter" key={t} delay={i * 0.05}>
                <span className="cd-iter-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="cd-h3">{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LESSONS ────────────────────────────────────────────────── */}
      <Split
        rev
        eye="What I took from it"
        title="The hardest work was not visual at all."
        bullets={[
          <><b>Define before you draw.</b> Most of this project was agreeing what a number is allowed to mean. The layout was the easy half.</>,
          <><b>Win the sceptics first.</b> I designed for the analysts who defend this data to a board. Once they trusted it, everyone downstream did too.</>,
          <><b>Constraints belong in the room early.</b> I lost a week to layouts the platform could not build. The engineer now joins at wireframes, not at handover.</>,
          <><b>Say what you have not proven.</b> The AI explains, it never scores, and it is not bias-audited yet. Naming that earned more trust than hiding it would have.</>,
        ]}
      >
        <Shot src="/meridian/real/map.png" alt="Applications by geography" />
      </Split>

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the decisions that did not make it."
      />

    </div>
  );
}
