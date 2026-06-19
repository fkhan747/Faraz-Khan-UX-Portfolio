import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import CopyButton from "../components/CopyButton";
import BookCallButton from "../components/BookCallButton";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";
const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

export default function Contact() {
  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="pt-12 pb-10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-6">get in touch</p>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter">
          c<span className="dot-o">o</span>ntact.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA]">
          The fastest way to reach me is email or a call. I reply within 24 hours on weekdays.
        </p>
        </Container>
      </section>

      {/* Get-in-touch panel */}
      <section className="pb-16" data-testid="get-in-touch">
        <Container>
        <div className="max-w-3xl">
          {/* AVAILABLE FOR WORK — moved to the top, above email */}
          <div className="rounded-3xl dark-card text-white p-7 md:p-9 relative overflow-hidden mb-10" data-testid="available-card">
            <div className="pointer-events-none absolute -bottom-16 -right-10 w-72 h-72 rounded-full bg-[#F5379B] blur-3xl opacity-30" />
            <p className="relative inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5379B] animate-pulse" /> available for work
            </p>
            <p className="relative text-2xl md:text-3xl font-bold leading-tight mb-6 max-w-xl">
              Open to full time and remote opportunities.
            </p>
            <div className="relative flex flex-wrap gap-2">
              {["Full-time", "Remote"].map((t) => (
                <span key={t} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* DIRECT */}
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A29CB4] mb-4">direct</p>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 rounded-2xl dark-card p-5" data-testid="contact-email">
              <span className="h-11 w-11 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Mail size={18} /></span>
              <a href={`mailto:${PROFILE.email}`} className="min-w-0 flex-1 group">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5">email</p>
                <p className="text-lg md:text-xl font-bold break-all group-hover:text-[#075EFD] transition-colors">{PROFILE.email}</p>
              </a>
              <CopyButton value={PROFILE.email} label="email" size={16} className="h-10 w-10 border border-white/15 text-[#F4F3FA] hover:bg-white/10" />
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4 rounded-2xl dark-card p-5" data-testid="contact-phone">
              <span className="h-11 w-11 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Phone size={18} /></span>
              <a href={telHref} className="min-w-0 flex-1 group">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5">phone</p>
                <p className="text-lg md:text-xl font-bold group-hover:text-[#075EFD] transition-colors">{PROFILE.phone}</p>
              </a>
              <CopyButton value={PROFILE.phone} label="phone" size={16} className="h-10 w-10 border border-white/15 text-[#F4F3FA] hover:bg-white/10" />
            </div>
            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl dark-card p-5" data-testid="contact-location">
              <span className="h-11 w-11 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><MapPin size={18} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-0.5">location</p>
                <p className="text-lg md:text-xl font-bold">{PROFILE.city}</p>
              </div>
            </div>
          </div>

          {/* ELSEWHERE — LinkedIn only */}
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A29CB4] mt-10 mb-4">elsewhere</p>
          <a
            href={PROFILE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin"
            className="flex items-center gap-4 rounded-2xl dark-card p-5 hover:bg-[#075EFD] hover:text-white transition-colors group"
          >
            <span className="h-11 w-11 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Linkedin size={18} /></span>
            <span className="flex-1 text-lg md:text-xl font-bold">LinkedIn</span>
            <ArrowUpRight size={20} className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
          </a>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <BookCallButton
              data-testid="schedule-call"
              className="flex-1 inline-flex items-center justify-between gap-2 px-7 py-4 rounded-full bg-[#075EFD] text-white font-semibold text-sm capitalize hover:bg-[#2E78FF] transition-colors"
            >
              Schedule a call <ArrowUpRight size={16} />
            </BookCallButton>
            <a
              href={RESUME_PATH}
              download="Faraz_Khan_Resume.pdf"
              data-testid="download-resume"
              className="flex-1 inline-flex items-center justify-between gap-2 px-7 py-4 rounded-full border border-white/15 text-[#F4F3FA] font-semibold text-sm capitalize hover:bg-[#261E3A] transition-colors"
            >
              Download resume <Download size={16} />
            </a>
          </div>
        </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#075EFD] mb-4">things I'm asked a lot</p>
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
