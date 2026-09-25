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

// Projects: 4 client case studies, ordered by strength of proof (2026-08-04).
// FinVista leads on real measured outcomes, Aurora next for the shipped AI
// feature and the 3:1 click reduction, then Meridian which is designed but
// measured across six validation rounds, and Jack of All Threads last as the 2015 closer with its press
// coverage. This array drives the /projects grid, the landing page featured
// pair (first two), and the prev/next order in ProjectNav.
// FinVista and Aurora are confidential client work. Jack of All Threads
// ships under its real name (2026-09-25): the company is no longer trading,
// so the 2026-08 anonymisation was reversed.
//
// `locked: true` no longer draws anything. The vault went dormant on
// 2026-08-02, so every case study opens without a password and CaseCover
// ignores the prop (see the note in that file). The flag stays as the record
// of which studies are NDA work, and it is what the route-level CaseStudyGate
// and the encrypt scripts key off, so re-enabling the vault stays a one-flag
// change rather than a hunt through the grids. Do not delete it because the
// cards look the same with and without it.
export const projects = [
  {
    slug: "finvista",
    title: "FinVista",
    subtitle: "Re-imagining a Digital Lending Platform for India's Next Billion Borrowers",
    client: "FinVista (Leading Indian NBFC)",
    role: "Senior UX Lead",
    services: "UX, Design Systems, Research",
    year: "2024",
    cover: F("outcome-montage.png"),
    coverImg: "/finvista/cover.jpg",
    color: "#FFE3B3",
    tag: "case study",
    summary:
      "I led the UX on a native Android loan origination system that covers six loan products. It runs on a design system of over a hundred components, and the two-wheeler journey is eleven steps.",
    detail: true,
    locked: true,
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
      "I redesigned the journey configurator and put the Helio AI composer inside the canvas. Setting up a campaign went from three clicks to one, and the design system shipped with 52 components.",
    detail: true,
    locked: true,
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
      "Four separate Power BI dashboards became one platform with five tabs. You land on an overview and drill into whichever area you need, with an AI layer you can call on if you want it.",
    detail: true,
  },
  {
    slug: "joat",
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
      "I designed the whole product for India's first t-shirt crowdfunding platform. That covers the design studio in the browser, the flow for setting up a campaign, and both sides of the journey on desktop and mobile.",
    detail: true,
  },
];

// AI-native concepts - self-initiated, separate from client work.
export const concepts = [
  {
    slug: "slate",
    title: "Slate",
    subtitle: "AI recruiting workspace for staffing agencies",
    kind: "AI-native concept",
    role: "Senior UX Lead · self-initiated",
    year: "2026",
    accent: "#4285F4",
    coverImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/slate/",
    summary:
      "A recruiting workspace where the AI finds the candidates, ranks them and drafts the outreach, and the recruiter still decides who to contact. I designed it end to end and built it as a working prototype.",
    blurb:
      "The AI finds candidates, ranks them and drafts the outreach. The recruiter decides who actually gets contacted. I designed it end to end and built it as a working prototype.",
    href: "/case/slate",
    live: true,
  },
  {
    slug: "almanac",
    title: "Almanac",
    subtitle: "Enterprise AI your team can actually ask",
    kind: "AI-native concept",
    role: "Senior UX Lead · self-initiated",
    year: "2026",
    accent: "#0E9CA6",
    coverImg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
    status: "live prototype",
    prototypeUrl: "/almanac/",
    summary:
      "Everything a company knows is written down somewhere. Almanac lets people ask a question and get an answer back, with the sources attached.",
    href: "/case/almanac",
    live: false,                          // dormant, may revive later
  },
  {
    slug: "crux",
    title: "Crux",
    subtitle: "AI-agent supervision console",
    kind: "AI-native concept",
    role: "Senior UX Lead · self-initiated",
    year: "2026",
    accent: "#E8519B",
    coverImg: "/crux-shots/cr-01-overview.png",
    status: "live prototype",
    prototypeUrl: "/crux/",
    summary:
      "Five AI agents run a bank's daily operations and one person approves, steers or takes over. I built the five agent-trust patterns into a working prototype.",
    href: "/case/crux",
    live: true,                           // Control Room prototype merged 2026-07-06
  },
];

export const services = [
  { title: "product design", desc: "End-to-end design from research to ship. Websites, mobile, and dashboards." },
  { title: "design systems", desc: "Scalable, token-driven systems your engineers will actually want to use." },
  { title: "ux research", desc: "Interviews, usability tests, and surveys. The messy work that makes the rest easy." },
  { title: "brand & visual", desc: "Identities and visual languages that don't blur into the rest of the category." },
];
