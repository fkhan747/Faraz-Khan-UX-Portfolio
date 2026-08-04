import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { projects } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CaseCover from "../components/CaseCover";
import Seo from "../components/Seo";
import { NEON_CSS as AB_CSS, Squiggle as AbSquiggle } from "../components/neonStyle";

export default function Projects() {
  return (
    <div data-testid="projects-page">
      <style>{AB_CSS}</style>
      <Seo title="My Work" description="Selected UX case studies by Faraz Khan: FinVista, Aurora, Meridian, Threadfold, and the Slate AI-native product concept." />
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
                  <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} badge={p.badge} locked titleAs="h2" />
                </Link>
              </div>
            ) : (
              <Link
                key={p.slug}
                to={`/case/${p.slug}`}
                className="col-span-12 md:col-span-6 group block ab-card overflow-hidden"
                data-testid={`projects-card-${p.slug}`}
              >
                <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} badge={p.badge} comingSoon={p.comingSoon} titleAs="h2" />
              </Link>
            )
          )}
        </Grid>
        </Container>
      </section>

      {/* AI LAB, navigation card. The AI work used to live here in full, below
          four case-study cards, where most visitors never scrolled to it. It
          has its own page and a nav slot now; this card is the pointer. */}
      <section className="pb-24" data-testid="ai-lab-card-section">
        <Container>
          <Link
            to="/ai-lab"
            data-testid="ai-lab-card"
            className="group ab-card ab-flat ab-c2 block relative overflow-hidden p-7 md:p-9 lg:p-10"
          >
            <div className="ab-glow absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#7B2FBE] blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
            <div className="ab-glow absolute -bottom-20 left-1/4 w-56 h-56 rounded-full bg-[#F0186C] blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-5">
                  <Sparkles size={13} /> self-initiated · ai-native
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-[1.03] tracking-tight text-[#F7F5FF] case-keep">
                  AI Lab
                </h2>
                <p className="mt-4 max-w-xl text-sm md:text-base text-[#A29CB4] leading-relaxed">
                  A working multi-agent audit tool you can point at any website, and two AI-native
                  products designed end to end and built as prototypes you can click through.
                </p>
              </div>
              <div className="lg:flex-shrink-0">
                <span className="ab-btn">
                  Open the AI Lab <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </Container>
      </section>

    </div>
  );
}
