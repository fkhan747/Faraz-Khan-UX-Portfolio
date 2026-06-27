import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Check, X, Star, AlertTriangle } from "lucide-react";
import { aurora as au } from "../data/auroraCase";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Zoomable from "../components/Zoomable";
import AuroraDesignSystem from "../components/AuroraDesignSystem";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5379B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100210]";

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F5379B]">
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

export default function AuroraCaseStudy() {
  return (
    <article data-testid="aurora-case-study" className="pb-24">
      <Seo title={au.title} description={au.subtitle} />
      <CaseStudyNav />
      {/* TITLE BLOCK over a darkened cover image */}
      <header className="relative overflow-hidden">
        <img
          src="/aurora/cover.jpg"
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
            ux case study · b2b saas · europe
          </Reveal>
          <Reveal as="h1" delay={0.08} className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] case-keep text-[#F7F5FF]">
            Aur<span className="dot-o">o</span>ra
          </Reveal>
          <Reveal as="p" delay={0.16} className="mt-8 max-w-3xl text-xl md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
            {au.subtitle}
          </Reveal>

          {au.hero.facts && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
              {au.hero.facts.map((f, i) => (
                <Reveal key={f.label} delay={0.24 + i * 0.06} className="rounded-2xl p-5 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">{f.label}</p>
                  <p className="font-display text-base md:text-lg font-bold text-[#F4F3FA] leading-snug">{f.value}</p>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-4 grid grid-cols-3 gap-4 max-w-4xl">
            {au.hero.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.42 + i * 0.06} className="rounded-2xl p-5 md:p-6 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                <div className="num text-3xl md:text-5xl font-black text-[#075EFD] leading-none">{s.value}</div>
                <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </header>

      {/* 01 OVERVIEW */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="01" name="Overview" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.overview.headline}</h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" />
            <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">{au.overview.tldrTitle}</p>
            <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95">{au.overview.tldr}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {au.overview.facts.map((f, i) => (
            <Reveal key={f.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{f.label}</p>
              <p className="font-display text-base md:text-lg font-bold">{f.value}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design process</h3>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {au.overview.process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-6">
              <div className="num text-4xl md:text-5xl font-black text-[#075EFD]">{p.step}</div>
              <div className="mt-3 font-display text-lg font-bold ">{p.title}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-white">{p.duration}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08} className="mt-16 space-y-5 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
          <p>{au.overview.intro}</p>
          <p>{au.overview.intro2}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {au.overview.metadata.map((m, i) => (
            <Reveal key={m.k} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{m.k}</p>
              <p className="font-display text-sm md:text-base font-bold leading-snug">{m.v}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06} className="mt-8 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">{au.overview.contextTitle}</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug text-black">{au.overview.contextBody}</p>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">Primary Users</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {au.primaryUsers.map((u, i) => (
            <Reveal key={u.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-6 border-l-4 border-[#075EFD]">
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
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-10">{au.problem.headline}</h2>
        </Reveal>

        <Reveal delay={0.06}>
          <blockquote className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
            <p className="font-display text-xl md:text-3xl italic leading-snug text-black">&ldquo;{au.problem.quote}&rdquo;</p>
            <footer className="mt-4 text-xs font-mono uppercase tracking-widest text-[#F5379B]">{au.problem.quoteAttribution}</footer>
          </blockquote>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {au.problem.challenges.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[#075EFD] leading-none">{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-black ">{c.t}</h3>
              <p className="mt-2 text-base leading-relaxed">{c.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">scope & hypothesis</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl mb-8 text-[#F4F3FA]">{au.problem.scopeIntro}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F5379B]" />
              <p className="font-mono text-xs uppercase tracking-widest">in scope</p>
            </div>
            <ul className="space-y-3">
              {au.problem.inScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} />{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#075EFD]" />
              <p className="font-mono text-xs uppercase tracking-widest">out of scope</p>
            </div>
            <ul className="space-y-3">
              {au.problem.outOfScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base"><X className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} />{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">{au.problem.hypothesisTitle}</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{au.problem.hypothesis}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {au.problem.hypothesisBullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5379B]/45 bg-[#F5379B]/10 text-[#F4F3FA] text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5379B]" />{b}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {au.problem.sideHypotheses.map((h, i) => (
            <Reveal key={h.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <h3 className="font-display text-xl font-black mb-3">{h.t}</h3>
              <p className="text-base leading-relaxed">{h.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">key assumptions</p>
            <ul className="space-y-3">
              {au.problem.assumptions.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={14} />{a}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">identified risks</p>
            <ul className="space-y-3">
              {au.problem.risks.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm"><AlertTriangle className="flex-shrink-0 mt-1 text-[#075EFD]" size={14} />{r}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="mt-10 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">★ key insight</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-6xl text-black">{au.problem.keyInsight}</p>
        </Reveal>
      </SectionWrap>

      {/* 03 RESEARCH */}
      <SectionWrap data-testid="section-research">
        <SectionLabel num="03" name="Research" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.research.headline}</h2>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-4">{au.research.auditTitle}</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.research.auditIntro}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {au.research.auditFindings.map((f, i) => (
            <Reveal key={f.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7 border-l-4 border-[#075EFD]">
              <h3 className="font-display text-xl font-black mb-2">{f.t}</h3>
              <p className="text-base leading-relaxed">{f.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">heuristic evaluation</h3>
        </Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card divide-y divide-black/10">
          {au.research.heuristics.map((h) => (
            <div key={h.t} className="p-5 md:p-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-4 font-display font-bold text-base ">{h.t}</div>
              <div className="col-span-9 md:col-span-6 text-sm text-[#F4F3FA]/80">{h.d}</div>
              <div className="col-span-3 md:col-span-2 text-right font-display font-black text-2xl text-[#075EFD]">{h.s}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">stakeholder interviews</h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {au.research.stakeholders.map((s, i) => (
            <Reveal key={s.role} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-3">{s.role}</p>
              <p className="italic text-base leading-relaxed border-l-2 border-[#075EFD] pl-4 mb-4">&ldquo;{s.quote}&rdquo;</p>
              <div className="text-xs font-mono uppercase tracking-widest text-white">priority</div>
              <div className="font-display text-base font-bold mt-1">{s.priority}</div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">competitive analysis</h3>
        </Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {au.research.competitiveTable.headers.map((h, i) => (
                  <th key={i} className={`p-4 font-mono uppercase text-[10px] tracking-widest ${i === 0 ? "text-left" : "text-center"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {au.research.competitiveTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? "font-medium" : "text-center font-display font-bold"} ${cell === "Yes" ? "text-[#F5379B]" : cell === "No" ? "text-[#5B9BFF]" : cell === "Partial" ? "text-[#D97706]" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">research findings</h3>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {au.research.findings.map((f, i) => (
            <Reveal key={f.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <h3 className="font-display text-lg font-black mb-2">{f.t}</h3>
              <p className="text-sm leading-relaxed text-[#F4F3FA]">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 04 INSIGHTS */}
      <SectionWrap data-testid="section-insights">
        <SectionLabel num="04" name="Insights" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-10">{au.insights.headline}</h2>
        </Reveal>

        <Reveal>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-8">user personas</h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {au.insights.personas.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black text-lg">{p.initials}</div>
                <div>
                  <h3 className="font-display text-lg font-black">{p.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-white">{p.role}</p>
                </div>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">goals</p>
              <ul className="space-y-1.5 mb-4">
                {p.goals.map((g) => (<li key={g} className="text-sm flex gap-2"><Check size={14} className="flex-shrink-0 mt-1 text-[#F5379B]" />{g}</li>))}
              </ul>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">frustrations</p>
              <ul className="space-y-1.5">
                {p.frustrations.map((f) => (<li key={f} className="text-sm flex gap-2"><X size={14} className="flex-shrink-0 mt-1 text-[#075EFD]" />{f}</li>))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design goals</h3>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {au.insights.designGoals.map((g, i) => (
            <Reveal key={g.t} delay={(i % 2) * 0.06} className={`rounded-3xl p-6 ${i % 2 === 0 ? "dark-card" : "bg-white border-2 border-[#F5379B]"}`}>
              <div className="font-mono text-sm uppercase tracking-widest text-white">0{i + 1}</div>
              <h3 className={`mt-2 font-display text-lg font-black ${i % 2 === 0 ? "" : "text-[#F5379B]"}`}>{g.t}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i % 2 === 0 ? "" : "text-black"}`}>{g.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06} className="mt-12 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">★ key insight</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{au.insights.keyInsight}</p>
        </Reveal>
      </SectionWrap>

      {/* 05 DESIGN */}
      <SectionWrap data-testid="section-design">
        <SectionLabel num="05" name="Design" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.design.headline}</h2>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-4">hand-drawn sketches</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.design.sketchesIntro}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {au.design.sketches.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.06} as="figure" className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={s.desc} className="bg-[#FAF5E8] p-4 md:p-6">
                <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto" />
              </Zoomable>
              <figcaption className="p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B]">{s.tag}</span>
                <h3 className="mt-2 font-display text-xl font-black ">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">low-fidelity wireframes</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.design.wireframesIntro}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {au.design.wireframes.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.06} as="figure" className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={w.src} alt={w.title} caption={w.desc} className="bg-white p-4 md:p-6 border-b border-white/5">
                <img src={w.src} alt={w.title} loading="lazy" className="w-full h-auto" />
              </Zoomable>
              <figcaption className="p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B]">{w.tag}</span>
                <h3 className="mt-2 font-display text-lg font-black ">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{w.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">final design</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.design.finalIntro}</p>
        </Reveal>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {au.design.finalScreens.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.06} as="figure" className="mb-5 break-inside-avoid rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={s.desc} className="bg-white p-3 border-b border-white/5">
                <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto rounded-lg" />
              </Zoomable>
              <figcaption className="p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B]">{s.tag}</span>
                <h3 className="mt-2 font-display text-base font-black ">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 06 DESIGN SYSTEM */}
      <SectionWrap data-testid="section-design-system">
        <SectionLabel num="06" name="Design System" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.designSystem.headline}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{au.designSystem.intro}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-16">
          <AuroraDesignSystem />
        </Reveal>

        <Reveal delay={0.06} className="mt-12 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">system outcomes</p>
          <p className="font-display text-xl md:text-2xl leading-snug text-black">{au.designSystem.systemOutcomes}</p>
        </Reveal>
        <Reveal delay={0.06} className="mt-6 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">cross-product collaboration</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug text-black">{au.designSystem.crossProduct}</p>
        </Reveal>
      </SectionWrap>

      {/* 07 ITERATIVE TESTING */}
      <SectionWrap data-testid="section-validation">
        <SectionLabel num="07" name="Iterative Testing" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">
            {au.validation.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{au.validation.intro}</p>
        </Reveal>

        <ol className="mt-12 relative border-l-2 border-white/15 ml-2 space-y-8">
          {au.validation.rounds.map((r, i) => (
            <Reveal key={r.n} as="li" delay={i * 0.05} className="pl-8 relative">
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
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{au.validation.outcome}</p>
        </Reveal>
      </SectionWrap>

      {/* 08 REFLECTION */}
      <SectionWrap data-testid="section-impact">
        <SectionLabel num="08" name="Reflection" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-10">{au.impact.headline}</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what went well</p>
            <ul className="space-y-3">
              {au.impact.wentWell.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} /><span>{x}</span></li>))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what I&apos;d do differently</p>
            <ul className="space-y-3">
              {au.impact.differently.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Star className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} /><span>{x}</span></li>))}
            </ul>
          </Reveal>
        </div>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6">thank you for reading.</h2>
          <p className="text-lg text-[#A29CB4] mb-8">If you&apos;d like to discuss this project in more detail or explore collaboration opportunities, I&apos;d love to connect.</p>
          <div className="flex gap-4 justify-center flex-wrap items-center">
            <ProjectNav slug="aurora" variant="footer" which="prev" />
            <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}><Mail size={16} /> email me</a>
            <Link to="/case/finvista" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>read finvista case study</Link>
            <Link to="/projects" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>view all projects</Link>
            <ProjectNav slug="aurora" variant="footer" which="next" />
          </div>
        </Reveal>
      </SectionWrap>
    </article>
  );
}
