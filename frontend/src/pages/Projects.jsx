import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { projects, concepts } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CaseCover from "../components/CaseCover";
import Seo from "../components/Seo";

export default function Projects() {
  return (
    <div data-testid="projects-page">
      <Seo title="My Work" description="Selected UX case studies by Faraz Khan: FinVista, Aurora, and self-initiated AI-native product concepts (Slate, Almanac, Crux)." />
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

      {/* AI-native concepts - section title treated like the rest; dark cards in one row */}
      <section className="pb-24" data-testid="concepts-section">
        <Container>
        <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">
          <Sparkles size={13} /> self-initiated · ai-native concepts
        </p>
        <h2 className="font-display font-black leading-[0.95] text-4xl md:text-6xl tracking-tighter mb-4">
          what these products look like, AI-first.
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-[#F4F3FA] mb-12">
          A separate track from my client work. These are products I designed end-to-end to find out what an
          AI-native version of a workflow actually feels like to use.
        </p>

        <Grid>
          {concepts.map((c, i) => (
            <div
              key={c.slug}
              data-testid={`concept-card-${c.slug}`}
              className={`relative col-span-12 md:col-span-4 rise rise-${(i % 6) + 1}`}
            >
              <Link to={c.href} className="group block rounded-3xl overflow-hidden lift">
                <CaseCover img={c.coverImg} title={c.title} subtitle={c.subtitle} />
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
        </Grid>
        </Container>
      </section>
    </div>
  );
}
