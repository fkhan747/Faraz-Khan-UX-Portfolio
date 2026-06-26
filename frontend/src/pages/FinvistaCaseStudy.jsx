import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Check, X, Star } from "lucide-react";
import { finvista as fv } from "../data/finvistaCase";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Zoomable from "../components/Zoomable";
import PhoneFrame from "../components/PhoneFrame";
import FinvistaDesignSystem from "../components/FinvistaDesignSystem";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";
import Reveal from "../components/Reveal";

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5379B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100210]";

/* -- Reusable section header in portfolio voice -- */
const SectionLabel = ({ num, name, accent = "#F5379B" }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: accent }}>
      {num} · {name}
    </span>
    <span className="flex-1 h-px bg-black/15" />
  </div>
);

const SectionWrap = ({ children, className = "", ...rest }) => (
  <section className={`py-20 md:py-24 border-t border-white/10 ${className}`} {...rest}>
    <Container>{children}</Container>
  </section>
);

const FactCell = ({ label, value }) => (
  <div className="dark-card rounded-2xl p-5">
    <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{label}</p>
    <p className="font-display text-base md:text-lg font-bold">{value}</p>
  </div>
);

export default function FinvistaCaseStudy() {
  const [showAll, setShowAll] = useState(false);

  return (
    <article data-testid="finvista-case-study" className="pb-24">
      <Seo title={fv.title} description={fv.subtitle} />
      <CaseStudyNav />
      {/* TITLE BLOCK over a darkened cover image */}
      <header className="relative overflow-hidden">
        <img
          src="/finvista/cover.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(105deg, rgba(16,2,16,0.92) 0%, rgba(16,2,16,0.64) 60%, rgba(16,2,16,0.42) 100%)" }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, rgba(16,2,16,0.55) 0%, rgba(16,2,16,0) 28%, rgba(16,2,16,0) 50%, rgba(16,2,16,0.92) 100%)" }}
        />
        <Container className="relative z-10 pt-12 pb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
            <Link
              to="/projects"
              data-testid="back-link"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] transition-colors"
            >
              <ArrowLeft size={14} /> all projects
            </Link>
          </div>
          <Reveal as="p" delay={0} className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5">
            ux case study · featured
          </Reveal>
          <Reveal as="h1" delay={0.08} className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] case-keep text-[#F7F5FF]">
            Finv<span className="dot-o">i</span>sta
          </Reveal>
          <Reveal as="p" delay={0.16} className="mt-8 max-w-3xl text-xl md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
            {fv.subtitle}
          </Reveal>

          {/* Hero stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-4xl">
            {fv.hero.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.24 + i * 0.06} className="rounded-2xl p-5 md:p-6 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                <div className="num text-3xl md:text-5xl font-black text-[#075EFD] leading-none">{s.value}</div>
                <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </header>

      {/* 01 PROJECT OVERVIEW */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="01" name="Project Overview" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.overview.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">
          {fv.overview.intro}
        </Reveal>

        {/* TL;DR */}
        <Reveal delay={0.06} className="mt-12 rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">
            {fv.overview.tldrTitle}
          </p>
          <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95 max-w-6xl">
            {fv.overview.tldr}
          </p>
        </Reveal>

        {/* Facts */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {fv.overview.facts.map((f, i) => (
            <Reveal key={f.label} delay={(i % 2) * 0.06}>
              <FactCell label={f.label} value={f.value} />
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design process</Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fv.overview.process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-6">
              <div className="num text-5xl font-black text-[#075EFD]">{p.step}</div>
              <div className="mt-3 font-display text-xl font-bold ">{p.title}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-white">{p.duration}</div>
            </Reveal>
          ))}
        </div>

        {/* Product Landscape */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">product landscape</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl mb-8 text-[#F4F3FA]">
          {fv.overview.productLandscape.intro}
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.overview.productLandscape.products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 2) * 0.06}
              className={`rounded-3xl p-6 ${i === 0 ? "bg-white border-2 border-[#F5379B]" : "dark-card text-[#F4F3FA]"}`}
            >
              {p.badge && (
                <span className="inline-block mb-3 text-[10px] font-mono uppercase tracking-widest bg-[#F5379B] text-black px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <h3 className={`font-display text-xl font-black mb-3 ${i === 0 ? "text-[#F5379B]" : ""}`}>{p.name}</h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? "text-black" : ""}`}>{p.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">Primary Users</Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fv.primaryUsers.map((u, i) => (
            <Reveal key={u.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5 border-l-4 border-[#075EFD]">
              <h3 className="font-display text-lg font-black mb-2">{u.label}</h3>
              <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{u.desc}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 02 PROBLEM */}
      <SectionWrap data-testid="section-problem">
        <SectionLabel num="02" name="The Problem" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.problem.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.problem.intro}</Reveal>

        <Reveal delay={0.06} className="mt-10 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#F5379B]">core challenge</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-6xl text-black">
            {fv.problem.coreChallenge}
          </p>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">problem dimensions</Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {fv.problem.dimensions.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[#075EFD] leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-display text-xl font-black ">{d.title}</h3>
              <p className="mt-2 text-base leading-relaxed">{d.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">scope definition</Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F5379B]" />
              <p className="font-mono text-xs uppercase tracking-widest">in scope</p>
            </div>
            <ul className="space-y-3">
              {fv.problem.inScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base">
                  <Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#075EFD]" />
              <p className="font-mono text-xs uppercase tracking-widest">out of scope</p>
            </div>
            <ul className="space-y-3">
              {fv.problem.outOfScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base">
                  <X className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionWrap>

      {/* 03 RESEARCH */}
      <SectionWrap data-testid="section-research">
        <SectionLabel num="03" name="Research" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.research.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.research.intro}</Reveal>

        {/* Competitive */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">competitive analysis</Reveal>
        <Reveal as="p" delay={0.08} className="text-base leading-relaxed max-w-5xl text-[#F4F3FA] mb-8">
          I benchmarked five leading lending apps for their UX patterns, information architecture, and interaction design. Navi and KreditBee, the two closest to FinVista's audience, got full screen-by-screen teardowns. All five are then compared feature by feature in the table that follows.
        </Reveal>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">in-depth teardowns · 2 of 5</p>
        <div className="grid grid-cols-1 gap-6">
          {fv.research.competitive.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05} className="dark-card rounded-3xl overflow-hidden">
              <Zoomable src={c.image} alt={`${c.name} app teardown`} caption={`${c.name}: screen-by-screen teardown`} className="bg-white overflow-hidden">
                <img src={c.image} alt={`${c.name} app teardown`} loading="lazy" className="block w-full h-auto" />
              </Zoomable>
              <div className="p-6">
                <h3 className="font-display text-xl font-black mb-2">{c.name}</h3>
                <p className="text-sm leading-relaxed">{c.notes}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Findings table */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">findings across 5 competitors</Reveal>
        <Reveal as="p" delay={0.08} className="text-base leading-relaxed max-w-5xl text-[#F4F3FA] mb-8">
          The full benchmark, including Bajaj Finserv, Home Credit, and Muthoot alongside the two teardowns above.
        </Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {fv.research.findingsTable.headers.map((h, i) => (
                  <th key={i} className={`p-4 font-mono uppercase text-[10px] tracking-widest ${i === 0 ? "text-left min-w-[200px]" : "text-center"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fv.research.findingsTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? "font-medium" : "text-center font-display font-bold text-lg"} ${cell === "✓" ? "text-[#F5379B]" : cell === "-" ? "text-[#A29CB4]" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Key insight */}
        <Reveal delay={0.06} className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">key insight</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{fv.research.keyInsight}</p>
        </Reveal>

        {/* Approach */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design approach & considerations</Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.research.approach.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-6 hover:bg-[#D81F7E] transition-colors">
              <span className="font-mono text-sm uppercase tracking-widest text-white">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-black ">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 04 INSIGHTS */}
      <SectionWrap data-testid="section-insights">
        <SectionLabel num="04" name="Insights" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.insights.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.insights.intro}</Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">user personas</Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {fv.insights.personas.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7 md:p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black text-xl">
                  {p.name.split(" ").map((x) => x[0]).join("")}
                </div>
                <div>
                  <h3 className="font-display text-xl font-black">{p.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-white">{p.role}</p>
                </div>
              </div>
              <p className="italic text-base leading-relaxed mb-6 text-[#F4F3FA] border-l-2 border-[#075EFD] pl-4">
                &ldquo;{p.quote}&rdquo;
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">Challenges</p>
                  <ul className="space-y-2">
                    {p.challenges.map((c) => (
                      <li key={c.t} className="text-sm">
                        <strong>{c.t}:</strong> {c.d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">Goals</p>
                  <ul className="space-y-2">
                    {p.goals.map((g) => (
                      <li key={g.t} className="text-sm">
                        <strong>{g.t}:</strong> {g.d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design principles</Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.insights.principles.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-6">
              <div className="font-mono text-sm uppercase tracking-widest text-white">0{i + 1}</div>
              <h3 className="mt-2 font-display text-lg font-black ">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 05 USER FLOW & TASKS */}
      <SectionWrap data-testid="section-flow">
        <SectionLabel num="05" name="User Flow & Tasks" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.flow.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.flow.intro}</Reveal>

        {/* Flow SVG */}
        <Reveal delay={0.06}>
          <Zoomable src={fv.flow.diagramSvg} alt={fv.flow.diagramCaption} caption={fv.flow.diagramCaption} className="mt-10 rounded-3xl dark-card p-6 md:p-10 overflow-x-auto">
            <img src={fv.flow.diagramSvg} alt={fv.flow.diagramCaption} loading="lazy" className="w-full h-auto" />
          </Zoomable>
          <p className="mt-3 text-xs font-mono uppercase tracking-widest text-white text-center">
            {fv.flow.diagramCaption}
          </p>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">user tasks by step</Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.flow.tasks.map((t, i) => (
            <Reveal key={t.n} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5 flex gap-4 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black">
                {t.n}
              </span>
              <div>
                <h3 className="font-display text-base font-black ">{t.t}</h3>
                <p className="text-sm mt-1 leading-relaxed text-[#F4F3FA]/85">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 06 DESIGN */}
      <SectionWrap data-testid="section-design">
        <SectionLabel num="06" name="Design" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.design.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.design.intro}</Reveal>

        {/* Wireframes */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">wireframes</Reveal>
        <Reveal as="p" delay={0.08} className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.design.wireframes.intro}</Reveal>
        <div className="space-y-8">
          {fv.design.wireframes.batches.map((b, i) => (
            <Reveal key={i} as="figure" delay={i * 0.05} className="rounded-3xl dark-card p-6 md:p-8">
              <Zoomable src={b.src} alt={b.caption} caption={b.caption} className="block">
                <img src={b.src} alt={b.caption} loading="lazy" className="w-full h-auto" />
              </Zoomable>
              <figcaption className="mt-4 text-xs font-mono uppercase tracking-widest text-white text-center">
                {b.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* Explorations */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">design explorations</Reveal>
        <Reveal as="p" delay={0.08} className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.design.explorations.intro}</Reveal>
        <div className="space-y-6">
          {fv.design.explorations.images.map((img, i) => (
            <Reveal key={i} as="figure" delay={i * 0.05} className="rounded-3xl dark-card p-6 md:p-8">
              <Zoomable src={img.src} alt={img.caption} caption={img.caption} className="block">
                <img src={img.src} alt={img.caption} loading="lazy" className="w-full h-auto" />
              </Zoomable>
              <figcaption className="mt-4 text-xs font-mono uppercase tracking-widest text-white text-center">
                {img.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* Final 16 screens */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">final design: the two-wheeler journey</Reveal>
        <Reveal as="p" delay={0.08} className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.design.finalDesign.intro}</Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fv.design.finalDesign.screens.map((s, i) => (
            <Reveal key={s.title} as="figure" delay={(i % 2) * 0.06} className="rounded-3xl dark-card p-5">
              <Zoomable src={s.src} alt={s.title} caption={s.desc} className="block">
                <PhoneFrame src={s.src} alt={s.title} />
              </Zoomable>
              <figcaption className="pt-4">
                <h3 className="font-display text-base font-black ">{s.title}</h3>
                <p className="text-sm mt-1 leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* Key decisions */}
        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">key design decisions</Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {fv.design.keyDecisions.map((k, i) => (
            <Reveal key={k.t} delay={(i % 2) * 0.06} className={`rounded-3xl p-7 ${i % 2 === 0 ? "dark-card" : "bg-white border-2 border-[#F5379B]"}`}>
              <h3 className={`font-display text-xl font-black mb-3 ${i % 2 === 0 ? "" : "text-[#F5379B]"}`}>{k.t}</h3>
              <p className={`text-base leading-relaxed ${i % 2 === 0 ? "" : "text-black"}`}>{k.d}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 07 DESIGN SYSTEM */}
      <SectionWrap data-testid="section-design-system">
        <SectionLabel num="07" name="Design System" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.designSystem.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.designSystem.intro}</Reveal>

        <Reveal delay={0.06} className="mt-16">
          <FinvistaDesignSystem />
        </Reveal>

        <Reveal delay={0.06} className="mt-10 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-3">system impact</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl text-black">{fv.designSystem.systemImpact}</p>
        </Reveal>
      </SectionWrap>

      {/* 08 VALIDATION */}
      <SectionWrap data-testid="section-validation">
        <SectionLabel num="08" name="Validation" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.validation.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.validation.intro}</Reveal>

        <ol className="mt-12 relative border-l-2 border-white/15 ml-2 space-y-8">
          {fv.validation.rounds.map((r, i) => (
            <Reveal as="li" key={r.n} delay={i * 0.05} className="pl-8 relative">
              <span className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black text-sm border-4 border-[#100210]">
                {r.n}
              </span>
              <h3 className="font-display text-xl font-black ">{r.t}</h3>
              <p className="mt-2 text-base leading-relaxed max-w-5xl">{r.d}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.06} className="mt-12 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">outcome</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{fv.validation.outcome}</p>
        </Reveal>
      </SectionWrap>

      {/* 09 IMPACT */}
      <SectionWrap data-testid="section-impact">
        <SectionLabel num="09" name="Impact" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-10">
            {fv.impact.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fv.impact.metrics.map((m, i) => (
            <Reveal key={m.l} delay={(i % 2) * 0.06} className="rounded-3xl dark-card p-6 md:p-7">
              <div className="font-display text-4xl md:text-5xl font-black text-[#075EFD] leading-none">{m.v}</div>
              <div className="mt-3 font-display text-base font-bold ">{m.l}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-white">{m.s}</div>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">key learnings & reflection</Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what went well</p>
            <ul className="space-y-3">
              {fv.impact.wentWell.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base">
                  <Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what I&apos;d do differently</p>
            <ul className="space-y-3">
              {fv.impact.differently.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base">
                  <Star className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionWrap>

      {/* 10 SCREEN GALLERY */}
      <SectionWrap data-testid="section-gallery">
        <SectionLabel num="10" name="Screen Gallery" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {fv.gallery.headline}
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.gallery.intro}</Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {fv.gallery.representative.map((s, i) => (
            <Reveal key={s.title} as="figure" delay={(i % 2) * 0.06} className="rounded-2xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={s.title} className="aspect-[9/16] bg-white p-2 flex items-center justify-center">
                <img src={s.src} alt={s.title} loading="lazy" className="max-w-full max-h-full object-contain" />
              </Zoomable>
              <figcaption className="px-3 py-3 text-[11px] font-mono uppercase tracking-wider text-[#F4F3FA]">
                {s.title}
              </figcaption>
            </Reveal>
          ))}
          {showAll &&
            fv.gallery.all.map((s) => (
              <figure key={s.title} className="rounded-2xl dark-card overflow-hidden">
                <Zoomable src={s.src} alt={s.title} caption={s.title} className="aspect-[9/16] bg-white p-2 flex items-center justify-center">
                  <img src={s.src} alt={s.title} loading="lazy" className="max-w-full max-h-full object-contain" />
                </Zoomable>
                <figcaption className="px-3 py-3 text-[11px] font-mono uppercase tracking-wider text-[#F4F3FA]">
                  {s.title}
                </figcaption>
              </figure>
            ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          data-testid="toggle-gallery"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full dark-card text-white font-semibold text-sm hover:bg-[#241B33] transition-colors"
        >
          {showAll ? "show fewer screens" : `view all 46 screens →`}
        </button>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <Reveal as="h2" className="font-display text-3xl md:text-5xl font-black mb-6">thank you for reading.</Reveal>
        <Reveal as="p" delay={0.08} className="text-lg text-[#A29CB4] mb-8">
          Want to see what FinVista taught me applied to your product?
        </Reveal>
        <div className="flex gap-4 justify-center flex-wrap items-center">
          <ProjectNav slug="finvista" variant="footer" which="prev" />
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="case-cta-email"
            className={`inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}
          >
            <Mail size={16} /> email me
          </a>
          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}
          >
            view all projects
          </Link>
          <ProjectNav slug="finvista" variant="footer" which="next" />
        </div>
      </SectionWrap>
    </article>
  );
}
