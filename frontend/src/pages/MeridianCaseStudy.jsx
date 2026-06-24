import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { meridian as m } from "../data/meridianCase";
import { PROFILE } from "../data/content";
import Seo from "../components/Seo";
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

/* Meridian Institute of Technology, university analytics dashboard case study.
   Client anonymized. Built to the FinVista/Aurora benchmark: native React on the
   shared .dark-card surface. Conceptual artifacts are native components; the light
   product (before/after dashboard pairs + the 8 full screens) sits in dark frames,
   the way FinVista frames its app screenshots. Narrative prose comes from m.body. */

const ACCENT = "#F5379B";
const B = "/meridian-mocks/blocks/";

/* light product before/after exhibit (the real dashboards), framed on the dark page */
function IframeBlock({ src, h }) {
  return (
    <div className="max-w-5xl mt-7">
      <iframe src={src} title="Before and after" loading="lazy" scrolling="no"
        className="w-full block rounded-2xl" style={{ height: h, border: 0, background: "#100210" }} />
    </div>
  );
}

/* real legacy montage, a "before" screenshot framed in a dark card (FinVista pattern) */
function LegacyMontage() {
  const src = "/meridian/legacy/four-dashboards.png";
  const cap = "The four legacy dashboards, four offices, four visual languages, no shared layout";
  return (
    <figure className="dark-card rounded-3xl overflow-hidden max-w-4xl">
      <Zoomable src={src} alt="The four legacy dashboards" caption={cap} className="bg-white p-3 block">
        <img src={src} alt="The four legacy dashboards" loading="lazy" className="w-full h-auto block rounded-lg" />
      </Zoomable>
      <figcaption className="px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A29CB4]">{cap}</figcaption>
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
  if (h.includes("information architecture")) return (<><MeridianIA /><div className="mt-12"><MeridianFlow /></div></>);
  if (h.includes("design system")) return <MeridianDesignSystem />;
  if (h.includes("undergraduate and graduate admissions")) return (<><IframeBlock src={B + "funnel.html"} h={660} /><IframeBlock src={B + "school.html"} h={640} /></>);
  if (h.includes("research and hr")) return (<><IframeBlock src={B + "research.html"} h={650} /><IframeBlock src={B + "hr.html"} h={650} /></>);
  if (h.includes("geo intelligence")) return <IframeBlock src={B + "geo.html"} h={660} />;
  return null;
}

/* scaled thumbnail of a full dashboard screen, framed in a dark card (1472 = 1440 + 16px padding) */
const TW = 1472, THUMB_W = 496, THUMB_SCALE = THUMB_W / TW;
function ScreenThumb({ src, label, h }) {
  return (
    <figure className="dark-card rounded-2xl overflow-hidden">
      <div style={{ width: THUMB_W, maxWidth: "100%", height: Math.round(h * THUMB_SCALE), overflow: "hidden" }}>
        <iframe src={src} title={label} loading="lazy" scrolling="no"
          style={{ width: TW, height: h, border: 0, transform: `scale(${THUMB_SCALE})`, transformOrigin: "top left", display: "block" }} />
      </div>
      <figcaption className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A29CB4]">{label}</figcaption>
    </figure>
  );
}

const SCREENS = [
  { src: "/meridian-mocks/t2-ug-overview.html", label: "Undergraduate Overview", h: 910 },
  { src: "/meridian-mocks/t2-ug-geo.html", label: "Undergraduate Geo", h: 950 },
  { src: "/meridian-mocks/t2-funnel.html", label: "Funnel, yield & melt", h: 1227 },
  { src: "/meridian-mocks/t2-grad-overview.html", label: "Graduate Overview", h: 923 },
  { src: "/meridian-mocks/t2-grad-geo.html", label: "Graduate Geo", h: 949 },
  { src: "/meridian-mocks/t2-research.html", label: "Research Intelligence", h: 1038 },
  { src: "/meridian-mocks/t2-hr.html", label: "HR Workforce", h: 1133 },
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
      <ul className="space-y-3 max-w-4xl">
        {b.v.map((x, i) => (
          <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed text-[#F4F3FA]">
            <span className="mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
            <span>{inline(x)}</span>
          </li>
        ))}
      </ul>
    );
  return <p className="text-base md:text-lg leading-relaxed text-[#F4F3FA] max-w-4xl">{inline(b.v)}</p>;
}

function getSections(body) {
  return body.split(/\n(?=##\s)/).map((c) => c.trim()).filter(Boolean).map((c, i) => {
    const nl = c.indexOf("\n");
    const head = c.slice(0, nl === -1 ? undefined : nl).replace(/^##\s/, "").trim();
    const rest = nl === -1 ? "" : c.slice(nl + 1);
    return { num: String(i + 1).padStart(2, "0"), name: head.split(":")[0].trim(), headline: head, blocks: parseBlocks(rest) };
  });
}

const SectionLabel = ({ num, name }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: ACCENT }}>{num} · {name}</span>
    <span className="flex-1 h-px bg-white/10" />
  </div>
);

export default function MeridianCaseStudy() {
  const sections = getSections(m.body);
  return (
    <article data-testid="meridian-case-study" className="pb-24">
      <Seo title={`${m.title} · Faraz Khan`} description={m.subtitle} />
      <CaseStudyNav />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(120% 90% at 80% -10%, rgba(7,94,253,0.35) 0%, rgba(16,2,16,0) 55%), radial-gradient(90% 80% at 0% 110%, rgba(245,55,155,0.18) 0%, rgba(16,2,16,0) 50%), #100210" }} />
        <Container className="relative z-10 pt-12 pb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
            <Link to="/projects" data-testid="back-link" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] transition-colors">
              <ArrowLeft size={14} /> all projects
            </Link>
            <ProjectNav slug={m.slug} />
          </div>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-5" style={{ color: ACCENT }}>{m.hero.eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[#F7F5FF] max-w-5xl case-keep">{m.title}</h1>
          <p className="mt-7 max-w-3xl text-lg md:text-2xl text-[#F4F3FA] leading-snug font-light italic case-keep">{m.subtitle}</p>
          {m.hero.meta && <p className="mt-5 max-w-3xl text-xs font-mono uppercase tracking-[0.18em] text-white/55 case-keep">{m.hero.meta}</p>}
          {m.hero.stats && (
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {m.hero.stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-5 md:p-6 bg-[#100210]/55 backdrop-blur-md border border-white/12">
                  <div className="num text-3xl md:text-4xl font-black text-[#075EFD] leading-none">{s.value}</div>
                  <div className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70 case-keep">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </header>

      {/* SECTIONS + woven artifacts */}
      {sections.map((sec) => {
        const isTldr = sec.num === "01";
        const artifact = artifactFor(sec.headline);
        return (
          <section key={sec.num} data-testid={`section-${sec.num}`} className="py-16 md:py-20 border-t border-white/10">
            <Container>
              <SectionLabel num={sec.num} name={sec.name} />
              {isTldr ? (
                <div className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-30" aria-hidden="true" />
                  <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-5">in one minute</p>
                  <div className="relative space-y-5">
                    {sec.blocks.map((b, i) =>
                      b.t === "p"
                        ? <p key={i} className="font-display text-xl md:text-2xl leading-snug text-white/95 max-w-5xl">{inline(b.v)}</p>
                        : <SectionBlock key={i} b={b} />
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-8 case-keep">{sec.headline}</h2>
                  <div className="space-y-6">{sec.blocks.map((b, i) => <SectionBlock key={i} b={b} />)}</div>
                  {artifact && <div className="mt-12">{artifact}</div>}
                </>
              )}
            </Container>
          </section>
        );
      })}

      {/* FINALE: full-screen reveal */}
      <section data-testid="section-reveal" className="py-16 md:py-20 border-t border-white/10">
        <Container>
          <SectionLabel num="✦" name="The full walkthrough" />
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-6 case-keep">Eight screens, one system</h2>
          <p className="text-base md:text-lg leading-relaxed text-[#F4F3FA] max-w-4xl mb-10">You have seen the parts. Here is the whole product: the institutional cockpit, then the seven module screens it leads into, all on one design system.</p>
          <figure className="dark-card rounded-3xl overflow-hidden" style={{ width: 1152, maxWidth: "100%" }}>
            <div style={{ width: 1152, maxWidth: "100%", height: Math.round(1128 * 1152 / TW), overflow: "hidden" }}>
              <iframe src="/meridian-mocks/t2-overview.html" title="Meridian institutional overview" loading="lazy" scrolling="no"
                style={{ width: TW, height: 1128, border: 0, transform: `scale(${1152 / TW})`, transformOrigin: "top left", display: "block" }} />
            </div>
            <figcaption className="px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A29CB4]">Institutional Overview, the cockpit</figcaption>
          </figure>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mt-12 items-start">
            {SCREENS.map((s) => <ScreenThumb key={s.src} {...s} />)}
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <section className="py-16 md:py-24 border-t border-white/10 text-center">
        <Container>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6 case-keep">Thank you for reading.</h2>
          <p className="text-lg text-[#A29CB4] mb-8">Want this kind of clarity for your analytics product?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`mailto:${PROFILE.email}`} data-testid="case-cta-email" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-colors">
              <Mail size={16} /> email me
            </a>
            <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-[#F4F3FA] font-semibold text-sm hover:bg-[#261E3A] transition-colors">
              view all projects
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
