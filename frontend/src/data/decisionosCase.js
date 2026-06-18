// DecisionOS case study data — self-initiated AI-native concept.
// AI executive decision intelligence: turning scattered signals into a clear,
// defensible call. Process type: Decision-led / high-stakes.
// Same data shape as recruitosCase.js. Visual styling is portfolio-driven;
// the product keeps its own identity (magenta AI accent) in the design system.
const S = (n) => `/decisionos-shots/${n}`;

export const decisionos = {
  slug: "decisionos",
  title: "DecisionOS",
  kind: "AI-native concept · self-initiated",
  subtitle:
    "An AI executive decision-intelligence OS — where scattered signals become a structured decision brief: options laid out, evidence attached, an AI recommendation with its reasoning and confidence, and the human firmly as the one who makes the call. Designed end-to-end with defensibility as the central problem: a recommendation an executive can't defend is one they won't make.",

  hero: {
    stats: [
      { value: "1", label: "Decision Brief" },
      { value: "100%", label: "Traceable Reasoning" },
      { value: "5", label: "Leaders Tested" },
    ],
  },

  // --- 00 OVERVIEW ---
  overview: {
    headline: "A decision OS that turns scattered signals into a clear, defensible call.",
    tldrTitle: "TL;DR — Concept Summary",
    tldr:
      "Executives make high-stakes calls on fragmented information — a dashboard here, a deck there, a gut feel, a hallway conversation — and then have to defend those calls to a board, a team, or themselves. DecisionOS is a self-initiated concept that structures a decision: it gathers the relevant signals, lays out the options, and offers an AI recommendation with explicit reasoning and a confidence level — while keeping the executive unambiguously the decision-maker. I ran the full process: interviews with decision-makers, an audit of how executive decisions actually get made, IA from the anatomy of a decision, three core flows, then polished hi-fi screens — with defensibility and reasoning-transparency as the load-bearing design problem.",
    badge: "Concept · self-initiated · not client work",
    facts: [
      { label: "Type", value: "AI-native product concept" },
      { label: "Role", value: "Sr. UX Lead (end-to-end)" },
      { label: "Timeline", value: "Self-initiated · 2026" },
      { label: "Platform", value: "Responsive web · desktop-first" },
      { label: "Tools", value: "Figma, decision modelling, exec interviews" },
    ],
    process: [
      { step: "01", title: "Probe", duration: "Decision-maker interviews" },
      { step: "02", title: "Audit", duration: "How decisions get made" },
      { step: "03", title: "Model", duration: "Anatomy of a decision" },
      { step: "04", title: "Design", duration: "Flows → hi-fi" },
      { step: "05", title: "Test", duration: "5 leaders" },
    ],
    intro:
      "DecisionOS is a self-initiated concept — not a client engagement. I chose executive decision-making because it's the highest-stakes, lowest-tooled workflow in any company: the decisions that matter most are made with the least structure. It's also the sharpest possible test of AI-trust design. The bar for an AI that influences a CEO's call is extraordinarily high — it has to be transparent, defensible, and humble about its own confidence, or it's worse than useless. Designing for that bar is the whole point.",
    intro2:
      "A consequential decision is rarely a data problem — the signals usually exist somewhere. It's a synthesis-and-defensibility problem: pulling scattered evidence into a coherent picture, weighing options honestly, and being able to explain afterwards why this call and not another. The interesting design challenge isn't 'let AI decide' — it's designing an AI that makes a leader's reasoning sharper and more defensible while leaving the decision firmly theirs.",
    contextTitle: "Why this concept",
    contextBody:
      "Three reasons: it's the highest-stakes workflow with the least purpose-built tooling; reasoning-transparency and defensibility are the hardest, most important AI-trust problems there are; and it lets the case study show a third distinct process — decision-led and high-stakes — alongside ethnographic RecruitOS and systems-led KnowledgeOS.",
    metadata: [
      { k: "Domain", v: "Executive Decision Intelligence" },
      { k: "Primary user", v: "Executive / decision-maker" },
      { k: "Secondary", v: "Chief of staff · Exec team" },
      { k: "Process type", v: "Decision-led / high-stakes" },
      { k: "Status", v: "Concept + hi-fi design" },
    ],
  },

  // --- 01 PERSONAS ---
  personasSection: {
    headline: "Meet the people who have to make the call.",
    intro:
      "A consequential decision has a person who owns it, a person who prepares it, and a room that has to live with it. The executive carries the accountability; the chief of staff assembles the picture; the exec team needs to understand and trust the reasoning. DecisionOS has to make the call sharper for the owner without taking the call away from them.",
    personas: [
      {
        name: "Elena Vasquez",
        initials: "EV",
        role: "Executive · primary",
        context: "A VP or C-level leader making several consequential calls a quarter — pricing, hiring freezes, market entry, big bets — each on incomplete information and under scrutiny.",
        goals: [
          "Make a sharper call faster, without waiting weeks for a perfect deck",
          "Be able to defend the decision with clear reasoning, not just instinct",
          "Stress-test her own thinking against an honest second opinion",
        ],
        frustrations: [
          "The signals exist but are scattered across dashboards, decks, and people",
          "By the time a full analysis is ready, the decision window has half-closed",
          "Hard to separate a well-reasoned recommendation from a confident-sounding one",
        ],
        jtbd: "When I face a consequential call, I want the signals and options structured with honest reasoning, so I can decide fast and defend it.",
        tools: "BI dashboards · decks · her exec team · gut",
        hates: "“I don't need the machine to decide. I need it to make my reasoning sharper and my call defensible.”",
      },
      {
        name: "Tom Akintola",
        initials: "TA",
        role: "Chief of Staff",
        context: "The person who turns a vague 'should we do X?' into a decision the executive can actually make — by chasing data, building the deck, and pre-wiring the room.",
        goals: [
          "Assemble a complete, balanced picture without a week of manual work",
          "Surface the real trade-offs, not a deck that argues one side",
          "Give the exec something defensible to take to the board",
        ],
        frustrations: [
          "Days lost stitching signals from a dozen sources into one view",
          "Pressure to build a deck that supports a predetermined answer",
          "No structured way to capture why a decision was ultimately made",
        ],
        jtbd: "When I prep a decision, I want the evidence and options assembled and balanced, so the exec gets the real trade-offs, fast.",
        tools: "Spreadsheets · BI tools · decks · calendar",
        hates: "“I spend three days building the picture and ten minutes in the room where the call gets made.”",
      },
      {
        name: "Priya Nair",
        initials: "PN",
        role: "Exec Team Member",
        context: "A peer or report in the room when the decision lands — needs to understand the reasoning well enough to commit to it and carry it out.",
        goals: [
          "Understand why this call was made, not just what was decided",
          "Trust that options were weighed honestly, not cherry-picked",
          "Be able to align and commit, even on a call she'd have made differently",
        ],
        frustrations: [
          "Decisions arrive as conclusions with the reasoning left out",
          "No visibility into what alternatives were considered and dropped",
          "Hard to commit to a call she can't see the logic behind",
        ],
        jtbd: "When a decision is made, I want to see the reasoning and the options weighed, so I can align and commit with confidence.",
        tools: "Email · decks · the meeting",
        hates: "“'Because I said so' doesn't help me carry the decision to my own team.”",
      },
    ],
    quoteWall: [
      { q: "The data exists. Pulling it into a decision is the hard part.", a: "Executive · interview 2" },
      { q: "By the time the analysis is ready, the moment's gone.", a: "Executive · interview 1" },
      { q: "I can't tell a good recommendation from a confident one.", a: "Executive · interview 4" },
      { q: "Three days building the deck, ten minutes making the call.", a: "Chief of staff · interview" },
      { q: "I need to defend this to the board on Monday.", a: "Executive · interview 3" },
    ],
  },

  // --- 02 RESEARCH 1: how decisions get made ---
  research1: {
    headline: "I sat in on how the call actually gets made.",
    methodTitle: "Decision-maker interviews",
    methodIntro:
      "Rather than ask executives what a good decision looks like in theory, I reconstructed real ones: what the call was, what information they had, what they wished they'd had, how they weighed it, and how they later defended it. Five in-depth interviews with decision-makers and chiefs of staff, walking back through recent consequential calls from trigger to defence.",
    method: [
      { l: "Participants", v: "5 decision-makers" },
      { l: "Method", v: "Decision reconstruction interviews" },
      { l: "Traced", v: "Real calls, trigger to defence" },
      { l: "Captured", v: "Signals, weighing, time pressure, defence" },
    ],
    timelineTitle: "The anatomy of a decision",
    timelineIntro:
      "Walking back through one real decision showed where the friction and the risk concentrate — and why so much of the effort goes into assembling the picture rather than actually reasoning about it.",
    timeline: [
      { time: "Step 1", label: "Trigger", note: "A consequential question lands: 'do we enter this market this quarter?'" },
      { time: "Step 2", label: "Signal hunt", note: "Chief of staff spends days pulling numbers from BI, decks, and a dozen people.", pain: true },
      { time: "Step 3", label: "Deck assembly", note: "Findings packed into a deck — which, under pressure, quietly tilts toward one answer.", pain: true },
      { time: "Step 4", label: "The room", note: "Exec team debates for an hour; the loudest voice and the latest data point carry weight." },
      { time: "Step 5", label: "The call", note: "The executive decides — often on instinct the deck only partly informed.", pain: true },
      { time: "Step 6", label: "The defence", note: "Weeks later, has to justify the call to the board with reasoning that was never captured.", pain: true },
    ],
    affinityTitle: "What the interviews clustered into",
    affinityIntro:
      "Observations across all five interviews affinity-mapped into four themes — each a place where consequential decisions lose rigour, speed, or defensibility.",
    affinityThemes: [
      { t: "Assembly eats the time", d: "Most of the effort goes into gathering and formatting signals, not reasoning about them. The picture takes days; the decision takes minutes." },
      { t: "Decks argue, they don't weigh", d: "Under pressure, decision materials tilt toward a predetermined answer. Honest trade-offs get smoothed away in service of a recommendation." },
      { t: "Confidence masquerades as quality", d: "Leaders can't easily separate a well-reasoned recommendation from a confidently-delivered one. Conviction is mistaken for rigour." },
      { t: "Reasoning isn't captured", d: "The why behind a call evaporates the moment it's made — leaving nothing to defend it with, or to learn from later." },
    ],
    insightsTitle: "Three insights that drove the design",
    insights: [
      { t: "The deliverable is a defensible call, not a dashboard", d: "Executives don't need more data surfaced — they need it structured into options, evidence, and reasoning they can stand behind. A dashboard informs; a decision brief decides.", link: "→ Structure the decision, not the data (Principle 1)" },
      { t: "Honesty beats persuasion", d: "The system's value is in laying out trade-offs straight — including the case against its own recommendation. An AI that argues one side is just a faster biased deck.", link: "→ Show the case against (Principle 2)" },
      { t: "The reasoning is the product", d: "A recommendation is worthless without its reasoning and confidence exposed. Defensibility comes from traceable logic, not a confident verdict.", link: "→ Reasoning + confidence, always (Principle 3)" },
    ],
    keyInsight:
      "Executives don't want the machine to make the decision. They want it to structure the decision — options, evidence, honest reasoning, and a confidence level — so the call they make is faster, sharper, and defensible.",
  },

  // --- 03 RESEARCH 2: the broken decision stack ---
  research2: {
    headline: "How executive decisions actually get tooled.",
    ecoTitle: "The decision sprawl",
    ecoIntro:
      "I mapped everything a leader leans on to make a consequential call. The problem is that none of it is built for deciding: each tool answers a slice, none assembles the whole, and the synthesis happens in a human's head under deadline.",
    ecosystem: [
      { name: "BI dashboards", role: "Metrics, no synthesis" },
      { name: "Strategy decks", role: "Persuasion, not weighing" },
      { name: "Spreadsheets", role: "Models, siloed and fragile" },
      { name: "Board materials", role: "After-the-fact justification" },
      { name: "Email / threads", role: "Scattered context + opinions" },
      { name: "1:1s & hallways", role: "Where real input happens" },
      { name: "The exec's head", role: "Where it all gets synthesised" },
      { name: "Gut feel", role: "The silent tiebreaker" },
    ],
    ecoGap:
      "Nothing structures the decision. A dozen tools surface slices; the executive is the synthesis engine — under deadline, with no record of the reasoning.",
    heuristicTitle: "Heuristic evaluation — the two incumbents",
    heuristicIntro:
      "I evaluated the two things executives actually reach for — a BI dashboard (Tableau-style) and a strategy deck — on six heuristics, to locate the systemic gaps a real decision OS would have to close.",
    heuristics: [
      { t: "Structures the decision", d: "Surfaces metrics or a narrative; neither lays out options, evidence, and a recommendation as a decision.", s: "3/10" },
      { t: "Honest trade-offs", d: "Decks are built to persuade; dashboards are neutral but mute. Neither presents a balanced case for and against.", s: "3/10" },
      { t: "Reasoning transparency", d: "A recommendation, where one exists, arrives without its logic — impossible to interrogate.", s: "2/10" },
      { t: "Confidence signalling", d: "No sense of how strong the evidence is; a shaky call and a solid one look identical.", s: "2/10" },
      { t: "Captures the why", d: "No record of why a decision was made — nothing to defend or learn from later.", s: "2/10" },
      { t: "Keeps human in command", d: "Dashboards leave everything to the human; AI tools that exist tend to over-automate and under-explain.", s: "4/10" },
    ],
    teardownTitle: "Competitive teardown",
    teardownIntro:
      "Six tools across the category, scored on eight capabilities. The pattern: BI tools surface data without structuring a decision; emerging AI tools recommend without showing reasoning. Nothing combines a structured decision brief with transparent reasoning, honest trade-offs, and the human kept in command.",
    competitiveTable: {
      headers: ["Capability", "DecisionOS", "Tableau", "Power BI", "Strategy deck", "Pigment", "AI copilots"],
      rows: [
        ["Structured decision brief", "Yes", "No", "No", "Partial", "Partial", "No"],
        ["Options laid out", "Yes", "No", "No", "Partial", "Partial", "Partial"],
        ["Evidence per option", "Yes", "Partial", "Partial", "Partial", "Partial", "No"],
        ["Reasoning transparency", "Yes", "No", "No", "No", "No", "Partial"],
        ["Confidence signalling", "Yes", "No", "No", "No", "No", "No"],
        ["Case against the rec", "Yes", "No", "No", "No", "No", "No"],
        ["Captures the why", "Yes", "No", "No", "Partial", "No", "No"],
        ["Human in command", "Yes", "Yes", "Yes", "Yes", "Partial", "Partial"],
      ],
    },
    gapTitle: "The gap statement",
    gap:
      "No existing tool structures a decision with transparent reasoning, honest trade-offs, and a confidence signal while keeping the human in command. BI surfaces data; decks persuade; AI copilots over-automate. The defensible, human-led middle is the opportunity.",
  },

  // --- 04 HYPOTHESIS ---
  hypothesis: {
    headline: "The hypothesis.",
    positioningTitle: "Positioning",
    positioning:
      "DecisionOS is an AI executive decision-intelligence OS. It turns a consequential question into a structured decision brief: options, evidence per option, an AI recommendation with explicit reasoning and a confidence level — including the honest case against — while the executive makes and records the call. It is not a BI dashboard, not a deck tool, and not an autopilot that decides for you.",
    isItList: [
      "A decision brief — options, evidence, reasoning, confidence",
      "An honest second opinion that argues both sides",
      "A record of the call and the why, for defence and learning",
    ],
    isNotList: [
      "Not a BI dashboard that surfaces metrics and stops",
      "Not a deck tool built to win an argument",
      "Not an autopilot that makes the decision for you",
    ],
    modelTitle: "The decision-centric mental model",
    modelIntro:
      "The core IA bet: structure the product around the decision, not the data. A leader arrives with a consequential question; the system's job is to frame it as a decision — options, the evidence behind each, a reasoned recommendation with its confidence, and a captured call. Data becomes evidence in service of a decision — not the thing you stare at.",
    modelNodes: [
      { t: "Decision", d: "The consequential question. The unit everything serves." },
      { t: "Options", d: "The real alternatives, laid out side by side." },
      { t: "Evidence", d: "Signals gathered and attached to each option." },
      { t: "Recommendation", d: "A reasoned call with confidence — and the case against." },
      { t: "The Call", d: "The human decides; the reasoning is captured." },
    ],
    principlesTitle: "Four design principles",
    principlesIntro:
      "Each principle is a tension resolved in a direction — and each traces directly back to a research insight.",
    principles: [
      { t: "Structure the decision, not the data", d: "Frame everything as a decision — options, evidence, recommendation — never as a wall of metrics. The product's job is synthesis, not surfacing.", from: "From insight: the deliverable is a defensible call." },
      { t: "Always show the case against", d: "Every recommendation carries its own strongest counter-argument and the conditions under which it's wrong. Honesty over persuasion, by construction.", from: "From insight: honesty beats persuasion." },
      { t: "Expose the reasoning and the confidence", d: "No recommendation without its logic and a confidence level, traceable to the evidence. Defensibility comes from transparent reasoning, not a confident verdict.", from: "From insight: the reasoning is the product." },
      { t: "The human makes the call", d: "The AI structures and recommends; the executive decides and the system records it. Command stays unambiguously human — captured, not automated.", from: "From insight: executives want sharper reasoning, not abdication." },
    ],
  },

  // --- 05 IA ---
  ia: {
    headline: "How it thinks: architecture & flows.",
    taskTitle: "The decision lifecycle, as tasks",
    taskIntro:
      "Before any IA, I broke the decision lifecycle into discrete tasks with their dependencies — so the structure would serve the act of deciding, not the display of data.",
    lifecycle: [
      { t: "Frame", d: "A consequential question becomes a structured decision." },
      { t: "Gather", d: "Relevant signals pulled from connected sources." },
      { t: "Option", d: "The real alternatives laid out side by side." },
      { t: "Weigh", d: "Evidence attached to each; trade-offs made explicit." },
      { t: "Recommend", d: "A reasoned call with confidence and the case against." },
      { t: "Decide", d: "The executive makes the call; reasoning is captured." },
      { t: "Review", d: "The decision and its outcome revisited, to learn." },
    ],
    cardSortTitle: "Card sort — how leaders frame decisions",
    cardSortIntro:
      "An open card sort with eight decision-makers tested whether they think in metrics or in decisions. They think in decisions — participants grouped tasks around 'the call I have to make', not around data sources or dashboards. The sort also settled the top-level surfaces: Decisions, the Brief, Evidence, and a Review log.",
    cardSort: [
      { l: "Participants", v: "8 decision-makers" },
      { l: "Method", v: "Open card sort" },
      { l: "Result", v: "Decision-first grouping confirmed" },
      { l: "Bonus", v: "Settled the 4 top-level surfaces" },
    ],
    iaDecisionsTitle: "Three IA decisions",
    iaDecisions: [
      { t: "The brief is the centre", chose: "Made the structured decision brief the core view — options, evidence, recommendation in one frame — with a portfolio of decisions above it.", alt: "Considered a metrics-dashboard home (rejected — it's the BI model that leaves synthesis to the human under deadline)." },
      { t: "Recommendation and counter side by side", chose: "Rendered the AI recommendation and its strongest counter-argument as adjacent, equal-weight panels — the case against is impossible to skip.", alt: "Considered a recommendation with caveats below (rejected — caveats get scrolled past; the counter-case has to be structural)." },
      { t: "The call is a deliberate, recorded act", chose: "Making the decision is an explicit, gated step that captures the chosen option and the reasoning — a record, not a silent click.", alt: "Considered letting the recommendation stand as the decision (rejected — it blurs the line between AI advice and human command)." },
    ],
  },

  // --- 06 DESIGN ---
  design: {
    headline: "Building it.",
    wireframesIntro:
      "Low-fidelity, greyscale wireframes first — to lock structure and the decision-trust patterns before any colour or brand. The questions at this stage: how do options sit side by side, how does the recommendation share the frame with its counter-argument, and how does confidence and the human-call gate read without drama?",
    wireframes: [
      { src: S("wf-01-brief.png"), tag: "Lo-fi · 01", title: "Decision brief", desc: "The signature view in greyscale: options laid side by side, evidence beneath each, recommendation panel on the right. Locked the structure of a decision before any styling." },
      { src: S("wf-02-recommendation.png"), tag: "Lo-fi · 02", title: "Recommendation + counter", desc: "The trust moment, structurally: the AI recommendation and its strongest counter-argument as adjacent, equal-weight panels, each with a confidence signal. Honesty by construction." },
      { src: S("wf-03-evidence.png"), tag: "Lo-fi · 03", title: "Evidence detail", desc: "Expanding a piece of evidence reveals its source, date, and how it weighs on each option — reasoning made traceable, not asserted." },
      { src: S("wf-04-decide.png"), tag: "Lo-fi · 04", title: "Make the call", desc: "The decision as a deliberate, recorded act — choose the option, capture the reasoning, with the human-call gate explicit. AI advises; the executive decides." },
    ],
    flowsTitle: "Three core task flows",
    flowsIntro:
      "Three flows carry the product, each with its AI touchpoints and human gates marked. The gates are the point: the AI structures and recommends freely, but the call itself is always a deliberate, recorded human act.",
    flows: [
      { t: "Frame → Decision brief", d: "Question framed → signals gathered → options laid out → AI recommends with reasoning, confidence, and the case against. AI touchpoints: gathering, option synthesis, recommendation. Trust gate: reasoning and counter-case always shown." },
      { t: "Recommendation → Interrogate", d: "Read recommendation → expand the reasoning → trace each claim to its evidence and date → weigh against the counter-case. AI touchpoint: reasoning generation. Trust gate: every claim traceable to evidence." },
      { t: "Brief → Make the call", d: "Weigh options → choose → capture the reasoning → decision recorded for defence and review. AI touchpoint: none — this step is human. Human gate: the executive makes and records the call." },
    ],
    finalIntro:
      "From greyscale to a designed product. The screens below are the hi-fidelity design direction for DecisionOS — a serious, executive-grade interface with a magenta accent reserved for the AI recommendation surface, the ✦ sparkle marking AI reasoning, and the counter-case given equal visual weight to the recommendation. These are concept screens, designed to be iterated into a build.",
    finalScreens: [
      { src: S("hi-01-brief.png"), tag: "Hi-fi · 01", title: "Decision brief", desc: "The hero. A consequential question, structured: options side by side with evidence, and an AI recommendation panel carrying its reasoning and a confidence signal. The deck, replaced by a decision." },
      { src: S("hi-02-recommendation.png"), tag: "Hi-fi · 02", title: "Recommendation + the case against", desc: "The recommendation and its strongest counter-argument, adjacent and equal-weight, each with confidence and traceable evidence. Honesty designed in, not bolted on." },
      { src: S("hi-03-decide.png"), tag: "Hi-fi · 03", title: "Make the call", desc: "The decision as a deliberate, recorded act: the executive chooses, captures the why, and the reasoning is preserved — defensible to the board, reviewable later." },
    ],
  },

  // --- 07 THE AI LAYER ---
  aiLayer: {
    headline: "The AI layer — a transparent advisor, never an autopilot.",
    intro:
      "The hard part of an AI decision product isn't producing a recommendation — it's producing one a leader can trust, interrogate, and defend, without ever feeling the machine took the decision from them. DecisionOS leans on a small set of AI-interaction patterns, applied consistently, so the AI reads as a rigorous, honest advisor rather than an oracle or an autopilot. Every pattern below appears in the design.",
    patterns: [
      { id: "P1", t: "Reasoning + provenance", d: "Every recommendation exposes its full reasoning chain, and every claim in it traces to the specific evidence and date behind it. No verdict without its logic.", featured: true },
      { id: "P2", t: "The case against", d: "Each recommendation carries its own strongest counter-argument and the conditions under which it fails — presented with equal weight, impossible to skip.", featured: true },
      { id: "P3", t: "Confidence, honestly", d: "A clear confidence signal on the recommendation, calibrated to evidence strength — low-confidence calls look different from high-confidence ones." },
      { id: "P5", t: "Human makes the call", d: "The AI structures and advises; the decision is a deliberate, recorded human act. Command stays unambiguously with the executive." },
      { id: "P8", t: "Graceful uncertainty", d: "When the evidence is thin or conflicting, the system says so and shows the gap — rather than manufacturing false conviction." },
    ],
    decisionsTitle: "AI design decisions",
    decisions: [
      { t: "A magenta reserved for the rec", d: "A magenta-led AI gradient and the ✦ sparkle appear only on the recommendation and reasoning surfaces — so a leader always knows what's the AI's counsel versus their own evidence and options." },
      { t: "Counter-case as an equal panel", d: "The case against sits beside the recommendation at equal size and weight — never as a footnote — so honest trade-offs are structural, not decorative." },
      { t: "Confidence as calibrated signal", d: "Confidence is a deliberate, evidence-calibrated signal rather than false-precision numbers — honest about how strong the call really is." },
    ],
  },

  // --- 08 DESIGN SYSTEM ---
  designSystem: {
    headline: "Design system.",
    intro:
      "DecisionOS uses a serious, executive-grade foundation — confident typography, deliberate density, and a restrained dark-capable palette — so it reads as a tool for consequential calls rather than a casual dashboard. A single magenta-led gradient is reserved exclusively for the AI recommendation surface. The system shares its grid, spacing, and AI-interaction patterns with the rest of the OS family, taking magenta as its accent.",
    colors: [
      { name: "Surface / bg", hex: "#F7F6F9" },
      { name: "Ink / 900", hex: "#1B1620" },
      { name: "Magenta / 600", hex: "#E8519B" },
      { name: "AI / start", hex: "#E8519B" },
      { name: "AI / mid", hex: "#C45BCB" },
      { name: "AI / end", hex: "#8A6BF0" },
      { name: "Faint / border", hex: "#8B8392" },
      { name: "Caution", hex: "#C2410C" },
    ],
    aiGradient: "linear-gradient(120deg,#E8519B,#C45BCB 55%,#8A6BF0)",
    typography: [
      { t: "Display / H1 · Plus Jakarta Sans", v: "34/42 · 800" },
      { t: "Heading / H2", v: "24/32 · 700" },
      { t: "Subheading / H3", v: "18/26 · 700" },
      { t: "Body · Inter", v: "14/22 · 400" },
      { t: "UI / Label · Inter", v: "13/18 · 600" },
      { t: "Data / Mono · Roboto Mono", v: "12/18 · 500" },
    ],
    spacing: [
      { t: "sp-1", v: "4px" }, { t: "sp-2", v: "8px" }, { t: "sp-3", v: "12px" }, { t: "sp-4", v: "16px" },
      { t: "sp-5", v: "24px" }, { t: "sp-6", v: "32px" }, { t: "sp-7", v: "48px" }, { t: "sp-8", v: "64px" },
    ],
    tokens: [
      ["color.surface.bg", "#F7F6F9"],
      ["color.ink.900", "#1B1620"],
      ["color.brand.magenta", "#E8519B"],
      ["gradient.ai", "120deg,#E8519B,#C45BCB,#8A6BF0"],
      ["radius.md", "12px"],
      ["radius.lg", "20px"],
      ["shadow.card", "0 1px 3px rgba(27,22,32,.09)"],
      ["icon.ai", "✦ sparkle"],
    ],
    componentCategories: [
      "Buttons", "Inputs", "Decision card", "Option panel", "Evidence card",
      "Recommendation panel", "Counter-case panel", "Confidence signal", "Chips",
      "Tabs", "Avatars", "Decision-log row", "Reasoning trace", "Outcome badge",
      "Breadcrumbs", "Modal", "Drawer", "Toast", "Empty state", "AI-thinking state",
    ],
    systemOutcomes:
      "The system is deliberately serious so it reads as fit for consequential calls. Reserving one gradient and one icon (✦) exclusively for the recommendation surface means a leader can always separate the AI's counsel from their own evidence and options — a trust decision encoded directly into the tokens.",
    crossProduct:
      "DecisionOS is the third of three OS-family concepts (after RecruitOS and KnowledgeOS). It inherits the shared foundation — grid, spacing, motion, and the confidence-plus-provenance interaction patterns — and expresses it through a heavier, executive-grade magenta identity suited to high-stakes decisions.",
  },

  // --- 09 VALIDATION ---
  validation: {
    headline: "Does it work?",
    intro:
      "I tested the hi-fi design with five leaders — executives and chiefs of staff — walking the three core flows and probing the two things that make or break an executive decision tool: do they trust the reasoning enough to act on it, and does it sharpen their call without ever feeling like it took the call away?",
    testSetup: [
      { l: "Participants", v: "5 leaders" },
      { l: "Method", v: "Moderated hi-fi walkthrough" },
      { l: "Tasks", v: "3 core flows + trust probes" },
      { l: "Focus", v: "Reasoning, counter-case, command" },
    ],
    keyResults: [
      { v: "5/5", l: "Stayed in command", s: "felt they made the call" },
      { v: "5/5", l: "Valued the case against", s: "named it the standout" },
      { v: "4/5", l: "Trusted the reasoning", s: "with traceable evidence" },
      { v: "★", l: "Most-cited feature", s: "the equal-weight counter-case" },
    ],
    findingsTitle: "What the test surfaced",
    findings: [
      { t: "The case against built the trust", d: "Every leader pointed to the equal-weight counter-argument as the thing that made the recommendation credible. An AI willing to argue against itself was, paradoxically, the one they'd trust.", fix: "Validated: keep the counter-case structural and equal-weight." },
      { t: "Command had to be unmistakable", d: "Leaders were emphatic that the decision stay theirs. The deliberate, recorded 'make the call' step was what made them comfortable letting AI structure the brief at all.", fix: "Validated: keep the call an explicit, human, recorded act." },
      { t: "Confidence needed calibration cues", d: "A confidence signal alone wasn't enough — leaders wanted to know what drove it. Why is this 'high confidence'? The basis needed to be visible.", fix: "Fixed: tied the confidence signal to a visible evidence-strength rationale." },
    ],
  },

  // --- 10 IMPACT ---
  impact: {
    headline: "The numbers & what this proves.",
    note: "Concept work — figures below are design targets and test outcomes, framed as such, not shipped production metrics.",
    outcomes: [
      { v: "1", l: "Structured Brief", s: "replaces the scattered deck" },
      { v: "5/5", l: "Stayed in Command", s: "human made the call" },
      { v: "3", l: "Core Flows", s: "designed end-to-end" },
      { v: "P1–P8", l: "AI Patterns", s: "applied consistently" },
    ],
    provesTitle: "What this concept demonstrates",
    proves: [
      { t: "Designing AI for the highest stakes", d: "Reasoning transparency, an equal-weight counter-case, calibrated confidence, and human command — the concrete moves that make AI trustworthy where the stakes are highest." },
      { t: "Reframing data as decisions", d: "A decision-centric IA, validated by a card sort, that treats data as evidence for a call rather than the thing you stare at." },
      { t: "End-to-end ownership", d: "From decision-reconstruction interviews to a verified hi-fi design — the full arc, with defensibility designed in from the first principle." },
      { t: "Completing the OS family", d: "Built on the shared foundation, proving the system spans recruitment, knowledge, and decisions while staying coherent." },
    ],
    artifacts: [
      { t: "Hi-fidelity design", d: "The decision brief, the recommendation-plus-counter-case surface, and the make-the-call step — the designed product, ready to iterate into a build." },
      { t: "Research synthesis", d: "Decision-reconstruction findings, the anatomy-of-a-decision map, affinity themes, decision-flow map, and competitive teardown." },
      { t: "IA & flows", d: "Card-sort-validated, decision-centric information architecture and three core flows with AI touchpoints and human gates marked." },
      { t: "AI-native design system", d: "An executive-grade foundation with a magenta AI-reserved gradient, recommendation and counter-case panels, and calibrated confidence signals." },
    ],
    nextTitle: "Where it goes next",
    next: [
      "An interactive prototype of the decision brief, to test the recommendation-and-counter-case interaction live",
      "A decision-quality study — tracking whether structured briefs produce measurably more defensible calls",
      "Bringing the OS family together — shared sign-in, shared memory, one coherent AI-native suite across RecruitOS, KnowledgeOS, and DecisionOS",
    ],
    wentWell: [
      "Reconstructing real decisions (not theorising about good ones) surfaced defensibility — not data access — as the true problem, which reframed the entire product",
      "Giving the counter-case equal visual weight to the recommendation was the single highest-leverage trust decision, and every leader named it",
      "Making the call a deliberate, recorded human act resolved the deepest tension — letting AI structure the decision without ever seeming to take it",
      "The decision-centric IA held up under the card sort — leaders genuinely think in calls, not dashboards",
    ],
    differently: [
      "Would test with a live, consequential decision rather than a reconstructed one — real stakes change how people weigh a recommendation",
      "Should have designed the conflicting-evidence state in more depth — it's the hardest and most valuable moment in a real decision",
      "Would prototype the confidence-calibration rationale earlier — the signal alone under-delivered until its basis was visible",
      "Would involve a board member in research — the defence audience shaped the product but was studied only second-hand",
    ],
  },

  // No live prototype yet — hi-fi concept screens stand in for the build.
  prototypeUrl: null,
};
