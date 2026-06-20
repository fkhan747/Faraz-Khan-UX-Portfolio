import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
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
} from "lucide-react";
import { PROFILE } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CopyButton from "../components/CopyButton";

const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

const COMPETENCIES = [
  { icon: Lightbulb, t: "User Experience Strategy & Leadership", d: "Setting UX vision, OKRs, and design culture across multi-product orgs." },
  { icon: Users, t: "Design Thinking & Human-Centered Innovation", d: "Workshops, divergent exploration, and decision frameworks that ship." },
  { icon: Search, t: "User Research & Behavioral Insights", d: "Qualitative interviews, diary studies, usability testing, and synthesis." },
  { icon: Palette, t: "Advanced UI/UX & Visual Design", d: "Systems thinking down to pixel-level craft in Figma, across web and mobile." },
  { icon: LineChart, t: "Data-Driven Dashboard Design", d: "Translating BI data (Power BI, Tableau, MicroStrategy) into clear, actionable UIs." },
  { icon: GitBranch, t: "Agile Collaboration & DesignOps", d: "Tight loops with PMs, engineers and QA. Jira-native, sprint-ready handoffs." },
  { icon: Globe, t: "Global & Multicultural UX Expertise", d: "12+ years across BFSI, edtech, enterprise and consumer tech, multiple geographies." },
  { icon: Repeat, t: "Continuous Improvement & UX Optimization", d: "Post-launch loops: heuristic audits, A/B testing, accessibility, and visual QA." },
];

const TOOLS = {
  design: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "InDesign"],
  development: ["HTML", "CSS", "JavaScript", "Power BI", "Tableau", "MicroStrategy"],
  collaboration: ["Jira", "Confluence", "Slack", "Teams"],
};

const CORE_SKILLS = [
  "Requirement Gathering", "User Research", "Personas & Scenarios", "User Journey Mapping",
  "Information Architecture", "Wireframing & Prototyping", "Design Systems", "UI Design",
  "Visual Design", "Interaction Design", "Responsive Design", "Accessibility (WCAG)",
  "Usability Testing", "A/B Testing", "Heuristic Evaluation", "Visual QA",
  "Design Handoff", "Stakeholder Management", "Cross-functional Collaboration", "Agile & Scrum Methodology",
];

const INDUSTRIES = ["BFSI", "Software & High Tech", "Consumer Tech", "Education & Tech", "E-commerce"];

// --- Résumé data (merged in from the former /resume page) ---
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
];

const EARLIER =
  "Before that, I was Sr. UX/UI Designer at Jack of All Threads, and Graphic Designer at Jainawin Retails & Prime Advertising (2011 - 2016).";

const CERTS = [
  { t: "Advanced Certificate in UI/UX with Agentic AI & Gen-AI", s: "IIT Madras · pursuing" },
  { t: "AI for Designers", s: "Interaction Design Foundation" },
  { t: "Journey Mapping", s: "Interaction Design Foundation" },
];

const AWARDS = [
  { t: "Bravo Individual Award", s: "Persistent. Impact built on facts, not feelings." },
  { t: "Humanity Mindset Winner", s: "Persistent. For empathetic, people-first design." },
];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="pt-12 pb-12" data-testid="about-hero">
        <Container>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5379B] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F4F3FA]/80">
            {PROFILE.status}
          </span>
        </div>
        <h1 className="font-display font-black leading-[0.92] text-[12vw] md:text-[8vw] lg:text-[7rem] tracking-tighter">
          designing&nbsp;clarity<br />
          int<span className="dot-o">o</span>&nbsp;<span className="italic font-light">complex</span>&nbsp;systems.
        </h1>
        <p className="mt-8 max-w-5xl text-lg md:text-xl leading-relaxed text-[#F4F3FA]">
          User Experience Lead with <strong>12+ years</strong> across BFSI, enterprise software, and consumer tech. I turn research into interfaces that ship and scale.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="about-cta-email"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#075EFD] text-white font-semibold text-sm capitalize hover:bg-[#2E78FF] transition-colors"
          >
            <Mail size={16} /> get in touch
          </a>
          <a
            href={RESUME_PATH}
            download="Faraz_Khan_Resume.pdf"
            data-testid="about-download-resume"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-[#F4F3FA] font-semibold text-sm capitalize hover:bg-[#261E3A] transition-colors"
          >
            <Download size={16} /> download résumé
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-[#F4F3FA] font-semibold text-sm capitalize hover:bg-[#261E3A] transition-colors"
          >
            see my work
          </Link>
        </div>
        </Container>
      </section>

      {/* PROFILE + STATS */}
      <section className="pb-16" data-testid="about-profile">
        <Container>
        {/* Profile card - photo (home-hero treatment) + identity + bio, all in one container */}
        <div className="dark-card rounded-3xl overflow-hidden flex flex-col sm:flex-row" data-testid="about-profile-card">
          {/* Photo strip - fades into the card: downward on mobile, rightward on desktop */}
          <div className="relative w-full h-56 sm:h-auto sm:w-52 md:w-64 flex-shrink-0 overflow-hidden">
            <img
              src="/images/faraz.jpg"
              alt="Faraz Khan"
              className="photo-blue absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 grain-overlay pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true" style={{ background: "linear-gradient(to bottom, rgba(38,30,58,0) 45%, #261E3A 100%)" }} />
            <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true" style={{ background: "linear-gradient(to right, rgba(38,30,58,0) 52%, #261E3A 100%)" }} />
          </div>
          {/* Identity + bio */}
          <div className="flex-1 p-7 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-black">Faraz Khan</h2>
                  <p className="text-sm md:text-base text-[#A29CB4] mt-1">{PROFILE.role}</p>
                </div>
                <p className="text-sm text-[#A29CB4] sm:text-right flex-shrink-0">
                  Currently at <strong className="text-[#F4F3FA]">{PROFILE.currentCompany}</strong> since {PROFILE.currentSince}.
                </p>
              </div>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-white/95">
                <p>
                  Hey there! I&apos;m a UX Lead with <strong>12+ years</strong> of hands-on design experience across India&apos;s buzzing tech hubs: Pune, Nagpur, and Bengaluru. Whether I&apos;m building enterprise dashboards or crafting story-driven visuals, I aim to pair creative flair with smart functionality.
                </p>
                <p>
                  I&apos;ve worked with both startups and global giants, leading UX/UI projects that put users first while staying aligned with business goals. I&apos;m now looking to bring my passion for human-centered design to opportunities in the Middle East or back in India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry verticals */}
        <div className="mt-6 rounded-3xl dark-card p-6 md:p-7" data-testid="about-industries">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">industry verticals</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">{INDUSTRIES.length} sectors</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full dark-card text-[#F4F3FA] text-sm font-medium border border-white/10">
                {i}
              </span>
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* 01 - CORE COMPETENCIES */}
      <section className="py-20 border-t border-white/10" data-testid="about-competencies">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">01 / what i do</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-5xl">core <span className="italic font-light">competencies.</span></h2>
        <Grid>
          {COMPETENCIES.map((c, i) => (
            <div key={c.t} data-testid={`competency-${i}`} className="col-span-12 sm:col-span-6 lg:col-span-3 dark-card rounded-3xl p-6 hover:bg-[#332B4D] transition-colors group">
              <c.icon size={24} className="text-[#075EFD] mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-base md:text-lg font-black leading-snug mb-3">{c.t}</h3>
              <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{c.d}</p>
            </div>
          ))}
        </Grid>
        </Container>
      </section>

      {/* 02 - TOOLKIT */}
      <section className="py-20 border-t border-white/10" data-testid="about-tools">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">02 / toolkit</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-5xl">tools & <span className="italic font-light">skills.</span></h2>

        <Grid>
          <div className="col-span-12 md:col-span-4 dark-card rounded-3xl p-7">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-4">design tools</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.design.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full dark-card text-[#F4F3FA] text-sm font-medium border border-white/10">{t}</span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 dark-card rounded-3xl p-7">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-2">development</p>
            <p className="text-xs italic text-[#A29CB4] mb-4">Basic understanding & familiarity with front-end technologies</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.development.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full dark-card text-[#F4F3FA] text-sm font-medium border border-white/10">{t}</span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 dark-card rounded-3xl p-7">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-4">collaboration</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.collaboration.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full dark-card text-[#F4F3FA] text-sm font-medium border border-white/10">{t}</span>
              ))}
            </div>
          </div>
        </Grid>

        <div className="mt-6 rounded-3xl dark-card p-7" data-testid="about-core-skills">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">core skills</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">{CORE_SKILLS.length} disciplines</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CORE_SKILLS.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full dark-card text-[#F4F3FA] text-sm font-medium border border-white/10 hover:bg-[#332B4D] transition-colors cursor-default">{s}</span>
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* 03 - EXPERIENCE (merged from résumé) */}
      <section className="py-20 border-t border-white/10" data-testid="about-experience">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">03 / experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-5xl">where i&apos;ve <span className="italic font-light">worked.</span></h2>
        <ol className="relative border-l border-white/10 pl-7 space-y-9 max-w-4xl">
          {EXPERIENCE.map((e) => (
            <li key={e.org} className="relative" data-testid={`experience-${e.org}`}>
              <span className="absolute -left-[2.1rem] top-1.5 h-3 w-3 rounded-full bg-[#F5379B] ring-4 ring-[#100210]" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl md:text-2xl font-black">{e.role}</h3>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A29CB4]">{e.time}</span>
              </div>
              <p className="text-sm font-semibold text-[#F5379B] mt-0.5">{e.org} <span className="text-[#A29CB4] font-normal">· {e.place}</span></p>
              <ul className="mt-3 space-y-2">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-[15px] leading-relaxed text-[#F4F3FA]/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F5379B] flex-shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-8 pl-7 text-sm text-[#A29CB4] leading-relaxed max-w-4xl">{EARLIER}</p>
        </Container>
      </section>

      {/* 04 - CREDENTIALS (merged from résumé) */}
      <section className="py-20 border-t border-white/10" data-testid="about-credentials">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">04 / credentials</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-5xl">certs, awards &amp; <span className="italic font-light">education.</span></h2>
        <Grid>
          {/* Certifications */}
          <div className="col-span-12 md:col-span-4 dark-card rounded-3xl p-7">
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5"><Sparkles size={14} /> certifications</p>
            <ul className="space-y-4">
              {CERTS.map((c) => (
                <li key={c.t} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0 bg-[#F5379B]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold leading-snug">{c.t}</p>
                    <p className="text-xs text-[#A29CB4] mt-0.5">{c.s}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Recognition */}
          <div className="col-span-12 md:col-span-4 dark-card rounded-3xl p-7">
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5"><Award size={14} /> recognition</p>
            <ul className="space-y-4">
              {AWARDS.map((a) => (
                <li key={a.t}>
                  <p className="text-sm font-semibold">{a.t}</p>
                  <p className="text-xs text-[#A29CB4] mt-0.5">{a.s}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Education */}
          <div className="col-span-12 md:col-span-4 dark-card rounded-3xl p-7">
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5"><GraduationCap size={14} /> education</p>
            <p className="text-sm font-semibold">B.Sc. Multimedia</p>
            <p className="text-xs text-[#A29CB4] mt-0.5">Vishwakarma Creative-i College, Pune · 2008 - 2011</p>
          </div>
        </Grid>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
        <div className="rounded-3xl dark-card text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" />
          <h2 className="relative font-display text-4xl md:text-6xl font-black leading-tight max-w-5xl">
            ready to build <span className="italic font-light text-white">something</span> together?
          </h2>
          <p className="relative mt-6 text-base md:text-lg text-white/80 max-w-xl">
            Open to UX Lead and Senior Product Design roles across the Middle East and India.
          </p>
          <div className="relative mt-8 flex gap-3 flex-wrap">
            {/* Email - with copy icon */}
            <div className="inline-flex items-center rounded-full bg-[#F5379B] text-white pr-1.5">
              <a href={`mailto:${PROFILE.email}`} data-testid="about-final-cta" className="inline-flex items-center gap-2 pl-7 pr-3 py-4 font-semibold text-sm break-all hover:opacity-80 transition-opacity">
                {PROFILE.email}
              </a>
              <CopyButton value={PROFILE.email} label="email" size={15} className="h-9 w-9 hover:bg-black/10" />
            </div>
            {/* Phone - added after email, with copy icon */}
            <div className="inline-flex items-center rounded-full border border-white/25 text-white pr-1.5">
              <a href={telHref} data-testid="about-phone" className="inline-flex items-center gap-2 pl-7 pr-3 py-4 font-semibold text-sm hover:text-white transition-colors">
                {PROFILE.phone}
              </a>
              <CopyButton value={PROFILE.phone} label="phone" size={15} className="h-9 w-9 text-white hover:bg-white/10" />
            </div>
            {/* LinkedIn */}
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              <Linkedin size={16} /> LinkedIn profile
            </a>
          </div>
        </div>
        </Container>
      </section>
    </div>
  );
}
