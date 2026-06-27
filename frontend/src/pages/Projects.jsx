import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { projects, concepts } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CaseCover from "../components/CaseCover";
import Seo from "../components/Seo";

const AGENTS = ["Accessibility", "Content & voice", "Visual hierarchy", "IA & nav", "Performance", "Mobile"];

/* Compact agentic-feature card, sized to sit alongside a concept card in a
   2-column grid. Same visual language as the larger banner that used to live
   above the case studies (dark card + glow blobs + audit panel). */
function AgenticCard() {
  return (
    <Link
      to="/agentic-workflow"
      data-testid="agentic-feature-link"
      className="group block relative overflow-hidden rounded-3xl dark-card p-7 md:p-8 lift h-full"
    >
      <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#075EFD] blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 left-1/4 w-56 h-56 rounded-full bg-[#F5379B] blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="relative flex flex-col h-full">
        <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-5">
          <Sparkles size={13} /> featured · interactive demo
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-black leading-[1.05] tracking-tight text-[#F7F5FF] case-keep">
          Point a swarm of AI agents at any website.
        </h3>
        <p className="mt-4 text-sm md:text-base text-[#A29CB4] leading-relaxed">
          A live demo of an agentic audit workflow I designed. Specialist agents fan out in parallel, adversarially verify every finding, then synthesize one prioritized report.
        </p>

        {/* mini audit panel */}
        <div className="mt-6 rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
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
            <ShieldCheck size={12} className="text-[#075EFD]" /> verified, 1 prioritized report
          </div>
        </div>

        <div className="mt-auto pt-6">
          <span className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#C71E73] text-sm font-semibold group-hover:bg-[#F5379B] group-hover:text-white transition-colors">
            Try the live demo <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div data-testid="projects-page">
      <Seo title="My Work" description="Selected UX case studies by Faraz Khan: FinVista, Aurora, Meridian, Jack of All Threads, and the Slate AI-native product concept." />
      <section className="pt-12 pb-10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">selected work</p>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter ">
          c<span className="dot-o">a</span>se studies.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA]">
          Client work plus a self-initiated track of AI-native product concepts. Some are full case studies; a few are still being prepared, and I'm happy to walk you through those early on request.
        </p>
        </Container>
      </section>

      {/* Client work - equal 2-column grid */}
      <section className="pb-24" data-testid="client-work-section">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">client work</p>
        <Grid>
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/case/${p.slug}`}
              className={`col-span-12 md:col-span-6 group block rounded-3xl overflow-hidden lift rise rise-${(i % 6) + 1}`}
              data-testid={`projects-card-${p.slug}`}
            >
              <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} comingSoon={p.comingSoon} titleAs="h2" />
            </Link>
          ))}
        </Grid>
        </Container>
      </section>

      {/* Self-initiated AI work: Slate (concept) + the AI agent live demo, side by side */}
      <section className="pb-24" data-testid="concepts-section">
        <Container>
        <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">
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
          {concepts.filter((c) => c.live !== false).map((c, i) => (
            <div
              key={c.slug}
              data-testid={`concept-card-${c.slug}`}
              className={`relative col-span-12 md:col-span-6 h-full rise rise-${(i % 6) + 1}`}
            >
              <Link
                to={c.href}
                className="group relative flex flex-col h-full min-h-[420px] rounded-3xl overflow-hidden lift bg-[#15101F]"
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
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#C71E73] text-[10px] font-mono font-bold uppercase tracking-widest shadow-[0_6px_20px_-6px_rgba(245,55,155,0.55)] hover:bg-white/90 transition-colors"
                >
                  {c.status} <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          ))}

          {/* Agentic-audit live demo card */}
          <div className="col-span-12 md:col-span-6 rise rise-2">
            <AgenticCard />
          </div>
        </Grid>
        </Container>
      </section>
    </div>
  );
}
