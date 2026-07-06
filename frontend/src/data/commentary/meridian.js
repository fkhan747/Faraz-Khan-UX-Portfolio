/*
 * Commentary pins for the Meridian case study — the pilot content set.
 *
 * DRAFT: every line below is drafted from the existing case-study prose and this
 * project's history. Faraz approves the wording (voice + accuracy) before this
 * ships. Nothing renders until the Meridian page is tagged with matching
 * `data-commentary` anchors AND CommentaryMode is imported there (merge day).
 *
 * Pin shape: { id, anchor, x, y, decision, why, rejected, confidence }
 *   anchor      matches a data-commentary="..." value on the page
 *   x, y        percent position inside that element's box (0..100)
 *   confidence  "high" | "medium" | "low" (honest, not decorative)
 *
 * Keep it to 4-7 pins. More reads as noise.
 */
export const meridianPins = [
  {
    id: "cockpit",
    anchor: "ia-model",
    x: 50, y: 40,
    decision: "One cockpit: a single overview that drills into four modules.",
    why: "The team was tab-hopping across four separate Power BI dashboards, so no one could see admissions, research, and HR in one glance.",
    rejected: "Four polished-but-separate dashboards. Cleaner to build, but it keeps the silos that were the actual problem.",
    confidence: "high",
  },
  {
    id: "ai-optional",
    anchor: "ai-layer",
    x: 50, y: 35,
    decision: "AI sits as an optional layer, not the default surface.",
    why: "Leaders are accountable for these numbers. A black box on top of governance data erodes trust instead of building it.",
    rejected: "An AI-first landing that answers in prose. It hides the figures people have to defend in a room.",
    confidence: "medium",
  },
  {
    id: "drill",
    anchor: "drilldown",
    x: 50, y: 50,
    decision: "Every KPI on the overview drills straight into its own module.",
    why: "Executives scan, analysts dig. One overview-and-drill-down model serves both without a second navigation.",
    rejected: "Separate 'summary' and 'detail' apps. That doubles the wayfinding and reintroduces the hop.",
    confidence: "medium",
  },
  {
    id: "anon",
    anchor: "anonymization",
    x: 50, y: 50,
    decision: "The client ships anonymized as Meridian Institute of Technology.",
    why: "Real institutional data plus a real brand cannot go in a public portfolio without breaking the client relationship.",
    rejected: "Showing the real name and logo for credibility. Not worth the trust cost.",
    confidence: "high",
  },
  {
    id: "honest",
    anchor: "validation",
    x: 50, y: 45,
    decision: "The case study carries a written 'what I could not validate' section.",
    why: "No usability testing was run here. Saying so, and how I would test it, is a judgment signal; hiding it reads as fabrication.",
    rejected: "Implying it tested well with round, invented metrics. False, and a known portfolio tell hiring managers screen for.",
    confidence: "high",
  },
];

export default meridianPins;
