// Portfolio content for Faraz Khan
export const PROFILE = {
  name: "faraz khan",
  role: "Senior UX Lead",
  since: "2013",
  status: "available for new opportunities",
  email: "abdulfarazkhan@outlook.com",
  phone: "+91 77956 61693",
  bookingUrl: "https://cal.com/khanfaraz/30min?theme=dark", // Direct to the 30-min event (skips the picker) + dark theme. Handle is "khanfaraz" (changed from fkhan747). Other events: /interview and /15min - swap the slug here to change which one the button opens.
  city: "Pune, Maharashtra · India",
  currentCompany: "Persistent Systems Limited",
  currentSince: "Feb 2023",
  social: {
    linkedin: "https://www.linkedin.com/in/thekhanfaraz",
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
    role: "Senior UX Lead",
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
    slug: "meridian",
    title: "Meridian Institute Analytics",
    subtitle: "Re-imagining a University's Analytics Platform: One Cockpit for Admissions, Research & HR",
    client: "Meridian Institute of Technology (anonymized)",
    role: "Lead UX Designer",
    services: "UX, Data Visualization, Design Systems",
    year: "2024",
    cover: "/meridian/cover.jpg",
    coverImg: "/meridian/cover.jpg",
    color: "#0E1430",
    tag: "case study",
    summary:
      "Unified four siloed Power BI dashboards (undergraduate and graduate admissions, research, and HR) into one analytics platform with an overview-and-drill-down model and an optional AI layer.",
    detail: true,
  },
  {
    slug: "somethings-cooking",
    title: "Jack of All Threads",
    subtitle: "India's First Crowdfunding Platform for Custom Apparel",
    client: "Jack of All Threads (Bangalore)",
    role: "Senior UX / UI Designer",
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
    role: "Senior UX Lead · self-initiated",
    year: "2026",
    accent: "#4285F4",
    coverImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/recruitos/",
    summary:
      "A recruitment workspace where the AI sources, ranks, and drafts outreach while the recruiter stays the decision-maker. Designed end-to-end and built as an interactive prototype.",
    blurb:
      "The AI sources candidates, ranks them, and drafts the outreach. The recruiter stays the one who decides. Designed end to end and built as a working prototype.",
    href: "/case/recruitos",
    live: true,
  },
  {
    slug: "knowledgeos",
    title: "Almanac",
    subtitle: "Enterprise AI your team can actually ask",
    kind: "AI-native concept",
    role: "Senior UX Lead · self-initiated",
    year: "2026",
    accent: "#0E9CA6",
    coverImg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/knowledgeos/",
    summary:
      "Turning institutional memory into something teams can actually ask, not just search through.",
    href: "/case/knowledgeos",
    live: false,                          // dormant, may revive later
  },
  {
    slug: "decisionos",
    title: "Crux",
    subtitle: "AI-agent supervision console",
    kind: "AI-native concept",
    role: "Senior UX Lead · self-initiated",
    year: "2026",
    accent: "#E8519B",
    coverImg: "/decisionos-shots/cr-01-overview.png",
    status: "live prototype",
    prototypeUrl: "/decisionos/",
    summary:
      "Five AI agents run a bank's operations while a human keeps every call. The five agent-trust patterns, built as a working prototype.",
    href: "/case/decisionos",
    live: true,                           // Control Room prototype merged 2026-07-06
  },
];

export const services = [
  { title: "product design", desc: "End-to-end design from research to ship. Websites, mobile, and dashboards." },
  { title: "design systems", desc: "Scalable, token-driven systems your engineers will actually want to use." },
  { title: "ux research", desc: "Interviews, usability tests, and surveys. The messy work that makes the rest easy." },
  { title: "brand & visual", desc: "Identities and visual languages that don't blur into the rest of the category." },
];
