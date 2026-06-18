import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, X, Star, AlertTriangle } from "lucide-react";
import { aurora as au } from "../data/auroraCase";
import { PROFILE } from "../data/content";

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E94B1F]">
      {num} · {name}
    </span>
    <span className="flex-1 h-px bg-black/15" />
  </div>
);

const SectionWrap = ({ children, className = "", ...rest }) => (
  <section className={`px-6 md:px-10 lg:px-16 py-20 md:py-24 border-t border-black/10 ${className}`} {...rest}>
    {children}
  </section>
);

export default function AuroraCaseStudy() {
  return (
    <article data-testid="aurora-case-study" className="pb-24">
      {/* TITLE BLOCK */}
      <header className="px-6 md:px-10 lg:px-16 pt-12 pb-10">
        <Link
          to="/projects"
          data-testid="back-link"
          className="inline-flex items-center gap-2 mb-10 text-xs font-mono uppercase tracking-widest text-[#5A5A5A] hover:text-[#E94B1F] transition-colors"
        >
          <ArrowLeft size={14} /> all projects
        </Link>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-5">
          ux case study · b2b saas · europe
        </p>
        <h1 className="font-display text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] lowercase case-keep">
          aur<span className="dot-o">o</span>ra
        </h1>
        <p className="mt-8 max-w-3xl text-xl md:text-2xl text-[#1a1a1a] leading-snug font-light italic">
          {au.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl">
          {au.hero.stats.map((s) => (
            <div key={s.label} className="bg-[#F7F1DA] rounded-2xl p-5 md:p-6">
              <div className="font-display text-3xl md:text-5xl font-black text-[#E94B1F] leading-none">{s.value}</div>
              <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Hero image */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl overflow-hidden bg-[#F7F1DA] p-6 md:p-10" data-testid="case-hero-image">
          <img src="/aurora/04_RBJ_Properties_Weekly.jpg" alt="Aurora hero — Recurring Batch Journey, Weekly cadence" className="w-full h-auto object-contain rounded-xl" loading="lazy" />
        </div>
      </div>

      {/* 01 OVERVIEW */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="01" name="Overview" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-6">{au.overview.headline}</h2>

        <div className="rounded-3xl bg-[#0A0A0A] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#E94B1F] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD93D] mb-4">{au.overview.tldrTitle}</p>
          <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95 max-w-4xl">{au.overview.tldr}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {au.overview.facts.map((f) => (
            <div key={f.label} className="bg-[#F7F1DA] rounded-2xl p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A] mb-2">{f.label}</p>
              <p className="font-display text-base md:text-lg font-bold">{f.value}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design process</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {au.overview.process.map((p) => (
            <div key={p.step} className="bg-[#F7F1DA] rounded-2xl p-6">
              <div className="font-display text-4xl md:text-5xl font-black text-[#E94B1F]">{p.step}</div>
              <div className="mt-3 font-display text-lg font-bold lowercase">{p.title}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">{p.duration}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-[#1a1a1a]">
            <p>{au.overview.intro}</p>
            <p>{au.overview.intro2}</p>
            <div className="mt-6 rounded-3xl bg-[#FFD93D] p-7">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3">{au.overview.contextTitle}</p>
              <p className="font-display text-lg md:text-xl font-bold leading-snug">{au.overview.contextBody}</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {au.overview.metadata.map((m) => (
              <div key={m.k} className="bg-[#F7F1DA] rounded-2xl p-5 flex items-center justify-between gap-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">{m.k}</span>
                <span className="font-display text-sm md:text-base font-bold text-right">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* 02 PROBLEM */}
      <SectionWrap data-testid="section-problem">
        <SectionLabel num="02" name="The Problem" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-10">{au.problem.headline}</h2>

        <blockquote className="rounded-3xl bg-[#E94B1F] text-white p-8 md:p-10 max-w-4xl">
          <p className="font-display text-xl md:text-3xl italic leading-snug">&ldquo;{au.problem.quote}&rdquo;</p>
          <footer className="mt-4 text-xs font-mono uppercase tracking-widest text-[#FFD93D]">{au.problem.quoteAttribution}</footer>
        </blockquote>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {au.problem.challenges.map((c, i) => (
            <div key={c.t} className="bg-[#F7F1DA] rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[#E94B1F] leading-none">{i + 1}</div>
              <h4 className="mt-4 font-display text-xl font-black lowercase">{c.t}</h4>
              <p className="mt-2 text-base leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">scope & hypothesis</h3>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl mb-8 text-[#1a1a1a]">{au.problem.scopeIntro}</p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-[#F7F1DA] rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <p className="font-mono text-xs uppercase tracking-widest">in scope</p>
            </div>
            <ul className="space-y-3">
              {au.problem.inScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#10B981]" size={16} />{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F7F1DA] rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E94B1F]" />
              <p className="font-mono text-xs uppercase tracking-widest">out of scope</p>
            </div>
            <ul className="space-y-3">
              {au.problem.outOfScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base"><X className="flex-shrink-0 mt-1 text-[#E94B1F]" size={16} />{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#0A0A0A] text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD93D] mb-3">{au.problem.hypothesisTitle}</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-4xl">{au.problem.hypothesis}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {au.problem.hypothesisBullets.map((b) => (
              <li key={b} className="px-4 py-2 rounded-full bg-[#FFD93D] text-[#0A0A0A] text-sm font-semibold">{b}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {au.problem.sideHypotheses.map((h) => (
            <div key={h.t} className="bg-[#F7F1DA] rounded-3xl p-7">
              <h4 className="font-display text-xl font-black lowercase mb-3">{h.t}</h4>
              <p className="text-base leading-relaxed">{h.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#10B981] mb-4">key assumptions</p>
            <ul className="space-y-3">
              {au.problem.assumptions.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm"><Check className="flex-shrink-0 mt-1 text-[#10B981]" size={14} />{a}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-4">identified risks</p>
            <ul className="space-y-3">
              {au.problem.risks.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm"><AlertTriangle className="flex-shrink-0 mt-1 text-[#E94B1F]" size={14} />{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#FFD93D] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3">★ key insight</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-4xl">{au.problem.keyInsight}</p>
        </div>
      </SectionWrap>

      {/* 03 RESEARCH */}
      <SectionWrap data-testid="section-research">
        <SectionLabel num="03" name="Research" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-6">{au.research.headline}</h2>

        <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-4">{au.research.auditTitle}</h3>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl text-[#1a1a1a] mb-8">{au.research.auditIntro}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {au.research.auditFindings.map((f) => (
            <div key={f.t} className="bg-[#F7F1DA] rounded-3xl p-7 border-l-4 border-[#E94B1F]">
              <h4 className="font-display text-xl font-black lowercase mb-2">{f.t}</h4>
              <p className="text-base leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">heuristic evaluation</h3>
        <div className="rounded-3xl bg-[#F7F1DA] divide-y divide-black/10">
          {au.research.heuristics.map((h) => (
            <div key={h.t} className="p-5 md:p-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-4 font-display font-bold text-base lowercase">{h.t}</div>
              <div className="col-span-9 md:col-span-6 text-sm text-[#1a1a1a]/80">{h.d}</div>
              <div className="col-span-3 md:col-span-2 text-right font-display font-black text-2xl text-[#E94B1F]">{h.s}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">stakeholder interviews</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {au.research.stakeholders.map((s) => (
            <div key={s.role} className="bg-[#F7F1DA] rounded-3xl p-7">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#E94B1F] mb-3">{s.role}</p>
              <p className="italic text-base leading-relaxed border-l-2 border-[#E94B1F] pl-4 mb-4">&ldquo;{s.quote}&rdquo;</p>
              <div className="text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">priority</div>
              <div className="font-display text-base font-bold mt-1">{s.priority}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">competitive analysis</h3>
        <div className="rounded-3xl bg-[#F7F1DA] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/10">
                {au.research.competitiveTable.headers.map((h, i) => (
                  <th key={i} className="p-4 text-left font-mono uppercase text-[10px] tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {au.research.competitiveTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-black/5">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? "font-medium" : "text-center font-display font-bold"} ${cell === "Yes" ? "text-[#10B981]" : cell === "No" ? "text-[#E94B1F]" : cell === "Partial" ? "text-[#D97706]" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">research findings</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {au.research.findings.map((f) => (
            <div key={f.t} className="bg-[#F7F1DA] rounded-3xl p-7">
              <h4 className="font-display text-lg font-black lowercase mb-2">{f.t}</h4>
              <p className="text-sm leading-relaxed text-[#1a1a1a]">{f.d}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 04 INSIGHTS */}
      <SectionWrap data-testid="section-insights">
        <SectionLabel num="04" name="Insights" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-10">{au.insights.headline}</h2>

        <h3 className="font-display text-2xl md:text-3xl font-black mb-8">user personas</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {au.insights.personas.map((p) => (
            <div key={p.name} className="bg-[#F7F1DA] rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#E94B1F] text-white flex items-center justify-center font-display font-black text-lg">{p.initials}</div>
                <div>
                  <h4 className="font-display text-lg font-black">{p.name}</h4>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">{p.role}</p>
                </div>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#10B981] mb-2">goals</p>
              <ul className="space-y-1.5 mb-4">
                {p.goals.map((g) => (<li key={g} className="text-sm flex gap-2"><Check size={14} className="flex-shrink-0 mt-1 text-[#10B981]" />{g}</li>))}
              </ul>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#E94B1F] mb-2">frustrations</p>
              <ul className="space-y-1.5">
                {p.frustrations.map((f) => (<li key={f} className="text-sm flex gap-2"><X size={14} className="flex-shrink-0 mt-1 text-[#E94B1F]" />{f}</li>))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design goals</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {au.insights.designGoals.map((g, i) => (
            <div key={g.t} className={`rounded-3xl p-6 ${i % 2 === 0 ? "bg-[#F7F1DA]" : "bg-[#FFD93D]"}`}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A5A]">0{i + 1}</div>
              <h4 className="mt-2 font-display text-lg font-black lowercase">{g.t}</h4>
              <p className="mt-2 text-sm leading-relaxed">{g.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#0A0A0A] text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD93D] mb-3">★ key insight</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-4xl">{au.insights.keyInsight}</p>
        </div>
      </SectionWrap>

      {/* 05 DESIGN */}
      <SectionWrap data-testid="section-design">
        <SectionLabel num="05" name="Design" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-6">{au.design.headline}</h2>

        <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-4">hand-drawn sketches</h3>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl text-[#1a1a1a] mb-8">{au.design.sketchesIntro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {au.design.sketches.map((s) => (
            <figure key={s.title} className="rounded-3xl bg-[#F7F1DA] overflow-hidden">
              <div className="bg-[#FAF5E8] p-4 md:p-6">
                <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto" />
              </div>
              <figcaption className="p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E94B1F]">{s.tag}</span>
                <h4 className="mt-2 font-display text-xl font-black lowercase">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">low-fidelity wireframes</h3>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl text-[#1a1a1a] mb-8">{au.design.wireframesIntro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {au.design.wireframes.map((w) => (
            <figure key={w.title} className="rounded-3xl bg-[#F7F1DA] overflow-hidden">
              <div className="bg-white p-4 md:p-6 border-b border-black/5">
                <img src={w.src} alt={w.title} loading="lazy" className="w-full h-auto" />
              </div>
              <figcaption className="p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E94B1F]">{w.tag}</span>
                <h4 className="mt-2 font-display text-lg font-black lowercase">{w.title}</h4>
                <p className="mt-2 text-sm leading-relaxed">{w.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">final design</h3>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl text-[#1a1a1a] mb-8">{au.design.finalIntro}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {au.design.finalScreens.map((s) => (
            <figure key={s.title} className="rounded-3xl bg-[#F7F1DA] overflow-hidden">
              <div className="bg-white p-3 border-b border-black/5">
                <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto rounded-lg" />
              </div>
              <figcaption className="p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E94B1F]">{s.tag}</span>
                <h4 className="mt-2 font-display text-base font-black lowercase">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/85">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionWrap>

      {/* 06 DESIGN SYSTEM */}
      <SectionWrap data-testid="section-design-system">
        <SectionLabel num="06" name="Design System" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-6">{au.designSystem.headline}</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl text-[#1a1a1a]">{au.designSystem.intro}</p>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">color foundations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {au.designSystem.colors.map((c) => (
            <div key={c.name} className="bg-[#F7F1DA] rounded-2xl overflow-hidden">
              <div className="aspect-[3/2]" style={{ background: c.hex }} />
              <div className="p-4">
                <div className="font-display text-sm font-bold">{c.name}</div>
                <div className="font-mono text-xs text-[#5A5A5A] mt-1">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">typography scale</h3>
        <div className="rounded-3xl bg-[#F7F1DA] divide-y divide-black/10">
          {au.designSystem.typography.map((t) => (
            <div key={t.t} className="p-5 flex items-center justify-between gap-4">
              <span className="font-display text-base font-bold">{t.t}</span>
              <span className="font-mono text-sm text-[#5A5A5A]">{t.v}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">spacing scale (8pt grid)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {au.designSystem.spacing.map((s) => (
            <div key={s.t} className="bg-[#F7F1DA] rounded-2xl p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-[#E94B1F]">{s.t}</div>
              <div className="mt-2 font-display text-lg font-bold">{s.v}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">design tokens</h3>
        <div className="rounded-3xl bg-[#F7F1DA] overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-black/10">
              <th className="p-4 text-left font-mono uppercase text-[10px] tracking-widest">Token</th>
              <th className="p-4 text-left font-mono uppercase text-[10px] tracking-widest">Value</th>
            </tr></thead>
            <tbody>
              {au.designSystem.tokens.map(([k, v]) => (
                <tr key={k} className="border-b border-black/5">
                  <td className="p-4 font-mono text-[#0A0A0A]">{k}</td>
                  <td className="p-4 font-mono text-[#5A5A5A]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">component library · aurora engage UI kit</h3>
        <p className="text-base leading-relaxed max-w-4xl text-[#1a1a1a] mb-8">52 production components organized by category. Each variant lives in Figma with auto-layout and ships as an Angular component on the front-end.</p>
        <div className="flex flex-wrap gap-2">
          {au.designSystem.componentCategories.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full bg-[#F7F1DA] text-sm font-medium hover:bg-[#FFD93D] transition-colors cursor-default">{c}</span>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#E94B1F] text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD93D] mb-3">system outcomes</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-4xl">{au.designSystem.systemOutcomes}</p>
        </div>
        <div className="mt-6 rounded-3xl bg-[#FFD93D] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3">cross-product collaboration</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug max-w-4xl">{au.designSystem.crossProduct}</p>
        </div>
      </SectionWrap>

      {/* 07 VALIDATION */}
      <SectionWrap data-testid="section-validation">
        <SectionLabel num="07" name="Validation" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-10">usability testing</h2>

        <h3 className="font-display text-2xl md:text-3xl font-black mb-6">test setup</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {au.validation.testSetup.map((s) => (
            <div key={s.l} className="bg-[#F7F1DA] rounded-2xl p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A] mb-2">{s.l}</p>
              <p className="font-display text-base font-bold">{s.v}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-6">key results</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {au.validation.keyResults.map((r) => (
            <div key={r.l} className="rounded-3xl bg-[#F7F1DA] p-6">
              <div className="font-display text-4xl md:text-5xl font-black text-[#E94B1F] leading-none">{r.v}</div>
              <div className="mt-3 font-display text-base font-bold lowercase">{r.l}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#10B981]">{r.s}</div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 08 IMPACT */}
      <SectionWrap data-testid="section-impact">
        <SectionLabel num="08" name="Impact" />
        <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-4xl mb-10">outcomes & artifacts created</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {au.impact.outcomes.map((m) => (
            <div key={m.l} className="rounded-3xl bg-[#F7F1DA] p-6">
              <div className="font-display text-4xl md:text-5xl font-black text-[#E94B1F] leading-none">{m.v}</div>
              <div className="mt-3 font-display text-base font-bold lowercase">{m.l}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">{m.s}</div>
            </div>
          ))}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-black mb-6">artifacts created</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {au.impact.artifacts.map((a) => (
            <div key={a.t} className="bg-[#F7F1DA] rounded-3xl p-7">
              <h4 className="font-display text-lg font-black mb-2">{a.t}</h4>
              <p className="text-sm leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">sales talking points</h3>
        <div className="rounded-3xl bg-[#FFD93D] p-8 md:p-10">
          <ul className="space-y-3">
            {au.impact.salesTalkingPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base md:text-lg"><span className="text-[#E94B1F] font-bold mt-1">•</span>{p}</li>
            ))}
          </ul>
        </div>

        <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">key learnings & reflection</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#10B981] mb-4">what went well</p>
            <ul className="space-y-3">
              {au.impact.wentWell.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#10B981]" size={16} /><span>{x}</span></li>))}
            </ul>
          </div>
          <div className="bg-[#F7F1DA] rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-4">what I&apos;d do differently</p>
            <ul className="space-y-3">
              {au.impact.differently.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Star className="flex-shrink-0 mt-1 text-[#E94B1F]" size={16} /><span>{x}</span></li>))}
            </ul>
          </div>
        </div>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <h2 className="font-display text-3xl md:text-5xl font-black mb-6">thank you for reading.</h2>
        <p className="text-lg text-[#5A5A5A] mb-8">If you&apos;d like to discuss this project in more detail or explore collaboration opportunities, I&apos;d love to connect.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FFD93D] text-[#0A0A0A] font-semibold text-sm hover:bg-[#F3C721] transition-colors">email me <ArrowUpRight size={16} /></a>
          <Link to="/case/finvista" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-black/15 text-[#0A0A0A] font-semibold text-sm hover:bg-[#F7F1DA] transition-colors">read finvista case study</Link>
          <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-black/15 text-[#0A0A0A] font-semibold text-sm hover:bg-[#F7F1DA] transition-colors">view all projects</Link>
        </div>
      </SectionWrap>
    </article>
  );
}
