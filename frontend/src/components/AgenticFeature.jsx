import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "./Grid";

/* Featured capability band linking to the agentic-audit live demo.
   Used on the home page (compact, above the case studies) and on My Work
   (full, above the case studies). Self-contained: renders its own section.
   Pass `compact` to shrink the band so the section below peeks into view. */

const AGENTS = ["Accessibility", "Content & voice", "Visual hierarchy", "IA & nav", "Performance", "Mobile", "Conversion"];

export default function AgenticFeature({ className = "", compact = false }) {
  const pad = compact ? "p-6 md:p-7 lg:p-8" : "p-8 md:p-10 lg:p-12";
  const headSize = compact ? "text-2xl md:text-3xl lg:text-[2.15rem]" : "text-3xl md:text-4xl lg:text-[2.9rem]";
  const subMt = compact ? "mt-3" : "mt-5";
  const ctaMt = compact ? "mt-5" : "mt-7";
  const innerGap = compact ? "gap-6 lg:gap-10" : "gap-8 lg:gap-12";
  const panelPad = compact ? "p-4" : "p-5";

  return (
    <section className={className} data-testid="agentic-feature">
      <Container>
        <div className={`flex items-baseline justify-between ${compact ? "mb-4" : "mb-6"}`}>
          <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B]">
            <Sparkles size={13} /> featured · interactive demo
          </span>
        </div>

        <Link to="/agentic-workflow" data-testid="agentic-feature-link" className="group block">
          <div className={`relative overflow-hidden rounded-3xl dark-card ${pad} lift`}>
            <div className="absolute -top-16 -right-10 w-80 h-80 rounded-full bg-[#075EFD] blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-[#F5379B] blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />

            <div className={`relative grid lg:grid-cols-2 ${innerGap} items-center`}>
              {/* copy */}
              <div>
                <h3 className={`font-display ${headSize} font-black leading-[0.98] tracking-tight text-[#F7F5FF]`}>
                  Point a swarm of AI agents at any website.
                </h3>
                <p className={`${subMt} max-w-lg text-base md:text-lg text-[#A29CB4] leading-relaxed`}>
                  A live demo of an agentic audit workflow I designed. Specialist agents fan out in parallel, adversarially verify every finding, then synthesize one prioritized report.
                </p>
                <span className={`${ctaMt} inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5379B] text-white text-sm font-semibold group-hover:scale-[1.03] transition-transform`}>
                  Try the live demo <ArrowRight size={16} />
                </span>
              </div>

              {/* mini audit panel — visual hint, static */}
              <div className="hidden lg:block">
                <div className={`rounded-2xl ${panelPad}`} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">audit · acme.com</span>
                    <span className="text-[10px] font-mono text-[#21BA45]">12 confirmed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {AGENTS.map((a) => (
                      <div key={a} className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <Check size={11} className="text-[#21BA45] flex-shrink-0" />
                        <span className="text-[11px] text-[#F4F3FA]/85 truncate">{a}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[#A29CB4]">
                    <ShieldCheck size={12} className="text-[#075EFD]" /> verified → 1 prioritized report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
