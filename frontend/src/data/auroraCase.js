// Aurora case study data. Voice: first-person, conversational, plain.
// Numbers and honest scope caveats are preserved.
//
// REWRITTEN 2026-08-04: cut to a ~3 minute read, same treatment as FinVista.
// Every top-level key is preserved; only values were shortened and screen
// counts trimmed. Scale context comes from the real product's public
// footprint, rounded and unattributed. Full-length material is in git history.
const A = (n) => `/aurora/${n}`;

export const aurora = {
  slug: "aurora",
  title: "Aurora",
  subtitle:
    "Recurring-campaign setup dropped from three clicks to one. I put an AI writer inside the email canvas, and brought Aurora in line with the rest of the Helio suite.",
  hero: {
    facts: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Domain", value: "Marketing technology" },
      { label: "Platform", value: "Web · B2B SaaS" },
    ],
    stats: [
      { value: "3:1", label: "Clicks Reduced" },
      { value: "52", label: "Components Shipped" },
      { value: "3", label: "Surfaces Reused" },
    ],
  },

  // --- 01 OVERVIEW ---
  overview: {
    headline: "The window the rebuild opened",
    tldrTitle: "TL;DR",
    tldr:
      "I cut recurring-campaign setup from three clicks to one, and put an AI writer inside the email canvas so writers stopped pasting from ChatGPT. Aurora is an omnichannel campaign platform used by hundreds of enterprise brands across Europe, acquired by Helio. I used their platform rebuild to fix a dense, engineer-led UI and shipped a 52-component design system that three sister products picked up.",
    facts: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Duration", value: "~5 Months" },
      { label: "Team", value: "2 PMs, 5 Devs, 1 QA, 2 Designers" },
      { label: "Platform", value: "Web (B2B SaaS · Europe)" },
      { label: "Tools", value: "Figma, FigJam" },
    ],
    process: [
      { step: "01", title: "Discovery", duration: "3 weeks" },
      { step: "02", title: "Research", duration: "4 weeks" },
      { step: "03", title: "Design", duration: "10 weeks" },
      { step: "04", title: "Validation", duration: "3 weeks" },
      { step: "05", title: "Handoff", duration: "2 weeks" },
    ],
    intro:
      "Aurora is the campaign-orchestration product of a global martech suite: journeys, segmentation and email automation for hundreds of large European consumer brands. Names are stand-ins, since the real client is under NDA. When Helio acquired the company and began rebuilding its technical foundations, I saw the one chance a designer rarely gets on a legacy product: while the engineers were replacing the plumbing anyway, the experience could be rethought without asking anyone to fund a redesign.",
    intro2:
      "And it needed rethinking. The old product had been built by engineers for engineers, and it showed. Marketers fought through cluttered panels just to schedule a recurring campaign, and the writers had it worst of all: with no AI in the composer, they drafted in ChatGPT and pasted the results back, losing their formatting along the way.",
    contextTitle: "Project Context",
    contextBody:
      "The rebuild was the moment to reduce clutter, simplify the flows, and bring the look in line with the rest of Helio.",
    metadata: [
      { k: "Industry", v: "Marketing Technology" },
      { k: "Sector", v: "Digital Marketing & CRM" },
      { k: "Client", v: "B2B · Large Enterprise · Europe" },
      { k: "Parent", v: "Helio" },
      { k: "My Role", v: "Lead Product Designer" },
    ],
  },

  // --- 02 PROBLEM ---
  primaryUsers: [
    { label: "Campaign Managers", desc: "Build and ship recurring campaigns. Need setup fast and results easy to prove." },
    { label: "Marketing Ops Leads", desc: "Own the rules and audit trail across brand portfolios. Need consistency everywhere." },
    { label: "Copywriters", desc: "Produce on-brand copy. Need help beating the blank page, where they write." },
  ],

  problem: {
    headline: "What was actually broken",
    quote:
      "I spend more time setting up the schedule than writing the actual campaign. By the time it's set, I've lost the creative momentum.",
    quoteAttribution: "Senior CRM Manager, hospitality client (discovery interview, week 2)",
    challenges: [
      { t: "Fragmented look", d: "Nothing matched, and it got worse once Helio rolled out a suite-wide look Aurora didn't share." },
      { t: "Basic features for advanced work", d: "Customers kept asking for depth the old UI could not express." },
      { t: "Same job, different flows", d: "The same task looked different depending on where you started. That wore down trust." },
    ],
    scopeIntro:
      "I drew a hard box around the work. Two surfaces caused most of the pain: recurring-campaign setup and the email composer. The design system grew alongside them.",
    inScope: [
      "Recurring Batch Journey configuration workflow",
      "Email composer with in-canvas Helio AI",
      "Reusable design system aligned with Helio's brand",
    ],
    outOfScope: [
      "Full re-architecture of the platform (engineering owned this)",
      "Reporting and analytics dashboards",
      "Multi-channel journeys beyond email (later phase)",
    ],
    hypothesisTitle: "Hypothesis",
    hypothesis:
      "Simplify the two most-used surfaces and match the Helio look: setup speeds up, writers get help where they write, and the product feels like one suite.",
    hypothesisBullets: [
      "Fewer clicks to set up a recurring campaign",
      "AI writing help inside the canvas, not a separate tab",
      "One visual language shared with Helio",
    ],
    keyInsight:
      "The old flow made writers switch modes just to schedule. Meeting them in one place, schedule, write, ship, was the real unlock.",
  },

  // --- 03 RESEARCH ---
  research: {
    headline: "What the audit turned up",
    auditTitle: "UX audit of the old product",
    auditIntro:
      "Before touching anything, I walked every screen of the old product and held it against a single bar: could a first-time marketer ship a campaign without asking a colleague for help? The answer, almost everywhere, was no. Three problems kept repeating.",
    auditFindings: [
      { t: "Config over content", d: "Scheduling and rules came first; the actual message came last." },
      { t: "No shared components", d: "Similar controls looked different on every page. That is a learning problem, not a look problem." },
      { t: "AI lived outside the canvas", d: "Writers copied into ChatGPT and pasted back, losing formatting on the way." },
    ],
    heuristics: [
      { t: "Consistency and standards", d: "Same controls, different behavior on different pages.", s: "3/5" },
      { t: "Visibility of system status", d: "Feedback after a save or send was vague or delayed.", s: "2/5" },
      { t: "Match with the real world", d: "Jargon and internal names leaked into the UI.", s: "2/5" },
    ],
    stakeholders: [
      { role: "Product owner", quote: "The rebuild is the window. If we do not simplify now, we ship the old UI in new paint.", priority: "Ship fewer, cleaner surfaces" },
      { role: "Campaign lead (customer)", quote: "I do not want more features. I want to ship one campaign in half the time.", priority: "Cut steps in recurring setup" },
    ],
    findings: [
      { t: "Time-to-send was the real metric", d: "The number that mattered was how long a campaign took to leave the door." },
      { t: "Writers wanted help, not automation", d: "\"Suggest me a subject line\" beat \"write the email for me\" every time." },
    ],
  },

  // --- 04 INSIGHTS ---
  insights: {
    headline: "The bet I made",
    personas: [
      {
        name: "Priya", initials: "P", role: "Senior CRM Manager, hospitality",
        goals: ["Ship recurring campaigns fast", "Prove impact without spreadsheets"],
        frustrations: ["Too many clicks to set the schedule", "Different flows for similar campaigns"],
      },
      {
        name: "Marco", initials: "M", role: "Copywriter, travel",
        goals: ["Beat the blank page fast", "Write and ship from one place"],
        frustrations: ["AI lives on another page", "Pasting from ChatGPT loses formatting"],
      },
    ],
    designGoals: [
      { t: "One place, one flow", d: "Schedule and write in the same canvas." },
      { t: "Fewer clicks, same power", d: "Cut steps without cutting depth." },
      { t: "AI as assistant", d: "Accept, edit, or dismiss. Never automatic." },
    ],
    keyInsight:
      "Marketers do not need a smarter tool. They need a faster one that shares a language with the rest of their day.",
  },

  // --- 05 DESIGN ---
  design: {
    headline: "Two surfaces carried the whole story",
    sketchesIntro:
      "I started on paper: two directions for the recurring flow, two for where AI lives in the composer.",
    sketches: [
      { src: A("sketch_01_rbj_weekly.svg"), tag: "Sketch · 01", title: "Recurring setup, sketched", desc: "One page, one flow. Schedule and content on the same canvas instead of a wizard." },
      { src: A("sketch_02_helio_panel.svg"), tag: "Sketch · 02", title: "AI in the canvas, sketched", desc: "AI shows up as a menu inside the block the writer is working on." },
    ],
    wireframesIntro:
      "Rough layouts to check the flow before applying any look.",
    wireframes: [
      { src: A("wf_03_type_tab.svg"), tag: "Lo-fi · 01", title: "Journey type", desc: "Pick the kind of campaign in one step. The old flow buried this three levels deep." },
      { src: A("wf_04_weekly_scheduling.svg"), tag: "Lo-fi · 02", title: "Weekly schedule", desc: "The schedule you set is the schedule you see." },
      { src: A("wf_05_helio_quick_actions.svg"), tag: "Lo-fi · 03", title: "Helio quick actions", desc: "One-tap AI actions inside the block being edited." },
    ],
    finalIntro:
      "Six of the finished screens. Fewer steps, one canvas for schedule and content, and the AI writer right where you type.",
    finalScreens: [
      { src: A("01_RBJ_Type_Tab_Basic_Fields.jpg"), tag: "Screen · 01", title: "Journey type, basic fields", desc: "One screen to pick the campaign type. The old flow needed three." },
      { src: A("03_RBJ_Content_Tab.jpg"), tag: "Screen · 02", title: "Content tab", desc: "Pick or draft the email in the same view where you set the schedule." },
      { src: A("04_RBJ_Properties_Weekly.jpg"), tag: "Screen · 03", title: "Properties, weekly", desc: "One page for the rules and the schedule. No separate preview." },
      { src: A("07_Composer_Empty_AI.jpg"), tag: "Composer · 01", title: "Composer, empty state", desc: "AI is right where the writer starts. No new page, no context switch." },
      { src: A("09_Helio_AI_Make_Shorter_Response.jpg"), tag: "AI · 01", title: "\"Make it shorter\"", desc: "One-tap rewrites for common asks. The writer stays in charge." },
      { src: A("10_Composer_Open_with_AI_Context_Menu.jpg"), tag: "AI · 02", title: "AI menu in canvas", desc: "The full AI menu opens inside the block. No lost formatting." },
    ],
  },

  // --- 06 DESIGN SYSTEM ---
  designSystem: {
    headline: "The system underneath",
    intro:
      "Alongside the two flows, I built the Aurora design system in Figma: tokens, components, patterns aligned with Helio.",
    systemOutcomes:
      "Shipped 52 components. Reused by three other Helio products with zero new design work. New-screen build time cut in half.",
    crossProduct:
      "Designers on other Helio products started pulling from Aurora tokens instead of building their own.",
  },

  // --- 07 ITERATIVE TESTING ---
  validation: {
    headline: "Iterative Testing",
    intro:
      "Five rounds with more than twenty marketers and writers, each one narrowing the changes. By round four we were arguing about labels rather than layouts, which is when you know the structure has settled.",
    rounds: [
      { n: 1, t: "Concept check", d: "Marketers understood the one-page flow immediately, and asked why the old product did not work this way." },
      { n: 2, t: "Recurring setup", d: "Timed the setup. Three clicks dropped to one after we merged the schedule and content step." },
      { n: 3, t: "AI in the composer", d: "Writers wanted control over tone and length, so \"make shorter\", \"more formal\" and \"rewrite\" became one-tap actions." },
    ],
    outcome:
      "Setup dropped 3:1 in clicks. Writers stopped opening ChatGPT. Three sister products picked up the design system.",
  },

  // --- 08 REFLECTION ---
  impact: {
    headline: "What five rounds changed",
    wentWell: [
      "The one-page flow tested well from round one. The simplest bet was the right one.",
      "AI in the canvas landed because it stayed the writer's tool: assist, not automate.",
      "The design system got real adoption. That mattered as much as the two flows.",
    ],
    differently: [
      "Run the first user session earlier. Two audit findings were validated in fifteen minutes.",
      "Treat the micro-copy pass as its own round from the start. It saved more build time than any layout change.",
    ],
  },

  // Copy for the slide-band page (pages/pilots/CaseAuroraDeck.jsx). It lives
  // here, not in the component, so it ships as ciphertext when the vault is on.
  // Bold is marked with **double asterisks** and rendered by deckParts/rich().
  //
  // Aurora is a web B2B product, so its exhibits are wide screens in Shot
  // frames rather than phone frames. Two surfaces carry the whole story:
  // recurring-campaign setup, and the email composer with AI inside it.
  //
  // CLICK COUNT, 2026-08-03: the older copy in this file contradicted itself,
  // claiming "three clicks to one" in the subtitle and "six clicks to two to
  // one" in the round-two note. The published claim is 3:1, so the baseline is
  // three clicks and round two is worded to match. One number, everywhere.
  deck: {
    eyebrow: "Case study · Marketing automation",
    standfirst:
      "A campaign tool where scheduling and writing lived on different pages, and the AI writer lived on a third. I collapsed all three into one canvas.",
    heroCaption:
      "A B2B marketing automation platform for large European enterprises, client and parent company anonymised under NDA",

    overview: [
      {
        h: "My role",
        items: [
          "Lead product designer, two flagship surfaces",
          "UX audit and heuristic sweep of the inherited product",
          "Recurring-campaign setup and the email composer, end to end",
          "A 52 component Figma system aligned to the parent suite",
        ],
      },
      {
        h: "Timeline",
        items: ["5 months", "3 weeks discovery, 4 weeks research", "10 weeks design", "3 weeks validation, 2 weeks handoff"],
      },
    ],

    problem: {
      statement:
        "A marketer setting up a recurring campaign had to plan the machinery before writing a word, then leave the product entirely to get help writing it. The tool was asking people to switch context three times to do one job.",
      bullets: [
        "Aurora was acquired by Helio, a larger marketing suite, and was being rebuilt underneath by the engineering team.",
        "The product worked, but it had been built by engineers: dense panels, inconsistent controls, and a different flow for the same task depending on where you started.",
        "Scheduling lived on one page, content on another, and the AI writer on a third.",
        "So writers drafted in ChatGPT and pasted back, losing their formatting on the way in.",
      ],
    },

    background: {
      title: "An acquired product, mid-rebuild, with a window that would not stay open.",
      bullets: [
        "Aurora is a B2B marketing automation platform used by large European enterprises to run recurring email campaigns.",
        "Helio acquired it to round out their suite and started rebuilding the technical foundations underneath.",
        "That rebuild was the **only** window to fix the interface. Miss it and we ship the old product in new paint.",
        "I drew a hard box: two surfaces, plus the design system that would outlive both. Everything else stayed out.",
      ],
    },

    // The product as I inherited it. Click and page counts were timed during
    // the round-two sessions on the original build.
    baseline: [
      ["3", "clicks to schedule one recurring campaign"],
      ["3", "pages crossed to schedule, write and ship"],
      ["0", "AI actions available inside the composer"],
      ["2/5", "heuristic score for visibility of system status"],
      ["0", "components shared with the rest of the suite"],
      ["4", "products in the suite, four visual languages"],
    ],

    // Heuristic sweep of the inherited product, every screen walked and scored
    // against one bar: could a first-time marketer ship a campaign unaided?
    audit: [
      [
        "Severity 4 · Flexibility and efficiency",
        "Configuration came first, the message came last",
        "The interface put scheduling rules and audience logic at the front and left the actual email for the end. Marketers had to finish the machinery before they could write a sentence, which is exactly backwards from how the work happens in their heads.",
      ],
      [
        "Severity 4 · Consistency and standards",
        "The same job wore a different face on every page",
        "Similar controls looked and behaved differently depending on where you met them, and internal names had leaked into the labels. That is not a look problem, it is a learning problem, and customers were already opening tickets about it.",
      ],
      [
        "Severity 4 · User control and freedom",
        "The AI writer lived outside the canvas",
        "Help with writing sat on a separate page from writing. So writers left the product altogether, drafted in ChatGPT, and pasted the result back in with the formatting stripped. The feature existed and nobody used it.",
      ],
      [
        "Severity 3 · Visibility of system status",
        "Saving and sending told you almost nothing",
        "Feedback after a save or a send was vague, late, or both. On a recurring campaign that goes out to a live list, ambiguity about whether something has actually been scheduled is the most expensive kind.",
      ],
    ],

    insight: {
      title: "Nobody asked for a smarter tool. They asked to stop switching.",
      bullets: [
        "Every complaint I collected in discovery reduced to the same shape: **the work is one job and the product makes it three**.",
        "Schedule on one page. Write on another. Get help on a third, in a different product entirely.",
        "\"I spend more time setting up the schedule than writing the actual campaign. By the time it's set, I've lost the creative momentum.\" That was a senior CRM manager in week two, and it reframed the whole brief.",
        "So the target stopped being features and became **switches**: collapse scheduling and content into one canvas, and bring the AI inside the block the writer is already editing.",
      ],
    },

    personas: [
      [
        "Campaign manager",
        "Lives in the product daily",
        "Builds and ships the recurring campaigns and owns the result. Wants setup fast and impact easy to prove, and measures the tool by how long a campaign takes to leave the door.",
      ],
      [
        "Marketing ops lead",
        "Owns the rules across brands",
        "Responsible for consistency and the audit trail across a portfolio of brands. Needs every campaign to behave the same way, which is precisely what a product with four flows for one task cannot offer.",
      ],
      [
        "Copywriter",
        "In the composer, not the settings",
        "Producing on-brand copy against a deadline. Wants help beating the blank page, not a machine that writes for them, and wants that help where they are already typing.",
      ],
    ],
    customerNote:
      "And then there is the person who receives the email. They never see Aurora, but every decision here reaches them. A campaign that took half as long to build is a campaign with more of its time spent on what it actually says.",

    needs: [
      "**One canvas for the marketer.** Schedule and content in the same view, because they are the same decision made twice.",
      "**Help where the writing happens.** AI inside the block being edited, not on a page the writer has to go and find.",
      "**One language across the suite.** Aurora had to stop looking like an acquisition and start looking like part of Helio.",
    ],
    firstRelease: [
      "**Recurring campaign setup** rebuilt as a single canvas, with the schedule you set being the schedule you see.",
      "**The email composer** with Helio AI inside the canvas: one-tap rewrites, subject variations, and full control left with the writer.",
      "**A 52 component Figma system** on tokens and variants, aligned to Helio's design language.",
      "**Progressive depth**, so advanced cadences and rules are reachable without being in everyone's way.",
    ],

    themes: [
      ["One canvas", "Schedule and write in the same place. Every page boundary I removed was a mode switch removed."],
      ["Assist, never automate", "AI suggests, the writer decides. \"Suggest me a subject line\" beat \"write the email for me\" in every session."],
      ["One language", "Aurora joins Helio's design language rather than negotiating with it. Same control, same behaviour, everywhere."],
    ],
    vennLabels: ["One canvas", "Assist", "One language"],
    vennCenter: "One flow",

    dives: [
      {
        eye: "Recurring setup",
        title: "The schedule you set is the schedule you see.",
        bullets: [
          "The old flow buried the campaign type three levels deep and kept the schedule on a separate preview screen from the rules that produced it.",
          "Now the type is one step, the rules and the cadence sit on one page, and there is no separate preview because there is nothing to preview against.",
          "Weekly, monthly and custom cadences share **one layout**. Learn how to read one and you can read all three.",
          "Depth did not get deleted, it got folded. Advanced fields are one disclosure away rather than in front of everybody.",
        ],
        shot: ["04_RBJ_Properties_Weekly.jpg", "Recurring campaign properties, weekly cadence"],
      },
      {
        eye: "The composer",
        title: "Selecting a block surfaces its tools and moves nothing else.",
        rev: true,
        bullets: [
          "The composer is where writers actually spend their day, so it had to stay calm while still carrying a lot of capability.",
          "Selecting a block reveals the tools that apply to that block. The rest of the canvas holds still, which is what makes the surface feel quiet.",
          "The blocks library is shared with the rest of the suite, so a component learned in Aurora is a component learned everywhere.",
          "Content comes first here in a way it never did in the old product. The machinery is a tab away, not a prerequisite.",
        ],
        shot: ["08_Composer_Text_Block_Selected.jpg", "Email composer with a text block selected"],
      },
      {
        eye: "AI in the canvas",
        title: "The writer stays in charge, which is the whole design.",
        bullets: [
          "Helio AI opens **inside the block being edited**. No new page, no copy-paste round trip, no lost formatting.",
          "The actions are the ones writers actually asked for in testing: make it shorter, make it more formal, rewrite this.",
          "Subject variations appear where you set the subject, as options to pick from rather than a decision already made.",
          "Every suggestion can be accepted, edited or dismissed. Nothing is applied automatically, because the moment it is, writers stop trusting it.",
        ],
        shot: ["10_Composer_Open_with_AI_Context_Menu.jpg", "Helio AI menu open inside a content block"],
      },
    ],

    constraints: [
      [
        "01",
        "The rebuild set the clock",
        "Engineering was replacing the platform underneath me, and design had to land inside their sprint boundaries. Anything not ready when a surface was rebuilt would ship as the old interface in new paint. That is why the scope box was drawn hard and early, and why the design system was started in week one rather than at the end.",
      ],
      [
        "02",
        "Enterprise depth was not mine to cut",
        "Large European customers run genuinely nuanced campaigns, and simplification that removed capability would have been a downgrade dressed as a redesign. So depth got folded rather than deleted: progressive disclosure everywhere, with the advanced path one step away and never in the default view.",
      ],
      [
        "03",
        "Helio's design language was already decided",
        "The suite-wide look was rolling out while I worked, and Aurora's job was to join it, not to argue with it. I treated that as an asset rather than a limit. It settled a hundred small decisions for free and let me spend the time on flow instead of on style.",
      ],
    ],

    impact: [
      ["3 clicks", "1 click", "to schedule a recurring campaign"],
      ["3 pages", "1 canvas", "to schedule, write and ship"],
      // Keep both sides of every shift short. Long values wrap onto a second
      // line and the cell stops matching the five beside it.
      ["Off-page", "Inline", "where a writer gets help writing"],
      ["0", "52", "components shared across the suite"],
      ["1", "4", "products building from one library"],
      ["Pasted", "Drafted", "how copy reaches the email"],
    ],
    measured: [
      ["3:1", "reduction in clicks to set up a recurring campaign"],
      ["52", "components shipped, adopted by three sister products with no new design work"],
      ["Half", "the time to build a new screen once the system landed"],
    ],
    impactNote:
      "Before figures describe Aurora as I inherited it, timed during round two on the original build. After figures were measured on the rebuilt surfaces at handoff. Client and parent company are anonymised under NDA.",

    // Mechanics behind each method, rendered as the "How it was run" notes.
    how: {
      audit:
        "One bar, applied literally: I gave myself the job of shipping a recurring campaign in the existing product with no help, and wrote down every point I had to guess or go looking. Then a proper heuristic sweep over the whole thing, severity 0 to 4. Doing it in that order matters, because after a week inside a product you stop being able to see what confused you on day one.",
      personas:
        "Drawn from the support ticket backlog as much as from interviews. I read six months of tickets and sorted them by what the person was trying to finish, which produced three clusters that mapped onto three genuinely different jobs. Interviews then tested whether those clusters were real people or just three kinds of bad day.",
      explorations:
        "Paper first and deliberately ugly, so nobody could react to the styling. Two directions per problem, never one, and each pinned to a single question: can the schedule and the content live on one canvas, and where does AI have to sit before a writer stops leaving the product to use it.",
      validation:
        "Five rounds, five participants per round, moderated and task-based. I timed the setup rather than asking how it felt, because everyone says a flow feels fine. Each round changed one thing so the next round was testing that change. Round four was the micro-copy pass I had almost not scheduled, and it saved more build time than any layout change in the project.",
    },

    iterations: [
      [
        "The one-canvas concept survived round one intact",
        "I expected to defend it. Instead marketers asked why the product had not always worked this way. That told me the switching cost was the real complaint and the feature list never had been, so I stopped hedging and committed the rest of the design to it.",
      ],
      [
        "Three clicks became two, then one",
        "I timed setup rather than asking people how it felt. Merging the schedule step into the content step removed the last boundary and took it to a single click, which is where the 3:1 number comes from.",
      ],
      [
        "Writers wanted control over the output, not more of it",
        "Early AI concepts generated a whole email. Every writer in the session pushed back on it. Rewriting the feature as one-tap adjustments to their own text, make it shorter, more formal, rewrite this, flipped it from threatening to useful in a single round.",
      ],
      [
        "The labels were the last real bug",
        "By round four we were not fixing layouts any more, we were fixing words. \"Cadence\" became \"how often\". Internal names came out. That pass saved more build time than any layout change I made, and I had almost not scheduled it.",
      ],
      [
        "A dry run before handoff, not after",
        "I walked the build team through every screen and tied each one to its requirement before development started rather than answering questions during it. Two gaps surfaced in that session that would otherwise have been found in QA.",
      ],
    ],

    lessons: {
      title: "Count the switches, not the clicks.",
      bullets: [
        "**Switching is the cost users actually feel.** Clicks are how you measure it, but the thing people were complaining about was losing their place, and their momentum, three times per campaign.",
        "**AI has to be able to lose an argument.** The version that wrote the email for you tested worse than the version that edited what you wrote. Assist beat automate every time.",
        "**Micro-copy deserves its own round.** I treated it as polish and it turned out to be the highest-leverage pass in the project.",
        "**Build the library where it will be borrowed.** The 52 components got picked up by three sister products. That outlived both flows I designed, and it was the part I nearly scheduled last.",
      ],
    },

    // Sketches and wireframes. Aurora has no user-flow diagram and no captured
    // screenshots of the inherited product, so this band carries the early
    // thinking and the audit carries the "before" in words and numbers.
    sketches: [
      ["sketch_01_rbj_weekly.svg", "One page, one flow. Schedule and content on the same canvas instead of a wizard."],
      ["sketch_02_helio_panel.svg", "The writer stays put. AI arrives as a menu inside the block they are editing."],
    ],
    wireframes: [
      ["wf_03_type_tab.svg", "Campaign type in one step, where the old flow buried it three levels deep"],
      ["wf_04_weekly_scheduling.svg", "Rules and cadence on one page, with no separate preview screen"],
      ["wf_05_helio_quick_actions.svg", "One-tap AI actions inside the block being edited"],
      ["wf_06_subject_variations.svg", "Subject alternatives offered where the subject is set"],
    ],

    designSystemNote:
      "Built on tokens, variants and auto-layout in Figma, aligned to Helio's design language rather than to Aurora's history. Three sister products adopted it with no new design work, which is the only adoption metric I trust. It is also the reason a new screen went from a day to half a day.",

    // The screens not already shown inline, so the gallery adds to the story
    // rather than repeating it. 03, 04, 07, 08, 10 and 11 appear in the bands
    // above; if you move one out of a band, add it back here.
    screens: [
      ["01_RBJ_Type_Tab_Basic_Fields.jpg", "Campaign type, basic fields"],
      ["02_RBJ_Type_Tab_All_Fields.jpg", "Campaign type, all fields revealed"],
      ["05_RBJ_Properties_Monthly.jpg", "Properties, monthly cadence"],
      ["06_RBJ_Properties_Custom.jpg", "Properties, custom cadence"],
      ["09_Helio_AI_Make_Shorter_Response.jpg", "Make it shorter, applied to the writer's own text"],
    ],
    screensNote:
      "The shipped surfaces, in Helio's design language. Client branding is removed and the product is anonymised under NDA.",
  },
};
