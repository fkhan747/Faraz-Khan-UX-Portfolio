import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { projects, concepts } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CaseCover from "../components/CaseCover";

export default function Projects() {
  return (
    <div data-testid="projects-page">
      <section className="pt-12 pb-10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-6">selected work · 2023 — 2025</p>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter ">
          c<span className="dot-o">a</span>se studies.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA]">
          Selected client work alongside a self-initiated track of AI-native product concepts — full case studies and a few being prepared, available for an early walkthrough on request.
        </p>
        </Container>
      </section>

      {/* Client work — equal 2-column grid */}
      <section className="pb-24" data-testid="client-work-section">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-6">client work</p>
        <Grid>
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/case/${p.slug}`}
              className={`col-span-12 md:col-span-6 group block rounded-3xl overflow-hidden lift rise rise-${(i % 6) + 1}`}
              data-testid={`projects-card-${p.slug}`}
            >
              <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} comingSoon={p.comingSoon} />
            </Link>
          ))}
        </Grid>
        </Container>
      </section>

      {/* AI-native concepts — section title treated like the rest; dark cards in one row */}
      <section className="pb-24" data-testid="concepts-section">
        <Container>
        <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-6">
          <Sparkles size={13} /> self-initiated · ai-native concepts
        </p>
        <h2 className="font-display font-black leading-[0.95] text-4xl md:text-6xl tracking-tighter mb-4">
          what these products look like, AI-first.
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-[#F4F3FA] mb-12">
          A separate track from my client work — products I designed end-to-end to explore what an
          AI-native version of a workflow actually feels like to use.
        </p>

        <Grid>
          {concepts.map((c, i) => {
            const card = <CaseCover img={c.coverImg} title={c.title} subtitle={c.subtitle} year={c.year} badge={c.status} />;
            return c.live ? (
              <Link
                key={c.slug}
                to={c.href}
                data-testid={`concept-card-${c.slug}`}
                className={`col-span-12 md:col-span-4 group block rounded-3xl overflow-hidden lift rise rise-${(i % 6) + 1}`}
              >
                {card}
              </Link>
            ) : (
              <div
                key={c.slug}
                data-testid={`concept-card-${c.slug}`}
                className={`col-span-12 md:col-span-4 rounded-3xl overflow-hidden rise rise-${(i % 6) + 1}`}
              >
                {card}
              </div>
            );
          })}
        </Grid>
        </Container>
      </section>
    </div>
  );
}
