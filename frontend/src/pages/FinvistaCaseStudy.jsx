import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Check, X, Star } from "lucide-react";
import { finvista as fv } from "../data/finvistaCase";
import { PROFILE } from "../data/content";

/* -- Reusable section header in portfolio voice -- */
const SectionLabel = ({ num, name, accent = "#075EFD" }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: accent }}>
      {num} · {name}
    </span>
    <span className="flex-1 h-px bg-black/15" />
  </div>
);

const SectionWrap = ({ children, className = "", ...rest }) => (
  <section className={`px-6 md:px-10 lg:px-16 py-20 md:py-24 border-t border-white/10 ${className}`} {...rest}>
    {children}
  </section>
);

const FactCell = ({ label, value }) => (
  <div className="dark-card rounded-2xl p-5">
    <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-2">{label}</p>
    <p className="font-display text-base md:text-lg font-bold">{value}</p>
  </div>
);

export default function FinvistaCaseStudy() {
  const [showAll, setShowAll] = useState(false);

  return (
    <article data-testid="finvista-case-study" className="pb-24">
      {/* TITLE BLOCK */}
      <header className="px-6 md:px-10 lg:px-16 pt-12 pb-10">
        <Link
          to="/projects"
          data-testid="back-link"
          className="inline-flex items-center gap-2 mb-10 text-xs font-mono uppercase tracking-widest text-[#A29CB4] hover:text-[#F5379B] transition-colors"
        >
          <ArrowLeft size={14} /> all projects
        </Link>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5">
          ux case study · featured
        </p>
        <h1 className="font-display text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] lowercase case-keep">
          finv<span className="dot-o">i</span>sta
        </h1>
        <p className="mt-8 max-w-5xl text-xl md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
          {fv.subtitle}
        </p>

        {/* Hero stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-5xl">
          {fv.hero.stats.map((s) => (
            <div key={s.label} className="dark-card rounded-2xl p-5 md:p-6">
              <div className="num text-3xl md:text-5xl font-black text-[#075EFD] leading-none">{s.value}</div>
              <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#A29CB4]">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Hero image */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl overflow-hidden dark-card p-6 md:p-10" data-testid="case-hero-image">
          <img
            src="/finvista/004-final-mobile-screens-vehicle-details-progress.png"
            alt="FinVista hero, refined screens"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* 01 PROJECT OVERVIEW */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="01" name="Project Overview" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.overview.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">
          {fv.overview.intro}
        </p>

        {/* TL;DR */}
        <div className="mt-12 rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">
            {fv.overview.tldrTitle}
          </p>
          <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95 max-w-6xl">
            {fv.overview.tldr}
          </p>
        </div>

        {/* Facts */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {fv.overview.facts.map((f) => (
            <FactCell key={f.label} label={f.label} value={f.value} />
          ))}
        </div>

        {/* Process */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design process</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fv.overview.process.map((p) => (
            <div key={p.step} className="dark-card rounded-2xl p-6">
              <div className="num text-5xl font-black text-[#075EFD]">{p.step}</div>
              <div className="mt-3 font-display text-xl font-bold ">{p.title}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#A29CB4]">{p.duration}</div>
            </div>
          ))}
        </div>

        {/* Product Landscape */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">product landscape</h3>
        <p className="text-base md:text-lg leading-relaxed max-w-6xl mb-8 text-[#F4F3FA]">
          {fv.overview.productLandscape.intro}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.overview.productLandscape.products.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-3xl p-6 ${i === 0 ? "bg-white border-2 border-[#F5379B]" : "dark-card text-[#F4F3FA]"}`}
            >
              {p.badge && (
                <span className="inline-block mb-3 text-[10px] font-mono uppercase tracking-widest bg-[#F5379B] text-black px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <h4 className={`font-display text-xl font-black mb-3 ${i === 0 ? "text-[#F5379B]" : ""}`}>{p.name}</h4>
              <p className={`text-sm leading-relaxed ${i === 0 ? "text-black" : ""}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 02 PROBLEM */}
      <SectionWrap data-testid="section-problem">
        <SectionLabel num="02" name="The Problem" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.problem.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.problem.intro}</p>

        <div className="mt-10 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#F5379B]">core challenge</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-6xl text-black">
            {fv.problem.coreChallenge}
          </p>
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">problem dimensions</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {fv.problem.dimensions.map((d, i) => (
            <div key={d.title} className="dark-card rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[#075EFD] leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h4 className="mt-4 font-display text-xl font-black ">{d.title}</h4>
              <p className="mt-2 text-base leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">scope definition</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="dark-card rounded-3xl p-7">
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
          </div>
          <div className="dark-card rounded-3xl p-7">
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
          </div>
        </div>
      </SectionWrap>

      {/* 03 RESEARCH */}
      <SectionWrap data-testid="section-research">
        <SectionLabel num="03" name="Research" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.research.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.research.intro}</p>

        {/* Competitive */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">competitive analysis</h3>
        <p className="text-base leading-relaxed max-w-5xl text-[#F4F3FA] mb-8">
          Analyzed the UX patterns, IA, and interaction design of five leading lending apps to identify best practices and opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {fv.research.competitive.map((c) => (
            <div key={c.name} className="dark-card rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-contain" />
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-black mb-2">{c.name}</h4>
                <p className="text-sm leading-relaxed">{c.notes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Findings table */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">findings across 5 competitors</h3>
        <div className="rounded-3xl dark-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {fv.research.findingsTable.headers.map((h, i) => (
                  <th key={i} className={`p-4 text-left font-mono uppercase text-[10px] tracking-widest ${i === 0 ? "min-w-[200px]" : ""}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fv.research.findingsTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? "font-medium" : "text-center font-display font-bold text-lg"} ${cell === "✓" ? "text-[#F5379B]" : cell === "–" ? "text-[#A29CB4]" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key insight */}
        <div className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">key insight</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{fv.research.keyInsight}</p>
        </div>

        {/* Approach */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design approach & considerations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.research.approach.map((a, i) => (
            <div key={a.title} className="dark-card rounded-3xl p-6 hover:bg-[#D81F7E] transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#A29CB4]">0{i + 1}</span>
              <h4 className="mt-3 font-display text-lg font-black ">{a.title}</h4>
              <p className="mt-2 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 04 INSIGHTS */}
      <SectionWrap data-testid="section-insights">
        <SectionLabel num="04" name="Insights" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.insights.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.insights.intro}</p>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">user personas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {fv.insights.personas.map((p) => (
            <div key={p.name} className="dark-card rounded-3xl p-7 md:p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black text-xl">
                  {p.name.split(" ").map((x) => x[0]).join("")}
                </div>
                <div>
                  <h4 className="font-display text-xl font-black">{p.name}</h4>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#A29CB4]">{p.role}</p>
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
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design principles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.insights.principles.map((p, i) => (
            <div key={p.t} className="dark-card rounded-3xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#A29CB4]">0{i + 1}</div>
              <h4 className="mt-2 font-display text-lg font-black ">{p.t}</h4>
              <p className="mt-2 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 05 USER FLOW & TASKS */}
      <SectionWrap data-testid="section-flow">
        <SectionLabel num="05" name="User Flow & Tasks" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.flow.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.flow.intro}</p>

        {/* Flow SVG */}
        <div className="mt-10 rounded-3xl dark-card p-6 md:p-10 overflow-x-auto">
          <img src={fv.flow.diagramSvg} alt={fv.flow.diagramCaption} loading="lazy" className="w-full h-auto" />
        </div>
        <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[#A29CB4] text-center">
          {fv.flow.diagramCaption}
        </p>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">user tasks by step</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fv.flow.tasks.map((t) => (
            <div key={t.n} className="dark-card rounded-2xl p-5 flex gap-4 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black">
                {t.n}
              </span>
              <div>
                <h4 className="font-display text-base font-black ">{t.t}</h4>
                <p className="text-sm mt-1 leading-relaxed text-[#F4F3FA]/85">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 06 DESIGN */}
      <SectionWrap data-testid="section-design">
        <SectionLabel num="06" name="Design" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.design.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.design.intro}</p>

        {/* Wireframes */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">wireframes</h3>
        <p className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.design.wireframes.intro}</p>
        <div className="space-y-8">
          {fv.design.wireframes.batches.map((b, i) => (
            <figure key={i} className="rounded-3xl dark-card p-6 md:p-8">
              <img src={b.src} alt={b.caption} loading="lazy" className="w-full h-auto" />
              <figcaption className="mt-4 text-xs font-mono uppercase tracking-widest text-[#A29CB4] text-center">
                {b.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Explorations */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">design explorations</h3>
        <p className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.design.explorations.intro}</p>
        <div className="space-y-6">
          {fv.design.explorations.images.map((img, i) => (
            <figure key={i} className="rounded-3xl dark-card p-6 md:p-8">
              <img src={img.src} alt={img.caption} loading="lazy" className="w-full h-auto" />
              <figcaption className="mt-4 text-xs font-mono uppercase tracking-widest text-[#A29CB4] text-center">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Final 17 screens */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">final design: the two-wheeler journey</h3>
        <p className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.design.finalDesign.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fv.design.finalDesign.screens.map((s) => (
            <figure key={s.title} className="rounded-3xl dark-card overflow-hidden">
              <div className="aspect-[9/16] bg-white p-4 flex items-center justify-center">
                <img src={s.src} alt={s.title} loading="lazy" className="max-w-full max-h-full object-contain" />
              </div>
              <figcaption className="p-5">
                <h4 className="font-display text-base font-black ">{s.title}</h4>
                <p className="text-sm mt-1 leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Key decisions */}
        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">key design decisions</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {fv.design.keyDecisions.map((k, i) => (
            <div key={k.t} className={`rounded-3xl p-7 ${i % 2 === 0 ? "dark-card" : "bg-white border-2 border-[#F5379B]"}`}>
              <h4 className={`font-display text-xl font-black mb-3 ${i % 2 === 0 ? "" : "text-[#F5379B]"}`}>{k.t}</h4>
              <p className={`text-base leading-relaxed ${i % 2 === 0 ? "" : "text-black"}`}>{k.d}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 07 DESIGN SYSTEM */}
      <SectionWrap data-testid="section-design-system">
        <SectionLabel num="07" name="Design System" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.designSystem.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.designSystem.intro}</p>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">component library</h3>
        <p className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{fv.designSystem.panelsIntro}</p>
        <div className="space-y-6">
          {fv.designSystem.panels.map((p, i) => (
            <figure key={i} className="rounded-3xl dark-card p-6 md:p-8">
              <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-auto" />
              <figcaption className="mt-4 text-xs font-mono uppercase tracking-widest text-[#A29CB4] text-center">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-3">system impact</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl text-black">{fv.designSystem.systemImpact}</p>
        </div>
      </SectionWrap>

      {/* 08 VALIDATION */}
      <SectionWrap data-testid="section-validation">
        <SectionLabel num="08" name="Validation" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.validation.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.validation.intro}</p>

        <ol className="mt-12 relative border-l-2 border-white/15 ml-2 space-y-8">
          {fv.validation.rounds.map((r) => (
            <li key={r.n} className="pl-8 relative">
              <span className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black text-sm border-4 border-[#100210]">
                {r.n}
              </span>
              <h4 className="font-display text-xl font-black ">{r.t}</h4>
              <p className="mt-2 text-base leading-relaxed max-w-5xl">{r.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">outcome</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{fv.validation.outcome}</p>
        </div>
      </SectionWrap>

      {/* 09 IMPACT */}
      <SectionWrap data-testid="section-impact">
        <SectionLabel num="09" name="Impact" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-10">
          {fv.impact.headline}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fv.impact.metrics.map((m) => (
            <div key={m.l} className="rounded-3xl dark-card p-6 md:p-7">
              <div className="font-display text-4xl md:text-5xl font-black text-[#075EFD] leading-none">{m.v}</div>
              <div className="mt-3 font-display text-base font-bold ">{m.l}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#A29CB4]">{m.s}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">key learnings & reflection</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what went well</p>
            <ul className="space-y-3">
              {fv.impact.wentWell.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base">
                  <Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what I&apos;d do differently</p>
            <ul className="space-y-3">
              {fv.impact.differently.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base">
                  <Star className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrap>

      {/* 10 SCREEN GALLERY */}
      <SectionWrap data-testid="section-gallery">
        <SectionLabel num="10" name="Screen Gallery" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-6xl mb-6">
          {fv.gallery.headline}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl text-[#F4F3FA]">{fv.gallery.intro}</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {fv.gallery.representative.map((s) => (
            <figure key={s.title} className="rounded-2xl dark-card overflow-hidden">
              <div className="aspect-[9/16] bg-white p-2 flex items-center justify-center">
                <img src={s.src} alt={s.title} loading="lazy" className="max-w-full max-h-full object-contain" />
              </div>
              <figcaption className="px-3 py-3 text-[11px] font-mono uppercase tracking-wider text-[#F4F3FA]">
                {s.title}
              </figcaption>
            </figure>
          ))}
          {showAll &&
            fv.gallery.all.map((s) => (
              <figure key={s.title} className="rounded-2xl dark-card overflow-hidden">
                <div className="aspect-[9/16] bg-white p-2 flex items-center justify-center">
                  <img src={s.src} alt={s.title} loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
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
          {showAll ? "show fewer screens" : `view all 47 screens →`}
        </button>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <h2 className="font-display text-3xl md:text-5xl font-black mb-6">thank you for reading.</h2>
        <p className="text-lg text-[#A29CB4] mb-8">
          Want to see what FinVista taught me applied to your product?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="case-cta-email"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#F5379B] font-semibold text-sm hover:bg-[#F5379B] hover:text-white transition-colors"
          >
            <Mail size={16} /> email me
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-colors"
          >
            view all projects
          </Link>
        </div>
      </SectionWrap>
    </article>
  );
}
