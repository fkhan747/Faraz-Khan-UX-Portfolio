import React, { useState } from "react";
import { Layers, Eye, BarChart3, FlagTriangleRight, Sparkles, ArrowRight, Bell, Plus } from "lucide-react";

const PLEX = { fontFamily: "'IBM Plex Sans',sans-serif" };
const INK = "#1B1C1D", MUT = "#7F7F7F";

const Eyebrow = ({ children, muted }) => (
  <span className={`font-mono text-sm uppercase tracking-widest ${muted ? "text-white" : "text-[#F5379B]"}`}>{children}</span>
);
const Prose = ({ children }) => <p className="mt-3 text-sm leading-relaxed text-[#C9C5D6] max-w-3xl">{children}</p>;

/* ===================== Foundations ===================== */
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
  { tag: "Numbers", node: <span style={{ ...PLEX, fontWeight: 700, fontSize: "15px", color: "#F4F3FA", fontVariantNumeric: "tabular-nums" }}>14,170 · 21% yield · $52M</span> },
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
        <div className="mt-4 font-mono text-[13px] uppercase tracking-widest text-white mb-2">Light tints, for KPI cards</div>
        <div className="grid grid-cols-4 gap-2.5">
          {TINTS.map((t) => (
            <div key={t.hex} className="rounded-lg overflow-hidden" style={{ background: "#1c1530" }}>
              <div className="h-9 w-full" style={{ backgroundColor: t.hex, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)" }} />
              <div className="px-2 py-1.5">
                <div className="text-[10.5px] font-semibold text-[#F4F3FA] leading-tight">{t.name}</div>
                <div className="font-mono text-[9px] text-[#A29CB4]">{t.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="divide-y divide-white/10">
        {TYPE_ROWS.map((r) => (
          <div key={r.tag} className="flex items-baseline gap-4 py-3 first:pt-0 last:pb-0">
            <span className="font-mono text-sm uppercase tracking-widest text-white w-20 shrink-0">{r.tag}</span>
            <span>{r.node}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ===================== The component kit ===================== */
const Tile = ({ label, children }) => (
  <div className="bg-white rounded-xl p-3.5 flex flex-col" style={{ ...PLEX, minHeight: 124 }}>
    <div className="text-[10px] font-semibold mb-2 uppercase tracking-wide" style={{ color: MUT }}>{label}</div>
    <div className="flex-1 flex flex-col justify-center">{children}</div>
  </div>
);
const HBar = ({ w, c = "#4896CF", l, v }) => (
  <div className="flex items-center gap-2">
    <span className="text-[9.5px] w-7 shrink-0" style={{ color: MUT }}>{l}</span>
    <span className="h-2 flex-1 rounded-[2px]" style={{ background: "#F2F2F2" }}><span className="block h-full rounded-[2px]" style={{ width: w, background: c }} /></span>
    {v && <span className="text-[9px] tabular-nums" style={{ color: INK }}>{v}</span>}
  </div>
);

const KIT = [
  { k: "KPI tile", node: (
    <div><div className="text-[22px] font-bold leading-none" style={{ color: INK }}>14,170</div>
      <div className="text-[10px] font-semibold mt-1" style={{ color: "#21BA45" }}>▲ 3.1% vs last cycle</div></div>
  )},
  { k: "Sorted bars", node: (
    <div className="space-y-1.5">
      <HBar l="Eng" w="100%" c="#004380" /><HBar l="Bus" w="64%" /><HBar l="Sci" w="42%" /><HBar l="Arts" w="22%" c="#E7842E" />
    </div>
  )},
  { k: "Donut", node: (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 rounded-full relative shrink-0" style={{ background: "conic-gradient(#004380 0 46%,#4896CF 46% 64%,#E7842E 64% 80%,#E8B431 80% 90%,#363D45 90% 100%)" }}>
        <div className="absolute rounded-full" style={{ inset: "32%", background: "#fff" }} /></div>
      <div className="space-y-1">
        {[["#004380", "Domestic"], ["#4896CF", "Intl"], ["#E7842E", "Other"]].map(([c, t]) => (
          <div key={t} className="flex items-center gap-1.5 text-[9.5px]" style={{ color: MUT }}><span className="w-2 h-2 rounded-[2px]" style={{ background: c }} />{t}</div>
        ))}
      </div>
    </div>
  )},
  { k: "Trend line", node: (
    <svg viewBox="0 0 120 44" className="w-full" style={{ height: 44 }}>
      <polyline points="2,34 24,30 46,26 68,18 90,10 104,8 118,22" fill="none" stroke="#004380" strokeWidth="2" />
      <circle cx="104" cy="8" r="2.6" fill="#004380" /><circle cx="118" cy="22" r="3" fill="#DB2828" />
    </svg>
  )},
  { k: "Admissions funnel", node: (
    <div className="space-y-1">
      {[["Applied", "100%"], ["Admitted", "62%"], ["Deposited", "28%"], ["Enrolled", "21%"]].map(([l, w]) => (
        <div key={l} className="flex items-center gap-2"><span className="text-[9px] w-12 shrink-0" style={{ color: MUT }}>{l}</span>
          <span className="h-3.5 rounded-[2px]" style={{ width: w, background: "#4896CF" }} /></div>
      ))}
    </div>
  )},
  { k: "Data table", node: (
    <table className="w-full text-[9.5px]" style={{ color: INK }}>
      <thead><tr style={{ color: MUT }}><td>State</td><td className="text-right">Apps</td><td className="text-right">Yield</td></tr></thead>
      <tbody>
        <tr><td>New Jersey</td><td className="text-right tabular-nums">2,210</td><td className="text-right">24%</td></tr>
        <tr><td>New York</td><td className="text-right tabular-nums">1,980</td><td className="text-right">20%</td></tr>
        <tr><td>Pennsylvania</td><td className="text-right tabular-nums">1,120</td><td className="text-right">22%</td></tr>
      </tbody>
    </table>
  )},
  { k: "Filters", node: (
    <div className="flex flex-wrap gap-1.5">
      {["Year", "Term", "Level", "Plan", "Cohort"].map((f, i) => (
        <span key={f} className="text-[9.5px] px-2 py-1 rounded-md" style={{ background: i === 2 ? "#004380" : "#F2F2F2", color: i === 2 ? "#fff" : INK }}>{f}</span>
      ))}
    </div>
  )},
  { k: "Status badges", node: (
    <div className="flex flex-col gap-1.5">
      {[["Healthy", "#21BA45", "#E7F7EC"], ["Watch", "#B7791F", "#FEF6E1"], ["At risk", "#DB2828", "#FBE9E9"]].map(([t, c, b]) => (
        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full self-start" style={{ color: c, background: b }}>{t}</span>
      ))}
    </div>
  )},
  { k: "Signal", node: (
    <div className="flex items-start gap-1.5"><Bell size={11} style={{ color: "#004380", marginTop: 2 }} />
      <div className="text-[10px] leading-snug" style={{ color: INK }}><b>NY / NJ deposits up 6%</b> this week</div></div>
  )},
  { k: "Tabs", node: (
    <div className="inline-flex rounded-lg overflow-hidden" style={{ border: "1px solid #E4E5E6" }}>
      {["Summary", "Geo", "Funnel"].map((t, i) => (
        <span key={t} className="text-[9.5px] px-2.5 py-1.5" style={{ background: i === 0 ? "#004380" : "#fff", color: i === 0 ? "#fff" : INK }}>{t}</span>
      ))}
    </div>
  )},
];

const ComponentKitCard = () => {
  const [all, setAll] = useState(false);
  const shown = all ? KIT : KIT.slice(0, 6);
  return (
    <div className="dark-card rounded-3xl p-7">
      <Eyebrow>The component kit</Eyebrow>
      <Prose>
        Legacy decks leaned on pies nobody could read. I narrowed it to a small, reusable kit, one type per question, all aligned
        to what Power BI can render. Every component shares the same title, legend, formatting, and empty state, so a chart with no
        data says so instead of breaking, and a dean can drill from overview into a program without relearning the page.
      </Prose>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {shown.map((c) => <Tile key={c.k} label={c.k}>{c.node}</Tile>)}
      </div>
      <button type="button" onClick={() => setAll((v) => !v)}
        className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4F3FA] rounded-full px-5 py-2.5 border border-white/15 hover:bg-white/5 transition-colors">
        {all ? "show fewer" : <>see all components <span className="inline-flex items-center gap-0.5 text-[#5B9BFF]"><Plus size={12} />{KIT.length - 6}</span></>}
      </button>
    </div>
  );
};

/* ===================== The AI layer ===================== */
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
      <div className="rounded-xl p-4" style={{ background: "linear-gradient(135deg,#EAF1FB,#F4EEFB)", border: "1px solid #DCE3F2" }}>
        <div className="flex items-center gap-1.5" style={{ color: "#004380" }}><Sparkles size={14} /><span className="text-[12px] font-bold">Ask Meridian AI</span></div>
        <div className="mt-2.5 rounded-lg bg-white px-2.5 py-2 flex items-center justify-between" style={{ border: "1px solid #DCE3F2" }}>
          <span className="text-[11px]" style={{ color: "#9AA0AB" }}>Ask about any cohort or term…</span>
          <Sparkles size={12} style={{ color: "#004380" }} />
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Yield by program", "Melt risk"].map((c) => <span key={c} className="text-[9.5px] px-2 py-1 rounded-full" style={{ background: "#fff", color: "#475569", border: "1px solid #DCE3F2" }}>{c}</span>)}
        </div>
      </div>
      <div className="rounded-xl p-4 bg-white">
        <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: MUT }}>Next best action</div>
        <div className="mt-2 text-[12.5px] font-semibold leading-snug" style={{ color: INK }}>Send deposit reminders to 41 India CS admits at risk.</div>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: "#004380" }}>Review list <ArrowRight size={13} /></div>
      </div>
      <div className="rounded-xl p-4 bg-white">
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest" style={{ color: MUT }}><Bell size={11} /> Signals</div>
        <div className="mt-2.5 space-y-2.5">
          <div className="text-[11.5px] leading-snug" style={{ color: INK }}><b>NY / NJ deposits up 6%</b> this week</div>
          <div className="text-[11.5px] leading-snug" style={{ color: INK }}><b>Out-of-state interest up 9%</b>, led by Texas</div>
          <div className="text-[10.5px]" style={{ color: "#A0A0A0" }}>Dismissible, never blocking.</div>
        </div>
      </div>
    </div>
    <p className="mt-4 text-[12.5px] leading-relaxed text-[#A29CB4] max-w-3xl">
      The conversational box is invoked, you ask and it answers; the next-best-action and signals run quietly in the background.
      Human-in-the-loop by default, every feature shows what it looked at, and sensitive demographics are never predictors.
    </p>
  </div>
);

/* ===================== Principles ===================== */
const PRINCIPLES = [
  { icon: Layers, title: "Segment by level everywhere", body: "Undergraduate, graduate, research, and HR never blur into one number." },
  { icon: Eye, title: "Overview to detail", body: "Every screen opens on the headline, then drills down on demand." },
  { icon: BarChart3, title: "Squared, honest charts", body: "No rounded bars, sorted and labeled, no legend hunt." },
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
      <ComponentKitCard />
      <AILayerCard />
      <PrinciplesCard />
    </div>
  );
}
