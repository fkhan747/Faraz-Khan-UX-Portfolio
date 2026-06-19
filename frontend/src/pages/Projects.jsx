import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects, concepts } from "../data/content";
import { Container, Grid } from "../components/Grid";

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
              className={`col-span-12 md:col-span-6 group block rounded-3xl overflow-hidden dark-card lift rise rise-${(i % 6) + 1}`}
              data-testid={`projects-card-${p.slug}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative" style={{ background: p.color }}>
                <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.comingSoon && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full dark-card text-white text-[10px] font-mono uppercase tracking-widest">
                    coming soon
                  </span>
                )}
              </div>
              <div className="px-6 md:px-7 py-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display text-2xl md:text-3xl font-black">{p.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">{p.year}</span>
                  </div>
                  <p className="text-sm md:text-base text-[#A29CB4]">{p.subtitle}</p>
                </div>
                <ArrowUpRight className="flex-shrink-0 mt-2 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={22} />
              </div>
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
            const inner = (
              <>
                <div
                  className="aspect-[16/10] overflow-hidden relative grid place-items-center"
                  style={{ background: `linear-gradient(140deg, ${c.accent}, #261E3A 118%)` }}
                >
                  <span className="font-display font-black text-white/95 text-7xl leading-none drop-shadow-sm">
                    {c.title.charAt(0).toUpperCase()}
                  </span>
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/35 backdrop-blur-sm border border-white/15 text-white text-[10px] font-mono uppercase tracking-widest">
                    {c.status}
                  </span>
                </div>
                <div className="px-6 md:px-7 py-5 text-white">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display text-2xl md:text-3xl font-black">{c.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/45">{c.year}</span>
                  </div>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">{c.subtitle}</p>
                  {c.live ? (
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: c.accent }}>
                      {c.slug === "recruitos" ? "open prototype" : "read case study"}
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </span>
                  ) : (
                    <span className="mt-4 inline-flex text-[11px] font-mono uppercase tracking-widest text-white/35">
                      case study coming soon
                    </span>
                  )}
                </div>
              </>
            );
            return c.live ? (
              <Link
                key={c.slug}
                to={c.href}
                data-testid={`concept-card-${c.slug}`}
                className={`col-span-12 md:col-span-4 group block rounded-3xl overflow-hidden dark-card border border-white/10 lift rise rise-${(i % 6) + 1}`}
              >
                {inner}
              </Link>
            ) : (
              <div
                key={c.slug}
                data-testid={`concept-card-${c.slug}`}
                className="col-span-12 md:col-span-4 rounded-3xl overflow-hidden dark-card border border-white/10"
              >
                {inner}
              </div>
            );
          })}
        </Grid>
        </Container>
      </section>
    </div>
  );
}
