// Slate case study data - self-initiated AI-native concept.
// Process type: Research-led / Workflow-centred. 10 sections + Future Vision.
// Visual styling is portfolio-driven (vermilion/cream chrome); the *product*
// keeps its own identity inside the embedded prototype + design-system section.
//
// Screen images live under /slate-shots/ (Playwright captures of the live prototype).
const S = (n) => `/slate-shots/${n}`;

export const slate = {
  slug: "slate",
  title: "Slate",
  kind: "AI-native concept · self-initiated",
  subtitle:
    "An AI recruiting workspace for staffing agencies. The system sources, ranks, and drafts the outreach, and the recruiter stays the decision-maker. I designed it end-to-end from desk research to a working, clickable prototype, with AI trust at the centre: every score shows its confidence and where it came from.",

  hero: {
    // Concept work -> research-backed figures, framed honestly as such in copy.
    facts: [
      { label: "Role", value: "Senior UX Lead (end-to-end)" },
      { label: "Domain", value: "Staffing & recruitment" },
      { label: "Platform", value: "Responsive web (concept)" },
    ],
    stats: [
      { value: "5-12", label: "Tools per desk" },
      { value: "40%+", label: "Time lost to admin" },
      { value: "~17 hrs", label: "Reclaimable / week" },
    ],
    statsNote: "The problem, in published industry numbers. Sources in Where It Stands.",
  },

  // --- 00 OVERVIEW ---
  overview: {
    headline: "I built the desk around the engagement, not the tool, because that's how recruiters actually think.",
    tldr:
      "Recruiters lose 40%+ of their time to non-recruiting admin (Aqore, 2026), juggling an ATS, LinkedIn, job boards, and spreadsheets. Slate rebuilds the desk around the engagement, with an AI copilot that sources, ranks, and drafts, but never sends. The recruiter decides, and every suggestion shows its confidence and its source. Designed end to end and built as a working prototype.",
    badge: "Concept · self-initiated · not client work",
  },
  hypothesis: {
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
  },
  design: {
    finalIntro:
      "Slate exists as a working, clickable product. The screens below are captured from the live prototype: Google / Material-3 design language, a Gemini-style gradient reserved exclusively for AI surfaces, and the ✦ sparkle marking every AI action. It's the real prototype, not a screen mock-up: you can open it and click through. It shows the intent without claiming results.",
    prototypeHint:
      "click anything. the copilot sources, ranks and drafts. nothing sends without you.",
    finalScreens: [
      { src: S("01-overview.png"), tag: "Prototype · 01", title: "Overview", desc: "The agency at a glance: active projects, pipeline health, and what the copilot thinks needs attention today. The global layer above the project workspace." },
      { src: S("02-projects.png"), tag: "Prototype · 02", title: "Projects", desc: "Every engagement as a project, the home base of the whole product. Status, client, and candidate counts in one scannable list." },
      { src: S("03-workspace.png"), tag: "Prototype · 03", title: "Project workspace", desc: "The signature view. Ranked candidate table on the left, AI copilot docked in the right rail. Assistance one glance away, never a separate mode." },
      { src: S("04-analysis.png"), tag: "Prototype · 04", title: "AI candidate analysis", desc: "The trust centrepiece. Fit score, skills, and red flags, each carrying a confidence level and the source behind it, so you can see exactly why the AI said what it said." },
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
  },
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
    targets: [
      { t: "Reclaim the admin time", d: "The research says ~17 hrs/week per recruiter is reclaimable with AI (Bullhorn). The target is to win back a meaningful slice of that, to be measured with real recruiters, not assumed." },
      { t: "Trust the AI enough to use it", d: "The success signal isn't a score; it's whether a recruiter acts on an AI suggestion after checking its provenance. That's a usability question, and the first thing I'd test." },
      { t: "Nothing lost when someone leaves", d: "Whether organisational memory actually survives a departure is a longitudinal question, one for a pilot, not a prototype." },
    ],
  },

  // --- 10 FUTURE VISION (concept → product roadmap + planned research) ---
  prototypeUrl: "/slate/",
};
