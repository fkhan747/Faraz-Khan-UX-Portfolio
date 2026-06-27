// Slate case study data - self-initiated AI-native concept.
// Process type: Research-led / Workflow-centred. 10 sections + Future Vision.
// Visual styling is portfolio-driven (vermilion/cream chrome); the *product*
// keeps its own identity inside the embedded prototype + design-system section.
//
// Screen images live under /recruitos-shots/ and are produced by
// scripts/shoot-recruitos.mjs (Playwright captures of the live prototype).
const S = (n) => `/recruitos-shots/${n}`;

export const recruitos = {
  slug: "recruitos",
  title: "Slate",
  kind: "AI-native concept · self-initiated",
  subtitle:
    "An AI recruiting workspace for staffing agencies. The system sources, ranks, and drafts the outreach, and the recruiter stays the decision-maker. I designed it end-to-end from desk research to a working, clickable prototype, with AI trust at the centre: confidence scores and clickable provenance.",

  hero: {
    // Concept work -> research-backed figures, framed honestly as such in copy.
    facts: [
      { label: "Role", value: "Sr. UX Lead (end-to-end)" },
      { label: "Domain", value: "Staffing & recruitment" },
      { label: "Platform", value: "Responsive web (concept)" },
    ],
    stats: [
      { value: "5-12", label: "Tools per desk" },
      { value: "40%+", label: "Time lost to admin" },
      { value: "~17 hrs", label: "Reclaimable / week" },
    ],
  },

  // --- 00 OVERVIEW ---
  overview: {
    headline: "I built the desk around the engagement, not the tool, because that's how recruiters actually think.",
    tldrTitle: "TL;DR / Concept Summary",
    tldr:
      "A recruiter's day is a tab-juggling act across an ATS, LinkedIn, job boards, and spreadsheets, until the job becomes data entry. Recruiters lose 40%+ of their time to non-recruiting work (Aqore, 2026). Slate rebuilds the desk around the project, not the tool, with an AI copilot that sources, ranks, and drafts, but never sends. The recruiter decides, and every suggestion shows its confidence and links to its source. Built from desk research, end to end, through to a working prototype.",
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
      "This one is self-initiated, not client work, and I won't pretend otherwise. I didn't interview anyone. I reconstructed the problem from the public record: industry time-studies, the complaints in recruiting communities, agency job descriptions, and the gaps reviewers flag in the incumbent tools. I'd rather show that reasoning than claim research I didn't run.",
    intro2:
      "I chose agency recruitment on purpose. It's one of the last knowledge-work domains still run on a patchwork of single-purpose tools, and it's a real test of AI-trust design. Recruiters won't hand decisions to a black box, but they badly need the leverage. So the problem isn't 'add AI.' It's 'add AI a sceptical professional under time pressure will actually trust.'",
    contextTitle: "Why this concept",
    contextBody:
      "Three reasons. Real AI leverage, but trust is the gating factor. A genuine IA problem, not a reskinned ATS. And a chance to show a different process: research-led and workflow-shaped.",
    metadata: [
      { k: "Domain", v: "Staffing & Recruitment" },
      { k: "Primary user", v: "Agency Recruiter (the desk)" },
      { k: "Secondary", v: "Agency Owner · Client Hiring Manager" },
      { k: "Process type", v: "Research-led / Workflow-centred" },
      { k: "Status", v: "Concept + working prototype" },
    ],
  },

  primaryUsers: [
    { label: "Agency Recruiters", desc: "The primary user: sourcing, ranking and reaching out to candidates all day, drowning in manual outreach and tab-switching." },
    { label: "Agency Owners", desc: "Run the desk and the numbers; want more placements per recruiter without adding headcount." },
    { label: "Client Hiring Managers", desc: "Receive shortlists and give feedback; want fewer, better-fit candidates, faster." },
  ],

  // --- 01 THE PEOPLE (Personas - research-informed archetypes) ---
  personasSection: {
    headline: "I designed around three people the research kept pointing at.",
    intro:
      "Archetypes, not interview subjects, built from recruiting forums, agency job descriptions, product reviews, and published research. The recruiter is the primary user. The other two shape what 'good' has to mean.",
    personas: [
      {
        name: "Meera Joshi",
        initials: "MJ",
        role: "Agency Recruiter · primary",
        context: "8-12 open roles, 3-4 client accounts. Lives in inbox, LinkedIn, and the ATS at once. Resents all three.",
        goals: [
          "Shortlist in front of the client before a competitor",
          "Stop screening candidates who were never a fit",
          "On top of every account, without the midnight finish",
        ],
        frustrations: [
          "Same candidate data, re-typed into three tools",
          "Pipeline context lost on every account switch",
          "Status updates, hand-written, every evening",
        ],
        jtbd: "When I take a new role from a client, I want a qualified shortlist in front of them fast, so I can fill it before a competitor does.",
        tools: "ATS · LinkedIn Recruiter · Gmail · WhatsApp · 2 spreadsheets",
      },
      {
        name: "Daniel Okafor",
        initials: "DO",
        role: "Agency Owner",
        context: "14-person agency. Watches margin leak into a stack of tools that don't talk. Research pegs that leak at 15-25% (Aqore, 2026).",
        goals: [
          "Keep relationships and pipeline when a recruiter leaves",
          "See where every role stands, without chasing people",
          "Protect margins by cutting time-to-fill",
        ],
        frustrations: [
          "A recruiter quits, months of pipeline walk out the door",
          "No single view of status: it lives in inboxes",
          "Reporting is a Friday copy-paste scramble",
        ],
        jtbd: "When a recruiter leaves, I want their relationships and knowledge to stay in the business, so I don't lose months of pipeline.",
        tools: "ATS exports · spreadsheets · the team's word",
      },
      {
        name: "Priya Raman",
        initials: "PR",
        role: "Client · Hiring Manager",
        context: "Hiring manager at a client company. Briefs 2-3 agencies on the same role, judges them on speed and signal.",
        goals: [
          "A small, high-signal shortlist, not a flood of CVs",
          "A reason each candidate was put forward",
          "Status without sending a chasing email",
        ],
        frustrations: [
          "Volume to look busy, not signal",
          "No rationale, just a CV and a name",
          "Has to ask for status every single time",
        ],
        jtbd: "When I brief an agency, I want a small shortlist with clear reasoning, so I can trust the recommendation and move fast.",
        tools: "Email · the agency's PDF shortlist",
      },
    ],
  },

  // --- 02 THE WORKFLOW (Desk research → reconstructed day → insights) ---
  research1: {
    headline: "Before I drew a single screen, I mapped where a recruiter's day actually goes.",
    methodTitle: "Reconstructing the desk",
    methodIntro:
      "I rebuilt one recruiter's day from the public record. Three things came up over and over, and each one became something the design had to answer.",
    method: [
      { l: "Basis", v: "Secondary research" },
      { l: "Sources", v: "Time-studies · forums · tool reviews" },
      { l: "Mapped", v: "Tool touches + context switches" },
      { l: "Output", v: "The day the tools created" },
    ],
    timelineTitle: "A day in the life, rebuilt",
    timelineIntro:
      "Reconstructed from the research, one recruiter's day shows where the time actually goes. The work that creates value (talking to people, judging fit) gets crowded out by the work of keeping systems in sync.",
    timeline: [
      { time: "9:00", label: "Triage", note: "Inbox + WhatsApp + 2 ATS tabs open before the first coffee. Rebuilds yesterday's context from memory." },
      { time: "10:30", label: "Sourcing", note: "LinkedIn, copy candidate, paste into ATS, paste into a tracking sheet. Same data, three homes.", pain: true },
      { time: "12:00", label: "Screening", note: "Reads CVs back-to-back with no way to compare them side by side. Gut-ranks in her head." },
      { time: "14:00", label: "Account switch", note: "Moves to a different client. Loses the thread of where the morning's role stood.", pain: true },
      { time: "15:30", label: "Outreach", note: "Writes near-identical LinkedIn messages one at a time, personalising by hand." },
      { time: "17:00", label: "Client update", note: "Hand-writes a status email per account from memory and the spreadsheet. The day's least-valued, most-dreaded task.", pain: true },
      { time: "18:30", label: "Still here", note: "Admin, not people. The leverage work never happened." },
    ],
    affinityTitle: "What the research clustered into",
    affinityIntro:
      "The recurring problems from the research grouped into four themes. Each one is a place where the workflow leaks time or trust.",
    affinityThemes: [
      { t: "The tool tax", d: "Agency recruiters run across 5-12 separate tools with no shared context. The same candidate gets typed in four times; nothing syncs." },
      { t: "The admin sinkhole", d: "40%+ of a recruiter's time goes to non-recruiting tasks: data entry, scheduling, status reports. Time-to-hire has crept to 44 days." },
      { t: "Volume over signal", d: "Pressure to look busy pushes recruiters toward sending CV volume instead of a reasoned shortlist, which clients quietly resent." },
      { t: "The memory leak", d: "Relationships, client quirks, and pipeline context are individual, not institutional. When a recruiter leaves, the business loses it." },
    ],
    insightsTitle: "Three insights that drove the design",
    insights: [
      { t: "The job isn't sourcing, it's judgement", d: "Recruiters add value by judging fit and managing relationships. Sourcing and admin are necessary friction. AI should take the grunt work off the desk so the recruiter spends the time judging fit, not doing data entry.", link: "→ AI proposes, recruiter disposes (Principle 1)" },
      { t: "The unit of work is the engagement, not the candidate", d: "Recruiters think in roles and accounts, but tools are built around candidate records or job postings. The mental model and the IA are misaligned.", link: "→ Project-centric architecture (Principle 2)" },
      { t: "Trust is earned by showing your work", d: "A sceptical professional won't accept an AI score on faith. Every AI output needs a confidence level and a traceable reason, or it gets ignored.", link: "→ Confidence + provenance on every AI output (Principle 3)" },
    ],
    keyInsight:
      "Recruiters don't need software that does the recruiting. They need software that handles the admin and points them at the candidates worth their time, without hiding how it got there.",
  },

  // --- 03 THE BROKEN STACK (Ecosystem + heuristics + teardown) ---
  research2: {
    headline: "I tore down the tools recruiters already pay for, and found the same hole in each.",
    ecoTitle: "The tool sprawl",
    ecoIntro:
      "I mapped every tool a recruiter touches in a typical week. The picture is the problem: a recruiter is the only integration layer connecting an ATS, a CRM, job boards, LinkedIn, email, a comms app, spreadsheets, and a reporting deck. Manually, all day.",
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
      "No tool owns the workflow. The recruiter is the glue, which is exactly the job a system should be doing.",
    heuristicTitle: "Heuristic evaluation of the two incumbents",
    heuristicIntro:
      "I ran a heuristic evaluation on the two tools that dominate agency desks, Bullhorn and Recruit CRM, scoring each on six usability heuristics to locate the systemic gaps a new product would have to close.",
    heuristics: [
      { t: "Match to the real workflow", d: "Built around candidate/job records, not the recruiter's account-centric mental model.", s: "4/10" },
      { t: "Visibility of status", d: "Pipeline status is buried or stale; recruiters keep the truth elsewhere.", s: "3/10" },
      { t: "Minimise manual entry", d: "Same data re-keyed across modules; little intelligent pre-fill.", s: "3/10" },
      { t: "Recognition over recall", d: "Critical context (why this candidate, what the client wants) isn't surfaced where decisions happen.", s: "4/10" },
      { t: "Flexibility & speed", d: "Powerful but heavy; common actions take too many clicks for a time-pressured desk.", s: "5/10" },
      { t: "Trust & transparency (AI)", d: "Where AI exists, it scores without explanation, so recruiters ignore it.", s: "2/10" },
    ],
    teardownTitle: "Competitive teardown",
    teardownIntro:
      "Six tools, eight capabilities. The pattern is clear: incumbents are records systems with AI bolted on; point tools do one thing well but don't own the workflow. Nothing combines a project-centric model with trustworthy, end-to-end AI. A real opening, with ~20,000 independent staffing agencies in the US alone, most under 20 recruiters.",
    competitiveTable: {
      headers: ["Capability", "Slate", "Bullhorn", "Recruit CRM", "LinkedIn Rcl", "Greenhouse", "Loxo"],
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
      "I couldn't find a single tool that combined a project-centric workflow with end-to-end AI recruiters actually trust. Incumbents are systems of record with AI bolted on; point tools own a feature, not the workflow. I designed Slate for the space between them.",
  },

  // --- 04 THE HYPOTHESIS (Positioning + mental model + principles) ---
  hypothesis: {
    headline: "So I made one bet: organise the whole product around the engagement.",
    positioningTitle: "Positioning",
    positioning:
      "I aimed this at staffing agencies, not HR departments. I organised everything around the engagement and gave recruiters an AI copilot that sources, ranks, drafts, and reports, while keeping the recruiter the decision-maker on everything that matters. I deliberately didn't build an HRIS, a job board, or an ATS with a chatbot stapled on.",
    isItList: [
      "A project-centric workspace where every engagement is a project",
      "An AI copilot that does the admin and flags the candidates worth a look",
      "A system that earns trust by showing confidence + provenance",
    ],
    isNotList: [
      "Not an HRIS / payroll / compliance suite",
      "Not a job board competing with Indeed",
      "Not an ATS with an AI chatbot bolted on",
    ],
    modelTitle: "The project-centric mental model",
    modelIntro:
      "The core IA bet: structure the product by engagement, not by candidate record or job posting. Recruiters already think in 'the Acme back-end role,' a project that holds its candidates, outreach, interviews, notes, and the client relationship in one place. Matching the architecture to the mental model is the innovation; everything else follows from it.",
    modelNodes: [
      { t: "Project", d: "The engagement. The unit everything hangs off." },
      { t: "Candidates", d: "Sourced, analysed, and ranked inside the project." },
      { t: "Outreach", d: "AI-drafted, human-sent, tracked per candidate." },
      { t: "Interviews", d: "Stages and feedback, in pipeline context." },
      { t: "Client", d: "The relationship + one-click status, attached to the project." },
    ],
    principlesTitle: "Four design principles",
    principlesIntro:
      "Each principle is a tension resolved in a direction, and each one earns its place from the research.",
    principles: [
      { t: "AI proposes, recruiter disposes", d: "I gated every consequential action behind a person: sending outreach, advancing a candidate, sharing a shortlist. The AI works up to the moment of consequence, then I hand the decision back.", from: "Trust is the #1 barrier to AI adoption in hiring." },
      { t: "Project-centric over record-centric", d: "I organised by engagement, not by candidate or job, so the architecture matches how recruiters already think and nothing has to be relearned.", from: "The unit of work is the engagement, not the candidate." },
      { t: "Show your work, always", d: "I let no AI output ship without a confidence level and clickable provenance, because a score you can't check is a score you ignore.", from: "A sceptical professional won't act on a score they can't check." },
      { t: "Do the admin, free up the judgement", d: "I automated re-entry, summarisation, and reporting so the saved attention goes to the candidates that matter. Fast and human, not heavy and clever.", from: "40%+ of the desk's time is lost to non-recruiting work." },
    ],
  },

  // --- 05 HOW IT THINKS (Task analysis + IA, derived from first principles) ---
  ia: {
    headline: "I broke the work into tasks first, then built the IA around the sequence.",
    taskTitle: "The recruitment lifecycle, as tasks",
    taskIntro:
      "Before any IA, I broke the recruitment lifecycle into discrete tasks with their dependencies, so the structure would be organised around the actual sequence of work, not around database tables.",
    lifecycle: [
      { t: "Take the brief", d: "Client opens a role → becomes a project." },
      { t: "Source", d: "Add candidates via resume / profile → structured records." },
      { t: "Analyse & rank", d: "AI summarises, scores fit, and flags risks, with provenance." },
      { t: "Shortlist", d: "Recruiter curates; compares candidates side by side." },
      { t: "Outreach", d: "AI drafts; recruiter edits and sends." },
      { t: "Interview", d: "Track stages and feedback in pipeline." },
      { t: "Report", d: "One-click client status, generated from project state." },
    ],
    cardSortTitle: "Deriving the structure",
    cardSortIntro:
      "I derived the architecture from the problem and the project-centric bet, then kept it deliberately flat and recruiter-shaped: organised around the engagement, not the candidate record. A card sort with real recruiters is on the validation list, not done.",
    cardSort: [
      { l: "Approach", v: "First-principles from the workflow" },
      { l: "Basis", v: "Public research + teardown" },
      { l: "Organising unit", v: "The project / engagement" },
      { l: "To validate", v: "Card sort with real recruiters (planned)" },
    ],
    iaDecisionsTitle: "Three IA decisions",
    iaDecisions: [
      { t: "Project as the home base", chose: "Made the project workspace the default landing context, with a global overview above it.", alt: "Considered a candidate-database home (rejected, because it's the incumbent model recruiters already route around)." },
      { t: "Copilot in the right rail, everywhere", chose: "A persistent AI copilot docked in the right rail so assistance is one glance away in every view.", alt: "Considered a separate AI 'mode' (rejected, because it would make AI a destination instead of an ambient assistant)." },
      { t: "One ranked-table component, reused", chose: "The same ranked candidate table powers both the workspace and the candidates view: rank · candidate · project · AI fit · status · notes.", alt: "Considered bespoke layouts per view (rejected, because consistency lowers relearning and keeps the AI-fit column legible everywhere)." },
    ],
  },

  // --- 06 BUILDING IT (Wireframes → flows → prototype screens) ---
  design: {
    headline: "I started in grayscale, so structure had to win before color.",
    wireframesIntro:
      "Low-fidelity, grayscale wireframes first, to lock structure and the AI-trust patterns before any color or brand. The questions at this stage: where does the copilot live, how does a confidence score read at a glance, and how does provenance expand without burying the decision?",
    wireframes: [
      { src: S("wf-01-workspace.png"), tag: "Lo-fi · 01", title: "Project workspace", desc: "The signature view in grayscale: ranked candidate table left, AI copilot rail right. Locked the two-column relationship and the at-a-glance fit column before styling." },
      { src: S("wf-02-analysis.png"), tag: "Lo-fi · 02", title: "AI candidate analysis", desc: "The 'wow' moment, structurally: summary, fit score, skills, and red flags, each with a confidence chip and an expandable 'why'. Provenance as a first-class block, not a tooltip afterthought." },
      { src: S("wf-03-outreach.png"), tag: "Lo-fi · 03", title: "AI outreach composer", desc: "AI-drafted message with the human gate explicit. Edit and send are the recruiter's, never automatic. Established the propose-then-approve pattern reused across the product." },
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
      "From grayscale to a working, clickable product. The screens below are captured from the live Slate prototype: Google / Material-3 design language, a Gemini-style gradient reserved exclusively for AI surfaces, and the ✦ sparkle marking every AI action. It's the real prototype, not a screen mock-up: you can open it and click through. It shows the intent without claiming results.",
    finalScreens: [
      { src: S("01-overview.png"), tag: "Prototype · 01", title: "Overview", desc: "The agency at a glance: active projects, pipeline health, and what the copilot thinks needs attention today. The global layer above the project workspace." },
      { src: S("02-projects.png"), tag: "Prototype · 02", title: "Projects", desc: "Every engagement as a project, the home base of the whole product. Status, client, and candidate counts in one scannable list." },
      { src: S("03-workspace.png"), tag: "Prototype · 03", title: "Project workspace", desc: "The signature view. Ranked candidate table on the left, AI copilot docked in the right rail. Assistance one glance away, never a separate mode." },
      { src: S("04-analysis.png"), tag: "Prototype · 04", title: "AI candidate analysis", desc: "The trust centrepiece. Fit score, skills, and red flags, each carrying a confidence level and clickable provenance, so you can see exactly why the AI said what it said." },
      { src: S("05-candidate.png"), tag: "Prototype · 05", title: "Candidate detail", desc: "The full structured profile built from a resume or a pasted profile. AI summary up top, evidence underneath, every claim traceable to a source." },
      { src: S("06-shortlist.png"), tag: "Prototype · 06", title: "Shortlist & compare", desc: "Curate the AI ranking into a shortlist and compare candidates side by side. It's the side-by-side view recruiters do in their heads, made real." },
      { src: S("07-outreach.png"), tag: "Prototype · 07", title: "AI outreach composer", desc: "AI drafts a personalised message; the recruiter edits and sends. The human gate is explicit, so nothing goes out without a person behind it." },
      { src: S("08-share-client.png"), tag: "Prototype · 08", title: "Client report", desc: "A one-click, client-ready status generated from project state, reviewed by the recruiter before it's shared. The Friday scramble, gone." },
      { src: S("09-candidates.png"), tag: "Prototype · 09", title: "Candidates (cross-project)", desc: "The same ranked-table component, reused across the desk. One consistent way to read rank, fit, status, and notes everywhere it appears." },
      { src: S("10-overview-ai.png"), tag: "Prototype · 10", title: "Ask-AI copilot", desc: "Natural-language search and actions across the whole desk. Ask in plain English, get an answer grounded in your projects, candidates, and notes." },
    ],
  },

  // --- 07 THE AI LAYER (AI patterns) ---
  aiLayer: {
    headline: "Recruiters have been burned by 'AI matching', so I made this AI show its work.",
    intro:
      "Black-box scores surface the wrong people with total confidence. So I designed the AI to earn its keep differently: it shows its work, and it never has the last word. I leaned on a small set of interaction patterns, applied consistently, so it reads as a transparent colleague, not an oracle. Every pattern below is in the prototype.",
    patterns: [
      { id: "P1", t: "Confidence + provenance", d: "Every AI output, whether a fit score, summary, or red flag, carries a confidence level and a clickable trail to the source it came from. The single most important trust move in the product.", featured: true },
      { id: "P2", t: "Human in the loop", d: "Consequential actions (send outreach, advance a candidate, share a report) are always gated behind a person. The AI proposes; the recruiter approves.", featured: true },
      { id: "P3", t: "Progressive disclosure", d: "AI reasoning starts collapsed and expands on demand. A glanceable answer for the fast path, the full 'why' one click away for when it matters." },
      { id: "P4", t: "Editable AI output", d: "Nothing the AI writes is final. Drafts and summaries are starting points the recruiter shapes, keeping the human voice and judgement in the loop." },
      { id: "P5", t: "Graceful uncertainty", d: "When the AI isn't sure, it says so: low-confidence states, 'not enough signal' messages, and honest gaps instead of confident-sounding guesses." },
    ],
    decisionsTitle: "AI design decisions",
    decisions: [
      { t: "A gradient reserved for AI", d: "A Gemini-style gradient and the ✦ sparkle appear only on AI surfaces, so users always know, at a glance, when they're looking at a machine's output versus their own data." },
      { t: "Confidence as a chip, not a number dump", d: "Confidence is shown as a calm high/medium/low chip with color, not a false-precision percentage. It stays honest about the fuzziness without overstating it." },
      { t: "Provenance you can click", d: "Every AI claim links back to the resume line, profile, or note it drew from, turning 'trust me' into 'check for yourself'." },
    ],
  },

  // --- 08 DESIGN SYSTEM ---
  designSystem: {
    headline: "I kept the chrome quiet, so the AI moments get the contrast.",
    intro:
      "A recruiter's screen is dense: pipelines, cards, candidate detail, an AI panel, all at once. I chose a Google / Material-3 foundation so it reads calm, familiar, and enterprise-trustworthy, and reserved one Gemini-style gradient for AI surfaces alone. Everything else stays restrained. Plus Jakarta Sans for display, Inter for body, Roboto Mono for data.",
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
      "I kept the system restrained so the AI layer carries the visual weight. By reserving one gradient and one icon (✦) for AI alone, I made it so a user can always tell, instantly, whether they're looking at their own data or the machine's read of it. A trust decision, encoded straight into the tokens.",
    crossProduct:
      "I built the foundation as a shared base, since Slate is the first of a planned family of AI-native concepts. The same grid, spacing, motion, and AI-interaction patterns carry across each one, each with its own accent inside the shared language.",
  },

  // --- 09 WHERE IT STANDS (honest targets, not fabricated results) ---
  whereItStands: {
    headline: "I'm separating what I proved from what I still have to test.",
    intro:
      "Nothing here is claimed as measured. These are the targets the design is built to hit, and they'll be tested, not asserted.",
    doneTitle: "What's done",
    done: [
      "A researched, defined problem, reconstructed from public time-studies, recruiting communities, and tool reviews.",
      "A competitive teardown anyone can verify: ecosystem map, heuristic evaluation, and a capability scorecard.",
      "An end-to-end design: IA, three core task flows, wireframes, and a full AI-native design system.",
      "A working, clickable prototype of the core loop, the proof the design holds together as an experience.",
    ],
    targetsTitle: "What I'm designing toward",
    targetsNote: "Targets to validate, not outcomes achieved.",
    targets: [
      { t: "Reclaim the admin time", d: "The research says ~17 hrs/week per recruiter is reclaimable with AI (Bullhorn). The target is to win back a meaningful slice of that, to be measured with real recruiters, not assumed." },
      { t: "Trust the AI enough to use it", d: "The success signal isn't a score; it's whether a recruiter acts on an AI suggestion after checking its provenance. That's a usability question, and the first thing I'd test." },
      { t: "Nothing lost when someone leaves", d: "Whether organisational memory actually survives a departure is a longitudinal question, one for a pilot, not a prototype." },
    ],
  },

  // --- 10 FUTURE VISION (concept → product roadmap + planned research) ---
  futureVision: {
    headline: "If I took this further, I'd lead with the research I deliberately skipped.",
    intro:
      "Slate is a concept I'd genuinely take further. Here's the path from where it is now to something real, and this is where the user-centred work I deliberately haven't done yet comes in, front and centre.",
    phasesTitle: "From concept to product",
    phases: [
      {
        phase: "Phase 1",
        title: "Validate with real recruiters",
        items: [
          "Contextual interviews with agency recruiters and owners. Watch a real desk for a day, pressure-test the project-centric model against how they actually work.",
          "Usability testing of the prototype. Does the human gate feel safe or slow? Do recruiters trust a ranking once they can see its provenance? Where do they hesitate?",
          "Concept testing of the AI-trust patterns: confidence labels, provenance links, the accept/edit/reject gate. That's the riskiest, most important part of the design.",
        ],
      },
      {
        phase: "Phase 2",
        title: "Pilot with a few agencies",
        items: [
          "A small private beta with 5-10 independent recruiters, the beachhead the research points to.",
          "Diary studies and real-workflow testing over weeks, not minutes. It's the only way to know whether the admin time actually comes back and the memory holds.",
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
      "Slate today is a well-researched, fully-designed, prototyped concept. Making it real means putting it in front of the people it's for, and the plan for doing that, rigorously, is above. That's the next chapter, and I'd be glad to write it.",
  },

  // Link to the live prototype (already hosted at /recruitos/)
  prototypeUrl: "/recruitos/",
};
