// Crux case study data - self-initiated AI-native concept.
// Rebuilt around the Control Room: a working AI-agent supervision console that
// renders the five Agent Experience trust patterns as real, operable UI. The
// earlier executive "decision brief" work is kept as the first exploration.
// Same data shape as recruitosCase.js so the shared ConceptCaseStudy renderer
// stays intact. Visual identity keeps Crux's magenta AI accent.
const S = (n) => `/decisionos-shots/${n}`;

export const decisionos = {
  slug: "decisionos",
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
    tldrTitle: "TL;DR · Concept Summary",
    tldr:
      "AI agents are starting to take real actions inside companies. The open design problem is how one human safely supervises a whole fleet of them without turning into a rubber stamp. Crux is my answer: a working prototype of a supervision console for a fictional bank's operations team, where five AI agents propose and run daily work and a human approves, steers, or takes over. I built the five agent-trust patterns as real, operable interface rather than slides. Reconstructed from secondary research; no users or metrics claimed.",
    badge: "Concept · self-initiated · not client work",
    facts: [
      { label: "Type", value: "AI-native product concept" },
      { label: "Role", value: "Senior UX Lead (end-to-end)" },
      { label: "Basis", value: "Secondary research + teardown" },
      { label: "Platform", value: "Responsive web, desktop-first" },
      { label: "Build", value: "Working prototype, runs in any browser" },
    ],
    process: [
      { step: "01", title: "Probe", duration: "Find the white space" },
      { step: "02", title: "Frame", duration: "Scenario and canon" },
      { step: "03", title: "Pattern", duration: "The five trust patterns" },
      { step: "04", title: "Build", duration: "A working prototype" },
      { step: "05", title: "Validate", duration: "Planned next" },
    ],
    intro:
      "Crux started as a question: what can I design that proves I can build AI products people trust, not just talk about them? The research pointed at a genuinely empty space. Agent Experience, the 2026 discipline for supervising AI that acts on its own, has named trust patterns, but they live only in essays and frameworks. Nobody had shipped them as working interface. So I built them.",
    intro2:
      "I did not run this inside a real bank. It is a self-initiated concept reconstructed from the public record on Agent Experience, human-AI interaction, and enterprise operations, and I would rather show the reasoning than claim research I did not do. The setting is a fictional mid-size bank, Cobalt Mutual, and its operations analytics team supervising five agents. Every agent, transaction, and number is invented. What the prototype proves is that the five trust patterns hold together as one real, operable console where the human stays in command. Proving it helps real analysts is the next chapter, and I say exactly how I would run it.",
    contextTitle: "Why this concept",
    contextBody:
      "Three reasons. Supervising a fleet of acting AI agents is the trust problem of this decade, and it has no shipped design language yet. Building the patterns as working UI, not slides, is the strongest proof I can design AI products. And it completes Crux, the decision-intelligence concept already in this portfolio, by proving its thesis live: traceable reasoning, visible confidence, and the human firmly making the call.",
    metadata: [
      { k: "Domain", v: "AI-agent supervision (BFSI ops)" },
      { k: "Primary user", v: "Operations analyst / supervisor" },
      { k: "Secondary", v: "Risk and governance" },
      { k: "Process type", v: "Build-led / high-stakes" },
      { k: "Status", v: "Working prototype" },
    ],
  },

  primaryUsers: [
    { label: "Ops Analysts", desc: "The primary user: the person supervising the agent fleet, approving or steering each consequential action under time pressure." },
    { label: "Risk & Governance", desc: "Have to prove how AI is being used and defend it. They live in the audit trail." },
    { label: "Head of Operations", desc: "Sets how much autonomy each agent gets, and owns the outcomes when it acts." },
  ],

  // --- 01 PERSONAS ---
  personasSection: {
    headline: "Meet the people who supervise the agents.",
    intro:
      "These are not interview subjects. I did not interview anyone for a self-initiated concept, and I will not pretend I did. They are archetypes built from public material on operations teams and human-AI supervision. A fleet of acting agents needs someone who clears its routine work and catches the risky one, someone who has to defend how it all happened, and someone who decides how much rope each agent gets. Crux has to serve all three without ever taking the decision away from the human who owns it.",
    personas: [
      {
        name: "Maya Rao",
        initials: "MR",
        role: "Ops Analyst · primary",
        context: "Supervises the five-agent fleet from the console. Clears a queue of proposed actions every morning, most routine, a few consequential, all under a clock.",
        goals: [
          "Clear the routine actions fast without reading every line",
          "Catch the one action that would actually hurt a customer",
          "Trust an agent enough to let it run, and know when not to",
        ],
        frustrations: [
          "Today the agents either just suggest, or act with no visibility, nothing in between",
          "A confidence number with no reasoning behind it is useless",
          "When something goes wrong there is no record of who decided what",
        ],
        jtbd: "When agents propose work, I want to see what each intends and how sure it is, so I can approve the routine and stop the risky.",
        tools: "Dashboards, ticketing, spreadsheets, chat",
      },
      {
        name: "David Osei",
        initials: "DO",
        role: "Risk & Governance Lead",
        context: "Answerable for how AI is used on the floor. Has to show an auditor or a board that no agent acted without a human accountable and a trace.",
        goals: [
          "Prove every consequential action had a human decision behind it",
          "Reconstruct exactly what changed, and why, after the fact",
          "Keep the least-certain actions from ever running on their own",
        ],
        frustrations: [
          "AI tools that act but do not log leave nothing to defend",
          "Confidence scores that cannot be interrogated",
          "No way to replay an incident step by step",
        ],
        jtbd: "When an agent acts, I want an immutable record of the decision and the change, so I can defend it and learn from it.",
        tools: "Audit logs, compliance queue, reporting",
      },
      {
        name: "Sana Iqbal",
        initials: "SI",
        role: "Head of Operations",
        context: "Sets policy for the fleet: which agents can act on their own, which need a human, where the confidence line sits. Owns the outcomes.",
        goals: [
          "Dial up autonomy on the agents that have earned it",
          "Keep a hard human gate on anything below a confidence threshold",
          "Free the team from routine approvals without losing control",
        ],
        frustrations: [
          "Autonomy is usually all-or-nothing, on or off",
          "No safe way to let an agent run while holding back its shaky calls",
          "Hard to explain the safety model to the people above her",
        ],
        jtbd: "When I trust an agent, I want to set how far it can go on its own, so routine work flows and risky work still stops.",
        tools: "Policy docs, dashboards, the exec room",
      },
    ],
  },

  // --- 02 RESEARCH 1: how agent work gets supervised today ---
  research1: {
    headline: "How agent work actually gets supervised today, reconstructed from the record.",
    methodTitle: "An agent-supervision lens, from the public record",
    methodIntro:
      "Rather than ask teams what good AI supervision looks like in theory, I reconstructed how an agent action actually unfolds: what the agent flags, what the human can see, how they decide, and whether anyone can defend it later. I pieced this together from secondary sources on Agent Experience, human-AI interaction, and operations work, walking one risky action from trigger to defence.",
    method: [
      { l: "Basis", v: "Secondary research" },
      { l: "Lens", v: "One agent action, traced" },
      { l: "Traced", v: "Trigger to defence" },
      { l: "Captured", v: "Visibility, control, confidence, record" },
    ],
    timelineTitle: "The anatomy of a risky agent action",
    timelineIntro:
      "Walking one action through, reconstructed from the research, showed where the trust breaks. It is the same fraud-cluster case Crux uses as its live incident.",
    timeline: [
      { time: "Step 1", label: "Trigger", note: "An agent spots a suspicious card-present cluster: 7 transactions, 3 merchants, 6 minutes." },
      { time: "Step 2", label: "No preview", note: "It is about to freeze the card, but the human cannot see what it will touch or whether that is reversible.", pain: true },
      { time: "Step 3", label: "Blind confidence", note: "There is a confidence number, but no way to open it up and see the two signals behind it.", pain: true },
      { time: "Step 4", label: "All or nothing", note: "The agent is either fully manual or fully automatic. There is no setting that lets routine work flow while this shaky call stops." },
      { time: "Step 5", label: "Silent action", note: "It acts, or a rushed human waves it through, and nothing records who decided or what changed.", pain: true },
      { time: "Step 6", label: "No defence", note: "Weeks later, governance has to explain the freeze to a customer or an auditor with no trail to point at.", pain: true },
    ],
    affinityTitle: "What the research clustered into",
    affinityIntro:
      "The recurring failures grouped into four themes. Each is a place where a person loses sight of, or control over, an agent that acts.",
    affinityThemes: [
      { t: "Agents act unseen", d: "The human rarely sees what an agent intends to do, which systems it touches, or whether the action can be undone, before it happens." },
      { t: "Autonomy is a light switch", d: "Tools are on or off. There is no way to let an agent run its confident, routine work while holding its uncertain calls for a person." },
      { t: "Confidence is a black box", d: "A bare percentage tells you nothing. Teams kept treating a confident-sounding agent as a correct one, with no way to open the number up." },
      { t: "Nothing is on the record", d: "Actions happen with no immutable trail of who approved what and what changed, so governance cannot defend or learn from them." },
    ],
    insightsTitle: "Three insights that drove the design",
    insights: [
      { t: "Show intent before action, always", d: "The human has to see an agent's plan, its blast radius, and whether it is reversible, before it runs. Approval only means something if you can see what you are approving.", link: "→ Intent Preview (Pattern 1)" },
      { t: "Autonomy is a dial, not a switch", d: "Trust is per agent and graduated. The memorable move is a dial that re-routes an agent's confident work to run on its own while its shaky calls still stop for a human.", link: "→ Autonomy Dial (Pattern 2)" },
      { t: "Confidence must decompose, and it must gate", d: "Confidence is never a naked number. It opens into its reasons, and below a threshold it removes the option to auto-act at all.", link: "→ Confidence Signal (Pattern 3)" },
    ],
    keyInsight:
      "People do not want the machine to stop acting. They want to supervise it: see what each agent intends, set how far it can go, read how sure it is, audit what it did, and take over cleanly when it hits its limit. Trust is an interface problem, and nobody had built the interface.",
  },

  // --- 02 RESEARCH 2: how supervising AI agents gets tooled ---
  research2: {
    headline: "How supervising AI agents actually gets tooled.",
    ecoTitle: "The supervision gap",
    ecoIntro:
      "I mapped what a team actually reaches for to watch AI do work. The problem is that none of it is built for supervision: each tool answers a slice, none keeps a human accountable for an agent that acts, and the judgment happens in a person's head under deadline.",
    ecosystem: [
      { name: "BI dashboards", role: "Metrics, no control" },
      { name: "AI copilots", role: "Act or suggest, hide the why" },
      { name: "Chatbot agents", role: "Converse, no oversight surface" },
      { name: "Agent frameworks", role: "Orchestration, no human UI" },
      { name: "Ticketing / queues", role: "Work items, no intent or confidence" },
      { name: "Log tools", role: "Records, not a decision surface" },
      { name: "Email / chat", role: "Where escalations get lost" },
      { name: "The analyst's head", role: "Where it all gets synthesised" },
    ],
    ecoGap:
      "Nothing supervises the fleet. A dozen tools surface slices, and the human is the safety layer, under deadline, with no record of the reasoning.",
    heuristicTitle: "Heuristic evaluation: the two incumbents",
    heuristicIntro:
      "I evaluated the two things teams actually reach for, a BI dashboard and an AI copilot, on six heuristics, to locate the systemic gaps a real supervision console would have to close.",
    heuristics: [
      { t: "Shows intent before action", d: "A dashboard shows data; a copilot just acts or suggests. Neither previews what an agent will do, what it touches, and whether it can be undone.", s: "2/10" },
      { t: "Graduated autonomy", d: "Autonomy is on or off. Neither lets a human set how far each agent can go, or re-route confident work while holding uncertain calls.", s: "2/10" },
      { t: "Confidence that decomposes", d: "Where a confidence signal exists at all, it is a bare number with no reasons and no threshold behind it.", s: "2/10" },
      { t: "Immutable action audit", d: "Copilots rarely log a defensible trail of who approved what and what changed; dashboards do not act, so they log nothing.", s: "3/10" },
      { t: "Structured escalation", d: "When an agent hits its limit, there is no context package and no one-click path; the hard call lands in a chat thread.", s: "2/10" },
      { t: "Keeps a human in command", d: "Dashboards leave everything to the human; copilots over-automate and under-explain. Neither makes command unambiguous.", s: "4/10" },
    ],
    teardownTitle: "Competitive teardown",
    teardownIntro:
      "Five tool types across the category, scored on six supervision capabilities. The pattern: BI surfaces data without control, copilots act without showing reasoning or keeping a human in command, frameworks orchestrate with no human surface at all. Nothing renders the five trust patterns as one operable console.",
    competitiveTable: {
      headers: ["Capability", "Crux", "BI dashboard", "AI copilot", "Agent framework", "Chatbot"],
      rows: [
        ["Intent preview before action", "Yes", "No", "No", "No", "No"],
        ["Per-agent autonomy dial", "Yes", "No", "Partial", "Partial", "No"],
        ["Confidence with a hard threshold", "Yes", "No", "No", "No", "No"],
        ["Immutable action audit + diff", "Yes", "No", "Partial", "Partial", "No"],
        ["Structured escalation package", "Yes", "No", "No", "No", "Partial"],
        ["Human stays in command", "Yes", "Yes", "Partial", "Partial", "Partial"],
      ],
    },
    gapTitle: "The gap statement",
    gap:
      "No existing tool renders the five agent-trust patterns as one operable console that keeps a human in command of a fleet of acting agents. BI surfaces data, copilots over-automate, frameworks have no human surface. The supervised, human-led middle is the opportunity, and it is empty.",
  },

  // --- 04 HYPOTHESIS ---
  hypothesis: {
    headline: "The hypothesis.",
    positioningTitle: "Positioning",
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
    modelTitle: "The supervision mental model",
    modelIntro:
      "The core bet: structure the product around the human decision, not the agent's output. An agent proposes an action. The system's job is to make that proposal legible and safe: show its intent, its confidence, and its blast radius, gate it behind the right amount of human control, and record what happens. The agent does the work; the human keeps the judgment.",
    modelNodes: [
      { t: "Agent", d: "Software with a job and some autonomy. It proposes an action." },
      { t: "Intent", d: "What it will do, what it touches, whether it is reversible, how sure it is." },
      { t: "Decision", d: "The human approves, declines with a reason, or escalates." },
      { t: "Action", d: "It runs, within the autonomy the human set." },
      { t: "Audit", d: "Every action and decision is logged, with a before-and-after diff." },
    ],
    principlesTitle: "Four design principles",
    principlesIntro:
      "Each principle is a tension resolved in a direction, and each traces directly back to a research insight.",
    principles: [
      { t: "Nothing acts unseen", d: "Every agent action is previewed before it happens, with its blast radius and reversibility, so approval always means something.", from: "From insight: show intent before action." },
      { t: "Autonomy is a dial, per agent", d: "Trust is graduated and specific. Turning the dial re-routes an agent's confident work to run on its own while its shaky calls still stop.", from: "From insight: autonomy is a dial, not a switch." },
      { t: "Confidence gates autonomy", d: "Below the threshold, an agent cannot auto-act, even on full auto. The least-certain actions always reach a human.", from: "From insight: confidence must decompose and gate." },
      { t: "Everything is on the record", d: "Every action logs who or what approved it and what changed. Command stays human, captured, and defensible.", from: "From insight: nothing is on the record." },
    ],
  },

  // --- 05 IA ---
  ia: {
    headline: "How it thinks: architecture and flows.",
    taskTitle: "The supervision loop, as tasks",
    taskIntro:
      "Before any IA, I broke supervision into discrete tasks with their dependencies, so the structure would serve the act of keeping a human in command, not the display of agent output.",
    lifecycle: [
      { t: "Propose", d: "An agent puts forward a consequential action." },
      { t: "Preview", d: "Its intent, blast radius, reversibility, and confidence render as a card." },
      { t: "Decide", d: "The human approves, declines with a reason, or escalates." },
      { t: "Act", d: "It runs, within the autonomy the human has set for that agent." },
      { t: "Log", d: "The action and the decision land in an immutable audit with a diff." },
      { t: "Escalate", d: "When an agent hits its limit, it hands over a full context package." },
      { t: "Review", d: "Governance replays incidents and tunes the autonomy settings." },
    ],
    cardSortTitle: "Deriving the structure",
    cardSortIntro:
      "With no users to card-sort for a self-initiated concept, and I will not claim a method I did not run, I derived the architecture from the problem itself: people arrive thinking about the fleet and the queue of things waiting on them. So the structure organises around 'what needs my decision', which settled the top-level surfaces: Overview, Review, Audit, Escalation, and a page per agent.",
    cardSort: [
      { l: "Approach", v: "First-principles from supervision" },
      { l: "Basis", v: "Public research + teardown" },
      { l: "Organising unit", v: "The action awaiting a human" },
      { l: "To validate", v: "Card sort with real ops analysts (planned)" },
    ],
    iaDecisionsTitle: "Three IA decisions",
    iaDecisions: [
      { t: "One set of numbers", chose: "Every count on every screen is read live from one shared record, so the queue, the badges, and the lanes can never disagree.", alt: "Considered letting each screen keep its own numbers (rejected, because a supervision console that lies about its own numbers is the exact failure it should prevent)." },
      { t: "The dial re-routes work live", chose: "Turning an agent to Auto visibly moves its confident items from 'waiting on you' into 'flowing through', in the same interaction, so autonomy is something you see, not a setting you trust blindly.", alt: "Considered a plain settings toggle (rejected, because the value is in watching the queue re-route)." },
      { t: "Confidence overrides autonomy", chose: "Even an agent on full auto holds any action below the threshold and routes it to a human, tagged and visible.", alt: "Considered letting Auto mean always-act (rejected, because a bank cannot have an agent auto-approving its least-certain calls)." },
    ],
  },

  // --- 06 DESIGN ---
  design: {
    headline: "Building it.",
    wireframesIntro:
      "The first exploration was a decision brief for executives: lay out the options, attach the evidence, and show an AI recommendation with its reasoning and the honest case against. These grayscale wireframes locked that structure. It proved the thesis on paper, but static screens cannot prove that a human stays in command of an agent that actually acts. So I rebuilt it as a working console.",
    wireframes: [
      { src: S("wf-01-brief.png"), tag: "Exploration · 01", title: "Decision brief", desc: "The first direction, in grayscale: options laid side by side, evidence beneath each, a recommendation panel on the right. The seed of the thesis, before I made it operable." },
      { src: S("wf-02-recommendation.png"), tag: "Exploration · 02", title: "Recommendation + counter", desc: "The AI recommendation and its strongest counter-argument as adjacent, equal-weight panels. Honesty by construction, on paper." },
      { src: S("wf-03-evidence.png"), tag: "Exploration · 03", title: "Evidence detail", desc: "Expanding a piece of evidence reveals its source and how it weighs. The idea that became the confidence decompose in the live build." },
      { src: S("wf-04-decide.png"), tag: "Exploration · 04", title: "Make the call", desc: "The decision as a deliberate, recorded act. The idea that became the human decision gate in the Control Room." },
    ],
    flowsTitle: "Three core task flows",
    flowsIntro:
      "Three flows carry the console, each with its AI touchpoints and human gates marked. The gates are the point: the agents act freely within their leash, but every consequential call is a deliberate, recorded human act.",
    flows: [
      { t: "Review → decide", d: "An agent proposes → its intent, blast radius, reversibility, and confidence render → the human approves, declines with a reason, or escalates. AI touchpoint: the proposal. Human gate: nothing acts unseen." },
      { t: "Dial → re-route", d: "Open an agent → set its autonomy → its confident work re-routes into 'flowing through' while below-threshold calls stay held. AI touchpoint: the agent acting on Auto. Human gate: confidence overrides autonomy." },
      { t: "Escalation → resolve", d: "An agent hits its limit → hands over a context package (tried, knows, recommends) → the human approves, takes over, or sends it back. AI touchpoint: the recommendation. Human gate: the human makes the call." },
    ],
    finalIntro:
      "The Control Room below is live: five agents, one honest set of numbers, and the five trust patterns as real UI. It is not a mock-up. Open it, turn an agent to Auto, decline something with a reason, and watch every count re-route in the same instant.",
    prototypeHint: "click anything. turn an agent to Auto and watch its work re-route. it's the real prototype.",
    finalScreens: [
      { src: S("cr-01-overview.png"), tag: "Pattern · Overview", title: "The floor", desc: "Fleet health, the queue waiting on you, and the one active escalation. Every number on screen comes from the same record, so nothing can drift out of sync." },
      { src: S("cr-02-review.png"), tag: "Pattern 01 · Intent Preview", title: "See it before it acts", desc: "Each proposed action is a card: what the agent will do, which systems it touches (blast radius), what it read to decide, whether it is reversible, and a confidence bar that opens into its reasons. Approve, decline with a reason, or escalate." },
      { src: S("cr-03-autonomy.png"), tag: "Pattern 02 · Autonomy Dial", title: "Set the leash, watch it re-route", desc: "Per agent, a three-way dial. Turn Recon to Auto and its 92% reconciliation flows through on its own, while its 64% write-off stays held for a human. The queue count drops everywhere in the same instant." },
      { src: S("cr-06-confidence.png"), tag: "Pattern 03 · Confidence Signal", title: "A number that shows its reasons", desc: "Click WHY on any card and the confidence opens into what drove it, like the two signals behind this 88% card. Below 70%, the Approve button disappears entirely: low-confidence work cannot be waved through." },
      { src: S("cr-04-audit.png"), tag: "Pattern 04 · Action Audit", title: "Everything on the record", desc: "A filterable log of every decision, who made it, and a before-and-after diff of what changed. Plus an incident replay that steps through a fraud cluster moment by moment. The screen governance exhales at." },
      { src: S("cr-05-escalation.png"), tag: "Pattern 05 · Escalation Pathway", title: "The hard call, with its homework done", desc: "When Sentinel cannot clear a case alone, it hands over a context package: what it tried, what it knows, what it recommends and how sure it is, with one-click paths to approve, take over, or send back with guidance." },
    ],
  },

  // --- 07 THE AI LAYER ---
  aiLayer: {
    headline: "The five trust patterns, as working UI.",
    intro:
      "The hard part of an AI supervision product is not orchestrating the agents. It is producing an interface a human can trust, interrogate, and defend, without ever feeling the machine took command. Crux leans on the five Agent Experience trust patterns, applied consistently, so the agents read as governed, visible workers rather than an autopilot. Every pattern below is real and clickable in the prototype.",
    patterns: [
      { id: "P1", t: "Intent Preview", d: "Before any agent acts, its plan renders as a card: what it will do, which systems it touches, what it read to decide, and whether the action is reversible. Nothing happens behind your back.", featured: true },
      { id: "P2", t: "Autonomy Dial", d: "Per agent, a three-position control: suggest only, approve each, or auto with audit. Turning it re-routes that agent's confident work between the 'waiting on you' and 'flowing through' lanes, live. This is the memorable interaction.", featured: true },
      { id: "P3", t: "Confidence Signal", d: "Every proposal carries a calibrated confidence bar that decomposes into its top factors on click. Below a 70% threshold the interface refuses to offer Approve and forces escalation. Never a naked number." },
      { id: "P4", t: "Action Audit", d: "An immutable, filterable log: every action, who or what approved it, a before-and-after diff for data changes, and a replay stepper for an incident. The record that makes governance possible." },
      { id: "P5", t: "Escalation Pathway", d: "When an agent hits its limit it hands the human a context package (what it tried, what it knows, what it recommends) with one-click paths: approve the recommendation, take over, or send back with guidance." },
    ],
    decisionsTitle: "AI design decisions",
    decisions: [
      { t: "One honest set of numbers", d: "Every count on every screen is read from the same record. Approve one item and the queue, the KPI, the sidebar badge, and the audit all move together. A supervision console that can disagree with itself is worthless." },
      { t: "Confidence overrides autonomy", d: "The confidence threshold is deliberately allowed to override the dial. Even an agent on Auto holds anything below 70% for a human, tagged amber. Safety beats the cleaner story." },
      { t: "The audit is the forensic record", d: "The design's contribution to security is that abuse cannot happen invisibly. Every action leaves an attributable trace with a before-and-after, so misuse is detectable after the fact." },
    ],
  },

  // --- 08 DESIGN SYSTEM ---
  designSystem: {
    headline: "Design system.",
    intro:
      "Crux wears a graphite mission-control language, distinct from a marketing dashboard and from the rest of the portfolio: dense, calm, and built to be trusted like a terminal a professional relies on. Magenta is reserved for identity moments; the real work is done by status colors. Type is IBM Plex Sans for the interface and IBM Plex Mono for data, timestamps, and IDs, always tabular.",
    colors: [
      { name: "bg / graphite", hex: "#0E1116" },
      { name: "panel", hex: "#161B22" },
      { name: "hairline", hex: "#2A313C" },
      { name: "ink", hex: "#E6EDF3" },
      { name: "muted", hex: "#8B949E" },
      { name: "brand / magenta", hex: "#E8519B" },
      { name: "ok", hex: "#3FB950" },
      { name: "watch", hex: "#D29922" },
      { name: "act", hex: "#F85149" },
      { name: "info", hex: "#58A6FF" },
    ],
    aiGradient: "linear-gradient(120deg,#E8519B,#C45BCB 55%,#8A6BF0)",
    typography: [
      { t: "Display / H1 · IBM Plex Sans", v: "28/34 · 700" },
      { t: "Heading / H2", v: "15/20 · 600" },
      { t: "UI / Label · IBM Plex Sans", v: "13/18 · 500" },
      { t: "Body", v: "14/21 · 400" },
      { t: "Data / Mono · IBM Plex Mono", v: "11/16 · 500" },
      { t: "Eyebrow / Mono", v: "10/14 · 600, tracked" },
    ],
    spacing: [
      { t: "sp-1", v: "4px" }, { t: "sp-2", v: "6px" }, { t: "sp-3", v: "8px" }, { t: "sp-4", v: "10px" },
      { t: "sp-5", v: "14px" }, { t: "sp-6", v: "16px" }, { t: "sp-7", v: "20px" }, { t: "sp-8", v: "24px" },
    ],
    tokens: [
      ["color.bg", "#0E1116"],
      ["color.panel", "#161B22"],
      ["color.brand.magenta", "#E8519B"],
      ["status.ok / watch / act", "#3FB950 / #D29922 / #F85149"],
      ["radius.base", "6px"],
      ["confidence.threshold", "70%"],
      ["font.ui / data", "IBM Plex Sans / Mono"],
      ["motion.ease", "cubic-bezier(0.2,0.7,0.2,1)"],
    ],
    componentCategories: [
      "Sidebar nav", "Topbar", "KPI card", "Agent row", "Autonomy dial", "Routing lane",
      "Intent Preview card", "Blast-radius chip", "Reversibility tag", "Confidence bar",
      "Why decompose", "Audit row", "Before/after diff", "Filter chip", "Incident replay",
      "Escalation package", "Context key-value", "One-click paths", "Toast", "Empty state", "Decision badge",
    ],
    systemOutcomes:
      "The system is deliberately dense and calm so it reads as fit for consequential work. Status color does the heavy lifting so a human can triage the fleet at a glance, and magenta is held back for identity so it never competes with a real alert. That restraint is a trust decision encoded directly into the tokens.",
    crossProduct:
      "Crux is the third of three concepts (after Slate and Almanac). It inherits the shared grid, spacing, motion, and the confidence-plus-provenance interaction patterns, and expresses them through a heavier, graphite mission-control identity suited to supervising high-stakes work.",
  },

  // --- 09 WHERE IT STANDS ---
  whereItStands: {
    headline: "Where it stands.",
    intro:
      "Honest about what is proven and what is not. Nothing here is claimed as measured. The prototype proves the design holds together as a real, operable experience. Whether it helps real analysts is a separate question, and one I would test rather than assert.",
    doneTitle: "What's done",
    done: [
      "A working Control Room prototype you can open in any browser: the five agent-trust patterns as real, operable UI, where every count stays consistent when you act.",
      "A defined problem reconstructed from secondary research: where supervising acting agents breaks down, and why visibility, graduated control, and an audit trail are the real gaps.",
      "A competitive teardown across five tool types, exposing the empty middle between BI (surfaces data), copilots (over-automate), and frameworks (no human surface).",
      "The earlier decision-brief exploration that seeded the thesis, kept honestly as the first direction rather than hidden.",
    ],
    targetsTitle: "What I'm designing toward",
    targetsNote: "Targets to validate, not outcomes achieved.",
    targets: [
      { t: "The dial earns trust", d: "The bet is that a graduated autonomy dial, plus a confidence threshold that overrides it, makes an analyst comfortable letting agents run. Whether it does is the first thing I would test with real ops analysts." },
      { t: "The audit reassures governance", d: "Does an immutable log with before-and-after diffs and incident replay actually let a risk lead defend AI use to an auditor? Only real governance reviews will confirm it." },
      { t: "It prevents the rubber stamp", d: "The deepest risk is a human waving everything through. Blast radius, forced reasons on decline, and the removed Approve below threshold are the defences. Whether they are enough needs shadow sessions to settle." },
    ],
  },

  // --- 10 FUTURE VISION ---
  futureVision: {
    headline: "Future vision.",
    intro:
      "Crux is a concept I would genuinely take further. Here is the path from a working prototype to something real, and this is where the user-centred work I deliberately have not done yet comes in, front and centre.",
    phasesTitle: "From prototype to product",
    phases: [
      {
        phase: "Phase 1",
        title: "Validate with real analysts",
        items: [
          "Shadow sessions with real operations analysts. Watch how they set the autonomy dial, which agents they trust, and where they hesitate.",
          "Usability testing of the console. Does the intent preview give them enough to decide? Does the confidence decompose in a way they believe? Where do they rubber-stamp?",
          "Escalation-quality reviews with a risk lead: are the cases the agent hands up actually the right ones, and is the context package enough to decide?",
        ],
      },
      {
        phase: "Phase 2",
        title: "Instrument and pilot",
        items: [
          "Dial-position telemetry: measure which autonomy settings analysts actually trust over time, and where confident work quietly drifts wrong.",
          "A small pilot on a low-risk agent, tracking whether the audit trail holds up in a real governance review.",
          "Measure the design targets from 'Where It Stands' against real use, not walkthroughs.",
        ],
      },
      {
        phase: "Phase 3",
        title: "Design for scale",
        items: [
          "The fleet-level rollup view. Five agents proves the patterns; a hundred shifts the problem from reviewing each item to managing by exception.",
          "The hard states in depth: a compromised or hallucinating agent, conflicting evidence, and a second-approver flow for the riskiest actions.",
        ],
      },
      {
        phase: "Phase 4",
        title: "Bring the family together",
        items: [
          "Shared sign-in, shared memory, and one coherent AI-native suite across Slate, Almanac, and Crux, then the steady loop of shipping and learning.",
        ],
      },
    ],
    closingTitle: "The honest summary",
    closing:
      "Crux today is a well-researched, fully-built working prototype of a supervision console. Making it real means putting it in front of the analysts it is for, and the plan for doing that, rigorously, is above. That is the next chapter, and I would be glad to write it.",
  },

  // Live, client-side prototype embedded in the case study and openable full screen.
  prototypeUrl: "/decisionos/",
};
