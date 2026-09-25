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
  deck: "Four separate dashboards became one platform with five tabs, and we did it without changing the software underneath. Getting an answer went from about six minutes to two.",
  mark: { m: "Meridian", s: "Case study" },
  facts: [
    { label: "Role", value: "Lead UX Designer (Heuristic audit, information architecture, data-visualisation system)" },
    { label: "Scale", value: "Entire university ecosystem (Undergrad, Grad, Research, HR) · 94% leadership adoption in term 1" },
  ],
  cover: "/meridian/cover.jpg",
  pair: [
    { h: "The Challenge", ps: ["Meridian University ran its analytics across four separate Power BI dashboards, one each for undergraduate admissions, graduate admissions, research and HR. If a dean wanted to know how the university was doing overall, they had to open all four, compare the numbers by hand, and spend about six minutes finding the answer."] },
    { h: "Our Solution", ps: ["I brought the four together into one Power BI platform. The software stayed the same, so all the work went into the information architecture and the rules for how things are charted. That took the time to an answer down to two minutes, and 94% of university leadership were using it within the first term."] },
  ],
  lead: { items: [{ src: R("overview.png"), alt: "The Overview tab", wide: true }], cap: "The Overview tab. The KPI cards show the change against last year, and clicking any one of them takes you into that module." },
  // Every figure here is measured (baseline audit, six validation rounds);
  // no abandonment, error or satisfaction numbers exist, so none appear.
  before: [["4", "disconnected dashboards"], ["6 min", "to answer a leadership question"], ["7", "clicks to reach a segmented view"], ["1 yr", "of default context"], ["11", "pie charts"], ["9", "disputed metric definitions"]],
  after: [["1", "unified analytics platform"], ["2 min", "to answer the same question"], ["2", "clicks to reach a segmented view"], ["5 yrs", "of historical context"], ["0", "pie charts, fit-for-purpose charting instead"], ["0", "disputed definitions: official source and owner on every metric"], ["94%", "leadership adoption in term 1"]],
  baNote: "Before figures from the audit of the four legacy dashboards; after figures measured across six validation rounds. No abandonment, error-rate or satisfaction numbers were collected, so none are claimed.",

  sections: [
    {
      n: "01", h: "Operating Context and Constraints",
      p: "This was not a redesign where you get to pick a new stack. The old dashboards were built in Power BI and the new ones had to ship in Power BI too. The tool was fine, the way it had been put together was the problem. Three things shaped the approach:",
      cards: [
        ["The Power BI sandbox", "Everything had to be something Power BI could render on its own. I set the palette, the grid spacing and the chart rules against what the platform could actually do, before designing any screens."],
        ["Two minutes and one hour", "A dean wants a headline in two minutes and an analyst will dig for an hour. Rather than build two interfaces, I put the headline numbers first and made every tile a way into the detail underneath."],
        ["Graceful degradation", "University data has gaps in it. Demographic panels sometimes cannot be shown because the counts are too small to publish, so I designed those empty states properly instead of letting the layout break."],
      ],
    },
    {
      n: "02", h: "The UX Audit: Diagnosing the Legacy Clutter",
      p: "Before I sketched anything I ran a heuristic audit across all four of the old dashboards. What came out of it explained why people had stopped using them:",
      findingsTitle: "What the audit found",
      findings: [
        ["11 pie charts", "across 12-tile grids", "Aesthetic and minimalist design, severity 3. Visually exhausting and mathematically hard to read."],
        ["Filters reset", "on every navigation", "Recognition over recall, severity 4. Every time you moved between tabs you had to set your filters up again from scratch."],
        ["1 year", "visible in any view", "Flexibility and efficiency, severity 4. A basic trend question meant an IT ticket."],
        ["Blended averages", "matching no one", "Match with the real world, severity 4. Undergraduate and graduate figures were averaged together into numbers that did not describe anybody actually on campus."],
        ["9 metrics", "with disputed definitions", "The same name meant different things on different dashboards."],
        ["4 tools", "to open for one answer", "Six minutes on average to a leadership question."],
      ],
      media: [
        { items: [{ src: L("gender-pie.png"), alt: "Legacy gender pie" }, { src: L("geo-pie.png"), alt: "Legacy geography pie" }, { src: L("hr-race.png"), alt: "Legacy HR pie" }], cap: "Crops from the old dashboards, with the branding removed. Three of the eleven pie charts." },
      ],
    },
    {
      n: "03", h: "Architectural Explorations and the Core Pivot",
      ps: [
        "The structural pivot was moving from four isolated tools to one platform with five unified tabs: Overview, Undergraduate, Graduate, Research and HR.",
        "I mapped the new information architecture and user flows in hand-drawn wireframes, keeping the focus on hierarchy before any visual polish.",
      ],
      exhibit: "wireframes",
      exhibitCap: "The wireframes for the summary tabs, the drill-throughs and the year-over-year layouts. Structure first, before any visual design.",
      cards: [
        ["The Overview cockpit pivot", "Rather than dropping people straight into data tables, there is now an Overview tab that answers how the university is doing at a glance. Each KPI card takes you into the module underneath it."],
        ["Five tabs, one vocabulary", "Undergraduate, graduate, research and HR all use the same definitions, the same palette and the same rules about which chart to use."],
        ["Overview to drill-down", "A dean can stop at the headline and an analyst can keep clicking down into it. Neither of them is using a cut-down version of the tool."],
      ],
    },
    {
      n: "04", h: "The Final Design: Trusted, Readable, Segmented",
      p: "Once the wireframes were settled I built the UI system on top of Meridian's official brand typography, with a palette chosen for reading data: navy, crimson, teal and purple.",
      media: [
        { items: [{ src: L("four-dashboards.png"), alt: "Before: the four legacy dashboards" }, { src: R("ug-summary.png"), alt: "After: the Undergraduate tab", wide: true }], cap: "Before and after. On the left the old layout, cluttered and full of pie charts. On the right the Undergraduate tab, with horizontal bars, donuts and the bubble map of international applications." },
      ],
      cards: [
        ["Trusted data", "Nine metrics on the old dashboards meant different things depending on who you asked. Every number now traces back to an official source, and hovering over it shows the definition and who owns it."],
        ["Fit-for-purpose charting", "I deleted all eleven pie charts. Shares became donuts, comparisons became sorted horizontal bars, and geography became a bubble map."],
        ["Contextual deltas", "The year-on-year colours follow what the number means rather than whether it went up or down. Applications falling is red. Summer melt falling is green."],
      ],
      sub: "Global persistent filters",
      bullets: [["The highest-severity finding, fixed:", "your filters now stay put as you move between the undergraduate, graduate and research tabs."]],
      media2: [
        { items: [{ src: R("grad-summary.png"), alt: "The Graduate tab", wide: true }, { src: R("research-summary.png"), alt: "The Research tab" }, { src: R("hr-summary.png"), alt: "The HR tab" }], cap: "The graduate, research and HR tabs, all running on the same system." },
      ],
    },
    {
      n: "05", h: "The AI Layer: Ask Meridian",
      ps: [
        "University leaders are accountable for these numbers, so automation had to be handled with care.",
        "Ask Meridian AI is not a separate product and not the default dashboard. It is a user-invoked modal, triggered by an Ask AI button, layered over the active canvas. An optional analytical assistant that surfaces background signals and next-best actions. It explains; it does not decide.",
      ],
      media: [{ items: [{ src: R("overview-ai-open.png"), alt: "Ask Meridian AI open over the Overview" }], cap: "Ask Meridian AI, open over the canvas. Every answer carries its sources, and the figures underneath stay visible." }],
    },
    {
      n: "06", h: "Field Validation and Measured Outcomes",
      p: "I ran six rounds of validation with real university stakeholders and changed the UI on what came back. One example: the Overview tab was trying to answer four separate questions, so I cut it down to one.",
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
      ps2: ["Most of the work here was information architecture, and that is what turned it from something people avoided into something they open every day."],
    },
  ],
};

const NEXT_WORK = [
  ["/case/finvista", "/finvista/cover.jpg", "FinVista", "Assisted lending"],
  ["/case/aurora", "/aurora/cover.jpg", "Aurora", "Marketing automation"],
  ["/case/joat", "/joat/cover.jpg", "Jack of All Threads", "Crowdfunding commerce"],
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
