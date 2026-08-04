import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { concepts } from "../data/content";
import { Container } from "../components/Grid";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";

/*
 * AI LAB, rebuilt 2026-08-04 after the Field Guide and Agent Era pages landed.
 *
 * VISUAL LANGUAGE: it borrows the palette those two static pages established
 * (icy blue #2E7CD6, sakura pink #E86FA4, white glass on a cool wash) so the
 * hub and the artefacts it links to read as one family. Clicking from here
 * into /patterns/ should feel like the same place, not a different website.
 *
 * ORDER, which is a judgement call and easy to change: the Field Guide leads.
 * Twelve working demos and a stated point of view on AI trust is the strongest
 * and most shareable thing in the track. The agentic audit tool follows, then
 * Agent Era, then the two product concepts. Slate and Crux keep their "no
 * users tested, no outcomes claimed" framing and do not open the page.
 *
 * The two links out to /patterns/ and /agent-era/ are plain <a>, not router
 * <Link>. They are real files under public/, so they need a full page load;
 * a router link would try to resolve them as SPA routes and 404.
 *
 * Applied from the ui-ux-pro-max rule set: 4.5:1 minimum text contrast, a
 * visible focus ring on every interactive element, 44px minimum target height,
 * 150-300ms transitions on transform/opacity only, one primary action per
 * card, no emoji as icons, prefers-reduced-motion honoured.
 */

const LAB_CSS = `
  .lab{
    --lab-ink:#23272E; --lab-muted:#5B6470; --lab-line:rgba(35,39,46,.12);
    --lab-blue:#1B5FB3; --lab-blue-lit:#2E7CD6; --lab-pink:#C2497B;
    --lab-glass:rgba(255,255,255,.66); --lab-glass-hi:rgba(255,255,255,.88);
    position:relative; isolation:isolate; color:var(--lab-ink);
  }
  /* Cool wash behind everything. Fixed and pointer-events:none so it never
     repaints on scroll and never eats a click. */
  .lab-field{
    position:absolute; inset:0; z-index:-1; pointer-events:none; overflow:hidden;
    background:
      radial-gradient(60vw 50vw at 12% 0%, rgba(46,124,214,.16), transparent 62%),
      radial-gradient(48vw 44vw at 92% 14%, rgba(232,111,164,.14), transparent 66%),
      radial-gradient(50vw 40vw at 50% 100%, rgba(156,198,240,.18), transparent 68%);
  }

  .lab-eyebrow{
    font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:600;
    text-transform:uppercase; letter-spacing:.22em; color:var(--lab-blue);
  }
  .lab-h1{
    font-family:'Playfair Display',serif; font-weight:700;
    font-size:clamp(2.8rem,7vw,5.2rem); line-height:.98; letter-spacing:-.035em;
    color:var(--lab-ink); margin:14px 0 0;
  }
  .lab-h1 em{
    font-style:normal;
    background:linear-gradient(96deg, var(--lab-blue-lit), var(--lab-pink));
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .lab-lede{ font-size:clamp(1rem,1.5vw,1.2rem); line-height:1.62; color:var(--lab-ink);
    max-width:60ch; margin:22px 0 0; }

  /* Glass card. One shared surface so every tile on the page matches. */
  .lab-card{
    position:relative; display:block; border-radius:22px; padding:30px 28px;
    background:var(--lab-glass); border:1px solid rgba(255,255,255,.75);
    box-shadow:0 18px 44px -26px rgba(27,95,179,.34), inset 0 1px 0 rgba(255,255,255,.9);
    text-decoration:none; color:inherit;
    transition:transform .22s cubic-bezier(.16,1,.3,1), box-shadow .22s cubic-bezier(.16,1,.3,1),
               background-color .22s ease-out;
  }
  .lab-card:focus-visible{ outline:2px solid var(--lab-blue); outline-offset:3px; }
  @media (hover:hover) and (pointer:fine){
    .lab-card:hover{ transform:translateY(-3px); background:var(--lab-glass-hi);
      box-shadow:0 26px 60px -28px rgba(27,95,179,.42), inset 0 1px 0 rgba(255,255,255,.95); }
  }
  .lab-card-lead{ padding:34px 32px; }

  .lab-tag{
    display:inline-flex; align-items:center; gap:7px; padding:6px 13px; border-radius:9999px;
    background:rgba(255,255,255,.8); border:1px solid var(--lab-line);
    font-family:'JetBrains Mono',monospace; font-size:10.5px; font-weight:600;
    text-transform:uppercase; letter-spacing:.16em; color:var(--lab-muted);
  }
  .lab-dot{ width:6px; height:6px; border-radius:9999px; background:var(--lab-blue-lit); flex:0 0 auto; }
  .lab-dot-pink{ background:var(--lab-pink); }

  .lab-card-h{ font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.02em;
    color:var(--lab-ink); margin:16px 0 0; }
  .lab-card-lead .lab-card-h{ font-size:clamp(1.6rem,3vw,2.4rem); line-height:1.08; }
  .lab-card .lab-card-h{ font-size:1.3rem; line-height:1.2; }
  .lab-card-p{ font-size:15.5px; line-height:1.62; color:var(--lab-muted); margin:12px 0 0; max-width:56ch; }

  /* Minimum 44px target height, per the touch-target rule. */
  .lab-go{
    display:inline-flex; align-items:center; gap:8px; min-height:44px; margin-top:22px;
    font-family:'Outfit',sans-serif; font-weight:700; font-size:15px; color:var(--lab-blue);
  }
  .lab-card:hover .lab-go{ color:var(--lab-pink); }

  .lab-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:20px; }
  @media (max-width:1000px){ .lab-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:620px){ .lab-grid{ grid-template-columns:1fr; } }
  .lab-grid-2{ display:grid; grid-template-columns:repeat(2,1fr); gap:20px; margin-top:20px; }
  @media (max-width:820px){ .lab-grid-2{ grid-template-columns:1fr; } }

  .lab-sec-h{ font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.028em;
    font-size:clamp(1.7rem,3.4vw,2.6rem); line-height:1.06; margin:0; color:var(--lab-ink); }
  .lab-sec-p{ font-size:16px; line-height:1.62; color:var(--lab-muted); max-width:62ch; margin:12px 0 0; }

  /* The audit mini-panel inside the lead card. */
  .lab-panel{ border-radius:16px; padding:16px; background:rgba(255,255,255,.72);
    border:1px solid var(--lab-line); }
  .lab-panel-row{ display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
  .lab-mono{ font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.14em;
    text-transform:uppercase; color:var(--lab-muted); }
  .lab-checks{ display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .lab-check{ display:flex; align-items:center; gap:8px; border-radius:10px; padding:7px 10px;
    background:rgba(255,255,255,.9); border:1px solid var(--lab-line); font-size:12px; color:var(--lab-ink); }

  .lab-tools{ border-radius:22px; padding:28px; background:var(--lab-glass);
    border:1px solid rgba(255,255,255,.75); box-shadow:inset 0 1px 0 rgba(255,255,255,.9); }
  .lab-tools-list{ font-family:'JetBrains Mono',monospace; font-size:15px; line-height:1.9;
    color:var(--lab-ink); margin:10px 0 0; }
  .lab-tools-note{ font-size:14.5px; line-height:1.6; color:var(--lab-muted); margin:14px 0 0; max-width:62ch; }

  /* Fills the column. It is a note card, and stopping the text mid-page with
     empty space to the right of it reads as a mistake. */
  .lab-honesty{
    border-left:3px solid var(--lab-pink); border-radius:0 14px 14px 0; padding:16px 22px;
    background:rgba(255,255,255,.6); font-size:14.5px; line-height:1.6; color:var(--lab-muted);
    margin-top:26px;
  }

  @media (prefers-reduced-motion: reduce){
    .lab-card{ transition:none !important; }
    .lab-card:hover{ transform:none !important; }
  }
`;

const AGENT_CHECKS = ["Accessibility", "Content & voice", "Visual hierarchy", "IA & nav", "Performance", "Mobile"];

const TOOLS = ["Claude Code", "Claude", "ChatGPT", "Codex", "VS Code", "GitHub", "Figma"];

export default function AiLab() {
  const live = concepts.filter((c) => c.live !== false);

  return (
    <div className="lab" data-testid="ai-lab-page">
      <style>{LAB_CSS}</style>
      <div className="lab-field" aria-hidden="true" />
      <Seo
        title="AI Lab"
        description="Faraz Khan's self-initiated AI work: a field guide of twelve trust patterns with live demos, a working multi-agent audit tool, an operable agent-supervision concept, and two AI-native product prototypes."
      />

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <section className="pt-14 pb-10">
        <Container>
          <Reveal>
            <p className="lab-eyebrow">Self-initiated · AI-native</p>
            <h1 className="lab-h1">
              AI Lab<em>.</em>
            </h1>
            <p className="lab-lede">
              Client work is where I ship. This is where I find out what AI-native actually feels
              like: a field guide of trust patterns you can click through, a multi-agent tool that
              audits real websites, and product concepts built as working prototypes rather than
              slides.
            </p>
            <div className="lab-honesty">
              Everything here is labelled for what it is. Shipped work says shipped, prototypes say
              prototype, and there are no invented numbers on any of these pages.
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── LEAD: THE FIELD GUIDE ──────────────────────────────────── */}
      <section className="pb-6" data-testid="ai-lab-guide">
        <Container>
          <Reveal>
            <a href="/patterns/" className="lab-card lab-card-lead" data-testid="ai-lab-guide-link">
              <span className="lab-tag"><span className="lab-dot" /> 12 patterns · every one a live demo</span>
              <h2 className="lab-card-h">
                Twelve ways to make AI feel trustworthy, not just impressive.
              </h2>
              <p className="lab-card-p">
                The interface patterns I keep reaching for when an AI has to earn a person&apos;s
                trust: confidence with receipts, intent preview, the autonomy dial, an audit trail
                you can read. Each one runs live on the page, and each says where I actually built
                it.
              </p>
              <span className="lab-go">
                Open the Field Guide <ArrowUpRight size={17} strokeWidth={2.2} />
              </span>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ── THE TWO BUILT THINGS ───────────────────────────────────── */}
      <section className="pb-6">
        <Container>
          <div className="lab-grid-2">
            <Reveal>
              <Link to="/agentic-workflow" className="lab-card h-full" data-testid="ai-lab-demo-link">
                <span className="lab-tag"><span className="lab-dot" /> Working tool</span>
                <h2 className="lab-card-h">Point a swarm of agents at any website.</h2>
                <p className="lab-card-p">
                  Specialist agents fan out in parallel, adversarially verify every finding, then
                  synthesize one prioritized report. I designed the orchestration, the verification
                  pass and the human-in-the-loop review, and built it.
                </p>
                <div className="lab-panel mt-6">
                  <div className="lab-panel-row">
                    <span className="lab-mono">audit · acme.com</span>
                    <span className="lab-mono" style={{ color: "#0F6B41" }}>12 confirmed</span>
                  </div>
                  <div className="lab-checks">
                    {AGENT_CHECKS.map((a) => (
                      <span className="lab-check" key={a}>
                        <Check size={12} strokeWidth={2.6} style={{ color: "#178A55", flex: "0 0 auto" }} />
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="lab-mono mt-3 flex items-center gap-2">
                    <ShieldCheck size={13} strokeWidth={2.2} style={{ color: "#2E7CD6" }} /> verified · 1 report
                  </div>
                </div>
                <span className="lab-go">
                  Try the live demo <ArrowRight size={17} strokeWidth={2.2} />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.06}>
              <a href="/agent-era/" className="lab-card h-full" data-testid="ai-lab-agentera-link">
                <span className="lab-tag"><span className="lab-dot lab-dot-pink" /> Concept · operable</span>
                <h2 className="lab-card-h">FinVista, Agent Era.</h2>
                <p className="lab-card-p">
                  I designed a lending desk where executives run the journey by hand. This asks the
                  obvious next question: what does that desk look like when agents do the
                  processing and the executive&apos;s job becomes judgment? Run a morning shift
                  yourself, including the escalation you are forced to handle.
                </p>
                <p className="lab-card-p" style={{ color: "#A83566" }}>
                  The shipped numbers are real. The agent era is a concept, and no bank has
                  deployed it.
                </p>
                <span className="lab-go">
                  Operate the Loan Desk <ArrowUpRight size={17} strokeWidth={2.2} />
                </span>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── SUPPORTING: THE TWO CONCEPTS ───────────────────────────── */}
      <section className="pt-12 pb-6" data-testid="ai-lab-concepts">
        <Container>
          <Reveal>
            <p className="lab-eyebrow">Product concepts</p>
            <h2 className="lab-sec-h mt-3">Designed end to end, then built to click through.</h2>
            <p className="lab-sec-p">
              Both are self-initiated and reconstructed from secondary research. No users were
              tested and no outcomes are claimed. What they show is how I think an AI-native product
              should behave when a person still has to stay accountable for the decision.
            </p>
          </Reveal>
          <div className="lab-grid-2">
            {live.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link to={c.href} className="lab-card h-full" data-testid={`ai-lab-concept-${c.slug}`}>
                  <span className="lab-tag"><span className="lab-dot lab-dot-pink" /> {c.status}</span>
                  <h3 className="lab-card-h">{c.title}</h3>
                  <p className="lab-card-p">{c.blurb || c.summary}</p>
                  <span className="lab-go">
                    Read the case study <ArrowRight size={17} strokeWidth={2.2} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BUILT WITH ─────────────────────────────────────────────── */}
      <section className="pt-10 pb-24" data-testid="ai-lab-tools">
        <Container>
          <Reveal className="lab-tools">
            <p className="lab-eyebrow">Built with</p>
            <p className="lab-tools-list">{TOOLS.join("  ·  ")}</p>
            <p className="lab-tools-note">
              The prototypes are real front-ends, not clickable mockups, so the interaction details
              I care about are things you can try rather than things I describe. I direct the work
              and review every output; the AI does the typing.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
