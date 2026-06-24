const KPI = ({ w }) => (
  <div className="h-9 rounded-[3px] bg-[#DBE6F1]" style={{ width: w }} />
);

const Bar = ({ h }) => (
  <div className="rounded-[2px] bg-[#C7CBD4]" style={{ height: h }} />
);

const Line = ({ h }) => (
  <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="w-full" style={{ height: h }}>
    <polyline
      points="0,32 18,24 36,28 54,16 72,20 90,9 108,13 120,6"
      fill="none"
      stroke="#9AA0AB"
      strokeWidth="2.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const Donut = ({ s }) => (
  <div
    className="rounded-full"
    style={{
      width: s,
      height: s,
      background: "conic-gradient(#C7CBD4 0 62%, #D8DBE0 62% 100%)",
      WebkitMask: "radial-gradient(circle at center, transparent 38%, #000 39%)",
      mask: "radial-gradient(circle at center, transparent 38%, #000 39%)",
    }}
  />
);

const Block = ({ label, children, className = "" }) => (
  <div className={`rounded-[3px] bg-[#D8DBE0] p-2 flex flex-col gap-1.5 ${className}`}>
    {label ? (
      <div className="font-mono text-[8px] uppercase tracking-wider text-[#9AA0AB]">{label}</div>
    ) : null}
    {children}
  </div>
);

const Skeleton = ({ blocks }) => (
  <div className="bg-[#F4F5F7] p-4">
    <div className="flex gap-2.5">
      <div className="w-7 shrink-0 rounded-[3px] bg-[#B9A0A4] self-stretch" style={{ minHeight: 200 }} />
      <div className="flex-1 flex flex-col gap-2.5">
        <div className="h-5 rounded-[3px] bg-[#C7CBD4]" />
        <div className="flex gap-2">
          <KPI w="24%" />
          <KPI w="24%" />
          <KPI w="24%" />
          <KPI w="24%" />
        </div>
        {blocks.map((row, ri) => (
          <div key={ri} className="grid gap-2" style={{ gridTemplateColumns: row.cols }}>
            {row.cells.map((cell, ci) => (
              <Block key={ci} label={cell.label} className={cell.h}>
                {cell.kind === "line" ? <Line h={28} /> : null}
                {cell.kind === "bars" ? (
                  <div className="flex items-end gap-1 h-full pt-1">
                    {[14, 22, 18, 26, 20, 30, 16].map((bh, bi) => (
                      <Bar key={bi} h={bh} />
                    ))}
                  </div>
                ) : null}
                {cell.kind === "donut" ? (
                  <div className="flex items-center justify-center h-full overflow-hidden pt-1">
                    <Donut s={40} />
                  </div>
                ) : null}
                {cell.kind === "funnel" ? (
                  <div className="flex flex-col justify-center gap-1 h-full overflow-hidden pt-1">
                    {["92%", "74%", "55%", "38%", "24%"].map((fw, fi) => (
                      <div key={fi} className="h-2 rounded-[2px] bg-[#C7CBD4] mx-auto" style={{ width: fw }} />
                    ))}
                  </div>
                ) : null}
                {cell.kind === "hfunnel" ? (
                  <div className="flex items-stretch gap-1 h-full pt-1">
                    {["100%", "78%", "58%", "40%", "26%"].map((fh, fi) => (
                      <div key={fi} className="flex-1 rounded-[2px] bg-[#C7CBD4] self-center" style={{ height: fh }} />
                    ))}
                  </div>
                ) : null}
                {cell.kind === "table" ? (
                  <div className="flex flex-col gap-1 pt-1">
                    {[0, 1, 2, 3].map((tr) => (
                      <div key={tr} className="flex gap-1">
                        <div className="h-2 rounded-[2px] bg-[#C7CBD4] flex-[2]" />
                        <div className="h-2 rounded-[2px] bg-[#C7CBD4] flex-1" />
                        <div className="h-2 rounded-[2px] bg-[#C7CBD4] flex-1" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </Block>
            ))}
          </div>
        ))}
      </div>
      <div className="w-12 shrink-0 rounded-[3px] bg-[#E2E4E9] p-1.5 flex flex-col gap-1.5">
        <div className="font-mono text-[7px] uppercase tracking-wider text-[#9AA0AB]">signals</div>
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="h-6 rounded-[2px] bg-[#D8DBE0]" />
        ))}
      </div>
    </div>
  </div>
);

const screens = [
  {
    tag: "screen 01",
    title: "Institutional Overview",
    blocks: [
      { cols: "1.6fr 1fr", cells: [{ label: "cycle pace", kind: "line", h: "h-24" }, { label: "by school", kind: "bars", h: "h-24" }] },
      { cols: "1fr 1fr", cells: [{ label: "stage funnel", kind: "funnel", h: "h-20" }, { label: "region", kind: "donut", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 02",
    title: "Undergraduate Overview",
    blocks: [
      { cols: "1.4fr 1fr", cells: [{ label: "application funnel", kind: "funnel", h: "h-24" }, { label: "by school", kind: "bars", h: "h-24" }] },
      { cols: "1fr 1.4fr", cells: [{ label: "applicant mix", kind: "donut", h: "h-20" }, { label: "year over year", kind: "line", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 03",
    title: "Undergraduate Geo",
    blocks: [
      { cols: "1.5fr 1fr", cells: [{ label: "by region", kind: "bars", h: "h-24" }, { label: "domestic / intl", kind: "donut", h: "h-24" }] },
      { cols: "1fr", cells: [{ label: "top states", kind: "table", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 04",
    title: "Funnel, Yield & Melt",
    blocks: [
      { cols: "1fr", cells: [{ label: "yield funnel", kind: "hfunnel", h: "h-24" }] },
      { cols: "1.2fr 1fr", cells: [{ label: "deposit pace", kind: "line", h: "h-20" }, { label: "segments", kind: "table", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 05",
    title: "Graduate Overview",
    blocks: [
      { cols: "1.3fr 1fr", cells: [{ label: "funnel", kind: "funnel", h: "h-24" }, { label: "by school", kind: "bars", h: "h-24" }] },
      { cols: "1fr 1.3fr", cells: [{ label: "composition", kind: "donut", h: "h-20" }, { label: "review queue", kind: "table", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 06",
    title: "Graduate Geo",
    blocks: [
      { cols: "1.5fr 1fr", cells: [{ label: "source markets", kind: "bars", h: "h-24" }, { label: "by region", kind: "donut", h: "h-24" }] },
      { cols: "1fr", cells: [{ label: "country performance", kind: "table", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 07",
    title: "Research Intelligence",
    blocks: [
      { cols: "1.4fr 1fr", cells: [{ label: "funding trend", kind: "line", h: "h-24" }, { label: "awards", kind: "bars", h: "h-24" }] },
      { cols: "1fr 1fr", cells: [{ label: "by college", kind: "bars", h: "h-20" }, { label: "expenditure", kind: "line", h: "h-20" }] },
    ],
  },
  {
    tag: "screen 08",
    title: "HR Workforce",
    blocks: [
      { cols: "1.4fr 1fr", cells: [{ label: "headcount trend", kind: "line", h: "h-24" }, { label: "turnover", kind: "bars", h: "h-24" }] },
      { cols: "1fr", cells: [{ label: "composition", kind: "donut", h: "h-20" }] },
    ],
  },
];

export default function MeridianWireframes() {
  return (
    <div className="mt-2">
      <div className="grid sm:grid-cols-2 gap-6">
        {screens.map((s) => (
          <figure key={s.title} className="dark-card rounded-3xl overflow-hidden">
            <Skeleton blocks={s.blocks} />
            <figcaption className="p-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#F5379B]">{s.tag}</span>
              <h3 className="mt-2 font-display text-lg font-black text-[#F4F3FA]">{s.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
