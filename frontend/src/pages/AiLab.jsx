import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { concepts } from "../data/content";
import { Container, Grid } from "../components/Grid";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { NEON_CSS as AB_CSS, Squiggle as AbSquiggle } from "../components/neonStyle";

/*
 * AI LAB. Was a section at the bottom of /projects called "what I can do with
 * AI", below four case-study cards, so most visitors never scrolled to it.
 *
 * ORDER IS DELIBERATE: the agentic audit workflow leads, because it is a
 * working multi-agent system rather than a concept. Slate and Crux sit under
 * it as supporting exhibits. They are reconstructed from secondary research
 * and claim no users or outcomes, so they should not open the page.
 *
 * The tools line is text, not a logo wall. Faraz wants the stack named because
 * interviewers ask what he built it with; a row of vendor logos would say he
 * has accounts, which is not the point of this page.
 */

const AGENTS = ["Accessibility", "Content & voice", "Visual hierarchy", "IA & nav", "Performance", "Mobile"];

const TOOLS = [
  "Claude Code", "Claude", "ChatGPT", "Codex", "VS Code", "GitHub", "Figma",
];

export default function AiLab() {
  const live = concepts.filter((c) => c.live !== false);

  return (
    <div data-testid="ai-lab-page">
      <style>{AB_CSS}</style>
      <Seo
        title="AI Lab"
        description="Self-initiated AI work by Faraz Khan: a live multi-agent UX audit workflow you can point at any website, plus two AI-native product concepts built as working prototypes."
      />

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <section className="pt-12 pb-10 relative overflow-hidden">
        <AbSquiggle className="ab-sq-1" color="#F0186C" rot={-32} />
        <Container>
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-6">
              <Sparkles size={13} /> self-initiated · ai-native
            </p>
            <h1 className="font-display font-black leading-[0.95] text-[13vw] md:text-[7vw] lg:text-[6rem] tracking-tighter">
              AI Lab.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA]">
              Away from client work, I build to find out what AI-native actually feels like. One
              working multi-agent tool you can point at any website, and two products designed end
              to end as interactive prototypes.
            </p>
          </div>
        </Container>
      </section>

      {/* ── THE BUILT THING, FIRST ─────────────────────────────────── */}
      <section className="pb-20" data-testid="ai-lab-demo">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-6">
            built and running
          </p>
          <Link
            to="/agentic-workflow"
            data-testid="ai-lab-demo-link"
            className="group ab-card ab-flat ab-c2 block relative overflow-hidden p-7 md:p-9 lg:p-10"
          >
            <div className="ab-glow absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#7B2FBE] blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
            <div className="ab-glow absolute -bottom-20 left-1/4 w-56 h-56 rounded-full bg-[#F0186C] blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black leading-[1.03] tracking-tight text-[#F7F5FF] case-keep">
                  Point a swarm of AI agents at any website.
                </h2>
                <p className="mt-4 max-w-xl text-sm md:text-base text-[#A29CB4] leading-relaxed">
                  Specialist agents fan out in parallel, adversarially verify every finding, then
                  synthesize one prioritized report. I designed the orchestration, the verification
                  pass and the human-in-the-loop review, and built it.
                </p>
                <div className="mt-7">
                  <span className="ab-btn">
                    Try the Live Demo <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              <div className="rounded-2xl p-4 md:p-5 bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">audit · acme.com</span>
                  <span className="text-[10px] font-mono text-[#21BA45]">12 confirmed</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {AGENTS.map((a) => (
                    <div key={a} className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 bg-white/[0.04]">
                      <Check size={11} className="text-[#21BA45] flex-shrink-0" />
                      <span className="text-[11px] text-[#F4F3FA]/85 truncate case-keep">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[#A29CB4]">
                  <ShieldCheck size={12} className="text-[#17C3E8]" /> verified, 1 prioritized report
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* ── CONCEPTS, AS SUPPORTING EXHIBITS ───────────────────────── */}
      <section className="pb-20" data-testid="ai-lab-concepts">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-6">
            product concepts
          </p>
          <h2 className="font-display font-black leading-[0.95] text-3xl md:text-5xl tracking-tighter mb-4">
            Designed end to end, then built to click through.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-[#A29CB4] mb-10">
            Both are self-initiated and reconstructed from secondary research. No users were tested
            and no outcomes are claimed; what they show is how I think an AI-native product should
            behave when a person still has to stay accountable for the decision.
          </p>

          <Grid>
            {live.map((c) => (
              <div key={c.slug} className="relative col-span-12 md:col-span-6 h-full">
                <Link
                  to={c.href}
                  data-testid={`ai-lab-concept-${c.slug}`}
                  className="group ab-card ab-flat ab-c1 relative flex flex-col h-full min-h-[360px] overflow-hidden bg-[#15101F]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={c.coverImg}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/55 border border-white/15 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white">
                      {c.status}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-2xl font-black text-[#F7F5FF] case-keep">{c.title}</h3>
                    <p className="mt-1 text-sm text-[#F0186C]">{c.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#A29CB4] flex-1">{c.blurb || c.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F4F3FA]">
                      Read the case study <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* ── WHAT IT WAS BUILT WITH ─────────────────────────────────── */}
      <section className="pb-24" data-testid="ai-lab-tools">
        <Container>
          <Reveal className="ab-card ab-flat p-7 md:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0186C] mb-3">
              built with
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#F4F3FA]">
              {TOOLS.join(" · ")}
            </p>
            <p className="mt-3 text-sm text-[#A29CB4] max-w-2xl">
              The prototypes are real front-ends, not clickable mockups, so the interaction details
              I care about are things you can actually try rather than describe.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
