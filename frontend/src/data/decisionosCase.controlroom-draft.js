/*
 * Crux case study, Phase 5 DRAFT — the Control Room addition.
 *
 * STATUS: draft, UNIMPORTED, main data untouched. This is NOT a rewrite of
 * decisionosCase.js; it is an additive section plus two patches, so the merge
 * can splice the working prototype into the existing narrative without losing
 * the decision-brief research that already sits there.
 *
 * ONE DECISION FOR FARAZ (the narrative fork):
 *   The live case study frames Crux as an executive "decision brief" tool. The
 *   Control Room I built is a working prototype of the SAME thesis (traceable
 *   reasoning, visible confidence, the human keeps the call) but on a different
 *   surface: an AI-agent supervision console for a bank's ops team.
 *     Option A — EXTEND: keep the decision-brief story, add the Control Room as
 *       "the working proof" (this draft is written for A; lowest-risk, additive).
 *     Option B — REPLACE: make the Control Room the spine of the case study and
 *       demote the decision-brief screens to an early exploration.
 *   A is drafted below. If Faraz wants B, this section still supplies the copy;
 *   only the ordering changes.
 *
 * SCREENSHOTS are merge-day: capture clean shots of the running prototype into
 * public/decisionos-shots/ at the S() paths below (this session already proved
 * each screen renders; those are the frames to re-shoot at 2x).
 *
 * VOICE: every line is a draft in Faraz's voice (first person, crisp, no
 * em-dashes, honest posture). He approves wording before it ships.
 */

const S = (n) => `/decisionos-shots/${n}`;

// Drop-in section: render after `design` / `aiLayer`, before `whereItStands`.
export const controlRoom = {
  headline: "From concept screens to a working Control Room.",
  intro:
    "The decision-brief screens showed the thesis. To prove it, I built a working one. The Control Room is a fully client-side prototype of an AI-agent supervision console: a fictional mid-size bank, Cobalt Mutual, whose ops-analytics team supervises five AI agents doing real work while the humans keep the judgment. It is the same argument as the brief, made clickable: an agent shows its intent before it acts, its confidence decides whether it can proceed, and every action is on the record. You can open it and drive it.",
  prototypeNote: "Live, client-side, no login. Best on desktop; it is dense by design.",
  prototypeUrl: "/decisionos/",

  // The five Agent Experience trust patterns, each as a real screen in the build.
  patterns: [
    {
      id: "P1",
      src: S("cr-01-review-intent.png"),
      tag: "Pattern 01",
      title: "Intent Preview",
      desc: "Before any agent acts, its plan is a card: what it will do, which systems it touches, what it read to decide, and whether it can be undone. You approve, decline with a reason the agent has to factor in, or escalate. Nothing happens behind your back.",
      featured: true,
    },
    {
      id: "P2",
      src: S("cr-02-autonomy-dial.png"),
      tag: "Pattern 02",
      title: "Autonomy Dial",
      desc: "Per agent, a three-way dial: suggest only, approve each, or auto with audit. Turning it re-routes that agent's confident work between the lane that waits on you and the lane that flows on its own, live. Below-threshold calls stay held for a human no matter the setting. This is the interaction I would demo first.",
      featured: true,
    },
    {
      id: "P3",
      src: S("cr-03-confidence.png"),
      tag: "Pattern 03",
      title: "Confidence Signal",
      desc: "Every proposal carries a calibrated confidence bar that decomposes into its top factors on click. Below your escalation threshold the interface refuses to offer Approve at all and forces the call up to a human. Confidence is never a naked number.",
    },
    {
      id: "P4",
      src: S("cr-04-audit-diff.png"),
      tag: "Pattern 04",
      title: "Action Audit",
      desc: "A filterable log of every decision, who made it, and what changed, with a before-and-after diff for anything that touched data and a step-through replay of an incident. This is the screen a governance team exhales at.",
    },
    {
      id: "P5",
      src: S("cr-05-escalation.png"),
      tag: "Pattern 05",
      title: "Escalation Pathway",
      desc: "When an agent hits its limit it hands you a context package: what it tried, what it knows, what it recommends and how sure it is, plus one-click paths to take over, approve its recommendation, or send it back with guidance. The hard call arrives with its homework done.",
    },
  ],

  buildNote:
    "I built the Control Room as a single self-contained page: no backend, one canon data store, so every count on every screen traces to the same source and updates together when you act. That constraint is deliberate. A supervision console that lies about its own numbers is the exact failure it is supposed to prevent.",

  honesty:
    "Same house rule as the rest of this concept. The Control Room is reconstructed from secondary research on Agent Experience trust patterns; I ran no primary research and claim no users or metrics. What it proves is that the patterns hold together as a real, operable interface. What it still needs is time in front of the ops analysts it is for, and that plan is below.",
};

// Patch for the existing `whereItStands.done` list: the prototype now exists.
export const whereItStandsDoneAppend = [
  "A working, fully client-side Control Room prototype: the five Agent Experience trust patterns (intent preview, autonomy dial, confidence, audit, escalation) as real, operable UI, driven by one honest data store.",
];

// Patch for `hero.stats`: reflect that there is now a live prototype.
export const heroStatsControlRoom = [
  { value: "5", label: "Trust patterns, working" },
  { value: "1", label: "Live prototype" },
  { value: "100%", label: "Traceable reasoning" },
];

// On merge: set decisionosCase.prototypeUrl = "/decisionos/" (currently null).
export const prototypeUrl = "/decisionos/";

export default controlRoom;
