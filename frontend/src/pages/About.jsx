import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Calendar,
  Download,
  Lightbulb,
  Users,
  Search,
  Palette,
  LineChart,
  GitBranch,
  Globe,
  Repeat,
  Award,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import BookCallButton from "../components/BookCallButton";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { GLASS_CSS, ACCENT, MUTED } from "./aboutGlass";

/* One icon stroke weight across the page, so the icon set reads as a family. */
const STROKE = 1.75;

const COMPETENCIES = [
  { icon: Lightbulb, t: "User Experience Strategy & Leadership", d: "Setting UX vision, OKRs, and design culture across multi-product orgs." },
  { icon: Users, t: "Design Thinking & Human-Centered Innovation", d: "Workshops, divergent exploration, and decision frameworks that ship." },
  { icon: Search, t: "User Research & Behavioral Insights", d: "Qualitative interviews, diary studies, usability testing, and synthesis." },
  { icon: Palette, t: "Advanced UI/UX & Visual Design", d: "Systems thinking down to pixel-level craft in Figma, across web and mobile." },
  { icon: LineChart, t: "Data-Driven Dashboard Design", d: "Translating BI data (Power BI, Tableau, MicroStrategy) into clear, actionable UIs." },
  { icon: GitBranch, t: "Agile Collaboration & DesignOps", d: "Tight loops with PMs, engineers and QA. Jira-native, sprint-ready handoffs." },
  { icon: Globe, t: "Global & Multicultural UX Expertise", d: "11+ years across BFSI, edtech, enterprise and consumer tech, multiple geographies." },
  { icon: Repeat, t: "Continuous Improvement & UX Optimization", d: "Post-launch loops: heuristic audits, A/B testing, accessibility, and visual QA." },
];

const TOOLS = {
  design: [
    { name: "Figma Suite" }, { name: "Adobe XD" }, { name: "Illustrator" }, { name: "InVision" },
  ],
  development: [
    { name: "HTML" }, { name: "CSS" }, { name: "Power BI" }, { name: "Tableau" }, { name: "MicroStrategy" },
  ],
  collaboration: [
    { name: "Jira" }, { name: "Confluence" }, { name: "Slack" }, { name: "Teams" }, { name: "Miro" },
  ],
  ai: [
    { name: "VS Code" }, { name: "Claude AI" }, { name: "Claude Code" },
    { name: "GitHub" }, { name: "ChatGPT" }, { name: "Codex" },
  ],
};

const CORE_SKILLS = [
  "Requirement Gathering", "User Research", "Personas & Scenarios", "User Journey Mapping",
  "Information Architecture", "Wireframing & Prototyping", "Design Systems", "UI Design",
  "Visual Design", "Interaction Design", "Responsive Design", "Accessibility (WCAG)",
  "Heuristic Evaluation", "Visual QA",
  "Design Handoff", "Stakeholder Management", "Cross-functional Collaboration", "Agile & Scrum Methodology",
];

const INDUSTRIES = ["BFSI", "Software & High Tech", "Consumer Tech", "Education & Tech", "E-commerce"];

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";

const EXPERIENCE = [
  {
    role: "Senior UX Lead",
    org: "Persistent Systems",
    time: "Feb 2023 - Present",
    place: "Pune, India",
    points: [
      "Lead UX for enterprise platforms end-to-end, from wireframes to high-fidelity Figma prototypes. The focus is clean navigation and engagement we can actually measure.",
      "Build and maintain scalable design systems that stay consistent across web, mobile and enterprise environments.",
      "Embed UX inside Agile delivery (JIRA, Confluence), keeping product, engineering and business aligned every sprint.",
    ],
  },
  {
    role: "Sr. Data Visualization & UX/UI Designer",
    org: "Infocepts Data & AI",
    time: "Dec 2017 - Dec 2022",
    place: "Nagpur, India",
    points: [
      "Designed dynamic, actionable dashboards that turned complex datasets into confident, data-driven decisions for global clients.",
      "Ran usability audits and experience optimization to surface pain points and lift engagement.",
      "Partnered with PMs and stakeholders to translate business goals into intuitive, real-world interfaces.",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    org: "MobiSir Technologies",
    time: "Jan 2017 - Dec 2017",
    place: "Bengaluru, India",
    points: [
      "Designed end-to-end digital ecosystems across web, mobile and social: sitemaps, flows, wireframes and interactive mockups.",
      "Applied heuristic evaluation, personas and usability testing to sharpen task flows across platforms.",
    ],
  },
  {
    role: "Senior Visualizer",
    org: "Circuit 9 Communications",
    time: "Apr 2016 - Dec 2016",
    place: "Bengaluru, India",
    points: [
      "Crafted multi-platform brand and campaign assets with consistency and impact across digital and print.",
    ],
  },
  {
    role: "Senior UX / UI Designer",
    org: "Threadfold",
    time: "Feb 2015 - Mar 2016",
    place: "Bengaluru, India",
    points: [
      "Ran usability research and shipped user-focused redesigns that lifted website performance and engagement.",
      "Used data-backed strategies to grow traffic, improve retention, and strengthen the brand online.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Jainawin Retails",
    time: "Jan 2013 - Dec 2014",
    place: "Bhopal, India",
    points: [
      "Built cohesive brand identities, logos, brand guides, and templates, for a consistent presence across channels.",
      "Designed digital and print campaigns end to end, from concept through final production.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Prime Advertising",
    time: "Nov 2011 - Dec 2012",
    place: "Bhopal, India",
    points: [
      "Created print and digital advertising campaigns for local newspapers and businesses.",
      "Turned client briefs into production-ready brochures, banners, signage, and displays.",
    ],
  },
];

const CERTS = [
  { t: "Advanced Certificate in UI/UX with Agentic AI & Gen-AI", s: "IIT Madras, pursuing" },
  { t: "AI for Designers", s: "Interaction Design Foundation" },
  { t: "Journey Mapping", s: "Interaction Design Foundation" },
];

const AWARDS = [
  { t: "Bravo Individual Award", s: "Persistent. Impact built on facts, not feelings." },
  { t: "Humanity Mindset Winner", s: "Persistent. For empathetic, people-first design." },
];

function Chip({ children }) {
  return <span className="ag-chip">{children}</span>;
}

/* Section headline. No eyebrow label above it on purpose: the section's place
   on the page already says what it is, and stacked micro-labels above every
   heading is the tell we are moving away from. */
function Head({ children, sub }) {
  return (
    <Reveal className="mb-9 max-w-3xl">
      <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight leading-[1.06]">{children}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed" style={{ color: MUTED }}>{sub}</p>}
    </Reveal>
  );
}

export default function About() {
  const [showAllExp, setShowAllExp] = useState(false);

  return (
    <div data-testid="about-page" className="ag-page">
      <style>{GLASS_CSS}</style>
      {/* Pastel field: fixed, behind everything, never repaints on scroll. */}
      <div className="ag-field" aria-hidden="true">
        <span className="ag-blob ag-blob-1" />
        <span className="ag-blob ag-blob-2" />
        <span className="ag-blob ag-blob-3" />
        <span className="ag-blob ag-blob-4" />
      </div>

      <Seo title="About Me" description="Faraz Khan, Senior UX Lead. 11+ years across BFSI, enterprise software, data and AI, and consumer tech. Design systems, dashboards, and AI-native product concepts." />

      {/* HERO: split. Headline, one paragraph, two actions, one real photograph. */}
      <section className="pt-14 md:pt-20 pb-14" data-testid="about-hero">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal as="h1" className="font-display font-black tracking-tight leading-[0.98] text-[11vw] sm:text-6xl lg:text-[4.6rem]">
                Designing clarity into<br />
                <span className="italic font-light leading-[1.1] pb-1 inline-block" style={{ color: ACCENT }}>complex systems.</span>
              </Reveal>
              <Reveal as="p" delay={0.08} className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed" style={{ color: MUTED }}>
                UX Lead with <strong style={{ color: "#171512" }}>11+ years</strong> across BFSI, enterprise software and consumer tech. I turn research into interfaces that ship.
              </Reveal>
              <Reveal delay={0.16} className="mt-9 flex gap-3 flex-wrap items-center">
                <a href={`mailto:${PROFILE.email}`} data-testid="about-cta-email" className="ag-btn">
                  <Mail size={16} strokeWidth={STROKE} /> Get in Touch
                </a>
                <a href={RESUME_PATH} download="Faraz_Khan_Resume.pdf" data-testid="about-download-resume" className="ag-btn ag-btn-ghost">
                  <Download size={16} strokeWidth={STROKE} /> Résumé
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="ag-tile ag-lift p-3">
                <img
                  src="/images/faraz.jpg"
                  alt="Faraz Khan"
                  className="w-full h-[340px] sm:h-[400px] object-cover object-top"
                  style={{ borderRadius: "var(--ag-media)" }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* THE SHORT VERSION: 3 cells, asymmetric. */}
      <section className="py-10" data-testid="about-profile">
        <Container>
          <div className="ag-bento">
            <Reveal className="ag-tile ag-lift p-8 md:p-10" style={{ gridColumn: "span 4" }} data-testid="about-profile-card">
              <h2 className="font-display text-2xl md:text-3xl font-black">Faraz Khan</h2>
              <p className="text-sm mt-1" style={{ color: MUTED }}>{PROFILE.role}</p>
              <div className="mt-6 space-y-4 text-base md:text-[17px] leading-relaxed">
                <p>
                  Hey there. I&apos;m a UX Lead with <strong>11+ years</strong> in the messy end of product design: enterprise dashboards, lending flows, analytics tools, the systems most people find intimidating. I like taking something dense and complicated and making it feel obvious. I sit right between design, data, and engineering, which is usually where the interesting problems hide.
                </p>
                <p>
                  I&apos;ve done this for first-time founders and for some of the bigger names in banking and enterprise software. I stay in the file doing the actual pixels, not just the slides, and I care as much about whether a thing ships as whether it looks good. Right now I&apos;m after a senior product or UX role, in India, the Middle East, or fully remote.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="ag-tile ag-tile-ink ag-lift p-8 flex flex-col justify-between" style={{ gridColumn: "span 2" }}>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "rgba(244,242,248,0.6)" }}>Currently at</p>
                <p className="font-display text-2xl font-black mt-2 leading-tight">{PROFILE.currentCompany}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(244,242,248,0.6)" }}>since {PROFILE.currentSince}</p>
              </div>
              <p className="text-sm mt-8 leading-relaxed" style={{ color: "rgba(244,242,248,0.82)" }}>{PROFILE.status}</p>
            </Reveal>

            <Reveal delay={0.1} className="ag-tile ag-tile-sky ag-lift p-8" style={{ gridColumn: "span 6" }} data-testid="about-industries">
              <p className="font-display text-lg font-black mb-4">Industry verticals</p>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((i) => <Chip key={i}>{i}</Chip>)}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* COMPETENCIES: 8 items, 8 cells. The first two run wide so the grid has
          rhythm instead of a flat 4-up repeat. */}
      <section className="py-16" data-testid="about-competencies">
        <Container>
          <Head sub="The eight things I actually get hired to do.">
            Core <span className="italic font-light">competencies.</span>
          </Head>
          <div className="ag-bento">
            {COMPETENCIES.map((c, i) => {
              const wide = i < 2;
              const tint = i === 0 ? "ag-tile-rose" : i === 1 ? "ag-tile-mint" : "";
              return (
                <Reveal
                  key={c.t}
                  delay={(i % 3) * 0.05}
                  data-testid={`competency-${i}`}
                  className={`ag-tile ag-lift p-7 ${tint}`}
                  style={{ gridColumn: `span ${wide ? 3 : 2}` }}
                >
                  <c.icon size={26} strokeWidth={STROKE} style={{ color: ACCENT }} className="mb-5" />
                  <h3 className={`font-display font-black leading-snug mb-2.5 ${wide ? "text-xl" : "text-base"}`}>{c.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TOOLKIT: 5 groups, 5 cells, two rows of different weight. */}
      <section className="py-16" data-testid="about-tools">
        <Container>
          <Head>Tools &amp; <span className="italic font-light">skills.</span></Head>
          <div className="ag-bento">
            <Reveal className="ag-tile ag-lift p-7" style={{ gridColumn: "span 2" }}>
              <p className="font-display text-lg font-black mb-4">Design</p>
              <div className="flex flex-wrap gap-2">{TOOLS.design.map((t) => <Chip key={t.name}>{t.name}</Chip>)}</div>
            </Reveal>

            <Reveal delay={0.05} className="ag-tile ag-lift p-7" style={{ gridColumn: "span 2" }}>
              <p className="font-display text-lg font-black mb-1">Development</p>
              <p className="text-xs mb-4" style={{ color: MUTED }}>Working familiarity, not a front-end role.</p>
              <div className="flex flex-wrap gap-2">{TOOLS.development.map((t) => <Chip key={t.name}>{t.name}</Chip>)}</div>
            </Reveal>

            <Reveal delay={0.1} className="ag-tile ag-lift p-7" style={{ gridColumn: "span 2" }}>
              <p className="font-display text-lg font-black mb-4">Collaboration</p>
              <div className="flex flex-wrap gap-2">{TOOLS.collaboration.map((t) => <Chip key={t.name}>{t.name}</Chip>)}</div>
            </Reveal>

            <Reveal delay={0.05} className="ag-tile ag-tile-ink ag-lift p-8 self-start" style={{ gridColumn: "span 2" }} data-testid="about-ai-tools">
              <p className="font-display text-lg font-black mb-1">AI in the loop</p>
              <p className="text-sm mb-5" style={{ color: "rgba(244,242,248,0.7)" }}>What I build and prototype with day to day.</p>
              <div className="flex flex-wrap gap-2">
                {TOOLS.ai.map((t) => (
                  <span key={t.name} className="ag-chip" style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.22)", color: "#F4F2F8" }}>{t.name}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="ag-tile ag-lift p-8" style={{ gridColumn: "span 4" }} data-testid="about-core-skills">
              <div className="flex items-baseline justify-between gap-3 mb-5">
                <p className="font-display text-lg font-black">Core skills</p>
                <p className="text-sm font-mono" style={{ color: MUTED }}>{CORE_SKILLS.length}</p>
              </div>
              <div className="flex flex-wrap gap-2">{CORE_SKILLS.map((s) => <Chip key={s}>{s}</Chip>)}</div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* EXPERIENCE: a timeline, deliberately a different layout family from the
          bento sections either side of it. */}
      <section className="py-16" data-testid="about-experience">
        <Container>
          <Head>Where I&apos;ve <span className="italic font-light">worked.</span></Head>
          <div className="ag-tile p-8 md:p-11 max-w-4xl">
            <ol className="space-y-9">
              {(showAllExp ? EXPERIENCE : EXPERIENCE.slice(0, 3)).map((e, idx) => (
                <li key={e.org} data-testid={`experience-${e.org}`}>
                  {idx > 0 && <hr className="ag-rule mb-9" />}
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl md:text-2xl font-black">{e.role}</h3>
                    <span className="text-sm font-mono" style={{ color: MUTED }}>{e.time}</span>
                  </div>
                  <p className="text-sm font-semibold mt-1" style={{ color: ACCENT }}>
                    {e.org} <span className="font-normal" style={{ color: MUTED }}>· {e.place}</span>
                  </p>
                  <ul className="mt-3 space-y-2">
                    {e.points.map((p, i) => (
                      <li key={i} className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            {EXPERIENCE.length > 3 && (
              <button
                type="button"
                onClick={() => setShowAllExp((v) => !v)}
                data-testid="experience-toggle"
                className="ag-btn ag-btn-ghost mt-9"
              >
                {showAllExp ? "Show fewer roles" : `Show all ${EXPERIENCE.length} roles`}
              </button>
            )}
          </div>
        </Container>
      </section>

      {/* CREDENTIALS: 3 items, 3 cells. */}
      <section className="py-16" data-testid="about-credentials">
        <Container>
          <Head>Certs, awards &amp; <span className="italic font-light">education.</span></Head>
          <div className="ag-bento">
            <Reveal className="ag-tile ag-lift p-8" style={{ gridColumn: "span 2" }}>
              <Sparkles size={22} strokeWidth={STROKE} style={{ color: ACCENT }} className="mb-4" />
              <p className="font-display text-lg font-black mb-4">Certifications</p>
              <ul className="space-y-4">
                {CERTS.map((c) => (
                  <li key={c.t}>
                    <p className="text-sm font-semibold leading-snug">{c.t}</p>
                    <p className="text-xs mt-0.5" style={{ color: MUTED }}>{c.s}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.05} className="ag-tile ag-tile-rose ag-lift p-8" style={{ gridColumn: "span 2" }}>
              <Award size={22} strokeWidth={STROKE} style={{ color: ACCENT }} className="mb-4" />
              <p className="font-display text-lg font-black mb-4">Recognition</p>
              <ul className="space-y-4">
                {AWARDS.map((a) => (
                  <li key={a.t}>
                    <p className="text-sm font-semibold">{a.t}</p>
                    <p className="text-xs mt-0.5" style={{ color: MUTED }}>{a.s}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="ag-tile ag-lift p-8" style={{ gridColumn: "span 2" }}>
              <GraduationCap size={22} strokeWidth={STROKE} style={{ color: ACCENT }} className="mb-4" />
              <p className="font-display text-lg font-black mb-4">Education</p>
              <p className="text-sm font-semibold">B.Sc. Multimedia</p>
              <p className="text-xs mt-0.5" style={{ color: MUTED }}>Vishwakarma Creative-i College, Pune · 2008 - 2011</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CLOSING: one full-width ink panel. Same CTA label as the hero, so the
          page carries one label per intent rather than three synonyms. */}
      <section className="py-16 md:py-20" data-testid="final-cta">
        <Container>
          <Reveal className="ag-tile ag-tile-ink p-10 md:p-14">
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.02] max-w-3xl">
              Have an idea <span className="italic font-light" style={{ color: "#FF7FB4" }}>worth</span> shipping?
            </h2>
            <div className="mt-9 flex gap-3 flex-wrap">
              <Link to="/contact" data-testid="cta-contact" className="ag-btn">
                <Mail size={16} strokeWidth={STROKE} /> Get in Touch
              </Link>
              <BookCallButton data-testid="cta-book-call" className="ag-btn ag-btn-ghost">
                <Calendar size={16} strokeWidth={STROKE} /> Book a Call
              </BookCallButton>
              <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" data-testid="cta-linkedin" className="ag-btn ag-btn-ghost">
                <Linkedin size={16} strokeWidth={STROKE} /> LinkedIn <ArrowUpRight size={14} strokeWidth={STROKE} />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
