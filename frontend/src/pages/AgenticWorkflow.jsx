import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Cpu, Check, ShieldCheck, GitBranch, UserCheck, Globe, Lock } from "lucide-react";
import Seo from "../components/Seo";
import { Container } from "../components/Grid";

/* "Point a swarm of agents at any URL" — a designed demonstration of an agentic
   audit workflow. The orchestration (parallel fan-out -> adversarial verify ->
   synthesize) is real design thinking; the findings are illustrative, generated
   client-side so each run feels live. Custom URLs are gated by an access code so
   only people Faraz shares it with can run their own; anyone can watch a sample. */

const PINK = "#F5379B", BLUE = "#075EFD";

// Change this to whatever you want to hand to "select people".
const ACCESS_CODE = "faraz-2026";
const SAMPLE_URL = "https://stripe.com";
const EXAMPLES = ["airbnb.com", "notion.so", "figma.com"];

// Seven specialist auditors, each with a pool of plausible findings.
const DIMS = [
  { label: "Accessibility", scan: "checking contrast, focus, alt text", pool: [
    { t: "Primary CTA text fails WCAG AA contrast (3.9:1) on the hero.", sev: "HIGH" },
    { t: "Interactive elements show no visible keyboard focus state.", sev: "HIGH" },
    { t: "Several content images ship without alt text.", sev: "MED" },
    { t: "Link color is the only cue separating links from body text.", sev: "LOW" },
  ]},
  { label: "Content & voice", scan: "reading copy + microcopy", pool: [
    { t: "Hero headline runs three sentences where one would convert harder.", sev: "MED" },
    { t: "Em-dash density and cadence read as AI-generated copy.", sev: "LOW" },
    { t: "Body copy sits at a grade-14 reading level for a broad audience.", sev: "MED" },
    { t: "Button labels drift: 'Sign up', 'Get started', and 'Join' for one action.", sev: "LOW" },
  ]},
  { label: "Visual hierarchy", scan: "measuring type ramp + spacing", pool: [
    { t: "Heading scale is irregular, no consistent type ramp across sections.", sev: "MED" },
    { t: "Three near-identical greys stand in for a real neutral palette.", sev: "LOW" },
    { t: "Corner radii mix 8, 12, and 16px within the same row of cards.", sev: "LOW" },
  ]},
  { label: "IA & navigation", scan: "mapping nav + key paths", pool: [
    { t: "Primary nav carries nine items, priority is unclear at a glance.", sev: "MED" },
    { t: "The main conversion path is four clicks from the homepage.", sev: "HIGH" },
    { t: "No current-page indicator, users lose their place in the nav.", sev: "LOW" },
  ]},
  { label: "Performance", scan: "profiling load + paint", pool: [
    { t: "Largest Contentful Paint waits on a 1.2MB unoptimized hero image.", sev: "HIGH" },
    { t: "Render-blocking webfonts cause a flash of invisible text.", sev: "MED" },
  ]},
  { label: "Mobile & responsive", scan: "testing 360px to 1440px", pool: [
    { t: "Footer tap targets fall below the 44px minimum on mobile.", sev: "MED" },
    { t: "Horizontal scroll appears at 360px from a fixed-width table.", sev: "HIGH" },
  ]},
  { label: "Conversion & CTA", scan: "tracing the primary action", pool: [
    { t: "Two competing primary CTAs above the fold split attention.", sev: "MED" },
    { t: "The hero CTA reuses its label but changes destination per section.", sev: "LOW" },
  ]},
];

// Nielsen's 10 usability heuristics + a detectable subset of the Laws of UX.
// Each run assigns a verdict per principle, mirroring the heuristics-and-laws
// scorecard the real uxaudit checks produce: what's applied, where it falls
// short, and the fix. Every row maps to a research-cited check (NN/g, WCAG,
// Fitts, Hick, Miller, Gestalt).
const SCORECARD = {
  nielsen: [
    { name: "Visibility of system status", good: "Loading, save, and progress states are visible.", fix: ["Add a 'Saving…' state and a 'last updated' time to the dashboard.", "Show a skeleton loader instead of a blank flash on first paint."] },
    { name: "Match with the real world", good: "Labels use the user's words, not system jargon.", fix: ["Rename 'Submit' to the real outcome, e.g. 'Create account'.", "Drop internal jargon from the nav for plain labels."] },
    { name: "User control & freedom", good: "Every entered state has a visible exit or undo.", fix: ["Add a close (X) to the modal and a back step to the flow.", "Offer undo on delete instead of an irreversible action."] },
    { name: "Consistency & standards", good: "Repeated patterns look and behave the same.", fix: ["Unify the three button styles into one system.", "Use one date-picker pattern across the product."] },
    { name: "Error prevention", good: "Constraints and confirms stop errors early.", fix: ["Add format hints and a confirm before destructive actions.", "Disable invalid options instead of erroring after submit."] },
    { name: "Recognition over recall", good: "Options and context stay visible, not memorized.", fix: ["Keep field labels visible instead of placeholder-only.", "Label the icon-only toolbar buttons."] },
    { name: "Flexibility & efficiency", good: "Accelerators speed up frequent tasks.", fix: ["Add keyboard shortcuts and a recents list for power users.", "Offer bulk actions on the list view."] },
    { name: "Aesthetic & minimalist design", good: "One clear focus per screen, little clutter.", fix: ["Demote the competing CTAs so one primary action leads.", "Trim the feature dump above the fold to essentials."] },
    { name: "Error recovery", good: "Errors are plain-language with a way out.", fix: ["Replace the generic error with what went wrong + a retry.", "Give the empty state a primary next action."] },
    { name: "Help & documentation", good: "Help and empty states guide the next step.", fix: ["Add inline guidance to the blank empty state.", "Surface searchable help from the header."] },
  ],
  laws: [
    { name: "Fitts's Law", good: "Targets are large and well-spaced.", fix: ["Enlarge footer tap targets past 44px and space them.", "Make the primary action a fuller-size button."] },
    { name: "Hick's Law", good: "Few, well-grouped choices at each step.", fix: ["Group the 9-item nav under 4 headings or a More menu.", "Demote secondary CTAs so one primary choice leads."] },
    { name: "Jakob's Law", good: "Follows conventions users already know.", fix: ["Move search to the conventional top-right with an icon.", "Make the logo link home, as users expect."] },
    { name: "Miller's Law", good: "Long sets are chunked into groups.", fix: ["Section the long form; format phone and card numbers.", "Group the long settings list under labeled headings."] },
    { name: "Law of Proximity", good: "Spacing groups what belongs together.", fix: ["Tighten label-to-field spacing so pairs read as one.", "Add larger gaps between unrelated sections."] },
    { name: "Aesthetic-Usability", good: "A credible, intentional first impression.", fix: ["Swap the generic look for a distinct accent + type pair.", "Commit to one asymmetric hero, not three equal cards."] },
  ],
};
const SC_STATUS = {
  applied: { label: "Applied", c: "#21BA45" },
  partial: { label: "Partial", c: "#E8B431" },
  violated: { label: "Violated", c: "#DB2828" },
  na: { label: "N/A", c: "#A29CB4" },
};

const DISPATCHED = 16; // 7 auditors + 7 verifiers + scope + synthesize
const T_SCOPE = 900, T_AUDIT_END = 4600, T_VERIFY_END = 6100, T_SYNTH_END = 7500, T_TOTAL = 7800;
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function buildResult(rawUrl) {
  const domain = (rawUrl || "").replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/^www\./, "") || "the site";
  const agents = [], picked = [];
  DIMS.forEach((d, i) => {
    const k = Math.max(1, Math.round(d.pool.length * (0.5 + Math.random() * 0.5)));
    const chosen = shuffle(d.pool).slice(0, k);
    picked.push(...chosen);
    agents.push({ label: d.label, scan: d.scan, findings: chosen.length, start: 900 + i * 140, dur: 2200 + (i % 3) * 350 });
  });
  const raw = picked.length;
  const dropped = Math.max(1, Math.round(raw * (0.06 + Math.random() * 0.06)));
  const confirmed = raw - dropped;
  // severity tally, then treat dropped findings as low/med false positives
  let high = picked.filter((f) => f.sev === "HIGH").length;
  let med = picked.filter((f) => f.sev === "MED").length;
  let low = picked.filter((f) => f.sev === "LOW").length;
  let d2 = dropped;
  const dl = Math.min(low, d2); low -= dl; d2 -= dl;
  const dm = Math.min(med, d2); med -= dm; d2 -= dm;
  const order = { HIGH: 0, MED: 1, LOW: 2 };
  const sample = [...picked].sort((a, b) => order[a.sev] - order[b.sev]).slice(0, 4);

  // Heuristics & UX-laws scorecard — a verdict per principle, varied per run.
  const pickStatus = () => {
    const x = Math.random();
    return x < 0.6 ? "applied" : x < 0.82 ? "partial" : x < 0.95 ? "violated" : "na";
  };
  const scoreRow = (e) => {
    const status = pickStatus();
    const proposal = status === "applied" || status === "na" ? "" : e.fix[Math.floor(Math.random() * e.fix.length)];
    return { name: e.name, good: e.good, status, proposal };
  };
  const scorecard = { nielsen: SCORECARD.nielsen.map(scoreRow), laws: SCORECARD.laws.map(scoreRow) };
  const allRows = [...scorecard.nielsen, ...scorecard.laws];
  const scSummary = {
    applied: allRows.filter((x) => x.status === "applied").length,
    improve: allRows.filter((x) => x.status === "partial" || x.status === "violated").length,
    na: allRows.filter((x) => x.status === "na").length,
  };
  return { domain, agents, raw, confirmed, dropped, sev: { high, med, low }, sample, scorecard, scSummary };
}

export default function AgenticWorkflow() {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedRef = useRef(false);
  const toolRef = useRef(null);

  const run = useCallback((targetUrl) => {
    setResult(buildResult(targetUrl));
    setElapsed(0);
    setRunning(true);
  }, []);

  const runSample = useCallback(() => { setErr(""); run(SAMPLE_URL); }, [run]);

  const runCustom = useCallback(() => {
    if (!url.trim()) { setErr("Enter a URL to audit."); return; }
    if (code.trim() !== ACCESS_CODE) { setErr("That access code isn't valid. This demo is invite-only."); return; }
    setErr("");
    run(url.trim());
  }, [url, code, run]);

  // clock
  useEffect(() => {
    if (!running) return;
    let raf, t0;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const e = ts - t0;
      setElapsed(e);
      if (e < T_TOTAL) raf = requestAnimationFrame(step);
      else { setElapsed(T_TOTAL); setRunning(false); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  // auto-run a sample once, when the tool scrolls into view
  useEffect(() => {
    const el = toolRef.current;
    if (!el) return;
    const io = new IntersectionObserver((ents) => {
      if (ents[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;
        setTimeout(() => run(SAMPLE_URL), 450);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [run]);

  const done = elapsed >= T_TOTAL && result;
  const phase = !result ? "idle" : elapsed < T_SCOPE ? "scope" : elapsed < T_AUDIT_END ? "audit" : elapsed < T_VERIFY_END ? "verify" : elapsed < T_SYNTH_END ? "synth" : "done";
  const r = result;

  const rawFound = r ? r.agents.reduce((s, a) => s + Math.round(a.findings * clamp((elapsed - a.start) / a.dur)), 0) : 0;
  const verifyP = clamp((elapsed - T_AUDIT_END) / (T_VERIFY_END - T_AUDIT_END));
  const confirmed = !r ? 0 : phase === "synth" || done ? r.confirmed : Math.round(r.raw - r.dropped * easeOut(verifyP));
  const dispatched = Math.min(DISPATCHED, Math.round(DISPATCHED * clamp(elapsed / T_VERIFY_END)));
  const showReport = phase === "synth" || done;
  const sevMax = r ? Math.max(r.sev.high, r.sev.med, r.sev.low, 1) : 1;
  const preAudit = phase === "idle" || phase === "scope" || phase === "audit";

  const Stat = ({ label, value, accent }) => (
    <div className="dark-card rounded-2xl p-5">
      <div className="num font-display text-3xl md:text-4xl font-black leading-none" style={{ color: accent || "#F4F3FA" }}>{value}</div>
      <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">{label}</div>
    </div>
  );
  const PhasePill = ({ id, icon: Icon, label }) => {
    const active = phase === id;
    const idx = ["scope", "audit", "verify", "synth"].indexOf(id);
    const past = ["scope", "audit", "verify", "synth", "done"].indexOf(phase) > idx;
    return (
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full transition-colors duration-300"
        style={{ background: active ? "rgba(245,55,155,0.14)" : "rgba(255,255,255,0.04)", border: `1px solid ${active ? PINK : "rgba(255,255,255,0.1)"}` }}>
        <Icon size={15} style={{ color: active ? PINK : past ? "#21BA45" : "#A29CB4" }} />
        <span className="text-[12px] font-mono uppercase tracking-wider" style={{ color: active || past ? "#F4F3FA" : "#A29CB4" }}>{label}</span>
      </div>
    );
  };

  return (
    <article data-testid="agentic-workflow" className="pb-24">
      <Seo title="Agentic Audit · Faraz Khan" description="Point a swarm of AI agents at any URL: parallel UX audit, adversarial verification, and synthesis into one prioritized report." />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(120% 90% at 80% -10%, rgba(7,94,253,0.30) 0%, rgba(16,2,16,0) 55%), radial-gradient(90% 80% at 0% 110%, rgba(245,55,155,0.18) 0%, rgba(16,2,16,0) 50%), #100210" }} />
        <Container className="relative z-10 pt-12 pb-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#F5379B] transition-colors mb-9">
            <ArrowLeft size={14} /> all projects
          </Link>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-5" style={{ color: PINK }}>✦ Agentic Workflow · Live Demo</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.96] text-[#F7F5FF] max-w-4xl case-keep">Point a swarm of AI agents at any website.</h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#F4F3FA] leading-snug font-light italic case-keep">
            Drop in a URL and watch a fleet of specialist agents audit it in parallel, accessibility, content, hierarchy, IA, performance, then adversarially verify every finding, score it against Nielsen's 10 heuristics and the Laws of UX, and synthesize one prioritized report. This is how I design agentic systems.
          </p>
        </Container>
      </header>

      {/* TOOL */}
      <section className="py-12 md:py-16" ref={toolRef}>
        <Container>
          {/* input panel */}
          <div className="dark-card rounded-3xl p-6 md:p-7 mb-9">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
              <label className="flex-1">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-2">Website to audit</span>
                <div className="flex items-center gap-2.5 rounded-xl px-3.5 py-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <Globe size={16} className="text-[#A29CB4] flex-shrink-0" />
                  <input value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => e.key === "Enter" && runCustom()}
                    placeholder="yourproduct.com" spellCheck={false}
                    className="bg-transparent outline-none text-[#F4F3FA] text-sm w-full placeholder:text-white/30" />
                </div>
              </label>
              <label className="lg:w-52">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-2">Access code</span>
                <div className="flex items-center gap-2.5 rounded-xl px-3.5 py-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <Lock size={15} className="text-[#A29CB4] flex-shrink-0" />
                  <input value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && runCustom()}
                    placeholder="invite only" spellCheck={false}
                    className="bg-transparent outline-none text-[#F4F3FA] text-sm w-full placeholder:text-white/30" />
                </div>
              </label>
              <button type="button" onClick={runCustom} disabled={running}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors flex-shrink-0"
                style={{ background: running ? "rgba(255,255,255,0.06)" : PINK, color: running ? "#A29CB4" : "#fff" }}>
                {running ? "Running…" : <><Play size={16} /> Run audit</>}
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {err && <span className="text-[12px] text-[#F5379B]">{err}</span>}
              <div className="flex items-center gap-2 text-[11px] text-[#A29CB4]">
                <span>try</span>
                {EXAMPLES.map((ex) => (
                  <button key={ex} type="button" onClick={() => setUrl(ex)} className="underline decoration-white/20 hover:text-[#F4F3FA] transition-colors">{ex}</button>
                ))}
              </div>
              <button type="button" onClick={runSample} disabled={running}
                className="ml-auto inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-white/70 hover:text-[#F5379B] transition-colors">
                <Play size={12} /> watch a sample run
              </button>
            </div>
          </div>

          {/* phase tracker */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <PhasePill id="scope" icon={GitBranch} label="Scope" />
              <span className="text-white/20">→</span>
              <PhasePill id="audit" icon={Cpu} label="Fan out" />
              <span className="text-white/20">→</span>
              <PhasePill id="verify" icon={ShieldCheck} label="Verify" />
              <span className="text-white/20">→</span>
              <PhasePill id="synth" icon={Check} label="Synthesize" />
            </div>
            <div className="text-[12px] font-mono text-[#A29CB4]">
              {phase === "idle" ? "ready" : phase === "done" ? `done · ${r.domain}` : `auditing ${r.domain}…`}
            </div>
          </div>

          {/* live stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <Stat label="Agents dispatched" value={dispatched} accent={BLUE} />
            <Stat label="Running in parallel" value={phase === "audit" ? 7 : phase === "idle" || phase === "scope" ? 0 : "✓"} accent="#F4F3FA" />
            <Stat label="Issues surfaced" value={rawFound} accent={PINK} />
            <Stat label="Confirmed after verify" value={preAudit ? "—" : confirmed} accent="#21BA45" />
          </div>

          {/* AGENT FAN-OUT */}
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: PINK }}>Fan out · 7 specialist auditors</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {(r ? r.agents : DIMS.map((d, i) => ({ label: d.label, scan: d.scan, findings: 0, start: 900 + i * 140, dur: 2400 }))).map((a) => {
              const p = r ? clamp((elapsed - a.start) / a.dur) : 0;
              const started = r && elapsed >= a.start;
              const finished = r && p >= 1;
              const found = Math.round(a.findings * p);
              return (
                <div key={a.label} className="dark-card rounded-2xl p-4 transition-opacity duration-500"
                  style={{ opacity: started ? 1 : 0.4, borderLeft: `3px solid ${finished ? "#21BA45" : started ? PINK : "rgba(255,255,255,0.1)"}` }}>
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg grid place-items-center flex-shrink-0" style={{ background: finished ? "rgba(33,186,69,0.15)" : "rgba(245,55,155,0.12)" }}>
                      {finished ? <Check size={14} className="text-[#21BA45]" /> : <Cpu size={14} style={{ color: PINK }} />}
                    </span>
                    <span className="text-[13px] font-semibold text-[#F4F3FA] leading-tight truncate">{a.label}</span>
                    <span className="ml-auto text-[11px] font-mono tabular-nums" style={{ color: finished ? "#21BA45" : "#A29CB4" }}>
                      {!started ? "queued" : finished ? `${a.findings} found` : `${found}…`}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <div className="h-full rounded-full" style={{ width: `${p * 100}%`, background: finished ? "#21BA45" : PINK, transition: "width .1s linear" }} />
                  </div>
                  <div className="mt-2 text-[10.5px] text-[#A29CB4]">
                    {!started ? "waiting for a slot" : finished ? "done · scan complete" : a.scan}
                  </div>
                </div>
              );
            })}
          </div>

          {/* VERIFY */}
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: phase === "verify" ? PINK : "#A29CB4" }}>Adversarial verify · kill false positives</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="dark-card rounded-3xl p-6 md:p-7 mb-10" style={{ opacity: !r || elapsed < T_AUDIT_END ? 0.4 : 1, transition: "opacity .5s" }}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} style={{ color: BLUE }} />
                <p className="text-sm md:text-base text-[#F4F3FA] max-w-md leading-relaxed">
                  Every finding is re-opened by a second agent that has to prove it against the page. Anything it can't is dropped.
                </p>
              </div>
              <div className="flex items-center gap-4 ml-auto font-display font-black">
                <div className="text-center">
                  <div className="num text-2xl md:text-3xl text-[#A29CB4]">{r && elapsed >= T_AUDIT_END ? r.raw : "—"}</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#A29CB4] mt-1">raw</div>
                </div>
                <span className="text-[#F5379B] text-xl">→</span>
                <div className="text-center">
                  <div className="num text-3xl md:text-4xl" style={{ color: "#21BA45" }}>{preAudit ? "—" : confirmed}</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#A29CB4] mt-1">confirmed</div>
                </div>
                <div className="text-center">
                  <div className="num text-xl md:text-2xl" style={{ color: "#DB2828" }}>{preAudit ? "—" : `-${Math.round(r.dropped * easeOut(verifyP))}`}</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#A29CB4] mt-1">false +</div>
                </div>
              </div>
            </div>
          </div>

          {/* SYNTHESIZE / REPORT */}
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: showReport ? PINK : "#A29CB4" }}>Synthesize · one prioritized report</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid lg:grid-cols-5 gap-4" style={{ opacity: !r || elapsed < T_VERIFY_END ? 0.4 : 1, transition: "opacity .6s" }}>
            <div className="dark-card rounded-3xl p-6 lg:col-span-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4]">{r ? r.confirmed : 0} confirmed findings</p>
              <div className="mt-4 space-y-3">
                {[{ k: "High", n: r ? r.sev.high : 0, c: "#DB2828" }, { k: "Medium", n: r ? r.sev.med : 0, c: "#E8B431" }, { k: "Low", n: r ? r.sev.low : 0, c: "#4896CF" }].map((s) => (
                  <div key={s.k}>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="text-[#F4F3FA] font-semibold">{s.k}</span>
                      <span className="font-mono tabular-nums" style={{ color: s.c }}>{s.n}</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <div className="h-full rounded-full" style={{ width: `${(showReport ? 1 : 0) * (s.n / sevMax) * 100}%`, background: s.c, transition: "width .8s ease-out" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dark-card rounded-3xl p-6 lg:col-span-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-3">Top findings{r ? ` · ${r.domain}` : ""}</p>
              <div className="space-y-3">
                {(r ? r.sample : []).map((f, i) => (
                  <div key={i} className="flex gap-3 items-start" style={{ opacity: showReport ? 1 : 0, transition: `opacity .4s ${i * 0.1}s` }}>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0"
                      style={f.sev === "HIGH" ? { color: "#DB2828", background: "rgba(219,40,40,0.12)" } : f.sev === "MED" ? { color: "#E8B431", background: "rgba(232,180,49,0.12)" } : { color: "#4896CF", background: "rgba(72,150,207,0.12)" }}>{f.sev}</span>
                    <p className="text-[13px] leading-relaxed text-[#F4F3FA]/90">{f.t}</p>
                  </div>
                ))}
                {!r && <p className="text-[13px] text-[#A29CB4]">Run an audit to see the report.</p>}
              </div>
              <p className="mt-5 text-[10px] font-mono text-white/35">Demonstration · findings are illustrative of a real agent audit.</p>
            </div>
          </div>

          {/* HEURISTICS & UX-LAWS SCORECARD */}
          <div className="mt-10 mb-3 flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: showReport ? PINK : "#A29CB4" }}>Scorecard · heuristics &amp; UX laws</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="dark-card rounded-3xl p-6 md:p-7" style={{ opacity: showReport ? 1 : 0.4, transition: "opacity .6s" }}>
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
              <p className="text-sm text-[#F4F3FA]/85 max-w-xl leading-relaxed">
                Nielsen's 10 usability heuristics and the Laws of UX, scored against {r ? r.domain : "the page"}: what it already applies, where it falls short, and the fix.
              </p>
              {r && (
                <div className="flex items-center gap-3 text-[11px] font-mono whitespace-nowrap">
                  <span style={{ color: "#21BA45" }}>{r.scSummary.applied} applied</span>
                  <span style={{ color: "#E8B431" }}>{r.scSummary.improve} to improve</span>
                  {r.scSummary.na > 0 && <span style={{ color: "#A29CB4" }}>{r.scSummary.na} n/a</span>}
                </div>
              )}
            </div>
            {[
              { title: "Nielsen's 10 usability heuristics", rows: r ? r.scorecard.nielsen : SCORECARD.nielsen.map((e) => ({ ...e, status: "applied", proposal: "" })) },
              { title: "Laws of UX", rows: r ? r.scorecard.laws : SCORECARD.laws.map((e) => ({ ...e, status: "applied", proposal: "" })) },
            ].map((group) => (
              <div key={group.title} className="mb-6 last:mb-0">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-3">{group.title}</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {group.rows.map((row, i) => {
                    const st = SC_STATUS[row.status];
                    return (
                      <div key={row.name} className="rounded-xl p-3.5"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", opacity: showReport ? 1 : 0, transform: showReport ? "none" : "translateY(6px)", transition: `opacity .4s ${i * 0.04}s, transform .4s ${i * 0.04}s` }}>
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: st.c }} />
                          <span className="text-[13px] font-semibold text-[#F4F3FA] leading-tight">{row.name}</span>
                          <span className="ml-auto text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded flex-shrink-0" style={{ color: st.c, background: `${st.c}1f` }}>{st.label}</span>
                        </div>
                        <p className="mt-1.5 text-[11.5px] leading-snug text-[#A29CB4] pl-[18px]">
                          {row.status === "applied" ? row.good : row.status === "na" ? "No relevant state on the captured screen." : <><span className="text-[#F4F3FA]/70">Proposal: </span>{row.proposal}</>}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <p className="mt-5 text-[10px] font-mono text-white/35">Each row maps to a research-cited check (NN/g, WCAG, Fitts, Hick, Miller, Gestalt). Verdicts here are illustrative of a real audit.</p>
          </div>
        </Container>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="py-14 md:py-16 border-t border-white/10">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-6" style={{ color: PINK }}>Why design it this way</p>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-4xl mb-10 case-keep">The orchestration is the design decision.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: GitBranch, t: "Parallelism for coverage", d: "One agent reading a whole site misses things and takes forever. Seven specialists in parallel cover more and finish in a fraction of the time." },
              { icon: ShieldCheck, t: "Verification for trust", d: "A model that only generates findings will also hallucinate them. A second adversarial pass that must prove each one is what makes the output safe to act on." },
              { icon: UserCheck, t: "Human-in-the-loop for judgment", d: "The agents surface and rank; a person decides what actually ships. AI proposes, the human disposes." },
            ].map((p) => {
              const I = p.icon;
              return (
                <div key={p.t} className="dark-card rounded-3xl p-7">
                  <span className="w-11 h-11 rounded-xl grid place-items-center mb-5" style={{ background: "rgba(7,94,253,0.14)" }}><I size={20} style={{ color: BLUE }} /></span>
                  <h3 className="font-display text-lg font-black text-[#F4F3FA] mb-2">{p.t}</h3>
                  <p className="text-sm leading-relaxed text-[#F4F3FA]/80">{p.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 rounded-3xl bg-white border-2 border-[#F5379B] p-8 md:p-10 max-w-4xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C71E73] mb-3">The point</p>
            <p className="font-display text-xl md:text-2xl font-bold leading-snug text-black">
              I don't just use AI tools. I design the systems that make a fleet of agents fast, honest, and accountable to a human, and then I ship the result.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW I BUILT THIS */}
      <section className="py-14 md:py-16 border-t border-white/10">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] mb-6" style={{ color: PINK }}>How I built this</p>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight max-w-4xl mb-10 case-keep">Behind the build, in full transparency.</h2>
          <div className="max-w-3xl space-y-6">
            {[
              { n: "01", t: "Designed the orchestration first", d: "I mapped the work as a pipeline before any pixels: scope the task, fan out to specialist agents in parallel, adversarially verify every finding, then synthesize one report. The shape of that flow is the real design decision." },
              { n: "02", t: "Built it as a React state machine", d: "A single deterministic clock drives the phases. Each agent's progress and every live counter is computed from elapsed time, so it stays smooth, replayable, and varies its findings from run to run." },
              { n: "03", t: "Kept it honest and gated", d: "This is a demonstration, so the findings are illustrative rather than a live model's output, and custom URLs sit behind an invite code. The goal is to communicate the pattern clearly, not to fake a product." },
              { n: "04", t: "The pattern is real", d: "I used this same orchestration to audit and ship this portfolio. A fleet of agents surfaced 84 issues, adversarial verification cut that to 78 real ones, and I fixed them. The demo is the visible half of a workflow I actually run." },
            ].map((s) => (
              <div key={s.n} className="flex gap-5">
                <span className="font-display text-2xl font-black text-[#075EFD] tabular-nums flex-shrink-0 w-9">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-black text-[#F4F3FA]">{s.t}</h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#F4F3FA]/80 mt-1">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-9 text-sm text-[#A29CB4] max-w-3xl leading-relaxed">
            The live version is a small serverless function that fetches a page and runs the audit with a real model, gated and cost-capped. Happy to walk through that architecture in person.
          </p>
        </Container>
      </section>

      {/* FOOTER */}
      <section className="py-14 md:py-20 border-t border-white/10 text-center">
        <Container>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6 case-keep">Want one pointed at your product?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-sm transition-transform hover:scale-[1.03]" style={{ background: PINK }}>
            Get in touch
          </Link>
        </Container>
      </section>
    </article>
  );
}
