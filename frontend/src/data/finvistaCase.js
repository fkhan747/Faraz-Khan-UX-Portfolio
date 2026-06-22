// FinVista case study data - verbatim sections, copy & image references from
// the original case study HTML provided by Faraz. Visual styling is portfolio-driven.
const F = (n) => `/finvista/${n}`;

export const finvista = {
  slug: "finvista",
  title: "FinVista",
  subtitle:
    "Re-imagining a digital lending platform for quick, hassle-free finance, serving millions across urban and rural India.",
  hero: {
    stats: [
      { value: "6", label: "Loan Products Designed" },
      { value: "11", label: "Step Loan Journey" },
      { value: "100+", label: "Components Built" },
    ],
  },

  // --- 01 PROJECT OVERVIEW ---
  overview: {
    headline:
      "Designing a scalable lending experience for India's next billion borrowers",
    intro:
      "FinVista is a consumer-facing digital lending platform operated by a leading Indian NBFC, a subsidiary of one of India's largest automotive conglomerates. The platform serves customers across 500+ cities, offering loans for two-wheelers, consumer durables, personal needs, used vehicles, tractors, and more.",
    tldrTitle: "TL;DR: Executive Summary",
    tldr:
      "I led the UX design of a native Android Loan Origination System for a leading Indian NBFC, covering 6 loan product journeys with a focus on the Two-Wheeler flow. Through competitive analysis, persona development, and 5 rounds of iterative prototyping, I created a scalable design system with 100+ components and turned a complex, paper-heavy loan application into an 11-step digital journey. The result was faster processing, less reliance on agents, and higher completion rates.",
    facts: [
      { label: "Role", value: "Sr. UX Lead" },
      { label: "Duration", value: "5 Months" },
      { label: "Team", value: "2 Designers, 1 PM, 8 Devs" },
      { label: "Platform", value: "Native Android App" },
      { label: "Tools", value: "Figma, FigJam, JIRA" },
      { label: "Scope", value: "End-to-End LOS" },
    ],
    process: [
      { step: "01", title: "Discovery", duration: "3 weeks" },
      { step: "02", title: "Research", duration: "3 weeks" },
      { step: "03", title: "Design", duration: "10 weeks" },
      { step: "04", title: "Validation", duration: "4 weeks" },
    ],
    productLandscape: {
      intro:
        "The platform supports six distinct loan products, each with its own journey flow. I designed all six, but this case study focuses on the Two-Wheeler (TW) Loan, the highest-volume product.",
      products: [
        {
          name: "Two-Wheeler Loan",
          badge: "PRIMARY FOCUS",
          desc: "Loans for new and used two-wheelers: bikes, scooters, electric, and mopeds. Available via agent-assisted or customer DIY flows. The highest-volume product.",
        },
        {
          name: "Consumer Durable Loan",
          desc: "Financing for mobiles, refrigerators, and washing machines. Completed by agents in stores or via customer-initiated DIY scheduling.",
        },
        {
          name: "Cross-Sell Personal Loan",
          desc: "Pre-approved personal loans for existing customers based on eligibility. Assisted or self-service via the app.",
        },
        {
          name: "Used Car Loan",
          desc: "Financing for used four-wheelers, available for agents and customers. Supports new and existing customer onboarding.",
        },
        {
          name: "Tractor Loan",
          desc: "Comprehensive financing for brand-new tractors with up to 90% funding and streamlined documentation.",
        },
        {
          name: "Three-Wheeler Loan",
          desc: "Financing for new three-wheelers via dealership agents or customer self-service.",
        },
      ],
    },
  },

  // --- 02 PROBLEM ---
  problem: {
    headline:
      "A lending platform that needed to work for everyone, from tech-savvy urbanites to first-time borrowers in rural India",
    intro:
      "The NBFC's existing loan process was paper-heavy, agent-dependent, and fragmented. The challenge: design a native Android app that served multiple user personas and loan products, scaled across urban and rural markets, and stayed compliant with regulation throughout.",
    coreChallenge:
      "Design a native Android application with a scalable structure, dynamic reusable components, and a future-proof solution that enhances accessibility and user experience across all types of smartphones and devices.",
    dimensions: [
      {
        title: "Multi-Persona Complexity",
        desc: "Three distinct user groups: customers (DIY), sales centre executives, and dealership agents. Each had different goals, technical literacy, and interaction contexts.",
      },
      {
        title: "Information Overload",
        desc: "Loan applications involve 40+ data fields across personal details, KYC, employment, income, vehicle selection, and bank verification. Presenting this on mobile without overwhelming users required careful IA.",
      },
      {
        title: "Device & Network Diversity",
        desc: "Users range from latest flagships on 5G to entry-level Android devices on 2G connections in rural areas. The app needed to perform reliably across this entire spectrum.",
      },
      {
        title: "Trust & Security",
        desc: "First-time borrowers are cautious about sharing financial information digitally. The interface needed to build trust at every step while complying with RBI regulations.",
      },
      {
        title: "Product Scalability",
        desc: "Six distinct loan products, each with different data requirements and eligibility criteria, needed a shared component foundation that still left room for product-specific variations.",
      },
      {
        title: "Accessibility Gaps",
        desc: "A mobile-first approach has drawbacks for complex processes like loan applications: discoverability, varied user preferences, performance, and technical constraints.",
      },
    ],
    inScope: [
      "End-to-end loan origination for 6 products",
      "Two-Wheeler journey as primary focus",
      "Native Android design system",
      "Agent and customer (DIY) pathways",
      "KYC, identity verification, consent flows",
      "Scalable component library (100+ components)",
      "Dashboard and application management",
    ],
    outOfScope: [
      "Backend credit scoring algorithms",
      "Payment gateway integration UI",
      "Admin panel and back-office tools",
      "Marketing website and landing pages",
      "Post-disbursal loan management",
      "Third-party API integration logic",
    ],
  },

  // --- 03 RESEARCH ---
  research: {
    headline:
      "Understanding the lending landscape through competitive analysis and stakeholder discovery",
    intro:
      "I conducted a comprehensive competitive analysis of leading digital lending apps in India, combined with stakeholder interviews and a heuristic evaluation, to identify patterns, gaps, and opportunities for differentiation.",
    competitive: [
      {
        name: "Navi",
        image: F("000-navi-app-screens.png"),
        notes:
          "Clean UI, contextual navigation, one-step-at-a-time approach, intuitive micro-interactions and animations.",
      },
      {
        name: "KreditBee",
        image: F("001-kreditbee-screens.png"),
        notes:
          "Step-by-step onboarding, progress tracking, categorized information, help always available mid-journey.",
      },
    ],
    findingsTable: {
      headers: ["Pattern", "Navi", "KreditBee", "Bajaj Finserv", "Home Credit", "Muthoot"],
      rows: [
        ["Contextual navigation", "✓", "✓", "✓", "–", "–"],
        ["One-step-at-a-time", "✓", "–", "✓", "✓", "–"],
        ["Micro-assistive text", "✓", "✓", "–", "✓", "–"],
        ["Progress tracking", "–", "✓", "✓", "–", "✓"],
        ["Help always available", "✓", "✓", "✓", "✓", "–"],
        ["Future process indication", "–", "✓", "–", "–", "–"],
        ["Micro-interactions", "✓", "–", "✓", "–", "–"],
        ["Multi-product support", "–", "–", "✓", "–", "–"],
      ],
    },
    keyInsight:
      "Competitors excelled at single-product lending flows, but none had solved the multi-product, multi-persona challenge at scale. That became our main opportunity: one flexible system serving 6 products and 3 user types instead of 6 separate apps.",
    approach: [
      { title: "Material Design Foundation", desc: "Use Material Design with card-based layouts for better adoptability across Android's dominant user base." },
      { title: "Clean & Minimalistic", desc: "Keep the visual language uncluttered. This matters most for users with limited digital literacy." },
      { title: "Contextual Graphics", desc: "Use illustrations and icons to provide context and reduce reliance on text-heavy instructions." },
      { title: "Visual Hierarchy", desc: "Consistent hierarchy for primary actions, titles, and informational content." },
      { title: "Progress Visibility", desc: "Show progress upfront so users always know where they are and what's coming next." },
      { title: "Intuitive Multi-color Icons", desc: "Multi-color icons for better recognition and a more engaging visual experience." },
    ],
  },

  // --- 04 INSIGHTS ---
  insights: {
    headline:
      "Two personas, one journey: bridging agent efficiency and customer empowerment",
    intro:
      "Research revealed two primary user archetypes whose needs shaped every design decision. The platform needed to serve both without forcing either into the other's workflow.",
    personas: [
      {
        name: "Rahul Sharma",
        role: "Sales Centre Executive",
        quote:
          "I am focused on delivering exceptional customer service and facilitating a smooth loan application process for existing customers, leveraging both phone support and the mobile app to provide personalized assistance and guidance.",
        challenges: [
          { t: "Technical Issues", d: "May encounter glitches with the mobile app while assisting customers remotely. Needs reliable tech support and troubleshooting resources." },
          { t: "Time Constraints", d: "Often handles multiple customer inquiries simultaneously as a sales centre executive." },
          { t: "Compliance & Security", d: "Must ensure compliance with regulatory requirements and data security standards while assisting with loan applications." },
          { t: "Training & Support", d: "Requires ongoing training to stay updated on latest features, functionalities, and changes to loan policies." },
        ],
        goals: [
          { t: "Efficient Assistance", d: "Provide prompt and effective assistance to existing customers applying for a loan, ensuring a positive experience." },
          { t: "Clear Communication", d: "Explain complex terms and procedures in a simple, understandable manner." },
          { t: "Personalized Service", d: "Tailor loan options and recommendations to each customer's unique financial needs and circumstances." },
          { t: "Seamless Integration", d: "Seamless phone-to-app integration with access to customer information and application status updates in real-time." },
        ],
      },
      {
        name: "Ankita Agarwal",
        role: "Customer (First-time Borrower)",
        quote:
          "I am looking for financial help via a transparent service that makes the loan application process convenient and efficient for my busy lifestyle.",
        challenges: [
          { t: "Security Concerns", d: "Cautious about sharing personal and financial information online. Expects robust security measures to protect her data." },
          { t: "Understanding Loan Terms", d: "As a first-time applicant, not familiar with financial jargon. Needs clear explanations of terms and conditions to make informed decisions." },
          { t: "Customer Support", d: "Expects prompt and helpful support through the mobile app for any questions or issues during the application process." },
        ],
        goals: [
          { t: "Convenient Access", d: "Hassle-free loan access without visiting a physical branch. Values convenience and efficiency in financial transactions." },
          { t: "Transparency", d: "Clear information about interest rates, repayment terms, and any associated fees throughout the process." },
          { t: "Quick Approval", d: "Quick approval and disbursement of loans for urgent, unexpected expenses." },
          { t: "User-Friendly Interface", d: "Intuitive interface with easy navigation to complete the application process without confusion." },
        ],
      },
    ],
    principles: [
      { t: "Progressive Disclosure", d: "Break complex data entry into focused, single-purpose screens. One category of information at a time to reduce cognitive load." },
      { t: "Information Chunking", d: "Group related fields as digestible chunks. KYC, employment, and income details each get their own step." },
      { t: "Assistive Context", d: "Micro-copy and contextual explanations at every step. First-time borrowers should never feel lost." },
      { t: "Trust at Every Step", d: "Data security badges, transparent consent, and clear explanations of why each piece of information is needed." },
      { t: "Dual-Mode Flexibility", d: "Agent-assisted and customer DIY flows. Agents need speed; customers need guidance. Same system, adaptive UX." },
      { t: "Scalable Patterns", d: "Every component works across 6 loan products. Design for the most complex (TW), simplify for others." },
    ],
  },

  // --- 05 USER FLOW & TASKS ---
  flow: {
    headline: "Mapping the Two-Wheeler loan journey from entry to disbursement",
    intro:
      "The TW loan application is structured as an 11-step journey, bookended by onboarding and post-submission processing. Each step is a focused, single-screen interaction with clear progress indication.",
    diagramSvg: F("svg-12.svg"),
    diagramCaption:
      "Two-Wheeler loan journey: 11-step application flow from welcome to disbursement",
    tasks: [
      { n: 1, t: "Personal Details", d: "Name, DOB, gender, marital status, live photo capture" },
      { n: 2, t: "PAN Verification", d: "PAN card or Form 60 verification and validation" },
      { n: 3, t: "Address Details", d: "Residence type, landmark, and pin code" },
      { n: 4, t: "Employment Details", d: "Employment type, company name, and landmark" },
      { n: 5, t: "Income Details", d: "Applicant income and total household income" },
      { n: 6, t: "Product Details", d: "Vehicle type, make, model, scheme selection" },
      { n: 7, t: "Schemes & VAS", d: "Add-ons: InstaCard, Credit Shield, extended warranty" },
      { n: 8, t: "Bank Account", d: "UPI ID, bank account, and mandate setup" },
      { n: 9, t: "Photo & Documents", d: "Document capture and live photo verification" },
      { n: 10, t: "Notifications & Consent", d: "E-consent and communication preferences" },
      { n: 11, t: "Loan Summary", d: "Review all details and submit application" },
    ],
  },

  // --- 06 DESIGN ---
  design: {
    headline: "From wireframes to production: the Two-Wheeler journey",
    intro:
      "The design evolved through three distinct phases: low-fidelity wireframing to validate information architecture, mid-fidelity explorations to test visual approaches, and high-fidelity final screens refined through stakeholder feedback.",
    wireframes: {
      intro:
        "Before any visual polish, I explored the hardest screens in grayscale, weighing a few layout directions for each. Putting the options side by side is how the final structure earned its shape.",
      batches: [
        { src: F("svg-13.svg"), caption: "Loan application form: one long form vs a grouped accordion vs a stepped wizard. The stepped wizard became the 11-step journey." },
        { src: F("svg-14.svg"), caption: "Applications dashboard: a plain list vs status cards vs grouping by stage. Status cards won for daily scanning." },
        { src: F("svg-15.svg"), caption: "Application progress: a top bar vs a vertical stepper vs a progress ring. The vertical stepper kept every stage visible." },
      ],
    },
    explorations: {
      intro:
        "After wireframes, I explored several visual approaches, testing flat vs. 3D icons, input field styles, and layout density. I reviewed each variant with stakeholders and iterated on their feedback.",
      images: [
        { src: F("002-design-explorations-comparing-flat-and-3d-approaches.png"), caption: "Exploring flat vs. 3D icon styles, comparing approaches for tenure, loan amount, and add-on screens" },
        { src: F("003-final-mobile-screens-welcome-applications-personal-details.png"), caption: "Refined screens: Welcome, Applications dashboard, and Personal details form with progress indicator" },
      ],
    },
    finalDesign: {
      intro:
        "The finalized UI across 17 key screens, from login to disbursement. Each screen follows the no-scroll, single-action pattern with information chunking and dual progress indicators.",
      screens: [
        { src: F("005-login-authentication.png"), title: "Login & Authentication", desc: "Mobile number entry with OTP verification. Employee login fallback for sales executives." },
        { src: F("006-applications-dashboard.png"), title: "Applications Dashboard", desc: "Search, sort, filter. Status badges (Lead, DDE, Escalated) with quick access to applications." },
        { src: F("007-dealer-portfolio.png"), title: "Dealer & Portfolio", desc: "Sales executive flow. Dealer and portfolio selection before starting the customer journey." },
        { src: F("008-personal-details.png"), title: "Personal Details", desc: "Pre-verified KYC data with edit affordances. Live photo capture inline. Dual progress system." },
        { src: F("009-address-details.png"), title: "Address Details", desc: "Current address with pin code auto-fill, residence type chips, and landmark assistance." },
        { src: F("010-employment-info.png"), title: "Employment Info", desc: "Employment type chips, company details, and income capture with currency formatting." },
        { src: F("011-vehicle-selection.png"), title: "Vehicle Selection", desc: "Visual chip selection for ICE vs Electric. Icon-led interface for recognition." },
        { src: F("012-product-config.png"), title: "Product Config", desc: "Bottom sheet for Make/Model/Variant with asset cost and financed amount." },
        { src: F("013-scheme-selection.png"), title: "Scheme Selection", desc: "Recommended scheme upfront. ROI, PF, charges breakdown with customization options." },
        { src: F("014-add-on-products.png"), title: "Add-On Products", desc: "Accessories like helmets and gear. Bundled financing simplifies the purchase decision." },
        { src: F("015-co-applicant.png"), title: "Co-Applicant", desc: "Choose existing relationships or add new. Strengthens eligibility for first-time borrowers." },
        { src: F("016-loan-summary.png"), title: "Loan Summary", desc: "Complete breakdown of amount, EMI, tenure, and IRR. Transparent for trust-building." },
        { src: F("017-asset-validation.png"), title: "Asset Validation", desc: "Engine and chassis number with barcode scan. Locks the physical asset to the loan." },
        { src: F("018-kfs-e-agreement.png"), title: "KFS & E-Agreement", desc: "Digital signature with OTP. Real-time document tracking status." },
        { src: F("019-document-upload.png"), title: "Document Upload", desc: "Down payment, insurance, passbook upload with re-upload and format guidance." },
        { src: F("020-soft-approval.png"), title: "Soft Approval", desc: "Instant approval with celebratory micro-interaction. Next steps guidance." },
        { src: F("021-disbursement.png"), title: "Disbursement", desc: "Final success state with application number and support contact." },
      ],
    },
    keyDecisions: [
      { t: "No-Scroll Screen Design", d: "Adopted a no-scroll approach presenting precise, relevant information on a single screen. This reduced cognitive overload and created a focused interaction model, which mattered for agents processing 15–20 applications daily." },
      { t: "Dual Progress System", d: "A two-tier progress indicator: top-level percentage bar (\"45% Complete\") plus step-level indicator (\"Step 5 of 11\"). Keeps users oriented without overwhelming them with the full scope upfront." },
      { t: "Assistive Onboarding", d: "Each step opens with supportive messaging: \"Hello! Let's begin by reviewing the basic information.\" Conversational tone reduces anxiety for first-time borrowers navigating a bureaucratic process." },
      { t: "Pre-verified Data Display", d: "For existing customers, pre-populated fields display with verification checkmarks and edit icons. One-tap confirmation (\"Yes, that's right\") or update option reduces friction for repeat borrowers." },
    ],
  },

  // --- 07 DESIGN SYSTEM ---
  designSystem: {
    headline:
      "A component library built for scale, powering 6 products with consistent patterns",
    intro:
      "I created a comprehensive design system with 100+ components in Figma, establishing a shared visual language across all loan products. Built with auto-layout, variants, and design tokens for seamless developer handoff.",
    panelsIntro:
      "100+ components organized into foundational tokens, form controls, navigation patterns, and content containers. Built in Figma with auto-layout, variants, and design tokens for seamless developer handoff.",
    panels: [
      { src: F("022-foundation-color-palette-typography-scale-and-spacing-system.png"), caption: "Foundation: Color palette, typography scale, and spacing system" },
      { src: F("023-icons-illustrations-functional-icons-multi-color-variants-an.png"), caption: "Icons & Illustrations: Functional icons, multi-color variants, and contextual graphics" },
      { src: F("024-button-system-primary-secondary-and-tertiary-button-states-w.png"), caption: "Button System: Primary, secondary, and tertiary button states with variants" },
      { src: F("025-form-controls-input-states-checkboxes-progress-bars-toasts-a.png"), caption: "Form Controls: Input states, checkboxes, progress bars, toasts, and file upload" },
      { src: F("026-cards-sheets-lead-cards-vas-cards-popup-dialogs-and-bottom-s.png"), caption: "Cards & Sheets: Lead cards, VAS cards, popup dialogs, and bottom sheet patterns" },
    ],
    systemImpact:
      "The design system enabled consistent experiences across 6 loan products while reducing handoff time. New product journeys could be assembled from existing components in days rather than weeks.",
  },

  // --- 08 VALIDATION ---
  validation: {
    headline:
      "Five rounds of iterative prototyping, tested with real users before engineering handoff",
    intro:
      "Rather than a formal usability study, I took an iterative approach. I shared Figma prototypes with real users (sales executives, dealership agents, and customers), watched how they interacted, captured feedback, and refined the work across 5 distinct rounds.",
    rounds: [
      { n: 1, t: "Round 1: Internal Stakeholders", d: "Shared initial wireframes with PM, business analysts, and engineering leads. This surfaced a core IA problem: scrollable multi-action screens were creating cognitive overload. Pivoted to a single-screen, no-scroll approach." },
      { n: 2, t: "Round 2: Sales Executives", d: "6 sales centre executives tested the mid-fidelity prototype. Key finding: agents couldn't locate the \"back to edit\" path. Added persistent edit icons on pre-verified fields and visible step-back navigation." },
      { n: 3, t: "Round 3: Visual Design Review", d: "Tested flat vs. 3D icon styles with stakeholders. 3D icons were engaging but added visual weight on data-heavy screens. Adopted flat icons with selective 3D for onboarding and empty states." },
      { n: 4, t: "Round 4: Customer DIY Testing", d: "5 first-time borrowers tested the high-fidelity prototype. The progress tracker confused them, so I added dual progress (percentage + step count). Vehicle selection icons were universally praised." },
      { n: 5, t: "Round 5: Final Polish", d: "End-to-end walkthrough with 3 existing customers. Refined \"No, I want to update\" button prominence, added benefit descriptions to add-on cards, improved error states for edge cases." },
    ],
    outcome:
      "Through 5 iterations with 20+ participants, the design evolved from a scrollable, multi-action layout to a focused, single-screen journey that both agents and customers could navigate confidently. The final Figma prototype was signed off by all stakeholders before engineering handoff.",
  },

  // --- 09 IMPACT ---
  impact: {
    headline:
      "From paper to digital: measurable outcomes across speed, adoption, and consistency",
    metrics: [
      { v: "60%", l: "Faster Processing", s: "Vs. paper-based flow" },
      { v: "6", l: "Products Unified", s: "Single design system" },
      { v: "100+", l: "Components", s: "Reusable library" },
      { v: "40%", l: "Less Training", s: "Intuitive agent UI" },
    ],
    wentWell: [
      "No-scroll, single-screen approach eliminated form fatigue, and both agents and customers praised it",
      "Progressive disclosure reduced perceived complexity, so the 11-step journey \"didn't feel long\"",
      "Dual progress system kept users oriented without anxiety",
      "Building the design system early enabled rapid assembly of subsequent product journeys",
      "Close engineering collaboration during wireframing caught feasibility issues early",
    ],
    differently: [
      "Would involve sales executives earlier. Their deep insight only surfaced in Round 2 testing",
      "Should have tested on low-end Android devices sooner, since performance gaps appeared late",
      "Would design comprehensive error states from the start, because edge cases needed last-minute attention",
      "More A/B testing on add-on card designs before settling on the final pattern",
    ],
  },

  // --- 10 SCREEN GALLERY ---
  gallery: {
    headline: "All screens at a glance",
    intro:
      "Showing 10 of the 47 screens designed for the Two-Wheeler journey. Open the full set below.",
    representative: [
      { src: F("005-login-authentication.png"), title: "Login" },
      { src: F("006-applications-dashboard.png"), title: "Applications Dashboard" },
      { src: F("007-dealer-portfolio.png"), title: "Dealer & Portfolio" },
      { src: F("008-personal-details.png"), title: "Personal Details + Live Photo" },
      { src: F("009-address-details.png"), title: "Address Details" },
      { src: F("010-employment-info.png"), title: "Employment Details" },
      { src: F("011-vehicle-selection.png"), title: "Vehicle Type Selection" },
      { src: F("012-product-config.png"), title: "Product Configuration" },
      { src: F("016-loan-summary.png"), title: "Loan Summary Detail" },
      { src: F("021-disbursement.png"), title: "Loan Disbursed" },
    ],
    all: [
      { src: F("037-terms-conditions.png"), title: "Terms & Conditions" },
      { src: F("038-vas-selection.png"), title: "VAS Selection" },
      { src: F("039-scheme-details.png"), title: "Scheme Details" },
      { src: F("040-accessories-overview.png"), title: "Accessories Overview" },
      { src: F("041-accessories-empty.png"), title: "Accessories: Empty" },
      { src: F("042-accessories-add-product.png"), title: "Accessories: Add Product" },
      { src: F("043-capture-invoice.png"), title: "Capture Invoice" },
      { src: F("044-payment-details.png"), title: "Payment Details" },
      { src: F("045-document-upload.png"), title: "Document Upload" },
      { src: F("046-create-new-loan.png"), title: "Create New Loan" },
      { src: F("047-delivery-address.png"), title: "Delivery Address" },
      { src: F("048-existing-co-applicant.png"), title: "Existing Co-Applicant" },
      { src: F("049-existing-co-applicant-2.png"), title: "Existing Co-Applicant (2)" },
      { src: F("050-kfs-e-agreement.png"), title: "KFS & E-Agreement" },
      { src: F("051-loan-approval-wait.png"), title: "Loan Approval Wait" },
      { src: F("052-loan-approval-wait-alt.png"), title: "Loan Approval Wait (Alt)" },
      { src: F("053-login-otp-sent.png"), title: "Login: OTP Sent" },
      { src: F("054-login-otp-entry.png"), title: "Login: OTP Entry" },
      { src: F("055-login-verified.png"), title: "Login: Verified" },
      { src: F("056-new-co-applicant.png"), title: "New Co-Applicant" },
      { src: F("057-new-co-applicant-pan.png"), title: "New Co-Applicant: PAN" },
      { src: F("058-new-co-applicant-details.png"), title: "New Co-Applicant: Details" },
      { src: F("059-new-co-applicant-address.png"), title: "New Co-Applicant: Address" },
      { src: F("060-new-co-applicant-bank.png"), title: "New Co-Applicant: Bank" },
      { src: F("061-new-co-applicant-review.png"), title: "New Co-Applicant: Review" },
      { src: F("062-new-co-applicant-confirm.png"), title: "New Co-Applicant: Confirm" },
      { src: F("063-personal-details-form-a.png"), title: "Personal Details: Form A" },
      { src: F("064-personal-details-form-a1.png"), title: "Personal Details: Form A1" },
      { src: F("065-personal-details-form-b.png"), title: "Personal Details: Form B" },
      { src: F("066-asset-validation.png"), title: "Asset Validation" },
      { src: F("067-asset-validation-2.png"), title: "Asset Validation (2)" },
      { src: F("068-soft-approval.png"), title: "Soft Approval" },
      { src: F("069-customer-validation-a.png"), title: "Customer Validation A" },
      { src: F("070-customer-validation-b.png"), title: "Customer Validation B" },
      { src: F("071-customer-validation-c.png"), title: "Customer Validation C" },
      { src: F("072-customer-validation-d.png"), title: "Customer Validation D" },
      { src: F("073-customer-validation-final.png"), title: "Customer Validation Final" },
    ],
  },
};
