// Portfolio content for Faraz Khan
export const PROFILE = {
  name: "faraz khan",
  role: "Sr. User Experience Lead",
  since: "2013",
  status: "available for new opportunities",
  email: "Abdulfarazkhan@outlook.com",
  phone: "+91 - 7795661693",
  bookingUrl: "https://cal.com/khanfaraz/30min?theme=dark", // Direct to the 30-min event (skips the picker) + dark theme. Handle is "khanfaraz" (changed from fkhan747). Other events: /interview and /15min - swap the slug here to change which one the button opens.
  city: "Pune, Maharashtra · India",
  currentCompany: "Persistent Systems Limited",
  currentSince: "Feb 2023",
  social: {
    linkedin: "https://linkedin.com/",
  },
};

const F = (n) => `/finvista/${n}`;

// Projects: 4 total, shown as equal case studies (no featured treatment).
// FinVista & Aurora are full case studies; the other 2 are being prepared.
export const projects = [
  {
    slug: "finvista",
    title: "FinVista",
    subtitle: "Re-imagining a Digital Lending Platform for India's Next Billion Borrowers",
    client: "FinVista (Leading Indian NBFC)",
    role: "Sr. UX Lead",
    services: "UX, Design Systems, Research",
    year: "2024",
    cover: F("003-final-mobile-screens-welcome-applications-personal-details.png"),
    coverImg: "/finvista/cover.jpg",
    color: "#FFE3B3",
    tag: "case study",
    summary:
      "Led the UX of a native Android Loan Origination System covering 6 loan products, with a 100+ component design system and a streamlined 11-step Two-Wheeler journey.",
    detail: true,
  },
  {
    slug: "aurora",
    title: "Aurora",
    subtitle: "Redesigning a Marketing Campaign Platform & Embedding AI in the Canvas",
    client: "Aurora (by Helio)",
    role: "Lead Product Designer",
    services: "Product Design, Design System, Research",
    year: "2024",
    cover: "/aurora/04_RBJ_Properties_Weekly.jpg",
    coverImg: "/aurora/cover.jpg",
    color: "#E8F2F0",
    tag: "case study",
    summary:
      "Led the redesign of the Recurring Batch Journey configurator and embedded the Helio AI composer. Cut clicks for campaign setup 3:1 and shipped a 52-component design system.",
    detail: true,
  },
  {
    slug: "next-gen-institute",
    title: "Next-Gen Institute",
    subtitle: "An Edtech Platform for India's Tier-2 Students",
    client: "Next-Gen Institute",
    role: "Lead Product Designer",
    services: "Product Design, UX Research",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1601972602237-8c79241e468b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzgxMDEwMzczfDA&ixlib=rb-4.1.0&q=85",
    coverImg: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80&auto=format&fit=crop",
    color: "#C9DDEB",
    tag: "coming soon",
    summary: "Case study coming soon. Stay tuned.",
    detail: false,
    comingSoon: true,
  },
  {
    slug: "somethings-cooking",
    title: "Jack of All Threads",
    subtitle: "India's First Crowdfunding Platform for Custom Apparel",
    client: "Jack of All Threads (Bangalore)",
    role: "Product / UX Designer",
    services: "Product Design, UX, Visual Design",
    year: "2015",
    cover: "/joat/cover.jpg",
    coverImg: "/joat/cover.jpg",
    color: "#F25C4D",
    tag: "case study",
    summary:
      "Designed the end-to-end product for India's first t-shirt crowdfunding platform: an in-browser design studio, the campaign-creation flow, and the buyer + raiser journeys across desktop and mobile.",
    detail: true,
  },
];

// AI-native concepts - self-initiated, separate from client work.
export const concepts = [
  {
    slug: "recruitos",
    title: "Slate",
    subtitle: "AI recruiting workspace for staffing agencies",
    kind: "AI-native concept",
    role: "Sr. UX Lead · self-initiated",
    year: "2026",
    accent: "#4285F4",
    coverImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/recruitos/",
    summary:
      "A recruitment workspace where the AI sources, ranks, and drafts outreach while the recruiter stays the decision-maker. Designed end-to-end and built as an interactive prototype.",
    href: "/case/recruitos",
    live: true,
  },
  {
    slug: "knowledgeos",
    title: "Almanac",
    subtitle: "Enterprise AI your team can actually ask",
    kind: "AI-native concept",
    role: "Sr. UX Lead · self-initiated",
    year: "2026",
    accent: "#0E9CA6",
    coverImg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/knowledgeos/",
    summary:
      "Turning institutional memory into something teams can actually ask, not just search through.",
    href: "/case/knowledgeos",
    live: true,
  },
  {
    slug: "decisionos",
    title: "Crux",
    subtitle: "AI Executive Decision Intelligence",
    kind: "AI-native concept",
    role: "Sr. UX Lead · self-initiated",
    year: "2026",
    accent: "#E8519B",
    coverImg: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/decisionos/",
    summary:
      "Turning scattered signals into a clear, defensible call for the people who have to make it.",
    href: "/case/decisionos",
    live: true,
  },
];

export const services = [
  { title: "product design", desc: "End-to-end design from research to ship. Websites, mobile, and dashboards." },
  { title: "design systems", desc: "Scalable, token-driven systems your engineers will actually want to use." },
  { title: "ux research", desc: "Interviews, usability tests, and surveys. The messy work that makes the rest easy." },
  { title: "brand & visual", desc: "Identities and visual languages that don't blur into the rest of the category." },
];

export const testimonials = [
  {
    name: "anya kapoor",
    role: "product lead, finvista",
    photo: "https://i.pravatar.cc/120?img=47",
    quote: "Faraz turned a paper-heavy loan process into something my team, and our customers, genuinely enjoy using. The design system is still our source of truth two years later.",
  },
  {
    name: "marcus weber",
    role: "head of product, nomad financial",
    photo: "https://i.pravatar.cc/120?img=12",
    quote: "We've worked with seven designers on this product. Faraz is the only one who asked us to delete features before adding new ones.",
  },
  {
    name: "lila ortiz",
    role: "ceo, kindred co.",
    photo: "https://i.pravatar.cc/120?img=32",
    quote: "Hire him before the rest of the world figures out he's quietly the best UX designer of his generation.",
  },
];

export const journey = [
  { year: "2015", text: "First freelance gig. A coffee shop website, paid in croissants." },
  { year: "2018", text: "Joined a Berlin fintech as their 4th hire. Learned to love spreadsheets." },
  { year: "2020", text: "Led design at a Series A health-tech through lockdown. Shipped 14 releases in 9 months." },
  { year: "2022", text: "Went solo. Started taking on 3 clients a year, no more, no less." },
  { year: "2024", text: "Led UX of FinVista's lending platform: 6 products, 100+ components, one design system." },
];
