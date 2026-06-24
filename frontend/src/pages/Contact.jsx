import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Download, Calendar } from "lucide-react";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import CopyButton from "../components/CopyButton";
import BookCallButton from "../components/BookCallButton";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";
const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <Seo title="Get in Touch" description="Get in touch with Faraz Khan, Senior UX Lead. Book a call, send a message, or reach out by email." />
      {/* Hero - heading left, action buttons (outline only) top-right */}
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
        {/* Availability banner - thin, full-width, with the actions on the right */}
        <div
          className="rounded-3xl border-2 border-white text-white px-6 py-5 md:px-8 md:py-6 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          style={{ background: "linear-gradient(110deg, #C32E7E 0%, #6E2B7A 30%, #2A1E6B 60%, #131A5C 100%)" }}
          data-testid="available-card"
        >
          <p className="relative text-lg md:text-xl font-bold leading-tight">Open to full-time &amp; remote opportunities.</p>
          <div className="relative flex flex-wrap gap-3 md:flex-shrink-0">
            <BookCallButton
              data-testid="schedule-call"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#C71E73] font-semibold text-sm capitalize hover:bg-white/90 transition-colors"
            >
              <Calendar size={16} /> Schedule a call
            </BookCallButton>
            <a
              href={RESUME_PATH}
              download="Faraz_Khan_Resume.pdf"
              data-testid="download-resume"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#C71E73] font-semibold text-sm capitalize hover:bg-white/90 transition-colors"
            >
              Download resume <Download size={16} />
            </a>
          </div>
        </div>

        {/* Contact cards - one row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-6">
          {/* Email */}
          <div className="flex items-center gap-3 rounded-2xl dark-card p-4 flex-auto" data-testid="contact-email">
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Mail size={17} /></span>
            <a href={`mailto:${PROFILE.email}`} className="min-w-0 flex-1 group">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-0.5">email</p>
              <p className="text-sm font-bold whitespace-nowrap group-hover:text-[#5B9BFF] transition-colors">{PROFILE.email}</p>
            </a>
            <CopyButton value={PROFILE.email} label="email" size={15} className="h-9 w-9 border border-white/15 text-[#F4F3FA] hover:bg-white/10 flex-shrink-0" />
          </div>
          {/* Phone */}
          <div className="flex items-center gap-3 rounded-2xl dark-card p-4 flex-auto" data-testid="contact-phone">
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Phone size={17} /></span>
            <a href={telHref} className="min-w-0 flex-1 group">
              <p className="text-sm font-mono uppercase tracking-widest text-white mb-0.5">phone</p>
              <p className="text-sm font-bold whitespace-nowrap group-hover:text-[#5B9BFF] transition-colors">{PROFILE.phone}</p>
            </a>
            <CopyButton value={PROFILE.phone} label="phone" size={15} className="h-9 w-9 border border-white/15 text-[#F4F3FA] hover:bg-white/10 flex-shrink-0" />
          </div>
          {/* Location */}
          <div className="flex items-center gap-3 rounded-2xl dark-card p-4 flex-auto" data-testid="contact-location">
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><MapPin size={17} /></span>
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
            className="flex items-center gap-3 rounded-2xl dark-card p-4 hover:bg-[#075EFD] hover:text-white transition-colors group flex-auto"
          >
            <span className="h-10 w-10 rounded-xl bg-[#075EFD] grid place-items-center flex-shrink-0 text-white"><Linkedin size={17} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-mono uppercase tracking-widest text-white mb-0.5 group-hover:text-white/70 transition-colors">elsewhere</span>
              <span className="block text-sm font-bold">LinkedIn</span>
            </span>
            <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all flex-shrink-0" />
          </a>
        </div>

        {/* Row 2 - send-a-message form (horizontal, full width) */}
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
            { q: "What roles are you looking for?", a: "Full-time roles as a UX Lead or Senior Product Designer. I'm based in India and happy to work remotely, relocate anywhere, or look at the Middle East." },
            { q: "What do you do best?", a: "I take messy, complicated products and make them feel simple. I sit right between design, data, and engineering, so the thing actually ships, not just looks good in a slide." },
            { q: "Which industries have you worked in?", a: "Banking and finance, big enterprise software, data and analytics, consumer apps, and education. A little over twelve years, across a few different countries." },
            { q: "Are you hands-on, or mostly strategy?", a: "Both. I set the direction and I'm still in the file doing the actual pixels. I won't hand over work I couldn't build a prototype of myself." },
            { q: "Do you build design systems?", a: "Yes, it's one of my favourite parts of the job. I built a hundred-plus component system for FinVista and another for Aurora, and both teams still lean on them as their source of truth." },
            { q: "How do you work with engineers and product managers?", a: "Shoulder to shoulder, inside the sprint. I keep design, product, and engineering on the same page so nothing gets lost between the mockup and the build." },
            { q: "What are Slate, Almanac, and Crux?", a: "Product ideas I designed on my own, start to finish, to explore what software feels like when it's built around AI from day one. They're separate from my client work." },
            { q: "How do you think about AI in product design?", a: "As a helpful assistant, not a magic box. It suggests, the person decides, and it always shows where its answer came from and how sure it is. I'm also studying this formally at the Indian Institute of Technology, Madras." },
            { q: "Can I see work that isn't on the site?", a: "Honestly, no. I did most of that work on-site on my clients' own laptops, so it lives inside their offices and I never had copies to take with me. What I can show is right here, and I'm glad to walk you through how it was made." },
            { q: "What's the best way to reach you?", a: "Book a call or send me an email. I usually reply within a day on weekdays." },
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

    </div>
  );
}
