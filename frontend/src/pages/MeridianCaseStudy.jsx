import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { meridian as m } from "../data/meridianCase";
import Seo from "../components/Seo";
import CaseStudyNav from "../components/CaseStudyNav";
import ProjectNav from "../components/ProjectNav";
import { Container } from "../components/Grid";

/* Meridian Institute of Technology, university analytics dashboard case study.
   Client anonymized. Prose from m.body (markdown). The narrative interleaves
   live before/after blocks (iframed from /meridian-mocks/blocks/*) at the
   sections they illustrate, then reveals the full screens at the end. */

const ACCENT = "#F5379B";

/* before/after blocks mapped to the section they illustrate (by headline) */
const BLOCKS = {
  problem: [{ src: "/meridian-mocks/blocks/gender.html", h: 660 }],
  admissions: [
    { src: "/meridian-mocks/blocks/funnel.html", h: 660 },
    { src: "/meridian-mocks/blocks/school.html", h: 640 },
  ],
  geo: [{ src: "/meridian-mocks/blocks/geo.html", h: 660 }],
  researchhr: [
    { src: "/meridian-mocks/blocks/research.html", h: 650 },
    { src: "/meridian-mocks/blocks/hr.html", h: 650 },
  ],
};
function blocksFor(headline = "") {
  const h = headline.toLowerCase();
  if (h.includes("problem")) return BLOCKS.problem;
  if (h.includes("undergraduate and graduate admissions")) return BLOCKS.admissions;
  if (h.includes("geo intelligence")) return BLOCKS.geo;
  if (h.includes("research and hr")) return BLOCKS.researchhr;
  return [];
}

function IframeBlock({ src, h }) {
  return (
    <div className="max-w-5xl mt-7">
      <iframe
        src={src}
        title="Before and after"
        loading="lazy"
        scrolling="no"
        className="w-full block rounded-2xl"
        style={{ height: h, border: 0, background: "#100210" }}
      />
    </div>
  );
}

/* ---- inline bold ---- */
function inline(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i} className="text-white font-bold">{p}</strong> : p));
}

/* ---- parse one section's content into renderable blocks ---- */
function parseBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  let para = [];
  let bullets = [];
  const flushPara = () => { if (para.length) { blocks.push({ t: "p", v: para.join(" ") }); para = []; } };
  const flushBullets = () => { if (bullets.length) { blocks.push({ t: "ul", v: bullets }); bullets = []; } };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^>\s*\[/.test(line)) { continue; } /* old full-screen placeholders are hidden; visuals come from blocks + finale */
    if (/^###\s/.test(line)) { flushPara(); flushBullets(); blocks.push({ t: "h3", v: line.replace(/^###\s/, "").trim() }); continue; }
    if (/^[-*]\s/.test(line)) { flushPara(); bullets.push(line.replace(/^[-*]\s/, "").trim()); continue; }
    if (/^---+$/.test(line)) { flushPara(); flushBullets(); continue; }
    if (line.trim() === "") { flushPara(); flushBullets(); continue; }
    flushBullets();
    para.push(line.trim());
  }
  flushPara(); flushBullets();
  return blocks;
}

function SectionBlock({ b }) {
  if (b.t === "h3")
    return <h3 className="font-display text-xl md:text-2xl font-black text-white case-keep pt-2">{b.v}</h3>;
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

/* ---- split body into numbered ## sections ---- */
function getSections(body) {
  const chunks = body.split(/\n(?=##\s)/);
  return chunks
    .map((c) => c.trim())
    .filter(Boolean)
    .map((c, i) => {
      const nl = c.indexOf("\n");
      const head = c.slice(0, nl === -1 ? undefined : nl).replace(/^##\s/, "").trim();
      const rest = nl === -1 ? "" : c.slice(nl + 1);
      const name = head.split(":")[0].trim();
      return { num: String(i + 1).padStart(2, "0"), name, headline: head, blocks: parseBlocks(rest) };
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
  const futureScreens = [
    "Undergraduate Overview", "Undergraduate Geo", "Funnel / Yield / Melt",
    "Graduate Overview", "Graduate Geo", "Research Intelligence", "HR Workforce",
  ];
  return (
    <article data-testid="meridian-case-study" className="pb-24">
      <Seo title={`${m.title} · Faraz Khan`} description={m.subtitle} />
      <CaseStudyNav />

      {/* TITLE BLOCK, gradient hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(120% 90% at 80% -10%, rgba(7,94,253,0.35) 0%, rgba(16,2,16,0) 55%), radial-gradient(90% 80% at 0% 110%, rgba(245,55,155,0.18) 0%, rgba(16,2,16,0) 50%), #100210",
          }}
        />
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

      {/* SECTIONS + woven before/after blocks */}
      {sections.map((sec) => (
        <section key={sec.num} data-testid={`section-${sec.num}`} className="py-16 md:py-20 border-t border-white/10">
          <Container>
            <SectionLabel num={sec.num} name={sec.name} />
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-8 case-keep">{sec.headline}</h2>
            <div className="space-y-6">
              {sec.blocks.map((b, i) => (
                <SectionBlock key={i} b={b} />
              ))}
            </div>
            {blocksFor(sec.headline).map((bl, i) => (
              <IframeBlock key={i} {...bl} />
            ))}
          </Container>
        </section>
      ))}

      {/* FINALE: full-screen reveal */}
      <section data-testid="section-reveal" className="py-16 md:py-20 border-t border-white/10">
        <Container>
          <SectionLabel num="✦" name="The full walkthrough" />
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-5xl mb-6 case-keep">The redesign, full screen</h2>
          <p className="text-base md:text-lg leading-relaxed text-[#F4F3FA] max-w-4xl mb-10">You have seen the parts. Here is the institutional overview they add up to: one cockpit, one visual language, every department a click away. The remaining module screens follow the same system.</p>
          <div style={{ maxWidth: 1152, borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", height: 886, boxShadow: "0 40px 90px -40px rgba(0,0,0,.85)" }}>
            <iframe
              src="/meridian-mocks/t2-overview.html"
              title="Meridian institutional overview, full screen"
              loading="lazy"
              scrolling="no"
              style={{ width: 1488, height: 1144, border: 0, transform: "scale(0.7742)", transformOrigin: "top left", display: "block" }}
            />
          </div>
          <p className="mt-10 mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/45">Coming in the full walkthrough</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {futureScreens.map((n, i) => (
              <div key={i} className="rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.03] aspect-[16/10] grid place-items-center text-center">
                <div className="px-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] mb-2" style={{ color: ACCENT }}>Screen {i + 2}</div>
                  <div className="font-display text-lg font-black text-white/85 case-keep">{n}</div>
                  <div className="text-[10px] text-white/40 mt-2 font-mono uppercase tracking-widest">Same system, in progress</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSE */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-6 case-keep">Thank you for reading.</h2>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] transition-colors">
            <ArrowLeft size={14} /> back to all projects
          </Link>
        </Container>
      </section>
    </article>
  );
}
