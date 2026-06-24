import { useEffect } from "react";

/*
  Meridian low-fidelity wireframes, rebuilt as hand-drawn sketches.
  Each screen is an SVG "pencil" drawing on a paper panel: wobbly ink strokes
  (feTurbulence + feDisplacementMap), squiggle numbers, and handwritten labels
  in Caveat. A single reusable <Sketch> renders a per-screen layout spec so the
  eight screens genuinely differ.
*/

const INK = "#3A3632";
const INK_SOFT = "#6E665C";
const PAPER = "#FAF7EF";

// A deterministic wobble so the same sketch looks the same on every render.
// Tiny pseudo-random jitter keyed off a string + index.
function jitter(seed, i, amp) {
  const n = Math.sin((seed.charCodeAt(i % seed.length) + i * 12.9898) * 78.233) * 43758.5453;
  return ((n - Math.floor(n)) - 0.5) * 2 * amp;
}

/* ---- low-level hand-drawn primitives (all stroke-only, on the paper) ---- */

// A rectangle drawn as a single near-closed path with jittered corners.
function HandRect({ x, y, w, h, seed = "r", fill = "none", sw = 1.6, dashed = false }) {
  const j = (i, a = 1.4) => jitter(seed, i, a);
  const p = `M ${x + j(0)} ${y + j(1)}
    C ${x + w * 0.35} ${y + j(2)}, ${x + w * 0.7} ${y + j(3)}, ${x + w + j(4)} ${y + j(5)}
    C ${x + w + j(6)} ${y + h * 0.35}, ${x + w + j(7)} ${y + h * 0.7}, ${x + w + j(8)} ${y + h + j(9)}
    C ${x + w * 0.65} ${y + h + j(10)}, ${x + w * 0.3} ${y + h + j(11)}, ${x + j(12)} ${y + h + j(13)}
    C ${x + j(14)} ${y + h * 0.7}, ${x + j(15)} ${y + h * 0.35}, ${x + j(0)} ${y + j(1)} Z`;
  return (
    <path
      d={p}
      fill={fill}
      stroke={INK}
      strokeWidth={sw}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeDasharray={dashed ? "3 3" : "none"}
    />
  );
}

// A short hand-drawn line (used for nav ticks, ruled rows, labels underline).
function HandLine({ x1, y1, x2, y2, seed = "l", sw = 1.4, color = INK }) {
  const mx = (x1 + x2) / 2 + jitter(seed, 1, 2);
  const my = (y1 + y2) / 2 + jitter(seed, 2, 2);
  return (
    <path
      d={`M ${x1} ${y1} Q ${mx} ${my}, ${x2} ${y2}`}
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
    />
  );
}

// A "squiggle number" stand-in for a KPI value: a jagged little polyline.
function Squiggle({ x, y, w, seed = "s", color = INK }) {
  const steps = 7;
  let d = `M ${x} ${y}`;
  for (let i = 1; i <= steps; i++) {
    const px = x + (w / steps) * i;
    const py = y + jitter(seed, i, 2.6);
    d += ` L ${px} ${py}`;
  }
  return <path d={d} fill="none" stroke={color} strokeWidth={1.4} strokeLinecap="round" />;
}

// A handwritten text label (Caveat) anchored bottom-left by default.
function Ink({ x, y, children, size = 13, anchor = "start", color = INK_SOFT, weight = 600 }) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="'Caveat', 'Comic Sans MS', 'Segoe Print', cursive"
      fontSize={size}
      fontWeight={weight}
      fill={color}
      textAnchor={anchor}
      style={{ letterSpacing: "0.2px" }}
    >
      {children}
    </text>
  );
}

/* ---- chart "shapes" drawn by hand inside a region box ---- */

function ChartBars({ x, y, w, h, seed }) {
  const heights = [0.45, 0.7, 0.55, 0.85, 0.6, 0.95, 0.5];
  const n = heights.length;
  const gap = 4;
  const bw = (w - gap * (n - 1)) / n;
  return (
    <g>
      <HandLine x1={x} y1={y + h} x2={x + w} y2={y + h} seed={seed + "axis"} sw={1.4} />
      {heights.map((hh, i) => {
        const bh = h * hh;
        return (
          <HandRect
            key={i}
            x={x + i * (bw + gap)}
            y={y + h - bh}
            w={bw}
            h={bh}
            seed={seed + i}
            sw={1.4}
          />
        );
      })}
    </g>
  );
}

function ChartLine({ x, y, w, h, seed }) {
  const pts = [0.78, 0.55, 0.62, 0.34, 0.46, 0.22, 0.3, 0.12];
  const n = pts.length;
  let d = "";
  pts.forEach((p, i) => {
    const px = x + (w / (n - 1)) * i;
    const py = y + h * p + jitter(seed, i, 2.2);
    d += `${i === 0 ? "M" : "L"} ${px} ${py} `;
  });
  return (
    <g>
      <HandLine x1={x} y1={y + h} x2={x + w} y2={y + h} seed={seed + "axis"} sw={1.4} />
      <path d={d} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function ChartDonut({ x, y, w, h, seed }) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const r = Math.min(w, h) / 2 - 3;
  // hand circle as a slightly-open jittered path
  const ring = [];
  const segs = 16;
  for (let i = 0; i <= segs; i++) {
    const a = (i / segs) * Math.PI * 2;
    const rr = r + jitter(seed, i, 1.6);
    ring.push(`${i === 0 ? "M" : "L"} ${cx + Math.cos(a) * rr} ${cy + Math.sin(a) * rr}`);
  }
  // a wedge slice
  const a0 = -Math.PI / 2;
  const a1 = a0 + Math.PI * 0.9;
  return (
    <g>
      <path d={ring.join(" ") + " Z"} fill="none" stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path
        d={`M ${cx} ${cy} L ${cx + Math.cos(a0) * r} ${cy + Math.sin(a0) * r}`}
        stroke={INK}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d={`M ${cx} ${cy} L ${cx + Math.cos(a1) * r} ${cy + Math.sin(a1) * r}`}
        stroke={INK}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={r * 0.42} fill={PAPER} stroke={INK} strokeWidth={1.4} />
    </g>
  );
}

function ChartFunnel({ x, y, w, h, seed }) {
  const widths = [0.95, 0.78, 0.6, 0.42, 0.26];
  const n = widths.length;
  const gap = 3;
  const bh = (h - gap * (n - 1)) / n;
  return (
    <g>
      {widths.map((ww, i) => (
        <HandRect
          key={i}
          x={x + (w - w * ww) / 2}
          y={y + i * (bh + gap)}
          w={w * ww}
          h={bh}
          seed={seed + i}
          sw={1.4}
        />
      ))}
    </g>
  );
}

function ChartTable({ x, y, w, h, seed }) {
  const rows = 4;
  const rh = h / (rows + 1);
  const lines = [];
  for (let i = 0; i <= rows; i++) {
    lines.push(
      <HandLine key={"h" + i} x1={x} y1={y + rh * (i + 1)} x2={x + w} y2={y + rh * (i + 1)} seed={seed + "h" + i} sw={1.2} />
    );
  }
  // two column dividers
  const c1 = x + w * 0.5;
  const c2 = x + w * 0.75;
  return (
    <g>
      <HandRect x={x} y={y} w={w} h={h} seed={seed + "frame"} sw={1.4} />
      {lines}
      <HandLine x1={c1} y1={y} x2={c1} y2={y + h} seed={seed + "c1"} sw={1.2} color={INK_SOFT} />
      <HandLine x1={c2} y1={y} x2={c2} y2={y + h} seed={seed + "c2"} sw={1.2} color={INK_SOFT} />
    </g>
  );
}

const CHARTS = {
  bars: ChartBars,
  line: ChartLine,
  donut: ChartDonut,
  funnel: ChartFunnel,
  table: ChartTable,
};

// One labelled region: a hand-drawn box, a handwritten caption, and a chart.
function Region({ x, y, w, h, label, kind, seed }) {
  const Chart = CHARTS[kind];
  const labelY = y + 14;
  const chartPad = 8;
  const chartY = y + 20;
  const chartH = h - 26;
  return (
    <g>
      <HandRect x={x} y={y} w={w} h={h} seed={seed} sw={1.5} />
      <Ink x={x + 6} y={labelY} size={13}>{label}</Ink>
      {Chart ? (
        <Chart x={x + chartPad} y={chartY} w={w - chartPad * 2} h={chartH} seed={seed} />
      ) : null}
    </g>
  );
}

/* ---- the full screen sketch (sidebar + topbar + KPIs + regions + rail) ---- */

const VB_W = 460;
const VB_H = 300;

function Sketch({ id, regions }) {
  const filterId = `wobble-${id}`;
  // canvas layout
  const sideX = 10;
  const sideW = 34;
  const railW = 52;
  const railX = VB_W - railW - 10;
  const bodyX = sideX + sideW + 10;
  const bodyW = railX - bodyX - 10;
  const topY = 12;
  const topH = 18;
  const kpiY = topY + topH + 8;
  const kpiH = 34;
  const kpiN = 4;
  const kpiGap = 6;
  const kpiW = (bodyW - kpiGap * (kpiN - 1)) / kpiN;
  const gridTop = kpiY + kpiH + 10;
  const gridBottom = VB_H - 12;
  const gridH = gridBottom - gridTop;

  // place region rows
  const rowGap = 8;
  const totalRowFr = regions.reduce((a, r) => a + r.fr, 0);
  let cursorY = gridTop;
  const placed = [];
  regions.forEach((row, ri) => {
    const rowH = (gridH - rowGap * (regions.length - 1)) * (row.fr / totalRowFr);
    const colGap = 8;
    const totalColFr = row.cells.reduce((a, c) => a + c.fr, 0);
    let cursorX = bodyX;
    row.cells.forEach((cell, ci) => {
      const cellW = (bodyW - colGap * (row.cells.length - 1)) * (cell.fr / totalColFr);
      placed.push({
        key: `${ri}-${ci}`,
        x: cursorX,
        y: cursorY,
        w: cellW,
        h: rowH,
        label: cell.label,
        kind: cell.kind,
        seed: `${id}-${ri}-${ci}`,
      });
      cursorX += cellW + colGap;
    });
    cursorY += rowH + rowGap;
  });

  return (
    <div style={{ background: PAPER }} className="relative">
      {/* faint ruled-paper texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent 0 23px, rgba(58,54,50,0.05) 23px 24px)",
        }}
      />
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="relative w-full block"
        style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        role="img"
        aria-label="Hand-drawn low-fidelity wireframe sketch"
      >
        <defs>
          <filter id={filterId} x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.022" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g filter={`url(#${filterId})`}>
          {/* sidebar */}
          <HandRect x={sideX} y={topY} w={sideW} h={VB_H - topY - 12} seed={`${id}-side`} sw={1.6} />
          <circle cx={sideX + sideW / 2} cy={topY + 14} r={6} fill="none" stroke={INK} strokeWidth={1.5} />
          {[0, 1, 2, 3, 4].map((i) => (
            <HandLine
              key={i}
              x1={sideX + 6}
              y1={topY + 36 + i * 22}
              x2={sideX + sideW - 6}
              y2={topY + 36 + i * 22}
              seed={`${id}-nav${i}`}
              sw={1.5}
            />
          ))}

          {/* top bar */}
          <HandRect x={bodyX} y={topY} w={bodyW} h={topH} seed={`${id}-top`} sw={1.5} />
          <HandLine x1={bodyX + 8} y1={topY + topH / 2} x2={bodyX + 70} y2={topY + topH / 2} seed={`${id}-title`} sw={1.6} />
          <circle cx={bodyX + bodyW - 12} cy={topY + topH / 2} r={5} fill="none" stroke={INK} strokeWidth={1.5} />

          {/* KPI row */}
          {Array.from({ length: kpiN }).map((_, i) => {
            const kx = bodyX + i * (kpiW + kpiGap);
            return (
              <g key={i}>
                <HandRect x={kx} y={kpiY} w={kpiW} h={kpiH} seed={`${id}-kpi${i}`} sw={1.5} />
                <HandLine x1={kx + 6} y1={kpiY + 11} x2={kx + kpiW * 0.62} y2={kpiY + 11} seed={`${id}-kl${i}`} sw={1.2} color={INK_SOFT} />
                <Squiggle x={kx + 6} y={kpiY + 24} w={kpiW * 0.7} seed={`${id}-sq${i}`} />
              </g>
            );
          })}

          {/* per-screen regions */}
          {placed.map((r) => (
            <Region key={r.key} x={r.x} y={r.y} w={r.w} h={r.h} label={r.label} kind={r.kind} seed={r.seed} />
          ))}

          {/* right rail: signals + Ask AI */}
          <HandRect x={railX} y={topY} w={railW} h={VB_H - topY - 12} seed={`${id}-rail`} sw={1.6} />
          <Ink x={railX + 6} y={topY + 16} size={13}>signals</Ink>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <HandRect x={railX + 6} y={topY + 24 + i * 26} w={railW - 12} h={20} seed={`${id}-sig${i}`} sw={1.3} />
              <HandLine x1={railX + 10} y1={topY + 34 + i * 26} x2={railX + railW - 12} y2={topY + 34 + i * 26} seed={`${id}-sl${i}`} sw={1.1} color={INK_SOFT} />
            </g>
          ))}
          <HandRect x={railX + 6} y={VB_H - 52} w={railW - 12} h={34} seed={`${id}-ai`} sw={1.6} dashed />
          <Ink x={railX + railW / 2} y={VB_H - 30} size={13} anchor="middle" color={INK} weight={700}>
            {"✦ Ask AI"}
          </Ink>
        </g>
      </svg>
    </div>
  );
}

/* ---- the eight screens + their distinguishing layouts ---- */

const screens = [
  {
    id: "s1",
    tag: "screen 01",
    title: "Institutional Overview",
    regions: [
      { fr: 1, cells: [{ label: "cycle pace", kind: "line", fr: 1.6 }, { label: "by school", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "stage funnel", kind: "funnel", fr: 1 }, { label: "by region", kind: "donut", fr: 1 }] },
    ],
  },
  {
    id: "s2",
    tag: "screen 02",
    title: "Undergraduate Overview",
    regions: [
      { fr: 1, cells: [{ label: "application funnel", kind: "funnel", fr: 1.4 }, { label: "by school", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "applicant mix", kind: "donut", fr: 1 }, { label: "year over year", kind: "line", fr: 1.4 }] },
    ],
  },
  {
    id: "s3",
    tag: "screen 03",
    title: "Undergraduate Geo",
    regions: [
      { fr: 1, cells: [{ label: "by region", kind: "bars", fr: 1.5 }, { label: "domestic / intl", kind: "donut", fr: 1 }] },
      { fr: 1, cells: [{ label: "top states", kind: "table", fr: 1 }] },
    ],
  },
  {
    id: "s4",
    tag: "screen 04",
    title: "Funnel, Yield & Melt",
    regions: [
      { fr: 1.1, cells: [{ label: "yield funnel", kind: "funnel", fr: 1 }] },
      { fr: 1, cells: [{ label: "deposit pace", kind: "line", fr: 1.2 }, { label: "segments", kind: "table", fr: 1 }] },
    ],
  },
  {
    id: "s5",
    tag: "screen 05",
    title: "Graduate Overview",
    regions: [
      { fr: 1, cells: [{ label: "funnel", kind: "funnel", fr: 1.3 }, { label: "by school", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "composition", kind: "donut", fr: 1 }, { label: "review queue", kind: "table", fr: 1.3 }] },
    ],
  },
  {
    id: "s6",
    tag: "screen 06",
    title: "Graduate Geo",
    regions: [
      { fr: 1, cells: [{ label: "source markets", kind: "bars", fr: 1.5 }, { label: "by region", kind: "donut", fr: 1 }] },
      { fr: 1, cells: [{ label: "country performance", kind: "table", fr: 1 }] },
    ],
  },
  {
    id: "s7",
    tag: "screen 07",
    title: "Research Intelligence",
    regions: [
      { fr: 1, cells: [{ label: "funding trend", kind: "line", fr: 1.4 }, { label: "awards", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "by college", kind: "bars", fr: 1 }, { label: "expenditure", kind: "line", fr: 1 }] },
    ],
  },
  {
    id: "s8",
    tag: "screen 08",
    title: "HR Workforce",
    regions: [
      { fr: 1, cells: [{ label: "headcount trend", kind: "line", fr: 1.4 }, { label: "turnover", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "composition", kind: "donut", fr: 1 }] },
    ],
  },
];

export default function MeridianWireframes() {
  // Inject the Caveat handwriting font once (no <link> available at module scope).
  useEffect(() => {
    const id = "meridian-caveat-font";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="mt-2">
      <div className="grid sm:grid-cols-2 gap-6">
        {screens.map((s) => (
          <figure key={s.id} className="dark-card rounded-3xl overflow-hidden">
            <div className="p-3 md:p-4" style={{ background: PAPER }}>
              <Sketch id={s.id} regions={s.regions} />
            </div>
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
