import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { meridian as m } from "../data/meridianCase";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Zoomable from "../components/Zoomable";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";
import MeridianPersonas from "../components/meridian/Personas";
import MeridianIA from "../components/meridian/InfoArchitecture";
import MeridianFlow from "../components/meridian/UserFlow";
import MeridianWireframes from "../components/meridian/Wireframes";
import MeridianDesignSystem from "../components/meridian/DesignSystem";
import MeridianFiveProblems from "../components/meridian/FiveProblems";
import MeridianOutcome from "../components/meridian/Outcome";

/* Meridian Institute of Technology, university analytics dashboard case study.
   Client anonymized. Built to the FinVista/Aurora benchmark: native React on the
   shared .dark-card surface. Conceptual artifacts are native components; the light
   product (before/after dashboard pairs + the 8 full screens) sits in dark frames,
   the way FinVista frames its app screenshots. Narrative prose comes from m.body.
   Voice is owltastic-inspired (first-person, crisp); scroll motion via <Reveal>. */

const ACCENT = "#F5379B";
const EASE = [0.23, 1, 0.32, 1];
const B = "/meridian-mocks/blocks/";
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5379B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100210]";

/* light product before/after exhibit (the real dashboards), framed on the dark page */
function IframeBlock({ src, h }) {
  return (
    <div className="max-w-6xl mt-7">
      <iframe src={src} title="Before and after" loading="lazy" scrolling="no"
        className="w-full block rounded-2xl" style={{ height: h, border: 0, background: "#100210" }} />
    </div>
  );
}

/* real legacy montage, a "before" screenshot framed in a dark card (FinVista pattern) */
function LegacyMontage({ caption = "The four legacy dashboards, four offices, four visual languages, no shared layout" }) {
  const src = "/meridian/legacy/four-dashboards.png";
  return (
    <figure className="dark-card rounded-3xl overflow-hidden max-w-4xl relative">
      <span className="absolute z-10 m-4 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full text-white" style={{ background: "#8C8C8C" }}>Before</span>
      <Zoomable src={src} alt="The four legacy dashboards" caption={caption} className="bg-white p-3 block">
        <img src={src} alt="The four legacy dashboards" width={580} height={328} loading="lazy" className="w-full h-auto block rounded-lg" />
      </Zoomable>
      <figcaption className="px-5 py-3 font-mono text-sm uppercase tracking-[0.2em] text-white">{caption}</figcaption>
    </figure>
  );
}

/* real redesigned screen, an "after" screenshot framed in a dark card (same FinVista pattern
   as LegacyMontage). These are the actual client-loved dashboards, so the light screenshot
   sits inside a bg-white panel, like every product shot on the site. */
function RealScreen({ src, w, h, label, maxW = "100%", badge = "After" }) {
  return (
    <figure className="dark-card rounded-3xl overflow-hidden relative" style={{ width: "100%", maxWidth: maxW }}>
      {badge && (
        <span className="absolute z-10 m-4 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full text-white" style={{ background: "#C71E73" }}>{badge}</span>
      )}
      <Zoomable src={src} alt={label} caption={label} className="bg-white p-3 block">
        <img src={src} alt={label} width={w} height={h} loading="lazy" className="w-full h-auto block rounded-lg" />
      </Zoomable>
      {label && <figcaption className="px-5 py-3 font-mono text-sm uppercase tracking-[0.2em] text-white">{label}</figcaption>}
    </figure>
  );
}

/* the visual that belongs to a given section (native artifact, or product before/after) */
function artifactFor(headline = "") {
  const h = headline.toLowerCase();
  if (h.includes("context and primary users")) return <MeridianPersonas />;
  if (h.includes("before and after")) return <MeridianFiveProblems />;
  if (h.includes("problem")) return <LegacyMontage />;
  if (h.includes("goals, success")) return <MeridianWireframes />;
  if (h.includes("information architecture")) return (
    <>
      <MeridianIA />
      <div className="mt-12"><MeridianFlow /></div>
    </>
  );
  if (h.includes("design system")) return <MeridianDesignSystem />;
  if (h.includes("outcome")) return <MeridianOutcome />;
  if (h.includes("undergraduate and graduate")) return (
    <>
      <IframeBlock src={B + "funnel.html"} h={660} />
      <IframeBlock src={B + "school.html"} h={640} />
      <div className="mt-10">
        <ResponsiveScreen src="/meridian-mocks/real/ug-summary.html" h={1850} maxW={1040} rounded="rounded-3xl" label="The Undergraduate tab, with the international-applications map leaders loved" />
      </div>
      <div className="mt-8">
        <ResponsiveScreen src="/meridian-mocks/real/grad-summary.html" h={1850} maxW={1040} rounded="rounded-3xl" label="The Graduate tab, where stage conversion and source-country mix come first" />
      </div>
    </>
  );
  if (h.includes("research and hr")) return (
    <>
      <IframeBlock src={B + "research.html"} h={650} />
      <IframeBlock src={B + "hr.html"} h={650} />
      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        <ResponsiveScreen src="/meridian-mocks/real/research-summary.html" h={1700} label="The Research tab, money over time, output to one side" />
        <ResponsiveScreen src="/meridian-mocks/real/hr-summary.html" h={900} label="The HR tab, plain and protective" />
      </div>
    </>
  );
  if (h.includes("funnel, yield")) return <ResponsiveScreen src="/meridian-mocks/real/overview.html" h={1900} label="The Overview cockpit, with the institutional funnel" maxW={1040} rounded="rounded-3xl" />;
  if (h.includes("geo intelligence")) return <ResponsiveScreen src="/meridian-mocks/real/ug-summary.html" h={1850} label="The world-map view, sized by application volume" maxW={1040} rounded="rounded-3xl" />;
  return null;
}

/* white accent callout, used for the one key statement per section (matches FinVista/Aurora) */
function WhiteCallout({ label, children }) {
  return (
    <div className="mb-9 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">{label}</p>
      <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black">{children}</p>
    </div>
  );
}
function calloutFor(headline = "") {
  const h = headline.toLowerCase();
  if (h.includes("problem"))
    return (
      <WhiteCallout label="Core challenge">
        The data was never wrong. It just took too long to find, people spent about 90 seconds of every visit getting their bearings instead of reading. My job was to lead with the answer.
      </WhiteCallout>
    );
  return null;
}

/* full dashboard screen (1472 = 1440 + 16px padding) scaled responsively to its container,
   so it fits on phones instead of clipping. */
const TW = 1472;
function ResponsiveScreen({ src, h, label, maxW = "100%", rounded = "rounded-2xl" }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0.34);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / TW);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <figure className={`dark-card ${rounded} overflow-hidden`} style={{ width: "100%", maxWidth: maxW }}>
      <div ref={ref} style={{ width: "100%", height: Math.round(h * scale), overflow: "hidden" }}>
        <iframe src={src} title={label || "screen"} loading="lazy" scrolling="no"
          style={{ width: TW, height: h, border: 0, transform: `scale(${scale})`, transformOrigin: "top left", display: "block" }} />
      </div>
      {label && <figcaption className="px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-white">{label}</figcaption>}
    </figure>
  );
}

const SCREENS = [
  { src: "/meridian-mocks/real/ug-summary.html", label: "Undergraduate, Summary, with the world map", h: 1850 },
  { src: "/meridian-mocks/real/grad-summary.html", label: "Graduate, Summary, with melt and concentration", h: 1850 },
  { src: "/meridian-mocks/real/hr-summary.html", label: "HR, Summary, plain and protective", h: 900 },
  { src: "/meridian-mocks/real/hr-headcount.html", label: "HR, Trends Headcount, ten-year combo", h: 700 },
  { src: "/meridian-mocks/real/research-summary.html", label: "Research, Summary, money over time", h: 1700 },
  { src: "/meridian-mocks/real/research-expenditures.html", label: "Research, Expenditures, brackets and PIs", h: 2400 },
];

function inline(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i} className="text-white font-bold">{p}</strong> : p));
}

function parseBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  let para = [], bullets = [];
  const flushPara = () => { if (para.length) { blocks.push({ t: "p", v: para.join(" ") }); para = []; } };
  const flushBullets = () => { if (bullets.length) { blocks.push({ t: "ul", v: bullets }); bullets = []; } };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^>\s*\[/.test(line)) continue;
    if (/^###\s/.test(line)) { flushPara(); flushBullets(); blocks.push({ t: "h3", v: line.replace(/^###\s/, "").trim() }); continue; }
    if (/^[-*]\s/.test(line)) { flushPara(); bullets.push(line.replace(/^[-*]\s/, "").trim()); continue; }
    if (/^---+$/.test(line)) { flushPara(); flushBullets(); continue; }
    if (line.trim() === "") { flushPara(); flushBullets(); continue; }
    flushBullets(); para.push(line.trim());
  }
  flushPara(); flushBullets();
  return blocks;
}

function SectionBlock({ b }) {
  if (b.t === "h3") return <h3 className="font-display text-xl md:text-2xl font-black text-white case-keep pt-2">{b.v}</h3>;
  if (b.t === "ul")
    return (
      <ul className="space-y-3 max-w-6xl">
        {b.v.map((x, i) => (
          <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
            <span className="mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
            <span>{inline(x)}</span>
          </li>
        ))}
      </ul>
    );
  return <p className="text-base md:text-lg leading-relaxed text-[#F4F3FA] max-w-6xl">{inline(b.v)}</p>;
}

function getSections(body) {
  return body.split(/\n(?=##\s)/).map((c) => c.trim()).filter(Boolean).map((c, i) => {
    const nl = c.indexOf("\n");
    const head = c.slice(0, nl === -1 ? undefined : nl).replace(/^##\s/, "").trim();
    const rest = nl === -1 ? "" : c.slice(nl + 1);
    return { num: String(i + 1).padStart(2, "0"), name: head.split(":")[0].trim(), headline: head, blocks: parseBlocks(rest) };
  });
}

/* Section eyebrow + a divider line that draws itself in as the row scrolls into view. */
const SectionLabel = ({ num, name }) => {
  const reduce = useReducedMotion();
  return (
    <Reveal className="flex items-center gap-4 mb-6">
      <span className="font-mono text-xs uppercase tracking-[0.25em] flex-shrink-0" style={{ color: ACCENT }}>{num} · {name}</span>
      <motion.span aria-hidden="true" className="flex-1 h-px bg-white/10 origin-left"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }} />
    </Reveal>
  );
};

/* The Research section is a wall of findings with no paired artifact, so it renders
   as a numbered "finding -> decision" card grid plus a synthesis callout. Groups the
   parsed blocks: leading paragraphs become the intro, each h3 opens a finding card,
   and the closing "What the research locked in" becomes the synthesis. */
function researchGroups(blocks) {
  const intro = [];
  const findings = [];
  let cur = null;
  for (const b of blocks) {
    if (b.t === "h3") { cur = { title: b.v, body: [] }; findings.push(cur); }
    else if (cur) cur.body.push(b);
    else intro.push(b);
  }
  const synthesis = findings.length && /locked in/i.test(findings[findings.length - 1].title) ? findings.pop() : null;
  return { intro, findings, synthesis };
}

export default function MeridianCaseStudy() {
  const sections = getSections(m.body);
  return (
    <article data-testid="meridian-case-study" className="pb-24">
      <Seo title={`${m.title} · Faraz Khan`} description={m.subtitle} />
      <CaseStudyNav />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <img src="/meridian/cover.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover cover-img" loading="eager" />
        <div className="absolute inset-0" aria-hidden="true" style={{ background: "linear-gradient(105deg, rgba(16,2,16,0.95) 0%, rgba(16,2,16,0.72) 52%, rgba(16,2,16,0.5) 100%)" }} />
        <div className="absolute inset-0" aria-hidden="true" style={{ background: "linear-gradient(to bottom, rgba(16,2,16,0.55) 0%, rgba(16,2,16,0) 30%, rgba(16,2,16,0) 52%, rgba(16,2,16,0.96) 100%)" }} />
        <Container className="relative z-10 pt-12 pb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
            <Link to="/projects" data-testid="back-link" className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] rounded transition-[color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>
              <ArrowLeft size={14} /> all projects
            </Link>
          </div>
          <Reveal as="p" delay={0} className="text-[11px] font-mono uppercase tracking-[0.25em] mb-5" style={{ color: ACCENT }}>{m.hero.eyebrow}</Reveal>
          <Reveal as="h1" delay={0.08} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[#F7F5FF] max-w-6xl case-keep">{m.title}</Reveal>
          <Reveal as="p" delay={0.16} className="mt-7 max-w-3xl text-lg md:text-2xl text-[#F4F3FA] leading-snug font-light italic case-keep">{m.subtitle}</Reveal>
          {m.hero.facts && (
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
              {m.hero.facts.map((f, i) => (
                <Reveal key={f.label} delay={0.24 + i * 0.06} className="rounded-2xl p-5 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5379B] mb-2 case-keep">{f.label}</p>
                  <p className="font-display text-base md:text-lg font-bold text-[#F4F3FA] leading-snug case-keep">{f.value}</p>
                </Reveal>
              ))}
            </div>
          )}
          {m.hero.stats && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {m.hero.stats.map((s, i) => (
                <Reveal key={s.label} delay={0.32 + i * 0.06} className="rounded-2xl p-5 md:p-6 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                  <div className="num text-3xl md:text-4xl font-black text-[#075EFD] leading-none">{s.value}</div>
                  <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70 case-keep">{s.label}</div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </header>

      {/* SECTIONS + woven artifacts */}
      {sections.map((sec) => {
        const isTldr = sec.num === "01";
        const isResearch = sec.headline.toLowerCase().includes("research and domain landscape");
        const artifact = artifactFor(sec.headline);
        const rg = isResearch ? researchGroups(sec.blocks) : null;
        return (
          <section key={sec.num} data-testid={`section-${sec.num}`} className="py-20 md:py-24 border-t border-white/10">
            <Container>
              <SectionLabel num={sec.num} name={sec.name} />
              {isTldr ? (
                <Reveal>
                  <div className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" aria-hidden="true" />
                    <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-5">in one minute</p>
                    <div className="relative space-y-5">
                      {sec.blocks.map((b, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                          {b.t === "p"
                            ? <p className="font-display text-xl md:text-2xl leading-snug text-white/95">{inline(b.v)}</p>
                            : <SectionBlock b={b} />}
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ) : isResearch ? (
                <>
                  <Reveal>
                    <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-8 case-keep">{sec.headline}</h2>
                  </Reveal>
                  {rg.intro.length > 0 && (
                    <Reveal delay={0.06} className="space-y-6 mb-10 max-w-6xl">{rg.intro.map((b, i) => <SectionBlock key={i} b={b} />)}</Reveal>
                  )}
                  <div className="grid md:grid-cols-2 gap-5">
                    {rg.findings.map((f, i) => (
                      <Reveal key={f.title} delay={(i % 2) * 0.06}>
                        <div className="dark-card rounded-3xl p-7 h-full">
                          <div className="font-display text-4xl font-black text-[#075EFD] leading-none">{String(i + 1).padStart(2, "0")}</div>
                          <h3 className="mt-4 font-display text-xl font-black text-white case-keep">{f.title}</h3>
                          {f.body.map((b, j) => <p key={j} className="mt-2 text-base leading-relaxed text-[#F4F3FA]">{inline(b.v)}</p>)}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  {rg.synthesis && (
                    <Reveal delay={0.06} className="mt-8">
                      <div className="rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10">
                        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">{rg.synthesis.title}</p>
                        {rg.synthesis.body.map((b, j) => <p key={j} className="font-display text-xl md:text-2xl font-bold leading-snug text-black case-keep">{inline(b.v)}</p>)}
                      </div>
                    </Reveal>
                  )}
                </>
              ) : (
                <>
                  <Reveal>
                    <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-8 case-keep">{sec.headline}</h2>
                    {calloutFor(sec.headline)}
                  </Reveal>
                  <Reveal delay={0.08} className="space-y-6">{sec.blocks.map((b, i) => <SectionBlock key={i} b={b} />)}</Reveal>
                  {artifact && <Reveal delay={0.06} className="mt-12">{artifact}</Reveal>}
                </>
              )}
            </Container>
          </section>
        );
      })}

      {/* FINALE: full-screen reveal */}
      <section data-testid="section-reveal" className="py-20 md:py-24 border-t border-white/10">
        <Container>
          <SectionLabel num="✦" name="The full walkthrough" />
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-6xl mb-6 case-keep">One dashboard, five tabs</h2>
            <p className="text-base md:text-lg leading-relaxed text-[#F4F3FA] max-w-6xl mb-10">You've seen the parts. Here's the whole thing: the Overview cockpit, then the tabs it leads into, all on one design system.</p>
          </Reveal>
          <Reveal delay={0.06}>
            <ResponsiveScreen src="/meridian-mocks/real/overview.html" h={1900} maxW={1100} rounded="rounded-3xl"
              label="The Overview tab, the cockpit that rolls the whole institution into one read" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mt-12 items-start">
            {SCREENS.map((s, i) => <Reveal key={s.src} delay={(i % 2) * 0.06}><ResponsiveScreen {...s} /></Reveal>)}
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <section className="py-20 md:py-24 border-t border-white/10 text-center">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-black mb-6 case-keep">Thank you for reading.</h2>
            <p className="text-lg text-[#A29CB4] mb-8">Want this kind of clarity for your analytics product?</p>
            <div className="flex gap-4 justify-center flex-wrap items-center">
              <ProjectNav slug={m.slug} variant="footer" which="prev" />
              <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>
                <Mail size={16} /> email me
              </a>
              <Link to="/projects" className={`inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${FOCUS}`}>
                view all projects
              </Link>
              <ProjectNav slug={m.slug} variant="footer" which="next" />
            </div>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
