import React from "react";
import { Layers, Eye, BarChart3, FlagTriangleRight } from "lucide-react";

const PLEX = { fontFamily: "'IBM Plex Sans',sans-serif" };

const Eyebrow = ({ children, muted }) => (
  <span
    className={`font-mono text-[10px] uppercase tracking-widest ${
      muted ? "text-[#A29CB4]" : "text-[#F5379B]"
    }`}
  >
    {children}
  </span>
);

const CORE_SWATCHES = [
  { name: "Maroon", hex: "#A32638" },
  { name: "Navy", hex: "#004380" },
  { name: "Blue", hex: "#4896CF" },
  { name: "Orange", hex: "#E7842E" },
  { name: "Gold", hex: "#E8B431" },
  { name: "Green", hex: "#21BA45" },
  { name: "Red", hex: "#DB2828" },
  { name: "Ink", hex: "#1B1C1D" },
];

const TINTS = [
  { name: "Light blue", hex: "#E7F2FB" },
  { name: "Light orange", hex: "#FFF2E8" },
  { name: "Light gold", hex: "#FFFAE6" },
  { name: "Light gray", hex: "#F2F2F2" },
];

const PaletteSection = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>Palette</Eyebrow>
    <p className="mt-3 text-sm leading-relaxed text-[#A29CB4] max-w-2xl">
      Maroon carries the institution's identity in the navigation. A restrained
      data palette does the work inside every chart, so color always means
      something.
    </p>

    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {CORE_SWATCHES.map((s) => (
        <div key={s.hex} className="rounded-xl overflow-hidden dark-card">
          <div
            className="h-16 w-full"
            style={{
              backgroundColor: s.hex,
              boxShadow:
                s.hex === "#1B1C1D"
                  ? "inset 0 0 0 1px rgba(255,255,255,0.14)"
                  : undefined,
            }}
          />
          <div className="p-2.5">
            <div className="text-xs font-semibold text-[#F4F3FA] leading-tight">
              {s.name}
            </div>
            <div className="font-mono text-[10px] text-[#A29CB4] mt-0.5">
              {s.hex}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-5">
      <Eyebrow muted>Light tints, for KPI cards</Eyebrow>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TINTS.map((t) => (
          <div key={t.hex} className="rounded-xl overflow-hidden dark-card">
            <div
              className="h-12 w-full"
              style={{
                backgroundColor: t.hex,
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)",
              }}
            />
            <div className="p-2.5">
              <div className="text-xs font-semibold text-[#F4F3FA] leading-tight">
                {t.name}
              </div>
              <div className="font-mono text-[10px] text-[#A29CB4] mt-0.5">
                {t.hex}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TYPE_ROWS = [
  {
    tag: "Display",
    node: (
      <span style={{ ...PLEX, fontWeight: 700, fontSize: "30px", color: "#F4F3FA" }}>
        10,670
      </span>
    ),
  },
  {
    tag: "Heading",
    node: (
      <span style={{ ...PLEX, fontWeight: 600, fontSize: "18px", color: "#F4F3FA" }}>
        Applications by school
      </span>
    ),
  },
  {
    tag: "Body",
    node: (
      <span style={{ ...PLEX, fontWeight: 400, fontSize: "14px", color: "#D7D4E2" }}>
        Segmented by level, every screen
      </span>
    ),
  },
  {
    tag: "Numbers",
    node: (
      <span
        style={{
          ...PLEX,
          fontWeight: 700,
          fontSize: "15px",
          color: "#F4F3FA",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        14,722 · 49.2% · $52M
      </span>
    ),
  },
];

const TypographySection = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>Typography, IBM Plex Sans</Eyebrow>
    <p className="mt-3 text-sm leading-relaxed text-[#A29CB4] max-w-2xl">
      One family across the whole product. Tabular numerals keep figures aligned
      down a column, the way analytics should read.
    </p>

    <div className="mt-6 divide-y divide-white/10">
      {TYPE_ROWS.map((r) => (
        <div
          key={r.tag}
          className="flex items-baseline gap-4 py-3.5 first:pt-0 last:pb-0"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#A29CB4] w-20 shrink-0">
            {r.tag}
          </span>
          <span>{r.node}</span>
        </div>
      ))}
    </div>
  </div>
);

const STAGE_BARS = [
  { h: "100%", c: "#4896CF" },
  { h: "58%", c: "#E7842E" },
  { h: "24%", c: "#004380" },
  { h: "20%", c: "#E8B431" },
];

const ComponentsSection = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>Components</Eyebrow>
    <p className="mt-3 text-sm leading-relaxed text-[#A29CB4] max-w-2xl">
      The building blocks, rendered in the product palette. Charts are squared,
      sorted, and labelled so nothing rounds the truth.
    </p>

    <h3 className="mt-6 mb-3 font-display text-sm font-black lowercase text-[#F4F3FA]/85">
      the working kit
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={PLEX}>
      <div className="bg-white rounded-xl p-4" style={{ color: "#1B1C1D" }}>
        <div className="text-[11px] font-semibold" style={{ color: "#7F7F7F" }}>
          Total applications
        </div>
        <div className="text-[22px] font-bold mt-0.5">14,722</div>
        <div
          className="text-[10.5px] font-semibold mt-1"
          style={{ color: "#21BA45" }}
        >
          ▲ 3.1% vs last cycle
        </div>
      </div>

      <div className="bg-white rounded-xl p-4">
        <div
          className="text-[11px] font-semibold mb-2.5"
          style={{ color: "#7F7F7F" }}
        >
          Applications by stage
        </div>
        <div className="flex items-end gap-2 h-16">
          {STAGE_BARS.map((b, i) => (
            <div
              key={i}
              className="flex-1 rounded-[2px]"
              style={{ height: b.h, backgroundColor: b.c }}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4">
        <div
          className="text-[11px] font-semibold mb-2.5"
          style={{ color: "#7F7F7F" }}
        >
          By region
        </div>
        <div className="flex justify-center">
          <div
            className="w-16 h-16 rounded-full relative"
            style={{
              background:
                "conic-gradient(#004380 0 46%,#4896CF 46% 64%,#E7842E 64% 80%,#E8B431 80% 90%,#363D45 90% 100%)",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{ inset: "30%", backgroundColor: "#fff" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Segment by level everywhere",
    body: "Undergraduate, graduate, research, and HR never blur into one number.",
  },
  {
    icon: Eye,
    title: "Overview to detail",
    body: "Every screen opens on the headline, then drills down on demand.",
  },
  {
    icon: BarChart3,
    title: "Squared, honest charts",
    body: "No rounded bars, sorted and labelled, no legend hunt.",
  },
  {
    icon: FlagTriangleRight,
    title: "Flag forecasts as forecasts",
    body: "Projected figures are visibly marked, never dressed as actuals.",
  },
];

const PrinciplesSection = () => (
  <div className="dark-card rounded-3xl p-7">
    <Eyebrow>Principles</Eyebrow>
    <p className="mt-3 text-sm leading-relaxed text-[#A29CB4] max-w-2xl">
      Four rules that hold across all four departments.
    </p>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {PRINCIPLES.map((p) => {
        const I = p.icon;
        return (
          <div
            key={p.title}
            className="flex items-start gap-3 rounded-2xl p-4 dark-card"
          >
            <span className="shrink-0 mt-0.5 text-[#5B9BFF]">
              <I size={18} strokeWidth={2} />
            </span>
            <div>
              <div className="text-sm font-semibold text-[#F4F3FA] leading-tight">
                {p.title}
              </div>
              <div className="text-[13px] leading-relaxed text-[#A29CB4] mt-1">
                {p.body}
              </div>
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
      <PaletteSection />
      <TypographySection />
      <ComponentsSection />
      <PrinciplesSection />
    </div>
  );
}
