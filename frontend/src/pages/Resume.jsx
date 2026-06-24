import { Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Award, GraduationCap, Sparkles } from "lucide-react";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import CopyButton from "../components/CopyButton";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";

const EXPERIENCE = [
  {
    role: "Senior UX Lead",
    org: "Persistent Systems",
    time: "Feb 2023 - Present",
    place: "Pune, India",
    points: [
      "Lead UX for enterprise platforms end-to-end, from wireframes to high-fidelity Figma prototypes. The focus is on clear navigation and engagement we can measure.",
      "Build and maintain scalable design systems that stay consistent across web, mobile and enterprise environments.",
      "Embed UX inside Agile delivery (JIRA, Confluence), keeping product, engineering and business aligned every sprint.",
    ],
  },
  {
    role: "Sr. Data Visualization & UX/UI Designer",
    org: "Infocepts Data & AI",
    time: "Dec 2017 - Dec 2022",
    place: "Nagpur, India",
    points: [
      "Designed dynamic, actionable dashboards that turned complex datasets into confident, data-driven decisions for global clients.",
      "Ran usability audits and experience optimization to surface pain points and lift engagement.",
      "Partnered with PMs and stakeholders to translate business goals into intuitive, real-world interfaces.",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    org: "MobiSir Technologies",
    time: "Jan 2017 - Dec 2017",
    place: "Bengaluru, India",
    points: [
      "Designed end-to-end digital products across web, mobile and social: sitemaps, flows, wireframes and interactive mockups.",
      "Applied heuristic evaluation, personas and usability testing to sharpen task flows across platforms.",
    ],
  },
  {
    role: "Senior Visualizer",
    org: "Circuit 9 Communications",
    time: "Apr 2016 - Dec 2016",
    place: "Bengaluru, India",
    points: [
      "Crafted multi-platform brand and campaign assets with consistency and impact across digital and print.",
    ],
  },
];

const EARLIER =
  "Earlier roles: Sr. UX/UI Designer at Jack of All Threads, and Graphic Designer at Jainawin Retails & Prime Advertising (2011–2016).";

const COMPETENCIES = [
  "UX Strategy & Leadership",
  "Design Thinking",
  "User Research",
  "Advanced UI/UX",
  "Data-Driven Dashboards",
  "Design Systems",
  "Cross-Platform Design",
  "Agile & Design-Ops",
  "Global / Multicultural UX",
];

const TOOLS = ["Figma", "Adobe XD", "Illustrator", "Photoshop", "InDesign", "JIRA", "Confluence", "HTML", "CSS"];

const CERTS = [
  { t: "Advanced Certificate in UI/UX with Agentic AI & Gen-AI", s: "IIT Madras · pursuing", star: true },
  { t: "AI for Designers", s: "Interaction Design Foundation" },
  { t: "Journey Mapping", s: "Interaction Design Foundation" },
];

const AWARDS = [
  { t: "Bravo Individual Award", s: "Persistent. Impact built on facts, not feelings." },
  { t: "Humanity Mindset Winner", s: "Persistent. Empathetic, inclusive, people-first design." },
];

const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

function RailCard({ icon, title, children }) {
  return (
    <div className="dark-card rounded-2xl p-6">
      <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">
        {icon} {title}
      </p>
      {children}
    </div>
  );
}

export default function Resume() {
  return (
    <div data-testid="resume-page" className="pb-10">
      {/* HEADER */}
      <section className="pt-10 md:pt-12 pb-10">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">résumé · cv</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Identity */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h1 className="font-display text-5xl md:text-6xl font-black tracking-tighter leading-[0.95]">
                Faraz Khan
              </h1>
              <p className="mt-3 text-lg md:text-xl font-semibold text-[#F5379B]">
                Senior UX Lead Bridging Design, Data &amp; Development
              </p>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-[#A29CB4] leading-relaxed">
                12+ years across enterprise software, data &amp; AI and consumer tech. I lead UX from research
                to shipped product, pairing creative craft with data-driven thinking. Now building AI-native
                experiences. Open to full-time and remote roles.
              </p>

              {/* Contact chips */}
              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 dark-card rounded-full pl-4 pr-2 py-2 border border-white/10">
                  <Mail size={15} className="text-[#075EFD]" />
                  <a href={`mailto:${PROFILE.email}`} className="font-semibold hover:text-[#F5379B] transition-colors">{PROFILE.email}</a>
                  <CopyButton value={PROFILE.email} label="email" size={13} className="h-7 w-7 border border-white/10 text-[#A29CB4] hover:bg-[#241B33]" />
                </span>
                <span className="inline-flex items-center gap-2 dark-card rounded-full pl-4 pr-2 py-2 border border-white/10">
                  <Phone size={15} className="text-[#075EFD]" />
                  <a href={telHref} className="font-semibold hover:text-[#F5379B] transition-colors">{PROFILE.phone}</a>
                  <CopyButton value={PROFILE.phone} label="phone" size={13} className="h-7 w-7 border border-white/10 text-[#A29CB4] hover:bg-[#241B33]" />
                </span>
                <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 dark-card rounded-full px-4 py-2 border border-white/10 font-semibold hover:text-[#F5379B] transition-colors">
                  <Linkedin size={15} className="text-[#075EFD]" /> LinkedIn
                </a>
                <span className="inline-flex items-center gap-2 dark-card rounded-full px-4 py-2 border border-white/10 text-[#A29CB4]">
                  <MapPin size={15} className="text-[#075EFD]" /> {PROFILE.city}
                </span>
              </div>

              {/* Actions */}
              <div className="mt-7 flex items-center gap-3 flex-wrap">
                <a
                  href={RESUME_PATH}
                  download="Faraz_Khan_Resume.pdf"
                  data-testid="resume-download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#075EFD] text-white font-semibold text-sm capitalize hover:bg-[#2E78FF] transition-colors"
                >
                  <Download size={16} /> download PDF
                </a>
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="resume-open-new-tab"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-[#F4F3FA] font-semibold text-sm capitalize hover:bg-[#261E3A] transition-colors"
                >
                  <ExternalLink size={16} /> open PDF
                </a>
              </div>
            </div>

            {/* Photo - same treatment as the home hero: fades into the page */}
            <div className="lg:col-span-4 order-1 lg:order-2 relative min-h-[320px]">
              <div className="relative h-full w-full min-h-[320px] overflow-hidden rounded-2xl lg:rounded-tl-none lg:rounded-br-none lg:rounded-bl-none lg:rounded-tr-[3rem]">
                <img
                  src="/images/faraz.jpg"
                  alt="Faraz Khan"
                  data-testid="resume-photo"
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

      {/* BODY */}
      <section className="pb-4">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Experience */}
            <div className="lg:col-span-7">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-8">experience</p>
              <ol className="relative border-l border-white/10 pl-7 space-y-9">
                {EXPERIENCE.map((e) => (
                  <li key={e.org} className="relative">
                    <span className="absolute -left-[2.1rem] top-1.5 h-3 w-3 rounded-full bg-[#F5379B] ring-4 ring-[#100210]" aria-hidden="true" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl md:text-2xl font-black">{e.role}</h3>
                      <span className="text-sm font-mono uppercase tracking-widest text-white">{e.time}</span>
                    </div>
                    <p className="text-sm font-semibold text-[#F5379B] mt-0.5">{e.org} <span className="text-[#A29CB4] font-normal">· {e.place}</span></p>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((p, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-[15px] leading-relaxed text-[#F4F3FA]/90">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F5379B] flex-shrink-0" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <p className="mt-8 pl-7 text-sm text-[#A29CB4] leading-relaxed">{EARLIER}</p>
            </div>

            {/* Rail */}
            <div className="lg:col-span-5 space-y-6">
              <RailCard icon={<Sparkles size={14} />} title="core skills">
                <div className="flex flex-wrap gap-2">
                  {COMPETENCIES.map((c) => (
                    <span key={c} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm">{c}</span>
                  ))}
                </div>
              </RailCard>

              <RailCard icon={<Sparkles size={14} />} title="tools">
                <div className="flex flex-wrap gap-2">
                  {TOOLS.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm">{t}</span>
                  ))}
                </div>
              </RailCard>

              <RailCard icon={<Sparkles size={14} />} title="certifications">
                <ul className="space-y-3">
                  {CERTS.map((c) => (
                    <li key={c.t} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0 bg-[#F5379B]" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold leading-snug">{c.t}</p>
                        <p className="text-xs text-[#A29CB4] mt-0.5">{c.s}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </RailCard>

              <RailCard icon={<Award size={14} />} title="recognition">
                <ul className="space-y-3">
                  {AWARDS.map((a) => (
                    <li key={a.t}>
                      <p className="text-sm font-semibold">{a.t}</p>
                      <p className="text-xs text-[#A29CB4] mt-0.5">{a.s}</p>
                    </li>
                  ))}
                </ul>
              </RailCard>

              <RailCard icon={<GraduationCap size={14} />} title="education">
                <p className="text-sm font-semibold">B.Sc. Multimedia</p>
                <p className="text-xs text-[#A29CB4] mt-0.5">Vishwakarma Creative-i College, Pune · 2008–2011</p>
              </RailCard>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer note */}
      <section className="pt-10">
        <Container>
          <div className="border-t border-white/10 pt-8 flex items-center justify-between gap-4 flex-wrap text-xs font-mono uppercase tracking-widest text-white">
            <span>résumé · faraz khan · updated 2026</span>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:text-[#F5379B] transition-colors normal-case tracking-normal">
              <Mail size={14} /> {PROFILE.email}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
