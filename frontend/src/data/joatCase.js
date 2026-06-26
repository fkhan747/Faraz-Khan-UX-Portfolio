// Jack of All Threads (JoaT) - India's first crowdfunding platform for custom
// apparel (Bangalore). Presented as a UX + visual redesign. Content is grounded
// in the real product screens + contemporaneous press (The Hindu, Deccan Herald,
// DNA, YourStory, Inc42). No fabricated performance metrics; press-reported
// traction is attributed. Faraz's role on the project: Senior UX / UI Designer.
// Image w/h are intrinsic pixel sizes (reserve space, prevent layout shift).

const J = (f) => `/joat/${f}`;

export const joat = {
  slug: "somethings-cooking",
  title: "Jack of All Threads",
  subtitle:
    "A UX and visual redesign of India's first crowdfunding platform for custom apparel: design a tee, set a goal, and sell it before a single shirt is printed.",

  hero: {
    cover: "/joat/cover.jpg",
    stats: [
      { value: "1st", label: "Crowdfunding platform for custom apparel in India" },
      { value: "₹0", label: "Upfront cost to the creator" },
      { value: "6+", label: "Tools and vendors collapsed into one flow" },
    ],
  },

  // --- 01 OVERVIEW ---
  overview: {
    headline: "Project Overview",
    tldrTitle: "TL;DR",
    tldr:
      "Jack of All Threads (JoaT) was India's first crowdfunding platform for custom apparel, out of Bangalore: design a tee in the browser, set a goal, and sell it before a single shirt is printed. I led the UX and visual redesign end to end: the Design Studio, the campaign flow, the buyer journey, and the Raiser dashboards.",
    facts: [
      { label: "Role", value: "Senior UX / UI Designer" },
      { label: "Company", value: "Jack of All Threads, Bangalore" },
      { label: "Platform", value: "Responsive Web + Mobile" },
      { label: "Scope", value: "End-to-end product redesign" },
    ],
    intro:
      "JoaT grew out of a college project into India's first t-shirt crowdfunding platform. The Hindu, Deccan Herald, DNA and YourStory covered it, and causes like CRY and the Akshaya Patra Foundation used it. I owned the interface end to end and reframed the product as a single, cohesive platform.",
    intro2:
      "The redesign had one job at its center: take a process that used to span six disconnected tools and vendors, and make it feel like one calm flow that anyone could finish in an afternoon.",
    contextTitle: "The model in one line",
    contextBody:
      "You publicize. We produce. You keep the profit. The creator designs and promotes; JoaT handles production, shipping, payments and support; nobody pays upfront and nothing is printed until the campaign is funded.",
  },

  primaryUsers: [
    { label: "Campaign Raisers", desc: "Students, college clubs, bands, artists and small brands who design a tee and run a campaign to sell it, with no upfront cost and no inventory." },
    { label: "Cause & NGO Raisers", desc: "Non-profits like CRY and the Akshaya Patra Foundation raising funds and awareness through merch campaigns." },
    { label: "Buyers / Backers", desc: "Supporters who land on a campaign from a shared link or a Facebook ad and order the tee, which is what funds the run." },
  ],

  // --- 02 PROBLEM ---
  problem: {
    headline: "Selling custom merch meant juggling a stack of tools",
    coreChallenge:
      "To make and sell custom tees, people stitched together separate tools and vendors: one to design, another to mock it up, a printer with high minimum orders, a way to take payments, and their own shipping. Every handoff added cost, dependency and risk before a single shirt sold.",
    dimensions: [
      { title: "A stack of disconnected tools", desc: "Design in one place, mock up in another, print with a vendor, collect payments somewhere else, arrange shipping yourself. Nothing talked to anything." },
      { title: "Cost and risk upfront", desc: "High minimum orders and pay-first printing put real money on the line before any demand was proven." },
      { title: "No owner of the journey", desc: "If one tool or vendor fell over, the whole campaign stalled, and the creator carried the fallout alone." },
      { title: "Promote to strangers", desc: "Campaigns lived or died on a shareable link dropped into Facebook ads and social, so the funnel had to convert cold traffic." },
    ],
    hypothesisTitle: "The redesign bet",
    hypothesis:
      "If one platform owns the entire journey, design, pricing, payments, production, shipping and payout, then a creator can launch with zero upfront cost and nothing to wrangle but the idea.",
    hypothesisBullets: ["One platform for all", "Zero upfront cost", "Nothing to wrangle"],
  },

  // --- 03 HOW IT WORKS ---
  howItWorks: {
    headline: "How a campaign works",
    intro:
      "I surfaced the whole product as one loop, right on the homepage, so a first-time raiser gets it before they ever sign up.",
    steps: [
      { n: "01", t: "Design in minutes", d: "Pick a product and color, drop in artwork, text or an upload, and preview it live on the tee. A base cost appears instantly for different quantities." },
      { n: "02", t: "Set your price and promote", d: "Choose a sales goal, an end date and a per-tee price; the flow shows the minimum profit before you launch. Share the campaign link and drive traffic with Facebook ads and social." },
      { n: "03", t: "We produce, you profit", d: "If the goal is met, JoaT prints, ships to every buyer, and transfers the profit. The raiser pays nothing upfront and nothing if the campaign falls short, so there is no inventory and no risk." },
    ],
    image: { src: J("01-homepage.jpg"), w: 1400, h: 3920, caption: "Homepage: the model explained to a first-time raiser, with live campaigns and press credibility." },
  },

  // --- 04 INFORMATION ARCHITECTURE ---
  ia: {
    headline: "Structuring a stack of tools into one platform",
    intro:
      "The IA had to hold a creator tool, a public storefront, and a back office in one place, none of them feeling bolted on. So I organized everything around three jobs: create a campaign, back a campaign, and manage what you have launched.",
    diagram: J("ia.svg"),
    diagramW: 1080,
    diagramH: 560,
    caption: "Information architecture: the creator studio, the buyer storefront, and the raiser back office under one roof.",
  },

  // --- 05 USER FLOW ---
  userFlow: {
    headline: "One journey, two sides",
    intro:
      "I split the journey in two so neither side carries the other's weight. The raiser designs, prices and launches. The buyer arrives from an ad or a shared link and orders. Everything in between, production, payments, shipping, is the platform's job, not theirs.",
    diagram: J("flow.svg"),
    diagramW: 1080,
    diagramH: 440,
    caption: "The raiser and buyer journeys, meeting at the live campaign page.",
  },

  // --- 06 WIREFRAMES ---
  wireframes: {
    headline: "From graybox layouts to the final product",
    intro:
      "Before any visual design, I blocked out the heaviest screens in grayscale to settle structure and hierarchy. Each one was a few layout options pressure-tested on its core job.",
    batches: [
      { src: J("wf-studio.svg"), w: 1080, h: 580, caption: "Design Studio: controls in a left rail vs a top toolbar vs floating panels. The left rail won, keeping the live tee preview central." },
      { src: J("wf-campaign.svg"), w: 1080, h: 580, caption: "Set Price and Goal: economics buried in a form vs surfaced as a live profit panel beside the tee. The live panel made the money obvious before launch." },
      { src: J("wf-home.svg"), w: 1080, h: 580, caption: "Homepage: explain-then-browse vs browse-first vs a single hero. Explain-then-browse won, since most visitors had never seen crowdfunded tees." },
    ],
  },

  // --- 07 DESIGN STUDIO ---
  studio: {
    headline: "The Design Studio: design in the browser, nothing to install",
    intro:
      "Instead of opening design software, exporting a file and emailing a printer, a creator designs right here. Pick a product and color, then add artwork, a layout, text, an upload or a background, with a live preview and a running base cost. It's one step inside a single flow that ends in a live campaign, not a handoff to the next tool.",
    image: { src: J("02-design-studio.jpg"), w: 1400, h: 870, caption: "Design Studio: central live preview, one controls rail, and base cost surfaced as you design." },
    points: [
      { t: "No installs, no handoffs", d: "Design in the browser. The file never leaves the platform on its way to print, so there is nothing to export, email or re-upload." },
      { t: "Live tee preview", d: "Front and back, real product colors, and a curated artwork library so a blank tee becomes a finished design fast." },
      { t: "Cost as you go", d: "A base cost at a sample quantity sits beside the canvas, so the economics start before the campaign flow even opens." },
    ],
  },

  // --- 08 CAMPAIGN FLOW ---
  campaign: {
    headline: "Making the money obvious",
    intro:
      "Design is step one of three: Design your tee, Set your price, Add a description. The pricing step is where most platforms hide the economics; I pulled them into the open. A goal slider, an end date and a per-tee price update a live minimum-profit figure. The reassurance that matters most, pay nothing even if the campaign fails, sits right beside the CTA.",
    screens: [
      { src: J("03-set-price.jpg"), w: 1400, h: 870, title: "Set Your Price", desc: "Goal slider, campaign end date and selling price drive a live minimum-profit calc; the no-risk promise sits beside the CTA." },
      { src: J("04-add-description.jpg"), w: 1400, h: 870, title: "Add a Description", desc: "The final step before launch, the story and details that make a campaign shareable." },
      { src: J("05-campaign.jpg"), w: 1400, h: 870, title: "Campaign Page", desc: "The public campaign page a raiser shares into Facebook ads and social to convert cold traffic into buyers." },
    ],
  },

  // --- 09 RAISER DASHBOARD ---
  dashboard: {
    headline: "Running the campaign after launch",
    intro:
      "Once a campaign is live, the raiser needs to track orders, watch the goal, manage their account, and get paid. I kept the dashboards in the same calm, single-focus language as the studio, so going live never felt like switching to a different product.",
    screens: [
      { src: J("06-dashboard.jpg"), w: 1400, h: 922, title: "Order Tracking", desc: "Where a raiser follows orders and campaign progress at a glance." },
      { src: J("07-payout.jpg"), w: 1400, h: 808, title: "Payout", desc: "The profit transfer view, the moment the whole model pays off for the creator." },
      { src: J("08-stories.jpg"), w: 1400, h: 1891, title: "Stories", desc: "Real campaigns and causes, doubling as social proof for the next raiser." },
      { src: J("10-account.jpg"), w: 1400, h: 808, title: "Account", desc: "Profile and settings, kept light so the focus stays on creating and selling." },
    ],
  },

  // --- 10 RESPONSIVE ---
  responsive: {
    headline: "Desktop to mobile",
    intro:
      "I designed the studio and storefront to scale from a wide desktop canvas down to a single-column phone layout. On mobile the model collapses to the same three promises: Design in Minutes, Set Your Price and Sell, We Produce You Profit. So a campaign discovered on a phone, where most ad traffic landed, still makes sense in one scroll.",
    screens: [
      { src: J("m-home.jpg"), title: "Mobile · Home" },
      { src: J("m-stories.jpg"), title: "Mobile · Stories" },
      { src: J("m-login.jpg"), title: "Mobile · Log in" },
      { src: J("m-about.jpg"), title: "Mobile · About" },
    ],
  },

  // --- 11 REFLECTION ---
  reflection: {
    headline: "What it was, and what I'd do differently",
    note:
      "I won't invent numbers for this one. What stands is the work itself and what the press recorded at the time.",
    pressTitle: "What the record shows",
    press: [
      "India's first crowdfunding platform for t-shirts and custom apparel, out of Bangalore.",
      "Covered by The Hindu, Deccan Herald, DNA, YourStory and Inc42.",
      "Used for college tees, fan groups, artwork and social causes, with partners including CRY and the Akshaya Patra Foundation.",
      "Reported by press to have grown quickly through 2014 and 2015.",
    ],
    differently: [
      "The Design Studio tried to offer everything at once. I'd stage the controls harder, getting a raiser to a sellable design in three taps and revealing power later.",
      "We designed desktop-first; most ad traffic arrived on phones. I'd lead with the mobile campaign flow next time, not retrofit it.",
      "The economics UI was strong but untested with real raisers. I'd put the goal, price and profit screen in front of actual first-time creators before build.",
      "Campaign pages had to convert cold Facebook traffic, a job for sharper, test-driven landing pages than a one-size template.",
    ],
  },
};
