// Meridian "v2" data, an experiment that layers the truthful review wins on top
// of the original case study WITHOUT changing the original. Same narrative body,
// plus: a "what I owned" chip set, a Design principles block, a Constraints
// block, and a "How I validated + expected outcomes" block (no fabricated
// metrics, no invented quotes). Rendered by the shared MeridianCaseStudy page via
// the `data` prop, at /case/meridian-v2. The original lives at /case/meridian.

import { meridian } from "./meridianCase";

// Three new labeled sections, slotted into the existing narrative order.
const PRINCIPLES_MD = `## Design principles

Five rules did the deciding. If a screen broke one, it went back to grayscale.
`;

const CONSTRAINTS_MD = `## Constraints I designed within

Enterprise work, so the box was real before I drew anything. These shaped every call.
`;

const VALIDATION_MD = `## How I validated, and what it should produce

No formal usability lab on this one, and I won't pretend otherwise. Here is what I actually leaned on, and the outcomes the design is built to produce.
`;

const body = meridian.body
  .replace(
    "## Goals, success criteria, and process",
    `${PRINCIPLES_MD}\n## Goals, success criteria, and process`
  )
  .replace(
    "## Information architecture and navigation model",
    `${CONSTRAINTS_MD}\n## Information architecture and navigation model`
  )
  .replace(
    "## Outcome, reflection, and forward outlook",
    `${VALIDATION_MD}\n## Outcome, reflection, and forward outlook`
  );

export const meridianV2 = {
  ...meridian,
  // Keep slug "meridian" so the prev/next pager still resolves; the route is separate.
  responsibilities: [
    "Research",
    "Information architecture",
    "UI design",
    "Design system",
    "Power BI alignment",
    "AI interaction patterns",
  ],
  principles: [
    {
      t: "Segment by level, always",
      d: "Grad is ~48% international, undergrad ~4%. A blended number describes a student who doesn't exist, so there's no Institute-wide total anywhere.",
    },
    {
      t: "Lead with the answer",
      d: "End the 90-second orienting. Headline first, drill second. Every screen names its takeaway before it shows the detail.",
    },
    {
      t: "Design to what Power BI renders",
      d: "Agree with the engine before drawing anything pretty. Native drill-through, not a custom framework the team can't actually ship.",
    },
    {
      t: "Trends by default, deltas everywhere",
      d: "One year tells you nothing. Every view defaults to a multi-year trend, and every KPI carries a year-over-year delta.",
    },
    {
      t: "AI is a guide, never the decider",
      d: "Human in the loop, inputs visible, sensitive attributes kept out of any scoring. Ask Meridian AI summarizes; it never ranks or predicts.",
    },
  ],
  constraints: [
    {
      t: "Power BI rendering limits",
      d: "I designed to native behavior, drill-through and standard visuals, not a bespoke framework, so engineering could actually build it.",
    },
    {
      t: "The existing data model",
      d: "Slate (the enrollment CRM) and the SIS were the source of truth. I designed to the live data contract, not an idealized one.",
    },
    {
      t: "Post-SFFA data sensitivity",
      d: "After the 2023 ruling, disaggregated demographic data is restricted. Those views suppress small counts and degrade gracefully when a category is withheld.",
    },
    {
      t: "Scope honesty",
      d: "The Overview is hi-fi; the other tabs carried through IA, greybox, and hi-fi. Designed and demonstrated, not shipped and measured.",
    },
  ],
  validation: [
    {
      t: "Heuristic audit",
      d: "I scored all four legacy dashboards against Nielsen's heuristics on a 0 to 4 severity scale, and tied every finding to a real person and a real task.",
    },
    {
      t: "Analyst sign-off",
      d: "The IR analysts who own and defend the data confirmed the surface matched their data contract. That sign-off was the real acceptance test.",
    },
    {
      t: "Honest scope",
      d: "Expert review and stakeholder sign-off, not a formal usability study. Validating task-times with real provosts and deans is the next step.",
    },
  ],
  expectedOutcomes: [
    "Faster executive scanning, the headline in seconds instead of minutes",
    "Fewer dashboard switches, one platform instead of four separate files",
    "Better KPI discoverability, one definition per metric, a delta on every tile",
    "Consistent reporting, learn one page and you can read them all",
  ],
  body,
};
