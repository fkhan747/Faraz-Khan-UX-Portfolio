// Jack of All Threads (JoaT) — India's first crowdfunding platform for custom
// apparel (Bangalore, ~2014–2016, since shut down). Content is grounded in the
// real product screens + contemporaneous press (The Hindu, Deccan Herald, DNA,
// YourStory, Inc42). No fabricated performance metrics — the company closed and
// its analytics went with it, so outcomes are framed as design work + cited
// press traction. Faraz's role/title and exact dates: VERIFY with Faraz.

const J = (f) => `/joat/${f}`;

export const joat = {
  slug: "somethings-cooking",
  title: "Jack of All Threads",
  subtitle:
    "Designing India's first crowdfunding platform for custom apparel — design a tee, set a goal, and sell it before a single shirt is printed.",

  hero: {
    cover: "/joat/cover.jpg",
    stats: [
      { value: "40+", label: "Screens Designed" },
      { value: "3", label: "Breakpoints (1920 / 1024 / 320)" },
      { value: "1st", label: "Tee Crowdfunding in India" },
    ],
  },

  // --- 01 OVERVIEW ---
  overview: {
    headline: "Project Overview",
    tldrTitle: "TL;DR",
    tldr:
      "Jack of All Threads (JoaT) was India's first crowdfunding platform for custom t-shirts and merch, out of Bangalore. Anyone — a student, a band, an NGO — could design a tee in the browser, set a sales goal and price, and promote a campaign link (usually through Facebook ads). JoaT produced and shipped only once a campaign hit its goal, then split the profit with the creator, who paid nothing and carried no inventory risk. I designed the end-to-end product: the web Design Studio, the campaign-creation flow, the buyer journey, and the Raiser dashboards, across desktop, a 1024px grid, and mobile.",
    facts: [
      { label: "Role", value: "Product / UX Designer" },
      { label: "Year", value: "2014–2016" },
      { label: "Company", value: "Jack of All Threads, Bangalore" },
      { label: "Platform", value: "Responsive Web + Mobile" },
      { label: "Status", value: "Shipped · since shut down" },
    ],
    intro:
      "JoaT started in 2012 as a college project and grew into India's first t-shirt crowdfunding platform, covered by The Hindu, Deccan Herald, DNA and YourStory and used by causes like CRY and the Akshaya Patra Foundation. I joined as the product designer and owned the interface end to end.",
    intro2:
      "The hard part wasn't the storefront, it was the two tools underneath it: a design studio simple enough for people who had never used Photoshop, and a campaign flow that made the economics — goal, price, profit, risk — obvious before anyone hit launch.",
    contextTitle: "The model in one line",
    contextBody:
      "You publicise. We produce. You keep the profit. The creator designs and promotes; JoaT handles production, shipping, payments and support; nobody pays upfront and nothing is printed until the campaign is funded.",
  },

  // --- 02 PROBLEM ---
  problem: {
    headline: "Custom merch in India was all risk, upfront",
    coreChallenge:
      "Getting custom tees made meant high minimum orders, paying before you sold a single piece, and design skills most people didn't have. A student wanting 40 club tees, or an NGO raising funds, had to front the money and hope.",
    dimensions: [
      { title: "Upfront risk", desc: "Minimum order quantities and pay-first printing meant real money on the line before any demand was proven." },
      { title: "No design skills", desc: "Most raisers weren't designers. Anything that looked like Photoshop would lose them in the first minute." },
      { title: "Opaque economics", desc: "People couldn't see what they'd actually earn. Price, base cost, goal and profit lived in a spreadsheet, not the flow." },
      { title: "Promote-to-strangers", desc: "Campaigns lived or died on a shareable link dropped into Facebook ads and social — so the funnel had to convert cold traffic." },
    ],
    hypothesisTitle: "The design bet",
    hypothesis:
      "If we make designing a tee feel like minutes of play, and put the money math (goal, price, profit, 'pay nothing if it fails') right in the flow, ordinary people will launch campaigns they'd never have risked the old way.",
    hypothesisBullets: ["Design in minutes", "Economics in the flow", "Zero upfront risk"],
  },

  // --- 03 HOW IT WORKS ---
  howItWorks: {
    headline: "How a campaign works",
    intro:
      "The whole product is one loop, surfaced plainly on the homepage so a first-time raiser understands it before signing up.",
    steps: [
      { n: "01", t: "Design in minutes", d: "Pick a product and colour, drop in artwork, text or an upload, and preview it live on the tee. A base cost appears instantly for different quantities." },
      { n: "02", t: "Set your price & promote", d: "Choose a sales goal, an end date and a per-tee price; the flow shows the minimum profit before you launch. Share the campaign link and drive traffic with Facebook ads and social." },
      { n: "03", t: "We produce, you profit", d: "If the goal is met, JoaT prints, ships to every buyer, and transfers the profit. The raiser pays nothing — all cost sits with the buyers." },
    ],
    image: { src: J("01-homepage.jpg"), caption: "Homepage — the model explained to a first-time raiser, with live campaigns and press credibility." },
  },

  // --- 04 DESIGN STUDIO ---
  studio: {
    headline: "The Design Studio: Photoshop for people who've never used Photoshop",
    intro:
      "This was the heart of the product. A non-designer had to land on a blank tee and, minutes later, have something they were proud to sell. I kept the canvas central and the controls to a single rail: pick product and colour, then Add Artwork, Pick a Layout, Add Text, Upload Image, Pick a Background — with a live preview and a running base cost so the price was never a surprise.",
    image: { src: J("02-design-studio.jpg"), caption: "Design Studio — central live preview, one controls rail, and base cost surfaced as you design." },
    points: [
      { t: "One rail, plain verbs", d: "Add Artwork, Add Text, Upload Image. No layers, no panels, no jargon — just the moves a raiser actually needs." },
      { t: "Live tee preview", d: "Front/back, real product colours and a curated artwork library so a blank tee becomes a finished design fast." },
      { t: "Cost as you go", d: "A base cost at a sample quantity sits beside the canvas, so the economics start before the campaign flow even opens." },
    ],
  },

  // --- 05 CAMPAIGN FLOW ---
  campaign: {
    headline: "Making the money math obvious",
    intro:
      "Design is step one of three: Design your tee → Set your price → Add a description. The pricing step is where most platforms hide the economics; I pulled them into the open. A goal slider, an end date, and a per-tee price drive a live minimum-profit figure, with the reassurance that matters most — pay nothing even if the campaign fails — stated right there.",
    screens: [
      { src: J("03-set-price.jpg"), title: "Set Your Price", desc: "Goal slider, campaign end date and selling price drive a live minimum-profit calc; the no-risk promise sits beside the CTA." },
      { src: J("04-add-description.jpg"), title: "Add a Description", desc: "The final step before launch — the story and details that make a campaign shareable." },
      { src: J("05-campaign.jpg"), title: "Campaign Page", desc: "The public campaign page a raiser shares into Facebook ads and social to convert cold traffic into buyers." },
    ],
  },

  // --- 06 RAISER DASHBOARD ---
  dashboard: {
    headline: "Running the campaign after launch",
    intro:
      "Once live, a raiser needs to track orders, watch progress toward the goal, manage their account, and get paid. The dashboards stayed in the same calm, single-focus visual language as the studio.",
    screens: [
      { src: J("06-dashboard.jpg"), title: "Order Tracking", desc: "Where a raiser follows orders and campaign progress at a glance." },
      { src: J("07-payout.jpg"), title: "Payout", desc: "The profit transfer view — the moment the whole model pays off for the creator." },
      { src: J("08-stories.jpg"), title: "Stories", desc: "Real campaigns and causes, doubling as social proof for the next raiser." },
      { src: J("10-account.jpg"), title: "Account", desc: "Profile and settings, kept light so the focus stays on creating and selling." },
    ],
  },

  // --- 07 RESPONSIVE ---
  responsive: {
    headline: "Desktop to mobile",
    intro:
      "The studio and storefront were designed at a 1920px desktop canvas, a 1024px grid, and a 320px mobile layout. On mobile the model collapses to the same three promises — Design in Minutes, Set Your Price & Sell, We Produce You Profit — so a campaign discovered on a phone (where most ad traffic landed) still made sense in one scroll.",
    screens: [
      { src: J("m-home.jpg"), title: "Mobile · Home" },
      { src: J("m-stories.jpg"), title: "Mobile · Stories" },
      { src: J("m-login.jpg"), title: "Mobile · Log in" },
      { src: J("m-about.jpg"), title: "Mobile · About" },
    ],
  },

  // --- 08 REFLECTION ---
  reflection: {
    headline: "What it was, and what I'd do differently",
    note:
      "JoaT has since shut down, so there's no live product to link and the deeper analytics closed with it. I won't invent numbers. What stands is the work itself and what the press recorded at the time.",
    pressTitle: "What the record shows",
    press: [
      "India's first crowdfunding platform for t-shirts and custom apparel, out of Bangalore.",
      "Covered by The Hindu, Deccan Herald, DNA, YourStory and Inc42.",
      "Used for college tees, fan groups, artwork and social causes — partners included CRY and the Akshaya Patra Foundation.",
      "Reported by press to have grown quickly in 2014–15 before the company later wound down.",
    ],
    differently: [
      "The Design Studio tried to offer everything at once. I'd ruthlessly stage the controls — get a raiser to a sellable design in three taps, reveal power later.",
      "We designed desktop-first on a 1920 canvas; most ad traffic arrived on phones. I'd lead with the mobile campaign flow next time, not retrofit it.",
      "The economics UI was strong but untested with real raisers. I'd put the goal/price/profit screen in front of actual first-time creators before build.",
      "Campaign pages had to convert cold Facebook traffic — a job for sharper, test-driven landing pages than a one-size template.",
    ],
  },
};
