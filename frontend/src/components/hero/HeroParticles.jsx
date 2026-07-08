import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

/*
  HeroParticles · "THE SIGNAL"
  The portrait rendered as a living particle field on canvas.
  Self-contained: one section, one style tag, prefix hxb-.
*/

const WORDS = ["obvious.", "calm.", "human."];

const MARQUEE_TEXT =
  "footballer on weekends · gamer after dark · 47 tabs deep, dreamin' in the internet waves · ";

/* Palette (locked) */
const DOT_COLORS = [
  "#F4F3FA", // ink, bright band
  "#A29CB4", // muted, mid band
  "#4A4460", // muted deepened, low band
  "#F5379B", // magenta sprinkle
  "#075EFD", // blue sprinkle
];

/* Deterministic pseudo-random, seeded by particle index + salt */
function seeded(i, salt) {
  const s = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

const EASE = [0.23, 1, 0.32, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function HeroParticles() {
  const prefersReduced = useReducedMotion();

  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const [particleCount, setParticleCount] = useState(0);

  /* Kinetic word slot state */
  const [wordState, setWordState] = useState({ prev: null, cur: WORDS[0], n: 0 });

  useEffect(() => {
    if (prefersReduced) return undefined;
    let alive = true;
    let timer = null;
    let idx = 0;

    const tick = () => {
      const cur = WORDS[idx % WORDS.length];
      const pause = cur === "obvious." ? 4000 : 2400;
      timer = setTimeout(() => {
        if (!alive) return;
        idx += 1;
        setWordState((s) => ({
          prev: WORDS[(idx - 1) % WORDS.length],
          cur: WORDS[idx % WORDS.length],
          n: s.n + 1,
        }));
        tick();
      }, pause);
    };
    tick();

    return () => {
      alive = false;
      if (timer) clearTimeout(timer);
    };
  }, [prefersReduced]);

  /* Canvas particle field */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const section = sectionRef.current;
    if (!canvas || !wrap || !section) return undefined;

    let disposed = false;
    let rafId = null;
    let resizeTimer = null;

    /* Mutable sim state, no per-frame allocation */
    const sim = {
      built: false,
      n: 0,
      hx: null, hy: null,           // home
      xs: null, ys: null,           // current
      vx: null, vy: null,           // velocity
      rad: null, ph: null,          // radius, shimmer phase
      delay: null,                  // assembly stagger (ms)
      buckets: [[], [], [], [], []],
      ctx: null,
      w: 0, h: 0,
      assembling: false,
      assembleT0: 0,
      didAssemble: false,
    };

    const pointer = { tx: 0, ty: 0, cx: 0, cy: 0, active: false };
    const pulses = []; // { x, y, t }

    const inView = { current: true };
    const pageVisible = { current: document.visibilityState === "visible" };

    const img = new Image();
    img.src = "/images/faraz-cutout.webp";

    /* Physics constants */
    const REPEL_R = 90;
    const REPEL_R2 = REPEL_R * REPEL_R;
    const REPEL_F = 2.6;
    const SPRING_K = 0.035;
    const DAMP = 0.89;
    const TAU = Math.PI * 2;

    const build = (assemble) => {
      if (disposed || !img.naturalWidth) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w < 10 || h < 10) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sim.ctx = ctx;
      sim.w = w;
      sim.h = h;

      /* Fit the portrait into the wrapper, centered */
      const fit = Math.min(w / img.naturalWidth, h / img.naturalHeight) * 0.96;
      const dw = img.naturalWidth * fit;
      const dh = img.naturalHeight * fit;
      const ox = (w - dw) / 2;
      const oy = (h - dh) / 2;

      const off = document.createElement("canvas");
      off.width = Math.max(2, Math.round(dw));
      off.height = Math.max(2, Math.round(dh));
      const octx = off.getContext("2d", { willReadFrequently: true });
      octx.drawImage(img, 0, 0, off.width, off.height);

      let data;
      try {
        data = octx.getImageData(0, 0, off.width, off.height).data;
      } catch (err) {
        return; // canvas tainted or unavailable; leave the glow, skip particles
      }

      /* Sample on a grid; adapt step if we overshoot the budget */
      let step = window.innerWidth < 768 ? 8 : 6;
      let raw = [];
      for (let attempt = 0; attempt < 4; attempt++) {
        raw = [];
        for (let gy = 0; gy < off.height; gy += step) {
          const row = gy * off.width;
          for (let gx = 0; gx < off.width; gx += step) {
            const k = (row + gx) * 4;
            if (data[k + 3] > 128) {
              const lum =
                0.2126 * data[k] + 0.7152 * data[k + 1] + 0.0722 * data[k + 2];
              raw.push(ox + gx, oy + gy, lum);
            }
          }
        }
        if (raw.length / 3 <= 6200) break;
        step += 1;
      }

      const n = raw.length / 3;
      sim.n = n;
      sim.hx = new Float32Array(n);
      sim.hy = new Float32Array(n);
      sim.xs = new Float32Array(n);
      sim.ys = new Float32Array(n);
      sim.vx = new Float32Array(n);
      sim.vy = new Float32Array(n);
      sim.rad = new Float32Array(n);
      sim.ph = new Float32Array(n);
      sim.delay = new Float32Array(n);
      sim.buckets = [[], [], [], [], []];

      for (let i = 0; i < n; i++) {
        const lum = raw[i * 3 + 2];
        sim.hx[i] = raw[i * 3];
        sim.hy[i] = raw[i * 3 + 1];
        sim.rad[i] = 1.1 + (lum / 255) * 1.1;
        sim.ph[i] = seeded(i, 5) * TAU;
        sim.delay[i] = (1 - lum / 255) * 420 + seeded(i, 13) * 140;

        /* Luminance bands, plus a deterministic accent sprinkle in the mids */
        let bucket;
        if (lum > 170) bucket = 0;
        else if (lum > 90) bucket = 1;
        else bucket = 2;
        if (bucket === 1) {
          const roll = seeded(i, 9);
          if (roll < 0.08) bucket = 3;        // ~8% magenta
          else if (roll < 0.13) bucket = 4;   // ~5% blue
        }
        sim.buckets[bucket].push(i);

        if (assemble) {
          /* Deterministic start on a canvas edge */
          const side = Math.floor(seeded(i, 7) * 4);
          const t = seeded(i, 11);
          if (side === 0) { sim.xs[i] = t * w; sim.ys[i] = -8; }
          else if (side === 1) { sim.xs[i] = w + 8; sim.ys[i] = t * h; }
          else if (side === 2) { sim.xs[i] = t * w; sim.ys[i] = h + 8; }
          else { sim.xs[i] = -8; sim.ys[i] = t * h; }
        } else {
          sim.xs[i] = sim.hx[i];
          sim.ys[i] = sim.hy[i];
        }
      }

      sim.assembling = !!assemble;
      sim.assembleT0 = 0;
      sim.built = true;
      if (assemble) sim.didAssemble = true;
      if (!disposed) setParticleCount(n);
    };

    const drawFrame = (now, shimmer) => {
      const { ctx, w, h } = sim;
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (let b = 0; b < 5; b++) {
        const list = sim.buckets[b];
        const len = list.length;
        if (!len) continue;
        ctx.fillStyle = DOT_COLORS[b];
        ctx.beginPath();
        for (let j = 0; j < len; j++) {
          const i = list[j];
          let px = sim.xs[i];
          let py = sim.ys[i];
          if (shimmer) {
            px += Math.sin(now * 0.0011 + sim.ph[i]) * 0.4;
            py += Math.cos(now * 0.0009 + sim.ph[i] * 1.7) * 0.4;
          }
          const r = sim.rad[i];
          ctx.moveTo(px + r, py);
          ctx.arc(px, py, r, 0, TAU);
        }
        ctx.fill();
      }
    };

    const physics = (now) => {
      if (sim.assembling && sim.assembleT0 === 0) sim.assembleT0 = now;
      const age = now - sim.assembleT0;

      pointer.cx += (pointer.tx - pointer.cx) * 0.22;
      pointer.cy += (pointer.ty - pointer.cy) * 0.22;
      const px = pointer.cx;
      const py = pointer.cy;
      const repel = pointer.active;

      /* Cull dead pulses */
      for (let q = pulses.length - 1; q >= 0; q--) {
        if (now - pulses[q].t > 900) pulses.splice(q, 1);
      }

      for (let i = 0; i < sim.n; i++) {
        if (sim.assembling && age < sim.delay[i]) continue;

        let velX = sim.vx[i];
        let velY = sim.vy[i];

        if (repel) {
          const dx = sim.xs[i] - px;
          const dy = sim.ys[i] - py;
          const d2 = dx * dx + dy * dy;
          if (d2 < REPEL_R2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (1 - d / REPEL_R) * REPEL_F;
            velX += (dx / d) * f;
            velY += (dy / d) * f;
          }
        }

        for (let q = 0; q < pulses.length; q++) {
          const p = pulses[q];
          const pAge = now - p.t;
          const ringR = pAge * 0.5;
          const dx = sim.xs[i] - p.x;
          const dy = sim.ys[i] - p.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const band = Math.abs(d - ringR);
          if (band < 44) {
            const f = (1 - band / 44) * (1 - pAge / 900) * 3.4;
            velX += (dx / d) * f;
            velY += (dy / d) * f;
          }
        }

        velX += (sim.hx[i] - sim.xs[i]) * SPRING_K;
        velY += (sim.hy[i] - sim.ys[i]) * SPRING_K;
        velX *= DAMP;
        velY *= DAMP;

        sim.xs[i] += velX;
        sim.ys[i] += velY;
        sim.vx[i] = velX;
        sim.vy[i] = velY;
      }

      if (sim.assembling && age > 1400) sim.assembling = false;
    };

    const frame = (now) => {
      rafId = requestAnimationFrame(frame);
      if (!sim.built) return;
      physics(now);
      drawFrame(now, true);
    };

    const shouldRun = () =>
      !prefersReduced && pageVisible.current && inView.current;

    const start = () => {
      if (rafId == null && shouldRun()) rafId = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    /* Pointer + touch drive the same repulsion point */
    const setPointerFromEvent = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = clientX - rect.left;
      pointer.ty = clientY - rect.top;
    };
    const onPointerMove = (e) => {
      setPointerFromEvent(e.clientX, e.clientY);
      if (!pointer.active) {
        /* Snap the smoothed point on first entry so the repulsion
           does not sweep in from the canvas corner */
        pointer.cx = pointer.tx;
        pointer.cy = pointer.ty;
      }
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const onPointerDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (pulses.length < 4) {
        pulses.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t: performance.now() });
      }
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
        build(false);
        /* Repaint once so a paused or reduced-motion canvas is never blank */
        drawFrame(performance.now(), false);
      }, 150);
    });
    ro.observe(wrap);

    img.onload = () => {
      if (disposed) return;
      if (prefersReduced) {
        build(false);
        drawFrame(performance.now(), false);
        return;
      }
      build(!sim.didAssemble);
      start();
    };

    if (!prefersReduced) {
      wrap.addEventListener("pointermove", onPointerMove, { passive: true });
      wrap.addEventListener("pointerleave", onPointerLeave, { passive: true });
      wrap.addEventListener("pointerdown", onPointerDown, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      disposed = true;
      stop();
      if (resizeTimer) clearTimeout(resizeTimer);
      io.disconnect();
      ro.disconnect();
      img.onload = null;
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      wrap.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [prefersReduced]);

  const displayWord = prefersReduced ? "obvious." : wordState.cur;

  return (
    <section
      ref={sectionRef}
      data-testid="hero"
      className="relative overflow-hidden bg-[#100210] pt-28 pb-24 lg:flex lg:min-h-[94svh] lg:items-center lg:pt-32"
    >
      <style>{`
        .hxb-h1 {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.04;
          font-size: clamp(44px, 6.6vw, 84px);
          color: #F4F3FA;
          text-transform: none;
        }
        .hxb-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          color: #F5379B;
          letter-spacing: 0.18em;
          font-size: 11px;
          text-transform: none;
        }
        @media (min-width: 768px) { .hxb-eyebrow { font-size: 12px; } }
        .hxb-cursor {
          display: inline-block;
          margin-left: 0.4em;
          color: #F5379B;
          animation: hxb-blink 1.1s steps(2, end) infinite;
        }
        @keyframes hxb-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .hxb-slot {
          position: relative;
          display: inline-block;
          color: #F5379B;
          vertical-align: top;
        }
        .hxb-slot-sizer { visibility: hidden; }
        .hxb-word {
          position: absolute;
          left: 0;
          top: 0;
          white-space: nowrap;
          will-change: transform, opacity;
        }
        .hxb-word-in {
          animation: hxb-word-in 250ms cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hxb-word-out {
          animation: hxb-word-out 250ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes hxb-word-in {
          from { opacity: 0; transform: translateY(0.55em); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes hxb-word-out {
          from { opacity: 1; transform: translateY(0); filter: blur(0); }
          to { opacity: 0; transform: translateY(-0.55em); filter: blur(6px); }
        }

        .hxb-sub {
          font-family: 'Outfit', sans-serif;
          color: #A29CB4;
        }

        .hxb-btn {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          padding: 0.9rem 2rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: transform 140ms ease-out;
        }
        .hxb-btn:active { transform: scale(0.97); }
        .hxb-btn:focus-visible {
          outline: 2px solid #2E78FF;
          outline-offset: 3px;
        }
        .hxb-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 9999px;
          clip-path: inset(0 100% 0 0 round 9999px);
          transition: clip-path 220ms ease-out;
        }
        .hxb-btn-label {
          position: relative;
          z-index: 1;
          transition: color 220ms ease-out;
        }
        .hxb-btn-primary { background: #075EFD; color: #F4F3FA; }
        .hxb-btn-primary::before { background: #2E78FF; }
        .hxb-btn-secondary {
          background: transparent;
          color: #F4F3FA;
          border: 1px solid rgba(244, 243, 250, 0.7);
        }
        .hxb-btn-secondary::before { background: #F4F3FA; }
        @media (hover: hover) and (pointer: fine) {
          .hxb-btn:hover::before { clip-path: inset(0 0 0 0 round 9999px); }
          .hxb-btn-secondary:hover { border-color: #F4F3FA; }
          .hxb-btn-secondary:hover .hxb-btn-label { color: #100210; }
        }

        .hxb-canvas {
          display: block;
          touch-action: pan-y;
        }
        .hxb-glow {
          position: absolute;
          inset: -12%;
          pointer-events: none;
          background: radial-gradient(
            closest-side,
            rgba(7, 94, 253, 0.20),
            rgba(7, 94, 253, 0.05) 55%,
            rgba(7, 94, 253, 0) 75%
          );
        }
        .hxb-caption {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(162, 156, 180, 0.85);
          transition: opacity 220ms ease-out;
        }

        .hxb-marquee {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          padding: 12px 0;
          border-top: 1px solid #2C2542;
          opacity: 0.5;
          pointer-events: none;
        }
        .hxb-marquee-track {
          display: flex;
          width: max-content;
          animation: hxb-marquee 64s linear infinite;
          will-change: transform;
        }
        .hxb-marquee-track > span {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #A29CB4;
          white-space: nowrap;
          padding-right: 2ch;
        }
        @keyframes hxb-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .hxb-sr {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .hxb-cursor { display: none; }
          .hxb-word { animation: none !important; }
          .hxb-word-out { display: none; }
          .hxb-marquee-track { animation: none; }
          .hxb-marquee-track > span + span { display: none; }
        }
      `}</style>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[11fr_9fr] lg:gap-10">
        {/* Type column */}
        <motion.div
          className="order-2 lg:order-1"
          variants={containerVariants}
          initial={prefersReduced ? false : "hidden"}
          animate="show"
        >
          <motion.p variants={itemVariants} className="hxb-eyebrow">
            SENIOR UX LEAD · ENTERPRISE, FINTECH &amp; ANALYTICS
            <span className="hxb-cursor" aria-hidden="true">▍</span>
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="hxb-h1 case-keep mt-6"
            aria-label="I make complex products feel obvious."
          >
            <span className="hxb-sr">I make complex products feel obvious.</span>
            <span aria-hidden="true">
              <span className="block">I make complex</span>
              <span className="block">products feel</span>
              <span className="block">
                <span className="hxb-slot">
                  <span className="hxb-slot-sizer">obvious.</span>
                  {!prefersReduced && wordState.prev && (
                    <span key={`out-${wordState.n}`} className="hxb-word hxb-word-out">
                      {wordState.prev}
                    </span>
                  )}
                  <span key={`in-${wordState.n}`} className="hxb-word hxb-word-in">
                    {displayWord}
                  </span>
                </span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="hxb-sub mt-7 max-w-[34rem] text-lg leading-relaxed"
          >
            11+ years across UX, product and data, with roots in brand and code.
            Big believer in clarity over decoration, facts over feelings, and
            design that gets out of your way.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="hxb-btn hxb-btn-primary">
              <span className="hxb-btn-label">View My Work</span>
            </Link>
            <Link to="/about" className="hxb-btn hxb-btn-secondary">
              <span className="hxb-btn-label">About Me</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Canvas column */}
        <motion.div
          className="relative order-1 lg:order-2"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="hxb-glow" aria-hidden="true" />
          <div
            ref={wrapRef}
            className="relative h-[44vh] min-h-[300px] w-full lg:h-[70vh] lg:min-h-[460px]"
          >
            <canvas
              ref={canvasRef}
              className="hxb-canvas absolute inset-0 h-full w-full"
              role="img"
              aria-label="Portrait of Faraz drawn as thousands of tiny particles"
            />
          </div>
          <div
            className="hxb-caption mt-3 text-center"
            style={{ opacity: particleCount > 0 ? 1 : 0 }}
            aria-hidden="true"
          >
            {"> "}
            {particleCount.toLocaleString("en-US")}
            {typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
              ? " particles · run your finger through them"
              : " particles · move your cursor through them"}
          </div>
        </motion.div>
      </div>

      {/* Personality marquee */}
      <div className="hxb-marquee" aria-hidden="true">
        <div className="hxb-marquee-track">
          <span>{MARQUEE_TEXT.repeat(3)}</span>
          <span>{MARQUEE_TEXT.repeat(3)}</span>
        </div>
      </div>
    </section>
  );
}
