import { services, PROFILE } from "../data/content";
import { Calendar } from "lucide-react";
import { Container, Grid } from "../components/Grid";

const PROCESS = [
  { step: "01", title: "discovery", desc: "We talk. I read everything you've shipped. We agree on what success looks like before we draw anything." },
  { step: "02", title: "research", desc: "Interviews, audits, competitive teardowns. Boring on the surface, the most important week." },
  { step: "03", title: "design", desc: "Rapid concepts → critique → refinement. You're in the file with me, not waiting for reveals." },
  { step: "04", title: "ship & iterate", desc: "I stay through launch and the messy weeks after. Real users always find what we missed." },
];

const PACKAGES = [
  { name: "sprint", duration: "2 weeks", desc: "A focused engagement: audit, redesign one flow, ship.", price: "from €8k" },
  { name: "project", duration: "6—12 weeks", desc: "End-to-end product or feature design, including research.", price: "from €28k" },
  { name: "embedded", duration: "3—6 months", desc: "I join your team part-time. Best for design-led founding teams.", price: "monthly retainer" },
];

export default function Services() {
  return (
    <div data-testid="services-page">
      <section className="pt-12 pb-10">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">how we work together</p>
        <h1 className="font-display font-black leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] tracking-tighter ">
          servic<span className="dot-o">e</span>s.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA]">
          I take on three engagements a year. Here's what one looks like, end to end.
        </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
        <Grid>
        {services.map((s, i) => (
          <div key={s.title} className="col-span-12 md:col-span-6 dark-card rounded-3xl p-8 hover:bg-[#D81F7E] transition-colors group" data-testid={`services-item-${i}`}>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A29CB4]">0{i + 1}</span>
              <span className="w-2 h-2 rounded-full bg-[#075EFD] group-hover:scale-150 transition-transform" />
            </div>
            <h3 className="font-display text-3xl font-black mb-3">{s.title}</h3>
            <p className="text-base leading-relaxed">{s.desc}</p>
          </div>
        ))}
        </Grid>
        </Container>
      </section>

      <section className="py-20 border-t border-white/10" data-testid="process-section">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">my process</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-12 max-w-3xl">a simple, <span className="italic font-light">honest</span> way to ship.</h2>
        <Grid>
          {PROCESS.map((p) => (
            <div key={p.step} className="col-span-12 md:col-span-6 border-t-2 border-white/10 pt-6">
              <div className="num text-6xl font-black text-[#075EFD] mb-3">{p.step}</div>
              <h3 className="font-display text-2xl font-black mb-2">{p.title}</h3>
              <p className="text-base leading-relaxed text-[#F4F3FA]">{p.desc}</p>
            </div>
          ))}
        </Grid>
        </Container>
      </section>

      <section className="py-20 border-t border-white/10" data-testid="packages-section">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">engagements</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-10">three ways to <span className="italic font-light">begin.</span></h2>
        <Grid>
          {PACKAGES.map((p, i) => (
            <div key={p.name} className={`col-span-12 md:col-span-4 rounded-3xl p-8 ${i === 1 ? "bg-[#075EFD] text-white" : "dark-card"}`} data-testid={`package-${p.name}`}>
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-mono uppercase tracking-widest ${i === 1 ? "text-white" : "text-[#A29CB4]"}`}>{p.duration}</span>
                {i === 1 && <span className="text-[10px] font-mono uppercase tracking-widest bg-[#F5379B] text-black px-3 py-1 rounded-full">most chosen</span>}
              </div>
              <h3 className="font-display text-3xl font-black mb-3">{p.name}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? "text-white/90" : ""}`}>{p.desc}</p>
              <p className={`font-display text-2xl font-black ${i === 1 ? "text-white" : "text-[#075EFD]"}`}>{p.price}</p>
            </div>
          ))}
        </Grid>
        </Container>
      </section>

      <section className="py-24">
        <Container>
        <div className="rounded-3xl dark-card text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-[#F5379B] blur-3xl opacity-30" />
          <h2 className="relative font-display text-4xl md:text-6xl font-black leading-tight max-w-3xl">
            two slots <span className="italic font-light text-white">open</span> for q1.
          </h2>
          <a href={`mailto:${PROFILE.email}`} data-testid="services-cta" className="relative mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F5379B] text-white font-semibold text-sm hover:bg-[#D81F7E] transition-colors">
            <Calendar size={16} /> book a 30-min call
          </a>
        </div>
        </Container>
      </section>
    </div>
  );
}
