// Crux case study data - self-initiated AI-native concept.
// Rebuilt around the Control Room: a working AI-agent supervision console that
// renders the five Agent Experience trust patterns as real, operable UI. The
// earlier executive "decision brief" work is kept as the first exploration.
// Same data shape as slateCase.js so the shared ConceptCaseStudy renderer
// stays intact. Visual identity keeps Crux's magenta AI accent.
const S = (n) => `/crux-shots/${n}`;

export const crux = {
  slug: "crux",
  title: "Crux",
  kind: "AI-native concept · self-initiated",
  subtitle:
    "An AI-agent supervision console. Five AI agents run a bank's daily operations while a human keeps every consequential call. I took the five agent-trust patterns that so far mostly live in essays and frameworks (intent preview, an autonomy dial, calibrated confidence, an action audit, and an escalation pathway) and built them as real, working UI. I designed and built it end-to-end as a prototype you can open and drive.",

  hero: {
    stats: [
      { value: "5", label: "Trust patterns, working" },
      { value: "1", label: "Live prototype" },
      { value: "100%", label: "Traceable actions" },
    ],
  },

  // --- 00 OVERVIEW ---
  overview: {
    headline: "A supervision console for the moment AI agents do the work and humans own the judgment.",
    tldr:
      "AI agents are starting to take real actions inside companies, and nobody has worked out how one person supervises a fleet of them without turning into a rubber stamp. Crux is my answer to that. It is a working supervision console for a fictional bank, where five agents propose and run the daily work and a person approves it, steers it, or takes over. I built the five agent-trust patterns into it as interface you can actually operate.",
    badge: "Concept · self-initiated · not client work",
  },
  hypothesis: {
    positioning:
      "Crux is an AI-agent supervision console. It renders the five Agent Experience trust patterns as one operable interface, so a human can supervise a fleet of acting agents: see each agent's intent before it acts, set how far each can go on its own, read calibrated confidence with a hard escalation threshold, audit every action with before-and-after diffs, and take over cleanly when an agent hits its limit. It is not a BI dashboard, not a chatbot, and not an autopilot that acts for you.",
    isItList: [
      "A console that shows intent, confidence, and blast radius before an agent acts",
      "A dial that grants each agent exactly as much autonomy as it has earned",
      "An immutable record of every action and the human decision behind it",
    ],
    isNotList: [
      "Not a BI dashboard that surfaces metrics and stops",
      "Not a chatbot bolted onto a workflow",
      "Not an autopilot that acts without a human accountable",
    ],
  },
  design: {
    finalIntro:
      "The Control Room below is running. Five agents, one set of numbers that all stay consistent, and the five trust patterns built as real, working UI. Open it, turn an agent to Auto, decline something with a reason, and you will see every count update straight away.",
    prototypeHint: "click anything. turn an agent to Auto and watch its work re-route. it's the real prototype.",
    finalScreens: [
      { src: S("cr-01-overview.png"), tag: "Pattern · Overview", title: "The floor", desc: "How the fleet is doing, what is waiting on you, and the one escalation that is currently active. Every number on the screen comes from the same record, so they cannot drift apart." },
      { src: S("cr-02-review.png"), tag: "Pattern 01 · Intent Preview", title: "See it before it acts", desc: "Every proposed action is a card. It shows what the agent is going to do, which systems that touches, what it read before deciding, whether the action can be undone, and a confidence bar you can open to see the reasoning. You can approve it, decline it with a reason, or escalate it." },
      { src: S("cr-03-autonomy.png"), tag: "Pattern 02 · Autonomy Dial", title: "Set the leash, watch it re-route", desc: "Each agent has a three-way dial. If you turn Recon to Auto, the reconciliation it is 92% confident about goes through on its own, while the write-off it is only 64% confident about still waits for a person. The queue count updates everywhere at the same time." },
      { src: S("cr-06-confidence.png"), tag: "Pattern 03 · Confidence Signal", title: "A number that shows its reasons", desc: "Click WHY on any card and the confidence opens up to show what drove it, such as the two signals behind this 88% card. Below 70% the Approve button is not there at all, so low-confidence work cannot be waved through." },
      { src: S("cr-04-audit.png"), tag: "Pattern 04 · Action Audit", title: "Everything on the record", desc: "A log of every decision you can filter, showing who made it and what changed before and after. There is also an incident replay that steps through a fraud cluster moment by moment. This is the screen governance teams ask for first." },
      { src: S("cr-05-escalation.png"), tag: "Pattern 05 · Escalation Pathway", title: "The hard call, with its homework done", desc: "When Sentinel cannot clear a case on its own, it hands over a package of context: what it tried, what it knows, what it recommends and how confident it is. You can approve it, take over, or send it back with guidance." },
    ],
  },

  // --- 07 THE AI LAYER ---
  aiLayer: {
    headline: "The five trust patterns, as working UI.",
    intro:
      "The hard part of an AI supervision product is the interface, not the orchestration. You need something a person can trust, question and defend in a meeting, without ever feeling that the machine took over. Crux uses the five Agent Experience trust patterns consistently, so the agents read as governed, visible workers rather than an autopilot. Every pattern below is real and clickable in the prototype.",
    patterns: [
      { id: "P1", t: "Intent Preview", d: "Before an agent does anything, its plan shows up as a card: what it will do, which systems that touches, what it read to decide, and whether it can be undone. Nothing happens without you seeing it first.", featured: true },
      { id: "P2", t: "Autonomy Dial", d: "Each agent has a three-position control: suggest only, approve each one, or run automatically with an audit trail. Moving it sends that agent's confident work between the waiting-on-you lane and the flowing-through lane while you watch.", featured: true },
      { id: "P3", t: "Confidence Signal", d: "Every proposal carries a calibrated confidence bar that decomposes into its top factors on click. Below a 70% threshold the interface refuses to offer Approve and forces escalation. Never a naked number." },
      { id: "P4", t: "Action Audit", d: "An immutable, filterable log: every action, who or what approved it, a before-and-after diff for data changes, and a replay stepper for an incident. The record that makes governance possible." },
      { id: "P5", t: "Escalation Pathway", d: "When an agent hits its limit it hands the human a context package (what it tried, what it knows, what it recommends) with one-click paths: approve the recommendation, take over, or send back with guidance." },
    ],
  },
  whereItStands: {
    headline: "Where it stands.",
    intro:
      "Honest about what is proven and what is not. Nothing here is claimed as measured. The prototype proves the design holds together as a real, operable experience. Whether it helps real analysts is a separate question, and one I would want to test properly.",
    doneTitle: "What's done",
    done: [
      "A working Control Room prototype you can open in any browser: the five agent-trust patterns as real, operable UI, where every count stays consistent when you act.",
      "A defined problem: where supervising acting agents breaks down, and why visibility, graduated control and an audit trail are the real gaps.",
      "A competitive teardown across five tool types, exposing the empty middle between BI (surfaces data), copilots (over-automate), and frameworks (no human surface).",
      "The earlier decision-brief exploration that seeded the thesis, kept on the page as the first direction it took.",
    ],
    targetsTitle: "What I'm designing toward",
    targets: [
      { t: "The dial earns trust", d: "The bet is that a graduated autonomy dial, plus a confidence threshold that overrides it, makes an analyst comfortable letting agents run. Whether it does is the first thing I would test with real ops analysts." },
      { t: "The audit reassures governance", d: "Does an immutable log with before-and-after diffs and incident replay actually let a risk lead defend AI use to an auditor? Only real governance reviews will confirm it." },
      { t: "It prevents the rubber stamp", d: "The deepest risk is a human waving everything through. Blast radius, forced reasons on decline, and the removed Approve below threshold are the defences. Whether they are enough needs shadow sessions to settle." },
    ],
  },

  // --- 10 FUTURE VISION ---
  prototypeUrl: "/crux/",
};
