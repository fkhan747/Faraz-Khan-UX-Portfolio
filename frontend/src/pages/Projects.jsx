import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { projects, concepts } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CaseCover from "../components/CaseCover";
import RequestAccessPill from "../components/RequestAccessPill";
import Seo from "../components/Seo";
import { NEON_CSS as AB_CSS, Squiggle as AbSquiggle } from "../components/neonStyle";

const AGENTS = ["Accessibility", "Content & voice", "Visual hierarchy", "IA & nav", "Performance", "Mobile"];

/* Full-width agentic-feature band: copy on the left, a mini audit panel on the
   right. Comic-panel treatment matching the About/Contact language. */
function AgenticCard() {
  return (
    <Link
      to="/agentic-workflow"
      data-testid="agentic-feature-link"
      className="group ab-card ab-flat ab-c2 block relative overflow-hidden p-7 md:p-9 lg:p-10"
    >
      <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#7B2FBE] blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 left-1/4 w-56 h-56 rounded-full bg-[#F0186C] blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* copy */}
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-5">
            <Sparkles size={13} /> featured · interactive demo
          </span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black leading-[1.03] tracking-tight text-[#F7F5FF] case-keep">
            Point a swarm of AI agents at any website.
          </h3>
          <p className="mt-4 max-w-xl text-sm md:text-base text-[#A29CB4] leading-relaxed">
            A live demo of an agentic audit workflow I designed. Specialist agents fan out in parallel, adversarially verify every finding, then synthesize one prioritized report.
          </p>
          <div className="mt-7">
            <span className="ab-btn">
              Try the Live Demo <ArrowRight size={16} />
            </span>
          </div>
        </div>

        {/* mini audit panel */}
        <div className="rounded-2xl p-4 md:p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">audit · acme.com</span>
            <span className="text-[10px] font-mono text-[#21BA45]">12 confirmed</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {AGENTS.map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ background: "rgba(255,255,255,0.04)" }}>
                <Check size={11} className="text-[#21BA45] flex-shrink-0" />
                <span className="text-[11px] text-[#F4F3FA]/85 truncate case-keep">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[#A29CB4]">
            <ShieldCheck size={12} className="text-[#17C3E8]" /> verified, 1 prioritized report
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div data-testid="projects-page">
      <style>{AB_CSS}</style>
      <Seo title="My Work" description="Selected UX case studies by Faraz Khan: FinVista, Aurora, Meridian, Jack of All Threads, and the Slate AI-native product concept." />
      <section className="pt-12 pb-10 relative overflow-hidden">
        <AbSquiggle className="ab-sq-1" color="#F0186C" rot={-32} />
        <span className="hidden md:block absolute right-[26%] top-16 z-0"><AbSquiggle className="ab-sq-2" color="#9B4DE0" rot={20} /></span>
        <span className="hidden md:block absolute right-[7%] top-40 z-0"><AbSquiggle className="ab-sq-3" color="#17C3E8" rot={-14} /></span>
        <Container>
        <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0186C] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F4F3FA]/80">selected work</span>
        </div>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter ">
          case studies.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA]">
          Client work plus a self-initiated track of AI-native product concepts. Some are full case studies; a few are still being prepared, and I'm happy to walk you through those early on request.
        </p>
        </div>
        </Container>
      </section>

      {/* Client work - equal 2-column grid of comic panels */}
      <section className="pb-24" data-testid="client-work-section">
        <Container>
        <p data-text="client work" className="ab-glitch inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-6">client work</p>
        <Grid>
          {projects.map((p) =>
            p.locked ? (
              <div
                key={p.slug}
                className="relative col-span-12 md:col-span-6"
                data-testid={`projects-card-${p.slug}`}
              >
                <Link to={`/case/${p.slug}`} className="group block ab-card overflow-hidden">
                  <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} locked titleAs="h2" />
                </Link>
                <RequestAccessPill slug={p.slug} />
              </div>
            ) : (
              <Link
                key={p.slug}
                to={`/case/${p.slug}`}
                className="col-span-12 md:col-span-6 group block ab-card overflow-hidden"
                data-testid={`projects-card-${p.slug}`}
              >
                <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} comingSoon={p.comingSoon} titleAs="h2" />
              </Link>
            )
          )}
        </Grid>
        </Container>
      </section>

      {/* Self-initiated AI work: Slate (concept) + the AI agent live demo, side by side */}
      <section className="pb-24" data-testid="concepts-section">
        <Container>
        <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-6">
          <Sparkles size={13} /> self-initiated · ai-native
        </p>
        <h2 className="font-display font-black leading-[0.95] text-4xl md:text-6xl tracking-tighter mb-4">
          what I can do with AI.
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-[#F4F3FA] mb-12">
          On my own time, away from client work, I build to find out what AI-native really feels like. One
          product I designed end to end, and a live multi-agent demo you can point at any website.
        </p>

        <Grid>
          {/* Slate concept card - full height image card with a sleek blurb */}
          {concepts.filter((c) => c.live !== false).map((c) => (
            <div
              key={c.slug}
              data-testid={`concept-card-${c.slug}`}
              className="relative col-span-12 md:col-span-6 h-full"
            >
              <Link
                to={c.href}
                className="group ab-card ab-flat ab-c1 relative flex flex-col h-full min-h-[420px] overflow-hidden bg-[#15101F]"
              >
                <img
                  src={c.coverImg}
                  alt={c.title}
                  loading="lazy"
                  className="cover-img absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                {/* brand tint */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(135deg, rgba(7,94,253,0.40), rgba(245,55,155,0.34))" }} />
                {/* readability scrim - stronger so the blurb stays legible */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to top, rgba(13,3,18,0.97) 6%, rgba(13,3,18,0.62) 40%, rgba(13,3,18,0) 74%)" }} />
                {/* bottom content */}
                <div className="relative mt-auto p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl md:text-4xl font-black text-white leading-none case-keep">{c.title}</h3>
                    <ArrowUpRight className="flex-shrink-0 text-white/85 group-hover:rotate-45 transition-transform mt-1" size={24} />
                  </div>
                  <p className="mt-2 text-sm md:text-base text-white/80">{c.subtitle}</p>
                  {c.blurb && (
                    <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-md case-keep">{c.blurb}</p>
                  )}
                </div>
              </Link>
              {c.prototypeUrl && (
                <a
                  href={c.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`concept-prototype-${c.slug}`}
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2D50F] text-[#100210] text-[10px] font-mono font-bold uppercase tracking-widest shadow-[3px_3px_0_#F0186C] hover:-translate-y-0.5 transition-transform"
                >
                  {c.status} <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          ))}

          {/* Agentic-audit live demo — full-width band */}
          <div className="col-span-12">
            <AgenticCard />
          </div>
        </Grid>
        </Container>
      </section>
    </div>
  );
}
