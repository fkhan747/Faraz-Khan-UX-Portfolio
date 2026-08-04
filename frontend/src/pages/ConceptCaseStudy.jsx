import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Check, X, Sparkles, Maximize2 } from "lucide-react";
import { concepts, PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Zoomable from "../components/Zoomable";
import ProjectNav from "../components/ProjectNav";
import Reveal from "../components/Reveal";
import CaseTopBar from "../components/CaseTopBar";
import OwnedCard from "../components/OwnedCard";

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71E73] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFEDE7]";

/**
 * Shared renderer for the AI-native concept case studies (Slate, Crux, and any
 * future ones). These are self-initiated CONCEPTS, so the format is deliberately
 * SHORT: a hero plus five compact sections. Depth is kept out on purpose. The
 * intent is to show the idea and the working prototype, stay honest that it is a
 * concept still in progress, and not over-claim.
 *
 * Props:
 *   data   - the case object (slate / crux / ...), same shape family
 *   accent - the product's AI gradient (CSS string), e.g. "linear-gradient(...)"
 *   wordmark - JSX for the title
 */

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C71E73]">
      {num} · {name}
    </span>
    <span className="flex-1 h-px bg-black/15" />
  </div>
);

const SectionWrap = ({ children, className = "", ...rest }) => (
  <section className={`py-16 md:py-20 border-t border-black/10 ${className}`} {...rest}>
    <div className="mx-auto w-full max-w-screen-2xl px-6 md:px-10 lg:px-16">
      {children}
    </div>
  </section>
);

export default function ConceptCaseStudy({ data: r, accent, barAccent = "#C71E73", wordmark }) {
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
      window.requestAnimationFrame(() => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (!doc) return;
          const body = doc.body, html = doc.documentElement;
          const h = Math.max(
            body?.scrollHeight || 0,
            body?.offsetHeight || 0,
            html?.offsetHeight || 0
          );
          if (h > 0 && iframe.style.height !== h + "px") iframe.style.height = h + "px";
        } catch (e) { /* cross-origin or not ready */ }
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
      } catch (e) { /* ignore */ }
    };

    iframe.addEventListener("load", onLoad);
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

  const hyp = r.hypothesis || {};
  const design = r.design || {};
  const ai = r.aiLayer || {};
  const stands = r.whereItStands || {};

  return (
    /* Paper ground and the deck masthead, so a concept sits in the same world
       as the four client case studies. Content and structure are untouched:
       this pass was palette and chrome only. */
    <article data-testid={`${r.slug}-case-study`} className="concept-light pb-24 bg-[#EFEDE7] text-[#171512]">
      <Seo title={r.title} description={r.subtitle} />
      {/* `.dark-card` is a global used by exhibit components across the site, so
          it is overridden here rather than changed globally: on paper it has to
          be a white card, and its grain pseudo-elements have to stop painting
          a dark wash over it. */}
      <style>{`
        .concept-light .dark-card{ background:#fff; border:1px solid #DCD7CC;
          box-shadow:0 1px 2px rgba(23,21,18,.04); }
        .concept-light .dark-card::before,
        .concept-light .dark-card::after{ display:none; }
        .concept-light iframe{ background:#fff; border-radius:12px; }
        /* OwnedCard is shared with the dark pages, so it is re-grounded here
           rather than rewritten. Its own near-black fill and light text would
           otherwise sit as a dark slab in the middle of the paper. */
        .concept-light .owned-card{ background:#fff !important; border:1px solid #DCD7CC;
          color:#171512 !important; }
        .concept-light .owned-card *{ color:#171512 !important; }
        .concept-light .owned-card .owned-card-label{ color:#C71E73 !important; }
        .concept-light .owned-card [class*="bg-white/"]{ background:#F4F2EC !important;
          border:1px solid #DCD7CC; }
        /* Prev/next footer, also shared with the dark pages. */
        .concept-light .pnav-pill,
        .concept-light .pnav-chip{ background:#fff !important; border-color:#DCD7CC !important;
          color:#171512 !important; }
        .concept-light .pnav-pill:hover,
        .concept-light .pnav-chip:hover{ border-color:#B9B2A5 !important; }
        .concept-light .pnav-pill span,
        .concept-light .pnav-chip span{ color:#6B665D !important; }
        .concept-light .pnav-pill span:last-child,
        .concept-light .pnav-chip span span:last-child{ color:#171512 !important; }
        .concept-light .pnav-pill svg,
        .concept-light .pnav-chip svg{ color:#6B665D !important; }
      `}</style>

      {/* Same sticky masthead the deck case studies use. `overflow-x: clip`
          rather than hidden on the wrapper above, or this would stick to that
          box instead of the viewport. */}
      <CaseTopBar accent={barAccent} />

      {/* ============ TITLE BLOCK ============ */}
      <header className="mx-auto w-full max-w-screen-2xl px-6 md:px-10 lg:px-16 pt-12 pb-8">

        <Reveal as="p" delay={0} className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] mb-5" style={gradText}>
          <Sparkles size={13} /> {r.kind}
        </Reveal>

        <Reveal as="h1" delay={0.08} className="font-display text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] case-keep">
          {wordmark}
        </Reveal>

        <Reveal as="p" delay={0.16} className="mt-8 max-w-5xl text-xl md:text-2xl text-[#171512] leading-snug font-light italic">
          {r.subtitle}
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-4 max-w-5xl">
          {r.hero.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.28 + i * 0.06} className="dark-card rounded-2xl p-5 md:p-6">
              <div className="num text-3xl md:text-5xl font-black text-[#075EFD] leading-none">{s.value}</div>
              <div className="mt-3 text-sm md:text-xs font-mono uppercase tracking-widest text-[#171512]">{s.label}</div>
            </Reveal>
          ))}
        </div>
        {r.hero.statsNote && (
          <Reveal as="p" delay={0.46} className="mt-3 max-w-5xl text-[11px] font-mono uppercase tracking-widest text-[#6B665D]">
            {r.hero.statsNote}
          </Reveal>
        )}

        <OwnedCard items={["Product concept", "Information architecture", "UI design", "Design system", "AI interaction patterns", "Prototyping"]} />
      </header>

      {/* ============ 01 OVERVIEW ============ */}
      {r.overview && (
      <SectionWrap data-testid="section-overview">
        <SectionLabel num="01" name="Overview" />
        {r.overview.badge && (
          <Reveal as="p" className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-[#C71E73] border border-[#C71E73]/40 rounded-full px-3 py-1 mb-6">{r.overview.badge}</Reveal>
        )}
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-6">{r.overview.headline}</Reveal>
        <Reveal as="p" delay={0.08} className="text-lg md:text-xl leading-relaxed max-w-4xl text-[#171512]">{r.overview.tldr}</Reveal>
      </SectionWrap>
      )}

      {/* ============ 02 THE CONCEPT ============ */}
      {(hyp.positioning || hyp.isItList) && (
      <SectionWrap data-testid="section-concept">
        <SectionLabel num="02" name="The Concept" />
        {hyp.positioning && (
          <Reveal as="p" className="text-lg md:text-xl leading-relaxed max-w-5xl text-[#171512] mb-10">{hyp.positioning}</Reveal>
        )}
        {(hyp.isItList || hyp.isNotList) && (
          <div className="grid md:grid-cols-2 gap-5">
            {hyp.isItList && (
              <Reveal className="dark-card rounded-3xl p-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-4">what it is</p>
                <ul className="space-y-3">
                  {hyp.isItList.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><Check className="flex-shrink-0 mt-1 text-[#C71E73]" size={16} /><span>{x}</span></li>))}
                </ul>
              </Reveal>
            )}
            {hyp.isNotList && (
              <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-4">what it is not</p>
                <ul className="space-y-3">
                  {hyp.isNotList.map((x) => (<li key={x} className="flex items-start gap-3 text-base"><X className="flex-shrink-0 mt-1 text-[#075EFD]" size={16} /><span>{x}</span></li>))}
                </ul>
              </Reveal>
            )}
          </div>
        )}
      </SectionWrap>
      )}

      {/* ============ 03 THE PROTOTYPE ============ */}
      {(r.prototypeUrl || design.finalScreens) && (
      <SectionWrap data-testid="section-prototype">
        <SectionLabel num="03" name="The Prototype" />
        {r.prototypeUrl ? (
          <>
            {design.finalIntro && (
              <Reveal as="p" className="text-lg md:text-xl leading-relaxed max-w-5xl text-[#171512] mb-6">{design.finalIntro}</Reveal>
            )}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <a href={r.prototypeUrl} target="_blank" rel="noreferrer" data-testid="open-fullscreen"
                 className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark-card text-[#171512] font-semibold text-sm hover:bg-[#FFFFFF] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>
                View Prototype in Browser <Maximize2 size={14} />
              </a>
              <span className="text-xs font-mono uppercase tracking-widest text-[#171512]">{design.prototypeHint || "click anything. it's the real prototype, not a mock-up."}</span>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#F4F2EC] bg-[#DDE3EC] shadow-[0_30px_70px_rgba(20,30,60,0.18)]">
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
        ) : (
          design.finalIntro && (
            <Reveal as="p" className="text-lg md:text-xl leading-relaxed max-w-5xl text-[#171512] mb-6">{design.finalIntro}</Reveal>
          )
        )}

        {design.finalScreens && design.finalScreens.length > 0 && (
          <>
            <Reveal as="h3" className="mt-14 font-display text-2xl md:text-3xl font-black mb-2">a few key screens</Reveal>
            <Reveal as="p" delay={0.06} className="text-sm text-[#6B665D] mb-6">The prototype above is the real thing; these are highlights.</Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {design.finalScreens.map((s, i) => (
                <Reveal key={s.title} as="figure" delay={(i % 2) * 0.05} className="rounded-2xl dark-card overflow-hidden">
                  <Zoomable src={s.src} alt={s.title} caption={s.desc} className="bg-white p-3 border-b border-black/[0.06]">
                    <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto rounded-lg" />
                  </Zoomable>
                  <figcaption className="p-5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C71E73]">{s.tag}</span>
                    <h3 className="mt-1.5 font-display text-base font-black">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#171512]/80">{s.desc}</p>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </SectionWrap>
      )}

      {/* ============ 04 THE AI APPROACH ============ */}
      {ai.patterns && ai.patterns.length > 0 && (
      <SectionWrap data-testid="section-ai-layer">
        <SectionLabel num="04" name="The AI Approach" />
        {ai.headline && (
          <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-6">{ai.headline}</Reveal>
        )}
        {ai.intro && (
          <Reveal as="p" delay={0.08} className="text-base md:text-lg leading-relaxed max-w-4xl text-[#171512] mb-10">{ai.intro}</Reveal>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ai.patterns.map((p, i) => (
            <Reveal key={p.id || p.t} delay={(i % 2) * 0.06} className="dark-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-2">
                {p.id && <span className="text-[10px] font-mono uppercase tracking-widest text-[#C71E73]">{p.id}</span>}
                <h3 className="font-display text-lg font-black" style={p.featured ? gradText : undefined}>{p.t}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#171512]/85">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrap>
      )}

      {/* ============ 05 WHERE IT STANDS ============ */}
      {stands.done && (
      <SectionWrap data-testid="section-where-it-stands">
        <SectionLabel num="05" name="Where It Stands" />
        <Reveal as="h2" className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-6">{stands.headline || "Where it stands."}</Reveal>
        {stands.intro && (
          <Reveal as="p" delay={0.08} className="text-lg md:text-xl leading-relaxed max-w-4xl text-[#171512] mb-10">{stands.intro}</Reveal>
        )}
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="dark-card rounded-3xl p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-4">{stands.doneTitle || "what's done"}</p>
            <ul className="space-y-3">
              {stands.done.map((x) => (<li key={x} className="flex items-start gap-3 text-sm md:text-base"><Check className="flex-shrink-0 mt-1 text-[#C71E73]" size={16} /><span>{x}</span></li>))}
            </ul>
          </Reveal>
          {stands.targets && (
            <Reveal delay={0.06} className="dark-card rounded-3xl p-7">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-4">{stands.targetsTitle || "what I'm designing toward"}</p>
              <ul className="space-y-4">
                {stands.targets.map((t) => (
                  <li key={t.t}>
                    <p className="font-display text-base font-bold text-[#171512]">{t.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#171512]/80">{t.d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
        <Reveal as="p" delay={0.1} className="mt-8 text-sm md:text-base text-[#6B665D] max-w-3xl">
          This is a self-initiated concept, and I am still building it. What is above is honest about what is proven and what is not.
        </Reveal>
      </SectionWrap>
      )}

      {/* ============ MORE CONCEPTS ============ */}
      {concepts.filter((x) => x.slug !== r.slug && x.live !== false).length > 0 && (
      <SectionWrap>
        <Reveal as="p" className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-4">more concepts</Reveal>
        <Reveal as="h2" delay={0.08} className="font-display text-3xl md:text-4xl font-black mb-8">the rest of the AI-native track &rarr;</Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.filter((x) => x.slug !== r.slug && x.live !== false).map((x, i) => {
            const card = (
              <div className="rounded-3xl dark-card p-7 flex items-start justify-between gap-6 h-full">
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display text-2xl font-black">{x.title}</h3>
                    <span className="text-sm font-mono uppercase tracking-widest text-[#171512]">{x.status}</span>
                  </div>
                  <p className="text-sm text-[#6B665D]">{x.subtitle}</p>
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
        <Reveal as="p" delay={0.08} className="text-lg text-[#6B665D] mb-8">{r.title} is a self-initiated concept I keep iterating on. If you&apos;d like to talk through the thinking, or where it goes next, I&apos;d love to connect.</Reveal>
        <div className="cs-end">
          <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className="cs-btn"><Mail size={16} /> Email Me</a>
          <Link to="/projects" className="cs-btn-ghost">All Projects</Link>
        </div>
        <div className="flex gap-4 justify-center flex-wrap items-center mt-8">
          <ProjectNav slug={r.slug} variant="footer" which="prev" />
          <ProjectNav slug={r.slug} variant="footer" which="next" />
        </div>
      </SectionWrap>
    </article>
  );
}
