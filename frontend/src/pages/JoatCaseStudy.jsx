import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Check, Star } from "lucide-react";
import { joat as j } from "../data/joatCase";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Zoomable from "../components/Zoomable";
import PhoneFrame from "../components/PhoneFrame";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F5379B]">
      {num} · {name}
    </span>
    <span className="flex-1 h-px bg-white/10" />
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
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] transition-colors"
            >
              <ArrowLeft size={14} /> all projects
            </Link>
            <ProjectNav slug={j.slug} />
          </div>

          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5">
            ux case study · crowdfunding commerce · india
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[#F7F5FF] max-w-5xl">
            Jack of All Threads
          </h1>
          <p className="mt-7 max-w-3xl text-lg md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
            {j.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl">
            {j.hero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 md:p-6 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                <div className="num text-3xl md:text-5xl font-black text-[#075EFD] leading-none">{s.value}</div>
                <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </header>

      {/* 01 OVERVIEW */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="01" name="Overview" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.overview.headline}</h2>

        <div className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">{j.overview.tldrTitle}</p>
          <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95 max-w-6xl">{j.overview.tldr}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {j.overview.facts.map((f) => (
            <div key={f.label} className="dark-card rounded-2xl p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-2">{f.label}</p>
              <p className="font-display text-sm md:text-base font-bold leading-snug">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-5 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
          <p>{j.overview.intro}</p>
          <p>{j.overview.intro2}</p>
        </div>

        <div className="mt-8 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#F5379B]">{j.overview.contextTitle}</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black">{j.overview.contextBody}</p>
        </div>
      </SectionWrap>

      {/* 02 PROBLEM */}
      <SectionWrap data-testid="section-problem">
        <SectionLabel num="02" name="The Problem" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.problem.headline}</h2>

        <div className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#F5379B]">core challenge</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black">{j.problem.coreChallenge}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {j.problem.dimensions.map((d, i) => (
            <div key={d.title} className="dark-card rounded-3xl p-7">
              <div className="font-display text-5xl font-black text-[#075EFD] leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h4 className="mt-4 font-display text-xl font-black">{d.title}</h4>
              <p className="mt-2 text-base leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">{j.problem.hypothesisTitle}</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{j.problem.hypothesis}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {j.problem.hypothesisBullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5379B]/45 bg-[#F5379B]/10 text-[#F4F3FA] text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5379B]" />{b}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrap>

      {/* 03 HOW IT WORKS */}
      <SectionWrap data-testid="section-how-it-works">
        <SectionLabel num="03" name="How It Works" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.howItWorks.headline}</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{j.howItWorks.intro}</p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {j.howItWorks.steps.map((s) => (
            <div key={s.n} className="dark-card rounded-3xl p-7">
              <div className="num text-4xl md:text-5xl font-black text-[#075EFD] leading-none">{s.n}</div>
              <h4 className="mt-4 font-display text-xl font-black">{s.t}</h4>
              <p className="mt-2 text-base leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <figure className="mt-12 rounded-3xl dark-card overflow-hidden">
          <Zoomable src={j.howItWorks.image.src} alt={j.howItWorks.image.caption} caption={j.howItWorks.image.caption} className="bg-white">
            <img src={j.howItWorks.image.src} alt={j.howItWorks.image.caption} loading="lazy" className="block w-full h-auto" />
          </Zoomable>
          <figcaption className="p-5 text-xs font-mono uppercase tracking-widest text-[#A29CB4] text-center">{j.howItWorks.image.caption}</figcaption>
        </figure>
      </SectionWrap>

      {/* 04 DESIGN STUDIO */}
      <SectionWrap data-testid="section-studio">
        <SectionLabel num="04" name="The Design Studio" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.studio.headline}</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{j.studio.intro}</p>

        <figure className="mt-12 rounded-3xl dark-card overflow-hidden">
          <Zoomable src={j.studio.image.src} alt={j.studio.image.caption} caption={j.studio.image.caption} className="bg-white">
            <img src={j.studio.image.src} alt={j.studio.image.caption} loading="lazy" className="block w-full h-auto" />
          </Zoomable>
          <figcaption className="p-5 text-xs font-mono uppercase tracking-widest text-[#A29CB4] text-center">{j.studio.image.caption}</figcaption>
        </figure>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {j.studio.points.map((p) => (
            <div key={p.t} className="dark-card rounded-3xl p-7 border-l-4 border-[#075EFD]">
              <h4 className="font-display text-lg font-black mb-2">{p.t}</h4>
              <p className="text-sm leading-relaxed text-[#F4F3FA]">{p.d}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 05 CAMPAIGN FLOW */}
      <SectionWrap data-testid="section-campaign">
        <SectionLabel num="05" name="Campaign Flow" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.campaign.headline}</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{j.campaign.intro}</p>

        <div className="grid grid-cols-1 gap-6">
          {j.campaign.screens.map((s) => (
            <figure key={s.title} className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={`${s.title} — ${s.desc}`} className="bg-white">
                <img src={s.src} alt={s.title} loading="lazy" className="block w-full h-auto" />
              </Zoomable>
              <figcaption className="p-6">
                <h4 className="font-display text-lg font-black">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionWrap>

      {/* 06 RAISER DASHBOARD */}
      <SectionWrap data-testid="section-dashboard">
        <SectionLabel num="06" name="Raiser Dashboard" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.dashboard.headline}</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{j.dashboard.intro}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {j.dashboard.screens.map((s) => (
            <figure key={s.title} className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={`${s.title} — ${s.desc}`} className="bg-white">
                <img src={s.src} alt={s.title} loading="lazy" className="block w-full h-auto" />
              </Zoomable>
              <figcaption className="p-5">
                <h4 className="font-display text-base font-black">{s.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionWrap>

      {/* 07 RESPONSIVE */}
      <SectionWrap data-testid="section-responsive">
        <SectionLabel num="07" name="Responsive" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.responsive.headline}</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-12">{j.responsive.intro}</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {j.responsive.screens.map((s) => (
            <figure key={s.title}>
              <Zoomable src={s.src} alt={s.title} caption={s.title} className="block">
                <PhoneFrame src={s.src} alt={s.title} />
              </Zoomable>
              <figcaption className="mt-4 text-[11px] font-mono uppercase tracking-widest text-[#A29CB4] text-center">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </SectionWrap>

      {/* 08 REFLECTION */}
      <SectionWrap data-testid="section-reflection">
        <SectionLabel num="08" name="Reflection" />
        <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{j.reflection.headline}</h2>

        <div className="rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">an honest note</p>
          <p className="font-display text-lg md:text-xl leading-snug max-w-6xl text-white/95">{j.reflection.note}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">{j.reflection.pressTitle}</p>
            <ul className="space-y-3">
              {j.reflection.press.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} /><span>{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what I&apos;d do differently</p>
            <ul className="space-y-3">
              {j.reflection.differently.map((x) => (
                <li key={x} className="flex items-start gap-3 text-base"><Star className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} /><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrap>

      {/* Footer */}
      <SectionWrap className="text-center">
        <h2 className="font-display text-3xl md:text-4xl font-black mb-6">thank you for reading.</h2>
        <p className="text-lg text-[#A29CB4] mb-8">If you&apos;d like to talk through this project or how I approach end-to-end product design, I&apos;d love to connect.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#F5379B] font-semibold text-sm hover:bg-[#F5379B] hover:text-white transition-colors"><Mail size={16} /> email me</a>
          <Link to="/case/aurora" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-colors">read aurora case study</Link>
          <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-colors">View All projects</Link>
        </div>
      </SectionWrap>
    </article>
  );
}
