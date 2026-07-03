import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/* HeroDepth. "The Depth Poster."
   A perspective stage built around the portrait cutout. The cursor tilts the
   whole scene (rotateX/rotateY through springs) and every layer sits on its
   own translateZ plane, so the tilt reads as true parallax: the giant name
   lives behind the head, the copy floats in front, the chips float furthest.
   Craft rules honored here:
   - transform/opacity only, transitions list explicit properties
   - entrances on cubic-bezier(0.23,1,0.32,1), staggered, under ~1s total
   - pointer effects springed (stiffness 90 / damping 18), desktop-only
   - prefers-reduced-motion settles into a fully static composition */

const EASE = [0.23, 1, 0.32, 1];
const CUTOUT = "/images/faraz-cutout.webp";

const PERSONALITY = [
  "footballer on weekends",
  "gamer after dark",
  "47 tabs deep, dreamin' in the internet waves",
];

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

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
      className="hxa-mag"
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

export default function HeroDepth() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const [interactive, setInteractive] = useState(false);

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

  /* Per-layer counter-translate, scaled by depth. Deep layers drift against
     the cursor, near layers drift with it; chips move the most. */
  const orbX = useTransform(sx, (v) => v * -14);
  const orbY = useTransform(sy, (v) => v * -10);
  const outlineX = useTransform(sx, (v) => v * -9);
  const outlineY = useTransform(sy, (v) => v * -7);
  const nameX = useTransform(sx, (v) => v * -5);
  const nameY = useTransform(sy, (v) => v * -4);
  const portX = useTransform(sx, (v) => v * 6);
  const portY = useTransform(sy, (v) => v * 5);
  const copyX = useTransform(sx, (v) => v * 10);
  const copyY = useTransform(sy, (v) => v * 8);
  const chip1X = useTransform(sx, (v) => v * 22);
  const chip1Y = useTransform(sy, (v) => v * 18);
  const chip2X = useTransform(sx, (v) => v * 30);
  const chip2Y = useTransform(sy, (v) => v * 24);

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

  return (
    <section
      data-testid="hero"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hxa-hero pt-28 pb-14 md:pt-28 md:pb-8"
      aria-label="Faraz Khan, senior UX lead"
    >
      <style>{`
        .hxa-hero{
          position:relative;
          background:#100210;
          overflow:hidden;
          --hxa-name-size: clamp(64px, 23vw, 122px);
          --hxa-port-h: calc(min(80vw, 400px) * 0.934);
        }
        @media (min-width: 768px){
          .hxa-hero{
            --hxa-name-size: clamp(140px, 17vw, 232px);
            --hxa-port-h: min(42.95vw, 579px);
          }
        }

        .hxa-persp{ perspective:none; }
        @media (min-width: 768px){ .hxa-persp{ perspective:1200px; } }

        .hxa-stage{ position:relative; transform-style:preserve-3d; }
        @media (min-width: 768px){
          .hxa-stage{ height:clamp(640px, calc(100vh - 200px), 780px); }
        }

        /* Layer 1 · ambient glow orbs */
        .hxa-layer-orbs{ position:absolute; inset:-4%; pointer-events:none; will-change:transform; }
        .hxa-orb{ position:absolute; border-radius:9999px; filter:blur(110px); }
        .hxa-orb-blue{
          width:min(46vw, 560px); height:min(46vw, 560px);
          top:-14%; right:-8%; opacity:0.32;
          background:radial-gradient(circle at 50% 50%, rgba(7,94,253,0.55) 0%, rgba(7,94,253,0) 68%);
          animation:hxa-drift-a 19s ease-in-out infinite;
        }
        .hxa-orb-magenta{
          width:min(52vw, 620px); height:min(52vw, 620px);
          bottom:-18%; left:-12%; opacity:0.28;
          background:radial-gradient(circle at 50% 50%, rgba(245,55,155,0.5) 0%, rgba(245,55,155,0) 68%);
          animation:hxa-drift-b 24s ease-in-out infinite;
        }

        /* Layer 2 · the name, solid + hollow echo. Bottom-anchored on desktop
           against the portrait height so the head always hides the middle of
           the word and the letter tops peek above the hair. */
        .hxa-name-layer{
          position:absolute; left:0; right:0; top:0;
          text-align:center; pointer-events:none; will-change:transform;
        }
        @media (min-width: 768px){
          .hxa-name-layer{
            top:auto;
            bottom:calc(var(--hxa-port-h) - var(--hxa-name-size) * 0.55);
          }
        }
        .hxa-clip{ overflow:hidden; padding-top:0.06em; font-size:var(--hxa-name-size); }
        .hxa-name{
          font-family:'Playfair Display', Georgia, serif;
          font-weight:900;
          font-size:var(--hxa-name-size);
          line-height:0.92;
          letter-spacing:0.04em;
          text-transform:uppercase;
          white-space:nowrap;
          color:transparent;
          background:linear-gradient(180deg, #F4F3FA 46%, rgba(244,243,250,0.34) 100%);
          -webkit-background-clip:text;
          background-clip:text;
          will-change:transform;
        }
        .hxa-name-outline{
          background:none;
          color:transparent;
          -webkit-text-stroke:1.5px rgba(44,37,66,0.95);
        }
        .hxa-out-off{ transform:translate(1.2%, calc(var(--hxa-name-size) * 0.055)); }

        /* Layer 3 · portrait with stereo rim light */
        .hxa-portrait-layer{
          position:relative;
          margin:calc(var(--hxa-name-size) * 0.42) auto 0;
          width:min(80vw, 400px);
          pointer-events:none;
          transform-style:preserve-3d;
          will-change:transform;
        }
        @media (min-width: 768px){
          .hxa-portrait-layer{
            position:absolute; margin:0; right:2%; bottom:0;
            width:min(46vw, 620px);
          }
        }
        .hxa-float{ animation:hxa-floaty 7s ease-in-out infinite; will-change:transform; }
        .hxa-portrait{ position:relative; aspect-ratio:1100/1027; }
        .hxa-rim{
          position:absolute; inset:0;
          -webkit-mask-image:url('${CUTOUT}');
          mask-image:url('${CUTOUT}');
          -webkit-mask-size:100% 100%; mask-size:100% 100%;
          -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
        }
        .hxa-rim-magenta{ background:#F5379B; transform:translateX(-6px); z-index:1; opacity:0.95; }
        .hxa-rim-blue{ background:#075EFD; transform:translateX(6px); z-index:2; opacity:0.95; }
        .hxa-cutout{
          position:relative; z-index:3; display:block; width:100%; height:auto;
          filter:grayscale(1) brightness(0.92) contrast(1.08);
        }
        .hxa-tint{
          position:absolute; inset:0; z-index:4; pointer-events:none;
          -webkit-mask-image:url('${CUTOUT}');
          mask-image:url('${CUTOUT}');
          -webkit-mask-size:100% 100%; mask-size:100% 100%;
          -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
          background:linear-gradient(160deg, rgba(7,94,253,0.20) 0%, rgba(24,17,38,0.12) 46%, rgba(245,55,155,0.20) 100%);
        }
        .hxa-fade{
          position:absolute; left:-3%; right:-3%; bottom:-2px; height:32%; z-index:5; pointer-events:none;
          background:linear-gradient(180deg, rgba(16,2,16,0) 0%, rgba(16,2,16,0.55) 55%, #100210 96%);
        }

        /* Layer 5 · floating chips */
        .hxa-chip{ position:absolute; will-change:transform; }
        .hxa-chip-1{ top:14%; right:-7%; }
        .hxa-chip-2{ bottom:17%; left:-10%; }
        .hxa-chip-card{
          display:inline-flex; align-items:center; gap:8px;
          padding:8px 14px; border-radius:9999px;
          background:rgba(24,17,38,0.7);
          border:1px solid #2C2542;
          backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
          font-family:'JetBrains Mono', ui-monospace, monospace; font-weight:600;
          font-size:11px; letter-spacing:0.08em; color:#F4F3FA; white-space:nowrap;
          box-shadow:0 10px 30px rgba(16,2,16,0.55);
        }
        .hxa-chip-f1{ animation:hxa-floaty 6s ease-in-out 0.7s infinite; }
        .hxa-chip-f2{ animation:hxa-floaty 8.5s ease-in-out 0.2s infinite; }
        .hxa-dot{ width:6px; height:6px; border-radius:9999px; flex:none; }
        .hxa-dot-m{ background:#F5379B; box-shadow:0 0 10px rgba(245,55,155,0.8); }
        .hxa-dot-b{ background:#075EFD; box-shadow:0 0 10px rgba(7,94,253,0.8); }

        /* Layer 4 · foreground copy */
        .hxa-copy{ position:relative; margin-top:30px; will-change:transform; }
        @media (min-width: 768px){
          .hxa-copy{
            position:absolute; left:0; bottom:2.5%;
            width:min(48%, 560px); margin-top:0;
          }
        }
        .hxa-eyebrow{
          font-family:'JetBrains Mono', ui-monospace, monospace; font-weight:600;
          font-size:11px; letter-spacing:0.22em; color:#F5379B;
          margin-bottom:18px;
        }
        .hxa-statement{
          font-family:'Playfair Display', Georgia, serif; font-weight:800;
          font-size:clamp(34px, 4.5vw, 62px); line-height:1.06;
          color:#F4F3FA; margin-bottom:20px;
        }
        .hxa-statement .hxa-it{ font-style:italic; font-weight:400; color:#F5379B; }
        .hxa-sub{
          color:#A29CB4; font-size:clamp(15px, 1.2vw, 17px); line-height:1.7;
          max-width:46ch; margin-bottom:26px;
        }

        .hxa-cta-row{
          display:flex; flex-wrap:wrap; align-items:center;
          margin-left:-10px; margin-bottom:12px;
        }
        .hxa-mag{ display:inline-block; padding:10px; }
        .hxa-btn{
          display:inline-flex; align-items:center; justify-content:center;
          border-radius:9999px; padding:14px 30px;
          font-family:'Outfit', sans-serif; font-weight:600; font-size:15px;
          letter-spacing:0.01em; text-decoration:none; cursor:pointer;
          transition:transform 0.14s ease-out, background-color 0.18s ease-out,
                     color 0.18s ease-out, border-color 0.18s ease-out;
          will-change:transform;
        }
        .hxa-btn:active{ transform:scale(0.97); }
        .hxa-btn:focus-visible{ outline:2px solid #2E78FF; outline-offset:3px; }
        .hxa-btn-primary{
          background:#075EFD; color:#F4F3FA;
          box-shadow:0 10px 34px rgba(7,94,253,0.35);
        }
        .hxa-btn-ghost{
          background:transparent; color:#F4F3FA;
          border:1.5px solid rgba(244,243,250,0.7);
        }
        @media (hover: hover) and (pointer: fine){
          .hxa-btn-primary:hover{ background:#2E78FF; }
          .hxa-btn-ghost:hover{ background:#F4F3FA; color:#100210; border-color:#F4F3FA; }
        }

        .hxa-personality{
          font-family:'JetBrains Mono', ui-monospace, monospace; font-weight:600;
          font-size:11px; letter-spacing:0.06em; color:#A29CB4;
          line-height:1.9; max-width:60ch;
        }
        .hxa-personality .hxa-mid{ color:#F5379B; padding:0 2px; }

        @keyframes hxa-floaty{
          0%, 100%{ transform:translate3d(0, 0, 0); }
          50%{ transform:translate3d(0, -8px, 0); }
        }
        @keyframes hxa-drift-a{
          0%, 100%{ transform:translate3d(0, 0, 0) scale(1); }
          50%{ transform:translate3d(-4%, 7%, 0) scale(1.06); }
        }
        @keyframes hxa-drift-b{
          0%, 100%{ transform:translate3d(0, 0, 0) scale(1); }
          50%{ transform:translate3d(6%, -6%, 0) scale(1.08); }
        }

        @media (prefers-reduced-motion: reduce){
          .hxa-float,
          .hxa-chip-f1,
          .hxa-chip-f2,
          .hxa-orb-blue,
          .hxa-orb-magenta{ animation:none !important; }
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-[1280px] px-6">
        <div className="hxa-persp">
          <motion.div
            className="hxa-stage"
            style={{ rotateX, rotateY }}
          >
            {/* Layer 1 · ambient glow */}
            <motion.div
              className="hxa-layer-orbs"
              style={{ x: orbX, y: orbY, z: -180 }}
              aria-hidden="true"
              {...orbsIn}
            >
              <div className="hxa-orb hxa-orb-blue" />
              <div className="hxa-orb hxa-orb-magenta" />
            </motion.div>

            {/* Layer 2a · hollow name echo, deepest type plane */}
            <motion.div
              className="hxa-name-layer"
              style={{ x: outlineX, y: outlineY, z: -150 }}
              aria-hidden="true"
            >
              <motion.div {...fadeOnly(0.12)}>
                <div className="hxa-out-off">
                  <div className="hxa-name hxa-name-outline">Faraz</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Layer 2b · the name, rising from a clip line */}
            <motion.div
              className="hxa-name-layer"
              style={{ x: nameX, y: nameY, z: -90 }}
              aria-hidden="true"
            >
              <div className="hxa-clip">
                <motion.div className="hxa-name" {...rise(0)}>
                  Faraz
                </motion.div>
              </div>
            </motion.div>

            {/* Layer 3 · portrait with magenta/blue rim light + chips */}
            <motion.div
              className="hxa-portrait-layer"
              style={{ x: portX, y: portY, z: 0 }}
            >
              <motion.div {...entrance(0.1, 26, 0.65)}>
                <div className="hxa-float">
                  <div className="hxa-portrait">
                    <div className="hxa-rim hxa-rim-magenta" aria-hidden="true" />
                    <div className="hxa-rim hxa-rim-blue" aria-hidden="true" />
                    <img
                      className="hxa-cutout"
                      src={CUTOUT}
                      alt="Faraz Khan"
                      width="1100"
                      height="1027"
                      draggable="false"
                    />
                    <div className="hxa-tint" aria-hidden="true" />
                    <div className="hxa-fade" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>

              {/* Layer 5 · chips, nearest planes, biggest parallax */}
              <motion.div
                className="hxa-chip hxa-chip-1"
                style={{ x: chip1X, y: chip1Y, z: 110 }}
                aria-hidden="true"
              >
                <motion.div {...entrance(0.5, 10, 0.5)}>
                  <span className="hxa-chip-card hxa-chip-f1">
                    <span className="hxa-dot hxa-dot-m" />
                    12+ yrs
                  </span>
                </motion.div>
              </motion.div>
              <motion.div
                className="hxa-chip hxa-chip-2"
                style={{ x: chip2X, y: chip2Y, z: 150 }}
                aria-hidden="true"
              >
                <motion.div {...entrance(0.58, 10, 0.5)}>
                  <span className="hxa-chip-card hxa-chip-f2">
                    <span className="hxa-dot hxa-dot-b" />
                    UX · data · code
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Layer 4 · foreground copy */}
            <motion.div
              className="hxa-copy"
              style={{ x: copyX, y: copyY, z: 50 }}
            >
              <motion.p className="hxa-eyebrow" {...entrance(0.26, 14)}>
                SENIOR UX LEAD · ENTERPRISE, FINTECH & ANALYTICS
              </motion.p>

              <motion.h1
                className="font-display case-keep hxa-statement"
                {...entrance(0.32, 20)}
              >
                <span className="sr-only">Faraz. </span>
                I make complex products{" "}
                <span className="hxa-it">feel obvious.</span>
              </motion.h1>

              <motion.p className="hxa-sub" {...entrance(0.4, 16)}>
                12+ years across UX, product and data, with roots in brand and
                code. Big believer in clarity over decoration, facts over
                feelings, and design that gets out of your way.
              </motion.p>

              <motion.div className="hxa-cta-row" {...entrance(0.48, 14)}>
                <Magnetic enabled={interactive}>
                  <Link to="/projects" className="hxa-btn hxa-btn-primary">
                    View My Work
                  </Link>
                </Magnetic>
                <Magnetic enabled={interactive}>
                  <Link to="/about" className="hxa-btn hxa-btn-ghost">
                    About Me
                  </Link>
                </Magnetic>
              </motion.div>

              <motion.p className="hxa-personality" {...entrance(0.56, 10, 0.5)}>
                {PERSONALITY.map((part, i) => (
                  <span key={part}>
                    {part}
                    {i < PERSONALITY.length - 1 && (
                      <span className="hxa-mid" aria-hidden="true">
                        {" · "}
                      </span>
                    )}
                  </span>
                ))}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
