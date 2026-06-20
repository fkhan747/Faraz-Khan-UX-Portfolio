import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Download, Calendar } from "lucide-react";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import CopyButton from "../components/CopyButton";
import BookCallButton from "../components/BookCallButton";
import ContactForm from "../components/ContactForm";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";
const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

export default function Contact() {
  return (
    <div data-testid="contact-page">
      {/* Hero — heading left, action buttons (outline only) top-right */}
      <section className="pt-12 pb-10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">get in touch</p>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter">
          c<span className="dot-o">o</span>ntact.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#F4F3FA]">
          The fastest way to reach me is email or a call. I reply within 24 hours on weekdays.
        </p>
        </Container>
      </section>

      {/* Get-in-touch */}
      <section className="pb-16" data-testid="get-in-touch">
        <Container>
        {/* Availability banner — thin, full-width, with the actions on the right */}
        <div className="rounded-3xl dark-card text-white px-6 py-5 md:px-8 md:py-6 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-5" data-testid="available-card">
          <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-[#F5379B] blur-3xl opacity-25" />
          <p className="relative text-base md:text-lg font-bold leading-tight">Open to full-time &amp; remote opportunities.</p>
          <div className="relative flex flex-wrap gap-3 md:flex-shrink-0">
            <BookCallButton
              data-testid="schedule-call"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white font-semibold text-sm capitalize hover:bg-white hover:text-[#100210] hover:border-white transition-colors"
            >
              <Calendar size={16} /> Schedule a call
            </BookCallButton>
            <a
              href={RESUME_PATH}
              download="Faraz_Khan_Resume.pdf"
              data-testid="download-resume"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white font-semibold text-sm capitalize hover:bg-white hover:text-[#100210] hover:border-white transition-colors"
            >
              Download resume <Download size={16} />
            </a>
          </div>
        </div>

        {/* Contact cards — one row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-6">
          {/* Email */}
          <div className="flex items-center gap-3 rounded-2xl dark-card p-4 flex-auto" data-testid="contact-email">
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Mail size={17} /></span>
            <a href={`mailto:${PROFILE.email}`} className="min-w-0 flex-1 group">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5">email</p>
              <p className="text-sm font-bold whitespace-nowrap group-hover:text-[#075EFD] transition-colors">{PROFILE.email}</p>
            </a>
            <CopyButton value={PROFILE.email} label="email" size={15} className="h-9 w-9 border border-white/15 text-[#F4F3FA] hover:bg-white/10 flex-shrink-0" />
          </div>
          {/* Phone */}
          <div className="flex items-center gap-3 rounded-2xl dark-card p-4 flex-auto" data-testid="contact-phone">
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Phone size={17} /></span>
            <a href={telHref} className="min-w-0 flex-1 group">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5">phone</p>
              <p className="text-sm font-bold whitespace-nowrap group-hover:text-[#075EFD] transition-colors">{PROFILE.phone}</p>
            </a>
            <CopyButton value={PROFILE.phone} label="phone" size={15} className="h-9 w-9 border border-white/15 text-[#F4F3FA] hover:bg-white/10 flex-shrink-0" />
          </div>
          {/* Location */}
          <div className="flex items-center gap-3 rounded-2xl dark-card p-4 flex-auto" data-testid="contact-location">
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><MapPin size={17} /></span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5">location</p>
              <p className="text-sm font-bold whitespace-nowrap">{PROFILE.city}</p>
            </div>
          </div>
          {/* LinkedIn */}
          <a
            href={PROFILE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin"
            className="flex items-center gap-3 rounded-2xl dark-card p-4 hover:bg-[#075EFD] hover:text-white transition-colors group flex-auto"
          >
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Linkedin size={17} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5 group-hover:text-white/70 transition-colors">elsewhere</span>
              <span className="block text-sm font-bold">LinkedIn</span>
            </span>
            <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all flex-shrink-0" />
          </a>
        </div>

        {/* Row 2 — send-a-message form (horizontal, full width) */}
        <div className="mt-6 lg:mt-8">
          <ContactForm />
        </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">things I'm asked a lot</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10">a few <span className="italic font-light">questions.</span></h2>
        <div className="space-y-4">
          {[
            { q: "do you do logos / brand identity?", a: "Sometimes. If it's tied to a product engagement, yes. Standalone — rarely." },
            { q: "are you taking on full-time roles?", a: "Yes — open to full-time and remote roles, plus embedded retainers up to 3 days/week." },
            { q: "do you sign NDAs?", a: "Happy to. Send yours over and I'll have it back within 24 hours." },
            { q: "what's your rate?", a: "Project-based, not hourly. Most engagements land between €8k and €60k." },
          ].map((f, i) => (
            <details key={i} className="dark-card rounded-2xl p-6 group" data-testid={`faq-${i}`}>
              <summary className="font-display text-xl font-bold cursor-pointer flex items-center justify-between list-none">
                <span>{f.q}</span>
                <span className="text-[#075EFD] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-[#F4F3FA]">{f.a}</p>
            </details>
          ))}
        </div>
        </Container>
      </section>

      <footer className="py-10 border-t border-white/10">
        <Container className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A29CB4] flex-wrap gap-4">
          <span>©2025 {PROFILE.name}</span>
          <span>made with care — not with templates</span>
        </Container>
      </footer>
    </div>
  );
}
