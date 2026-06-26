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

/* combo: stacked columns + a line overlay (matches HR Trends Headcount) */
function ChartCombo({ x, y, w, h, seed }) {
  const heights = [0.7, 0.66, 0.62, 0.58, 0.55, 0.52, 0.48, 0.45];
  const n = heights.length;
  const gap = 3;
  const bw = (w - gap * (n - 1)) / n;
  // line points across the top of each column
  const pts = [0.3, 0.34, 0.32, 0.28, 0.22, 0.26, 0.32, 0.38];
  let d = "";
  pts.forEach((p, i) => {
    const px = x + i * (bw + gap) + bw / 2;
    const py = y + h * p + jitter(seed, i, 1.4);
    d += `${i === 0 ? "M" : "L"} ${px} ${py} `;
  });
  return (
    <g>
      <HandLine x1={x} y1={y + h} x2={x + w} y2={y + h} seed={seed + "axis"} sw={1.3} />
      {heights.map((hh, i) => {
        const bh = h * hh;
        // 3 stacked segments per bar
        const a = bh * 0.45, b = bh * 0.3;
        return (
          <g key={i}>
            <HandRect x={x + i * (bw + gap)} y={y + h - bh} w={bw} h={a} seed={seed + "a" + i} sw={1.2} />
            <HandRect x={x + i * (bw + gap)} y={y + h - bh + a} w={bw} h={b} seed={seed + "b" + i} sw={1.2} />
            <HandRect x={x + i * (bw + gap)} y={y + h - bh + a + b} w={bw} h={bh - a - b} seed={seed + "c" + i} sw={1.2} />
          </g>
        );
      })}
      <path d={d} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  );
}

/* histogram: right-skewed bars with a bell curve overlay (H-Index distribution) */
function ChartHistogram({ x, y, w, h, seed }) {
  const heights = [0.95, 0.85, 0.62, 0.45, 0.32, 0.24, 0.18, 0.14, 0.1, 0.08, 0.06, 0.05];
  const n = heights.length;
  const gap = 1.5;
  const bw = (w - gap * (n - 1)) / n;
  // bell curve overlay (rough Gaussian shape)
  const steps = 24;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const px = x + (w / steps) * i;
    const t = (i / steps) * 3.5 - 0.3;
    const py = y + h - h * 0.95 * Math.exp(-Math.pow(t - 0.5, 2) / 0.18) + jitter(seed, i, 1.2);
    d += `${i === 0 ? "M" : "L"} ${px} ${py} `;
  }
  return (
    <g>
      <HandLine x1={x} y1={y + h} x2={x + w} y2={y + h} seed={seed + "axis"} sw={1.3} />
      {heights.map((hh, i) => (
        <HandRect key={i} x={x + i * (bw + gap)} y={y + h - h * hh} w={bw} h={h * hh} seed={seed + i} sw={1.1} />
      ))}
      <path d={d} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
}

/* world map: a rough sketched continent silhouette to suggest "geographic view" */
function ChartMap({ x, y, w, h, seed }) {
  // 4 blob-shaped paths roughly placed like continents, then a few dots for bubbles
  const cx = x + w / 2, cy = y + h / 2;
  const blob = (bx, by, bw, bh, s) => {
    const j = (i, a = 2.5) => jitter(s, i, a);
    return `M ${bx + j(0)} ${by + bh * 0.45 + j(1)}
      C ${bx + bw * 0.1} ${by + j(2)}, ${bx + bw * 0.6} ${by + j(3)}, ${bx + bw + j(4)} ${by + bh * 0.5 + j(5)}
      C ${bx + bw * 0.9} ${by + bh + j(6)}, ${bx + bw * 0.3} ${by + bh + j(7)}, ${bx + j(8)} ${by + bh * 0.45 + j(1)} Z`;
  };
  return (
    <g>
      <path d={blob(x + w * 0.05, y + h * 0.18, w * 0.30, h * 0.55, seed + "na")} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={blob(x + w * 0.20, y + h * 0.55, w * 0.20, h * 0.40, seed + "sa")} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={blob(x + w * 0.42, y + h * 0.18, w * 0.18, h * 0.32, seed + "eu")} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={blob(x + w * 0.42, y + h * 0.45, w * 0.20, h * 0.40, seed + "af")} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={blob(x + w * 0.55, y + h * 0.18, w * 0.40, h * 0.55, seed + "as")} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={blob(x + w * 0.78, y + h * 0.65, w * 0.16, h * 0.22, seed + "oc")} fill="none" stroke={INK} strokeWidth={1.4} />
      {/* application bubbles, sized to suggest top source countries */}
      <circle cx={x + w * 0.72} cy={y + h * 0.42} r={Math.min(w, h) * 0.08} fill="none" stroke={INK} strokeWidth={1.4} />
      <circle cx={x + w * 0.83} cy={y + h * 0.34} r={Math.min(w, h) * 0.06} fill="none" stroke={INK} strokeWidth={1.4} />
      <circle cx={x + w * 0.18} cy={y + h * 0.36} r={Math.min(w, h) * 0.04} fill="none" stroke={INK} strokeWidth={1.4} />
      <circle cx={x + w * 0.50} cy={y + h * 0.55} r={Math.min(w, h) * 0.035} fill="none" stroke={INK} strokeWidth={1.4} />
    </g>
  );
}

/* small multiples: a 3x2 grid of mini-cards, each with two stacked bars
   (matches the Research/Expenditure by-school small multiples) */
function ChartMultiples({ x, y, w, h, seed }) {
  const cols = 3, rows = 2;
  const gap = 4;
  const cw = (w - gap * (cols - 1)) / cols;
  const ch = (h - gap * (rows - 1)) / rows;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = x + c * (cw + gap), cy = y + r * (ch + gap);
      const s = seed + r + "-" + c;
      cells.push(
        <g key={s}>
          <HandRect x={cx} y={cy} w={cw} h={ch} seed={s + "f"} sw={1.2} />
          <HandLine x1={cx + 4} y1={cy + 8} x2={cx + cw * 0.5} y2={cy + 8} seed={s + "t"} sw={1} color={INK_SOFT} />
          {/* two narrow bars per card */}
          <HandRect x={cx + 6} y={cy + ch * 0.45} w={cw * (0.5 + (r + c) * 0.07)} h={ch * 0.12} seed={s + "1"} sw={1.1} />
          <HandRect x={cx + 6} y={cy + ch * 0.65} w={cw * (0.3 + (r + c) * 0.05)} h={ch * 0.12} seed={s + "2"} sw={1.1} />
        </g>
      );
    }
  }
  return <g>{cells}</g>;
}

const CHARTS = {
  bars: ChartBars,
  line: ChartLine,
  donut: ChartDonut,
  funnel: ChartFunnel,
  table: ChartTable,
  combo: ChartCombo,
  histogram: ChartHistogram,
  map: ChartMap,
  multiples: ChartMultiples,
};

// One labeled region: a hand-drawn box, a handwritten caption, and a chart.
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

function Sketch({ id, regions, kpiN = 5 }) {
  const filterId = `wobble-${id}`;
  // canvas layout (no right rail now; Ask AI is a small floating pill bottom-right)
  const sideX = 10;
  const sideW = 50;                              // wider sidebar = the new floating maroon rail with sub-nav
  const bodyX = sideX + sideW + 10;
  const bodyW = VB_W - bodyX - 12;
  const topY = 12;
  const topH = 18;
  const hasKpis = kpiN > 0;
  const kpiY = topY + topH + 8;
  const kpiH = 34;
  const kpiGap = 5;
  const kpiW = hasKpis ? (bodyW - kpiGap * (kpiN - 1)) / kpiN : 0;
  const gridTop = hasKpis ? kpiY + kpiH + 10 : topY + topH + 10;
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
          {/* floating sidebar (the maroon rail), with a logo block + 5 module nav rows.
              On the active module, a few thin sub-nav ticks suggest the expanded accordion. */}
          <HandRect x={sideX} y={topY} w={sideW} h={VB_H - topY - 12} seed={`${id}-side`} sw={1.6} />
          <HandRect x={sideX + 5} y={topY + 5} w={sideW - 10} h={14} seed={`${id}-brand`} sw={1.4} />
          <Ink x={sideX + 9} y={topY + 15} size={9} color={INK} weight={700}>M Meridian</Ink>
          {[0, 1, 2, 3, 4].map((i) => {
            const active = i === 1;
            const ny = topY + 28 + i * 16;
            return (
              <g key={i}>
                {active && <HandRect x={sideX + 4} y={ny - 5} w={sideW - 8} h={10} seed={`${id}-act${i}`} sw={1.2} />}
                <HandLine x1={sideX + 7} y1={ny} x2={sideX + sideW - 7} y2={ny} seed={`${id}-nav${i}`} sw={1.4} />
                {/* expanded sub-nav under the active module */}
                {active && [0, 1, 2].map((j) => (
                  <HandLine key={j} x1={sideX + 14} y1={ny + 10 + j * 7} x2={sideX + sideW - 9} y2={ny + 10 + j * 7} seed={`${id}-sub${j}`} sw={1.1} color={INK_SOFT} />
                ))}
              </g>
            );
          })}
          {/* user chip at bottom */}
          <HandRect x={sideX + 4} y={VB_H - 30} w={sideW - 8} h={16} seed={`${id}-user`} sw={1.3} />

          {/* top bar: page title left, refresh + filters chips right */}
          <HandLine x1={bodyX} y1={topY + topH / 2} x2={bodyX + 50} y2={topY + topH / 2} seed={`${id}-title`} sw={1.8} />
          <Ink x={bodyX} y={topY + topH + 6} size={9} color={INK_SOFT}>Fall 2024 cycle</Ink>
          <HandRect x={bodyX + bodyW - 90} y={topY + 3} w={28} h={topH - 6} seed={`${id}-flt1`} sw={1.2} />
          <HandRect x={bodyX + bodyW - 58} y={topY + 3} w={28} h={topH - 6} seed={`${id}-flt2`} sw={1.2} />
          <circle cx={bodyX + bodyW - 14} cy={topY + topH / 2} r={5} fill="none" stroke={INK} strokeWidth={1.5} />

          {/* KPI row */}
          {hasKpis && Array.from({ length: kpiN }).map((_, i) => {
            const kx = bodyX + i * (kpiW + kpiGap);
            return (
              <g key={i}>
                <HandRect x={kx} y={kpiY} w={kpiW} h={kpiH} seed={`${id}-kpi${i}`} sw={1.5} />
                <HandLine x1={kx + 5} y1={kpiY + 10} x2={kx + kpiW * 0.62} y2={kpiY + 10} seed={`${id}-kl${i}`} sw={1.2} color={INK_SOFT} />
                <Squiggle x={kx + 5} y={kpiY + 22} w={kpiW * 0.7} seed={`${id}-sq${i}`} />
                {/* delta pill */}
                <HandRect x={kx + 5} y={kpiY + 25} w={kpiW * 0.32} h={6} seed={`${id}-d${i}`} sw={1} />
              </g>
            );
          })}

          {/* per-screen regions */}
          {placed.map((r) => (
            <Region key={r.key} x={r.x} y={r.y} w={r.w} h={r.h} label={r.label} kind={r.kind} seed={r.seed} />
          ))}

          {/* floating Ask AI pill at the bottom-right corner of the body */}
          <HandRect x={bodyX + bodyW - 56} y={VB_H - 26} w={50} h={16} seed={`${id}-ai`} sw={1.5} />
          <Ink x={bodyX + bodyW - 31} y={VB_H - 15} size={11} anchor="middle" color={INK} weight={700}>
            {"✦ Ask AI"}
          </Ink>
        </g>
      </svg>
    </div>
  );
}

/* ---- the eight screens + their distinguishing layouts ---- */

/* The 8 wireframes mirror the new dashboard IA exactly:
   one dashboard with five tabs (Overview, Undergraduate, Graduate, HR, Research),
   each tab has sub-tabs, the chart shapes match what each screen actually renders. */
const screens = [
  {
    id: "s1", tag: "screen 01", title: "Overview, the institutional cockpit", kpiN: 6,
    regions: [
      { fr: 1, cells: [{ label: "applications + yield, 5 cycles", kind: "line", fr: 1.5 }, { label: "admissions funnel", kind: "funnel", fr: 1 }] },
      { fr: 1, cells: [{ label: "undergrad rollup", kind: "bars", fr: 1 }, { label: "graduate rollup", kind: "donut", fr: 1 }] },
      { fr: 1, cells: [{ label: "research rollup", kind: "bars", fr: 1 }, { label: "HR rollup", kind: "donut", fr: 1 }] },
    ],
  },
  {
    id: "s2", tag: "screen 02", title: "Undergraduate, Summary, with the world map", kpiN: 5,
    regions: [
      { fr: 1, cells: [{ label: "applications by school", kind: "bars", fr: 1 }, { label: "by geography", kind: "donut", fr: 1 }] },
      { fr: 1, cells: [{ label: "by round", kind: "bars", fr: 1 }, { label: "by territory", kind: "donut", fr: 1 }] },
      { fr: 1.4, cells: [{ label: "international applications by country", kind: "map", fr: 1 }] },
    ],
  },
  {
    id: "s3", tag: "screen 03", title: "Undergraduate, Application Totals", kpiN: 4,
    regions: [
      { fr: 1, cells: [{ label: "applications, last four cycles", kind: "bars", fr: 1 }, { label: "international by country, ranked", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "by decision plan", kind: "bars", fr: 1 }, { label: "by program", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "by gender", kind: "donut", fr: 1 }, { label: "by geography", kind: "bars", fr: 1 }] },
    ],
  },
  {
    id: "s4", tag: "screen 04", title: "Graduate, Summary, with the world map", kpiN: 5,
    regions: [
      { fr: 1, cells: [{ label: "domestic vs international", kind: "donut", fr: 1 }, { label: "applications by school", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "admission funnel", kind: "funnel", fr: 1 }, { label: "top 5 source countries", kind: "bars", fr: 1 }] },
      { fr: 1.4, cells: [{ label: "international applications by country", kind: "map", fr: 1 }] },
    ],
  },
  {
    id: "s5", tag: "screen 05", title: "HR, Summary, plain and protective", kpiN: 5,
    regions: [
      { fr: 1, cells: [{ label: "current headcount", kind: "bars", fr: 0.8 }, { label: "family group & time type", kind: "bars", fr: 1.4 }, { label: "gender", kind: "donut", fr: 1 }] },
      { fr: 1, cells: [{ label: "race / ethnicity", kind: "bars", fr: 1.5 }, { label: "academic population", kind: "donut", fr: 1 }] },
    ],
  },
  {
    id: "s6", tag: "screen 06", title: "HR, Trends Headcount, ten-year combo", kpiN: 5,
    regions: [
      { fr: 1, cells: [{ label: "active / filled jobs and fall students by year", kind: "combo", fr: 1 }] },
    ],
  },
  {
    id: "s7", tag: "screen 07", title: "Research, Summary, money over time", kpiN: 5,
    regions: [
      { fr: 1, cells: [{ label: "funded, awards, expenditures, 3 yr", kind: "bars", fr: 1 }, { label: "active and graduated PhD students", kind: "bars", fr: 1 }] },
      { fr: 1, cells: [{ label: "funding by school, small multiples", kind: "multiples", fr: 1 }] },
    ],
  },
  {
    id: "s8", tag: "screen 08", title: "Research, H-Index distribution", kpiN: 0,
    regions: [
      { fr: 1, cells: [{ label: "faculty H-index by school, all time", kind: "histogram", fr: 1 }] },
      { fr: 1, cells: [{ label: "faculty H-index by school, last 5 years", kind: "histogram", fr: 1 }] },
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
              <Sketch id={s.id} regions={s.regions} kpiN={s.kpiN ?? 5} />
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
