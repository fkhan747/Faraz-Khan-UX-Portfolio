import Reveal from "../../components/Reveal";
import CaseTopBar from "../../components/CaseTopBar";
import Seo from "../../components/Seo";
import { rich, Thanks } from "./deckParts";
import { DECK_CSS } from "./caseDeck";
import { wdCss, Media, Pair, TextBlock, BeforeAfter } from "./caseWD";
import MeridianWireframes from "../../components/meridian/Wireframes";

/* MERIDIAN on the shared WongDoody rhythm (see pilots/caseWD.jsx), from
   Faraz's revised doc of 2026-09-14. THIS IS THE LIVE PAGE at /case/meridian;
   the slide-band CaseMeridianDeck it replaced is in git history. Meridian was never inside the vault, so
   the copy lives here rather than in an encrypted data module.

   The client is anonymised as Meridian; the tool (Power BI) is held constant
   and never blamed: before/after is a design transformation, not a platform
   swap. Screens are the crisp hi-fi rebuilds in public/meridian-mocks/real/
   png; the legacy crops in public/meridian/legacy are branding-free. */

const ACCENT = "#8E2131";
const R = (n) => `/meridian-mocks/real/png/${n}`;
const L = (n) => `/meridian/legacy/${n}`;

/* width / height, measured with PIL. */
const RATIO = {
  [R("overview.png")]: 0.9143, [R("ug-summary.png")]: 0.8689, [R("grad-summary.png")]: 0.7855,
  [R("research-summary.png")]: 1.2007, [R("hr-summary.png")]: 1.5222, [R("overview-ai-open.png")]: 1.3382,
  [R("ug-yoy.png")]: 1.1194, [R("ug-drillthrough.png")]: 0.9064,
  [L("four-dashboards.png")]: 1.7683, [L("gender-pie.png")]: 1.3798, [L("geo-pie.png")]: 1.9264,
  [L("hr-race.png")]: 1.5669,
};

const V = {
  title: ["Meridian Institute Analytics:", "One Cockpit for an Entire University"],
  tags: "Higher Education · Institutional Analytics · Power BI · Data Visualisation",
  deck: "Four siloed dashboards became one platform with five tabs, without changing the software underneath. A dean's time to an answer went from six minutes to two.",
  mark: { m: "Meridian", s: "Case study" },
  facts: [
    { label: "Role", value: "Lead UX Designer (Heuristic audit, information architecture, data-visualisation system)" },
    { label: "Scale", value: "Entire university ecosystem (Undergrad, Grad, Research, HR) · 94% leadership adoption in term 1" },
  ],
  cover: "/meridian/cover.jpg",
  pair: [
    { h: "The Challenge", ps: ["Meridian University ran its institutional analytics across four completely siloed Power BI dashboards: Undergraduate, Graduate, Research and HR. A dean wanting a holistic view of the university's health opened four tools, cross-referenced by hand, and spent an average of six minutes hunting for an answer."] },
    { h: "Our Solution", ps: ["I led the UX transformation that consolidated the four into a single, unified Power BI platform. By rethinking the information architecture and the charting rules, without changing the underlying software, we cut a dean's time-to-answer to two minutes and reached 94% adoption among university leadership in the first term."] },
  ],
  lead: { items: [{ src: R("overview.png"), alt: "The Overview tab", wide: true }], cap: "The Overview tab: KPI cards with last-year deltas, navy and crimson on a light canvas. Every card is a door into the module beneath it." },
  // Every figure here is measured (baseline audit, six validation rounds);
  // no abandonment, error or satisfaction numbers exist, so none appear.
  before: [["4", "disconnected dashboards"], ["6 min", "to answer a leadership question"], ["7", "clicks to reach a segmented view"], ["1 yr", "of default context"], ["11", "pie charts"], ["9", "disputed metric definitions"]],
  after: [["1", "unified analytics platform"], ["2 min", "to answer the same question"], ["2", "clicks to reach a segmented view"], ["5 yrs", "of historical context"], ["0", "pie charts, fit-for-purpose charting instead"], ["0", "disputed definitions: official source and owner on every metric"], ["94%", "leadership adoption in term 1"]],
  baNote: "Before figures from the audit of the four legacy dashboards; after figures measured across six validation rounds. No abandonment, error-rate or satisfaction numbers were collected, so none are claimed.",

  sections: [
    {
      n: "01", h: "Operating Context and Constraints",
      p: "This was not a blue-sky redesign with a new stack to pick. The legacy dashboards were built in Power BI, and the redesign had to ship in Power BI. The tool was not the problem; the architecture was. Three realities shaped the strategy:",
      cards: [
        ["The Power BI sandbox", "Design strictly to what Power BI renders natively. Palette, grid spacing and chart rules were defined against the platform's constraints before any UI was polished."],
        ["Two minutes vs one hour", "A dean skims for a headline. An analyst excavates for root causes. One UI serves both: headline metrics first, every tile a door into deeper data."],
        ["Graceful degradation", "University data is patchy. Missing demographic data could not break the layout, so suppressed panels are designed, intentional empty states."],
      ],
    },
    {
      n: "02", h: "The UX Audit: Diagnosing the Legacy Clutter",
      p: "Before sketching a wireframe, I ran a heuristic audit across the four legacy dashboards. The findings explained why people were abandoning the tools:",
      findingsTitle: "What the audit found",
      findings: [
        ["11 pie charts", "across 12-tile grids", "Aesthetic and minimalist design, severity 3. Visually exhausting and mathematically hard to read."],
        ["Filters reset", "on every navigation", "Recognition over recall, severity 4. Users re-entered their parameters constantly: the amnesia effect."],
        ["1 year", "visible in any view", "Flexibility and efficiency, severity 4. A basic trend question meant an IT ticket."],
        ["Blended averages", "matching no one", "Match with the real world, severity 4. Undergraduate and graduate figures merged into numbers that described no population on campus."],
        ["9 metrics", "with disputed definitions", "The same name meant different things on different dashboards."],
        ["4 tools", "to open for one answer", "Six minutes on average to a leadership question."],
      ],
      media: [
        { items: [{ src: L("gender-pie.png"), alt: "Legacy gender pie" }, { src: L("geo-pie.png"), alt: "Legacy geography pie" }, { src: L("hr-race.png"), alt: "Legacy HR pie" }], cap: "Audit artefacts, branding-free crops of the legacy dashboards: three of the eleven pie charts." },
      ],
    },
    {
      n: "03", h: "Architectural Explorations and the Core Pivot",
      ps: [
        "The structural pivot was moving from four isolated tools to one platform with five unified tabs: Overview, Undergraduate, Graduate, Research and HR.",
        "I mapped the new information architecture and user flows in hand-drawn wireframes, keeping the focus on hierarchy rather than pixel polish.",
      ],
      exhibit: "wireframes",
      exhibitCap: "Wireframe strip: the summary tabs, drill-throughs and year-over-year layouts, structure before polish.",
      cards: [
        ["The Overview cockpit pivot", "Instead of dropping users into data tables, an Overview landing tab answers how the institution is doing in one glance. Every KPI card drills into the module underneath."],
        ["Five tabs, one vocabulary", "Undergraduate, Graduate, Research and HR share one set of definitions, one palette and one chart grammar."],
        ["Overview to drill-down", "A dean stops at the headline. An analyst keeps clicking. Nobody gets a lesser version."],
      ],
    },
    {
      n: "04", h: "The Final Design: Trusted, Readable, Segmented",
      p: "With the wireframes locked, I developed a light, crisp UI system on Meridian's official brand typography and a data-optimised palette (navy, crimson, teal, purple).",
      media: [
        { items: [{ src: L("four-dashboards.png"), alt: "Before: the four legacy dashboards" }, { src: R("ug-summary.png"), alt: "After: the Undergraduate tab", wide: true }], cap: "Before and after. Left: the cluttered, pie-heavy legacy layout. Right: the Undergraduate tab, horizontal bars, donuts and the international-applications bubble map." },
      ],
      cards: [
        ["Trusted data", "The legacy dashboards had 9 metrics with disputed definitions. Now every number traces to an official source; hover reveals its exact definition and owner."],
        ["Fit-for-purpose charting", "All 11 pie charts deleted. Shares became donuts, comparisons became sorted horizontal bars, geography became a bubble map."],
        ["Contextual deltas", "Year-over-year colour follows human logic, not maths. For applications a decrease is red. For summer melt a decrease is green."],
      ],
      sub: "Global persistent filters",
      bullets: [["The highest-severity finding, fixed:", "filters now persist as users move between the Undergraduate, Graduate and Research tabs."]],
      media2: [
        { items: [{ src: R("grad-summary.png"), alt: "The Graduate tab", wide: true }, { src: R("research-summary.png"), alt: "The Research tab" }, { src: R("hr-summary.png"), alt: "The HR tab" }], cap: "The Graduate, Research and HR tabs, one system." },
      ],
    },
    {
      n: "05", h: "The AI Layer: Ask Meridian",
      ps: [
        "University leaders are accountable for these numbers, so automation had to be handled with care.",
        "Ask Meridian AI is not a separate product and not the default dashboard. It is a user-invoked modal, triggered by an Ask AI button, layered over the active canvas. An optional analytical assistant that surfaces background signals and next-best actions. It explains; it does not decide.",
      ],
      media: [{ items: [{ src: R("overview-ai-open.png"), alt: "Ask Meridian AI open over the Overview" }], cap: "Ask Meridian AI, open over the canvas. Grounded answers with source chips; the figures stay in view." }],
    },
    {
      n: "06", h: "Field Validation and Measured Outcomes",
      p: "Six rounds of validation with real university stakeholders, iterating the UI on their feedback: for example, cutting the Overview tab from answering four distinct questions down to one.",
      setup: [["6", "validation rounds"], ["Leadership · enrollment · HR · analysts", ""], ["Moderated walkthroughs on live prototypes", ""]],
      mapTitle: "Design change, and the outcome it produced",
      map: [
        ["Overview cockpit, one question answered in a glance", "6 min → 2 min to a leadership answer"],
        ["Global persistent filters across tabs", "7 → 2 clicks to a segmented view"],
        ["Multi-year views by default", "1 → 5 years of context on screen"],
        ["Official definition, source and owner on every metric", "9 → 0 disputed definitions"],
        ["Fit-for-purpose charting rules", "11 → 0 pie charts"],
      ],
      resultsTitle: "Adoption",
      results: [["94%", "leadership adoption in the first term"], ["3 of 4", "departments retired their legacy dashboard within a quarter"], ["6", "validation rounds with real stakeholders"]],
      ps2: ["By prioritising clear information architecture over visual gimmicks, a frustrating reporting chore became an indispensable strategic asset."],
    },
  ],
};

const NEXT_WORK = [
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Assisted lending"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/threadfold", "/threadfold/cover.jpg", "Threadfold", "Crowdfunding commerce"],
];

export default function CaseMeridianWD() {
  const v = V;
  return (
    <div className="wd cd" style={{ "--acc": ACCENT }} data-testid="meridian-wd">
      <Seo title="Meridian case study" description={v.deck} />
      <style>{DECK_CSS}</style>
      <style>{wdCss(ACCENT)}</style>
      <CaseTopBar accent={ACCENT} />

      <div className="wd-wrap">
        <section className="wd-hero">
          <img src={v.cover} alt="Meridian" />
          <div className="wd-hero-t">
            <p className="wd-tags">{v.tags}</p>
            <h1 className="wd-h1">{v.title[0]}<b>{v.title[1]}</b></h1>
          </div>
        </section>

        <Reveal className="wd-deck">
          <p>{rich(v.deck)}</p>
          <div className="wd-mark"><div className="m">{v.mark.m}</div><div className="s">{v.mark.s}</div></div>
        </Reveal>
        <div className="wd-meta">
          {v.facts.map((f) => <div key={f.label}><b>{f.label}</b>{f.value}</div>)}
        </div>

        <BeforeAfter before={v.before} after={v.after} note={v.baNote} />
        <Pair sections={v.pair} />
        <Media items={v.lead.items} cap={v.lead.cap} ratios={RATIO} />

        {v.sections.map((s) => (
          <div key={s.h}>
            <TextBlock s={s} />
            {s.exhibit === "wireframes" ? (
              <Reveal>
                <figure className="wd-media">
                  <div className="cd-card cd-exhibit" style={{ margin: 0 }}><MeridianWireframes /></div>
                  {s.exhibitCap ? <figcaption>{s.exhibitCap}</figcaption> : null}
                </figure>
              </Reveal>
            ) : null}
            {(s.media || []).map((m, i) => <Media key={i} items={m.items} cap={m.cap} ratios={RATIO} />)}
            {(s.media2 || []).map((m, i) => <Media key={`b${i}`} items={m.items} cap={m.cap} ratios={RATIO} />)}
            {s.ps2 ? <Reveal className="wd-text" style={{ marginTop: 48 }}>{s.ps2.map((t) => <p key={t.slice(0, 20)}>{rich(t)}</p>)}</Reveal> : null}
          </div>
        ))}
      </div>

      <Thanks
        items={NEXT_WORK}
        blurb="Happy to walk through any part of this in more detail, including the decisions that did not make it."
      />
    </div>
  );
}
