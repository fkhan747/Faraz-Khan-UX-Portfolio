import { ArrowRight, ArrowUp, Clock } from "lucide-react";

export default function MeridianFiveProblems() {
  const rows = [
    {
      num: "01",
      label: "Clutter to hierarchy",
      desc: "A page of twelve equal weight tiles, where nothing is first. The fix leads with one headline KPI, then a trend, then the detail.",
      beforeTitle: "Twelve equal tiles",
      afterTitle: "Answer, then trend, then detail",
      Before: () => (
        <div className="grid grid-cols-4 gap-[5px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="block h-6 rounded-[2px]" style={{ background: "#E2E2E2" }} />
          ))}
        </div>
      ),
      After: () => (
        <div className="flex flex-col gap-2">
          <div className="rounded-[2px] px-2.5 py-2" style={{ background: "#E7F2FB" }}>
            <div className="text-[21px] font-bold leading-none tabular-nums" style={{ color: "#004380" }}>4,052</div>
            <div className="mt-0.5 text-[9.5px]" style={{ color: "#6B7280" }}>Total applications</div>
          </div>
          <div className="h-[22px] rounded-[2px] overflow-hidden" style={{ background: "#F2F2F2" }}>
            <svg viewBox="0 0 120 22" preserveAspectRatio="none" className="w-full h-full block">
              <polyline points="0,17 24,14 48,15 72,9 96,7 120,3" fill="none" stroke="#4896CF" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex gap-[5px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className="flex-1 h-4 rounded-[2px]" style={{ background: "#ECECEC" }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "02",
      label: "Pie overload to fit-for-purpose charts",
      desc: "A pie of near equal slices is hard to compare. The rule: shares stay donuts, comparisons become sorted bars, time becomes lines.",
      beforeTitle: "Five near equal slices",
      afterTitle: "Sorted high to low",
      Before: () => (
        <div
          className="w-[84px] h-[84px] rounded-full mx-auto"
          style={{ background: "conic-gradient(#B8B8B8 0 22%,#CECECE 22% 43%,#A8A8A8 43% 62%,#DADADA 62% 80%,#C2C2C2 80% 100%)" }}
        />
      ),
      After: () => {
        const bars = [
          { lb: "Eng", w: "100%", c: "#004380" },
          { lb: "Bus", w: "78%", c: "#4896CF" },
          { lb: "Arts", w: "61%", c: "#4896CF" },
          { lb: "Sci", w: "47%", c: "#E7842E" },
          { lb: "Law", w: "33%", c: "#E8B431" },
        ];
        return (
          <div className="flex flex-col gap-2">
            {bars.map((b) => (
              <div key={b.lb} className="grid grid-cols-[46px_1fr] items-center gap-2">
                <span className="text-[10px]" style={{ color: "#6B7280" }}>{b.lb}</span>
                <span className="h-[13px] rounded-[2px] overflow-hidden block" style={{ background: "#F2F2F2" }}>
                  <i className="block h-full rounded-[2px]" style={{ width: b.w, background: b.c }} />
                </span>
              </div>
            ))}
          </div>
        );
      },
    },
    {
      num: "03",
      label: "Navigation friction to overview and drill-down",
      desc: "Four disconnected pages with no links between them. One overview cockpit drills down into four modules. Nothing is a dead end.",
      beforeTitle: "Four disconnected pages",
      afterTitle: "Cockpit, then drill-down",
      Before: () => (
        <div className="grid grid-cols-2 gap-2.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="block h-[30px] rounded-[2px]" style={{ background: "#E2E2E2" }} />
          ))}
        </div>
      ),
      After: () => (
        <div className="flex flex-col items-center gap-2.5">
          <div className="rounded-[2px] px-3.5 py-1.5 text-[10.5px] font-semibold text-white" style={{ background: "#004380" }}>
            Overview
          </div>
          <div className="relative flex w-full justify-center gap-[7px] pt-3.5">
            <span
              className="absolute top-0 left-[11%] right-[11%] h-[13px]"
              style={{ borderLeft: "1.5px solid #4896CF", borderRight: "1.5px solid #4896CF", borderTop: "1.5px solid #4896CF" }}
            />
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="relative flex-1 max-w-[62px] h-[30px] rounded-[2px]" style={{ background: "#E7F2FB", border: "1px solid #4896CF" }}>
                <span className="absolute left-1/2 -translate-x-1/2" style={{ top: "-9px", width: "1.5px", height: "7px", background: "#4896CF" }} />
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "04",
      label: "Flat numbers to KPI with delta",
      desc: "A flat gray number, no prior year, no direction. The fix carries the value, a colored delta, an arrow, a sparkline, and vs last year.",
      beforeTitle: "Flat number, no context",
      afterTitle: "Value, delta, direction, trend",
      Before: () => (
        <div className="flex flex-col items-start justify-center gap-1.5 rounded-[2px] p-4" style={{ background: "#EFEFEF" }}>
          <b className="text-[30px] font-semibold leading-none tabular-nums" style={{ color: "#9A9A9A" }}>51%</b>
          <span className="text-[10px]" style={{ color: "#A8A8A8" }}>Admit rate</span>
        </div>
      ),
      After: () => (
        <div className="rounded-[2px] px-3.5 py-3.5" style={{ background: "#FFFFFF", border: "1px solid #F2F2F2" }}>
          <div className="text-[30px] font-bold leading-none tracking-tight tabular-nums" style={{ color: "#1B1C1D" }}>51%</div>
          <div className="mt-1.5 text-[10.5px]" style={{ color: "#6B7280" }}>Admit rate</div>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-[3px] rounded-[2px] px-1.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#21BA45", background: "#E7F7EC" }}
            >
              <ArrowUp className="w-[11px] h-[11px]" strokeWidth={3} />
              8 pts
            </span>
            <span className="text-[10px]" style={{ color: "#6B7280" }}>vs last year</span>
          </div>
          <div className="mt-2.5">
            <svg viewBox="0 0 160 26" preserveAspectRatio="none" className="w-full h-[26px] block">
              <polyline points="0,20 32,18 64,19 96,12 128,9 160,4" fill="none" stroke="#21BA45" strokeWidth="2" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      num: "05",
      label: "Orienting time to reading time",
      desc: "A dense page spends its first 90 seconds orienting. The answer first page spends that time for the user, so it reads instead.",
      beforeTitle: "Dense, spent orienting",
      afterTitle: "Answer first, spent reading",
      Before: () => (
        <div className="flex flex-col items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 text-[11px] font-semibold" style={{ background: "#EDEDED", color: "#7A7A7A" }}>
            <Clock className="w-[15px] h-[15px] shrink-0" />
            90s orienting
          </span>
          <div className="grid grid-cols-6 gap-[3px] w-full">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="block h-[9px] rounded-[1px]" style={{ background: "#E2E2E2" }} />
            ))}
          </div>
        </div>
      ),
      After: () => (
        <div className="flex flex-col items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 text-[11px] font-semibold" style={{ background: "#E7F7EC", color: "#178A35" }}>
            <Clock className="w-[15px] h-[15px] shrink-0" />
            90s reading
          </span>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="h-[30px] rounded-[2px]" style={{ background: "#E7F2FB" }} />
            <div className="flex gap-1.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className="flex-1 h-[11px] rounded-[2px]" style={{ background: "#ECECEC" }} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-2 flex flex-col gap-6">
      {rows.map((r) => (
        <div key={r.num} className="dark-card rounded-3xl p-6 grid md:grid-cols-[1.1fr_1.4fr] gap-6 items-center">
          <div>
            <div className="font-display text-5xl md:text-6xl font-black leading-none tracking-tight" style={{ color: "#F5379B" }}>
              {r.num}
            </div>
            <div className="mt-3 font-display text-lg font-bold text-[#F4F3FA]">{r.label}</div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#A29CB4] max-w-[330px]">{r.desc}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 relative bg-white rounded-lg p-3 pt-5 min-h-[178px] flex flex-col">
              <span
                className="absolute -top-2.5 left-3 font-mono text-[9.5px] font-semibold uppercase tracking-widest px-2.5 py-[3px] rounded-full text-white"
                style={{ background: "#8C8C8C" }}
              >
                Before
              </span>
              <div className="text-[11.5px] font-semibold mb-2.5" style={{ color: "#8A8A8A" }}>{r.beforeTitle}</div>
              <div className="flex-1 flex flex-col justify-center">
                <r.Before />
              </div>
            </div>

            <ArrowRight className="w-6 h-6 shrink-0" style={{ color: "#F5379B" }} />

            <div className="flex-1 relative bg-white rounded-lg p-3 pt-5 min-h-[178px] flex flex-col">
              <span
                className="absolute -top-2.5 left-3 font-mono text-[9.5px] font-semibold uppercase tracking-widest px-2.5 py-[3px] rounded-full text-white"
                style={{ background: "#004380" }}
              >
                After
              </span>
              <div className="text-[11.5px] font-semibold mb-2.5" style={{ color: "#1B1C1D" }}>{r.afterTitle}</div>
              <div className="flex-1 flex flex-col justify-center">
                <r.After />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
