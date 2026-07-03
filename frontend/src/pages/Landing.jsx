import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Calendar, Linkedin, Briefcase, User } from "lucide-react";
import { PROFILE, projects } from "../data/content";
import { Container } from "../components/Grid";
import CaseCover from "../components/CaseCover";
import AgenticFeature from "../components/AgenticFeature";
import BookCallButton from "../components/BookCallButton";
import Seo from "../components/Seo";

// Highlighted hero word: bold upright magenta (the rest of the headline is italic).
function Accent({ children }) {
  return <span className="not-italic font-black text-[#F5379B]">{children}</span>;
}

// Scales one line of text to exactly fill the parent's width (the poster
// "flush both edges" look). Measures the line at a 100px reference, then sets
// font-size = 100 * (containerWidth / naturalWidth). Re-fits on resize + once
// webfonts load. Nested size differences must be in `em` so they scale together.
function FitLine({ children, className = "" }) {
  const box = useRef(null);
  const meas = useRef(null);
  const [fs, setFs] = useState(null);
  useLayoutEffect(() => {
    const b = box.current, m = meas.current;
    if (!b || !m) return;
    const fit = () => {
      const cw = b.clientWidth;
      const nat = m.getBoundingClientRect().width;
      // 0.992 safety factor: fonts don't scale perfectly linearly (hinting), so
      // target just under the container to guarantee no overflow. Gap is invisible.
      if (cw > 0 && nat > 0) setFs((100 * cw * 0.992) / nat);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(b);
    let dead = false;
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!dead) fit(); });
    return () => { dead = true; ro.disconnect(); };
  }, [children]);
  return (
    <div ref={box} className={`relative w-full ${className}`}>
      <span ref={meas} aria-hidden="true" className="absolute invisible whitespace-nowrap left-0 top-0" style={{ fontSize: 100, lineHeight: 0.9 }}>{children}</span>
      <span className="inline-block whitespace-nowrap" style={{ fontSize: fs ?? 48, lineHeight: 0.92 }}>{children}</span>
    </div>
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
      <section className="pt-[52px] pb-14 md:pb-20 relative" data-testid="hero">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Copy — 7 cols; the FitLine block fills the full column so there is
                no dead zone between the headline and the (wider, 5-col) photo. */}
            <div className="lg:col-span-7">
              <h1
                className="font-display case-keep italic font-light rise rise-2"
                data-testid="hero-headline"
                style={{ letterSpacing: "0.01em" }}
              >
                <FitLine>
                  I&apos;m <Accent><span className="uppercase">Faraz</span></Accent>.
                </FitLine>
                <FitLine>I Make Complex <Accent>Products</Accent></FitLine>
                <FitLine>Feel Obvious. <Accent>Footballer</Accent></FitLine>
                <FitLine>on Weekends, <Accent>Gamer</Accent></FitLine>
                <FitLine>After Dark &amp; Forever.</FitLine>
                <FitLine><Accent>47 Tabs Deep</Accent>, Dreamin&apos;</FitLine>
                <FitLine>in the Internet Waves.</FitLine>
              </h1>
              <p className="mt-5 text-[11px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#F5379B] rise rise-3" data-testid="hero-eyebrow">
                Senior UX Lead · Enterprise, Fintech &amp; Analytics
              </p>
              <p className="mt-4 max-w-xl text-base md:text-lg text-[#A29CB4] leading-relaxed rise rise-3" data-testid="hero-sub">
                12+ years across UX, product and data, with roots in brand and code. Big believer in clarity over decoration, <span className="text-[#F4F3FA] underline decoration-[#075EFD] decoration-2 underline-offset-4">facts over feelings</span>, and design that gets out of your way. Turns out treating people well is also great for business. Who knew.
              </p>
              <div className="mt-9 flex items-center gap-4 flex-wrap rise rise-3">
                <Link
                  to="/projects"
                  data-testid="hero-cta"
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#075EFD] text-white text-lg font-semibold capitalize shadow-[0_10px_36px_-8px_rgba(7,94,253,0.7)] hover:bg-[#2E78FF] transition-colors"
                >
                  <Briefcase size={20} />
                  view my work
                </Link>
                <Link
                  to="/about"
                  data-testid="hero-about-link"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-white text-base font-semibold capitalize hover:bg-white hover:text-[#100210] transition-colors"
                >
                  <User size={18} />
                  about me
                </Link>
              </div>
            </div>

            {/* Photo - dark "sand" portrait that fades into the page (aligns with the copy column) */}
            <div className="lg:col-span-5 relative rise rise-3 min-h-[300px] lg:min-h-0" data-testid="hero-photo-wrap">
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
