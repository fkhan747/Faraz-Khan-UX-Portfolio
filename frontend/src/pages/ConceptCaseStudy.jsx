import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Mail, Check, X, Star, Sparkles, Maximize2, Quote,
} from "lucide-react";
import { concepts, PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Zoomable from "../components/Zoomable";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import Reveal from "../components/Reveal";

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5379B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100210]";

/**
 * Shared renderer for the AI-native OS-family concept case studies
 * (KnowledgeOS, DecisionOS - and any future ones). RecruitOS keeps its own
 * page because it embeds a live interactive prototype; these render hi-fi
 * concept screens instead.
 *
 * Props:
 *   data   - the case object (knowledgeos / decisionos), same shape as recruitosCase
 *   accent - the product's AI gradient (CSS string), e.g. "linear-gradient(...)"
 *   wordmark - JSX for the title with the dot-o span
 */

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F5379B]">
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

const scoreColor = (cell) =>
  cell === "Yes" ? "text-[#F5379B]" :
  cell === "No" ? "text-[#075EFD]" :
  cell === "Partial" ? "text-[#D97706]" : "";

export default function ConceptCaseStudy({ data: r, accent, wordmark }) {
  const AI_GRAD = accent;
  const gradText = {
    background: AI_GRAD, WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent", backgroundClip: "text",
  };

  // Auto-size the embedded prototype to its real content height (same-origin),
  // so there is no scrollbar inside the iframe. Re-syncs on content + window resize.
  const iframeRef = useRef(null);
  useEffect(() => {
    if (!r.prototypeUrl) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer;
    const syncHeight = () => {
      // Defer the height write to the next frame. Setting iframe.style.height
      // synchronously inside the ResizeObserver callback resizes an observed
      // element, which re-fires the observer and throws the benign
      // "ResizeObserver loop completed with undelivered notifications" warning
      // (CRA's dev overlay surfaces it as an error). rAF + a no-op guard breaks it.
      window.requestAnimationFrame(() => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (!doc) return;
          const body = doc.body, html = doc.documentElement;
          // NB: documentElement.scrollHeight / clientHeight report the iframe
          // VIEWPORT height (a spec special-case), so they floor-clamp to the
          // iframe's current height and trap auto-sizing in a feedback loop.
          // body.* and html.offsetHeight are the real content box and can shrink
          // below the current iframe height - use those instead.
          const h = Math.max(
            body?.scrollHeight || 0,
            body?.offsetHeight || 0,
            html?.offsetHeight || 0
          );
          if (h > 0 && iframe.style.height !== h + "px") iframe.style.height = h + "px";
        } catch (e) {
          /* cross-origin or not ready - leave the fallback height in place */
        }
      });
    };

    const onLoad = () => {
      syncHeight();
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && "ResizeObserver" in window) {
          observer = new ResizeObserver(syncHeight);
          if (doc.documentElement) observer.observe(doc.documentElement);
          if (doc.body) observer.observe(doc.body);
        }
      } catch (e) {
        /* ignore - keep fallback height */
      }
    };

    iframe.addEventListener("load", onLoad);
    // Handle the already-loaded (cached) case.
    try {
      if (iframe.contentDocument?.readyState === "complete") onLoad();
    } catch (e) { /* ignore */ }
    window.addEventListener("resize", syncHeight);

    return () => {
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("resize", syncHeight);
      if (observer) observer.disconnect();
    };
  }, [r.prototypeUrl]);

  return (
    <article data-testid={`${r.slug}-case-study`} className="pb-24">
      <Seo title={r.title} description={r.subtitle} />
      <CaseStudyNav />
      {/* ============ TITLE BLOCK ============ */}
      <header className="px-6 md:px-10 lg:px-16 pt-12 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <Link
            to="/projects"
            data-testid="back-link"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-[#F5379B] transition-colors"
          >
            <ArrowLeft size={14} /> all projects
          </Link>
        </div>

        <Reveal as="p" delay={0} className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] mb-5" style={gradText}>
          <Sparkles size={13} /> {r.kind}
        </Reveal>

        <Reveal as="h1" delay={0.08} className="font-display text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] case-keep">
          {wordmark}
        </Reveal>

        <Reveal as="p" delay={0.16} className="mt-8 max-w-5xl text-xl md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
          {r.subtitle}
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-5xl">
          {r.hero.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.24 + i * 0.06} className="dark-card rounded-2xl p-5 md:p-6">
              <div className="num text-3xl md:text-5xl font-black text-[#075EFD] leading-none">{s.value}</div>
              <div className="mt-3 text-sm md:text-xs font-mono uppercase tracking-widest text-white">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </header>

      {/* ============ 00 OVERVIEW ============ */}
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="00" name="Overview" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.overview.headline}</Reveal>

        <Reveal delay={0.06} className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: AI_GRAD }} />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">{r.overview.tldrTitle}</p>
          <p className="relative font-display text-xl md:text-2xl leading-snug text-white/95 max-w-6xl">{r.overview.tldr}</p>
          <p className="relative mt-6 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/70">
            <Sparkles size={13} /> {r.overview.badge}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {r.overview.facts.map((f, i) => (
            <Reveal key={f.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{f.label}</p>
              <p className="font-display text-base md:text-lg font-bold">{f.value}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-8">process</Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {r.overview.process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-6">
              <div className="num text-4xl md:text-5xl font-black text-[#075EFD]">{p.step}</div>
              <div className="mt-3 font-display text-lg font-bold ">{p.title}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-white">{p.duration}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08} className="mt-16 space-y-5 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
          <p>{r.overview.intro}</p>
          <p>{r.overview.intro2}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {r.overview.metadata.map((m, i) => (
            <Reveal key={m.k} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{m.k}</p>
              <p className="font-display text-sm md:text-base font-bold leading-snug">{m.v}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06} className="mt-8 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">{r.overview.contextTitle}</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug text-black">{r.overview.contextBody}</p>
        </Reveal>

        {r.primaryUsers && (
          <>
            <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">Primary Users</Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {r.primaryUsers.map((u, i) => (
                <Reveal key={u.label} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-6 border-l-4 border-[#075EFD]">
                  <h3 className="font-display text-lg font-black mb-2">{u.label}</h3>
                  <p className="text-sm leading-relaxed text-[#F4F3FA]/85">{u.desc}</p>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </SectionWrap>

      {/* ============ 01 PERSONAS ============ */}
      <SectionWrap data-testid="section-personas">
        <SectionLabel num="01" name="The People" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.personasSection.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{r.personasSection.intro}</Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {r.personasSection.personas.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#075EFD] text-white flex items-center justify-center font-display font-black text-lg">{p.initials}</div>
                <div>
                  <h3 className="font-display text-lg font-black">{p.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-white">{p.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#F4F3FA]/90 mb-4">{p.context}</p>

              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">goals</p>
              <ul className="space-y-1.5 mb-4">
                {p.goals.map((g) => (<li key={g} className="text-sm flex gap-2"><Check size={14} className="flex-shrink-0 mt-1 text-[#F5379B]" />{g}</li>))}
              </ul>

              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2">frustrations</p>
              <ul className="space-y-1.5 mb-4">
                {p.frustrations.map((f) => (<li key={f} className="text-sm flex gap-2"><X size={14} className="flex-shrink-0 mt-1 text-[#075EFD]" />{f}</li>))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">jobs to be done</p>
                <p className="text-sm italic leading-snug mb-3">&ldquo;{p.jtbd}&rdquo;</p>
                <p className="text-sm font-mono uppercase tracking-widest text-white">{p.tools}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {r.personasSection.quoteWall && (
          <>
            <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">in their words</Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {r.personasSection.quoteWall.map((q, i) => (
                <Reveal key={q.q} as="blockquote" delay={(i % 2) * 0.06} className="rounded-3xl dark-card text-white p-6 flex flex-col">
                  <Quote size={18} className="text-white mb-3" />
                  <p className="font-display text-lg leading-snug mb-3">&ldquo;{q.q}&rdquo;</p>
                  <footer className="mt-auto text-[10px] font-mono uppercase tracking-widest text-white/50">{q.a}</footer>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </SectionWrap>

      {/* ============ 02 RESEARCH 1 ============ */}
      <SectionWrap data-testid="section-research-1">
        <SectionLabel num="02" name="The Workflow" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.research1.headline}</Reveal>

        <Reveal as="h3" className="mt-10 font-display text-2xl md:text-3xl font-black mb-4">{r.research1.methodTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-6">{r.research1.methodIntro}</Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {r.research1.method.map((m, i) => (
            <Reveal key={m.l} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{m.l}</p>
              <p className="font-display text-sm md:text-base font-bold">{m.v}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.research1.timelineTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.research1.timelineIntro}</Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card p-6 md:p-8">
          <div className="relative pl-6 md:pl-8">
            <span className="absolute left-1 md:left-2 top-2 bottom-2 w-px bg-black/15" />
            <ul className="space-y-5">
              {r.research1.timeline.map((t) => (
                <li key={t.time} className="relative">
                  <span className="absolute -left-[1.35rem] md:-left-[1.65rem] top-1.5 h-3 w-3 rounded-full" style={{ background: t.pain ? "#F2603F" : "#075EFD" }} />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs font-bold text-[#A29CB4] w-16">{t.time}</span>
                    <span className="font-display text-base font-black ">{t.label}</span>
                    {t.pain && <span className="text-[9px] font-mono uppercase tracking-widest text-[#F5379B] px-2 py-0.5 rounded-full bg-[#075EFD]/10">pain point</span>}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#F4F3FA]/85 md:pl-[4.75rem]">{t.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.research1.affinityTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.research1.affinityIntro}</Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {r.research1.affinityThemes.map((t, i) => (
            <Reveal key={t.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7 border-l-4 border-[#075EFD]">
              <h3 className="font-display text-xl font-black mb-2">{t.t}</h3>
              <p className="text-base leading-relaxed">{t.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">{r.research1.insightsTitle}</Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {r.research1.insights.map((i, idx) => (
            <Reveal key={i.t} delay={(idx % 2) * 0.06} className="dark-card rounded-3xl p-7 flex flex-col">
              <div className="font-display text-5xl font-black text-[#075EFD] leading-none mb-3">0{idx + 1}</div>
              <h3 className="font-display text-lg font-black mb-2">{i.t}</h3>
              <p className="text-sm leading-relaxed mb-4">{i.d}</p>
              <p className="mt-auto text-xs font-mono uppercase tracking-widest text-[#F5379B]">{i.link}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06} className="mt-12 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">★ key insight</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-6xl text-black">{r.research1.keyInsight}</p>
        </Reveal>
      </SectionWrap>

      {/* ============ 03 RESEARCH 2 ============ */}
      <SectionWrap data-testid="section-research-2">
        <SectionLabel num="03" name="The Broken Stack" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.research2.headline}</Reveal>

        <Reveal as="h3" className="mt-10 font-display text-2xl md:text-3xl font-black mb-4">{r.research2.ecoTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.research2.ecoIntro}</Reveal>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {r.research2.ecosystem.map((e, i) => (
              <Reveal key={e.name} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5 text-center">
                <div className="font-display text-base font-black">{e.name}</div>
                <div className="mt-2 text-xs text-[#A29CB4] leading-snug">{e.role}</div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.06} className="mt-6 rounded-3xl bg-white border-2 border-[#F5379B] p-7 text-center">
            <p className="font-display text-lg md:text-xl font-bold leading-snug max-w-5xl mx-auto text-black">{r.research2.ecoGap}</p>
          </Reveal>
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.research2.heuristicTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-6">{r.research2.heuristicIntro}</Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card divide-y divide-black/10">
          {r.research2.heuristics.map((h) => (
            <div key={h.t} className="p-5 md:p-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-4 font-display font-bold text-base ">{h.t}</div>
              <div className="col-span-9 md:col-span-6 text-sm text-[#F4F3FA]/80">{h.d}</div>
              <div className="col-span-3 md:col-span-2 text-right font-display font-black text-2xl text-[#075EFD]">{h.s}</div>
            </div>
          ))}
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.research2.teardownTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-6">{r.research2.teardownIntro}</Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {r.research2.competitiveTable.headers.map((h, i) => (
                  <th key={i} className={`p-4 font-mono uppercase text-[10px] tracking-widest ${i === 0 ? "text-left" : "text-center"} ${i === 1 ? "text-[#F5379B]" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {r.research2.competitiveTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? "font-medium" : `text-center font-display font-bold ${scoreColor(cell)}`} ${j === 1 && cell !== row[0] ? "bg-[#F5379B]/40" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">{r.research2.gapTitle}</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{r.research2.gap}</p>
        </Reveal>
      </SectionWrap>

      {/* ============ 04 HYPOTHESIS ============ */}
      <SectionWrap data-testid="section-hypothesis">
        <SectionLabel num="04" name="The Hypothesis" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.hypothesis.headline}</Reveal>

        <Reveal delay={0.06} className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10 mb-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">{r.hypothesis.positioningTitle}</p>
          <p className="font-display text-xl md:text-2xl font-bold leading-snug max-w-6xl text-black">{r.hypothesis.positioning}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Reveal delay={0} className="dark-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F5379B]" />
              <p className="font-mono text-xs uppercase tracking-widest">what it is</p>
            </div>
            <ul className="space-y-3">
              {r.hypothesis.isItList.map((s) => (<li key={s} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} />{s}</li>))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#075EFD]" />
              <p className="font-mono text-xs uppercase tracking-widest">what it's not</p>
            </div>
            <ul className="space-y-3">
              {r.hypothesis.isNotList.map((s) => (<li key={s} className="flex items-start gap-3 text-base"><X className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} />{s}</li>))}
            </ul>
          </Reveal>
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.hypothesis.modelTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.hypothesis.modelIntro}</Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card p-7 md:p-9">
          <div className="flex flex-wrap items-stretch justify-center gap-3 md:gap-4">
            {r.hypothesis.modelNodes.map((n, idx) => (
              <div key={n.t} className="flex items-center gap-3 md:gap-4">
                <div className={`rounded-2xl p-5 w-40 md:w-44 ${idx === 0 ? "text-white" : "bg-white/5 text-white"}`} style={idx === 0 ? { background: AI_GRAD } : {}}>
                  <div className="font-display text-base font-black ">{n.t}</div>
                  <div className="mt-1.5 text-xs leading-snug text-white/80">{n.d}</div>
                </div>
                {idx < r.hypothesis.modelNodes.length - 1 && (<span className="hidden md:inline text-white/30 font-display text-xl">&rarr;</span>)}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.hypothesis.principlesTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.hypothesis.principlesIntro}</Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {r.hypothesis.principles.map((p, idx) => (
            <Reveal key={p.t} delay={(idx % 2) * 0.06} className={`rounded-3xl p-7 ${idx % 2 === 0 ? "dark-card" : "bg-white border-2 border-[#F5379B]"}`}>
              <div className="font-mono text-sm uppercase tracking-widest text-white">principle 0{idx + 1}</div>
              <h3 className={`mt-2 font-display text-xl font-black ${idx % 2 === 0 ? "" : "text-[#F5379B]"}`}>{p.t}</h3>
              <p className={`mt-2 text-base leading-relaxed ${idx % 2 === 0 ? "" : "text-black"}`}>{p.d}</p>
              <p className={`mt-4 text-xs font-mono uppercase tracking-widest ${idx % 2 === 0 ? "text-[#F5379B]" : "text-[#C71E73]"}`}>{p.from}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* ============ 05 IA ============ */}
      <SectionWrap data-testid="section-ia">
        <SectionLabel num="05" name="How It Thinks" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.ia.headline}</Reveal>

        <Reveal as="h3" className="mt-10 font-display text-2xl md:text-3xl font-black mb-4">{r.ia.taskTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.ia.taskIntro}</Reveal>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {r.ia.lifecycle.map((t, idx) => (
            <Reveal key={t.t} delay={(idx % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#F5379B] mb-2">step {idx + 1}</div>
              <div className="font-display text-sm font-black ">{t.t}</div>
              <div className="mt-1.5 text-xs leading-snug text-[#F4F3FA]/80">{t.d}</div>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.ia.cardSortTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-6">{r.ia.cardSortIntro}</Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {r.ia.cardSort.map((c, i) => (
            <Reveal key={c.l} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{c.l}</p>
              <p className="font-display text-sm md:text-base font-bold">{c.v}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">{r.ia.iaDecisionsTitle}</Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {r.ia.iaDecisions.map((d, idx) => (
            <Reveal key={d.t} delay={(idx % 2) * 0.06} className="dark-card rounded-3xl p-7 flex flex-col">
              <div className="font-display text-4xl font-black text-[#075EFD] leading-none mb-3">0{idx + 1}</div>
              <h3 className="font-display text-lg font-black mb-2">{d.t}</h3>
              <p className="text-sm leading-relaxed mb-3"><span className="font-semibold">Chose: </span>{d.chose}</p>
              <p className="mt-auto text-xs leading-relaxed text-[#F4F3FA]/70 italic">{d.alt}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* ============ 06 BUILDING IT ============ */}
      <SectionWrap data-testid="section-design">
        <SectionLabel num="06" name="Building It" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.design.headline}</Reveal>

        <Reveal as="h3" className="mt-10 font-display text-2xl md:text-3xl font-black mb-4">low-fidelity wireframes</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.design.wireframesIntro}</Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {r.design.wireframes.map((w, i) => (
            <Reveal key={w.title} as="figure" delay={(i % 2) * 0.06} className="rounded-3xl dark-card overflow-hidden">
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

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.design.flowsTitle}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.design.flowsIntro}</Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {r.design.flows.map((f, idx) => (
            <Reveal key={f.t} delay={(idx % 2) * 0.06} className="dark-card text-white rounded-3xl p-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white mb-3">flow 0{idx + 1}</div>
              <h3 className="font-display text-lg font-black mb-3" style={gradText}>{f.t}</h3>
              <p className="text-sm leading-relaxed text-white/85">{f.d}</p>
            </Reveal>
          ))}
        </div>

        {r.prototypeUrl && (
          <>
            <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">the live prototype</Reveal>
            <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-6">{r.design.finalIntro}</Reveal>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <a href={r.prototypeUrl} target="_blank" rel="noreferrer" data-testid="open-fullscreen"
                 className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark-card text-white font-semibold text-sm hover:bg-[#241B33] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>
                View Prototype In Browser <Maximize2 size={14} />
              </a>
              <span className="text-xs font-mono uppercase tracking-widest text-white">click anything. it answers from your sources, cites every claim, and flags what's stale</span>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#2C2542] bg-[#DDE3EC] shadow-[0_30px_70px_rgba(20,30,60,0.18)]">
              <iframe
                ref={iframeRef}
                src={r.prototypeUrl}
                title={`${r.title} interactive prototype`}
                data-testid={`${r.slug}-iframe`}
                className="w-full block"
                style={{ height: "720px", border: "0" }}
                scrolling="no"
              />
            </div>
          </>
        )}

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">{r.prototypeUrl ? "key screens" : "hi-fidelity design"}</Reveal>
        {!r.prototypeUrl && (
          <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">{r.design.finalIntro}</Reveal>
        )}
        <div className="space-y-6">
          {r.design.finalScreens.map((s, i) => (
            <Reveal key={s.title} as="figure" delay={i * 0.05} className="rounded-3xl dark-card overflow-hidden">
              <Zoomable src={s.src} alt={s.title} caption={s.desc} className="bg-white p-4 md:p-6 border-b border-white/5">
                <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto rounded-lg" />
              </Zoomable>
              <figcaption className="p-6 md:flex md:items-baseline md:gap-6">
                <div className="md:w-56 md:flex-shrink-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B]">{s.tag}</span>
                  <h3 className="mt-2 font-display text-xl font-black ">{s.title}</h3>
                </div>
                <p className="mt-2 md:mt-0 text-sm md:text-base leading-relaxed text-[#F4F3FA]/85">{s.desc}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* ============ 07 THE AI LAYER ============ */}
      <SectionWrap data-testid="section-ai-layer">
        <SectionLabel num="07" name="The AI Layer" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.aiLayer.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{r.aiLayer.intro}</Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {r.aiLayer.patterns.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.06} className={`rounded-3xl p-7 ${p.featured ? "text-white" : "dark-card"}`} style={p.featured ? { background: AI_GRAD } : {}}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-mono text-xs font-bold px-2 py-1 rounded-full ${p.featured ? "bg-white/20 text-white" : "dark-card text-white"}`}>{p.id}</span>
                {p.featured && <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-white/90"><Sparkles size={12} /> centrepiece</span>}
              </div>
              <h3 className={`font-display text-xl font-black mb-2 ${p.featured ? "text-white" : ""}`}>{p.t}</h3>
              <p className={`text-base leading-relaxed ${p.featured ? "text-white/90" : ""}`}>{p.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">{r.aiLayer.decisionsTitle}</Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {r.aiLayer.decisions.map((d, i) => (
            <Reveal key={d.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <h3 className="font-display text-lg font-black mb-2">{d.t}</h3>
              <p className="text-sm leading-relaxed">{d.d}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      {/* ============ 08 DESIGN SYSTEM ============ */}
      <SectionWrap data-testid="section-design-system">
        <SectionLabel num="08" name="Design System" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.designSystem.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA]">{r.designSystem.intro}</Reveal>

        <Reveal delay={0.06} className="mt-10 rounded-3xl overflow-hidden">
          <div className="h-28 md:h-36 flex items-center justify-center" style={{ background: r.designSystem.aiGradient }}>
            <span className="font-display text-2xl md:text-3xl font-black text-white flex items-center gap-3"><Sparkles size={26} /> the AI gradient. reserved for AI only</span>
          </div>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">color foundations</Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {r.designSystem.colors.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.06} className="dark-card rounded-2xl overflow-hidden">
              <div className="aspect-[3/2]" style={{ background: c.hex }} />
              <div className="p-4">
                <div className="font-display text-sm font-bold">{c.name}</div>
                <div className="font-mono text-xs text-[#A29CB4] mt-1">{c.hex}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">typography scale</Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card divide-y divide-black/10">
          {r.designSystem.typography.map((t) => (
            <div key={t.t} className="p-5 flex items-center justify-between gap-4">
              <span className="font-display text-base font-bold">{t.t}</span>
              <span className="font-mono text-sm text-[#A29CB4]">{t.v}</span>
            </div>
          ))}
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">spacing scale (8pt grid)</Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {r.designSystem.spacing.map((s, i) => (
            <Reveal key={s.t} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F5379B]">{s.t}</div>
              <div className="mt-2 num text-lg font-bold">{s.v}</div>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">design tokens</Reveal>
        <Reveal delay={0.06} className="rounded-3xl dark-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/10">
              <th className="p-4 text-left font-mono uppercase text-[10px] tracking-widest">Token</th>
              <th className="p-4 text-left font-mono uppercase text-[10px] tracking-widest">Value</th>
            </tr></thead>
            <tbody>
              {r.designSystem.tokens.map(([k, v]) => (
                <tr key={k} className="border-b border-white/5">
                  <td className="p-4 font-mono text-[#F4F3FA]">{k}</td>
                  <td className="p-4 font-mono text-[#A29CB4]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-4">component library</Reveal>
        <Reveal as="p" delay={0.08} className="text-base leading-relaxed max-w-6xl text-[#F4F3FA] mb-8">A complete component set, extended with the AI-specific pieces that make the product trustworthy. These are the patterns that carry the confidence-and-provenance language across the OS family.</Reveal>
        <div className="flex flex-wrap gap-2">
          {r.designSystem.componentCategories.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full dark-card text-sm font-medium hover:bg-[#D81F7E] transition-colors cursor-default">{c}</span>
          ))}
        </div>

        <Reveal delay={0.06} className="mt-12 rounded-3xl dark-card text-white p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-3">system outcomes</p>
          <p className="font-display text-xl md:text-2xl leading-snug max-w-6xl">{r.designSystem.systemOutcomes}</p>
        </Reveal>
        <Reveal delay={0.06} className="mt-6 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 text-[#C71E73]">a shared OS-family base</p>
          <p className="font-display text-lg md:text-xl font-bold leading-snug max-w-6xl text-black">{r.designSystem.crossProduct}</p>
        </Reveal>
      </SectionWrap>

      {/* ============ 09 VALIDATION ============ */}
      <SectionWrap data-testid="section-validation">
        {r.whereItStands ? (
          <>
            <SectionLabel num="09" name="Where It Stands" />
            <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.whereItStands.headline}</Reveal>
            <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{r.whereItStands.intro}</Reveal>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-6">{r.whereItStands.doneTitle}</Reveal>
            <Reveal delay={0.06} className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10 mb-12">
              <ul className="space-y-3">
                {r.whereItStands.done.map((x) => (<li key={x} className="flex items-start gap-3 text-base md:text-lg text-black"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={18} /><span>{x}</span></li>))}
              </ul>
            </Reveal>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-2">{r.whereItStands.targetsTitle}</Reveal>
            <Reveal as="p" delay={0.08} className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-6">{r.whereItStands.targetsNote}</Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {r.whereItStands.targets.map((t, i) => (
                <Reveal key={t.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
                  <h3 className="font-display text-lg font-black mb-2">{t.t}</h3>
                  <p className="text-sm leading-relaxed">{t.d}</p>
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <>
            <SectionLabel num="09" name="Does It Work?" />
            <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6">{r.validation.headline}</Reveal>
            <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{r.validation.intro}</Reveal>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-6">test setup</Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {r.validation.testSetup.map((s, i) => (
                <Reveal key={s.l} delay={(i % 2) * 0.06} className="dark-card rounded-2xl p-5">
                  <p className="text-sm font-mono uppercase tracking-widest text-white mb-2">{s.l}</p>
                  <p className="num text-base font-bold">{s.v}</p>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="mt-12 font-display text-2xl md:text-3xl font-black mb-6">key results</Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {r.validation.keyResults.map((res, i) => (
                <Reveal key={res.l} delay={(i % 2) * 0.06} className="rounded-3xl dark-card p-6">
                  <div className="font-display text-4xl md:text-5xl font-black text-[#075EFD] leading-none">{res.v}</div>
                  <div className="mt-3 font-display text-base font-bold ">{res.l}</div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#F5379B]">{res.s}</div>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="mt-16 font-display text-2xl md:text-3xl font-black mb-6">{r.validation.findingsTitle}</Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {r.validation.findings.map((f, i) => (
                <Reveal key={f.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7 flex flex-col">
                  <h3 className="font-display text-lg font-black mb-2">{f.t}</h3>
                  <p className="text-sm leading-relaxed mb-4">{f.d}</p>
                  <p className="mt-auto text-xs font-mono uppercase tracking-widest text-[#F5379B]">{f.fix}</p>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </SectionWrap>

      {/* ============ 10 IMPACT ============ */}
      <SectionWrap data-testid="section-impact">
        {r.futureVision ? (
          <>
            <SectionLabel num="10" name="Future Vision" />
            <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-4">{r.futureVision.headline}</Reveal>
            <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-6xl text-[#F4F3FA] mb-10">{r.futureVision.intro}</Reveal>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-6">{r.futureVision.phasesTitle}</Reveal>
            <div className="space-y-5 mb-12">
              {r.futureVision.phases.map((ph, i) => (
                <Reveal key={ph.phase} delay={i * 0.05} className="dark-card rounded-3xl p-7">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B]">{ph.phase}</span>
                    <h3 className="font-display text-xl font-black ">{ph.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {ph.items.map((it) => (<li key={it} className="flex items-start gap-3 text-sm md:text-base"><span className="text-[#075EFD] font-bold mt-0.5">&rarr;</span><span>{it}</span></li>))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.06} className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">{r.futureVision.closingTitle}</p>
              <p className="font-display text-lg md:text-xl font-bold leading-snug text-black">{r.futureVision.closing}</p>
            </Reveal>
          </>
        ) : (
          <>
            <SectionLabel num="10" name="The Numbers" />
            <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-4">{r.impact.headline}</Reveal>
            <Reveal as="p" delay={0.08} className="text-sm font-mono uppercase tracking-widest text-white max-w-6xl mb-10">{r.impact.note}</Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {r.impact.outcomes.map((m, i) => (
                <Reveal key={m.l} delay={(i % 2) * 0.06} className="rounded-3xl dark-card p-6">
                  <div className="font-display text-3xl md:text-4xl font-black text-[#075EFD] leading-none">{m.v}</div>
                  <div className="mt-3 font-display text-base font-bold ">{m.l}</div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-widest text-white">{m.s}</div>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-6">{r.impact.provesTitle}</Reveal>
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {r.impact.proves.map((p, i) => (
                <Reveal key={p.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
                  <h3 className="font-display text-lg font-black mb-2">{p.t}</h3>
                  <p className="text-sm leading-relaxed">{p.d}</p>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-6">artifacts created</Reveal>
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {r.impact.artifacts.map((a, i) => (
                <Reveal key={a.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
                  <h3 className="font-display text-lg font-black mb-2">{a.t}</h3>
                  <p className="text-sm leading-relaxed">{a.d}</p>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-6">where it goes next</Reveal>
            <Reveal delay={0.06} className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10 mb-16">
              <ul className="space-y-3">
                {r.impact.next.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-base md:text-lg text-black"><span className="text-[#075EFD] font-bold mt-1">&rarr;</span>{p}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="h3" className="font-display text-2xl md:text-3xl font-black mb-8">key learnings & reflection</Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              <Reveal delay={0} className="dark-card rounded-3xl p-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what went well</p>
                <ul className="space-y-3">
                  {r.impact.wentWell.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#F5379B]" size={16} /><span>{x}</span></li>))}
                </ul>
              </Reveal>
              <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what I&apos;d do differently</p>
                <ul className="space-y-3">
                  {r.impact.differently.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Star className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} /><span>{x}</span></li>))}
                </ul>
              </Reveal>
            </div>
          </>
        )}
      </SectionWrap>

      {/* ============ MORE CONCEPTS (only when there are other live concepts) ============ */}
      {concepts.filter((x) => x.slug !== r.slug && x.live !== false).length > 0 && (
      <SectionWrap>
        <Reveal as="p" className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">more concepts</Reveal>
        <Reveal as="h2" delay={0.08} className="font-display text-3xl md:text-4xl font-black mb-8">the rest of the OS family &rarr;</Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.filter((x) => x.slug !== r.slug && x.live !== false).map((x, i) => {
            const card = (
              <div className="rounded-3xl dark-card p-7 flex items-start justify-between gap-6 h-full">
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display text-2xl font-black">{x.title}</h3>
                    <span className="text-sm font-mono uppercase tracking-widest text-white">{x.status}</span>
                  </div>
                  <p className="text-sm text-[#A29CB4]">{x.subtitle}</p>
                </div>
                <span className="mt-1 h-3 w-3 rounded-full flex-shrink-0" style={{ background: x.accent }} aria-hidden />
              </div>
            );
            return x.live && x.href ? (
              <Reveal key={x.slug} delay={(i % 2) * 0.06}>
                <Link to={x.href} className={`block hover:-translate-y-0.5 transition-transform ${FOCUS}`}>{card}</Link>
              </Reveal>
            ) : (
              <Reveal key={x.slug} delay={(i % 2) * 0.06}>{card}</Reveal>
            );
          })}
        </div>
      </SectionWrap>
      )}

      {/* ============ FOOTER ============ */}
      <SectionWrap className="text-center">
        <Reveal as="h2" className="font-display text-3xl md:text-5xl font-black mb-6">thank you for reading.</Reveal>
        <Reveal as="p" delay={0.08} className="text-lg text-[#A29CB4] mb-8">{r.title} is a self-initiated concept. If you&apos;d like to talk through the process, or where it goes next, I&apos;d love to connect.</Reveal>
        <div className="flex gap-4 justify-center flex-wrap items-center">
          <ProjectNav slug={r.slug} variant="footer" which="prev" />
          <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}><Mail size={16} /> email me</a>
          <Link to="/projects" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>view all projects</Link>
          <ProjectNav slug={r.slug} variant="footer" which="next" />
        </div>
      </SectionWrap>
    </article>
  );
}
