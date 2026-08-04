// FinVista case study. Confidential client (NDA), kept anonymized.
// Structured data consumed by FinVistaCaseStudy.jsx. Every top-level key
// below is referenced by the page — do not remove keys, only shorten values.
// Voice: first-person, conversational, plain. No em-dashes.
//
// REWRITTEN 2026-08-04: cut from ~1,500 to ~750 words of prose so the page
// reads in about 3 minutes. Scale context (25M+ customers, Rs 30,000+ crore
// book) comes from the client's public site, rounded to protect anonymity.
// The full-length material lives in git history if anything needs reviving.
const F = (n) => `/finvista/${n}`;

export const finvista = {
  slug: "finvista",
  title: "FinVista",
  subtitle:
    "An assisted lending app: sales executives run the whole journey, and the customer meets it only at the moments that need their own hand.",
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
    headline: "One lending app for six products, run by executives, handed to the customer at the moments that need them",
    intro:
      "FinVista is the assisted lending app of one of India's largest NBFCs (client anonymized under NDA): 25 million+ customers, a loan book above Rs 30,000 crore, loans originated in 500+ cities. I led UX across all six products, with the two-wheeler flow as the proving ground.",
    tldrTitle: "TL;DR",
    tldr:
      "Paper-heavy origination became an 11-step native Android journey run by sales, call centre and store staff, with designed handoff moments where the customer signs, consents and verifies in person. Six products on one 100+ component system. Processing ~60% faster, agent training down ~40%.",
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
      intro: "Six products, one system. The highest-volume one proved it.",
      products: [
        {
          name: "Two-Wheeler Loan",
          badge: "PROVING GROUND",
          desc: "New and used bikes, scooters, electric. This case study is this flow.",
        },
        {
          name: "Consumer Durable · Personal · Used Car · Tractor · Three-Wheeler",
          desc: "Five more products on the same 100+ component system.",
        },
      ],
    },
  },

  // --- 02 PROBLEM ---
  primaryUsers: [
    { label: "Sales Centre Executives", desc: "Run loans over phone and app, a dozen applications at once, and own the compliance. Speed is the job." },
    { label: "Store Managers", desc: "Own the dealer portfolio, the pipeline and the escalations. They read the app more than they type into it." },
    { label: "The customer", desc: "Not a user. A participant, for the eight or so moments only they can complete: live photo, consents, OTP, uploads, e-signature." },
  ],

  problem: {
    headline: "One app, two personas, six products, and a device gap from flagship to entry-level 2G",
    intro:
      "The old flow was paper, agents and fragments. The new one had to be fast enough for twenty applications a day, instantly readable the second the phone turns around to face the customer, solid on village 2G, and RBI-compliant end to end.",
    coreChallenge:
      "One scalable Android app, reusable across six products, holding up on every device and network in India.",
    dimensions: [
      {
        title: "Multi-Persona Complexity",
        desc: "Executives drive; the customer takes over for signatures and consents. Same screens, two completely different readers.",
      },
      {
        title: "Information Overload",
        desc: "One application is 40+ fields. The IA does the heavy lifting.",
      },
      {
        title: "Device and Network Diversity",
        desc: "Flagship on 5G to entry-level Android on 2G. The app holds up across the gap.",
      },
    ],
    inScope: [
      "End-to-end origination for 6 products",
      "Native Android design system (100+ components)",
      "Sales, call-centre and store-manager pathways",
      "KYC, identity verification, consent flows",
    ],
    outOfScope: [
      "Backend credit scoring",
      "Payment gateway UI",
      "Admin and back-office",
      "Post-disbursal servicing",
    ],
  },

  // --- 03 RESEARCH ---
  research: {
    headline: "What the best Indian lending apps already do, and the gap they all leave",
    intro:
      "I pulled apart the leading Indian lending apps and ran a heuristic sweep with stakeholders.",
    competitive: [
      {
        name: "Navi",
        image: F("Navi.jpg"),
        notes: "Clean UI, one step at a time, intuitive micro-interactions.",
      },
      {
        name: "KreditBee",
        image: F("KreditBee.jpg"),
        notes: "Stepped onboarding, progress tracking, help always in reach.",
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
      "Every competitor nails a single-product flow. None solve multi-product, multi-persona. That gap is the opportunity.",
    approach: [
      { title: "Material Foundation", desc: "Material and card layouts. Android users already know them." },
      { title: "Clean and Minimal", desc: "One hierarchy. Matters most when a customer is holding a phone they have never seen." },
      { title: "Progress Always Visible", desc: "Everyone knows where they are and what comes next." },
    ],
  },

  // --- 04 INSIGHTS ---
  insights: {
    headline: "Two readers, one journey",
    intro:
      "The executive and the customer read the same screens, so both had to be designed for at once.",
    personas: [
      {
        name: "Rahul Sharma",
        role: "Sales Centre Executive",
        quote: "Move fast, keep the customer calm, never miss a compliance step.",
        challenges: [
          { t: "Time", d: "Many customers at once. Every extra tap costs him." },
        ],
        goals: [
          { t: "Continuity", d: "A call picks up exactly where the app left off." },
        ],
      },
      {
        name: "Ankita Agarwal",
        role: "The customer at handoff",
        quote: "Give me a loan I understand, on this phone, with no hidden charges.",
        challenges: [
          { t: "Trust", d: "Cautious about financial data. Needs visible safeguards first." },
        ],
        goals: [
          { t: "Transparency", d: "Clear rate, EMI, fees, total. No fine print surprises." },
        ],
      },
    ],
    principles: [
      { t: "Progressive Disclosure", d: "One category of fields at a time. The load never spikes." },
      { t: "Trust at Every Step", d: "Visible security cues and a plain reason for every field." },
      { t: "Two Readers, One Screen", d: "Dense and fast for the executive; stripped back and plain at handoff." },
    ],
  },

  // --- 05 USER FLOW & TASKS ---
  flow: {
    headline: "The Two-Wheeler loan journey in 11 steps",
    intro: "One screen, one job, progress always visible.",
    diagramSvg: F("svg-12.svg"),
    diagramCaption:
      "Two-Wheeler loan journey: 11 steps from welcome to disbursement",
    tasks: [
      { n: 1, t: "Personal Details", d: "Identity plus live photo" },
      { n: 2, t: "PAN Verification", d: "PAN or Form 60" },
      { n: 3, t: "Address Details", d: "Pin code and landmark" },
      { n: 4, t: "Employment Details", d: "Type and employer" },
      { n: 5, t: "Income Details", d: "Applicant and household" },
      { n: 6, t: "Product Details", d: "Vehicle, make, model, scheme" },
      { n: 7, t: "Schemes & VAS", d: "Add-ons and insurance" },
      { n: 8, t: "Bank Account", d: "UPI, account, mandate" },
      { n: 9, t: "Photo & Documents", d: "Capture and upload" },
      { n: 10, t: "Notifications & Consent", d: "E-consent preferences" },
      { n: 11, t: "Loan Summary", d: "Review and submit" },
    ],
  },

  // --- 06 DESIGN ---
  design: {
    headline: "Four decisions that carried the design",
    intro:
      "Low-fi locked the IA, mid-fi set direction, hi-fi sharpened against real feedback.",
    wireframes: {
      intro: "The hardest screens in grayscale, options side by side.",
      batches: [
        { src: F("svg-13.svg"), caption: "Loan application: long form vs accordion vs stepped wizard. The wizard won." },
        { src: F("svg-14.svg"), caption: "Dashboard: plain list vs status cards vs grouping by stage. Status cards won." },
        { src: F("svg-15.svg"), caption: "Progress: top bar vs vertical stepper vs ring. The stepper kept every stage visible." },
      ],
    },
    explorations: {
      intro: "Flat vs 3D icons, input styles, layout density.",
      images: [
        { src: F("002-design-explorations-comparing-flat-and-3d-approaches.png"), caption: "Flat vs 3D icons across tenure, loan amount, and add-on screens" },
      ],
    },
    finalDesign: {
      intro: "Six of the 46 production screens. Every screen holds a single action.",
      screens: [
        { src: F("006-applications-dashboard.png"), title: "Applications Dashboard", desc: "Search, sort, filter with status badges." },
        { src: F("008-personal-details.png"), title: "Personal Details", desc: "Pre-verified KYC, live photo, dual progress." },
        { src: F("012-product-config.png"), title: "Product Config", desc: "Bottom sheet for Make / Model / Variant." },
        { src: F("013-scheme-selection.png"), title: "Scheme Selection", desc: "Recommended scheme with a full breakdown." },
        { src: F("016-loan-summary.png"), title: "Loan Summary", desc: "Amount, EMI, tenure, IRR, one screen." },
        { src: F("018-kfs-e-agreement.png"), title: "KFS & E-Agreement", desc: "OTP signature and real-time tracking." },
      ],
    },
    keyDecisions: [
      { t: "No-Scroll Screen", d: "One screen, one job. It mattered most for agents running 15 to 20 applications a day." },
      { t: "Dual Progress", d: "Journey-level percentage plus step-level indicator. Orientation without overwhelm." },
      { t: "Assistive Onboarding", d: "Every step opens with plain-language help, so the executive never translates the screen out loud." },
      { t: "Pre-verified Data", d: "Existing customers get pre-filled fields with checkmarks and one-tap confirm." },
    ],
  },

  // --- 07 DESIGN SYSTEM ---
  designSystem: {
    headline: "A 100+ component library, one visual language across six products",
    intro:
      "Figma auto-layout, variants and tokens, so engineering handoff stayed clean.",
    panelsIntro: "Foundations, form controls, and content containers.",
    panels: [
      { src: F("022-foundation-color-palette-typography-scale-and-spacing-system.png"), caption: "Foundation: color, type scale, spacing" },
      { src: F("025-form-controls-input-states-checkboxes-progress-bars-toasts-a.png"), caption: "Form controls: inputs, checkboxes, progress, toasts, file upload" },
      { src: F("026-cards-sheets-lead-cards-vas-cards-popup-dialogs-and-bottom-s.png"), caption: "Cards and sheets: lead cards, VAS cards, dialogs, bottom sheets" },
    ],
    systemImpact:
      "New product journeys assembled from existing components in days, not weeks.",
  },

  // --- 08 VALIDATION ---
  validation: {
    headline: "Five rounds with real users, until the handoff stopped failing",
    intro:
      "No formal lab. I shared Figma prototypes with real users, watched, and refined.",
    rounds: [
      { n: 1, t: "Internal stakeholders", d: "Scrollable multi-action screens overwhelmed everyone on wireframes. I pivoted to one screen, one action." },
      { n: 2, t: "Sales executives", d: "Six executives on mid-fi. Nobody could find the way back to edit a completed step, so edit icons became persistent." },
      { n: 3, t: "Customers at handoff", d: "Customers signed without reading. I rewrote every handoff screen to one plain question plus what happens next." },
    ],
    outcome:
      "A journey an executive can run at speed and hand over cleanly at every point that needs the customer.",
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
      "One screen, one action killed form fatigue for executives running back-to-back applications",
      "Progressive disclosure made the 11-step journey \"not feel long\"",
      "The early design system let later product journeys assemble in days",
    ],
    differently: [
      "Bring sales executives in on round one. Their deepest insight only surfaced in round two",
      "Test on low-end Android devices sooner",
      "Design error states from the start, not at the end",
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

  // --- 11 DECK TREATMENT ---
  // Copy for the slide-band page (pages/pilots/CaseFinvistaDeck.jsx). It lives
  // here, not in the component, so it ships as ciphertext when the vault is on.
  // Bold is marked with **double asterisks** and rendered by deckParts/rich().
  //
  // CORRECTED 2026-08-02. The earlier version of this case study described
  // FinVista as an app customers used themselves to apply for a loan. That was
  // wrong, and the error predated the deck. FinVista is ASSISTED origination:
  // sales centre executives, call centre executives and store managers run it
  // all day. The customer never installs it and never drives it. They meet the
  // app only at handoff moments, the steps only they can legally perform:
  // live photo, KYC consent, bureau (CIBIL) check consent, OTP verification,
  // document and file upload, e-signature on the key facts statement, home
  // visit consent, and others. The handoff is the story.
  deck: {
    eyebrow: "Case study · Assisted lending",
    standfirst:
      "A lending app run by sales staff, designed around the moments they turn the phone around and hand it to the customer.",
    heroCaption: "A consumer lending app for a large Indian NBFC, client anonymised under NDA",

    overview: [
      {
        h: "My role",
        items: [
          "Senior UX lead, six lending products",
          "Competitive teardown and heuristic sweep",
          "Journey design, including every handoff moment",
          "46 screens and a 100+ component system",
        ],
      },
      {
        h: "Timeline",
        items: ["5 months", "3 weeks discovery", "3 weeks research", "10 weeks design, 4 validation"],
      },
    ],

    problem: {
      statement:
        "Originating a loan takes two pairs of hands, and the paper process had no safe way to hand over: consents got signed unread, documents arrived days late, and mistakes cost the customer a second visit.",
      bullets: [
        "Three roles run the process all day: sales centre executives, call centre executives and store managers.",
        "The customer never touches the process except at the steps only they can complete, and every one of those is legally binding.",
        "On paper those steps meant wet signatures, photocopied ID and consent forms collected out of sequence.",
        "Six products each ran their own version of this, so nothing built for one could be reused by another.",
      ],
    },

    background: {
      title: "Six products, three roles, and one moment that matters most.",
      bullets: [
        "FinVista is a consumer lending app for a large Indian NBFC, serving borrowers across more than 500 cities.",
        "It is an **assisted** product. Executives drive it; the customer is sitting beside them, not holding the phone.",
        "I led UX across six lending products and used the highest-volume one, the **two-wheeler loan**, as the proving ground.",
        "The brief was an app. The real job was the handoff.",
      ],
    },

    // The paper-assisted process the app replaced.
    baseline: [
      ["40+", "fields an executive keys in per application"],
      ["8", "moments only the customer can complete"],
      ["100%", "of consents and signatures captured on paper"],
      ["6", "products, six separate processes"],
      ["2G", "the slowest network it still had to work on"],
      ["500+", "cities, from metro to village"],
    ],

    // Heuristic sweep of the paper process and of five leading Indian lending
    // apps. Each finding names the heuristic it breaks and carries its severity.
    audit: [
      [
        "Severity 4 · Visibility of system status",
        "The handoff had no edges",
        "Nothing on paper marked where the executive's work stopped and the customer's began. Consent forms were signed in a stack, out of order, and afterwards nobody could tell which the customer had actually read.",
      ],
      [
        "Severity 4 · Match with the real world",
        "Consent written for auditors, handed to a stranger",
        "Bureau check and key facts language was drafted for compliance review, then put in front of someone with sixty seconds and a pen. Legally collected, not in any real sense understood.",
      ],
      [
        "Severity 4 · Flexibility and efficiency",
        "Every competitor assumed one pair of hands",
        "I pulled apart five of the leading Indian lending apps. Each handles a single product well and every one assumes the person holding the phone is the person applying. None had a model for passing the device across a desk mid-flow.",
      ],
      [
        "Severity 3 · Error prevention",
        "A mistyped field cost the customer a second trip",
        "A wrong PAN or pin code surfaced days later at verification. The executive had made the error, and the customer had to come back to the store to fix it.",
      ],
    ],

    insight: {
      title: "The app belongs to the executive. Its most important minutes belong to a stranger.",
      bullets: [
        "An executive sees these screens hundreds of times. A customer sees them **about eight times, for under a minute each**, and only ever at the point of committing to something.",
        "Live photo, KYC consent, bureau check consent, OTP, uploads, e-signature, home visit consent. Every one is legally binding and none of them can be delegated.",
        "So I stopped designing one interface and started designing two modes of the same journey: **work mode** and **handoff mode**.",
        "Work mode is dense and fast. Handoff mode strips to a single plain question, with the executive's workspace out of sight.",
      ],
    },

    personas: [
      [
        "Sales centre executive",
        "In-store, customer beside them",
        "Runs fifteen to twenty applications a day and owns the compliance on every one. Every extra tap costs them, and they need the handoff to be quick enough that it does not stall the conversation.",
      ],
      [
        "Call centre executive",
        "Same journey, no customer in the room",
        "Drives the same flow over the phone, so the app and the call have to stay in step. Handoffs become links and OTPs rather than a passed device.",
      ],
      [
        "Store manager",
        "Reads more than they key",
        "Owns the dealer portfolio, the team's pipeline and the escalations. They need status at a glance, not another data-entry screen.",
      ],
    ],
    customerNote:
      "The customer is not a user of this app. They are a participant in it, for the eight or so moments the law says only they can complete. Designing for them meant designing those moments, not a journey.",

    needs: [
      "**Fast for the person who lives in it.** Fifteen to twenty applications a day means every saved tap compounds.",
      "**Instantly legible to someone who has never seen it.** The customer gets no training, no orientation and no second attempt.",
      "**Safe to hand over.** The executive's phone holds other people's applications, and none of that can be visible when it changes hands.",
    ],
    firstRelease: [
      "**The eleven-step origination journey**, driven end to end by the executive.",
      "**Handoff mode**: live photo, KYC and bureau consent, OTP, uploads, e-signature and home visit consent.",
      "**Portfolio and dealer views** for store managers, built for reading rather than entry.",
      "**A 100+ component library** the other five products build from.",
    ],

    themes: [
      ["Fast", "For the person who runs this all day, every tap is a cost. Work mode is dense on purpose."],
      ["Legible", "At handoff a stranger has to understand what they are agreeing to with nobody explaining it."],
      ["Contained", "The phone is not the customer's. Handoff shows them their step and nothing else."],
    ],
    vennLabels: ["Fast", "Legible", "Contained"],
    vennCenter: "One handoff",

    dives: [
      {
        eye: "Work mode",
        title: "One screen, one job, because speed compounds.",
        bullets: [
          "Forty fields on a phone is a scroll nobody finishes twice, let alone twenty times a day.",
          "So no screen asks for more than one category of information, and the executive never has to hunt for where they were.",
          "This came out of testing, not theory. The first wireframes were scrollable and multi-action, and they lost everyone who tried them.",
          "Dual progress, a percentage and a step count, so an executive interrupted mid-application knows exactly where to resume.",
        ],
        phones: [
          ["m3/address.png", "Address details step"],
          ["m3/employment.png", "Employment details step"],
        ],
      },
      {
        eye: "Handoff mode",
        title: "The thirty seconds the customer is holding the phone.",
        rev: true,
        bullets: [
          "At a handoff the screen changes character: one question, plain language, and what happens next stated before they act.",
          "Live photo, KYC consent and the bureau check each say **why** the data is needed, not just that consent is required.",
          "The key facts statement is signed by OTP, so the customer confirms with something only they have rather than a scrawl on a slip.",
          "The executive's queue is hidden for the duration. Nobody hands a stranger a phone showing somebody else's loan.",
        ],
        phones: [
          ["m3/personal.png", "Live photo capture at handoff"],
          ["m3/consent.png", "Credit bureau check consent"],
          ["m3/kfs.png", "Key facts statement and e-signature"],
        ],
      },
      {
        eye: "The turn-around",
        title: "The one screen an executive shows rather than fills.",
        bullets: [
          "Amount, EMI, tenure and interest rate together, with the total cost stated rather than implied.",
          "It is built to be read upside down across a desk, then turned around and read properly.",
          "No fine print, no second screen, no charge that appears after the customer has committed.",
          "This is what the whole journey is building toward, so it is the screen I spent longest on.",
        ],
        phones: [["m3/summary.png", "Loan summary"]],
      },
    ],

    constraints: [
      [
        "01",
        "The phone is not the customer's",
        "Handing over a device mid-application means handing over everything on it. Handoff mode hides the queue, locks navigation to the single step in front of the customer, and returns control to the executive when they are done.",
      ],
      [
        "02",
        "Compliance you cannot design away",
        "KYC, bureau consent and the key facts statement are mandated and cannot be shortened. So I stopped fighting them and sequenced them instead: each lands at the moment it makes sense, never stacked into one wall at the end.",
      ],
      [
        "03",
        "A flagship and a 2G handset, same screens",
        "The app had to hold up from a metro flagship to an entry-level Android on village 2G. That ruled out heavy imagery and animation, and it is why the interface leans on type, spacing and iconography that render at any size.",
      ],
    ],

    impact: [
      ["Paper", "In-app", "how consent and signature are captured"],
      ["Days", "Same visit", "to complete the customer's half"],
      ["6", "1", "design systems across the product range"],
      ["0", "100+", "shared components"],
      ["5 days", "3 days", "to train a new executive"],
      ["Scroll", "One screen", "how much a step asks at once"],
    ],
    measured: [
      ["60%", "faster application processing than the paper flow"],
      ["40%", "less training time for a new executive"],
      ["Days, not weeks", "to assemble the next product journey from the library"],
    ],
    impactNote:
      "Before figures describe the paper-assisted origination process the app replaced. After figures were measured once the two-wheeler journey was live.",

    // Mechanics behind each method, rendered as the "How it was run" notes.
    how: {
      audit:
        "I ran the paper process myself first, start to finish, as a fake customer in a real store, because reading a process document tells you nothing about what it feels like to sign six forms in front of someone who is waiting. Then a heuristic sweep of that plus five competitor apps, every issue rated 0 to 4 and tied to a specific role and task. The competitor teardown was task-matched rather than feature-matched: same job, five products, where does each one break.",
      personas:
        "Built from shift observation, not interviews alone. I sat with executives through full days in three stores and counted: how many applications, how many interruptions, how often the phone changed hands. The store manager persona only emerged because the data showed they were reading far more than they were typing, which no one had said out loud in an interview.",
      wireframes:
        "Grayscale, three options per hard screen, tested as printouts before anything was built. Executives ranked them against a timed task rather than saying which they liked. The scrolling multi-action layout won on preference and lost badly on time, which is the reason the whole product ended up as one screen per job.",
      validation:
        "Two settings, deliberately. Figma prototypes with internal stakeholders and executives, which catches structure. Then I sat in an actual store and watched real customers take the phone at consent and signature steps, which catches everything the prototype cannot: that people sign without reading, that they hold the phone at an angle, that they hand it back too early. The second setting produced every change that mattered.",
    },

    iterations: [
      [
        "Scrollable, multi-action screens overwhelmed everyone",
        "The first wireframes put several actions on one scrolling screen. Stakeholders and engineers both lost the thread. I pivoted the whole structure to one screen, one job, which became the rule the rest of the design hangs off.",
      ],
      [
        "Nobody could get back to a step they had finished",
        "Six sales executives on the mid-fi prototype all hit the same wall: a completed step was a dead end. I added persistent edit affordances and a visible way back, so one wrong field no longer meant starting over.",
      ],
      [
        "Customers were signing things they had not read",
        "Watching real handoffs was the uncomfortable part. People took the phone, saw a wall of compliance language, and tapped agree. Every handoff screen was rewritten to one plain question, the reason for it, and what happens next.",
      ],
      [
        "Handing the phone over exposed the queue",
        "Testers could swipe out of the consent screen and into the executive's other applications. That is a privacy failure, not a UX nitpick. Handoff mode now locks to the single step until it is complete.",
      ],
    ],

    lessons: {
      title: "The handoff was the product. The rest was data entry.",
      bullets: [
        "**Design the seams, not just the screens.** The moments this app changes hands are the ones that carry legal weight, and they were the ones nobody had designed.",
        "**Watch the room, not the prototype.** Sitting in a store and seeing a customer sign without reading told me more than any usability session.",
        "**Consent is a design problem.** Legal decides what must be asked. How it is asked, and whether it is understood, is on me.",
        "**Build the library first.** The component system is why five more products assembled in days. The screens were the visible part, not the valuable part.",
      ],
    },

    screens: [
      ["m3/login.png", "Sign in, for sales and call centre staff"],
      ["m3/dashboard.png", "Applications queue"],
      ["m3/portfolio.png", "Portfolio, the store manager view"],
      ["m3/address.png", "Address details"],
      ["m3/employment.png", "Employment details"],
      ["m3/vehicle.png", "Vehicle type selection"],
      ["m3/summary.png", "Loan summary"],
      ["m3/disbursed.png", "Disbursed"],
    ],
    // Honest framing: the flow, content and decisions are the product as it
    // shipped. The visual layer is the current Material 3 design language.
    screensNote:
      "Structure, flow and content are the product as it shipped. The visual layer is a Material 3 refresh in the current design language.",
  },
};
