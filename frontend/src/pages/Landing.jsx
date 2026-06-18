import { Link } from "react-router-dom";
import { ArrowUpRight, Star, Quote } from "lucide-react";
import { PROFILE, projects, testimonials } from "../data/content";
import { Container, Grid } from "../components/Grid";

export default function Landing() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <div data-testid="landing-page">
      {/* HERO */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-20 relative" data-testid="hero">
        <Container>
          <div className="w-full">
            <h1 className="font-display font-black leading-[0.95] text-[7.5vw] md:text-[6vw] lg:text-[4.8vw] xl:text-[4.6vw] tracking-tighter rise rise-1" data-testid="hero-headline">
              I am <span className="italic font-light">FARAZ</span>, I Design, Play F<span className="dot-o">o</span>otball,<br />
              Eat — Game &amp; Repeat.
            </h1>

            <div className="mt-10 flex items-center gap-4 flex-wrap rise rise-3">
              <Link
                to="/projects"
                data-testid="hero-cta"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0A0A0A] text-[#FFD93D] text-base font-semibold hover:bg-[#1a1a1a] transition-colors"
              >
                see my work
                <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/about"
                data-testid="hero-about-link"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FFD93D] text-[#0A0A0A] text-base font-semibold hover:bg-[#F3C721] transition-colors"
              >
                about me
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Status row */}
          <Grid className="mt-16 md:mt-24 rise rise-4" data-testid="hero-stats">
            {[
              { v: "12+", l: "years shipping" },
              { v: "500+", l: "projects delivered" },
              { v: "15+", l: "teams mentored" },
              { v: "5", l: "industry verticals" },
            ].map((s) => (
              <div key={s.l} className="col-span-6 md:col-span-3 bg-[#F7F1DA] rounded-2xl p-6">
                <div className="font-display text-4xl md:text-5xl font-black">{s.v}</div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">{s.l}</div>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* FEATURED PROJECT */}
      <section className="pb-16" data-testid="featured-project">
        <Container>
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F]">featured project · 2024</span>
          <Link to={`/case/${featured.slug}`} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-[#E94B1F]">
            full case study <ArrowUpRight size={16} />
          </Link>
        </div>
        <Link to={`/case/${featured.slug}`} data-testid="featured-link" className="block group">
          <div className="rounded-3xl overflow-hidden bg-[#F7F1DA] lift">
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden relative flex items-center justify-center" style={{ background: featured.color }}>
              <img src={featured.cover} alt={featured.title} loading="lazy" className="w-full h-full object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] text-[#FFD93D] text-[11px] font-mono uppercase tracking-widest">
                featured
              </div>
            </div>
            <div className="px-6 md:px-10 py-7 flex items-center justify-between gap-6 flex-wrap">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-black">{featured.title}</h3>
                <p className="text-sm md:text-base text-[#5A5A5A] mt-1">{featured.subtitle}</p>
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]">{featured.client} → {featured.year}</div>
            </div>
          </div>
        </Link>
        </Container>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 md:py-28 border-t border-black/10" data-testid="manifesto">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-6">what i believe</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-5xl">
            I don't <span className="italic font-light">do</span> fluff. Just focused, <span className="bg-[#FFD93D] px-3 rounded-full">award-winning</span> work that speaks to the people on the other side of the screen — and delivers <span className="underline decoration-[#E94B1F] decoration-4 underline-offset-4">real results</span>.
          </h2>
        </Container>
      </section>

      {/* OTHER CASE STUDIES */}
      <section className="py-16 border-t border-black/10" data-testid="projects-grid">
        <Container>
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-black">case studies</h2>
          <Link to="/projects" data-testid="all-projects-link" className="text-sm font-semibold underline underline-offset-4 decoration-[#E94B1F]">view all →</Link>
        </div>
        <Grid>
          {others.map((p, i) => (
            <Link
              key={p.slug}
              to={`/case/${p.slug}`}
              data-testid={`project-card-${p.slug}`}
              className={`col-span-12 md:col-span-4 group block rounded-3xl overflow-hidden bg-[#F7F1DA] lift rise rise-${(i % 5) + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative" style={{ background: p.color }}>
                <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.comingSoon && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] text-[#FFD93D] text-[10px] font-mono uppercase tracking-widest">
                    coming soon
                  </span>
                )}
              </div>
              <div className="px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-black">{p.title}</h3>
                  <p className="text-sm text-[#5A5A5A] mt-0.5">{p.subtitle}</p>
                </div>
                <ArrowUpRight className="flex-shrink-0 mt-2 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={20} />
              </div>
            </Link>
          ))}
        </Grid>
        </Container>
      </section>

      {/* MARQUEE */}
      <section className="py-12 border-y border-black/10 overflow-hidden bg-[#F7F1DA]" data-testid="marquee">
        <div className="flex marquee-track whitespace-nowrap font-display text-5xl md:text-7xl font-black">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["product design", "✦", "ux research", "✦", "design systems", "✦", "brand voice", "✦", "motion", "✦", "prototyping", "✦"].map((t, i) => (
                <span key={`${k}-${i}`} className={i % 2 === 0 ? "italic font-light" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 border-t border-black/10" data-testid="testimonials">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-4">what clients say</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-12 leading-tight max-w-3xl">the results <span className="italic font-light">speak</span> for themselves.</h2>

        <Grid>
          {testimonials.map((t, i) => (
            <figure key={i} data-testid={`testimonial-${i}`} className={`col-span-12 md:col-span-4 relative rounded-3xl p-7 ${i === 1 ? "bg-[#E94B1F] text-white" : "bg-[#F7F1DA] text-[#0A0A0A]"}`}>
              <Quote className={`absolute -top-3 -left-2 ${i === 1 ? "text-[#FFD93D]" : "text-[#E94B1F]"}`} size={36} fill="currentColor" />
              <blockquote className="text-base leading-relaxed mb-6 relative z-10">"{t.quote}"</blockquote>
              <figcaption className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold capitalize">{t.name}</div>
                  <div className={`text-xs ${i === 1 ? "text-white/80" : "text-[#5A5A5A]"}`}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Grid>

        <div className="mt-12 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="#FFD93D" className="text-[#FFD93D]" />
            ))}
          </div>
          <span className="font-display text-xl font-bold">4.9 / 5</span>
          <span className="text-sm text-[#5A5A5A]">— across 30+ engagements since 2015</span>
        </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32" data-testid="final-cta">
        <Container>
        <div className="rounded-3xl bg-[#0A0A0A] text-white p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#E94B1F] blur-3xl opacity-40" />
          <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-[#FFD93D] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD93D] mb-6">let's build</p>
          <h2 className="relative font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-4xl">
            have an idea <span className="italic font-light text-[#FFD93D]">worth</span> shipping?
          </h2>
          <p className="relative mt-6 text-lg text-white/80 max-w-xl">
            I take on three projects a year. There are two slots open for Q1.
          </p>
          <div className="relative mt-10 flex gap-4 flex-wrap">
            <a href={`mailto:${PROFILE.email}`} data-testid="cta-email" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FFD93D] text-[#0A0A0A] font-semibold text-sm hover:bg-white transition-colors">
              start a project <ArrowUpRight size={16} />
            </a>
            <Link to="/contact" data-testid="cta-contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              other ways to reach me
            </Link>
          </div>
        </div>
        </Container>
      </section>

      <footer className="py-10 border-t border-black/10">
        <Container className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">
          <span>©2025 {PROFILE.name} · {PROFILE.city}</span>
          <span>portfolio / 2025 — v3</span>
        </Container>
      </footer>
    </div>
  );
}
