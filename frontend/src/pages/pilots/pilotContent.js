/* Shared, real content for the three redesign pilots. Same words in all three
   so the only variable being judged is the visual language, not the copy. */

export const WORK = [
  {
    slug: "meridian",
    title: "Meridian Institute Analytics",
    kind: "Higher-ed analytics",
    year: "2026",
    line: "One analytics platform for an entire university, built so leaders can read it in seconds instead of minutes.",
    metric: "4 departments unified",
    cover: "/meridian/cover.jpg",
    open: true,
  },
  {
    slug: "finvista",
    title: "FinVista",
    kind: "Fintech, digital lending",
    year: "2025",
    line: "A lending app run by sales staff, designed around the moments they turn the phone around and hand it to the customer.",
    metric: "60% faster processing",
    cover: "/finvista/cover.jpg",
    open: false,
  },
  {
    slug: "aurora",
    title: "Aurora",
    kind: "Marketing automation",
    year: "2025",
    line: "Recurring-campaign setup dropped from three clicks to one, with the AI writer where you already type.",
    metric: "52 components shipped",
    cover: "/aurora/cover.jpg",
    open: false,
  },
  {
    slug: "threadfold",
    title: "Threadfold",
    kind: "Crowdfunding commerce",
    year: "2016",
    line: "India's first crowdfunding platform for custom apparel. Design a tee, set a goal, sell it before one is printed.",
    metric: "6+ tools collapsed into one",
    cover: "/threadfold/cover.jpg",
    open: false,
  },
];

export const CONCEPTS = [
  { slug: "slate", title: "Slate", line: "An AI recruiting workspace where the recruiter stays the decision-maker." },
  { slug: "crux", title: "Crux", line: "A supervision console for five AI agents running a bank's daily operations." },
  { slug: "almanac", title: "Almanac", line: "An enterprise knowledge engine where every answer shows its sources." },
];

/* A real excerpt from the Meridian case study, used as the reading-layout
   sample so the pilots can be judged on actual prose, not lorem. */
export const SAMPLE = {
  eyebrow: "Meridian Institute Analytics",
  heading: "The problem: four dashboards that made you work before they told you anything",
  paras: [
    "Four departments, four owners, four files that never spoke. Maroon backgrounds, pie charts, tiny type, one year of data on every screen.",
    "Each one spoke its own language. Graduate students are about 48% international, undergraduates about 4%. Any “percent international” describes a student who does not exist.",
    "Two ways of reading collided on one page: the ninety-second scan and the deep read. The old tools served neither.",
  ],
  pull: "The data was never wrong. It just took too long to find.",
  figure: { src: "/meridian/legacy/four-dashboards.png", cap: "The four legacy dashboards, side by side" },
  after: [
    "The fix was structural, not decorative. One shared navigation, five tabs. The Overview answers how the institution is doing, and each other tab owns its department.",
    "Learn one page, read them all: same layout, filter positions, and headline treatment on every tab.",
  ],
};

export const BIO = "UX Lead with 11+ years across BFSI, enterprise software and consumer tech. I turn research into interfaces that ship.";
export const NAME = "Faraz Khan";
export const ROLE = "Senior UX Lead";
