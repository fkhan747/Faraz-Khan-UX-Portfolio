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
      <section className="pt-10 md:pt-14 pb-14 md:pb-20 relative" data-testid="hero">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Copy */}
            <div className="lg:col-span-8">
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#075EFD] font-medium mb-5 rise rise-1" data-testid="hero-designation">
                Senior UX Lead — design · data · development
              </p>
              <h1 className="font-display font-black leading-[1.03] text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] tracking-tight rise rise-2" data-testid="hero-headline">
                I am <span className="italic font-light">Faraz</span> — I make complex products feel <span className="italic font-light">effortless</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg text-[#A29CB4] leading-relaxed rise rise-3" data-testid="hero-sub">
                A senior UX lead with 12+ years bridging design, data &amp; development — turning enterprise dashboards, design systems and AI-native ideas into experiences people actually understand.
              </p>
              <div className="mt-9 flex items-center gap-4 flex-wrap rise rise-3">
                <Link
                  to="/projects"
                  data-testid="hero-cta"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#075EFD] text-white text-base font-semibold capitalize hover:bg-[#2E78FF] transition-colors"
                >
                  see my work
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  to="/about"
                  data-testid="hero-about-link"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F5379B] text-white text-base font-semibold capitalize hover:bg-[#D81F7E] transition-colors"
                >
                  about me
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Photo — dark "sand" portrait that fades into the page (aligns with the copy column) */}
            <div className="lg:col-span-4 relative rise rise-3 min-h-[300px] lg:min-h-0" data-testid="hero-photo-wrap">
              <div className="relative h-full w-full min-h-[300px] overflow-hidden rounded-2xl lg:rounded-tl-none lg:rounded-br-none lg:rounded-bl-none lg:rounded-tr-[3.5rem]">
                <img
                  src="/images/faraz.jpg"
                  alt="Faraz Khan, Senior UX Lead"
                  data-testid="hero-photo"
                  className="photo-blue absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 grain-overlay pointer-events-none" aria-hidden="true" />
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to top, #100210 0%, rgba(16,2,16,0) 45%)" }} />
                <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true" style={{ background: "linear-gradient(to right, #100210 0%, rgba(16,2,16,0) 55%)" }} />
              </div>
            </div>
          </div>

          {/* Status row */}
          <Grid className="mt-14 md:mt-20 rise rise-4" data-testid="hero-stats">
            {[
              { v: "12+", l: "years shipping" },
              { v: "500+", l: "projects delivered" },
              { v: "15+", l: "teams mentored" },
              { v: "5", l: "industry verticals" },
            ].map((s) => (
              <div key={s.l} className="col-span-6 md:col-span-3 dark-card rounded-2xl p-6">
                <div className="font-display text-4xl md:text-5xl font-black">{s.v}</div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest text-[#A29CB4]">{s.l}</div>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* FEATURED PROJECT */}
      <section className="pb-16" data-testid="featured-project">
        <Container>
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD]">featured project · 2024</span>
          <Link to={`/case/${featured.slug}`} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-[#075EFD]">
            full case study <ArrowUpRight size={16} />
          </Link>
        </div>
        <Link to={`/case/${featured.slug}`} data-testid="featured-link" className="block group">
          <div className="rounded-3xl overflow-hidden dark-card lift">
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden relative flex items-center justify-center" style={{ background: "#15101F" }}>
              <img src={featured.cover} alt={featured.title} loading="lazy" className="w-full h-full object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#075EFD] text-white text-[11px] font-mono uppercase tracking-widest">
                featured
              </div>
            </div>
            <div className="px-6 md:px-10 py-7 flex items-center justify-between gap-6 flex-wrap">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-black">{featured.title}</h3>
                <p className="text-sm md:text-base text-[#A29CB4] mt-1">{featured.subtitle}</p>
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F4F3FA]">{featured.client} → {featured.year}</div>
            </div>
          </div>
        </Link>
        </Container>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 md:py-28 border-t border-white/10" data-testid="manifesto">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-6">what i believe</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.3rem] font-black leading-[1.4] max-w-none">
            I believe the best design <span className="italic font-light">disappears</span>. That <span className="bg-[#F5379B] text-white px-3 rounded-full">clarity</span> beats decoration, that the strongest calls follow <span className="underline decoration-[#075EFD] decoration-4 underline-offset-4">facts, not feelings</span> — and that putting people first is what&apos;s best for the business, too.
          </h2>
        </Container>
      </section>

      {/* OTHER CASE STUDIES */}
      <section className="py-16 border-t border-white/10" data-testid="projects-grid">
        <Container>
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-black">case studies</h2>
          <Link to="/projects" data-testid="all-projects-link" className="text-sm font-semibold underline underline-offset-4 decoration-[#075EFD]">view all →</Link>
        </div>
        <Grid>
          {others.map((p, i) => (
            <Link
              key={p.slug}
              to={`/case/${p.slug}`}
              data-testid={`project-card-${p.slug}`}
              className={`col-span-12 md:col-span-4 group block rounded-3xl overflow-hidden dark-card lift rise rise-${(i % 5) + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative" style={{ background: p.color }}>
                <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.comingSoon && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full dark-card text-white text-[10px] font-mono uppercase tracking-widest">
                    coming soon
                  </span>
                )}
              </div>
              <div className="px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-black">{p.title}</h3>
                  <p className="text-sm text-[#A29CB4] mt-0.5">{p.subtitle}</p>
                </div>
                <ArrowUpRight className="flex-shrink-0 mt-2 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={20} />
              </div>
            </Link>
          ))}
        </Grid>
        </Container>
      </section>

      {/* MARQUEE */}
      <section className="py-12 border-y border-white/10 overflow-hidden dark-card" data-testid="marquee">
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

      {/* TESTIMONIALS hidden until real ones are ready; flip false to true to revive. */}
      {false && (
      <section className="py-20 md:py-28 border-t border-white/10" data-testid="testimonials">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-4">what clients say</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-12 leading-tight max-w-3xl">the results <span className="italic font-light">speak</span> for themselves.</h2>

        <Grid>
          {testimonials.map((t, i) => (
            <figure key={i} data-testid={`testimonial-${i}`} className={`col-span-12 md:col-span-4 relative rounded-3xl p-7 ${i === 1 ? "bg-[#075EFD] text-white" : "dark-card text-[#F4F3FA]"}`}>
              <Quote className={`absolute -top-3 -left-2 ${i === 1 ? "text-white" : "text-[#075EFD]"}`} size={36} fill="currentColor" />
              <blockquote className="text-base leading-relaxed mb-6 relative z-10">"{t.quote}"</blockquote>
              <figcaption className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold capitalize">{t.name}</div>
                  <div className={`text-xs ${i === 1 ? "text-white/80" : "text-[#A29CB4]"}`}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Grid>

        <div className="mt-12 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="#F5379B" className="text-white" />
            ))}
          </div>
          <span className="font-display text-xl font-bold">4.9 / 5</span>
          <span className="text-sm text-[#A29CB4]">— across 30+ engagements since 2015</span>
        </div>
        </Container>
      </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 md:py-32" data-testid="final-cta">
        <Container>
        <div className="rounded-3xl dark-card text-white p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-40" />
          <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-[#F5379B] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-6">let's build</p>
          <h2 className="relative font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-4xl">
            have an idea <span className="italic font-light text-white">worth</span> shipping?
          </h2>
          <p className="relative mt-6 text-lg text-white/80 max-w-xl">
            I take on three projects a year. There are two slots open for Q1.
          </p>
          <div className="relative mt-10 flex gap-4 flex-wrap">
            <a href={`mailto:${PROFILE.email}`} data-testid="cta-email" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F5379B] text-white font-semibold text-sm hover:bg-[#D81F7E] transition-colors">
              start a project <ArrowUpRight size={16} />
            </a>
            <Link to="/contact" data-testid="cta-contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              other ways to reach me
            </Link>
          </div>
        </div>
        </Container>
      </section>

      <footer className="py-10 border-t border-[#2C2542]/10">
        <Container className="flex items-center justify-between gap-4 flex-wrap text-xs font-mono uppercase tracking-widest text-[#A29CB4]">
          <span>©2025 {PROFILE.name} · {PROFILE.city}</span>
          <div className="flex items-center gap-5">
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#075EFD] transition-colors">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-[#075EFD] transition-colors">Email</a>
            <Link to="/resume" className="hover:text-[#075EFD] transition-colors">Resume</Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
