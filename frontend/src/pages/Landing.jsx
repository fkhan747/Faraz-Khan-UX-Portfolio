import { Link } from "react-router-dom";
import { ArrowRight, Mail, Calendar, Linkedin, Briefcase, User, Star, Quote } from "lucide-react";
import { PROFILE, projects, testimonials } from "../data/content";
import { Container, Grid } from "../components/Grid";
import CaseCover from "../components/CaseCover";
import AgenticFeature from "../components/AgenticFeature";
import BookCallButton from "../components/BookCallButton";
import Seo from "../components/Seo";

// The highlighted hero words are bold upright (the rest of the headline is
// italic). The thick magenta marker underline sits on just the first two
// letters of each word (and on "47" for "47 Tabs Deep"), touching the text.
const HERO_UL = "underline decoration-[#F5379B] decoration-[6px] underline-offset-[1px] [text-decoration-skip-ink:none]";
function Accent({ lead, rest = "" }) {
  return (
    <span className="not-italic font-black">
      <span className={HERO_UL}>{lead}</span>{rest}
    </span>
  );
}

export default function Landing() {
  // The two fully-built case studies (FinVista, Aurora) are featured on the home
  // page, side by side. The full list lives on the "My Work" page.
  const featured = projects.filter((p) => p.detail).slice(0, 2);

  return (
    <div data-testid="landing-page">
      <Seo description="Faraz Khan, Senior UX Lead with 12+ years bridging design, data, and development. Enterprise platforms, design systems, and AI-native product concepts." />
      {/* HERO */}
      <section className="pt-7 pb-14 md:pb-20 relative" data-testid="hero">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Copy */}
            <div className="lg:col-span-8">
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#F5379B] font-medium mb-5 rise rise-1" data-testid="hero-designation">
                Senior UX Lead · design · data · development
              </p>
              <h1
                className="font-display case-keep italic font-light leading-[1.08] text-[2.5rem] sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] rise rise-2"
                data-testid="hero-headline"
                style={{ letterSpacing: "0.02em" }}
              >
                I&apos;m <Accent lead="Fa" rest="raz" />.<br className="hidden xl:block" />{" "}
                I Make Complex <Accent lead="Pr" rest="oducts" /><br className="hidden xl:block" />{" "}
                Feel Obvious. <Accent lead="Fo" rest="otballer" /><br className="hidden xl:block" />{" "}
                on Weekends, <Accent lead="Ga" rest="mer" /><br className="hidden xl:block" />{" "}
                After Dark &amp; Forever.<br className="hidden xl:block" />{" "}
                <Accent lead="47" rest=" Tabs Deep" />,<br className="hidden xl:block" />{" "}
                Dreaming in Internet Waves.
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg text-[#A29CB4] leading-relaxed rise rise-3" data-testid="hero-sub">
                12+ years across Graphic/Brand design, UX, data &amp; development. Big believer in clarity over decoration, <span className="text-[#F4F3FA] underline decoration-[#075EFD] decoration-2 underline-offset-4">facts over feelings</span>, and design that gets out of your way. Turns out treating people well is also great for business. Who knew.
              </p>
              <div className="mt-9 flex items-center gap-4 flex-wrap rise rise-3">
                <Link
                  to="/projects"
                  data-testid="hero-cta"
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#075EFD] text-white text-lg font-semibold capitalize shadow-[0_10px_36px_-8px_rgba(7,94,253,0.7)] hover:bg-[#2E78FF] transition-colors"
                >
                  <Briefcase size={20} />
                  see what i do
                </Link>
                <Link
                  to="/about"
                  data-testid="hero-about-link"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-white text-base font-semibold capitalize hover:bg-white hover:text-[#100210] transition-colors"
                >
                  <User size={18} />
                  know me
                </Link>
              </div>
            </div>

            {/* Photo - dark "sand" portrait that fades into the page (aligns with the copy column) */}
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
        </Container>
      </section>

      {/* FEATURED CASE STUDIES - the two fully-built case studies, side by side */}
      <section className="pb-12" data-testid="featured-project">
        <Container>
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B]">featured case studies</span>
          <Link to="/projects" data-testid="all-projects-link" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-[#075EFD]">
            View all case studies <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <Link key={p.slug} to={`/case/${p.slug}`} data-testid={`featured-link-${p.slug}`} className="block group rounded-3xl overflow-hidden lift">
              <CaseCover img={p.coverImg} title={p.title} subtitle={p.subtitle} year={p.year} titleAs="h2" />
            </Link>
          ))}
        </div>
        </Container>
      </section>

      {/* FEATURED: agentic audit live demo — compact band, below the case studies */}
      <AgenticFeature compact className="pb-16" />

      {/* MARQUEE */}
      <section className="py-12 border-y border-white/10 overflow-hidden dark-card" data-testid="marquee">
        <div className="flex marquee-track whitespace-nowrap font-display text-5xl md:text-7xl font-black">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["product design", "✦", "UX research", "✦", "design systems", "✦", "brand voice", "✦", "motion", "✦", "prototyping", "✦"].map((t, i) => (
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
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">what clients say</p>
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
          <span className="text-sm text-[#A29CB4]">across 30+ engagements since 2015</span>
        </div>
        </Container>
      </section>
      )}

      {/* FINAL CTA */}
      <section className="py-16 md:py-20" data-testid="final-cta">
        <Container>
        <div className="rounded-3xl dark-card text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#075EFD] blur-3xl opacity-40" />
          <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-[#F5379B] blur-3xl opacity-30" />
          <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-white mb-4">let's build</p>
          <h2 className="relative font-display text-4xl md:text-6xl font-black leading-[1.0] md:whitespace-nowrap">
            have an idea <span className="italic font-light text-white">worth</span> shipping?
          </h2>
          <div className="relative mt-8 flex gap-4 flex-wrap">
            <Link to="/contact" data-testid="cta-contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              <Mail size={16} /> Get in Touch
            </Link>
            <BookCallButton data-testid="cta-book-call" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              <Calendar size={16} /> Book a Call
            </BookCallButton>
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" data-testid="cta-linkedin" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        </Container>
      </section>

    </div>
  );
}
