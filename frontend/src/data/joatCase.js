// Jack of All Threads (JoaT) — India's first crowdfunding platform for custom
// apparel (Bangalore). Presented as a UX + visual redesign. Content is grounded
// in the real product screens + contemporaneous press (The Hindu, Deccan Herald,
// DNA, YourStory, Inc42). No fabricated performance metrics; press-reported
// traction is attributed. Faraz's exact role/title: VERIFY with Faraz.

const J = (f) => `/joat/${f}`;

export const joat = {
  slug: "somethings-cooking",
  title: "Jack of All Threads",
  subtitle:
    "A UX and visual redesign of India's first crowdfunding platform for custom apparel: design a tee, set a goal, and sell it before a single shirt is printed.",

  hero: {
    cover: "/joat/cover.jpg",
    stats: [
      { value: "1", label: "Platform: design, sell, ship, get paid" },
      { value: "₹0", label: "Upfront cost to the creator" },
      { value: "150+", label: "Campaigns run on the platform" },
    ],
  },

  // --- 01 OVERVIEW ---
  overview: {
    headline: "Project Overview",
    tldrTitle: "TL;DR",
    tldr:
      "Jack of All Threads (JoaT) was India's first crowdfunding platform for custom t-shirts and merch, out of Bangalore. Anyone, a student, a band, an NGO, could design a tee in the browser, set a sales goal and price, and promote a campaign link, usually through Facebook ads. JoaT produced and shipped only once a campaign hit its goal, then split the profit with the creator, who paid nothing and carried no inventory risk. I led the UX and visual redesign of the whole product: the Design Studio, the campaign flow, the buyer journey, and the Raiser dashboards.",
    facts: [
      { label: "Role", value: "UX & Visual Design" },
      { label: "Company", value: "Jack of All Threads, Bangalore" },
      { label: "Platform", value: "Responsive Web + Mobile" },
      { label: "Scope", value: "End-to-end product redesign" },
    ],
    intro:
      "JoaT grew out of a college project into India's first t-shirt crowdfunding platform, covered by The Hindu, Deccan Herald, DNA and YourStory and used by causes like CRY and the Akshaya Patra Foundation. I owned the interface end to end and reframed the product as a single, cohesive platform.",
    intro2:
      "The redesign had one job at its centre: take a process that used to span half a dozen disconnected tools and vendors, and make it feel like one calm flow that anyone could finish in an afternoon.",
    contextTitle: "The model in one line",
    contextBody:
      "You publicise. We produce. You keep the profit. The creator designs and promotes; JoaT handles production, shipping, payments and support; nobody pays upfront and nothing is printed until the campaign is funded.",
  },

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
      "The whole product is one loop, surfaced plainly on the homepage so a first-time raiser understands it before signing up.",
    steps: [
      { n: "01", t: "Design in minutes", d: "Pick a product and colour, drop in artwork, text or an upload, and preview it live on the tee. A base cost appears instantly for different quantities." },
      { n: "02", t: "Set your price and promote", d: "Choose a sales goal, an end date and a per-tee price; the flow shows the minimum profit before you launch. Share the campaign link and drive traffic with Facebook ads and social." },
      { n: "03", t: "We produce, you profit", d: "If the goal is met, JoaT prints, ships to every buyer, and transfers the profit. The raiser pays nothing, since all cost sits with the buyers." },
    ],
    image: { src: J("01-homepage.jpg"), caption: "Homepage: the model explained to a first-time raiser, with live campaigns and press credibility." },
  },

  // --- 04 INFORMATION ARCHITECTURE ---
  ia: {
    headline: "Structuring a stack of tools into one platform",
    intro:
      "The information architecture had to hold a creator tool, a public storefront, and a back office in one place without any of them feeling bolted on. I organised everything around three jobs: create a campaign, back a campaign, and manage what you have launched.",
    diagram: J("ia.svg"),
    caption: "Information architecture: the creator studio, the buyer storefront, and the raiser back office under one roof.",
  },

  // --- 05 USER FLOW ---
  userFlow: {
    headline: "One journey, two sides",
    intro:
      "A campaign has two flows that meet on the public campaign page. The raiser designs, prices and launches; the buyer arrives from an ad or a shared link and orders. Everything in between, production, payments and shipping, is the platform's job, not theirs.",
    diagram: J("flow.svg"),
    caption: "The raiser and buyer journeys, meeting at the live campaign page.",
  },

  // --- 06 WIREFRAMES ---
  wireframes: {
    headline: "From greybox layouts to the final product",
    intro:
      "Before any visual design, I blocked out the heaviest screens in greyscale to settle structure and hierarchy. Each one was a few layout options pressure-tested on its core job.",
    batches: [
      { src: J("wf-studio.svg"), caption: "Design Studio: controls in a left rail vs a top toolbar vs floating panels. The left rail won, keeping the live tee preview central." },
      { src: J("wf-campaign.svg"), caption: "Set Price and Goal: economics buried in a form vs surfaced as a live profit panel beside the tee. The live panel made the money obvious before launch." },
      { src: J("wf-home.svg"), caption: "Homepage: explain-then-browse vs browse-first vs a single hero. Explain-then-browse won, since most visitors had never seen crowdfunded tees." },
    ],
  },

  // --- 07 DESIGN STUDIO ---
  studio: {
    headline: "The Design Studio: design in the browser, nothing to install",
    intro:
      "Instead of opening design software, exporting a file and emailing a printer, a creator designs right here. Pick a product and colour, then Add Artwork, Pick a Layout, Add Text, Upload Image or Pick a Background, with a live preview and a running base cost. It is one step inside a single flow that ends in a live campaign, not a handoff to the next tool.",
    image: { src: J("02-design-studio.jpg"), caption: "Design Studio: central live preview, one controls rail, and base cost surfaced as you design." },
    points: [
      { t: "No installs, no handoffs", d: "Design in the browser. The file never leaves the platform on its way to print, so there is nothing to export, email or re-upload." },
      { t: "Live tee preview", d: "Front and back, real product colours, and a curated artwork library so a blank tee becomes a finished design fast." },
      { t: "Cost as you go", d: "A base cost at a sample quantity sits beside the canvas, so the economics start before the campaign flow even opens." },
    ],
  },

  // --- 08 CAMPAIGN FLOW ---
  campaign: {
    headline: "Making the money obvious",
    intro:
      "Design is step one of three: Design your tee, Set your price, Add a description. The pricing step is where most platforms hide the economics; I pulled them into the open. A goal slider, an end date and a per-tee price drive a live minimum-profit figure, with the reassurance that matters most, pay nothing even if the campaign fails, stated right there.",
    screens: [
      { src: J("03-set-price.jpg"), title: "Set Your Price", desc: "Goal slider, campaign end date and selling price drive a live minimum-profit calc; the no-risk promise sits beside the CTA." },
      { src: J("04-add-description.jpg"), title: "Add a Description", desc: "The final step before launch, the story and details that make a campaign shareable." },
      { src: J("05-campaign.jpg"), title: "Campaign Page", desc: "The public campaign page a raiser shares into Facebook ads and social to convert cold traffic into buyers." },
    ],
  },

  // --- 09 RAISER DASHBOARD ---
  dashboard: {
    headline: "Running the campaign after launch",
    intro:
      "Once live, a raiser needs to track orders, watch progress toward the goal, manage their account, and get paid. The dashboards stayed in the same calm, single-focus visual language as the studio.",
    screens: [
      { src: J("06-dashboard.jpg"), title: "Order Tracking", desc: "Where a raiser follows orders and campaign progress at a glance." },
      { src: J("07-payout.jpg"), title: "Payout", desc: "The profit transfer view, the moment the whole model pays off for the creator." },
      { src: J("08-stories.jpg"), title: "Stories", desc: "Real campaigns and causes, doubling as social proof for the next raiser." },
      { src: J("10-account.jpg"), title: "Account", desc: "Profile and settings, kept light so the focus stays on creating and selling." },
    ],
  },

  // --- 10 RESPONSIVE ---
  responsive: {
    headline: "Desktop to mobile",
    intro:
      "The studio and storefront were designed to scale from a wide desktop canvas down to a single-column phone layout. On mobile the model collapses to the same three promises, Design in Minutes, Set Your Price and Sell, We Produce You Profit, so a campaign discovered on a phone (where most ad traffic landed) still makes sense in one scroll.",
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
