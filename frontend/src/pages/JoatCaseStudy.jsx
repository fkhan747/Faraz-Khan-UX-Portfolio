import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Check, Star } from "lucide-react";
import { joat as j } from "../data/joatCase";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Zoomable from "../components/Zoomable";
import PhoneFrame from "../components/PhoneFrame";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";

// Shared focus-visible ring for interactive elements on the dark page.
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5379B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100210]";

// Strong ease-out, matched to Reveal's curve, for the self-drawing divider.
const EASE = [0.23, 1, 0.32, 1];

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <Reveal as="span" className="font-mono text-xs uppercase tracking-[0.25em] text-[#F5379B]">
      {num} · {name}
    </Reveal>
    <motion.span
      className="flex-1 h-px bg-white/10 origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
    />
  </div>
);

const SectionWrap = ({ children, className = "", ...rest }) => (
  <section className={`py-20 md:py-24 border-t border-white/10 ${className}`} {...rest}>
    <Container>{children}</Container>
  </section>
);

export default function JoatCaseStudy() {
  return (
    <article data-testid="joat-case-study" className="pb-24">
      <Seo title={`${j.title} · Faraz Khan`} description={j.subtitle} />
      <CaseStudyNav />

      {/* TITLE BLOCK over a darkened cover image */}
      <header className="relative overflow-hidden">
        <img
          src={j.hero.cover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(105deg, rgba(16,2,16,0.94) 0%, rgba(16,2,16,0.7) 55%, rgba(16,2,16,0.5) 100%)" }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, rgba(16,2,16,0.5) 0%, rgba(16,2,16,0) 30%, rgba(16,2,16,0) 50%, rgba(16,2,16,0.94) 100%)" }}
        />
        <Container className="relative z-10 pt-12 pb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
            <Link
              to="/projects"
              data-testid="back-link"
              className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] rounded transition-[color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}
            >
              <ArrowLeft size={14} /> all projects
            </Link>
          </div>

          <Reveal as="p" className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5">
            ux case study · crowdfunding commerce · india
          </Reveal>
          <Reveal as="h1" delay={0.08} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[#F7F5FF] max-w-5xl case-keep">
            Jack of All Threads
          </Reveal>
          <Reveal as="p" delay={0.16} className="mt-7 max-w-3xl text-lg md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
            {j.subtitle}
          </Reveal>

          {j.hero.facts && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {j.hero.facts.map((f, i) => (
                <Reveal key={f.label} delay={0.24 + i * 0.06} className="rounded-2xl p-5 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">{f.label}</p>
                  <p className="font-display text-base md:text-lg font-bold text-[#F4F3FA] leading-snug">{f.value}</p>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-4 grid grid-cols-3 gap-4 max-w-3xl">
            {j.hero.stats.map((s, i) => (
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
        <SectionLabel num="01" name="Project Overview" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.overview.headline}</Reveal>

        <Reveal className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">{j.overview.tldrTitle}</p>
          <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95 max-w-6xl case-keep">{j.overview.tldr}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {j.overview.facts.map((f, i) => (
            <Reveal key={f.label} delay={(i % 4) * 0.05} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{f.label}</p>
              <p className="font-display text-sm md:text-base font-bold leading-snug">{f.value}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 space-y-5 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
          <p>{j.overview.intro}</p>
          <p>{j.overview.intro2}</p>
        </Reveal>

        <Reveal className="mt-8 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">{j.overview.contextTitle}</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black case-keep">{j.overview.contextBody}</p>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">Primary Users</Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {j.primaryUsers.map((u, i) => (
            <Reveal key={u.label} delay={(i % 3) * 0.05} className="dark-card rounded-2xl p-6 border-l-4 border-[#075EFD]">
              <h4 className="font-display text-lg font-black mb-2">{u.label}</h4>
              <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{u.desc}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 02 PROBLEM */}
      <SectionWrap data-testid="section-problem">
        <SectionLabel num="02" name="The Problem" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.problem.headline}</Reveal>

        <Reveal className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">core challenge</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black case-keep">{j.problem.coreChallenge}</p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {j.problem.dimensions.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[#075EFD] leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-display text-xl font-black">{d.title}</h3>
              <p className="mt-2 text-base leading-relaxed">{d.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">{j.problem.hypothesisTitle}</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl case-keep">{j.problem.hypothesis}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {j.problem.hypothesisBullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5379B]/45 bg-[#F5379B]/10 text-[#F4F3FA] text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5379B]" />{b}
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionWrap>

      {/* 03 HOW IT WORKS */}
      <SectionWrap data-testid="section-how-it-works">
        <SectionLabel num="03" name="How It Works" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.howItWorks.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{j.howItWorks.intro}</Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {j.howItWorks.steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.05} className="dark-card rounded-3xl p-7">
              <div className="num text-4xl md:text-5xl font-black text-[#075EFD] leading-none">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-black">{s.t}</h3>
              <p className="mt-2 text-base leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="figure" delay={0.08} className="mt-12 rounded-3xl dark-card overflow-hidden">
          <Zoomable src={j.howItWorks.image.src} alt={j.howItWorks.image.caption} caption={j.howItWorks.image.caption} className="bg-white">
            <img src={j.howItWorks.image.src} alt={j.howItWorks.image.caption} width={j.howItWorks.image.w} height={j.howItWorks.image.h} loading="lazy" className="block w-full h-auto" />
          </Zoomable>
          <figcaption className="p-5 text-xs font-mono uppercase tracking-widest text-white text-center">{j.howItWorks.image.caption}</figcaption>
        </Reveal>
      </SectionWrap>

      {/* 04 INFORMATION ARCHITECTURE */}
      <SectionWrap data-testid="section-ia">
        <SectionLabel num="04" name="Information Architecture" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.ia.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{j.ia.intro}</Reveal>
        <Reveal as="figure" delay={0.08} className="mt-12 rounded-3xl dark-card p-5 md:p-8">
          <Zoomable src={j.ia.diagram} alt={j.ia.caption} caption={j.ia.caption} className="block">
            <img src={j.ia.diagram} alt={j.ia.caption} width={j.ia.diagramW} height={j.ia.diagramH} loading="lazy" className="block w-full h-auto" />
          </Zoomable>
          <figcaption className="mt-5 text-xs font-mono uppercase tracking-widest text-white text-center">{j.ia.caption}</figcaption>
        </Reveal>
      </SectionWrap>

      {/* 05 USER FLOW */}
      <SectionWrap data-testid="section-user-flow">
        <SectionLabel num="05" name="User Flow" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.userFlow.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{j.userFlow.intro}</Reveal>
        <Reveal as="figure" delay={0.08} className="mt-12 rounded-3xl dark-card p-5 md:p-8">
          <Zoomable src={j.userFlow.diagram} alt={j.userFlow.caption} caption={j.userFlow.caption} className="block">
            <img src={j.userFlow.diagram} alt={j.userFlow.caption} width={j.userFlow.diagramW} height={j.userFlow.diagramH} loading="lazy" className="block w-full h-auto" />
          </Zoomable>
          <figcaption className="mt-5 text-xs font-mono uppercase tracking-widest text-white text-center">{j.userFlow.caption}</figcaption>
        </Reveal>
      </SectionWrap>

      {/* 06 WIREFRAMES */}
      <SectionWrap data-testid="section-wireframes">
        <SectionLabel num="06" name="Wireframes" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.wireframes.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{j.wireframes.intro}</Reveal>
        <div className="space-y-6">
          {j.wireframes.batches.map((b, i) => (
            <Reveal as="figure" key={i} delay={(i % 2) * 0.06} className="rounded-3xl dark-card p-5 md:p-8">
              <Zoomable src={b.src} alt={b.caption} caption={b.caption} className="block">
                <img src={b.src} alt={b.caption} width={b.w} height={b.h} loading="lazy" className="block w-full h-auto" />
              </Zoomable>
              <figcaption className="mt-5 text-xs font-mono uppercase tracking-widest text-white text-center">{b.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 07 DESIGN STUDIO */}
      <SectionWrap data-testid="section-studio">
        <SectionLabel num="07" name="The Design Studio" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.studio.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{j.studio.intro}</Reveal>

        <Reveal as="figure" delay={0.08} className="mt-12 rounded-3xl dark-card overflow-hidden">
          <Zoomable src={j.studio.image.src} alt={j.studio.image.caption} caption={j.studio.image.caption} className="bg-white">
            <img src={j.studio.image.src} alt={j.studio.image.caption} width={j.studio.image.w} height={j.studio.image.h} loading="lazy" className="block w-full h-auto" />
          </Zoomable>
          <figcaption className="p-5 text-xs font-mono uppercase tracking-widest text-white text-center">{j.studio.image.caption}</figcaption>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {j.studio.points.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.05} className="dark-card rounded-3xl p-7 border-l-4 border-[#075EFD]">
              <h3 className="font-display text-lg font-black mb-2">{p.t}</h3>
              <p className="text-sm leading-relaxed text-[#F4F3FA]">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 08 CAMPAIGN FLOW */}
      <SectionWrap data-testid="section-campaign">
        <SectionLabel num="08" name="Campaign Flow" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.campaign.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{j.campaign.intro}</Reveal>

        <div className="grid grid-cols-1 gap-6">
          {j.campaign.screens.map((s, i) => (
            <Reveal as="figure" key={s.title} delay={(i % 2) * 0.06} className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={`${s.title}: ${s.desc}`} className="bg-white">
                <img src={s.src} alt={s.title} width={s.w} height={s.h} loading="lazy" className="block w-full h-auto" />
              </Zoomable>
              <figcaption className="p-6">
                <h3 className="font-display text-lg font-black">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 09 RAISER DASHBOARD */}
      <SectionWrap data-testid="section-dashboard">
        <SectionLabel num="09" name="Raiser Dashboard" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.dashboard.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{j.dashboard.intro}</Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {j.dashboard.screens.map((s, i) => (
            <Reveal as="figure" key={s.title} delay={(i % 2) * 0.06} className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={`${s.title}: ${s.desc}`} className="bg-white">
                <img src={s.src} alt={s.title} width={s.w} height={s.h} loading="lazy" className="block w-full h-auto" />
              </Zoomable>
              <figcaption className="p-5">
                <h3 className="font-display text-base font-black">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 10 RESPONSIVE */}
      <SectionWrap data-testid="section-responsive">
        <SectionLabel num="10" name="Responsive" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.responsive.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-12">{j.responsive.intro}</Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {j.responsive.screens.map((s, i) => (
            <Reveal as="figure" key={s.title} delay={(i % 4) * 0.05}>
              <Zoomable src={s.src} alt={s.title} caption={s.title} className="block">
                <PhoneFrame src={s.src} alt={s.title} />
              </Zoomable>
              <figcaption className="mt-4 text-sm font-mono uppercase tracking-widest text-white text-center">{s.title}</figcaption>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* 11 REFLECTION */}
      <SectionWrap data-testid="section-reflection">
        <SectionLabel num="11" name="Reflection" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.reflection.headline}</Reveal>

        <Reveal className="rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">an honest note</p>
          <p className="font-display text-lg md:text-xl leading-snug max-w-6xl text-white/95 case-keep">{j.reflection.note}</p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">{j.reflection.pressTitle}</p>
            <ul className="space-y-3">
              {j.reflection.press.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} /><span>{x}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what I&apos;d do differently</p>
            <ul className="space-y-3">
              {j.reflection.differently.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base"><Star className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} /><span>{x}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black mb-6">thank you for reading.</Reveal>
        <Reveal as="p" delay={0.08} className="text-lg text-[#A29CB4] mb-8">If you&apos;d like to talk through this project or how I approach end-to-end product design, I&apos;d love to connect.</Reveal>
        <div className="flex gap-4 justify-center flex-wrap items-center">
          <ProjectNav slug={j.slug} variant="footer" which="prev" />
          <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}><Mail size={16} /> email me</a>
          <Link to="/case/aurora" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>read aurora case study</Link>
          <Link to="/projects" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>view all projects</Link>
          <ProjectNav slug={j.slug} variant="footer" which="next" />
        </div>
      </SectionWrap>
    </article>
  );
}
