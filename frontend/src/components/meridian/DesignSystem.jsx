import React from "react";
import { Layers, Eye, BarChart3, FlagTriangleRight, Sparkles, ArrowRight, Bell } from "lucide-react";

const PLEX = { fontFamily: "'IBM Plex Sans',sans-serif" };

const Eyebrow = ({ children, muted }) => (
  <span className={`font-mono text-[10px] uppercase tracking-widest ${muted ? "text-[#A29CB4]" : "text-[#F5379B]"}`}>
    {children}
  </span>
);

const Prose = ({ children }) => (
  <p className="mt-3 text-sm leading-relaxed text-[#C9C5D6] max-w-3xl">{children}</p>
);

/* ---------- Foundations: palette + type ---------- */
const CORE_SWATCHES = [
  { name: "Maroon", hex: "#A32638" }, { name: "Navy", hex: "#004380" },
  { name: "Blue", hex: "#4896CF" }, { name: "Orange", hex: "#E7842E" },
  { name: "Gold", hex: "#E8B431" }, { name: "Green", hex: "#21BA45" },
  { name: "Red", hex: "#DB2828" }, { name: "Ink", hex: "#1B1C1D" },
];
const TINTS = [
  { name: "Light blue", hex: "#E7F2FB" }, { name: "Light orange", hex: "#FFF2E8" },
  { name: "Light gold", hex: "#FFFAE6" }, { name: "Light gray", hex: "#F2F2F2" },
];
const TYPE_ROWS = [
  { tag: "Display", node: <span style={{ ...PLEX, fontWeight: 700, fontSize: "28px", color: "#F4F3FA" }}>10,670</span> },
  { tag: "Heading", node: <span style={{ ...PLEX, fontWeight: 600, fontSize: "17px", color: "#F4F3FA" }}>Applications by school</span> },
  { tag: "Body", node: <span style={{ ...PLEX, fontWeight: 400, fontSize: "14px", color: "#D7D4E2" }}>Segmented by level, every screen</span> },
  { tag: "Numbers", node: <span style={{ ...PLEX, fontWeight: 700, fontSize: "15px", color: "#F4F3FA", fontVariantNumeric: "tabular-nums" }}>14,722 · 49.2% · $52M</span> },
];

const FoundationsCard = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>Foundations</Eyebrow>
    <Prose>
      Light neutral canvas, soft cards, generous white space doing the separating. A geometric sans, plus mono for eyebrow
      labels and tabular KPI figures so numbers read like a ledger. One confident blue for emphasis, a fixed categorical
      palette, and status that means something: green healthy, amber watch, red risk. Maroon is a quiet brand note now, not a flood.
    </Prose>
    <div className="mt-6 grid lg:grid-cols-2 gap-6">
      <div>
        <div className="grid grid-cols-4 gap-2.5">
          {CORE_SWATCHES.map((s) => (
            <div key={s.hex} className="rounded-lg overflow-hidden" style={{ background: "#1c1530" }}>
              <div className="h-12 w-full" style={{ backgroundColor: s.hex, boxShadow: s.hex === "#1B1C1D" ? "inset 0 0 0 1px rgba(255,255,255,0.14)" : undefined }} />
              <div className="px-2 py-1.5">
                <div className="text-[11px] font-semibold text-[#F4F3FA] leading-tight">{s.name}</div>
                <div className="font-mono text-[9px] text-[#A29CB4]">{s.hex}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2.5">
          {TINTS.map((t) => (
            <div key={t.hex} className="rounded-lg h-9" style={{ backgroundColor: t.hex, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)" }} title={`${t.name} ${t.hex}`} />
          ))}
        </div>
      </div>
      <div className="divide-y divide-white/10">
        {TYPE_ROWS.map((r) => (
          <div key={r.tag} className="flex items-baseline gap-4 py-3 first:pt-0 last:pb-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#A29CB4] w-20 shrink-0">{r.tag}</span>
            <span>{r.node}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ---------- The chart kit ---------- */
const STAGE_BARS = [{ h: "100%", c: "#4896CF" }, { h: "58%", c: "#E7842E" }, { h: "24%", c: "#004380" }, { h: "20%", c: "#E8B431" }];
const CHART_TYPES = ["KPI tiles", "Admissions funnel", "One donut", "Bars, the workhorse", "Lines for trends", "One map"];

const ChartKitCard = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>The chart kit</Eyebrow>
    <Prose>
      Legacy decks leaned on pies nobody could read. I narrowed it to a small kit, one type per question, all aligned to what
      Power BI can render. Every chart shares the same title, legend, formatting, and empty state, so a chart with no data says
      so instead of breaking, and a dean can drill from overview into a program without relearning the page.
    </Prose>
    <div className="mt-5 flex flex-wrap gap-2">
      {CHART_TYPES.map((c) => (
        <span key={c} className="font-mono text-[10.5px] uppercase tracking-wide text-[#C9C5D6] rounded-full px-3 py-1.5 border border-white/12">{c}</span>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3" style={PLEX}>
      <div className="bg-white rounded-xl p-4" style={{ color: "#1B1C1D" }}>
        <div className="text-[11px] font-semibold" style={{ color: "#7F7F7F" }}>Total applications</div>
        <div className="text-[22px] font-bold mt-0.5">14,722</div>
        <div className="text-[10.5px] font-semibold mt-1" style={{ color: "#21BA45" }}>▲ 3.1% vs last cycle</div>
      </div>
      <div className="bg-white rounded-xl p-4">
        <div className="text-[11px] font-semibold mb-2.5" style={{ color: "#7F7F7F" }}>Applications by stage</div>
        <div className="flex items-end gap-2 h-16">
          {STAGE_BARS.map((b, i) => <div key={i} className="flex-1 rounded-[2px]" style={{ height: b.h, backgroundColor: b.c }} />)}
        </div>
      </div>
      <div className="bg-white rounded-xl p-4">
        <div className="text-[11px] font-semibold mb-2.5" style={{ color: "#7F7F7F" }}>By region</div>
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full relative" style={{ background: "conic-gradient(#004380 0 46%,#4896CF 46% 64%,#E7842E 64% 80%,#E8B431 80% 90%,#363D45 90% 100%)" }}>
            <div className="absolute rounded-full" style={{ inset: "30%", backgroundColor: "#fff" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- The AI layer (Ask Meridian AI + next best action + signals) ---------- */
const AILayerCard = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>The AI layer</Eyebrow>
    <Prose>
      The brief asked for AI; the research made me cautious. The Markup reported in 2021 that a widely used product treated race
      as a predictor of student success, so my rule was simple: AI assists, it does not decide, and it never sits between a user
      and the numbers. The guardrails are the design, not a disclaimer. It shows up in three restrained places, and the test I
      held it to was this: delete the AI entirely and the dashboards are still complete and trustworthy.
    </Prose>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3" style={PLEX}>
      {/* 1. Ask Meridian AI */}
      <div className="rounded-xl p-4" style={{ background: "linear-gradient(135deg,#EAF1FB,#F4EEFB)", border: "1px solid #DCE3F2" }}>
        <div className="flex items-center gap-1.5" style={{ color: "#004380" }}>
          <Sparkles size={14} /><span className="text-[12px] font-bold">Ask Meridian AI</span>
        </div>
        <div className="mt-2 text-[12px] italic" style={{ color: "#475569" }}>Where is the admit-to-yield gap widest?</div>
        <div className="mt-2.5 rounded-lg bg-white p-2.5">
          <div className="text-[11.5px] font-semibold" style={{ color: "#1B1C1D" }}>Graduate CS, admits up 12%, deposits flat.</div>
          <div className="flex items-end gap-1.5 h-9 mt-2">
            {["70%", "100%", "44%", "30%"].map((h, i) => <div key={i} className="flex-1 rounded-[2px]" style={{ height: h, backgroundColor: i === 1 ? "#004380" : "#4896CF" }} />)}
          </div>
        </div>
      </div>
      {/* 2. Next best action */}
      <div className="rounded-xl p-4 bg-white">
        <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "#7F7F7F" }}>Next best action</div>
        <div className="mt-2 text-[12.5px] font-semibold leading-snug" style={{ color: "#1B1C1D" }}>Send deposit reminders to 41 India CS admits at risk.</div>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: "#004380" }}>
          Review list <ArrowRight size={13} />
        </div>
      </div>
      {/* 3. Signals feed */}
      <div className="rounded-xl p-4 bg-white">
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest" style={{ color: "#7F7F7F" }}>
          <Bell size={11} /> Signals
        </div>
        <div className="mt-2.5 space-y-2.5">
          <div className="text-[11.5px] leading-snug" style={{ color: "#1B1C1D" }}><b>NY / NJ deposits up 6%</b> this week</div>
          <div className="text-[11.5px] leading-snug" style={{ color: "#1B1C1D" }}><b>Out-of-state interest up 9%</b>, led by Texas</div>
          <div className="text-[10.5px]" style={{ color: "#A0A0A0" }}>Dismissible, never blocking.</div>
        </div>
      </div>
    </div>
    <p className="mt-4 text-[12.5px] leading-relaxed text-[#A29CB4] max-w-3xl">
      Human-in-the-loop by default. Every feature shows what it looked at and links to the source, any scoring is a guide to audit
      rather than a verdict, and sensitive demographics are never predictors, the exact failure that reporting documented.
    </p>
  </div>
);

/* ---------- Principles ---------- */
const PRINCIPLES = [
  { icon: Layers, title: "Segment by level everywhere", body: "Undergraduate, graduate, research, and HR never blur into one number." },
  { icon: Eye, title: "Overview to detail", body: "Every screen opens on the headline, then drills down on demand." },
  { icon: BarChart3, title: "Squared, honest charts", body: "No rounded bars, sorted and labelled, no legend hunt." },
  { icon: FlagTriangleRight, title: "Flag forecasts as forecasts", body: "Projected figures are visibly marked, never dressed as actuals." },
];

const PrinciplesCard = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>Principles</Eyebrow>
    <Prose>Four rules that hold across all four departments.</Prose>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {PRINCIPLES.map((p) => {
        const I = p.icon;
        return (
          <div key={p.title} className="flex items-start gap-3 rounded-2xl p-4" style={{ background: "#1c1530" }}>
            <span className="shrink-0 mt-0.5 text-[#5B9BFF]"><I size={18} strokeWidth={2} /></span>
            <div>
              <div className="text-sm font-semibold text-[#F4F3FA] leading-tight">{p.title}</div>
              <div className="text-[13px] leading-relaxed text-[#A29CB4] mt-1">{p.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default function MeridianDesignSystem() {
  return (
    <div className="mt-2 space-y-6">
      <FoundationsCard />
      <ChartKitCard />
      <AILayerCard />
      <PrinciplesCard />
    </div>
  );
}
