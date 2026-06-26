// Aurora case study data - verbatim sections, copy & image references from
// the original case study HTML provided by Faraz. Visual styling is portfolio-driven.
const A = (n) => `/aurora/${n}`;

export const aurora = {
  slug: "aurora",
  title: "Aurora",
  subtitle:
    "Transforming the experience of a marketing campaign platform. I redesigned the Recurring Batch Journey configurator and embedded an in-canvas AI composer (Helio AI) during a parallel AngularJS-to-Angular migration. The work cut clicks for campaign setup 3:1 and brought the product in line with Helio's unified brand language.",
  hero: {
    stats: [
      { value: "3:1", label: "Clicks Reduced" },
      { value: "52", label: "Components Shipped" },
      { value: "3", label: "Surfaces Reused" },
    ],
  },

  // --- 01 OVERVIEW ---
  overview: {
    headline: "Project Overview",
    tldrTitle: "TL;DR: Executive Summary",
    tldr:
      "I cut campaign setup from three clicks to one. I put an AI composer right inside the email canvas, so writers stopped pasting copy back and forth from ChatGPT. Aurora is a B2B marketing-tech product in Europe, acquired by its parent company Helio. I used its AngularJS-to-Angular migration as the window to fix a legacy, engineer-led UI. I redesigned the Recurring Batch Journey configurator, embedded the Helio AI composer, and built a Figma design system that brought Aurora in line with Helio's brand. Every asset shipped dev-ready, linked to a user story.",
    facts: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Duration", value: "~5 Months" },
      { label: "Team", value: "2 PMs, 5 Devs, 1 QA, 2 Designers" },
      { label: "Platform", value: "Web (B2B SaaS · Europe)" },
      { label: "Tools", value: "Figma, FigJam, Azure DevOps" },
    ],
    process: [
      { step: "01", title: "Discovery", duration: "3 weeks" },
      { step: "02", title: "Research", duration: "4 weeks" },
      { step: "03", title: "Design", duration: "10 weeks" },
      { step: "04", title: "Validation", duration: "3 weeks" },
      { step: "05", title: "Handoff", duration: "2 weeks" },
    ],
    intro:
      "Aurora is a B2B marketing-tech platform for large European enterprises. Helio acquired it to build out a suite of marketing products. That gave us an opening. We could align Aurora with Helio's UX vision while we finished a long-planned move from AngularJS to modern Angular.",
    intro2:
      "The legacy product was engineer-led. It worked, but it was dense, inconsistent, and visually fragmented. Marketers fought cluttered config panels to ship a recurring campaign. Copywriters had no AI in the composer, so they wrote in ChatGPT and pasted back.",
    contextTitle: "Project Context",
    contextBody:
      "The product was migrating from AngularJS to Angular; the platform team treated that engineering work as a once-in-a-decade window to also reduce cognitive load, simplify the flows, and create a consistent brand experience aligned with Helio's design language.",
    metadata: [
      { k: "Industry", v: "Marketing Technology" },
      { k: "Sector", v: "Digital Marketing & Relationship Management" },
      { k: "Client", v: "B2B · Large Enterprise · Europe" },
      { k: "Parent", v: "Helio" },
      { k: "My Role", v: "Lead Product Designer" },
    ],
  },

  // --- 02 PROBLEM ---
  primaryUsers: [
    { label: "CRM / Campaign Managers", desc: "Marketers who build and ship recurring campaigns and need setup to be fast and ROI easy to prove." },
    { label: "Marketing Ops Leads", desc: "Owners of cadence and governance across many brand portfolios, who need standardization and audit trails." },
    { label: "Copywriters", desc: "Writers producing on-brand copy who lean on the in-canvas AI composer to beat the blank page." },
  ],

  problem: {
    headline: "The Problem",
    quote:
      "I spend more time configuring the schedule than I do writing the actual campaign. By the time the cadence is set, I've lost the creative momentum.",
    quoteAttribution: "Senior CRM Manager, Hospitality client (Discovery interview, Week 2)",
    challenges: [
      { t: "No Cohesive Brand Language", d: "The UI was fragmented, nothing matched. Customers were already filing tickets about confusing flows, and it got worse once Helio rolled out a unified brand language Aurora didn't share." },
      { t: "Need for Enhanced Features", d: "The features for the most important use cases were still basic. Customers kept asking for the depth that would let them run nuanced campaigns, and the legacy UI just couldn't express it." },
      { t: "Inconsistent User Experience", d: "The same job had different flows and different UI depending on where you landed. With no shared system, every new feature looked and behaved a little differently. That wore down customer trust." },
      { t: "Design in Silos", d: "Designers on other Helio products worked in silos, so flows and UI drifted apart across the suite. No cross-product collaboration meant a different experience everywhere you looked." },
    ],
    scopeIntro:
      "I drew a hard box around the work. The migration window was finite, so I went after the two highest-friction surfaces only: recurring journey configuration and the email composer. I built a reusable design system in parallel.",
    inScope: [
      "Recurring Batch Journey configuration workflow",
      "Tabbed Type / Content / Properties structure",
      "Scheduling: Minute / Hourly / Daily / Weekly / Monthly / Custom",
      "Helio AI integration inside the text-block composer",
      "AI controls: shorten, rewrite, change tone, generate variations",
      "Subject-line AI generation & 5-option variations",
      "Reusable Figma design system aligned with Helio's brand",
      "Dev-ready assets linked to Azure DevOps user stories",
    ],
    outOfScope: [
      "Push notification & SMS composer redesigns",
      "Backend scheduling engine & queue behavior",
      "Audience builder & segmentation rules",
      "Reporting and analytics dashboards",
      "Salesforce Commerce Cloud integration UX",
      "Personalization token system",
      "API-triggered journey flows (no UI surface)",
    ],
    hypothesisTitle: "Primary Hypothesis",
    hypothesis:
      "My bet was simple: collapse journey setup into a three-tab guided flow (Type, Content, Properties), drop Helio AI right into the composer, and back both with one Figma design system. Do that and clicks fall, scheduling errors drop, and Aurora finally feels like Helio.",
    hypothesisBullets: [
      "3:1 click reduction for setup",
      "Schedule error rate below 15%",
    ],
    sideHypotheses: [
      { t: "Engagement", d: "Embedding Helio AI in the text-block editor will increase composer dwell time and reduce off-platform copy authoring by 50% as writers iterate inside the tool instead of pasting back from external editors." },
      { t: "Trust", d: "Showing a computed schedule preview (\"The content will be sent weekly on Wednesday at 09:00 AM in Europe/Paris\") at every cadence step will reduce setup errors by 60% and lower support tickets about send-time confusion." },
    ],
    assumptions: [
      "Marketers prefer guided multi-step flows over single dense forms for complex configurations",
      "Most recurring journeys use Daily or Weekly cadence (validated: 78% of historical sends)",
      "AI suggestions are an aid, not a replacement. Final copy must stay author-controlled",
      "The new Angular component library can absorb design tokens without breaking semantic versioning",
    ],
    risks: [
      "Helio AI latency could disrupt flow if generations exceed 3 seconds",
      "Migration timeline pressure could force shipping without design system completion",
      "Sales engineers rely on the legacy flow for demos and may resist transition",
      "AI generation quality for non-English content was unproven at kickoff",
    ],
    keyInsight:
      "82% of users surveyed said \"scheduling clarity\" was a bigger pain than \"scheduling flexibility.\" They didn't want more options. They wanted to be confident about the options they picked.",
  },

  // --- 03 RESEARCH ---
  research: {
    headline: "Research",
    auditTitle: "UX Audit",
    auditIntro:
      "I audited the existing Recurring Batch Journey and the message composer end to end. The same three failures kept showing up: setup, scheduling comprehension, and content authoring. The rigid AngularJS codebase made each one harder to fix.",
    auditFindings: [
      { t: "Cluttered Journey Form", d: "14 fields on first load, no progressive disclosure, no help, no validation until you hit submit, and 33% of new users bailed at the audience step." },
      { t: "Hidden Schedule Logic", d: "\"Custom\" cadence was the default but never explained, and weekdays could be set from two controls that disagreed on timezone." },
      { t: "Composer Friction", d: "The text block was pure freeform with no formatting, no AI, no variations, no tone check, and subject lines got nothing past a 50-character box." },
      { t: "Accessibility Gaps", d: "Labels weren't tied to inputs, focus order broke between rail and panel, the schedule grid was unreachable by keyboard, and WCAG AA failed on 7 of 12 screens." },
    ],
    heuristics: [
      { t: "Visibility of System Status", d: "No schedule preview, no live contact count when filters change, no indication of save state", s: "4/10" },
      { t: "Match Between System and Real World", d: "\"Recurring Batch Journey\" is internal terminology. Customers say \"recurring campaign\" or \"automation\"", s: "3/10" },
      { t: "User Control and Freedom", d: "No way to duplicate a journey, undo is inconsistent across panels, and no draft auto-save", s: "5/10" },
      { t: "Consistency and Standards", d: "Mix of pill navigation, breadcrumbs, and step indicators across what should be parallel flows", s: "4/10" },
      { t: "Error Prevention", d: "Invalid date combinations are accepted, no warning for schedule conflicts with active journeys", s: "3/10" },
      { t: "Recognition Rather than Recall", d: "Cadence terminology shown without examples; users can't recall what \"Custom time frame\" produces", s: "5/10" },
    ],
    stakeholders: [
      { role: "Head of Product", quote: "The Angular migration is once-in-a-decade leverage. We use it to fix what engineering-led design left broken, not just port it forward.", priority: "Reduce cognitive load" },
      { role: "Engineering Lead", quote: "I'm open to AI integration but we cannot block journey creation on model latency. Streaming output with graceful fallbacks is non-negotiable.", priority: "Performance resilience" },
      { role: "Helio Design Director", quote: "Aurora needs to feel like part of the Helio family. A reusable design system aligned with our brand language is non-negotiable for this release.", priority: "Brand alignment" },
    ],
    competitiveTable: {
      headers: ["Feature", "Our Product", "Braze", "HubSpot", "SFMC"],
      rows: [
        ["Visual schedule preview", "No", "Yes", "Partial", "No"],
        ["In-canvas AI composer", "No", "Partial", "Yes", "No"],
        ["Subject-line variations", "No", "Yes", "Yes", "Partial"],
        ["Tone adjustment", "No", "No", "Yes", "No"],
        ["Multi-cadence scheduler", "Partial", "Yes", "Yes", "Yes"],
        ["Audience filter live count", "No", "Yes", "Yes", "Yes"],
      ],
    },
    findings: [
      { t: "Three Clicks to One", d: "I mapped the create-a-journey flow and found people spending 3 clicks on what was really one decision, so the tabbed flow brought common cases down to a single click." },
      { t: "Composer Workarounds", d: "64% of CRM managers drafted in ChatGPT or Google Docs first and pasted back, and Participant 7 said it plainly: \"the tool is for sending, ChatGPT is for writing.\"" },
      { t: "Failed Test Queries", d: "The dashboard only surfaced failed test queries, which is fine for QA and useless for the alerts marketers actually wanted from lists, journeys, and tasks." },
      { t: "Tooltip Truncation", d: "Marketers packed the journey name with its purpose, then watched it get truncated, so they had to hover for a tooltip just to read what they'd written." },
      { t: "Yesterday-Only Dashboard", d: "Dashboards showed only yesterday's journeys, so anyone judging a full FY quarter had to export the data and analyze it somewhere else." },
      { t: "Setup Anxiety", d: "71% of test users got the cadence wrong on the first try, thanks to a vague \"Custom\" default and no plain-language summary of what would send." },
    ],
  },

  // --- 04 INSIGHTS ---
  insights: {
    headline: "Insights",
    personas: [
      { name: "Maya Khan", role: "CRM Manager · Age 31", initials: "MK", goals: ["Ship the weekly newsletter in <30 minutes", "A/B test subject lines without leaving the tool", "Justify campaign ROI to leadership"], frustrations: ["Hates re-entering audience filters", "Context-switches to ChatGPT to write", "No way to preview cadence quickly"] },
      { name: "Tomás Rivera", role: "Marketing Ops Lead · Age 38", initials: "TR", goals: ["Standardize cadences across 12 brand portfolios", "Govern launch windows with audit trails", "Compare performance across past quarters"], frustrations: ["Dashboard only shows yesterday's data", "Truncated journey names break workflows", "Hard to onboard new ops analysts"] },
      { name: "Riya Joshi", role: "Junior Copywriter · Age 25", initials: "RJ", goals: ["Match each brand's voice and tone", "Generate variations to compare quickly", "Learn from suggested phrasing"], frustrations: ["Blank-page paralysis on body copy", "No in-tool feedback on writing", "Subject lines feel like guesswork"] },
    ],
    designGoals: [
      { t: "Streamline Journey Setup", d: "Consolidate the journey configurator into a three-tab flow (Type → Content → Properties) with inline validation and preview at every step. Reduce 3 clicks to 1 for common cases." },
      { t: "Demystify Cadence", d: "Always show a plain-English summary, such as \"The content will be sent weekly on Wednesday at 09:00 AM in Europe/Paris,\" so users never have to interpret raw settings." },
      { t: "Bring AI to the Canvas", d: "Surface Helio AI from the text block, subject line, and preheader. Never make it a separate page or detour. Quick actions and 5-option variation pickers." },
      { t: "Preserve Author Control", d: "AI generates options; the writer always selects, never auto-replaces. Every suggestion is reversible and previewable with explicit \"Insert to text block.\"" },
      { t: "Build Reusable System", d: "Ship a Figma design system aligned with Helio's brand language. Components, variables, and styles linked to Azure DevOps user stories for engineering pickup." },
      { t: "Design for Trust", d: "Surface contact counts, timezone resolution, dashboard warnings and alerts inline so users can verify what will happen before they ship." },
    ],
    keyInsight:
      "Power CRM managers ran 4-6 campaigns per week but spent ~22 minutes on each. 14 of those minutes went to scheduling and copywriting, the two areas with zero in-product support.",
  },

  // --- 05 DESIGN ---
  design: {
    headline: "Design",
    sketchesIntro:
      "Early divergent exploration on paper before committing to a direction. Sketching let me move fast across layouts and AI-panel placements before locking the structure with the team.",
    sketches: [
      { src: A("sketch_01_rbj_weekly.svg"), tag: "Hand-drawn", title: "Journey · Weekly Cadence", desc: "Tabbed configurator with persistent navigation. Audience, Timezone, Activation, Scheduling stacked as labeled blocks. Cadence pills (Min/Hr/Day/Wk/Mo/Custom) with day-of-week chips below." },
      { src: A("sketch_02_helio_panel.svg"), tag: "Hand-drawn", title: "Composer · Helio AI Panel", desc: "Email canvas on the left with a selected text block, Helio AI panel docked on the right. Quick-action chips (Shorter / Tone / Re-write / Spelling), 5-variation generator, and explicit Insert-to-text-block CTA." },
    ],
    wireframesIntro:
      "Graybox wireframes locked the information hierarchy and layout density before any visual styling. Used in week-3 reviews to validate flow with PMs and stakeholders without anyone debating colors.",
    wireframes: [
      { src: A("wf_03_type_tab.svg"), tag: "Lo-fi · 01", title: "Journey · Type Tab", desc: "Asset selection, naming, folder path, labels & description, composed as discrete blocks to support per-field validation and progressive disclosure." },
      { src: A("wf_04_weekly_scheduling.svg"), tag: "Lo-fi · 02", title: "Journey · Weekly Scheduling", desc: "Cadence pill nav with chips for day selection and time-of-day inputs per day. Locked the table-of-times layout before applying Aurora brand styling." },
      { src: A("wf_05_helio_quick_actions.svg"), tag: "Lo-fi · 03", title: "Composer · AI Quick Actions", desc: "Composer left, Helio AI panel right. Action chip grid (Shorter / Tone / Re-write / Spelling) above the prompt input. Confirmed the 2x2 grid pattern over a vertical list." },
      { src: A("wf_06_subject_variations.svg"), tag: "Lo-fi · 04", title: "Composer · Subject-Line Variations", desc: "Five-option variation picker stacked vertically. Locked the radio-style selection pattern and the regeneration button before color and type pass." },
    ],
    finalIntro:
      "Hi-fidelity screens shipped to engineering via Figma, with each frame linked to its Azure DevOps user story. Aurora brand teal (#2B8679) and the Aurora Engage component library applied uniformly. 11 screens across the Recurring Batch Journey configurator and the Helio AI composer.",
    finalScreens: [
      { src: A("01_RBJ_Type_Tab_Basic_Fields.jpg"), tag: "Hi-fi · RBJ · 01", title: "RBJ · Type Tab: Basic Fields", desc: "The flow opens on just name, folder path, and asset, with everything advanced tucked behind the \"All Fields\" toggle." },
      { src: A("02_RBJ_Type_Tab_All_Fields.jpg"), tag: "Hi-fi · RBJ · 02", title: "RBJ · Type Tab: All Fields", desc: "\"All Fields\" adds API Name, Labels, Description, Asset, and the Campaign / Message analytics tags for power users, without bloating the default view." },
      { src: A("03_RBJ_Content_Tab.jpg"), tag: "Hi-fi · RBJ · 03", title: "RBJ · Content Tab", desc: "You pick an asset from published messages, templates, mobile-push, or SMS, and a live preview confirms its shape and the analytics tag pass-through." },
      { src: A("04_RBJ_Properties_Weekly.jpg"), tag: "Hi-fi · RBJ · 04", title: "RBJ · Properties: Weekly Schedule", desc: "Audience, segment, timezone, and activation window sit above a weekly cadence with day chips and per-day times, and a plain-language banner spells out exactly what sends." },
      { src: A("05_RBJ_Properties_Monthly.jpg"), tag: "Hi-fi · RBJ · 05", title: "RBJ · Properties: Monthly Specific", desc: "Monthly cadence uses a 1-31 day grid with a timezone-resolved line: \"the scheduled time will be executed in Europe/Paris UTC+01:00\"." },
      { src: A("06_RBJ_Properties_Custom.jpg"), tag: "Hi-fi · RBJ · 06", title: "RBJ · Properties: Custom Cadence", desc: "Custom cadence catches the long tail marketers asked for: first-week-of-month, last-Sunday-of-quarter, and the rest." },
      { src: A("07_Composer_Empty_AI.jpg"), tag: "Hi-fi · Helio AI · 07", title: "Composer · Helio AI Empty State", desc: "One input, \"How can I help you today?\", and nothing else, so the panel waits for the writer to lead instead of throwing an option salad up front." },
      { src: A("08_Composer_Text_Block_Selected.jpg"), tag: "Hi-fi · Helio AI · 08", title: "Composer · Text Block Selected", desc: "Highlight a text block and the Helio AI panel wakes up with \"How can I help you today?\", ready for a prompt or a quick-action click." },
      { src: A("09_Helio_AI_Make_Shorter_Response.jpg"), tag: "Hi-fi · Helio AI · 09", title: "Helio AI · Make Shorter Response", desc: "The response streams in inline while your editable prompt stays pinned above it, so you can compare and follow up with the quick-action chips below." },
      { src: A("10_Composer_Open_with_AI_Context_Menu.jpg"), tag: "Hi-fi · Helio AI · 10", title: "Composer · Open with AI Menu", desc: "Right-click a text block for the shortcut menu (Open with AI, Make it shorter, Change the tone, Check spelling, Re-write) and skip the trip to the side panel." },
      { src: A("11_Composer_Blocks_Library_Panel.jpg"), tag: "Hi-fi · Helio AI · 11", title: "Composer · Blocks Library Panel", desc: "The right-rail Blocks library, with Rows, Content, and the Style / Variables / Links / Attachments tabs, lets writers build the email without ever leaving the canvas." },
    ],
  },

  // --- 06 DESIGN SYSTEM ---
  designSystem: {
    headline: "Design System",
    intro:
      "In parallel with the Recurring Batch Journey and Helio AI work, I built the Aurora Engage UI Kit in Figma. It's a reusable design system that aligned Aurora with Helio's parent brand language. Tokens, components, and patterns were linked directly to Azure DevOps user stories so engineering could pick them up without ambiguity. The kit is the source of truth for every screen shown in section 05.",
    colors: [
      { name: "Aurora / 500", hex: "#2B8679" },
      { name: "Aurora / 300", hex: "#5FA59A" },
      { name: "Aurora / 50", hex: "#E8F2F0" },
      { name: "Neutral / 900", hex: "#0F172A" },
      { name: "Neutral / 600", hex: "#475569" },
      { name: "Neutral / 200", hex: "#E5E7EB" },
      { name: "Danger / 500", hex: "#DC2626" },
      { name: "Warning / 500", hex: "#D97706" },
    ],
    typography: [
      { t: "Display / H1", v: "24/32 · 800" },
      { t: "Heading / H2", v: "20/28 · 700" },
      { t: "Subheading / H3", v: "16/24 · 700" },
      { t: "Label / Strong", v: "14/20 · 600" },
      { t: "Body / Default body copy", v: "13/20 · 400" },
      { t: "Caption · ALL CAPS", v: "11/16 · 600" },
    ],
    spacing: [
      { t: "sp-1", v: "4px" }, { t: "sp-2", v: "8px" }, { t: "sp-3", v: "12px" }, { t: "sp-4", v: "16px" },
      { t: "sp-5", v: "24px" }, { t: "sp-6", v: "32px · section default" }, { t: "sp-7", v: "48px" }, { t: "sp-8", v: "64px" },
    ],
    tokens: [
      ["color.brand.primary", "#2B8679"],
      ["color.text.primary", "#0F172A"],
      ["color.border.default", "#E5E7EB"],
      ["radius.sm", "4px"],
      ["radius.md", "8px"],
      ["radius.lg", "14px"],
      ["shadow.card", "0 1px 2px rgba(0,0,0,.04)"],
      ["motion.snap", "120ms cubic-bezier(.4,0,.2,1)"],
    ],
    componentCategories: [
      "Buttons", "Inputs", "Selects", "Toggles", "Checkboxes", "Radio", "Tabs", "Chips",
      "Status Badges", "Tags", "Avatars", "Alerts", "Toasts", "Tooltip", "Pagination",
      "Breadcrumbs", "Progress", "Date Picker", "Cards", "Modal", "Empty State", "Table",
    ],
    systemOutcomes:
      "The Aurora Engage UI Kit shipped with 52 reusable components, 8 core token sets, and full coverage of the Recurring Batch Journey + Helio AI flows. Three other product surfaces (Audience Builder, Reports, Admin) back-filled from the kit with zero new design work.",
    crossProduct:
      "To break the silo problem, the Aurora Engage UI Kit was reviewed monthly with designers from other Helio products. Shared tokens and a documented contribution model ended the \"every new feature looks slightly different\" pattern that had eroded brand trust.",
  },

  // --- 07 VALIDATION ---
  // --- 07 ITERATIVE TESTING ---
  validation: {
    headline: "Refined through iterative design, not a formal usability study",
    intro:
      "I didn't run a formal usability study on this engagement. Instead the work was sharpened through repeated design iterations and reviews with product and engineering: rough sketches to pressure-test the concept, graybox wireframes to lock hierarchy, hi-fi against the new design system, and sign-off before handoff.",
    rounds: [
      { n: 1, t: "Concept sketches", d: "Sketched the tabbed configurator and the docked AI composer by hand to agree on the basic shape with product before committing to pixels." },
      { n: 2, t: "Graybox wireframes", d: "Locked information hierarchy and density (the cadence pills, the per-day time table, the AI quick-action grid) in grayscale and reviewed them with PMs and stakeholders, so no one debated color yet." },
      { n: 3, t: "Hi-fi on the design system", d: "Applied the Aurora Engage UI kit and pressure-tested every component and state, surfacing gaps that fed straight back into the system tokens." },
      { n: 4, t: "Migration-aligned refinement", d: "Worked alongside engineering through the AngularJS to Angular migration to keep the design implementable, refining edge cases like the Custom cadence that proved more complex than expected." },
      { n: 5, t: "Stakeholder sign-off & handoff", d: "Walked the final Figma prototype through product and engineering for sign-off, with each frame linked to its user story before dev handoff." },
    ],
    outcome:
      "The flow evolved from a cluttered, multi-action configurator into a focused tabbed journey with an in-canvas AI composer, signed off by product and engineering before handoff. The honest gap: without a formal usability study, the next step is validating the flow with real campaign managers.",
  },

  // --- 08 REFLECTION ---
  impact: {
    headline: "Key learnings & reflection",
    wentWell: [
      "The three-tab structure passed product and engineering review in week 1, so implementation could start early.",
      "Helio AI integration stayed on schedule thanks to a streaming-first contract negotiated with backend in week 3.",
      "The plain-language cadence summary (\"This will send every Wednesday at 9am\") was the change product and stakeholders pointed to most as making the schedule unambiguous.",
      "The Aurora Engage UI kit back-filled three other product surfaces with no extra design work across the Helio portfolio.",
    ],
    differently: [
      "I didn't run a formal usability study on this project. Next time I'd validate the flow with real campaign managers before handoff, not just internal and stakeholder review.",
      "Should have prototyped the Custom cadence earlier. Its complexity surprised the team in week 6 and forced a re-spec.",
      "Would partner with Sales Engineering on a \"demo path\" so the new flow is faster to show, not just faster to use.",
      "More attention to non-English AI generation quality. We shipped English-only and left localisation to a follow-up release.",
    ],
  },
};
