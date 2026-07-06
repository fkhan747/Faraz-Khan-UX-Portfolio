import { useEffect, useRef, useState } from "react";

/**
 * Hidden Easter egg. A small magenta spark sits low in the corner: it breathes,
 * flares every so often to catch the eye, reacts as the cursor approaches, and
 * teases "don't." on hover. Clicking it sends you to the encrypted /deck/ gate
 * ("You found the treasure."). Fully client-side, respects reduced-motion.
 * Mounted once globally from <Layout />.
 */

const CSS = `
.tr-spark{position:fixed;left:24px;bottom:22px;z-index:60;width:46px;height:46px;
  display:grid;place-items:center;background:none;border:0;padding:0;cursor:pointer;
  -webkit-tap-highlight-color:transparent;opacity:0;transform:translateY(8px) scale(.6);
  transition:opacity .7s ease, transform .7s cubic-bezier(.2,1,.3,1);pointer-events:none}
.tr-spark.tr-in{opacity:1;transform:none;pointer-events:auto}
.tr-core{position:relative;display:block;line-height:0;will-change:transform,opacity}
.tr-breathe{animation:tr-breathe 4.2s ease-in-out infinite}
@keyframes tr-breathe{0%,100%{opacity:.52;transform:scale(.9)}50%{opacity:.95;transform:scale(1.06)}}
.tr-flare{animation:tr-flare .9s ease-out}
@keyframes tr-flare{0%{transform:scale(1);opacity:.8}28%{transform:scale(2.15);opacity:1;filter:brightness(1.5)}100%{transform:scale(1);opacity:.55}}
.tr-star{display:block;transform:scale(calc(1 + var(--near,0) * .55));
  filter:drop-shadow(0 0 calc(5px + var(--near,0) * 9px) #F0186C) drop-shadow(0 0 2px rgba(255,255,255,.55));
  transition:transform .16s ease, filter .16s ease}
.tr-spark:where(:hover,:focus-visible) .tr-star{transform:scale(1.75)}
.tr-label{position:absolute;left:46px;bottom:15px;transform:rotate(-3deg) translateY(4px);
  font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;font-weight:700;letter-spacing:.02em;
  color:#F4F3FA;background:rgba(24,17,38,.86);border:1px solid #F0186C;border-radius:8px;padding:5px 10px;
  white-space:nowrap;opacity:0;pointer-events:none;box-shadow:3px 3px 0 rgba(240,24,108,.5);
  transition:opacity .18s ease, transform .18s ease}
.tr-spark:where(:hover,:focus-visible) .tr-label{opacity:1;transform:rotate(-3deg) translateY(0)}
.tr-particle{position:fixed;width:5px;height:5px;border-radius:50%;pointer-events:none;z-index:61;
  box-shadow:0 0 8px rgba(242,213,15,.8);animation:tr-fly .72s ease-out forwards}
@keyframes tr-fly{0%{transform:translate(-50%,-50%) scale(1);opacity:1}
  100%{transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(.2);opacity:0}}
@media (prefers-reduced-motion:reduce){
  .tr-spark{transition:opacity .3s ease}
  .tr-breathe,.tr-flare{animation:none !important}
  .tr-star{filter:drop-shadow(0 0 6px #F0186C) drop-shadow(0 0 2px rgba(255,255,255,.55))}
}
`;

export default function TreasureSpark() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  function burst(n) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("div");
      p.className = "tr-particle";
      const ang = Math.random() * Math.PI * 2, dist = 20 + Math.random() * 36;
      p.style.left = cx + "px";
      p.style.top = cy + "px";
      p.style.setProperty("--dx", Math.cos(ang) * dist + "px");
      p.style.setProperty("--dy", Math.sin(ang) * dist - 12 + "px");
      p.style.background = i % 3 === 0 ? "#17C3E8" : "#F2D50F";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 740);
    }
  }

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showT = setTimeout(() => setShown(true), 3000);
    const core = () => ref.current && ref.current.querySelector(".tr-core");
    let flareT;

    function scheduleFlare() {
      flareT = setTimeout(() => {
        const c = core();
        if (c) {
          c.classList.remove("tr-breathe", "tr-flare");
          void c.offsetWidth;
          c.classList.add("tr-flare");
          burst(6);
          setTimeout(() => { c.classList.remove("tr-flare"); c.classList.add("tr-breathe"); }, 900);
        }
        scheduleFlare();
      }, 11000 + Math.random() * 9000);
    }

    let raf = 0;
    function onMove(e) {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const d = Math.hypot(e.clientX - cx, e.clientY - cy);
        el.style.setProperty("--near", Math.max(0, 1 - d / 170).toFixed(3));
      });
    }

    if (!reduce) {
      scheduleFlare();
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    return () => {
      clearTimeout(showT);
      clearTimeout(flareT);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  function onClick() {
    burst(12);
    setTimeout(() => { window.location.href = "/deck/"; }, 240);
  }

  return (
    <>
      <style>{CSS}</style>
      <button
        ref={ref}
        className={"tr-spark" + (shown ? " tr-in" : "")}
        onClick={onClick}
        aria-label="A little something, hidden"
        title="✦"
      >
        <span className="tr-core tr-breathe" aria-hidden="true">
          <span className="tr-star">
            <svg viewBox="0 0 24 24" width="17" height="17" focusable="false">
              <path d="M12 0 C12.7 6.6 17.4 11.3 24 12 C17.4 12.7 12.7 17.4 12 24 C11.3 17.4 6.6 12.7 0 12 C6.6 11.3 11.3 6.6 12 0 Z" fill="#F0186C" />
            </svg>
          </span>
        </span>
        <span className="tr-label" aria-hidden="true">don&rsquo;t.</span>
      </button>
    </>
  );
}
