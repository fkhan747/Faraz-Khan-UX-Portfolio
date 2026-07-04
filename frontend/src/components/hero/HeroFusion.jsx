import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/* HeroFusion. "C Solo, The Glitching Cartoon."
   The depth stage stays: ambient orbs, springed pointer tilt, magnetic CTAs,
   entrance choreography. The portrait is now the cartoonized head asset
   (faraz-cartoon.webp, cel colors + ink edges), composited once offscreen
   with punchy stereo rims, a faint comic halftone and a soft bottom melt,
   then driven by an aggressive Spider-Verse glitch engine: seeded ambient
   bursts of tears + hard RGB splits + neon flashes, and a triple glitch on
   hover or tap that also plays as the entrance.
   Restacked: FARAZ renders IN FRONT of the head in magenta, the big bobble
   head peeks out from behind the letters, and a bobble-headed footballer
   juggles along a faint line on the name's top edge, F to Z and back.
   Craft rules honored here:
   - transitions only on transform and box-shadow (and one opacity fade),
     never transition:all
   - deterministic seeding everywhere, no Math.random per frame, DPR cap 2
   - rAF idles between bursts (early return), pauses off-screen or hidden
   - prefers-reduced-motion renders the finished composite once, statically
   - if the image or the canvas fails, a plain img with CSS rims takes over
   - accepts { solo } for a full-viewport standalone landing, no scroll at
     1366x768, 1440x900 and 1920x1080 (section = 100svh - 90px main pad) */

const EASE = [0.23, 1, 0.32, 1];
const CARTOON = "/images/faraz-neon.webp";
/* Alternate expressions, revealed at random during glitches */
const ALT_CARTOONS = [
  "/images/faraz-neon-smile.webp",
  "/images/faraz-neon-grin.webp",
];

/* Statement slot phrases. The first is the resting line. */
const WORDS = [
  "feel obvious.",
  "footballer on weekends.",
  "gamer after dark.",
  "47 tabs deep, dreamin' in internet waves.",
];
const LONGEST_WORD = WORDS[3];

/* Ambient glitch rhythm */
const BURST_MIN_GAP = 5000; /* quiet time between bursts, ms (owner: one glitch every ~5s) */
const BURST_GAP_VAR = 400; /* seeded extra gap, ms */
const BURST_MIN_MS = 240; /* burst length floor, ms */
const BURST_VAR_MS = 180; /* seeded extra burst length, ms */
const BURST_STEP_MS = 60; /* slice re-seed cadence inside a burst, ms */
const TIC_MS = 90; /* micro-tic length between bursts, ms */

/* Triple glitch (hover / tap / entrance): burst, clean, burst, clean, burst */
const SEQ_BURST_MS = 320;
const SEQ_GAP_MS = 240;
const SEQ_TOTAL_MS = SEQ_BURST_MS * 3 + SEQ_GAP_MS * 2; /* 1440 */
const SEQ_COOLDOWN_MS = 800; /* retrigger lockout after the sequence ends */
const ENTRANCE_FADE_MS = 350; /* head fade+scale before the entrance glitch */

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

/* Deterministic pseudo-random, seeded by index + salt. Never per frame. */
function seeded(i, salt) {
  const s = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

/* Magnetic wrapper for the CTAs: within its (padded) hit area the pill leans
   up to 6px toward the cursor, then springs back on leave. */
function Magnetic({ enabled, children }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 110, damping: 16 });
  const y = useSpring(my, { stiffness: 110, damping: 16 });

  const onMove = (e) => {
    if (!enabled || !ref.current) return;
    if (e.pointerType && e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    mx.set(clamp(dx * 0.12, -6, 6));
    my.set(clamp(dy * 0.2, -6, 6));
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="hxc-mag"
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

export default function HeroFusion({ solo = false }) {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const sensesRef = useRef(null);
  const nameRef = useRef(null);
  const stLineRef = useRef(null);
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();
  const [interactive, setInteractive] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [aspect, setAspect] = useState("880 / 1320");

  /* Rotating statement slot */
  const [wordState, setWordState] = useState({
    prev: null,
    cur: WORDS[0],
    n: 0,
  });

  useEffect(() => {
    if (reduced) return undefined;
    let idx = 0;
    const timer = setInterval(() => {
      idx += 1;
      setWordState({
        prev: WORDS[(idx - 1) % WORDS.length],
        cur: WORDS[idx % WORDS.length],
        n: idx,
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [reduced]);

  /* Fit the name to the statement line: "faraz." ends exactly at the s of
     "products". The CSS ratio gets it close; this measures and locks it
     (font hinting is not perfectly linear across sizes). */
  useEffect(() => {
    const name = nameRef.current;
    const line = stLineRef.current;
    if (!name || !line) return undefined;
    const fit = () => {
      name.style.fontSize = "";
      const nw = name.getBoundingClientRect().width;
      const lw = line.getBoundingClientRect().width;
      if (nw > 0 && lw > 0) {
        const cur = parseFloat(getComputedStyle(name).fontSize);
        name.style.fontSize = `${((cur * lw) / nw).toFixed(2)}px`;
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(line);
    let dead = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!dead) fit();
      });
    }
    return () => {
      dead = true;
      ro.disconnect();
    };
  }, []);

  /* Tilt only for fine pointers on desktop-ish widths, never under
     reduced motion. */
  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)"
    );
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setInteractive(fine.matches && !calm.matches);
    update();
    const offs = [fine, calm].map((mq) => {
      if (mq.addEventListener) {
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
      }
      mq.addListener(update);
      return () => mq.removeListener(update);
    });
    return () => offs.forEach((off) => off());
  }, []);

  /* Normalized pointer position (-1..1), springed. */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 18 });
  const sy = useSpring(py, { stiffness: 90, damping: 18 });

  /* Stage rotation: the "head turning to follow you". */
  const rotateY = useTransform(sx, (v) => v * 6);
  const rotateX = useTransform(sy, (v) => v * -4);

  /* Per-layer counter-translate, scaled by depth. The head sits behind the
     name now, so it drifts against the cursor; the name drifts with it. */
  const orbX = useTransform(sx, (v) => v * -14);
  const orbY = useTransform(sy, (v) => v * -10);
  const headX = useTransform(sx, (v) => v * -6);
  const headY = useTransform(sy, (v) => v * -5);
  const nameX = useTransform(sx, (v) => v * 8);
  const nameY = useTransform(sy, (v) => v * 6);
  const copyX = useTransform(sx, (v) => v * 10);
  const copyY = useTransform(sy, (v) => v * 8);
  const chipX = useTransform(sx, (v) => v * 22);
  const chipY = useTransform(sy, (v) => v * 18);

  const onPointerMove = (e) => {
    if (!interactive || !sectionRef.current) return;
    if (e.pointerType && e.pointerType !== "mouse") return;
    const r = sectionRef.current.getBoundingClientRect();
    px.set(clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1));
    py.set(clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1));
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  /* The glitch engine v2. Composite the cartoon head once offscreen, then:
     seeded ambient bursts (tears, hard RGB splits, head jitter, neon
     flashes), a triple glitch on hover or tap, stillness in between. */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const section = sectionRef.current;
    if (failed || !canvas || !wrap || !section) return undefined;

    let disposed = false;
    let rafId = null;
    let resizeTimer = null;

    const fail = () => {
      if (!disposed) setFailed(true);
    };

    const eff = {
      built: false,
      didEntrance: false,
      dirty: false,
      ctx: null,
      comp: null, /* finished composite */
      mag: null, /* magenta copy for splits */
      blue: null, /* blue copy for splits */
      neon: null, /* high-saturation duotone variant for flashes */
      w: 0,
      h: 0,
      dpr: 1,
      alts: [], /* smile composites (built from the extra artworks) */
      bases: [], /* all pictures: [neutral, ...smiles], one shown at a time */
      neons: [], /* one saturated flash variant per base */
      baseIdx: 0, /* the picture currently resting on screen */
      nextBaseIdx: 0, /* the picture the in-progress glitch resolves to */
      burstIdx: 0,
      burstAt: 0,
      burstDur: 0,
      warnAt: Infinity, /* the short warning spark before the main burst */
      warnDur: 0,
      ticAt: Infinity,
      seqCount: 0,
      lastNow: 0,
    };

    const seq = {
      active: false,
      startAt: 0,
      baseIdx: 0,
      cooldownUntil: 0,
    };

    const inView = { current: true };
    const pageVisible = { current: document.visibilityState === "visible" };
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    /* The image load can be aborted transiently (dev-server rebuilds,
       navigation races), so retry with backoff before giving up. */
    const img = new Image();
    let loadRetries = 0;
    let retryTimer = null;

    /* The smile variants are optional extras: build() folds in whichever
       have loaded; a failed load just means neutral-faced glitches. */
    const altImgs = ALT_CARTOONS.map((srcUrl) => {
      const a = new Image();
      a.onload = () => {
        if (!disposed && eff.built) build();
      };
      a.src = srcUrl;
      return a;
    });

    /* Flat tint copy of a canvas, alpha preserved */
    /* Detail-preserving tint: multiply the artwork with a color (keeps the
       drawing visible inside the tint), then restore the original alpha. */
    const tinted = (src, paint) => {
      const c = document.createElement("canvas");
      c.width = src.width;
      c.height = src.height;
      const t = c.getContext("2d");
      t.drawImage(src, 0, 0);
      t.globalCompositeOperation = "multiply";
      t.fillStyle = paint;
      t.fillRect(0, 0, c.width, c.height);
      t.globalCompositeOperation = "destination-in";
      t.drawImage(src, 0, 0);
      t.globalCompositeOperation = "source-over";
      return c;
    };

    /* Build the offscreen set: composite + split copies + neon variant.
       The cartoon is already colorful, so no pixel pass: rims, halftone
       and a soft melt only. */
    const build = () => {
      if (disposed || !img.naturalWidth) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w < 10 || h < 10) return;

      try {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("no 2d context");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const cw = canvas.width;
        const ch = canvas.height;

        /* Composite: the neon artwork is FULL-BLEED on near-black (it is
           not a cutout), so no rims and no halftone: draw it whole, then
           melt every edge into the page with alpha fades so no rectangle
           border ever shows. */
        /* One faded composite per artwork: full-bleed draw, then melt all
           four edges so no rectangle border ever shows. */
        const makeComp = (source) => {
          const c = document.createElement("canvas");
          c.width = cw;
          c.height = ch;
          const cctx = c.getContext("2d");
          if (!cctx) throw new Error("no composite context");
          cctx.drawImage(source, 0, 0, cw, ch);
          cctx.globalCompositeOperation = "destination-out";
          const fx = Math.round(cw * 0.13);
          const fy = Math.round(ch * 0.1);
          const fade = (x0, y0, x1, y1, rx, ry, rw, rh) => {
            const g = cctx.createLinearGradient(x0, y0, x1, y1);
            g.addColorStop(0, "rgba(0,0,0,0.95)");
            g.addColorStop(1, "rgba(0,0,0,0)");
            cctx.fillStyle = g;
            cctx.fillRect(rx, ry, rw, rh);
          };
          fade(0, 0, fx, 0, 0, 0, fx, ch);
          fade(cw, 0, cw - fx, 0, cw - fx, 0, fx, ch);
          fade(0, 0, 0, fy, 0, 0, cw, fy);
          fade(0, ch, 0, ch - fy * 1.6, 0, ch - fy * 1.6, cw, fy * 1.6);
          cctx.globalCompositeOperation = "source-over";
          return c;
        };

        /* A saturated flash variant of any composite */
        const makeNeon = (compCanvas) => {
          const nc = document.createElement("canvas");
          nc.width = cw;
          nc.height = ch;
          const nctx = nc.getContext("2d");
          if (!nctx) throw new Error("no neon context");
          if ("filter" in nctx) {
            nctx.filter = "saturate(1.7) brightness(1.25)";
            nctx.drawImage(compCanvas, 0, 0);
            nctx.filter = "none";
          } else {
            nctx.drawImage(compCanvas, 0, 0);
            nctx.globalCompositeOperation = "screen";
            nctx.globalAlpha = 0.3;
            nctx.drawImage(compCanvas, 0, 0);
            nctx.globalCompositeOperation = "destination-in";
            nctx.globalAlpha = 1;
            nctx.drawImage(compCanvas, 0, 0);
            nctx.globalCompositeOperation = "source-over";
          }
          return nc;
        };

        const comp = makeComp(img);
        eff.alts = altImgs
          .filter((a) => a.complete && a.naturalWidth > 0)
          .map((a) => makeComp(a));

        /* Every picture (neutral + smiles) is a swappable base with its own
           neon flash. Each glitch commits a full swap to the next one. */
        const bases = [comp, ...eff.alts];
        eff.bases = bases;
        eff.neons = bases.map(makeNeon);
        if (eff.baseIdx >= bases.length) eff.baseIdx = 0;

        /* Channel-split copies (magenta / cyan) for the RGB fringe. A subtle
           colored ghost, so base-0 is fine for every swap. */
        eff.ctx = ctx;
        eff.comp = comp;
        eff.mag = tinted(comp, "#F0186C");
        eff.blue = tinted(comp, "#17C3E8"); /* art cyan, keeps the old name */
        eff.neon = eff.neons[0];
        eff.w = w;
        eff.h = h;
        eff.dpr = dpr;
        eff.built = true;
        if (!disposed) setReady(true);
      } catch (err) {
        console.error("[hxc] canvas composite failed, using fallback", err);
        fail();
      }
    };

    /* Sync the DOM spider-sense squiggles with the canvas glitch: crackle
       exactly while a burst or tic paints, still the moment it goes clean. */
    const setSensing = (on) => {
      const el = sensesRef.current;
      if (el && el.dataset.sensing !== String(on)) {
        el.dataset.sensing = String(on);
        el.classList.toggle("hxc-sensing", on);
      }
    };

    const drawClean = () => {
      const { ctx, w, h } = eff;
      const base = eff.bases[eff.baseIdx] || eff.comp;
      if (!ctx || !base) return;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(base, 0, 0, w, h);
      setSensing(false);
    };

    /* Seeded ambient schedule: quiet gap, then a burst; sometimes one
       micro-tic inside the gap. All values keyed off the burst index. */
    const schedule = (now) => {
      const bi = ++eff.burstIdx;
      const gap = BURST_MIN_GAP + seeded(bi, 51) * BURST_GAP_VAR;
      eff.burstAt = now + gap;
      eff.burstDur = BURST_MIN_MS + seeded(bi, 52) * BURST_VAR_MS;
      /* Every glitch is two sparks: a short warning tic on the current
         picture, a dark beat, then the main burst that swaps the WHOLE
         picture to the next one in the cycle. */
      eff.warnDur = 90 + seeded(bi, 91) * 60;
      eff.warnAt = eff.burstAt - (150 + seeded(bi, 92) * 120) - eff.warnDur;
      eff.nextBaseIdx = eff.bases.length
        ? (eff.baseIdx + 1) % eff.bases.length
        : 0;
      eff.ticAt =
        seeded(bi, 59) < 0.35
          ? now + gap * (0.35 + 0.4 * seeded(bi, 58))
          : Infinity;
    };

    /* One burst frame: jittered base, 8-14 horizontal tears (full and
       partial width), 1-2 vertical slices, hard RGB split, neon flashes.
       Layout re-seeds every BURST_STEP_MS so the burst crackles. */
    const drawBurst = (age, bi, dur, baseArg) => {
      const { ctx, w, h, dpr, comp, mag, blue } = eff;
      const bIdx =
        typeof baseArg === "number" && eff.bases[baseArg] ? baseArg : 0;
      const base = eff.bases[bIdx] || comp;
      const neon = eff.neons[bIdx] || eff.neon;
      const cw = comp.width;
      const ch = comp.height;
      const stepIdx = Math.floor(age / BURST_STEP_MS);
      setSensing(true);
      ctx.clearRect(0, 0, w, h);

      /* Whole-head jitter */
      const hjx = (seeded(bi * 5 + stepIdx, 70) * 2 - 1) * 4;
      const hjy = (seeded(bi * 3 + stepIdx, 78) * 2 - 1) * 4;
      ctx.drawImage(base, hjx, hjy, w, h);

      /* Horizontal tears */
      const nSlices = 8 + Math.floor(seeded(bi, 53) * 6.99);
      for (let s = 0; s < nSlices; s++) {
        const sd = bi * 997 + s * 61 + stepIdx * 13;
        const sy = seeded(sd, 54) * h * 0.94;
        let sliceH = 6 + seeded(sd, 55) * 34;
        if (sy + sliceH > h) sliceH = h - sy;
        const partial = seeded(sd, 58) < 0.45;
        const sw = partial ? w * (0.3 + seeded(sd, 59) * 0.7) : w;
        const sxx = partial ? seeded(sd, 65) * (w - sw) : 0;
        const dx =
          (seeded(sd, 57) < 0.5 ? -1 : 1) * (12 + seeded(sd, 56) * 48);
        const src = seeded(sd, 60) < 0.3 ? neon : base;
        ctx.drawImage(
          src,
          Math.floor(sxx * dpr),
          Math.floor(sy * dpr),
          Math.max(1, Math.floor(sw * dpr)),
          Math.max(1, Math.floor(sliceH * dpr)),
          sxx + dx,
          sy,
          sw,
          sliceH
        );
      }

      /* Vertical slices: columns shifted up or down */
      const nCols = seeded(bi * 19 + stepIdx, 79) < 0.5 ? 2 : 1;
      for (let c = 0; c < nCols; c++) {
        const cd = bi * 887 + c * 97 + stepIdx * 17;
        const colW = 10 + seeded(cd, 80) * 34;
        const colX = seeded(cd, 81) * (w - colW);
        const dy =
          (seeded(cd, 82) < 0.5 ? -1 : 1) * (10 + seeded(cd, 83) * 20);
        ctx.drawImage(
          base,
          Math.floor(colX * dpr),
          0,
          Math.max(1, Math.floor(colW * dpr)),
          ch,
          colX,
          dy,
          colW,
          h
        );
      }

      /* Hard RGB split */
      const jm = (seeded(bi * 7 + stepIdx, 61) * 2 - 1) * 4;
      const jb = (seeded(bi * 11 + stepIdx, 62) * 2 - 1) * 4;
      const offM = 8 + seeded(bi * 13 + stepIdx, 63) * 12;
      const offB = 8 + seeded(bi * 17 + stepIdx, 64) * 12;
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.6 + seeded(bi + stepIdx, 66) * 0.3;
      ctx.drawImage(mag, -offM, jm, w, h);
      ctx.drawImage(blue, offB, jb, w, h);
      ctx.globalCompositeOperation = "source-over";

      /* 1-2 near-single-frame neon flashes per burst */
      const f1 = seeded(bi, 67) * dur * 0.7;
      const f2 =
        seeded(bi, 68) < 0.5 ? dur * (0.5 + 0.4 * seeded(bi, 69)) : Infinity;
      if ((age >= f1 && age < f1 + 45) || (age >= f2 && age < f2 + 45)) {
        ctx.globalAlpha = 0.35;
        ctx.drawImage(neon, 0, 0, w, h);
      }
      ctx.globalAlpha = 1;
    };

    /* Rare single-slice micro-tic between bursts */
    const drawTic = (bi) => {
      const { ctx, w, h, dpr } = eff;
      const base = eff.bases[eff.baseIdx] || eff.comp;
      setSensing(true);
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(base, 0, 0, w, h);
      const sd = bi * 977 + 29;
      const sy = seeded(sd, 54) * h * 0.9;
      let sliceH = 5 + seeded(sd, 55) * 14;
      if (sy + sliceH > h) sliceH = h - sy;
      const dx = (seeded(sd, 57) < 0.5 ? -1 : 1) * (4 + seeded(sd, 56) * 8);
      ctx.drawImage(
        base,
        0,
        Math.floor(sy * dpr),
        base.width,
        Math.max(1, Math.floor(sliceH * dpr)),
        dx,
        sy,
        w,
        sliceH
      );
    };

    /* Triple glitch: three bursts with clean gaps, then still */
    const triggerTriple = (delayMs) => {
      if (!eff.built || reduced) return;
      const now = performance.now();
      if (seq.active || now < seq.cooldownUntil) return;
      seq.active = true;
      seq.startAt = now + (delayMs || 0);
      seq.baseIdx = 1000 + ++eff.seqCount * 29;
      eff.dirty = true;
    };

    const frame = (now) => {
      rafId = requestAnimationFrame(frame);
      if (!eff.built) return;
      /* Rebase the sequence clock across long pauses so nothing skips */
      if (eff.lastNow && now - eff.lastNow > 400 && seq.active) {
        seq.startAt += now - eff.lastNow - 16;
      }
      eff.lastNow = now;

      if (seq.active) {
        const local = now - seq.startAt;
        if (local < 0) {
          if (eff.dirty) {
            drawClean();
            eff.dirty = false;
          }
          return;
        }
        const n = eff.bases.length || 1;
        if (local >= SEQ_TOTAL_MS) {
          seq.active = false;
          seq.cooldownUntil = now + SEQ_COOLDOWN_MS;
          /* Land on the last picture the triple cycled to */
          eff.baseIdx = (eff.baseIdx + 3) % n;
          schedule(now);
          drawClean();
          eff.dirty = false;
          return;
        }
        const segLen = SEQ_BURST_MS + SEQ_GAP_MS;
        const seg = Math.floor(local / segLen);
        const inSeg = local - seg * segLen;
        /* Each of the three bursts swaps to the next picture in turn */
        const segBase = (eff.baseIdx + seg + 1) % n;
        if (inSeg < SEQ_BURST_MS) {
          drawBurst(inSeg, seq.baseIdx + seg * 7, SEQ_BURST_MS, segBase);
          eff.dirty = true;
        } else {
          /* Between bursts, rest on the picture just swapped in */
          const restBase = (eff.baseIdx + seg + 1) % n;
          const prev = eff.baseIdx;
          eff.baseIdx = restBase;
          drawClean();
          eff.baseIdx = prev;
          eff.dirty = false;
        }
        return;
      }

      if (!eff.burstAt) schedule(now);

      const end = eff.burstAt + eff.burstDur;
      if (now >= end) {
        /* Commit the swap: the new picture is now the resting one */
        eff.baseIdx = eff.nextBaseIdx;
        schedule(now);
      } else if (now >= eff.burstAt) {
        /* Main burst: the whole picture glitch-swaps to the next one */
        drawBurst(now - eff.burstAt, eff.burstIdx, eff.burstDur, eff.nextBaseIdx);
        eff.dirty = true;
        return;
      } else if (now >= eff.warnAt && now < eff.warnAt + eff.warnDur) {
        /* Warning spark: a short flicker on the current picture */
        drawBurst(now - eff.warnAt, eff.burstIdx * 13 + 5, eff.warnDur, eff.baseIdx);
        eff.dirty = true;
        return;
      }

      if (now >= eff.ticAt) {
        if (now < eff.ticAt + TIC_MS) {
          drawTic(eff.burstIdx);
          eff.dirty = true;
          return;
        }
        eff.ticAt = Infinity;
        eff.dirty = true;
      }

      /* Perfectly still between events: repaint once, then idle */
      if (eff.dirty) {
        drawClean();
        eff.dirty = false;
      }
    };

    const shouldRun = () => !reduced && pageVisible.current && inView.current;

    const start = () => {
      if (rafId == null && shouldRun()) rafId = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const onEnter = () => {
      if (!canHover) return;
      triggerTriple(0);
    };
    const onDown = () => {
      triggerTriple(0);
    };

    const onVisibility = () => {
      pageVisible.current = document.visibilityState === "visible";
      if (pageVisible.current) start();
      else stop();
    };

    const io = new IntersectionObserver(
      (entries) => {
        inView.current = entries[0] ? entries[0].isIntersecting : true;
        if (inView.current) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(section);

    const ro = new ResizeObserver(() => {
      if (!img.naturalWidth) return;
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (disposed) return;
        build();
        /* Repaint once so a paused or reduced-motion canvas is never blank */
        drawClean();
        eff.dirty = false;
      }, 150);
    });
    ro.observe(wrap);

    img.onload = () => {
      if (disposed) return;
      setAspect(img.naturalWidth + " / " + img.naturalHeight);
      build();
      if (!eff.built) return;
      if (reduced) {
        drawClean();
        return;
      }
      if (!eff.didEntrance) {
        /* Entrance: the head fades in (framer wrapper), then the triple
           glitch fires right after the fade lands */
        eff.didEntrance = true;
        drawClean();
        triggerTriple(ENTRANCE_FADE_MS + 30);
      }
      start();
    };
    img.onerror = () => {
      if (disposed) return;
      if (loadRetries < 3) {
        loadRetries++;
        retryTimer = setTimeout(() => {
          if (!disposed) img.src = CARTOON + "?retry=" + loadRetries;
        }, 300 * loadRetries);
        return;
      }
      console.error("[hxc] portrait image failed to load, using fallback");
      fail();
    };
    img.src = CARTOON;

    if (!reduced) {
      wrap.addEventListener("pointerenter", onEnter, { passive: true });
      wrap.addEventListener("pointerdown", onDown, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      disposed = true;
      stop();
      if (resizeTimer) clearTimeout(resizeTimer);
      if (retryTimer) clearTimeout(retryTimer);
      io.disconnect();
      ro.disconnect();
      img.onload = null;
      img.onerror = null;
      altImgs.forEach((a) => {
        a.onload = null;
      });
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, failed]);

  /* Entrance helpers. Under reduced motion everything renders in place. */
  const entrance = (delay, dist = 18, dur = 0.55) =>
    reduced
      ? { initial: false }
      : {
          initial: { opacity: 0, y: dist },
          animate: { opacity: 1, y: 0 },
          transition: { duration: dur, ease: EASE, delay },
        };
  const rise = (delay) =>
    reduced
      ? { initial: false }
      : {
          initial: { y: "112%" },
          animate: { y: "0%" },
          transition: { duration: 0.7, ease: EASE, delay },
        };
  const fadeOnly = (delay, dur = 0.7) =>
    reduced
      ? { initial: false }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: dur, ease: EASE, delay },
        };
  const orbsIn = reduced
    ? { initial: false }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
      };

  const displaySlot = reduced ? WORDS[0] : wordState.cur;

  return (
    <section
      data-testid="hero"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={
        solo ? "hxc-hero hxc-solo" : "hxc-hero pt-28 pb-14 md:pt-28 md:pb-8"
      }
      aria-label="Faraz Khan, senior UX lead"
    >
      <style>{`
        .hxc-hero{
          position:relative;
          background:#100210;
          overflow:hidden;
          --hxc-name-size: clamp(52px, 18vw, 84px);
          --hxc-head-w: min(58vw, 300px);
          --hxc-walker-w: 27px;
          --hxc-walker-h: 64px;
        }
        @media (min-width: 768px){
          .hxc-hero{
            /* The name ends exactly at the s of "products": 4.729 x the
               statement font size (both Playfair, measured ratio). */
            --hxc-st-size: clamp(30px, 3.6vw, 50px);
            --hxc-name-size: calc(var(--hxc-st-size) * 4.729);
            --hxc-head-w: min(38vw, calc((100svh - 200px) * 0.667));
            --hxc-walker-h: clamp(64px, 10.5svh, 100px);
            --hxc-walker-w: calc(var(--hxc-walker-h) * 0.42);
          }
        }
        @media (min-width: 768px) and (max-height: 700px){
          .hxc-hero{
            --hxc-st-size: clamp(24px, 2.8vw, 38px);
            --hxc-head-w: min(34vw, calc((100svh - 180px) * 0.667));
          }
        }

        /* Solo: full-viewport standalone landing. The site main pads 90px,
           so the section owns the rest and never scrolls on desktop. */
        .hxc-solo{
          min-height:calc(100vh - 90px);
          min-height:calc(100svh - 90px);
          padding-top:24px; padding-bottom:40px;
        }
        @media (min-width: 768px){
          .hxc-solo{
            height:calc(100vh - 90px);
            height:calc(100svh - 90px);
            max-height:calc(100svh - 90px);
            min-height:0;
            overflow:hidden;
            display:flex; align-items:center;
            padding-top:0; padding-bottom:0;
          }
          .hxc-solo .hxc-inner{ width:100%; }
          .hxc-solo .hxc-stage{ height:clamp(520px, calc(100svh - 150px), 900px); }
        }

        .hxc-persp{ perspective:none; }
        @media (min-width: 768px){ .hxc-persp{ perspective:1200px; } }

        .hxc-stage{ position:relative; transform-style:preserve-3d; }
        @media (min-width: 768px){
          .hxc-stage{ height:clamp(640px, calc(100vh - 200px), 780px); }
        }

        /* Layer 1 · ambient glow orbs */
        .hxc-layer-orbs{ position:absolute; inset:-4%; pointer-events:none; will-change:transform; }
        .hxc-orb{ position:absolute; border-radius:9999px; filter:blur(110px); }
        .hxc-orb-blue{
          width:min(46vw, 560px); height:min(46vw, 560px);
          top:-14%; right:-8%; opacity:0.32;
          background:radial-gradient(circle at 50% 50%, rgba(7,94,253,0.55) 0%, rgba(7,94,253,0) 68%);
          animation:hxc-drift-a 19s ease-in-out infinite;
        }
        .hxc-orb-magenta{
          width:min(52vw, 620px); height:min(52vw, 620px);
          bottom:-18%; left:-12%; opacity:0.28;
          background:radial-gradient(circle at 50% 50%, rgba(245,55,155,0.5) 0%, rgba(245,55,155,0) 68%);
          animation:hxc-drift-b 24s ease-in-out infinite;
        }

        /* The figure cluster: the big cartoon head + chips + caption,
           confined to the right on desktop so the copy never overlaps. */
        .hxc-figure{
          position:relative;
          margin:0 auto;
          width:var(--hxc-head-w);
          height:calc(var(--hxc-head-w) * 1.5);
          display:flex; flex-direction:column; justify-content:flex-end;
          pointer-events:none;
          transform-style:preserve-3d;
        }
        @media (min-width: 768px){
          .hxc-figure{ position:absolute; right:0; bottom:0; margin:0; }
        }

        .hxc-head-layer{
          position:absolute; left:0; right:0; bottom:0;
          display:flex; justify-content:center;
          will-change:transform;
        }

        /* Spider-sense squiggles: dormant and dim between glitches, then
           crackling like electric sparks (hard stepped jumps + flicker)
           exactly while the canvas burst runs (.hxc-sensing, engine-driven). */
        .hxc-senses{ position:absolute; inset:0; pointer-events:none; will-change:transform; }
        .hxc-sq{ position:absolute; overflow:visible; opacity:0.3; }
        .hxc-sq path{ stroke-linejoin:round; }
        .hxc-sq-1{ width:13%; top:2%;  left:-14%; transform:rotate(-38deg); }
        .hxc-sq-2{ width:16%; top:-7%; left:22%;  transform:rotate(-8deg); }
        .hxc-sq-3{ width:13%; top:-3%; right:-4%; transform:rotate(26deg); }
        .hxc-sq-4{ width:15%; top:26%; right:-17%;transform:rotate(64deg); }
        .hxc-sq-5{ width:12%; top:34%; left:-16%; transform:rotate(-72deg); }
        .hxc-sensing .hxc-sq-1{ animation:hxc-spark-a 0.18s steps(1, end) infinite; }
        .hxc-sensing .hxc-sq-2{ animation:hxc-spark-b 0.22s steps(1, end) 0.03s infinite; }
        .hxc-sensing .hxc-sq-3{ animation:hxc-spark-a 0.16s steps(1, end) 0.06s infinite; }
        .hxc-sensing .hxc-sq-4{ animation:hxc-spark-b 0.2s steps(1, end) 0.09s infinite; }
        .hxc-sensing .hxc-sq-5{ animation:hxc-spark-a 0.24s steps(1, end) 0.05s infinite; }
        @keyframes hxc-spark-a{
          0%{   opacity:1;    translate:0 0;      scale:1; }
          25%{  opacity:0.35; translate:3px -4px; scale:1.18; }
          50%{  opacity:1;    translate:-3px 2px; scale:0.88; }
          75%{  opacity:0.5;  translate:2px 3px;  scale:1.1; }
          100%{ opacity:1;    translate:0 0;      scale:1; }
        }
        @keyframes hxc-spark-b{
          0%{   opacity:0.9;  translate:0 0;      scale:1; }
          25%{  opacity:1;    translate:-4px 2px; scale:1.12; }
          50%{  opacity:0.3;  translate:2px -3px; scale:0.92; }
          75%{  opacity:1;    translate:-2px -2px;scale:1.06; }
          100%{ opacity:0.9;  translate:0 0;      scale:1; }
        }
        @media (prefers-reduced-motion: reduce){
          .hxc-sq{ opacity:0.3 !important; animation:none !important; }
        }
        .hxc-float{ animation:hxc-floaty 7s ease-in-out infinite; will-change:transform; }
        .hxc-portrait{ position:relative; width:var(--hxc-head-w); pointer-events:auto; }
        .hxc-canvas{
          position:absolute; inset:0; width:100%; height:100%;
          display:block; touch-action:pan-y;
        }

        /* The nameplate: white FARAZ masthead in the copy column. The top
           padding reserves the airspace the footballer walks through. */
        .hxc-nameplate{
          --hxc-np-pad: calc(var(--hxc-walker-h) * 0.92);
          position:relative;
          width:max-content; max-width:100%;
          padding-top:var(--hxc-np-pad);
          margin-bottom:14px;
        }
        .hxc-clip{ overflow:hidden; padding-top:0.06em; font-size:var(--hxc-name-size); }
        .hxc-name{
          font-family:'Playfair Display', Georgia, serif;
          font-weight:900;
          font-size:var(--hxc-name-size);
          line-height:0.95;
          letter-spacing:-0.05em;
          text-transform:capitalize;
          white-space:nowrap;
          color:#F4F3FA;
          will-change:transform;
        }

        /* The walker rail: a faint line on the name's top edge */
        .hxc-walk-layer{
          position:absolute; left:0; right:0; top:0;
          pointer-events:none; will-change:transform;
        }
        .hxc-walkline{
          position:absolute; left:0; right:0;
          top:calc(var(--hxc-np-pad) + var(--hxc-name-size) * 0.16);
          height:0;
          border-top:1.5px solid rgba(244,243,250,0.12);
        }
        .hxc-stroll{
          position:absolute; left:0; right:var(--hxc-walker-w); top:0; height:0;
          animation:hxc-stroll 60s linear infinite;
          will-change:transform;
        }
        .hxc-flip{
          position:absolute; left:0; bottom:0;
          width:var(--hxc-walker-w); height:var(--hxc-walker-h);
          animation:hxc-flip 60s linear infinite;
        }
        /* Faraz's supplied Messi caricature: the whole figure bobbles as he
           strolls, a ball bounces at his boots. */
        .hxc-messi-wrap{ position:relative; width:100%; height:100%; }
        .hxc-messi{
          display:block; height:100%; width:auto;
          transform-origin:50% 96%;
          animation:hxc-bobble 0.6s ease-in-out infinite;
          filter:drop-shadow(0 2px 6px rgba(16,2,16,0.6));
        }

        /* Fallback portrait, plain img, only if the canvas pipeline fails */
        .hxc-cutout{
          position:relative; z-index:3; display:block; width:100%; height:auto;
        }
        .hxc-fade{
          position:absolute; left:-3%; right:-3%; bottom:-2px; height:20%; z-index:5; pointer-events:none;
          background:linear-gradient(180deg, rgba(16,2,16,0) 0%, rgba(16,2,16,0.35) 60%, rgba(16,2,16,0.85) 100%);
        }

        /* Chips: one glass row at the top of the copy column */
        .hxc-chips{ margin-bottom:14px; }
        .hxc-chips-row{
          display:flex; flex-wrap:wrap; gap:10px;
        }
        .hxc-chip-card{
          display:inline-flex; align-items:center; gap:8px;
          padding:8px 14px; border-radius:9999px;
          background:rgba(24,17,38,0.7);
          border:1px solid #2C2542;
          backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
          font-family:'JetBrains Mono', ui-monospace, monospace; font-weight:600;
          font-size:11px; letter-spacing:0.08em; color:#F4F3FA; white-space:nowrap;
          box-shadow:0 10px 30px rgba(16,2,16,0.55);
        }
        .hxc-dot{ width:6px; height:6px; border-radius:9999px; flex:none; }
        .hxc-dot-m{ background:#F5379B; box-shadow:0 0 10px rgba(245,55,155,0.8); }
        .hxc-dot-b{ background:#9B4DE0; box-shadow:0 0 10px rgba(155,77,224,0.8); }

        /* Foreground copy: left column, never touching the figure. Flex
           centering (not transform) because framer owns this transform. */
        .hxc-copy{ position:relative; margin-top:40px; will-change:transform; }
        @media (min-width: 768px){
          .hxc-copy{
            position:absolute; left:0; top:0; bottom:0;
            width:min(50%, 640px); margin-top:0;
            display:flex; flex-direction:column; justify-content:center;
          }
        }
        .hxc-eyebrow{
          font-family:'JetBrains Mono', ui-monospace, monospace; font-weight:600;
          font-size:12.5px; letter-spacing:0.22em; color:#F5379B;
          margin-bottom:6px;
        }
        .hxc-cursor{
          display:inline-block; margin-left:0.4em; color:#F5379B;
          animation:hxc-blink 1.1s steps(2, end) infinite;
        }
        .hxc-statement{
          font-family:'Playfair Display', Georgia, serif; font-weight:800;
          font-size:var(--hxc-st-size, clamp(30px, 3.6vw, 50px)); line-height:1.12;
          color:#F4F3FA; margin-bottom:20px;
        }
        .hxc-st-line{ display:block; white-space:nowrap; }
        @media (max-width: 419px){ .hxc-st-line{ white-space:normal; } }
        .hxc-slot-line{
          display:block; margin-top:8px;
          font-family:'Playfair Display', Georgia, serif;
          font-style:italic; font-weight:400;
          font-size:clamp(18px, calc(1.3vw + 9px), 27px);
          line-height:1.4; letter-spacing:-0.01em;
          color:#F5379B; white-space:nowrap;
        }
        .hxc-slot{ position:relative; display:inline-block; }
        .hxc-slot-sizer{ visibility:hidden; }
        .hxc-word{
          position:absolute; left:0; top:0; white-space:nowrap;
          will-change:transform, opacity;
        }
        .hxc-word-in{ animation:hxc-word-in 250ms cubic-bezier(0.23, 1, 0.32, 1) both; }
        .hxc-word-out{ animation:hxc-word-out 250ms cubic-bezier(0.23, 1, 0.32, 1) forwards; }

        .hxc-sub{
          color:rgba(244,243,250,0.92); font-size:clamp(16px, 1.25vw, 19px);
          line-height:1.65;
          max-width:52ch; margin-bottom:26px;
        }

        /* Spider-Verse comic CTAs: hard offset shadows, tiny opposing
           rotations, an RGB-split glitch tic on hover */
        .hxc-cta-row{
          display:flex; flex-wrap:wrap; align-items:center;
          margin-left:-10px;
        }
        .hxc-mag{ display:inline-block; padding:10px; }
        .hxc-btn{
          --hxc-rot: 0deg;
          position:relative;
          display:inline-flex; align-items:center; justify-content:center;
          border-radius:12px;
          border:2px solid #F4F3FA;
          padding:13px 26px;
          font-family:'Outfit', sans-serif; font-weight:700; font-size:15px;
          letter-spacing:0.02em; text-decoration:none; cursor:pointer;
          transform:rotate(var(--hxc-rot));
          transition:transform 0.14s ease-out, box-shadow 0.14s ease-out;
          will-change:transform;
        }
        .hxc-btn:focus-visible{ outline:2px solid #2E78FF; outline-offset:3px; }
        .hxc-btn-primary{
          --hxc-rot: -1deg;
          background:#7B2FBE; color:#F4F3FA;
          box-shadow:5px 5px 0 #F0186C;
        }
        .hxc-btn-ghost{
          --hxc-rot: 1deg;
          background:transparent; color:#F4F3FA;
          box-shadow:5px 5px 0 #7B2FBE;
        }
        .hxc-btn-primary:active{
          transform:translate(3px, 3px) rotate(var(--hxc-rot)) scale(0.97);
          box-shadow:2px 2px 0 #F0186C;
          animation:none;
        }
        .hxc-btn-ghost:active{
          transform:translate(3px, 3px) rotate(var(--hxc-rot)) scale(0.97);
          box-shadow:2px 2px 0 #7B2FBE;
          animation:none;
        }
        @media (hover: hover) and (pointer: fine){
          .hxc-btn:hover{ animation:hxc-btn-glitch 0.9s linear infinite; }
        }

        .hxc-featured{
          display:flex; flex-wrap:wrap; align-items:center; gap:16px;
          margin-top:18px;
          font-family:'JetBrains Mono', ui-monospace, monospace; font-weight:600;
          font-size:12.5px; letter-spacing:0.08em; color:#A29CB4;
        }
        .hxc-featured-link{
          color:#F4F3FA; text-decoration:underline;
          text-decoration-color:#9B4DE0; text-decoration-thickness:2px;
          text-underline-offset:4px;
        }
        .hxc-featured-link:focus-visible{
          outline:2px solid #2E78FF; outline-offset:3px; border-radius:2px;
        }
        @media (hover: hover) and (pointer: fine){
          .hxc-featured-link:hover{ color:#F0186C; text-decoration-color:#F0186C; }
        }

        @keyframes hxc-floaty{
          0%, 100%{ transform:translate3d(0, 0, 0); }
          50%{ transform:translate3d(0, -8px, 0); }
        }
        @keyframes hxc-drift-a{
          0%, 100%{ transform:translate3d(0, 0, 0) scale(1); }
          50%{ transform:translate3d(-4%, 7%, 0) scale(1.06); }
        }
        @keyframes hxc-drift-b{
          0%, 100%{ transform:translate3d(0, 0, 0) scale(1); }
          50%{ transform:translate3d(6%, -6%, 0) scale(1.08); }
        }
        @keyframes hxc-blink{
          0%, 100%{ opacity:1; }
          50%{ opacity:0; }
        }
        @keyframes hxc-stroll{
          0%{ transform:translateX(0); }
          50%{ transform:translateX(100%); }
          100%{ transform:translateX(0); }
        }
        @keyframes hxc-flip{
          0%, 50%{ transform:scaleX(1); }
          50.01%, 100%{ transform:scaleX(-1); }
        }
        @keyframes hxc-bobble{
          0%, 100%{ transform:rotate(3deg); }
          50%{ transform:rotate(-3deg); }
        }
        @keyframes hxc-word-in{
          from{ opacity:0; transform:translateY(0.55em); filter:blur(6px); }
          to{ opacity:1; transform:translateY(0); filter:blur(0); }
        }
        @keyframes hxc-word-out{
          from{ opacity:1; transform:translateY(0); filter:blur(0); }
          to{ opacity:0; transform:translateY(-0.55em); filter:blur(6px); }
        }
        @keyframes hxc-btn-glitch{
          0%{
            clip-path:inset(-8px);
            transform:translate(0, 0) rotate(var(--hxc-rot));
            text-shadow:none;
          }
          5%{
            clip-path:inset(8% -8px 55% -8px);
            transform:translate(-2px, 1px) rotate(var(--hxc-rot));
            text-shadow:-2px 0 #F0186C, 2px 0 #7B2FBE;
          }
          10%{
            clip-path:inset(58% -8px 6% -8px);
            transform:translate(2px, -2px) rotate(var(--hxc-rot));
            text-shadow:-2px 0 #F0186C, 2px 0 #7B2FBE;
          }
          16%{
            clip-path:inset(30% -8px 30% -8px);
            transform:translate(-1px, 2px) rotate(var(--hxc-rot));
            text-shadow:-2px 0 #F0186C, 2px 0 #7B2FBE;
          }
          22%{
            clip-path:inset(-8px);
            transform:translate(1px, -1px) rotate(var(--hxc-rot));
            text-shadow:none;
          }
          31%, 100%{
            clip-path:inset(-8px);
            transform:translate(0, 0) rotate(var(--hxc-rot));
            text-shadow:none;
          }
        }

        @media (prefers-reduced-motion: reduce){
          .hxc-float,
          .hxc-chips-row,
          .hxc-orb-blue,
          .hxc-orb-magenta,
          .hxc-stroll,
          .hxc-flip,
          .hxc-messi,
          .hxc-word,
          .hxc-btn{ animation:none !important; }
          .hxc-cursor{ display:none; }
          .hxc-word-out{ display:none; }
        }
      `}</style>

      <div className="hxc-inner relative mx-auto w-full max-w-[1280px] px-6">
        <div className="hxc-persp">
          <motion.div className="hxc-stage" style={{ rotateX, rotateY }}>
            {/* Layer 1 · ambient glow */}
            <motion.div
              className="hxc-layer-orbs"
              style={{ x: orbX, y: orbY, z: -180 }}
              aria-hidden="true"
              {...orbsIn}
            >
              <div className="hxc-orb hxc-orb-blue" />
              <div className="hxc-orb hxc-orb-magenta" />
            </motion.div>

            {/* The figure cluster: head behind, name in front, walker, chips */}
            <div className="hxc-figure">
              {/* Spider-sense squiggles: electric sparks that crackle in
                  perfect sync with the canvas glitch (hxc-sensing class,
                  toggled by the engine) */}
              <motion.div
                ref={sensesRef}
                className="hxc-senses"
                style={{ x: chipX, y: chipY, z: -30 }}
                aria-hidden="true"
              >
                <motion.div {...fadeOnly(0.7, 0.8)}>
                  {[
                    { cls: "hxc-sq-1", color: "#F0186C" },
                    { cls: "hxc-sq-2", color: "#9B4DE0" },
                    { cls: "hxc-sq-3", color: "#F0186C" },
                    { cls: "hxc-sq-4", color: "#9B4DE0" },
                    { cls: "hxc-sq-5", color: "#F0186C" },
                  ].map((s) => (
                    <svg
                      key={s.cls}
                      className={`hxc-sq ${s.cls}`}
                      viewBox="0 0 72 18"
                      focusable="false"
                    >
                      <path
                        d="M3 12 Q10 3 17 10 T31 10 T45 10 T59 10 L69 6"
                        fill="none"
                        stroke={s.color}
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ))}
                </motion.div>
              </motion.div>

              {/* Head plane, behind the letters */}
              <motion.div
                className="hxc-head-layer"
                style={{ x: headX, y: headY, z: -60 }}
              >
                <motion.div
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  animate={
                    ready || failed || reduced
                      ? { opacity: 1, scale: 1 }
                      : undefined
                  }
                  transition={{
                    duration: ENTRANCE_FADE_MS / 1000,
                    ease: "easeOut",
                  }}
                >
                  <div className="hxc-float">
                    <div
                      className="hxc-portrait"
                      ref={failed ? null : wrapRef}
                      style={{ aspectRatio: aspect }}
                    >
                      {failed ? (
                        <>
                          <img
                            className="hxc-cutout"
                            src={CARTOON}
                            alt="Cartoon portrait of Faraz Khan"
                            width="880"
                            height="1320"
                            draggable="false"
                          />
                          <div className="hxc-fade" aria-hidden="true" />
                        </>
                      ) : (
                        <canvas
                          ref={canvasRef}
                          className="hxc-canvas"
                          role="img"
                          aria-label="Cartoon portrait of Faraz Khan that glitches like a comic-book dimension rift when you touch it"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>


            </div>

            {/* Foreground copy */}
            <motion.div
              className="hxc-copy"
              style={{ x: copyX, y: copyY, z: 50 }}
            >
              {/* Glass chips, above the eyebrow */}
              <motion.div
                className="hxc-chips"
                aria-hidden="true"
                {...entrance(0.2, 10, 0.5)}
              >
                <div className="hxc-chips-row">
                  <span className="hxc-chip-card">
                    <span className="hxc-dot hxc-dot-m" />
                    12+ yrs
                  </span>
                  <span className="hxc-chip-card">
                    <span className="hxc-dot hxc-dot-b" />
                    UX · data · code
                  </span>
                </div>
              </motion.div>

              <motion.p className="hxc-eyebrow" {...entrance(0.26, 14)}>
                SENIOR UX LEAD · ENTERPRISE, FINTECH &amp; ANALYTICS
                <span className="hxc-cursor" aria-hidden="true">▍</span>
              </motion.p>

              {/* The white FARAZ masthead, walker strolling its top edge */}
              <div className="hxc-nameplate" aria-hidden="true">
                <div className="hxc-clip">
                  <motion.div ref={nameRef} className="hxc-name" {...rise(0.3)}>
                    faraz.
                  </motion.div>
                </div>
                <div className="hxc-walk-layer">
                  <motion.div {...fadeOnly(0.5, 0.6)}>
                    <div className="hxc-walkline">
                      <div className="hxc-stroll">
                        <div className="hxc-flip">
                          <div className="hxc-messi-wrap">
                            <img
                              className="hxc-messi"
                              src="/images/messi-barca.webp"
                              alt=""
                              draggable="false"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.h1
                className="font-display case-keep hxc-statement"
                {...entrance(0.34, 20)}
                aria-label="Faraz. I make complex products feel obvious."
              >
                <span aria-hidden="true">
                  <span ref={stLineRef} className="hxc-st-line">I make complex products</span>
                  <span className="hxc-slot-line">
                    <span className="hxc-slot">
                      <span className="hxc-slot-sizer">{LONGEST_WORD}</span>
                      {!reduced && wordState.prev && (
                        <span
                          key={`out-${wordState.n}`}
                          className="hxc-word hxc-word-out"
                        >
                          {wordState.prev}
                        </span>
                      )}
                      <span
                        key={`in-${wordState.n}`}
                        className="hxc-word hxc-word-in"
                      >
                        {displaySlot}
                      </span>
                    </span>
                  </span>
                </span>
              </motion.h1>

              <motion.p className="hxc-sub" {...entrance(0.44, 16)}>
                12+ years across UX, product and data, with roots in brand and
                code. Big believer in clarity over decoration, facts over
                feelings, and design that gets out of your way.
              </motion.p>

              <motion.div className="hxc-cta-row" {...entrance(0.52, 14)}>
                <Magnetic enabled={interactive}>
                  <Link to="/projects" className="hxc-btn hxc-btn-primary">
                    View My Work
                  </Link>
                </Magnetic>
                <Magnetic enabled={interactive}>
                  <Link to="/about" className="hxc-btn hxc-btn-ghost">
                    About Me
                  </Link>
                </Magnetic>
              </motion.div>

              {solo && (
                <motion.p className="hxc-featured" {...entrance(0.6, 8, 0.45)}>
                  <span>Featured case studies</span>
                  <Link className="hxc-featured-link" to="/case/finvista">
                    FinVista
                  </Link>
                  <Link className="hxc-featured-link" to="/case/aurora">
                    Aurora
                  </Link>
                  <Link className="hxc-featured-link" to="/case/meridian">
                    Meridian
                  </Link>
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
