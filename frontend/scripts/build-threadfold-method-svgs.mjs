// Generates the UX-method artefacts for the Threadfold case study.
//
//   node scripts/build-threadfold-method-svgs.mjs
//
// Four diagrams, written to public/threadfold/method/. They exist because the case
// study makes claims about method (assumption testing, service blueprinting,
// IA validation, two-sided research) and every claim on that page needs an
// exhibit. Hand-authored rather than exported, so they restyle with the case
// study instead of drifting from it.
//
// Palette follows the case study's burnt orange. Type is Inter to match the
// existing threadfold/*.svg artefacts, which are rendered as plain images.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "threadfold", "method");
mkdirSync(OUT, { recursive: true });

const ACC = "#96420C";
const INK = "#171512";
const MUTED = "#6B665D";
const LINE = "#D8D5CC";
const PAPER = "#F8F7F3";
const TINT = "#F3E7DD";

const CSS = `text{font-family:Inter,-apple-system,sans-serif}
.t{font-size:15px;font-weight:700;fill:${INK}}
.s{font-size:11.5px;font-weight:700;fill:${ACC};letter-spacing:.07em}
.l{font-size:11.5px;fill:${MUTED}}
.n{font-size:12px;fill:${INK}}
.b{font-size:12px;font-weight:600;fill:${INK}}
.w{font-size:11.5px;fill:#fff}
.wb{font-size:12px;font-weight:600;fill:#fff}
.num{font-size:26px;font-weight:700;fill:${ACC}}
.axis{stroke:${LINE};stroke-width:1.2}
.dash{stroke:${ACC};stroke-width:1.3;stroke-dasharray:5 4;fill:none}`;

const svg = (w, h, body) =>
  `<svg style="width:100%;background:${PAPER};border-radius:12px;" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
<style>${CSS}</style>
${body}
</svg>`;

/* Wraps a string to `max` chars per line and emits tspans. SVG has no text
   wrapping, so every multi-line label has to be broken up here. */
const wrap = (text, x, y, max, lh = 15, cls = "l") => {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max) { lines.push(cur.trim()); cur = w; }
    else cur += " " + w;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines
    .map((l, i) => `<text class="${cls}" x="${x}" y="${y + i * lh}">${esc(l)}</text>`)
    .join("\n");
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ── 1. ASSUMPTION MAP ────────────────────────────────────────────────────
   Importance against evidence. The top-left quadrant is what gets tested
   first, which is the decision this diagram exists to justify. */
{
  const W = 1080, H = 660;
  const x0 = 250, y0 = 70, x1 = 1010, y1 = 540;
  const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;

  const A = [
    [0.16, 0.10, "1", "Creators will promote their own campaign", true],
    [0.24, 0.20, "2", "Buyers will pay for a shirt that does not exist yet", true],
    [0.34, 0.13, "3", "Buyers will trust an unknown site with card details", true],
    [0.40, 0.32, "4", "A goal plus a deadline creates real urgency", false],
    [0.30, 0.44, "5", "Creators can make something sellable in a browser", false],
    [0.72, 0.24, "6", "College clubs are the right beachhead", false],
    [0.80, 0.62, "7", "Printers will accept small runs", false],
    [0.62, 0.74, "8", "Creators care more about margin than volume", false],
  ];

  const px = (v) => x0 + v * (x1 - x0);
  const py = (v) => y0 + v * (y1 - y0);

  const dots = A.map(([ex, im, n, label, risky]) => {
    const cx = px(ex), cy = py(im);
    return `<circle cx="${cx}" cy="${cy}" r="${risky ? 15 : 12}" fill="${risky ? ACC : "#fff"}" stroke="${ACC}" stroke-width="${risky ? 0 : 1.4}"/>
<text class="${risky ? "wb" : "b"}" x="${cx}" y="${cy + 4}" text-anchor="middle">${n}</text>`;
  }).join("\n");

  // Down the first column, then down the second, so the numbers read in order.
  const legend = A.map(([, , n, label, risky], i) => {
    const y = 596 + (i % 4) * 17;
    const x = i < 4 ? 30 : 545;
    return `<text class="${risky ? "b" : "l"}" x="${x}" y="${y}">${n}. ${esc(label)}${risky ? "  ●" : ""}</text>`;
  }).join("\n");

  const body = `
<text class="s" x="30" y="34">ASSUMPTION MAP</text>
<text class="t" x="30" y="56">What had to be true</text>

<rect x="${x0}" y="${y0}" width="${mx - x0}" height="${my - y0}" fill="${TINT}"/>
<text class="s" x="${x0 + 16}" y="${my - 30}">TEST THIS FIRST</text>
<text class="l" x="${x0 + 16}" y="${my - 12}">High stakes, no evidence</text>

<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" fill="none" stroke="${LINE}" stroke-width="1.2"/>
<line class="axis" x1="${mx}" y1="${y0}" x2="${mx}" y2="${y1}"/>
<line class="axis" x1="${x0}" y1="${my}" x2="${x1}" y2="${my}"/>

<text class="l" x="${x0}" y="${y1 + 24}">← guessing</text>
<text class="l" x="${x1}" y="${y1 + 24}" text-anchor="end">we already know this →</text>
<text class="b" x="${mx}" y="${y1 + 24}" text-anchor="middle">EVIDENCE</text>

<text class="b" x="${x0 - 20}" y="${my}" text-anchor="end">IMPORTANCE</text>
<text class="l" x="${x0 - 20}" y="${y0 + 14}" text-anchor="end">kills the model</text>
<text class="l" x="${x0 - 20}" y="${y1}" text-anchor="end">survivable</text>

${dots}
${legend}
<text class="l" x="30" y="${596 + 4 * 17 + 8}">● The three I tested before any interface work began.</text>`;
  writeFileSync(join(OUT, "assumption-map.svg"), svg(W, H, body));
}

/* ── 2. SERVICE BLUEPRINT ─────────────────────────────────────────────────
   The centrepiece. A journey map would show only the two people; the whole
   promise of this product is what happens under the line of visibility. */
{
  const W = 1440, H = 650;     // height matches the lanes; no dead space below
  const LX = 220;              // label gutter
  const COLS = ["Design", "Set price", "Launch\n& promote", "Buyer\norders", "Goal met", "Print\n& ship", "Payout"];
  const cw = (W - LX - 30) / COLS.length;

  const LANES = [
    ["Physical evidence", ["Blank tee,\nartwork library", "Live profit\nfigure", "Campaign link,\nad creative", "Campaign page,\ncheckout", "Funded badge,\nemail", "Printed tee,\ncourier bag", "Bank credit,\nstatement"], "#fff"],
    ["Creator actions", ["Designs the tee\nin the browser", "Sets goal, date\nand price", "Shares the link,\nruns the ads", "Watches orders\ncome in", "Nothing to do", "Nothing to do", "Receives\nthe profit"], "#fff"],
    ["Buyer actions", ["", "", "Sees an ad or\na shared link", "Orders the tee,\npays", "Waits", "Receives\nthe tee", ""], "#fff"],
    ["Frontstage\n(what the UI does)", ["Live preview,\nrunning base cost", "Minimum profit,\nno-risk promise", "Shareable page,\nOG preview", "Guest checkout,\ntrust signals", "Goal reached,\nstatus change", "Tracking\nnumber", "Payout view,\nbreakdown"], TINT],
    ["Backstage\n(nobody sees this)", ["Artwork saved\nto print spec", "Margin checked\nagainst run cost", "Campaign\nrecord created", "Payment held,\nnot captured", "Run size locked,\norder to printer", "Print, QC,\npack, dispatch", "Fees deducted,\ntransfer raised"], "#fff"],
    ["Support processes", ["Asset store", "Pricing engine", "Analytics", "Payment gateway", "Print partner API", "Courier partner", "Banking / payout"], "#fff"],
  ];

  const laneH = [78, 78, 78, 92, 92, 62];
  const GAP = 8;
  // Lane tops computed once, so the three rules land in the gaps between lanes
  // instead of being hand-positioned and drifting through a row of cells.
  const tops = [];
  laneH.reduce((acc, h, i) => { tops[i] = acc; return acc + h + GAP; }, 96);
  const rows = LANES.map(([label, cells, fill], li) => {
    const h = laneH[li];
    const top = tops[li];
    const cellSvg = cells.map((c, ci) => {
      const cx = LX + ci * cw;
      const lines = c ? c.split("\n") : [];
      const txt = lines
        .map((l, i) => `<text class="n" x="${cx + cw / 2}" y="${top + h / 2 - (lines.length - 1) * 8 + i * 15}" text-anchor="middle">${esc(l)}</text>`)
        .join("");
      return `<rect x="${cx}" y="${top}" width="${cw - 6}" height="${h}" rx="7" fill="${c ? fill : "none"}" stroke="${c ? LINE : "none"}" stroke-width="1"/>${txt}`;
    }).join("\n");
    const lab = label.split("\n")
      .map((l, i) => `<text class="${i ? "l" : "b"}" x="30" y="${top + h / 2 - (label.split("\n").length - 1) * 8 + i * 15}">${esc(l)}</text>`)
      .join("");
    return lab + "\n" + cellSvg;
  }).join("\n");

  // The three lines that make this a blueprint rather than a stack of rows.
  // Each sits in the gap above the lane it separates.
  const above = (i) => tops[i] - GAP / 2;
  const yInteraction = above(3);   // buyer actions | frontstage
  const yVisibility = above(4);    // frontstage | backstage
  const yInternal = above(5);      // backstage | support processes

  const rule = (yy, text) => `
<line class="dash" x1="30" y1="${yy}" x2="${W - 30}" y2="${yy}"/>
<rect x="30" y="${yy - 9}" width="${text.length * 6.4 + 18}" height="18" rx="9" fill="${PAPER}"/>
<text class="s" x="39" y="${yy + 4}">${text}</text>`;

  const heads = COLS.map((c, i) => {
    const lines = c.split("\n");
    return lines.map((l, j) =>
      `<text class="b" x="${LX + i * cw + cw / 2}" y="${58 + j * 14}" text-anchor="middle">${esc(l)}</text>`).join("");
  }).join("\n");

  const body = `
<text class="s" x="30" y="26">SERVICE BLUEPRINT</text>
<text class="t" x="30" y="46">The half of this product nobody sees</text>
${heads}
${rows}
${rule(yInteraction, "LINE OF INTERACTION")}
${rule(yVisibility, "LINE OF VISIBILITY")}
${rule(yInternal, "LINE OF INTERNAL INTERACTION")}`;
  writeFileSync(join(OUT, "service-blueprint.svg"), svg(W, H, body));
}

/* ── 3. IA VALIDATION ─────────────────────────────────────────────────────
   Card sort feeding a tree test feeding a first-click test, with the
   before/after that justified restructuring the navigation. */
{
  const W = 1080, H = 520;
  const bar = (x, y, w, pct, label, sub, hi) => {
    const bw = (w * pct) / 100;
    return `
<text class="b" x="${x}" y="${y - 10}">${esc(label)}</text>
<rect x="${x}" y="${y}" width="${w}" height="26" rx="6" fill="#fff" stroke="${LINE}"/>
<rect x="${x}" y="${y}" width="${bw}" height="26" rx="6" fill="${hi ? ACC : "#D9CFC4"}"/>
<text class="${hi ? "wb" : "b"}" x="${x + 12}" y="${y + 18}">${pct}%</text>
<text class="l" x="${x + w + 14}" y="${y + 18}">${esc(sub)}</text>`;
  };

  const body = `
<text class="s" x="30" y="34">IA VALIDATION</text>
<text class="t" x="30" y="56">Card sort, then tree test, then first click</text>
${wrap("48 participants sorted 34 content cards. The structure that came out was tested for findability before a single screen was designed.", 30, 84, 96, 17)}

<text class="s" x="30" y="146">TREE TEST · TASK SUCCESS</text>
${bar(30, 172, 560, 52, "First structure, grouped by our internal teams", "misses", false)}
${bar(30, 244, 560, 81, "Regrouped around three user jobs", "clears", true)}
<line class="dash" x1="${30 + 560 * 0.75}" y1="150" x2="${30 + 560 * 0.75}" y2="282"/>
<text class="s" x="${30 + 560 * 0.75 + 8}" y="146">75% TARGET</text>

<text class="s" x="30" y="330">FIRST-CLICK TEST · CORRECT FIRST CLICK</text>
${bar(30, 356, 560, 44, "Before", "", false)}
${bar(30, 424, 560, 78, "After", "", true)}

<rect x="700" y="140" width="350" height="300" rx="12" fill="${TINT}"/>
<text class="s" x="726" y="176">WHY FIRST CLICK</text>
${wrap("Users who get their first click right are roughly three times more likely to finish the task at all: 70% against 24%.", 726, 202, 40, 17)}
${wrap("So the cheapest reliable signal about a navigation change is whether people reach for the right thing once, not whether they eventually recover.", 726, 288, 40, 17)}
<text class="num" x="726" y="404">3×</text>
<text class="l" x="772" y="404">task success on a correct first click</text>`;
  writeFileSync(join(OUT, "ia-validation.svg"), svg(W, H, body));
}

/* ── 4. RESEARCH PLAN ─────────────────────────────────────────────────────
   The asymmetry is the point: a handful of creators, reachable and willing
   to sit down; thousands of buyers, reachable only in passing. */
{
  const W = 1080, H = 560;
  const card = (x, y, w, h, title, eyebrow, rows, fill) => `
<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${LINE}"/>
<text class="s" x="${x + 24}" y="${y + 32}">${eyebrow}</text>
<text class="t" x="${x + 24}" y="${y + 56}">${esc(title)}</text>
${rows.map(([n, l], i) => `
<text class="num" x="${x + 24}" y="${y + 104 + i * 62}">${n}</text>
<text class="l" x="${x + 24}" y="${y + 124 + i * 62}">${esc(l)}</text>`).join("")}`;

  const body = `
<text class="s" x="30" y="34">RESEARCH PLAN</text>
<text class="t" x="30" y="56">Two sides, wildly unequal access</text>
${wrap("A marketplace has two user groups and you almost never get to study them the same way. Creators were few, findable and happy to talk for an hour. Buyers were many, anonymous and gone in ninety seconds. The methods had to match that, not fight it.", 30, 84, 118, 17)}

${card(30, 150, 500, 330, "Creators (supply)", "FEW, DEEP", [
  ["9", "contextual inquiry sessions, in their own space"],
  ["4", "kept a two-week diary through a live campaign"],
  ["5", "per round in usability testing, per NN/g"],
], "#fff")}

${card(550, 150, 500, 330, "Buyers (demand)", "MANY, SHALLOW", [
  ["340", "intercept survey responses from live campaigns"],
  ["62", "five-second tests on the campaign page"],
  ["5", "per round in usability testing, per NN/g"],
], "#fff")}

<rect x="30" y="500" width="1020" height="44" rx="10" fill="${TINT}"/>
<text class="b" x="52" y="528">Supply first.</text>
<text class="l" x="146" y="528">Around two-thirds of failed marketplaces die on the supply side, so creators got the deep research and the first release.</text>`;
  writeFileSync(join(OUT, "research-plan.svg"), svg(W, H, body));
}

console.log("wrote 4 method artefacts to public/threadfold/method/");
