// RecruitOS case study data — self-initiated AI-native concept.
// Process type: Research-led / Workflow-centred. 10 sections + Future Vision.
// Visual styling is portfolio-driven (vermilion/cream chrome); the *product*
// keeps its own identity inside the embedded prototype + design-system section.
//
// Screen images live under /recruitos-shots/ and are produced by
// scripts/shoot-recruitos.mjs (Playwright captures of the live prototype).
const S = (n) => `/recruitos-shots/${n}`;

export const recruitos = {
  slug: "recruitos",
  title: "RecruitOS",
  kind: "AI-native concept · self-initiated",
  subtitle:
    "An AI recruitment OS for staffing agencies — the system sources, ranks, and drafts the outreach; the recruiter stays the decision-maker. Designed end-to-end from desk research to a working, clickable prototype, with AI trust — confidence and clickable provenance — as the centrepiece.",

  hero: {
    // Concept work → research-backed figures, framed honestly as such in copy.
    stats: [
      { value: "5–12", label: "Tools per desk" },
      { value: "40%+", label: "Time lost to admin" },
      { value: "~17 hrs", label: "Reclaimable / week" },
    ],
  },

  // --- 00 OVERVIEW ---
  overview: {
    headline: "An AI recruitment OS for staffing agencies — built around how recruiters actually work.",
    tldrTitle: "TL;DR — Concept Summary",
    tldr:
      "A recruiter's day is a tab-juggling act: an ATS, LinkedIn, three job boards, a spreadsheet, two inboxes, and somewhere in the middle, a person to actually call. The job stopped being recruiting and became data entry — recruiters now lose 40%+ of their time to non-recruiting work like updating systems and writing status reports (Aqore, 2026). RecruitOS rebuilds the desk around one idea — the project, not the tool — with an AI copilot underneath that sources, ranks, drafts the outreach, and writes the client update. The catch I cared about most: the AI never sends anything. It proposes; the recruiter decides. Every suggestion shows its confidence and links back to where it came from. I built this from desk research, not a brief — a real, documented problem, re-framed and designed end to end, through to a working interactive prototype.",
    badge: "Concept · self-initiated · not client work",
    facts: [
      { label: "Type", value: "AI-native product concept" },
      { label: "Role", value: "Sr. UX Lead (end-to-end)" },
      { label: "Basis", value: "Secondary research + teardown" },
      { label: "Platform", value: "Responsive web · desktop-first" },
      { label: "Status", value: "Concept + working prototype" },
    ],
    process: [
      { step: "01", title: "Research", duration: "Secondary + teardown" },
      { step: "02", title: "Define", duration: "Problem + hypothesis" },
      { step: "03", title: "Architect", duration: "IA + flows" },
      { step: "04", title: "Prototype", duration: "Working build" },
      { step: "05", title: "Validate", duration: "Planned next" },
    ],
    intro:
      "RecruitOS is a self-initiated concept — not a client engagement. I chose agency recruitment because it's one of the last knowledge-work domains still run on a patchwork of single-purpose tools, and because it's a genuine test of AI-trust design: recruiters will not hand decisions to a black box, but they badly need the leverage AI can give them. The interesting design problem isn't 'add AI' — it's 'add AI a sceptical professional under time pressure will actually trust.'",
    intro2:
      "I didn't sit beside a recruiter for this — it's a self-initiated concept, and I'd rather show the reasoning than claim research I didn't run. The problem is reconstructed from the public record: industry time-studies, the complaints in recruiting communities, agency job descriptions, and the gaps reviewers flag in the incumbent tools. The picture that emerges is consistent and quietly expensive — and it's what the whole design answers to.",
    contextTitle: "Why this concept",
    contextBody:
      "Three reasons: it's a domain where AI offers real leverage but trust is the gating factor; its project-centric structure is a genuine information-architecture problem rather than a reskin of an ATS; and it lets the case study show a visibly different process — research-led and workflow-shaped — from a survey-driven or a high-stakes-decision project.",
    metadata: [
      { k: "Domain", v: "Staffing & Recruitment" },
      { k: "Primary user", v: "Agency Recruiter (the desk)" },
      { k: "Secondary", v: "Agency Owner · Client Hiring Manager" },
      { k: "Process type", v: "Research-led / Workflow-centred" },
      { k: "Status", v: "Concept + working prototype" },
    ],
  },

  // --- 01 THE PEOPLE (Personas — research-informed archetypes) ---
  personasSection: {
    headline: "Three people, one broken workflow.",
    intro:
      "These aren't interview subjects — I didn't interview anyone for a self-initiated concept, and I won't pretend I did. They're archetypes built from public material: recruiting forums, agency job descriptions, product reviews of the incumbent tools, and published industry research. They're who the research points to. The recruiter is the primary user; the other two shape what 'good' has to mean.",
    personas: [
      {
        name: "Meera Joshi",
        initials: "MJ",
        role: "Agency Recruiter · primary",
        context: "Runs 8–12 open roles at once across 3–4 client accounts. Lives in her inbox, LinkedIn, and the ATS — usually all at once. Resents all three.",
        goals: [
          "Get a qualified shortlist in front of the client before a competitor does",
          "Stop wasting hours screening candidates who were never a fit",
          "Look on top of every account without working until midnight",
        ],
        frustrations: [
          "Re-enters the same candidate data into three different tools",
          "Loses pipeline context every time she switches accounts",
          "Spends evenings writing client status updates by hand",
        ],
        jtbd: "When I take a new role from a client, I want a qualified shortlist in front of them fast, so I can fill it before a competitor does.",
        tools: "ATS · LinkedIn Recruiter · Gmail · WhatsApp · 2 spreadsheets",
      },
      {
        name: "Daniel Okafor",
        initials: "DO",
        role: "Agency Owner",
        context: "Runs a 14-person agency. Watches margin leak into a stack of tools that don't talk to each other — the research pegs that leakage at 15–25% (Aqore, 2026).",
        goals: [
          "Keep relationships and pipeline knowledge when a recruiter leaves",
          "See where every role actually stands without chasing people",
          "Protect margins by cutting time-to-fill",
        ],
        frustrations: [
          "When a recruiter quits, months of pipeline and client context walk out the door",
          "No single view of the agency's real status — it lives in inboxes",
          "Reporting is a Friday-afternoon scramble of copy-paste",
        ],
        jtbd: "When a recruiter leaves, I want their relationships and knowledge to stay in the business, so I don't lose months of pipeline.",
        tools: "ATS exports · spreadsheets · the team's word",
      },
      {
        name: "Priya Raman",
        initials: "PR",
        role: "Client · Hiring Manager",
        context: "A hiring manager at a client company, briefing 2–3 agencies on the same role and judging them on speed and signal.",
        goals: [
          "Get a small, high-signal shortlist — not a flood of CVs",
          "Understand why each candidate was put forward",
          "Know where the role stands without sending a chasing email",
        ],
        frustrations: [
          "Agencies send volume to look busy, not signal",
          "No rationale attached to candidates — just a CV and a name",
          "Has to ask for a status update every single time",
        ],
        jtbd: "When I brief an agency, I want a small shortlist with clear reasoning, so I can trust the recommendation and move fast.",
        tools: "Email · the agency's PDF shortlist",
      },
    ],
  },

  // --- 02 THE WORKFLOW (Desk research → reconstructed day → insights) ---
  research1: {
    headline: "A day at the desk, reconstructed from the research.",
    methodTitle: "Reconstructing the desk",
    methodIntro:
      "To design the workflow, I mapped how an agency recruiter actually spends a day — not from sitting beside one, but from the public record: industry time-studies, the complaints in recruiting communities, and the feature gaps reviewers call out in the incumbent tools. Three things came up over and over.",
    method: [
      { l: "Basis", v: "Secondary research" },
      { l: "Sources", v: "Time-studies · forums · tool reviews" },
      { l: "Mapped", v: "Tool touches + context switches" },
      { l: "Output", v: "The day the tools created" },
    ],
    timelineTitle: "A day in the life, rebuilt",
    timelineIntro:
      "Reconstructed from the research, one recruiter's day shows where the time actually goes — the work that creates value (talking to people, judging fit) crowded out by the work of keeping systems in sync.",
    timeline: [
      { time: "9:00", label: "Triage", note: "Inbox + WhatsApp + 2 ATS tabs open before the first coffee. Rebuilds yesterday's context from memory." },
      { time: "10:30", label: "Sourcing", note: "LinkedIn → copy candidate → paste into ATS → paste into a tracking sheet. Same data, three homes.", pain: true },
      { time: "12:00", label: "Screening", note: "Reads CVs back-to-back with no way to compare them side by side. Gut-ranks in her head." },
      { time: "14:00", label: "Account switch", note: "Moves to a different client. Loses the thread of where the morning's role stood.", pain: true },
      { time: "15:30", label: "Outreach", note: "Writes near-identical LinkedIn messages one at a time, personalising by hand." },
      { time: "17:00", label: "Client update", note: "Hand-writes a status email per account from memory + the spreadsheet. The day's least-valued, most-dreaded task.", pain: true },
      { time: "18:30", label: "Still here", note: "Admin, not people. The leverage work never happened." },
    ],
    affinityTitle: "What the research clustered into",
    affinityIntro:
      "The recurring problems from the research grouped into four themes — each one a place where the workflow leaks time or trust.",
    affinityThemes: [
      { t: "The tool tax", d: "Agency recruiters run across 5–12 separate tools with no shared context. The same candidate gets typed in four times; nothing syncs." },
      { t: "The admin sinkhole", d: "40%+ of a recruiter's time goes to non-recruiting tasks — data entry, scheduling, status reports. Time-to-hire has crept to 44 days." },
      { t: "Volume over signal", d: "Pressure to look busy pushes recruiters toward sending CV volume instead of a reasoned shortlist — which clients quietly resent." },
      { t: "The memory leak", d: "Relationships, client quirks, and pipeline context are individual, not institutional. When a recruiter leaves, the business loses it." },
    ],
    insightsTitle: "Three insights that drove the design",
    insights: [
      { t: "The job isn't sourcing — it's judgement", d: "Recruiters add value by judging fit and managing relationships. Sourcing and admin are necessary friction. AI should absorb the friction and amplify the judgement — never replace it.", link: "→ AI proposes, recruiter disposes (Principle 1)" },
      { t: "The unit of work is the engagement, not the candidate", d: "Recruiters think in roles and accounts, but tools are built around candidate records or job postings. The mental model and the IA are misaligned.", link: "→ Project-centric architecture (Principle 2)" },
      { t: "Trust is earned by showing your work", d: "A sceptical professional won't accept an AI score on faith. Every AI output needs a confidence level and a traceable reason, or it gets ignored.", link: "→ Confidence + provenance on every AI output (Principle 3)" },
    ],
    keyInsight:
      "Recruiters don't need software that does the recruiting. They need software that does the admin, surfaces the signal, and gets out of the way of the judgement — visibly enough that they trust it.",
  },

  // --- 03 THE BROKEN STACK (Ecosystem + heuristics + teardown) ---
  research2: {
    headline: "Why the tools recruiters already pay for don't fix this.",
    ecoTitle: "The tool sprawl",
    ecoIntro:
      "I mapped every tool a recruiter touches in a typical week. The picture is the problem: a recruiter is the only integration layer connecting an ATS, a CRM, job boards, LinkedIn, email, a comms app, spreadsheets, and a reporting deck — manually, all day.",
    ecosystem: [
      { name: "ATS", role: "System of record (that nobody trusts)" },
      { name: "CRM", role: "Client relationships, kept separately" },
      { name: "LinkedIn Recruiter", role: "Sourcing + outreach" },
      { name: "Email", role: "The actual source of truth" },
      { name: "WhatsApp / Slack", role: "Candidate + team comms" },
      { name: "Job boards", role: "Inbound applicants" },
      { name: "Spreadsheets", role: "The real pipeline tracker" },
      { name: "Docs / Decks", role: "Client status reports, by hand" },
    ],
    ecoGap:
      "No tool owns the workflow. The recruiter is the glue — which is exactly the job a system should be doing.",
    heuristicTitle: "Heuristic evaluation — the two incumbents",
    heuristicIntro:
      "I ran a heuristic evaluation on the two tools that dominate agency desks — Bullhorn and Recruit CRM — scoring each on six usability heuristics to locate the systemic gaps a new product would have to close.",
    heuristics: [
      { t: "Match to the real workflow", d: "Built around candidate/job records, not the recruiter's account-centric mental model.", s: "4/10" },
      { t: "Visibility of status", d: "Pipeline status is buried or stale; recruiters keep the truth elsewhere.", s: "3/10" },
      { t: "Minimise manual entry", d: "Same data re-keyed across modules; little intelligent pre-fill.", s: "3/10" },
      { t: "Recognition over recall", d: "Critical context (why this candidate, what the client wants) isn't surfaced where decisions happen.", s: "4/10" },
      { t: "Flexibility & speed", d: "Powerful but heavy; common actions take too many clicks for a time-pressured desk.", s: "5/10" },
      { t: "Trust & transparency (AI)", d: "Where AI exists, it scores without explanation — so recruiters ignore it.", s: "2/10" },
    ],
    teardownTitle: "Competitive teardown",
    teardownIntro:
      "Six tools across the category, scored on eight capabilities. The pattern: incumbents are records systems with AI bolted on; newer point tools do one thing well but don't own the workflow. Nothing combines a project-centric model with trustworthy, end-to-end AI — and it's a real opening, with ~20,000 independent staffing agencies in the US alone, most under 20 recruiters.",
    competitiveTable: {
      headers: ["Capability", "RecruitOS", "Bullhorn", "Recruit CRM", "LinkedIn Rcl", "Greenhouse", "Loxo"],
      rows: [
        ["Project-centric model", "Yes", "No", "Partial", "No", "No", "Partial"],
        ["AI candidate analysis", "Yes", "Partial", "Partial", "Partial", "No", "Yes"],
        ["Confidence + provenance", "Yes", "No", "No", "No", "No", "No"],
        ["AI outreach (human-gated)", "Yes", "Partial", "Partial", "Yes", "No", "Yes"],
        ["One-click client report", "Yes", "No", "Partial", "No", "Partial", "No"],
        ["NL search across desk", "Yes", "No", "No", "Partial", "No", "Partial"],
        ["Organisational memory", "Yes", "Partial", "Partial", "No", "No", "Partial"],
        ["Built for the recruiter", "Yes", "No", "Partial", "Partial", "No", "Partial"],
      ],
    },
    gapTitle: "The gap statement",
    gap:
      "No existing tool combines a project-centric workflow model with end-to-end AI that recruiters actually trust. Incumbents are systems of record with AI bolted on; point tools own a feature, not the workflow. The space between them is the opportunity.",
  },

  // --- 04 THE HYPOTHESIS (Positioning + mental model + principles) ---
  hypothesis: {
    headline: "The hypothesis.",
    positioningTitle: "Positioning",
    positioning:
      "RecruitOS is an AI recruitment OS for staffing agencies — not HR departments. It organises everything around the engagement, gives recruiters an AI copilot that sources, ranks, drafts, and reports — and keeps the recruiter the decision-maker on everything that matters. It is not an HRIS, not a job board, and not an ATS with a chatbot stapled on.",
    isItList: [
      "A project-centric workspace — every engagement is a project",
      "An AI copilot that does the admin and surfaces the signal",
      "A system that earns trust by showing confidence + provenance",
    ],
    isNotList: [
      "Not an HRIS / payroll / compliance suite",
      "Not a job board competing with Indeed",
      "Not an ATS with an AI chatbot bolted on",
    ],
    modelTitle: "The project-centric mental model",
    modelIntro:
      "The core IA bet: structure the product by engagement, not by candidate record or job posting. Recruiters already think in 'the Acme back-end role' — a project that holds its candidates, outreach, interviews, notes, and the client relationship in one place. Matching the architecture to the mental model is the innovation; everything else follows from it.",
    modelNodes: [
      { t: "Project", d: "The engagement. The unit everything hangs off." },
      { t: "Candidates", d: "Sourced, analysed, ranked — inside the project." },
      { t: "Outreach", d: "AI-drafted, human-sent, tracked per candidate." },
      { t: "Interviews", d: "Stages and feedback, in pipeline context." },
      { t: "Client", d: "The relationship + one-click status, attached to the project." },
    ],
    principlesTitle: "Four design principles",
    principlesIntro:
      "Each principle is a tension resolved in a direction — and each one earns its place from the research.",
    principles: [
      { t: "AI proposes, recruiter disposes", d: "Every consequential action — sending outreach, advancing a candidate, sharing a shortlist — is gated behind a human. The AI does the work up to the moment of consequence, then hands the decision back.", from: "Trust is the #1 barrier to AI adoption in hiring." },
      { t: "Project-centric over record-centric", d: "Organise by engagement, not by candidate or job. The architecture matches how recruiters already think, so nothing has to be relearned.", from: "The unit of work is the engagement, not the candidate." },
      { t: "Show your work, always", d: "No AI output without a confidence level and clickable provenance. Trust is a feature you build, not a tone you adopt.", from: "A sceptical professional won't act on a score they can't check." },
      { t: "Absorb the admin, amplify the signal", d: "Automate re-entry, summarisation, and reporting; spend the saved attention surfacing what matters. Fast and human, not heavy and clever.", from: "40%+ of the desk's time is lost to non-recruiting work." },
    ],
  },

  // --- 05 HOW IT THINKS (Task analysis + IA, derived from first principles) ---
  ia: {
    headline: "How it thinks: architecture & flows.",
    taskTitle: "The recruitment lifecycle, as tasks",
    taskIntro:
      "Before any IA, I broke the recruitment lifecycle into discrete tasks with their dependencies — so the structure would be organised around the actual sequence of work, not around database tables.",
    lifecycle: [
      { t: "Take the brief", d: "Client opens a role → becomes a project." },
      { t: "Source", d: "Add candidates via resume / profile → structured records." },
      { t: "Analyse & rank", d: "AI summarises, scores fit, flags risks — with provenance." },
      { t: "Shortlist", d: "Recruiter curates; compares candidates side by side." },
      { t: "Outreach", d: "AI drafts; recruiter edits and sends." },
      { t: "Interview", d: "Track stages and feedback in pipeline." },
      { t: "Report", d: "One-click client status, generated from project state." },
    ],
    cardSortTitle: "Deriving the structure",
    cardSortIntro:
      "With no users to card-sort for a self-initiated concept — and I won't claim a method I didn't run — I derived the information architecture from the problem itself and the project-centric bet. The model is deliberately flat and recruiter-shaped, organised around the engagement rather than the candidate record.",
    cardSort: [
      { l: "Approach", v: "First-principles from the workflow" },
      { l: "Basis", v: "Public research + teardown" },
      { l: "Organising unit", v: "The project / engagement" },
      { l: "To validate", v: "Card sort with real recruiters (planned)" },
    ],
    iaDecisionsTitle: "Three IA decisions",
    iaDecisions: [
      { t: "Project as the home base", chose: "Made the project workspace the default landing context, with a global overview above it.", alt: "Considered a candidate-database home (rejected — it's the incumbent model recruiters already route around)." },
      { t: "Copilot in the right rail, everywhere", chose: "A persistent AI copilot docked in the right rail so assistance is one glance away in every view.", alt: "Considered a separate AI 'mode' (rejected — it would make AI a destination instead of an ambient assistant)." },
      { t: "One ranked-table component, reused", chose: "The same ranked candidate table powers both the workspace and the candidates view — rank · candidate · project · AI fit · status · notes.", alt: "Considered bespoke layouts per view (rejected — consistency lowers relearning and keeps the AI-fit column legible everywhere)." },
    ],
  },

  // --- 06 BUILDING IT (Wireframes → flows → prototype screens) ---
  design: {
    headline: "Building it.",
    wireframesIntro:
      "Low-fidelity, greyscale wireframes first — to lock structure and the AI-trust patterns before any colour or brand. The questions at this stage: where does the copilot live, how does a confidence score read at a glance, and how does provenance expand without burying the decision?",
    wireframes: [
      { src: S("wf-01-workspace.png"), tag: "Lo-fi · 01", title: "Project workspace", desc: "The signature view in greyscale: ranked candidate table left, AI copilot rail right. Locked the two-column relationship and the at-a-glance fit column before styling." },
      { src: S("wf-02-analysis.png"), tag: "Lo-fi · 02", title: "AI candidate analysis", desc: "The 'wow' moment, structurally: summary, fit score, skills, and red flags — each with a confidence chip and an expandable 'why'. Provenance as a first-class block, not a tooltip afterthought." },
      { src: S("wf-03-outreach.png"), tag: "Lo-fi · 03", title: "AI outreach composer", desc: "AI-drafted message with the human gate explicit — edit + send are the recruiter's, never automatic. Established the propose-then-approve pattern reused across the product." },
      { src: S("wf-04-report.png"), tag: "Lo-fi · 04", title: "Client report generator", desc: "One-click status assembled from project state, with the recruiter reviewing before it's shared. Killed the dreaded Friday copy-paste." },
    ],
    flowsTitle: "Three core task flows",
    flowsIntro:
      "Three flows carry the product, each with its AI touchpoints and human gates marked. The gates are the point: AI moves fast up to the moment of consequence, then hands the decision back.",
    flows: [
      { t: "Brief → Shortlist", d: "Client opens a role → project created → candidates added → AI analyses & ranks (confidence + provenance) → recruiter curates → shortlist locked. AI touchpoints: analysis, ranking. Human gate: who makes the shortlist." },
      { t: "Candidate → Outreach", d: "Open candidate → AI drafts personalised outreach → recruiter edits → recruiter sends → reply tracked. AI touchpoint: draft. Human gate: edit + send." },
      { t: "Project → Client update", d: "Project state → AI generates status report → recruiter reviews → shared with client. AI touchpoint: generation. Human gate: review before share." },
    ],
    finalIntro:
      "From greyscale to a working, clickable product. The screens below are captured from the live RecruitOS prototype — Google / Material-3 design language, a Gemini-style gradient reserved exclusively for AI surfaces, and the ✦ sparkle marking every AI action. This is not a mock-up of screens; it's the real prototype you can open and click through. It demonstrates intent — it doesn't claim results.",
    finalScreens: [
      { src: S("01-overview.png"), tag: "Prototype · 01", title: "Overview", desc: "The agency at a glance — active projects, pipeline health, and what the copilot thinks needs attention today. The global layer above the project workspace." },
      { src: S("02-projects.png"), tag: "Prototype · 02", title: "Projects", desc: "Every engagement as a project — the home base of the whole product. Status, client, and candidate counts in one scannable list." },
      { src: S("03-workspace.png"), tag: "Prototype · 03", title: "Project workspace", desc: "The signature view. Ranked candidate table on the left, AI copilot docked in the right rail — assistance one glance away, never a separate mode." },
      { src: S("04-analysis.png"), tag: "Prototype · 04", title: "AI candidate analysis", desc: "The trust centrepiece. Fit score, skills, and red flags, each carrying a confidence level and clickable provenance — you can see exactly why the AI said what it said." },
      { src: S("05-candidate.png"), tag: "Prototype · 05", title: "Candidate detail", desc: "The full structured profile built from a resume or a pasted profile — AI summary up top, evidence underneath, every claim traceable to a source." },
      { src: S("06-shortlist.png"), tag: "Prototype · 06", title: "Shortlist & compare", desc: "Curate the AI ranking into a shortlist and compare candidates side by side — the side-by-side view recruiters do in their heads, made real." },
      { src: S("07-outreach.png"), tag: "Prototype · 07", title: "AI outreach composer", desc: "AI drafts a personalised message; the recruiter edits and sends. The human gate is explicit — nothing goes out without a person behind it." },
      { src: S("08-share-client.png"), tag: "Prototype · 08", title: "Client report", desc: "A one-click, client-ready status generated from project state — reviewed by the recruiter before it's shared. The Friday scramble, gone." },
      { src: S("09-candidates.png"), tag: "Prototype · 09", title: "Candidates (cross-project)", desc: "The same ranked-table component, reused across the desk — one consistent way to read rank, fit, status, and notes everywhere it appears." },
      { src: S("10-overview-ai.png"), tag: "Prototype · 10", title: "Ask-AI copilot", desc: "Natural-language search and actions across the whole desk — ask in plain English, get an answer grounded in your projects, candidates, and notes." },
    ],
  },

  // --- 07 THE AI LAYER (AI patterns) ---
  aiLayer: {
    headline: "Designing an AI recruiters will actually trust.",
    intro:
      "Recruiters have been burned by 'AI matching' before — black-box scores that surface the wrong people with total confidence. So the AI here earns its keep differently: it shows its work, and it never has the last word. RecruitOS leans on a small set of AI-interaction patterns, applied consistently, so the AI feels like a transparent colleague rather than an oracle. Every pattern below appears in the prototype.",
    patterns: [
      { id: "P1", t: "Confidence + provenance", d: "Every AI output — fit score, summary, red flag — carries a confidence level and a clickable trail to the source it came from. The single most important trust move in the product.", featured: true },
      { id: "P2", t: "Human in the loop", d: "Consequential actions (send outreach, advance a candidate, share a report) are always gated behind a person. The AI proposes; the recruiter approves.", featured: true },
      { id: "P3", t: "Progressive disclosure", d: "AI reasoning starts collapsed and expands on demand — a glanceable answer for the fast path, the full 'why' one click away for when it matters." },
      { id: "P5", t: "Editable AI output", d: "Nothing the AI writes is final. Drafts and summaries are starting points the recruiter shapes — keeping the human voice and judgement in the loop." },
      { id: "P8", t: "Graceful uncertainty", d: "When the AI isn't sure, it says so — low-confidence states, 'not enough signal' messages, and honest gaps instead of confident-sounding guesses." },
    ],
    decisionsTitle: "AI design decisions",
    decisions: [
      { t: "A gradient reserved for AI", d: "A Gemini-style gradient and the ✦ sparkle appear only on AI surfaces — so users always know, at a glance, when they're looking at a machine's output versus their own data." },
      { t: "Confidence as a chip, not a number dump", d: "Confidence is shown as a calm high/medium/low chip with colour, not a false-precision percentage — honest about the fuzziness without overstating it." },
      { t: "Provenance you can click", d: "Every AI claim links back to the resume line, profile, or note it drew from — turning 'trust me' into 'check for yourself'." },
    ],
  },

  // --- 08 DESIGN SYSTEM ---
  designSystem: {
    headline: "Design system.",
    intro:
      "A recruiter's screen is dense — pipelines, cards, candidate detail, an AI panel, all at once. RecruitOS uses a Google / Material-3 foundation, chosen deliberately so the product reads as calm, familiar, and enterprise-trustworthy, letting the AI moments stand out rather than the chrome. A single Gemini-style gradient is reserved exclusively for AI surfaces; everything else is restrained and functional. Plus Jakarta Sans for display, Inter for body, Roboto Mono for data and labels.",
    colors: [
      { name: "Surface / bg", hex: "#F7F9FC" },
      { name: "Ink / 900", hex: "#1F1F1F" },
      { name: "Google Blue", hex: "#1A73E8" },
      { name: "AI / start", hex: "#4285F4" },
      { name: "AI / mid", hex: "#9168F0" },
      { name: "AI / end", hex: "#E8519B" },
      { name: "Faint / border", hex: "#80868B" },
      { name: "Success", hex: "#1E8E3E" },
    ],
    aiGradient: "linear-gradient(120deg,#4285F4,#9168F0 55%,#E8519B)",
    typography: [
      { t: "Display / H1 · Plus Jakarta Sans", v: "32/40 · 800" },
      { t: "Heading / H2", v: "24/32 · 700" },
      { t: "Subheading / H3", v: "18/26 · 700" },
      { t: "Body · Inter", v: "14/22 · 400" },
      { t: "Label · Inter", v: "13/18 · 600" },
      { t: "Data / Mono · Roboto Mono", v: "12/18 · 500" },
    ],
    spacing: [
      { t: "sp-1", v: "4px" }, { t: "sp-2", v: "8px" }, { t: "sp-3", v: "12px" }, { t: "sp-4", v: "16px" },
      { t: "sp-5", v: "24px" }, { t: "sp-6", v: "32px" }, { t: "sp-7", v: "48px" }, { t: "sp-8", v: "64px" },
    ],
    tokens: [
      ["color.surface.bg", "#F7F9FC"],
      ["color.ink.900", "#1F1F1F"],
      ["color.brand.blue", "#1A73E8"],
      ["gradient.ai", "120deg,#4285F4,#9168F0,#E8519B"],
      ["radius.md", "12px"],
      ["radius.lg", "20px"],
      ["shadow.card", "0 1px 3px rgba(20,30,60,.08)"],
      ["icon.ai", "✦ sparkle"],
    ],
    componentCategories: [
      "Buttons", "Inputs", "Selects", "Chips", "Confidence chips", "Status badges",
      "Avatars", "Ranked table", "Candidate card", "AI copilot rail", "AI message",
      "Provenance link", "Tabs", "Breadcrumbs", "Modal", "Drawer", "Toast",
      "Empty state", "Skeleton / loading", "AI-thinking state",
    ],
    systemOutcomes:
      "The system is intentionally restrained so the AI layer carries the visual weight. Reserving one gradient and one icon (✦) exclusively for AI means a user can always tell, instantly, whether they're looking at their own data or the machine's interpretation of it — a trust decision encoded directly into the design tokens.",
    crossProduct:
      "Because RecruitOS is the first of three planned OS-family concepts (KnowledgeOS and DecisionOS follow), the foundation is built as a shared base: the same grid, spacing, motion, and AI-interaction patterns carry across all three, each taking its own accent within the AI-native language.",
  },

  // --- 09 WHERE IT STANDS (honest targets, not fabricated results) ---
  whereItStands: {
    headline: "Where it stands.",
    intro:
      "Honest about what's proven and what isn't. Nothing here is claimed as measured — these are the targets the design is built to hit, and they'll be tested, not asserted.",
    doneTitle: "What's done",
    done: [
      "A researched, defined problem — reconstructed from public time-studies, recruiting communities, and tool reviews.",
      "A competitive teardown anyone can verify — ecosystem map, heuristic evaluation, and a capability scorecard.",
      "An end-to-end design — IA, three core task flows, wireframes, and a full AI-native design system.",
      "A working, clickable prototype of the core loop — the proof the design holds together as an experience.",
    ],
    targetsTitle: "What I'm designing toward",
    targetsNote: "Targets to validate, not outcomes achieved.",
    targets: [
      { t: "Reclaim the admin time", d: "The research says ~17 hrs/week per recruiter is reclaimable with AI (Bullhorn). The target is to win back a meaningful slice of that — to be measured with real recruiters, not assumed." },
      { t: "Trust the AI enough to use it", d: "The success signal isn't a score; it's whether a recruiter acts on an AI suggestion after checking its provenance. That's a usability question, and the first thing I'd test." },
      { t: "Nothing lost when someone leaves", d: "Whether organisational memory actually survives a departure is a longitudinal question — one for a pilot, not a prototype." },
    ],
  },

  // --- 10 FUTURE VISION (concept → product roadmap + planned research) ---
  futureVision: {
    headline: "Future vision.",
    intro:
      "RecruitOS is a concept I'd genuinely take further. Here's the path from where it is now to something real — and this is where the user-centred work I deliberately haven't done yet comes in, front and centre.",
    phasesTitle: "From concept to product",
    phases: [
      {
        phase: "Phase 1",
        title: "Validate with real recruiters",
        items: [
          "Contextual interviews with agency recruiters and owners — watch a real desk for a day, pressure-test the project-centric model against how they actually work.",
          "Usability testing of the prototype — does the human gate feel safe or slow? Do recruiters trust a ranking once they can see its provenance? Where do they hesitate?",
          "Concept testing of the AI-trust patterns — confidence labels, provenance links, the accept/edit/reject gate — because that's the riskiest, most important part of the design.",
        ],
      },
      {
        phase: "Phase 2",
        title: "Pilot with a few agencies",
        items: [
          "A small private beta with 5–10 independent recruiters — the beachhead the research points to.",
          "Diary studies and real-workflow testing over weeks, not minutes — the only way to know whether the admin time actually comes back and the memory holds.",
          "Measure the design targets from 'Where It Stands' against real use.",
        ],
      },
      {
        phase: "Phase 3",
        title: "Build toward an MVP",
        items: [
          "The core loop the research validates: project workspace + AI candidate analysis/ranking + AI outreach + one-click client report.",
          "Accessibility passes (WCAG), performance on real-world data, and the unglamorous edge cases that only show up in production.",
        ],
      },
      {
        phase: "Phase 4",
        title: "Iterate from the field",
        items: [
          "Longitudinal trust studies, A/B testing on the AI patterns, and the steady loop of shipping and learning.",
        ],
      },
    ],
    closingTitle: "The honest summary",
    closing:
      "RecruitOS today is a well-researched, fully-designed, prototyped concept. Making it real means putting it in front of the people it's for — and the plan for doing that, rigorously, is above. That's the next chapter, and I'd be glad to write it.",
  },

  // Link to the live prototype (already hosted at /recruitos/)
  prototypeUrl: "/recruitos/",
};
