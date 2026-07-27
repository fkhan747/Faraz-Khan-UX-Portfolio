// FinVista case study. Confidential client (NDA) — kept anonymized.
// Structured data consumed by FinVistaCaseStudy.jsx. Every top-level key
// below is referenced by the page — do not remove keys, only shorten values.
// Voice: first-person, conversational, plain. No em-dashes.
const F = (n) => `/finvista/${n}`;

export const finvista = {
  slug: "finvista",
  title: "FinVista",
  subtitle:
    "A native lending app that turned a paper-heavy loan into an eleven-step journey a first-time borrower can finish on their own phone.",
  hero: {
    facts: [
      { label: "Role", value: "Senior UX Lead" },
      { label: "Domain", value: "Fintech · digital lending" },
      { label: "Platform", value: "Native Android app" },
    ],
    // Outcome numbers as the hero counter, so the impact reads before the story.
    stats: [
      { value: "60%", label: "Faster processing" },
      { value: "6", label: "Products, one system" },
      { value: "100+", label: "Components" },
    ],
  },

  // --- 01 PROJECT OVERVIEW ---
  overview: {
    headline: "One lending app for six products, urban and rural, agent and DIY",
    intro:
      "FinVista is a consumer lending app for a large Indian NBFC (client anonymized under NDA), serving borrowers across 500+ cities. I led UX across six products, with the two-wheeler flow as the proving ground.",
    tldrTitle: "TL;DR",
    tldr:
      "Paper-heavy, agent-only loan → 11-step native Android journey. Six products on one 100+ component system. Processing runs ~60% faster, agent training dropped ~40%.",
    facts: [
      { label: "Role", value: "Senior UX Lead" },
      { label: "Duration", value: "5 months" },
      { label: "Team", value: "2 designers, 1 PM, 8 devs" },
      { label: "Platform", value: "Native Android app" },
      { label: "Tools", value: "Figma, FigJam, JIRA" },
      { label: "Scope", value: "End-to-end LOS" },
    ],
    process: [
      { step: "01", title: "Discovery", duration: "3 weeks" },
      { step: "02", title: "Research", duration: "3 weeks" },
      { step: "03", title: "Design", duration: "10 weeks" },
      { step: "04", title: "Validation", duration: "4 weeks" },
    ],
    productLandscape: {
      intro:
        "Six products, one system. I used the highest-volume one as the proving ground.",
      products: [
        {
          name: "Two-Wheeler Loan",
          badge: "PROVING GROUND",
          desc: "New and used bikes, scooters, electric, mopeds. This case study is about this flow.",
        },
        {
          name: "Consumer Durable · Personal · Used Car · Tractor · Three-Wheeler",
          desc: "Five more loan products on the same 100+ component system.",
        },
      ],
    },
  },

  // --- 02 PROBLEM ---
  primaryUsers: [
    { label: "Sales Centre Executives", desc: "They process loans over phone and app, juggle a dozen applications at once, and own the compliance. Speed is their whole job." },
    { label: "Loan Customers", desc: "First-time and repeat borrowers, applying for a two-wheeler loan on their own phone. Often the first time they've done anything financial digitally." },
  ],

  problem: {
    headline: "One app, two personas, six products, and a device gap from flagship to entry-level 2G",
    intro:
      "The old flow was paper, agents, and fragments. I had to design one app that worked on the borrower's own phone, on the executive's too, held up on 2G, and stayed RBI-compliant end to end.",
    coreChallenge:
      "One scalable Android app, reusable components, holding up across every device and network in India, staying compliant.",
    dimensions: [
      {
        title: "Multi-Persona Complexity",
        desc: "Customers apply solo, executives process for them. Different goals, different literacy, same screens.",
      },
      {
        title: "Information Overload",
        desc: "One application is 40+ fields. Fit them on a phone without drowning anyone. The IA does the heavy lifting.",
      },
      {
        title: "Device and Network Diversity",
        desc: "Flagship on 5G to entry-level Android on village 2G. The app has to hold up across the whole gap.",
      },
    ],
    inScope: [
      "End-to-end loan origination for 6 products",
      "Two-Wheeler journey as primary focus",
      "Native Android design system",
      "Agent and customer (DIY) pathways",
      "KYC, identity verification, consent flows",
      "Scalable component library (100+ components)",
    ],
    outOfScope: [
      "Backend credit scoring",
      "Payment gateway UI",
      "Admin panel and back-office",
      "Marketing site",
      "Post-disbursal loan management",
    ],
  },

  // --- 03 RESEARCH ---
  research: {
    headline: "What the best Indian lending apps already do, and what they miss",
    intro:
      "I pulled apart the leading Indian lending apps, sat with stakeholders, ran a heuristic sweep. The pattern was clear.",
    competitive: [
      {
        name: "Navi",
        image: F("Navi.jpg"),
        notes:
          "Clean UI, one-step-at-a-time flow, intuitive micro-interactions.",
      },
      {
        name: "KreditBee",
        image: F("KreditBee.jpg"),
        notes:
          "Stepped onboarding, progress tracking, help always in reach.",
      },
    ],
    findingsTable: {
      headers: ["Pattern", "Navi", "KreditBee", "Bajaj Finserv", "Home Credit", "Muthoot"],
      rows: [
        ["Contextual navigation", "✓", "✓", "✓", "-", "-"],
        ["One-step-at-a-time", "✓", "-", "✓", "✓", "-"],
        ["Micro-assistive text", "✓", "✓", "-", "✓", "-"],
        ["Progress tracking", "-", "✓", "✓", "-", "✓"],
        ["Help always available", "✓", "✓", "✓", "✓", "-"],
        ["Multi-product support", "-", "-", "✓", "-", "-"],
      ],
    },
    keyInsight:
      "Every competitor nails a single-product flow. None solve multi-product, multi-persona. That gap is the opportunity: one flexible system for 6 products and 2 personas.",
    approach: [
      { title: "Material Foundation", desc: "Built on Material and card layouts. Android users already know it." },
      { title: "Clean and Minimal", desc: "One hierarchy, uncluttered surface. Matters most for the borrower with the least digital literacy." },
      { title: "Progress Always Visible", desc: "Users always know where they are and what is next." },
    ],
  },

  // --- 04 INSIGHTS ---
  insights: {
    headline: "Two personas, one journey",
    intro:
      "Two archetypes, both served without forcing either into the other's workflow.",
    personas: [
      {
        name: "Rahul Sharma",
        role: "Sales Centre Executive",
        quote: "Move fast, keep the customer calm, never miss a compliance step.",
        challenges: [
          { t: "Time", d: "Many customers at once. Every extra tap costs him." },
        ],
        goals: [
          { t: "Phone-to-App Continuity", d: "A call picks up exactly where the app left off." },
        ],
      },
      {
        name: "Ankita Agarwal",
        role: "First-time Borrower",
        quote: "Give me a loan I understand, from my phone, with no hidden charges.",
        challenges: [
          { t: "Trust", d: "Cautious about sharing financial data. Needs visible safeguards first." },
        ],
        goals: [
          { t: "Transparency", d: "Clear rate, EMI, fees, total. No fine print surprises." },
        ],
      },
    ],
    principles: [
      { t: "Progressive Disclosure", d: "One category of fields at a time. The load never spikes." },
      { t: "Trust at Every Step", d: "Visible security cues, transparent consent, a plain reason for every field." },
      { t: "Dual-Mode Flexibility", d: "Agents need speed, customers need guidance. Same system, adaptive UX." },
    ],
  },

  // --- 05 USER FLOW & TASKS ---
  flow: {
    headline: "The Two-Wheeler loan journey in 11 steps",
    intro:
      "One screen, one job, progress always visible. Onboarding on one end, disbursement on the other.",
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
    headline: "From wireframes to production",
    intro:
      "Low-fi to lock IA, mid-fi for visual direction, high-fi sharpened against real feedback.",
    wireframes: {
      intro:
        "I explored the hardest screens in grayscale, options side by side.",
      batches: [
        { src: F("svg-13.svg"), caption: "Loan application: long form vs accordion vs stepped wizard. The wizard won." },
        { src: F("svg-14.svg"), caption: "Applications dashboard: plain list vs status cards vs grouping by stage. Status cards won." },
        { src: F("svg-15.svg"), caption: "Progress: top bar vs vertical stepper vs progress ring. The stepper kept every stage visible." },
      ],
    },
    explorations: {
      intro:
        "Flat vs 3D icons, input styles, layout density. Tested with stakeholders, iterated.",
      images: [
        { src: F("002-design-explorations-comparing-flat-and-3d-approaches.png"), caption: "Flat vs 3D icons across tenure, loan amount, and add-on screens" },
      ],
    },
    finalDesign: {
      intro:
        "16 screens from login to disbursement. Every screen holds a single action.",
      screens: [
        { src: F("005-login-authentication.png"), title: "Login & Authentication", desc: "Mobile number + OTP, with an employee login fallback." },
        { src: F("006-applications-dashboard.png"), title: "Applications Dashboard", desc: "Search, sort, filter with status badges." },
        { src: F("007-dealer-portfolio.png"), title: "Dealer & Portfolio", desc: "Executive-only step, before the customer journey begins." },
        { src: F("008-personal-details.png"), title: "Personal Details", desc: "Pre-verified KYC, live photo, dual progress." },
        { src: F("009-address-details.png"), title: "Address Details", desc: "Pin-code auto-fill and landmark assistance." },
        { src: F("010-employment-info.png"), title: "Employment Info", desc: "Type chips + income with currency formatting." },
        { src: F("011-vehicle-selection.png"), title: "Vehicle Selection", desc: "Chip selection, ICE vs Electric, icon-led." },
        { src: F("012-product-config.png"), title: "Product Config", desc: "Bottom sheet for Make / Model / Variant." },
        { src: F("013-scheme-selection.png"), title: "Scheme Selection", desc: "Recommended scheme with a full breakdown." },
        { src: F("014-add-on-products.png"), title: "Add-On Products", desc: "Helmets and gear, bundled into financing." },
        { src: F("015-co-applicant.png"), title: "Co-Applicant", desc: "Existing relationships or a new addition." },
        { src: F("016-loan-summary.png"), title: "Loan Summary", desc: "Amount, EMI, tenure, IRR, all on one screen." },
        { src: F("017-asset-validation.png"), title: "Asset Validation", desc: "Engine and chassis number with barcode scan." },
        { src: F("018-kfs-e-agreement.png"), title: "KFS & E-Agreement", desc: "OTP signature and real-time tracking." },
        { src: F("019-document-upload.png"), title: "Document Upload", desc: "Downpayment, insurance, passbook, with format hints." },
        { src: F("021-disbursement.png"), title: "Disbursement", desc: "Success state with application number." },
      ],
    },
    keyDecisions: [
      { t: "No-Scroll Screen", d: "One screen, one job. It mattered most for agents processing 15-20 applications a day." },
      { t: "Dual Progress", d: "Top-level percentage and step-level indicator. Orientation without overwhelm." },
      { t: "Assistive Onboarding", d: "Every step opens with plain-language help. Reduces anxiety for first-time borrowers." },
      { t: "Pre-verified Data", d: "For existing customers: pre-populated fields with checkmarks and one-tap confirm." },
    ],
  },

  // --- 07 DESIGN SYSTEM ---
  designSystem: {
    headline: "A 100+ component library, one visual language across six products",
    intro:
      "Built in Figma on auto-layout, variants, and tokens, so engineering handoff stayed clean.",
    panelsIntro:
      "Four families: tokens, form controls, navigation, and content containers.",
    panels: [
      { src: F("022-foundation-color-palette-typography-scale-and-spacing-system.png"), caption: "Foundation: color, type scale, spacing" },
      { src: F("023-icons-illustrations-functional-icons-multi-color-variants-an.png"), caption: "Icons and illustrations: functional icons, multi-color variants" },
      { src: F("024-button-system-primary-secondary-and-tertiary-button-states-w.png"), caption: "Button system: primary, secondary, tertiary with all states" },
      { src: F("025-form-controls-input-states-checkboxes-progress-bars-toasts-a.png"), caption: "Form controls: inputs, checkboxes, progress, toasts, file upload" },
      { src: F("026-cards-sheets-lead-cards-vas-cards-popup-dialogs-and-bottom-s.png"), caption: "Cards and sheets: lead cards, VAS cards, dialogs, bottom sheets" },
    ],
    systemImpact:
      "New product journeys assembled from existing components in days, not weeks.",
  },

  // --- 08 VALIDATION ---
  validation: {
    headline: "Five rounds, twenty participants, one journey people could finish alone",
    intro:
      "No formal lab. I shared Figma prototypes with real users across five rounds, watched, and refined.",
    rounds: [
      { n: 1, t: "Internal stakeholders", d: "PM, analysts, engineering on wireframes. Surfaced the IA problem: scrollable multi-action screens overwhelmed everyone. I pivoted to one screen, one action." },
      { n: 2, t: "Sales executives", d: "Six executives on mid-fi. Nobody could find the way back to edit a completed step. Added persistent edit icons + visible step-back." },
      { n: 3, t: "Customer DIY", d: "Five first-time borrowers on high-fi. Progress tracker confused them. Added dual progress (percentage + step count). Vehicle icons were the most-praised piece." },
    ],
    outcome:
      "The design moved from a scrollable, multi-action layout to a focused, single-screen journey both agents and first-time borrowers could finish alone.",
  },

  // --- 09 IMPACT ---
  impact: {
    headline: "From paper to digital",
    metrics: [
      { v: "60%", l: "Faster processing", s: "vs. paper flow" },
      { v: "6", l: "Products unified", s: "one design system" },
      { v: "100+", l: "Components", s: "reusable library" },
      { v: "40%", l: "Less training", s: "for agents" },
    ],
    wentWell: [
      "One screen, one action killed form fatigue for both agents and customers",
      "Progressive disclosure made the 11-step journey \"not feel long\"",
      "Dual progress kept everyone oriented without anxiety",
      "The early design system let later product journeys assemble in days",
    ],
    differently: [
      "Bring sales executives in on round one. Their deepest insight only surfaced in round two",
      "Test on low-end Android devices sooner. Performance gaps appeared late",
      "Design error states from the start, not against edge cases at the end",
    ],
  },

  // --- 10 SCREEN GALLERY ---
  gallery: {
    headline: "Ten of the 46 screens",
    intro:
      "A grab-bag from across the two-wheeler journey, from login to disbursement.",
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
      { src: F("069-customer-validation-a.png"), title: "Customer Validation A" },
      { src: F("070-customer-validation-b.png"), title: "Customer Validation B" },
      { src: F("071-customer-validation-c.png"), title: "Customer Validation C" },
      { src: F("072-customer-validation-d.png"), title: "Customer Validation D" },
      { src: F("073-customer-validation-final.png"), title: "Customer Validation Final" },
    ],
  },
};
