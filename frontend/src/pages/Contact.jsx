import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Download, Calendar } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import CopyButton from "../components/CopyButton";
import BookCallButton from "../components/BookCallButton";
import ContactForm from "../components/ContactForm";
import DirectContactStrip from "../components/DirectContactStrip";
import Seo from "../components/Seo";
import { NEON_CSS as AB_CSS, Squiggle as AbSquiggle } from "../components/neonStyle";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";
const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

export default function Contact() {
  const [params] = useSearchParams();
  const accessReq = params.get("intent") === "access";

  // Routed here from a locked case study: show just the request form + a direct
  // line to reach me. No hero, no cards, no FAQ — either they request or they don't.
  if (accessReq) {
    return (
      <div data-testid="contact-page">
        <style>{AB_CSS}</style>
        <Seo
          title="Request Case Study Access"
          description="Request access to Faraz Khan's confidential client case studies."
          noindex
        />
        <section className="pt-14 pb-24 relative overflow-hidden min-h-[72vh]">
          <AbSquiggle className="ab-sq-1" color="#F0186C" rot={-32} />
          <span className="hidden md:block absolute right-[10%] top-24 z-0">
            <AbSquiggle className="ab-sq-3" color="#17C3E8" rot={-14} />
          </span>
          <Container>
            <div className="relative z-10" data-testid="access-request-view">
              <ContactForm
                eyebrow="request access"
                title={
                  <>
                    Request access to the <span className="italic font-light">work.</span>
                  </>
                }
                defaultInquiry="Case Study Access Request"
                messagePlaceholder="Tell me which case study you'd like to see, and a line about you. Optional."
              />
              <DirectContactStrip className="mt-9 pt-6 border-t border-white/10" />
            </div>
          </Container>
        </section>
      </div>
    );
  }

  return (
    <div data-testid="contact-page">
      <style>{AB_CSS}</style>
      <Seo title="Get in Touch" description="Get in touch with Faraz Khan, Senior UX Lead. Book a call, send a message, or reach out by email." />
      {/* Hero - kinetic eyebrow + oversized headline, ambient squiggles */}
      <section className="pt-12 pb-10 relative overflow-hidden">
        <AbSquiggle className="ab-sq-1" color="#F0186C" rot={-32} />
        <span className="hidden md:block absolute right-[30%] top-16 z-0"><AbSquiggle className="ab-sq-2" color="#9B4DE0" rot={20} /></span>
        <span className="hidden md:block absolute right-[8%] top-40 z-0"><AbSquiggle className="ab-sq-3" color="#17C3E8" rot={-14} /></span>
        <Container>
        <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0186C] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F4F3FA]/80">get in touch</span>
        </div>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter">
          contact.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#F4F3FA]">
          The fastest way to reach me is email or a call. I reply within 24 hours on weekdays.
        </p>
        </div>
        </Container>
      </section>

      {/* Get-in-touch */}
      <section className="pb-16" data-testid="get-in-touch">
        <Container>
        {/* Availability banner - comic glow panel with the actions on the right */}
        <div
          className="ab-card ab-flat ab-c4 relative overflow-hidden px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          data-testid="available-card"
        >
          <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-[#7B2FBE] blur-3xl opacity-[0.10] pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#F0186C] blur-3xl opacity-[0.09] pointer-events-none" aria-hidden="true" />
          <p className="relative text-lg md:text-xl font-bold leading-tight text-[#F4F3FA]">Open to full-time &amp; remote opportunities.</p>
          <div className="relative flex flex-wrap gap-4 md:flex-shrink-0">
            <a
              href={RESUME_PATH}
              download="Faraz_Khan_Resume.pdf"
              data-testid="download-resume"
              className="ab-btn ab-btn-ghost"
            >
              Download Resume <Download size={16} />
            </a>
            <BookCallButton data-testid="schedule-call" className="ab-btn">
              <Calendar size={16} /> Schedule a Call
            </BookCallButton>
          </div>
        </div>

        {/* Contact cards - one row of comic panels */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 mt-8">
          {/* Email */}
          <div className="ab-card ab-flat ab-c3 flex items-center gap-3 p-4 flex-auto" data-testid="contact-email">
            <span className="h-10 w-10 rounded-xl bg-[#F0186C] grid place-items-center flex-shrink-0 text-white"><Mail size={17} /></span>
            <a href={`mailto:${PROFILE.email}`} className="min-w-0 flex-1 group">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-0.5">email</p>
              <p className="text-sm font-bold whitespace-nowrap group-hover:text-[#F0186C] transition-colors">{PROFILE.email}</p>
            </a>
            <CopyButton value={PROFILE.email} label="email" size={15} className="h-9 w-9 border border-white/15 text-[#F4F3FA] hover:bg-white/10 flex-shrink-0" />
          </div>
          {/* Phone */}
          <div className="ab-card ab-flat ab-c2 flex items-center gap-3 p-4 flex-auto" data-testid="contact-phone">
            <span className="h-10 w-10 rounded-xl bg-[#17C3E8] grid place-items-center flex-shrink-0 text-[#100210]"><Phone size={17} /></span>
            <a href={telHref} className="min-w-0 flex-1 group">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-0.5">phone</p>
              <p className="text-sm font-bold whitespace-nowrap group-hover:text-[#17C3E8] transition-colors">{PROFILE.phone}</p>
            </a>
            <CopyButton value={PROFILE.phone} label="phone" size={15} className="h-9 w-9 border border-white/15 text-[#F4F3FA] hover:bg-white/10 flex-shrink-0" />
          </div>
          {/* Location */}
          <div className="ab-card ab-flat ab-c1 flex items-center gap-3 p-4 flex-auto" data-testid="contact-location">
            <span className="h-10 w-10 rounded-xl bg-[#F2D50F] grid place-items-center flex-shrink-0 text-[#100210]"><MapPin size={17} /></span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-0.5">location</p>
              <p className="text-sm font-bold whitespace-nowrap">{PROFILE.city}</p>
            </div>
          </div>
          {/* LinkedIn */}
          <a
            href={PROFILE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin"
            className="ab-card ab-flat ab-c4 flex items-center gap-3 p-4 group flex-auto"
          >
            <span className="h-10 w-10 rounded-xl bg-[#7B2FBE] grid place-items-center flex-shrink-0 text-white"><Linkedin size={17} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-mono uppercase tracking-widest text-white mb-0.5">elsewhere</span>
              <span className="block text-sm font-bold group-hover:text-[#9B4DE0] transition-colors">LinkedIn</span>
            </span>
            <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all flex-shrink-0" />
          </a>
        </div>

        {/* Row 2 - send-a-message form (horizontal, full width) */}
        <div className="mt-8 lg:mt-10">
          <ContactForm />
        </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <Container>
        <p data-text="things I'm asked a lot" className="ab-glitch inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-4">things I'm asked a lot</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10">a few <span className="italic font-light">questions.</span></h2>
        <div className="space-y-5">
          {[
            { q: "What roles are you looking for?", a: "Full-time roles as a UX Lead or Senior Product Designer. I'm based in India and happy to work remotely, relocate anywhere, or look at the Middle East." },
            { q: "What do you do best?", a: "I take messy, complicated products and make them feel simple. I sit right between design, data, and engineering, so the thing actually ships, not just looks good in a slide." },
            { q: "Which industries have you worked in?", a: "Banking and finance, big enterprise software, data and analytics, consumer apps, and education. A little over eleven years, based in India and working with clients across several countries." },
            { q: "Are you hands-on, or mostly strategy?", a: "Both. I set the direction and I'm still in the file doing the actual pixels. I won't hand over work I couldn't build a prototype of myself." },
            { q: "Do you build design systems?", a: "Yes, it's one of my favorite parts of the job. I built a hundred-plus component system for FinVista and another for Aurora, and both teams still lean on them as their source of truth." },
            { q: "How do you work with engineers and product managers?", a: "Shoulder to shoulder, inside the sprint. I keep design, product, and engineering on the same page so nothing gets lost between the mockup and the build." },
            { q: "What are Slate, Almanac, and Crux?", a: "Product ideas I designed on my own, start to finish, to explore what software feels like when it's built around AI from day one. They're separate from my client work." },
            { q: "How do you think about AI in product design?", a: "As a helpful assistant, not a magic box. It suggests, the person decides, and it always shows where its answer came from and how sure it is. I'm also studying this formally at the Indian Institute of Technology, Madras." },
            { q: "Can I see work that isn't on the site?", a: "Honestly, no. I did most of that work on-site on my clients' own laptops, so it lives inside their offices and I never had copies to take with me. What I can show is right here, and I'm glad to walk you through how it was made." },
            { q: "What's the best way to reach you?", a: "Book a call or send me an email. I usually reply within a day on weekdays." },
          ].map((f, i) => (
            <details key={i} className="ab-card ab-flat p-6 group" data-testid={`faq-${i}`}>
              <summary className="font-display text-xl font-bold cursor-pointer flex items-center justify-between list-none">
                <span>{f.q}</span>
                {/* A ring, not a bare glyph: the plus is the affordance that says this row
                    opens, so it needs to read as a control. White for the same reason
                    every other icon on a dark surface is white. */}
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 grid place-items-center h-8 w-8 rounded-full border border-white/30 text-white text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-[#F4F3FA]">{f.a}</p>
            </details>
          ))}
        </div>
        </Container>
      </section>

    </div>
  );
}
