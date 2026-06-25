// Almanac case study data - self-initiated AI-native concept.
// Enterprise AI knowledge engine: turning institutional memory into something
// teams can ask, not just search. Process type: Jobs-to-be-done / systems-led.
// Same data shape as recruitosCase.js. Visual styling is portfolio-driven;
// the product keeps its own identity (teal AI accent) inside the design system.
const S = (n) => `/knowledgeos-shots/${n}`;

export const knowledgeos = {
  slug: "knowledgeos",
  title: "Almanac",
  kind: "AI-native concept · self-initiated",
  subtitle:
    "An enterprise AI knowledge engine. Employees ask a question in plain language and get a synthesised, cited answer drawn from the company's own documents, wikis, and tickets. I took it from problem framing through research, IA, and a clickable prototype, with answer-provenance and trust as the central design problem. An answer you can't verify is an answer no one will act on.",

  hero: {
    stats: [
      { value: "1", label: "Ask, not search" },
      { value: "100%", label: "Answers cited" },
      { value: "8+", label: "Places answers hide" },
    ],
  },

  // --- 00 OVERVIEW ---
  overview: {
    headline: "A knowledge engine that answers in your company's own words, and shows its sources.",
    tldrTitle: "TL;DR · Concept Summary",
    tldr:
      "Inside most companies, the answer to a question already exists, in a doc, a wiki page, a closed ticket, or a Slack thread. Finding it means knowing where to look and who to ask. Almanac lets anyone ask in plain language and get one synthesised answer from the company's own sources, every claim cited and clickable. I built it as a self-initiated concept, reconstructed from secondary research, end to end through to hi-fi screens. Answer-provenance is the load-bearing trust mechanism throughout.",
    badge: "Concept · self-initiated · not client work",
    facts: [
      { label: "Type", value: "AI-native product concept" },
      { label: "Role", value: "Sr. UX Lead (end-to-end)" },
      { label: "Basis", value: "Secondary research + teardown" },
      { label: "Platform", value: "Responsive web, desktop-first" },
      { label: "Tools", value: "Figma, content modelling, desk research" },
    ],
    process: [
      { step: "01", title: "Frame", duration: "Jobs-to-be-done lens" },
      { step: "02", title: "Audit", duration: "Knowledge-flow map" },
      { step: "03", title: "Model", duration: "Content + IA" },
      { step: "04", title: "Design", duration: "Flows to hi-fi" },
      { step: "05", title: "Validate", duration: "Planned next" },
    ],
    intro:
      "Almanac is a self-initiated concept, not a client engagement. I chose enterprise knowledge because it's a problem every company has and almost none have solved well: institutional memory is real, valuable, and effectively unsearchable. It's also a sharp test of AI-trust design. Generative answers are easy to produce and easy to distrust. The design challenge is making an AI answer one a domain expert will actually rely on, which is why every answer here carries its sources, not just a confident tone.",
    intro2:
      "I didn't interview anyone for this. It's a self-initiated concept, and I'd rather show the reasoning than claim research I didn't run. The problem is reconstructed from the public record: industry write-ups on knowledge work, the complaints teams air about their wikis and search tools, and the gaps reviewers flag in the incumbents. Knowledge work runs on questions, 'how did we handle this last time?', 'what's our policy on X?', 'who decided this and why?'. Today those get answered by interrupting a colleague, digging through a stale wiki, or giving up. The job here was to design an answer surface trustworthy enough to replace the colleague-interrupt.",
    contextTitle: "Why this concept",
    contextBody:
      "Three reasons. It's a near-universal enterprise pain with no good incumbent. Answer-provenance is a genuinely hard, genuinely important trust-design problem. And it lets the case study show a process that's jobs-to-be-done and content-model-led, different from the ethnographic Slate or the decision-led Crux.",
    metadata: [
      { k: "Domain", v: "Enterprise Knowledge / Search" },
      { k: "Primary user", v: "Any employee with a question" },
      { k: "Secondary", v: "Domain expert · Knowledge admin" },
      { k: "Process type", v: "Jobs-to-be-done / systems-led" },
      { k: "Status", v: "Concept + hi-fi design" },
    ],
  },

  primaryUsers: [
    { label: "Knowledge Seekers", desc: "The primary user: anyone on the team who needs an answer now and currently hunts across wikis, drives and Slack threads." },
    { label: "Domain Experts", desc: "Hold the answers in their heads and are tired of being interrupted for things that should be self-serve." },
    { label: "Knowledge Admins", desc: "Curate sources and permissions, keeping what the AI draws on trustworthy and current." },
  ],

  // --- 01 PERSONAS ---
  personasSection: {
    headline: "Meet the people with the questions, and the answers.",
    intro:
      "These aren't interview subjects. I didn't interview anyone for a self-initiated concept, and I won't pretend I did. They're archetypes built from public material: write-ups on knowledge work, the complaints teams air about their wikis and search tools, and product reviews of the incumbents. Knowledge has a supply side and a demand side. Most people are on the demand side: they have a question and need an answer now. A few are domain experts who hold the answers and get interrupted for them all day. And someone owns whether the knowledge base is trustworthy at all. Almanac has to serve the asker without burning out the expert.",
    personas: [
      {
        name: "Sam Okonkwo",
        initials: "SO",
        role: "Knowledge Seeker · primary",
        context: "A mid-level employee in sales, ops, support, or engineering, who hits questions all day that someone, somewhere in the company, has already answered.",
        goals: [
          "Get a trustworthy answer without interrupting a busy colleague",
          "Know the answer is current, not from a doc that's two reorgs old",
          "See where the answer came from so they can defend the decision",
        ],
        frustrations: [
          "Wiki search returns 40 stale pages and none of them answer the question",
          "The real answer lives in a closed ticket or a Slack thread they can't find",
          "Ends up asking a colleague and feeling like they're wasting everyone's time",
        ],
        jtbd: "When I hit a question someone has answered before, I want a trustworthy answer fast, so I can keep moving without interrupting an expert.",
        tools: "Wiki search · Slack · Google Drive · asking around",
      },
      {
        name: "Dr. Lena Hartmann",
        initials: "LH",
        role: "Domain Expert",
        context: "The person everyone pings. Holds deep knowledge in her head and in scattered docs, and loses hours a week to questions she's answered a dozen times.",
        goals: [
          "Stop answering the same question for the tenth time",
          "Make sure people get the right answer, not a half-remembered version",
          "Keep her actual job from being buried under interruptions",
        ],
        frustrations: [
          "Constant context-switching to answer questions kills deep work",
          "When she's out, the team is stuck because the knowledge is in her head",
          "Documentation she writes goes stale and nobody finds it anyway",
        ],
        jtbd: "When I've answered something once, I want it captured and reusable, so I'm not the single point of failure for my own expertise.",
        tools: "Her own head · scattered docs · Slack DMs",
      },
      {
        name: "Marcus Webb",
        initials: "MW",
        role: "Knowledge Admin",
        context: "Owns the knowledge base, the wiki, the intranet. Accountable for whether any of it is trustworthy, and quietly aware that most of it isn't.",
        goals: [
          "Make the knowledge base something people actually trust and use",
          "See what people are asking that the docs don't answer",
          "Keep answers from drifting out of date silently",
        ],
        frustrations: [
          "No visibility into what questions are going unanswered",
          "Stale content erodes trust, and trust is almost impossible to win back",
          "Can't tell which docs matter and which are dead weight",
        ],
        jtbd: "When knowledge goes stale or a gap appears, I want to see it, so I can fix the base before people stop trusting it.",
        tools: "CMS · analytics · the wiki nobody reads",
      },
    ],
  },

  // --- 02 RESEARCH 1: how knowledge moves ---
  research1: {
    headline: "I followed a question through the company, on paper.",
    methodTitle: "A jobs-to-be-done lens, from the public record",
    methodIntro:
      "Rather than ask people what they think of their wiki, I traced how a real question moves: what someone needs to know, where they look, how long it takes, and what they do when they give up. I reconstructed that path from secondary sources, write-ups on knowledge work, the complaints teams air online about search and wikis, and tool reviews, mapping a question from 'I need to know X' to 'I have a usable answer', or to abandonment.",
    method: [
      { l: "Basis", v: "Secondary research" },
      { l: "Lens", v: "Jobs-to-be-done" },
      { l: "Traced", v: "A question, end to end" },
      { l: "Captured", v: "Path, time-to-answer, give-up point" },
    ],
    timelineTitle: "The life of a question",
    timelineIntro:
      "Mapping one question's journey, reconstructed from the research, showed where the time and trust leak out, and why people default to interrupting a human even when the answer is written down somewhere.",
    timeline: [
      { time: "Step 1", label: "Question hits", note: "Someone needs to know 'what's our refund policy for enterprise?' mid-task." },
      { time: "Step 2", label: "Wiki search", note: "Searches the wiki and gets 40 results. The top ones are from a policy that changed last quarter.", pain: true },
      { time: "Step 3", label: "Doc spelunking", note: "Opens five docs, skims for the relevant clause, isn't sure which doc is canonical.", pain: true },
      { time: "Step 4", label: "Slack the channel", note: "Gives up on docs, asks in #ops. Waits. Gets two conflicting answers." },
      { time: "Step 5", label: "Ping the expert", note: "DMs the one person who definitely knows. Interrupts their deep work.", pain: true },
      { time: "Step 6", label: "Answer (maybe)", note: "Gets an answer 40 minutes later. It's unverifiable, uncaptured, and the next person will repeat the whole thing.", pain: true },
    ],
    affinityTitle: "What the research clustered into",
    affinityIntro:
      "The recurring problems from the research grouped into four themes. Each one is a reason the current model fails the asker, the expert, or the truth.",
    affinityThemes: [
      { t: "Search ≠ answer", d: "People don't want a ranked list of documents to read. They want the answer to their actual question, with the source attached so they can trust it." },
      { t: "Staleness kills trust", d: "One wrong, out-of-date answer poisons the whole base. After it, people stop looking and go straight back to interrupting humans." },
      { t: "Experts are the index", d: "The real search engine is the colleague who knows. Knowledge lives in heads, not systems, so it walks out the door and doesn't scale." },
      { t: "Answers vanish", d: "Every answer is given once, in a DM or a thread, then lost. The same question gets re-answered indefinitely because nothing is captured." },
    ],
    insightsTitle: "Three insights that drove the design",
    insights: [
      { t: "The deliverable is a cited answer, not a result list", d: "The unit of value is a synthesised answer to the question asked, with its sources attached. A list of documents puts the work back on the asker, and an uncited answer is unusable in an enterprise.", link: "→ Answer + provenance, always (Principle 1)" },
      { t: "Trust is a freshness problem", d: "An answer is only as trustworthy as its sources are current. The system has to show its sources, show their dates, and flag when it's unsure. Otherwise it inherits the wiki's credibility problem.", link: "→ Show sources & freshness (Principle 2)" },
      { t: "Every answer should make the next one easier", d: "Answering a question should improve the system, not just resolve one ticket. Capture turns a one-off interrupt into reusable institutional memory.", link: "→ Capture compounds (Principle 3)" },
    ],
    keyInsight:
      "People don't want better search. They want an answer they can trust and cite, and they want answering it once to mean nobody has to answer it again.",
  },

  // --- 03 RESEARCH 2: the broken knowledge stack ---
  research2: {
    headline: "Where company knowledge actually lives.",
    ecoTitle: "The knowledge sprawl",
    ecoIntro:
      "I mapped every place an answer might be hiding in a typical company. The problem is the scatter: the same truth is spread across systems that don't talk, half of it undocumented, and the only thing connecting them is a human who happens to remember.",
    ecosystem: [
      { name: "Wiki / Confluence", role: "Official docs (often stale)" },
      { name: "Google Drive", role: "The real documents, unsearchable" },
      { name: "Slack threads", role: "Where answers actually happen" },
      { name: "Tickets / Jira", role: "Solved problems, closed and buried" },
      { name: "Email", role: "Decisions, lost to inboxes" },
      { name: "Notion / docs", role: "Team knowledge, siloed" },
      { name: "People's heads", role: "The largest knowledge store" },
      { name: "Onboarding decks", role: "Out of date by month two" },
    ],
    ecoGap:
      "No system holds the answer. It's smeared across a dozen tools and a hundred heads, and the index is whoever's been here longest.",
    heuristicTitle: "Heuristic evaluation: the two incumbents",
    heuristicIntro:
      "I evaluated the two tools companies reach for, enterprise wiki search (Confluence-style) and a generic AI search bolt-on, against six heuristics to locate the systemic gaps a real knowledge engine would have to close.",
    heuristics: [
      { t: "Answers, not documents", d: "Returns a list of pages to read. The synthesis is left to the user.", s: "3/10" },
      { t: "Source transparency", d: "AI bolt-ons answer confidently with no citations, so there's no way to verify or trust them.", s: "2/10" },
      { t: "Freshness signalling", d: "No indication whether a doc is current. Stale and live content look identical.", s: "3/10" },
      { t: "Coverage of real sources", d: "Indexes the wiki but misses Slack, tickets, and drive, where answers actually live.", s: "4/10" },
      { t: "Capture loop", d: "No mechanism to turn a newly-answered question into reusable knowledge.", s: "2/10" },
      { t: "Trust over time", d: "One wrong answer erodes confidence with no way to correct or flag it.", s: "3/10" },
    ],
    teardownTitle: "Competitive teardown",
    teardownIntro:
      "Six tools across the category, scored on eight capabilities. The pattern is clear: search tools return documents without synthesis, and AI bolt-ons synthesise without provenance. Nothing combines a cited, synthesised answer with freshness signalling and a capture loop.",
    competitiveTable: {
      headers: ["Capability", "Almanac", "Confluence", "Glean", "Guru", "Notion AI", "ChatGPT Ent"],
      rows: [
        ["Synthesised answer", "Yes", "No", "Yes", "Partial", "Yes", "Yes"],
        ["Inline citations", "Yes", "No", "Partial", "Partial", "No", "Partial"],
        ["Freshness signalling", "Yes", "No", "No", "Partial", "No", "No"],
        ["Indexes all sources", "Yes", "No", "Yes", "Partial", "Partial", "Partial"],
        ["Confidence on answers", "Yes", "No", "No", "No", "No", "No"],
        ["Capture / reuse loop", "Yes", "Partial", "No", "Yes", "No", "No"],
        ["Gap visibility (admin)", "Yes", "No", "Partial", "Partial", "No", "No"],
        ["Built for the asker", "Yes", "Partial", "Partial", "Partial", "Partial", "Partial"],
      ],
    },
    gapTitle: "The gap statement",
    gap:
      "No existing tool gives a cited, synthesised answer with freshness signalling and a capture loop. Search returns documents, and AI bolt-ons hallucinate confidently. The opportunity is the trustworthy middle: an answer you can verify, that gets better over time.",
  },

  // --- 04 HYPOTHESIS ---
  hypothesis: {
    headline: "The hypothesis.",
    positioningTitle: "Positioning",
    positioning:
      "Almanac is an enterprise AI knowledge engine. You ask a question in plain language; it returns one synthesised answer assembled from your company's own sources, every claim cited and dated, with a confidence signal and a one-click way to capture the answer for the next person. It is not a wiki, not a search engine, and not an ungrounded chatbot.",
    isItList: [
      "An answer engine: synthesised responses, not document lists",
      "Grounded entirely in the company's own sources, always cited",
      "A capture loop that turns answers into institutional memory",
    ],
    isNotList: [
      "Not another wiki to keep up to date by hand",
      "Not keyword search returning forty blue links",
      "Not an ungrounded chatbot that answers from thin air",
    ],
    modelTitle: "The question-centric mental model",
    modelIntro:
      "The core IA bet: structure the product around the question and its answer, not around documents and folders. People arrive with a question, and the system's job is to resolve it from grounded sources and leave behind a reusable, cited answer. Documents become evidence in service of an answer, not the thing you navigate.",
    modelNodes: [
      { t: "Question", d: "Asked in plain language. The unit everything serves." },
      { t: "Sources", d: "Docs, threads, and tickets, retrieved and ranked as evidence." },
      { t: "Answer", d: "Synthesised, cited, dated, with a confidence signal." },
      { t: "Provenance", d: "Every claim links to the exact source it came from." },
      { t: "Capture", d: "The answer is saved, reusable, and improves the base." },
    ],
    principlesTitle: "Four design principles",
    principlesIntro:
      "Each principle is a tension resolved in a direction, and each traces directly back to a research insight.",
    principles: [
      { t: "Answer with the source attached", d: "Never an answer without provenance. Every claim links to the exact doc, thread, or ticket it came from, so verification is one click, not an act of faith.", from: "From insight: the deliverable is a cited answer." },
      { t: "Surface freshness, surface doubt", d: "Show each source's date and flag when the system is unsure or the sources conflict. An honest 'I'm not certain' beats a confident wrong answer every time.", from: "From insight: trust is a freshness problem." },
      { t: "Every answer compounds", d: "Answering a question improves the system. Capture, confirm, and reuse turn a one-off interrupt into durable institutional memory.", from: "From insight: every answer should make the next easier." },
      { t: "Ask like a person, not a query", d: "Plain-language questions, not boolean search syntax. The interface meets people where they are: mid-task, in a hurry, thinking in questions.", from: "From insight: search ≠ answer." },
    ],
  },

  // --- 05 IA ---
  ia: {
    headline: "How it thinks: architecture & flows.",
    taskTitle: "The knowledge lifecycle, as tasks",
    taskIntro:
      "Before any IA, I broke the knowledge lifecycle into discrete tasks with their dependencies, so the structure would serve the flow of a question, not the storage of documents.",
    lifecycle: [
      { t: "Ask", d: "Plain-language question → intent understood." },
      { t: "Retrieve", d: "Relevant sources pulled from every connected system." },
      { t: "Synthesise", d: "AI composes one answer from the retrieved evidence." },
      { t: "Cite", d: "Each claim linked to its exact source, with dates." },
      { t: "Verify", d: "Asker checks provenance, expands sources as needed." },
      { t: "Capture", d: "Answer saved and confirmed for reuse." },
      { t: "Maintain", d: "Admin sees gaps and stale sources, keeps the base honest." },
    ],
    cardSortTitle: "Deriving the structure",
    cardSortIntro:
      "With no users to card-sort for a self-initiated concept, and I won't claim a method I didn't run, I derived the information architecture from the problem itself: people arrive thinking in questions, not in documents or departments. So the structure organises around what someone is trying to find out, which settled the top-level surfaces: Ask, Sources, Saved Answers, and an admin Insights view.",
    cardSort: [
      { l: "Approach", v: "First-principles from the question" },
      { l: "Basis", v: "Public research + teardown" },
      { l: "Organising unit", v: "The question and its answer" },
      { l: "To validate", v: "Card sort with real employees (planned)" },
    ],
    iaDecisionsTitle: "Three IA decisions",
    iaDecisions: [
      { t: "Ask is the home", chose: "Made the ask-and-answer surface the default landing view. The product opens on a question box, not a folder tree.", alt: "Considered a browsable knowledge-base home (rejected: it reproduces the wiki people already route around)." },
      { t: "Provenance as a panel, not a footnote", chose: "Sources live in a dedicated, always-present panel beside the answer. Provenance is a standalone surface, not a hover-state afterthought.", alt: "Considered superscript footnotes (rejected: too easy to ignore, and verification needs to be visible, not buried)." },
      { t: "Capture in the answer, not a separate tool", chose: "Saving and confirming an answer happens inline, right where the answer appears. The capture loop has zero friction.", alt: "Considered a separate 'contribute to wiki' flow (rejected: friction is why knowledge never gets captured today)." },
    ],
  },

  // --- 06 DESIGN ---
  design: {
    headline: "Building it.",
    wireframesIntro:
      "Low-fidelity, grayscale wireframes first, to lock structure and the trust patterns before any color or brand. The questions at this stage: how do an answer and its sources sit together on screen, how does a citation read at a glance, and how do freshness and confidence show without shouting?",
    wireframes: [
      { src: S("wf-01-ask.png"), tag: "Lo-fi · 01", title: "Ask & answer", desc: "The signature view in grayscale: question box up top, synthesised answer in the centre, sources panel on the right. Locked the answer-beside-provenance relationship before any styling." },
      { src: S("wf-02-provenance.png"), tag: "Lo-fi · 02", title: "Answer with citations", desc: "The trust moment, structurally: every claim carries an inline citation marker that ties to a dated source card. Provenance rendered as a dedicated panel beside the answer, not a footnote." },
      { src: S("wf-03-sources.png"), tag: "Lo-fi · 03", title: "Source detail", desc: "Expanding a citation reveals the exact passage, its document, and its date, plus a freshness flag when the source is old. Verification in one click." },
      { src: S("wf-04-admin.png"), tag: "Lo-fi · 04", title: "Admin insights", desc: "What's being asked that the base can't answer, and which sources are going stale. Turns the knowledge admin from a janitor into a gap-fixer." },
    ],
    flowsTitle: "Three core task flows",
    flowsIntro:
      "Three flows carry the product, each with its AI touchpoints and trust gates marked. The gates are the point. The system synthesises freely, but always exposes its sources and its uncertainty before the user acts.",
    flows: [
      { t: "Ask → Cited answer", d: "Question asked → sources retrieved across systems → AI synthesises → answer rendered with inline citations + confidence → user verifies provenance. AI touchpoints: retrieval, synthesis. Trust gate: every claim cited and dated." },
      { t: "Answer → Verify source", d: "Read answer → click a citation → exact source passage + date shown → freshness flag if stale → user trusts or digs deeper. AI touchpoint: retrieval ranking. Trust gate: source and date always visible." },
      { t: "Answer → Capture", d: "Good answer → confirm/save inline → answer becomes reusable institutional memory → next asker gets it instantly. AI touchpoint: dedup + linking. Human gate: a person confirms before it's canonised." },
    ],
    finalIntro:
      "The wireframes locked the trust architecture; these screens give it a face. What you're looking at is a live, clickable prototype of the ask-and-answer surface: a teal gradient marking every synthesised claim, numbered citation chips linking each sentence back to its source, and freshness dates that make staleness visible instead of silent. Open it, ask a question, click a citation, and see the provenance trail for yourself.",
    finalScreens: [
      { src: S("hi-01-ask-answer.png"), tag: "Hi-fi · 01", title: "Ask & answer", desc: "The hero. A plain-language question returns one synthesised answer with inline citation chips, a confidence signal, and a live sources panel, the answer surface meant to stand in for pinging a colleague." },
      { src: S("hi-02-provenance.png"), tag: "Hi-fi · 02", title: "Provenance open", desc: "Click any citation and the exact source passage expands: document, author, and date, with a freshness flag when the source is ageing. Trust made tangible." },
      { src: S("hi-03-admin.png"), tag: "Hi-fi · 03", title: "Admin insights", desc: "The knowledge admin's view: top unanswered questions, coverage gaps, and stale-source alerts, so the base gets fixed before trust erodes." },
    ],
  },

  // --- 07 THE AI LAYER ---
  aiLayer: {
    headline: "Why anyone would trust an AI answer.",
    intro:
      "Every enterprise has tried an AI search bolt-on. Most get abandoned within weeks, not because the answers are wrong, but because there's no way to tell whether they're right. Almanac treats that verification gap as the core design problem, not an afterthought. A small set of interaction rules governs every synthesised surface, and they all serve one outcome: the reader can verify the answer against its sources without leaving the screen.",
    patterns: [
      { id: "P1", t: "Nothing unsourced", d: "Every sentence in a synthesised answer traces to a specific passage in a specific document. If the retrieval can't ground a claim, the claim doesn't appear. The rule is absolute.", featured: true },
      { id: "P2", t: "Dates visible at the point of trust", d: "Each citation carries its source's last-updated date right next to the claim. An 18-month-old policy and a yesterday-refreshed handbook look different, and they should.", featured: true },
      { id: "P3", t: "Answer first, evidence beneath", d: "The synthesised response is the fast path; the full source passages are one click below it. Glanceable for the person in a hurry, expandable for the person who needs to be sure." },
      { id: "P4", t: "Experts can correct", d: "A domain expert who spots a wrong answer can flag or fix it. That feedback sharpens retrieval and marks bad sources, closing the loop between the people who know and the system that serves." },
      { id: "P5", t: "Honest about gaps", d: "When the sources don't contain an answer, the system says 'I can't answer this from what's indexed' and surfaces the gap to the admin. Silence is better than invention." },
    ],
    decisionsTitle: "Three decisions that shape trust",
    decisions: [
      { t: "Teal means 'the AI wrote this'", d: "A teal gradient and the ✦ marker appear only on synthesised content. Raw source documents never carry either. The separation is instant and unambiguous, so no one has to wonder whether they're reading the machine or the original." },
      { t: "Citations woven into reading", d: "Numbered chips sit inside the answer text, at the point of each claim, not footnotes at the bottom of the page. Verification becomes part of the reading act, not a separate task." },
      { t: "Staleness as a visual signal", d: "A source dated six months ago looks visibly different from one refreshed yesterday. The freshness flag sits next to the citation, where the trust decision actually happens." },
    ],
  },

  // --- 08 DESIGN SYSTEM ---
  designSystem: {
    headline: "A system built for reading, not browsing.",
    intro:
      "Most enterprise tools are built for workflows: forms, tables, dashboards. Almanac is built for reading. Someone arrives mid-task, reads a paragraph, checks a source, and leaves. The palette is muted, the typography is generous, and the whitespace is aggressive, so a synthesised answer reads like a reference document you'd trust, not a chat bubble you'd screenshot and doubt. Teal is the only color that carries weight, and it marks every AI-synthesised surface.",
    colors: [
      { name: "Surface / bg", hex: "#F6F8F8" },
      { name: "Ink / 900", hex: "#15201F" },
      { name: "Teal / 600", hex: "#0E9CA6" },
      { name: "AI / start", hex: "#0E9CA6" },
      { name: "AI / mid", hex: "#2BB6B0" },
      { name: "AI / end", hex: "#6FD7C6" },
      { name: "Faint / border", hex: "#7E8C8B" },
      { name: "Citation", hex: "#0B7E86" },
    ],
    aiGradient: "linear-gradient(120deg,#0E9CA6,#2BB6B0 55%,#6FD7C6)",
    typography: [
      { t: "Display / H1 · Plus Jakarta Sans", v: "32/40 · 800" },
      { t: "Heading / H2", v: "24/32 · 700" },
      { t: "Subheading / H3", v: "18/26 · 700" },
      { t: "Answer body · Inter", v: "16/26 · 400" },
      { t: "UI / Label · Inter", v: "13/18 · 600" },
      { t: "Citation / Mono · Roboto Mono", v: "12/18 · 500" },
    ],
    spacing: [
      { t: "sp-1", v: "4px" }, { t: "sp-2", v: "8px" }, { t: "sp-3", v: "12px" }, { t: "sp-4", v: "16px" },
      { t: "sp-5", v: "24px" }, { t: "sp-6", v: "32px" }, { t: "sp-7", v: "48px" }, { t: "sp-8", v: "64px" },
    ],
    tokens: [
      ["color.surface.bg", "#F6F8F8"],
      ["color.ink.900", "#15201F"],
      ["color.brand.teal", "#0E9CA6"],
      ["gradient.ai", "120deg,#0E9CA6,#2BB6B0,#6FD7C6"],
      ["radius.md", "12px"],
      ["radius.lg", "20px"],
      ["shadow.card", "0 1px 3px rgba(15,40,40,.08)"],
      ["icon.ai", "✦ sparkle"],
    ],
    componentCategories: [
      "Buttons", "Inputs", "Question bar", "Answer card", "Citation chip",
      "Source card", "Freshness flag", "Confidence signal", "Chips", "Tabs",
      "Avatars", "Saved-answer card", "Gap card", "Stale-source alert",
      "Breadcrumbs", "Modal", "Drawer", "Toast", "Empty state", "AI-thinking state",
    ],
    systemOutcomes:
      "The visual hierarchy serves one job: make the answer easy to read and the sources easy to verify. Teal and the ✦ appear only where the AI has synthesised. Raw source documents never carry either. A reader glancing at the screen can separate the machine's words from the company's own, without reading a label. That separation is the foundation of every trust pattern in the product.",
    crossProduct:
      "Almanac sits between Slate (action-oriented, dense tables) and Crux (analytical, data-heavy) in the same family of three. Where those two lean on scanning and comparing, this one leans on reading and verifying. It takes the shared spacing and motion tokens but pushes the type scale larger, the palette cooler, and the information density lower, so it shares the structure while reading calmer and more spacious.",
  },

  // --- 09 WHERE IT STANDS (honest about what's proven vs. what's next) ---
  whereItStands: {
    headline: "Built this far.",
    intro:
      "A concept case study can be rigorous without pretending it shipped. Here's what exists, what it's designed to prove, and what would come next if this moved from portfolio to product.",
    doneTitle: "The artifact",
    done: [
      "A defined problem reconstructed from secondary research: tracing the life of a question through an org, mapping where answers actually live, and identifying the colleague-interrupt as the true competitor.",
      "A competitive teardown across six tools, exposing the gap between search (returns documents) and AI bolt-ons (answer confidently without citations).",
      "A question-centric IA derived from the problem, structured around what people are trying to find out, not where documents are stored.",
      "Three core task flows (ask → answer, answer → verify source, answer → capture) with trust gates at each AI boundary.",
      "A clickable prototype of the full loop: ask, cited answer, provenance drill-down, and save. It proves the trust architecture holds together in use.",
    ],
    targetsTitle: "Bets the design is making",
    targetsNote: "Hypotheses to test, not results to claim.",
    targets: [
      { t: "A cited answer beats a colleague DM", d: "If provenance is visible and sources are dated, will a mid-level employee stop interrupting the expert and trust the system instead? That's the make-or-break question, and it needs real users against a real corpus to answer." },
      { t: "Freshness flags change behavior", d: "Does seeing '8 months old' next to a source actually make someone distrust the answer appropriately, or do they ignore the date? A controlled study with mixed-freshness sources would surface this." },
      { t: "Capture compounds over time", d: "The loop where saving an answer improves the base for the next asker is the long bet. Whether it compounds or gets abandoned is a longitudinal question: weeks of use, not a walkthrough." },
    ],
  },

  // --- 10 FUTURE VISION (what happens next if this becomes real) ---
  futureVision: {
    headline: "If this were real.",
    intro:
      "Moving Almanac from portfolio piece to real product means answering questions the prototype can't. Does the trust architecture survive a messy, stale, contradictory corpus? Do real people stop pinging the expert? Here's the path.",
    phasesTitle: "The next chapters",
    phases: [
      {
        phase: "Chapter 1",
        title: "Test the trust model",
        items: [
          "Usability testing of the prototype against domain experts and knowledge seekers. Do inline citations actually earn enough trust, or do people still reach for the Slack DM?",
          "Concept-test the hard edges: what happens when two sources contradict, when a source is 18 months stale, when the system says 'I can't answer this'? Those are the moments that build or break confidence.",
        ],
      },
      {
        phase: "Chapter 2",
        title: "Prove retrieval, not just UI",
        items: [
          "Wire the prototype to a real, messy corpus of outdated policies, contradictory docs, and buried Slack threads, then measure citation accuracy. A beautiful provenance panel over wrong retrieval is still wrong.",
          "Bring a knowledge admin into the loop early and test the maintenance side: does gap detection catch real gaps? Do stale-source alerts trigger re-indexing before trust erodes?",
        ],
      },
      {
        phase: "Chapter 3",
        title: "Pilot with a small team",
        items: [
          "Deploy to a single team for real daily use over weeks. That's the only way to learn whether the capture loop compounds or gets abandoned, and whether the colleague-interrupt actually falls off.",
          "Measure the design bets from 'Built this far' against observed behavior, not walkthroughs.",
        ],
      },
      {
        phase: "Chapter 4",
        title: "Scale what works",
        items: [
          "Multi-team rollout, connectors for real source systems (Drive, Confluence, Slack), and the retrieval edge-cases that only surface at scale: conflicting policies across regions, access-controlled documents, multilingual corpora.",
        ],
      },
    ],
    closingTitle: "Where this leaves off",
    closing:
      "Almanac is a researched, designed, prototyped answer to a problem every company has and nobody has solved cleanly. The next step is the hardest: a real corpus, real questions, and real experts deciding whether a machine's answer, with its sources attached, is good enough to stop the interrupt. That test is what I'd run first.",
  },

  // Link to the live prototype (hosted at /knowledgeos/)
  prototypeUrl: "/knowledgeos/",
};
