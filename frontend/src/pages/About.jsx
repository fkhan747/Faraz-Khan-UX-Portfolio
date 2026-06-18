import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Lightbulb,
  Users,
  Search,
  Palette,
  LineChart,
  GitBranch,
  Globe,
  Repeat,
} from "lucide-react";
import { PROFILE } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CopyButton from "../components/CopyButton";

const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

const COMPETENCIES = [
  { icon: Lightbulb, t: "User Experience Strategy & Leadership", d: "Setting UX vision, OKRs, and design culture across multi-product orgs." },
  { icon: Users, t: "Design Thinking & Human-Centered Innovation", d: "Workshops, divergent exploration, and decision frameworks that ship." },
  { icon: Search, t: "User Research & Behavioral Insights", d: "Qualitative interviews, diary studies, usability testing, and synthesis." },
  { icon: Palette, t: "Advanced UI/UX & Visual Design", d: "From systems thinking to pixel-level craft on Figma — across web and mobile." },
  { icon: LineChart, t: "Data-Driven Dashboard Design", d: "Translating BI data (Power BI, Tableau, MicroStrategy) into clear, actionable UIs." },
  { icon: GitBranch, t: "Agile Collaboration & DesignOps", d: "Tight loops with PMs, engineers and QA — Jira-native, sprint-ready handoffs." },
  { icon: Globe, t: "Global & Multicultural UX Expertise", d: "12+ years across BFSI, edtech, enterprise and consumer tech, multiple geographies." },
  { icon: Repeat, t: "Continuous Improvement & UX Optimization", d: "Post-launch loops — heuristic audits, A/B testing, accessibility, and visual QA." },
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

const RECENT_WORK = [
  {
    n: "01",
    domain: "BFSI",
    desc: "Designed a Progressive Web App (PWA) for a leading NBFC, serving both end-users and sales teams. Led client requirement gathering, collaborated with product teams, created wireframes, Visual Designs, and established a scalable design system to ensure consistency across all products and journeys.",
  },
  {
    n: "02",
    domain: "Education & Tech",
    desc: "Redesigned the user experience of an administrative platform for university staff to streamline student admission data analysis. Conducted a UX audit to identify usability issues and visual inconsistencies. Applied data visualization best practices compatible with Power BI to ensure clarity and feasibility. The enhanced interface supported data-driven decisions and reduced the need for extensive training and support.",
  },
  {
    n: "03",
    domain: "Software & High Tech",
    desc: "Reimagined marketing tool visual design and enhanced the usability rate. Conducted competitive analysis, UX audit to enable visibility, discoverability and improved usability. Introduction of design system to cater diverse use cases, visual consistency and effortless component discovery.",
  },
];

const INDUSTRIES = ["BFSI", "Software & High Tech", "Consumer Tech", "Education & Tech", "E-commerce"];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="pt-12 pb-12" data-testid="about-hero">
        <Container>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#0A0A0A]/80">
            {PROFILE.status}
          </span>
        </div>
        <h1 className="font-display font-black leading-[0.92] text-[12vw] md:text-[8vw] lg:text-[7rem] tracking-tighter">
          designing&nbsp;clarity<br />
          int<span className="dot-o">o</span>&nbsp;<span className="italic font-light">complex</span>&nbsp;systems.
        </h1>
        <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a]">
          User Experience Lead with <strong>12+ years</strong> across BFSI, enterprise software, and consumer tech — translating research into interfaces that ship and scale.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="about-cta-email"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0A0A0A] text-white font-semibold text-sm hover:bg-[#1a1a1a] transition-colors"
          >
            get in touch <ArrowUpRight size={16} />
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-black/15 text-[#0A0A0A] font-semibold text-sm hover:bg-[#F7F1DA] transition-colors"
          >
            see my work
          </Link>
        </div>
        </Container>
      </section>

      {/* PROFILE + STATS */}
      <section className="pb-16" data-testid="about-profile">
        <Container>
        <Grid>
          {/* Profile card */}
          <div className="col-span-12 lg:col-span-5 bg-[#F7F1DA] rounded-3xl p-7 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#0A0A0A] flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85"
                  alt="Faraz Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-black">Faraz Khan</h2>
                <p className="text-sm text-[#5A5A5A]">{PROFILE.role}</p>
              </div>
            </div>
            <p className="text-sm text-[#5A5A5A] mt-auto">
              Currently at <strong className="text-[#0A0A0A]">{PROFILE.currentCompany}</strong> since {PROFILE.currentSince}.
            </p>
          </div>

          {/* Stats */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-6">
            {[
              { v: "12+", l: "Years of Experience" },
              { v: "500+", l: "Projects Delivered" },
              { v: "15+", l: "Teams Mentored" },
            ].map((s) => (
              <div key={s.l} className="bg-[#F7F1DA] rounded-3xl p-6 md:p-7 flex flex-col justify-between">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">{s.l}</p>
                <p className="mt-4 font-display text-5xl md:text-6xl font-black text-[#0A0A0A]">{s.v}</p>
              </div>
            ))}
          </div>
        </Grid>

        {/* Bio block */}
        <div className="mt-6 rounded-3xl bg-[#0A0A0A] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#E94B1F] blur-3xl opacity-25" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD93D] mb-4">about</p>
          <div className="relative space-y-5 max-w-4xl text-base md:text-lg leading-relaxed text-white/95">
            <p>
              Hey there! I&apos;m a UX Lead with <strong>12+ years</strong> of hands-on design experience across India&apos;s buzzing tech hubs — Pune, Nagpur, and Bengaluru. Whether it&apos;s building enterprise dashboards or crafting sleek, story-driven visuals, I&apos;ve always aimed to blend creative flair with smart functionality.
            </p>
            <p>
              I&apos;ve worked with both startups and global giants — leading UX/UI projects that put users first while staying aligned with business goals. Always up for a new challenge, I&apos;m now looking to bring my passion for human-centered design to opportunities in the Middle East or back in India.
            </p>
          </div>
        </div>

        {/* Industry verticals */}
        <div className="mt-6 rounded-3xl bg-[#F7F1DA] p-6 md:p-7" data-testid="about-industries">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">industry verticals</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">{INDUSTRIES.length} sectors</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white text-sm font-medium border border-black/10">
                {i}
              </span>
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* 01 — CORE COMPETENCIES */}
      <section className="py-20 border-t border-black/10" data-testid="about-competencies">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-4">01 — what i do</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-3xl">core <span className="italic font-light">competencies.</span></h2>
        <Grid>
          {COMPETENCIES.map((c, i) => (
            <div key={c.t} data-testid={`competency-${i}`} className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#F7F1DA] rounded-3xl p-6 hover:bg-[#FFD93D] transition-colors group">
              <c.icon size={24} className="text-[#E94B1F] mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-base md:text-lg font-black leading-snug mb-3">{c.t}</h3>
              <p className="text-sm leading-relaxed text-[#1a1a1a]/85">{c.d}</p>
            </div>
          ))}
        </Grid>
        </Container>
      </section>

      {/* 02 — TOOLKIT */}
      <section className="py-20 border-t border-black/10" data-testid="about-tools">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-4">02 — toolkit</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-3xl">tools & <span className="italic font-light">skills.</span></h2>

        <Grid>
          <div className="col-span-12 md:col-span-4 bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A] mb-4">design tools</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.design.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white text-sm font-medium border border-black/10">{t}</span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A] mb-2">development</p>
            <p className="text-xs italic text-[#5A5A5A] mb-4">Basic understanding & familiarity with front-end technologies</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.development.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white text-sm font-medium border border-black/10">{t}</span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A] mb-4">collaboration</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.collaboration.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white text-sm font-medium border border-black/10">{t}</span>
              ))}
            </div>
          </div>
        </Grid>

        <div className="mt-6 rounded-3xl bg-[#F7F1DA] p-7" data-testid="about-core-skills">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">core skills</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">{CORE_SKILLS.length} disciplines</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CORE_SKILLS.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full bg-white text-sm font-medium border border-black/10 hover:bg-[#FFD93D] transition-colors cursor-default">{s}</span>
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* 03 — SELECTED WORK */}
      <section className="py-20 border-t border-black/10" data-testid="about-recent-projects">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-4">03 — selected work</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10 max-w-3xl">recent <span className="italic font-light">projects.</span></h2>

        <div className="border-t border-black/10">
          {RECENT_WORK.map((w) => (
            <Link
              key={w.n}
              to="/projects"
              data-testid={`recent-${w.n}`}
              className="group grid grid-cols-12 gap-4 md:gap-6 py-8 border-b border-black/10 hover:bg-[#F7F1DA] transition-colors px-3 -mx-3 rounded-xl items-start"
            >
              <span className="col-span-1 font-mono text-xs uppercase tracking-widest text-[#5A5A5A] pt-1">{w.n}</span>
              <h3 className="col-span-11 md:col-span-3 font-display text-xl md:text-2xl font-black">{w.domain}</h3>
              <p className="col-span-11 md:col-span-7 text-sm md:text-base leading-relaxed text-[#1a1a1a]/85">{w.desc}</p>
              <ArrowUpRight className="col-span-1 hidden md:inline-block opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={18} />
            </Link>
          ))}
        </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
        <div className="rounded-3xl bg-[#0A0A0A] text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#E94B1F] blur-3xl opacity-30" />
          <h2 className="relative font-display text-4xl md:text-6xl font-black leading-tight max-w-3xl">
            ready to build <span className="italic font-light text-[#FFD93D]">something</span> together?
          </h2>
          <p className="relative mt-6 text-base md:text-lg text-white/80 max-w-xl">
            Open to UX Lead and Senior Product Design roles across the Middle East and India.
          </p>
          <div className="relative mt-8 flex gap-3 flex-wrap">
            {/* Email — with copy icon */}
            <div className="inline-flex items-center rounded-full bg-[#FFD93D] text-[#0A0A0A] pr-1.5">
              <a href={`mailto:${PROFILE.email}`} data-testid="about-final-cta" className="inline-flex items-center gap-2 pl-7 pr-3 py-4 font-semibold text-sm break-all hover:opacity-80 transition-opacity">
                {PROFILE.email}
              </a>
              <CopyButton value={PROFILE.email} label="email" size={15} className="h-9 w-9 hover:bg-black/10" />
            </div>
            {/* Phone — added after email, with copy icon */}
            <div className="inline-flex items-center rounded-full border border-white/25 text-white pr-1.5">
              <a href={telHref} data-testid="about-phone" className="inline-flex items-center gap-2 pl-7 pr-3 py-4 font-semibold text-sm hover:text-[#FFD93D] transition-colors">
                {PROFILE.phone}
              </a>
              <CopyButton value={PROFILE.phone} label="phone" size={15} className="h-9 w-9 text-white hover:bg-white/10" />
            </div>
            {/* LinkedIn */}
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              LinkedIn profile <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        </Container>
      </section>
    </div>
  );
}
