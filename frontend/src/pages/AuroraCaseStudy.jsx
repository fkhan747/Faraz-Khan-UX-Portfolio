import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Check, X, Star, AlertTriangle } from "lucide-react";
import { useCaseData } from "../components/CaseStudyGate";
import VaultImage from "../components/VaultImage";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import OwnedCard from "../components/OwnedCard";
import Zoomable from "../components/Zoomable";
import ScreenCarousel from "../components/ScreenCarousel";
import AuroraDesignSystem from "../components/AuroraDesignSystem";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";
import CaseTopBar from "../components/CaseTopBar";

// Focus ring for the light ground. The offset used to be the dark site
// background, which drew a near-black halo on paper, and the ring used the
// bright magenta that fails contrast on light (3.04:1). Both now match the
// rest of the light pages.
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71E73] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFEDE7]";
/* Aurora's own brand green, taken from the design system it shipped with
   (Evergreen #1A4C49). It replaces the site's old dark-theme electric blue on
   every number and accent on this page. */
const ACCENT = "#1A4C49";
// A shipped screen that anchors the Outcome section with a real visual.
const A_HERO = "/aurora/04_RBJ_Properties_Weekly.jpg";

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
  // Decrypted case data provided by CaseStudyGate after unlock.
  const au = useCaseData();
  return (
    /* theme-light drives the page. This route renders outside <Layout>, so it
       never received the class and kept the dark palette it was authored
       against. Its vocabulary (dark-card, #F4F3FA, text-white, #F5379B) is
       what the remap in index.css already covers, so the class does the work
       instead of a per-element rewrite. The cover header is the exception: it
       sits on photography and keeps its dark scrim. */
    <article
      data-testid="aurora-case-study"
      className="theme-light bg-[#EFEDE7] pb-24"
      style={{ "--case-acc": ACCENT }}
    >
      <Seo title={au.title} description={au.subtitle} />
      <CaseTopBar accent={ACCENT} />
      {/* HERO, light. Was white type over a darkened cover photograph, which
          left Aurora as a dark page inside a light site. Same structure as the
          FinVista hero now: paper ground, ink type, and the cover shown as a
          picture rather than used as a scrim. */}
      <header className="pt-10 pb-14">
        <Container>
          <Reveal as="p" delay={0} className="text-[11px] font-mono uppercase tracking-[0.25em] mb-5" style={{ color: ACCENT }}>
            ux case study · b2b saas · europe
          </Reveal>
          <Reveal as="h1" delay={0.08} className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] case-keep text-[#171512]">
            Aur<span className="dot-o">o</span>ra
          </Reveal>
          <Reveal as="p" delay={0.16} className="mt-8 max-w-3xl text-xl md:text-2xl text-[#171512] leading-snug font-light italic">
            {au.subtitle}
          </Reveal>

          <Reveal delay={0.22} className="mt-12 rounded-3xl overflow-hidden border border-[#DCD7CC] bg-white">
            <VaultImage
              src="/aurora/cover.jpg"
              alt="Aurora campaign platform"
              className="w-full h-auto block"
              loading="eager"
            />
          </Reveal>

          {au.hero.facts && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {au.hero.facts.map((f, i) => (
                <Reveal key={f.label} delay={0.24 + i * 0.06} className="rounded-2xl p-5 bg-white border border-[#DCD7CC]">
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{f.label}</p>
                  <p className="font-display text-base md:text-lg font-bold text-[#171512] leading-snug">{f.value}</p>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {au.hero.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.42 + i * 0.06} className="rounded-2xl p-5 md:p-6 bg-white border border-[#DCD7CC]">
                <div className="num text-3xl md:text-5xl font-black leading-none" style={{ color: ACCENT }}>{s.value}</div>
                <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#6B665D]">{s.label}</div>
              </Reveal>
            ))}
          </div>

          <OwnedCard items={["Research", "Information architecture", "UI design", "Design system", "AI interaction patterns", "Prototyping"]} accent={ACCENT} />
        </Container>
      </header>

      {/* 01 THE COMPLAINT */}
      <SectionWrap data-testid="section-problem">
        <SectionLabel num="01" name="The Complaint" />
        <Reveal>
          <blockquote className="rounded-3xl bg-white p-8 md:p-10">
            <p className="font-display text-xl md:text-3xl italic leading-snug text-black">&ldquo;{au.problem.quote}&rdquo;</p>
            <footer className="mt-4 text-xs font-mono uppercase tracking-widest text-[#F5379B]">{au.problem.quoteAttribution}</footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-10 mt-12">{au.problem.headline}</h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {au.problem.challenges.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[var(--case-acc)] leading-none">{i + 1}</div>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <span className="w-2 h-2 rounded-full bg-[var(--case-acc)]" />
              <p className="font-mono text-xs uppercase tracking-widest">out of scope</p>
            </div>
            <ul className="space-y-3">
              {au.problem.outOfScope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base"><X className="flex-shrink-0 mt-1 text-[var(--case-acc)]" size={16} />{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">{au.problem.hypothesisTitle}</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{au.problem.hypothesis}</p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-3">
            {au.problem.hypothesisBullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5379B]/45 bg-[#F5379B]/10 text-[#F4F3FA] text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5379B]" />{b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 rounded-3xl bg-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">★ key insight</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-6xl text-black">{au.problem.keyInsight}</p>
        </Reveal>
      </SectionWrap>

      {/* 02 THE WINDOW */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="02" name="The Window" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.overview.headline}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-2 space-y-5 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
          <p>{au.overview.intro}</p>
          <p>{au.overview.intro2}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {au.overview.facts.map((f, i) => (
            <Reveal key={f.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{f.label}</p>
              <p className="font-display text-base md:text-lg font-bold">{f.value}</p>
            </Reveal>
          ))}
        </div>


        <Reveal delay={0.06} className="mt-8 rounded-3xl bg-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">{au.overview.contextTitle}</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug text-black">{au.overview.contextBody}</p>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">Primary Users</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {au.primaryUsers.map((u, i) => (
            <Reveal key={u.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-6 border-l-4 border-[var(--case-acc)]">
              <h3 className="font-display text-lg font-black mb-2">{u.label}</h3>
              <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{u.desc}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 03 RESEARCH */}
      <SectionWrap data-testid="section-research">
        <SectionLabel num="03" name="The Audit" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.research.headline}</h2>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-4">{au.research.auditTitle}</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.research.auditIntro}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {au.research.auditFindings.map((f, i) => (
            <Reveal key={f.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7 border-l-4 border-[var(--case-acc)]">
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
              <div className="col-span-3 md:col-span-2 text-right font-display font-black text-2xl text-[var(--case-acc)]">{h.s}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">voices from the team</h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {au.research.stakeholders.map((s, i) => (
            <Reveal key={s.role} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-3">{s.role}</p>
              <p className="italic text-base leading-relaxed border-l-2 border-[var(--case-acc)] pl-4 mb-4">&ldquo;{s.quote}&rdquo;</p>
              <div className="text-xs font-mono uppercase tracking-widest text-white">priority</div>
              <div className="font-display text-base font-bold mt-1">{s.priority}</div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">research findings</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <SectionLabel num="04" name="The Bet" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-10">{au.insights.headline}</h2>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">design goals</h3>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {au.insights.designGoals.map((g, i) => (
            <Reveal key={g.t} delay={(i % 2) * 0.06} className={`rounded-3xl p-6 ${i % 2 === 0 ? "dark-card" : "bg-white"}`}>
              <div className={`font-mono text-sm uppercase tracking-widest ${i % 2 === 0 ? "text-white" : "text-[#C71E73]"}`}>0{i + 1}</div>
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
        <SectionLabel num="05" name="Two Surfaces" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.design.headline}</h2>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 font-display text-2xl md:text-3xl font-black mb-4">hand-drawn sketches</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.design.sketchesIntro}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {au.design.sketches.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.06} as="figure" className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={s.desc} className="bg-[#FAF5E8] p-4 md:p-6">
                <VaultImage src={s.src} alt={s.title} loading="lazy" className="w-full h-auto" />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {au.design.wireframes.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.06} as="figure" className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={w.src} alt={w.title} caption={w.desc} className="bg-white p-4 md:p-6 border-b border-white/5">
                <VaultImage src={w.src} alt={w.title} loading="lazy" className="w-full h-auto" />
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
        {/* Was a three-column masonry grid, which made every screen too small to
            read and gave the sequence no order. One screen at a time now, with
            the next peeking so it is obvious there is more. */}
        <ScreenCarousel
          label="Aurora final design screens"
          items={au.design.finalScreens}
          renderMedia={(s) => (
            <Zoomable src={s.src} alt={s.title} caption={s.desc}>
              <VaultImage src={s.src} alt={s.title} loading="lazy" className="w-full h-auto rounded-lg" />
            </Zoomable>
          )}
        />
      </SectionWrap>

      {/* 06 DESIGN SYSTEM */}
      <SectionWrap data-testid="section-design-system">
        <SectionLabel num="06" name="The System" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.designSystem.headline}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{au.designSystem.intro}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-16">
          <AuroraDesignSystem />
        </Reveal>

        <Reveal delay={0.06} className="mt-12 rounded-3xl bg-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">system outcomes</p>
          <p className="font-display text-xl md:text-2xl leading-snug text-black">{au.designSystem.systemOutcomes}</p>
        </Reveal>
        <Reveal delay={0.06} className="mt-6 rounded-3xl bg-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">cross-product collaboration</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug text-black">{au.designSystem.crossProduct}</p>
        </Reveal>
      </SectionWrap>

      {/* 07 OUTCOME — merges validation + reflection into one section */}
      <SectionWrap data-testid="section-outcome">
        <SectionLabel num="07" name="What Changed" />
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{au.impact.headline}</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{au.validation.intro}</p>
        </Reveal>

        {/* Headline outcome + a real screen tying it to visible product. */}
        <Reveal delay={0.06} className="rounded-3xl dark-card text-white p-8 md:p-10 mb-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">what changed</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{au.validation.outcome}</p>
        </Reveal>

        <Reveal delay={0.06} as="figure" className="mb-12 rounded-3xl dark-card overflow-hidden">
          <Zoomable src={A_HERO} alt="Aurora recurring campaign, weekly view" caption="Recurring setup, weekly view: schedule, content, and rules on one page.">
            <VaultImage src={A_HERO} alt="Aurora recurring campaign, weekly view" loading="lazy" className="w-full h-auto bg-white" />
          </Zoomable>
        </Reveal>

        {/* Rounds + reflection side by side, tightened. */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5379B] mb-5">five rounds of testing</h3>
            <ol className="relative border-l-2 border-white/15 ml-2 space-y-6">
              {au.validation.rounds.map((r, i) => (
                <li key={r.n} className="pl-6 relative">
                  <span className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-[var(--case-acc)] text-white flex items-center justify-center font-display font-black text-sm border-4 border-[#EFEDE7]">{r.n}</span>
                  <h4 className="font-display text-base font-black">{r.t}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed">{r.d}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="space-y-5">
            <Reveal className="dark-card rounded-3xl p-6">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-3">what went well</p>
              <ul className="space-y-2.5">
                {au.impact.wentWell.map((x) => (<li key={x} className="flex items-start gap-3 text-sm"><Check className="flex-shrink-0 mt-0.5 text-[#F5379B]" size={14} /><span>{x}</span></li>))}
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="dark-card rounded-3xl p-6">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-3">what I&apos;d do differently</p>
              <ul className="space-y-2.5">
                {au.impact.differently.map((x) => (<li key={x} className="flex items-start gap-3 text-sm"><Star className="flex-shrink-0 mt-0.5 text-[var(--case-acc)]" size={14} /><span>{x}</span></li>))}
              </ul>
            </Reveal>
          </div>
        </div>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6">thank you for reading.</h2>
          <p className="text-lg text-[#A29CB4] mb-8">Want the story behind any decision here? I&apos;m happy to walk you through it.</p>
          <div className="cs-end">
            <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className="cs-btn"><Mail size={16} /> Email Me</a>
            <Link to="/case/finvista" className="cs-btn-ghost">Read FinVista</Link>
            <Link to="/projects" className="cs-btn-ghost">All Projects</Link>
          </div>
          <div className="flex gap-4 justify-center flex-wrap items-center mt-8">
            <ProjectNav slug="aurora" variant="footer" which="prev" />
            <ProjectNav slug="aurora" variant="footer" which="next" />
          </div>
        </Reveal>
      </SectionWrap>
    </article>
  );
}
