/*
 * CommentaryMode — a toggleable "design notes" overlay for case studies.
 *
 * STATUS: built for the Crux Control Room work, kept SEPARATE and UNIMPORTED
 * until Faraz says merge (see CONTROL-ROOM.md sections 5 and 7). Importing this
 * into a routed page is the merge step, not a build step. Nothing here touches
 * the live site until then.
 *
 * What it does: a floating "Design notes" button. Turn it on and numbered pins
 * appear over the case-study sections you tagged. Click a pin to read the
 * decision behind that piece of the design: what was chosen, why, what was
 * rejected, and how confident the call was. Off by default; state persists.
 *
 * How to wire it (one import + one line per case study, on merge day):
 *
 *   import CommentaryMode from "../components/CommentaryMode";
 *   import { meridianPins } from "../data/commentary/meridian";
 *   // ...anywhere inside the page's returned JSX, once:
 *   <CommentaryMode pins={meridianPins} storageKey="cmt-meridian" />
 *
 * Then tag the anchors you want pinned, anywhere in that page's markup:
 *
 *   <section data-commentary="ia-model"> ... </section>
 *
 * Each pin's `anchor` must match a `data-commentary` value on the page. The pin
 * is placed at (x%, y%) inside that element's box and follows it on scroll and
 * resize, so it stays correct across responsive layouts. Pins whose anchor is
 * not on the page are skipped silently.
 *
 * Content lives in src/data/commentary/<slug>.js. Every pin's words are Faraz's
 * to approve before this ships (voice + accuracy); the drafts there are marked.
 *
 * Visual design is deliberately minimal for now; a polish pass comes later.
 */
import React, { useCallback, useEffect, useRef, useState } from "react";

const STYLE_ID = "cmt-styles";
const CSS = `
.cmt-toggle{position:fixed;left:20px;bottom:20px;z-index:60;display:inline-flex;align-items:center;gap:8px;
  font:600 13px/1 system-ui,sans-serif;color:#E6EDF3;background:#161B22;border:1px solid #2A313C;border-radius:999px;
  padding:10px 15px;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.35);transition:border-color .15s,background .15s}
.cmt-toggle:hover{border-color:#3d4552;background:#1B222B}
.cmt-toggle.on{border-color:#E8519B;color:#fff}
.cmt-toggle .cmt-swatch{width:9px;height:9px;border-radius:50%;background:#E8519B;flex:none}
.cmt-count{font:600 10px/1 ui-monospace,monospace;color:#8B949E;border:1px solid #2A313C;border-radius:999px;padding:2px 6px}
.cmt-layer{position:fixed;inset:0;z-index:59;pointer-events:none}
.cmt-pin{position:fixed;transform:translate(-50%,-50%);pointer-events:auto;width:26px;height:26px;border-radius:50%;
  display:grid;place-items:center;font:700 12px/1 ui-monospace,monospace;color:#fff;background:#E8519B;
  border:2px solid #0E1116;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.4);transition:transform .12s}
.cmt-pin:hover,.cmt-pin.active{transform:translate(-50%,-50%) scale(1.15)}
.cmt-pin::after{content:"";position:absolute;inset:-8px;border-radius:50%;border:2px solid rgba(232,81,155,.35);
  animation:cmt-ping 2s var(--cmt-ease,ease-out) infinite}
.cmt-card{position:fixed;z-index:61;width:320px;max-width:calc(100vw - 32px);background:#161B22;color:#E6EDF3;
  border:1px solid #2A313C;border-radius:10px;box-shadow:0 16px 50px rgba(0,0,0,.55);padding:16px;
  font-family:system-ui,sans-serif;animation:cmt-in .16s ease}
.cmt-card h4{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8B949E;margin:0 0 5px;font-weight:600}
.cmt-card .cmt-block+.cmt-block{margin-top:12px}
.cmt-card p{margin:0;font-size:13px;line-height:1.5;color:#C9D1D9}
.cmt-card .cmt-decision{font-size:15px;font-weight:600;line-height:1.35;color:#fff}
.cmt-conf{display:inline-flex;align-items:center;gap:6px;font:600 10px/1 ui-monospace,monospace;letter-spacing:.06em;
  text-transform:uppercase;border:1px solid currentColor;border-radius:999px;padding:3px 8px}
.cmt-conf.high{color:#3FB950}.cmt-conf.medium{color:#D29922}.cmt-conf.low{color:#F85149}
.cmt-close{position:absolute;top:10px;right:10px;width:24px;height:24px;border-radius:6px;border:1px solid #2A313C;
  background:none;color:#8B949E;cursor:pointer;font-size:14px;line-height:1}
.cmt-close:hover{color:#E6EDF3;border-color:#3d4552}
.cmt-num{font:700 10px/1 ui-monospace,monospace;color:#E8519B}
.cmt-hint{position:fixed;left:20px;bottom:66px;z-index:60;max-width:260px;background:#161B22;border:1px solid #2A313C;
  border-radius:8px;padding:10px 12px;font:400 12px/1.4 system-ui,sans-serif;color:#8B949E}
@keyframes cmt-ping{0%{transform:scale(.9);opacity:.8}70%,100%{transform:scale(1.5);opacity:0}}
@keyframes cmt-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion: reduce){
  .cmt-pin::after{animation:none}.cmt-card{animation:none}.cmt-toggle,.cmt-pin{transition:none}
}
`;

function injectStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export default function CommentaryMode({ pins = [], label = "Design notes", storageKey = "cmt" }) {
  const [on, setOn] = useState(false);
  const [rects, setRects] = useState([]);   // one {left, top} | null per pin
  const [active, setActive] = useState(null); // index of the open pin card
  const rafRef = useRef(0);

  // restore persisted on/off
  useEffect(() => {
    injectStyles();
    try {
      if (window.localStorage.getItem(storageKey) === "1") setOn(true);
    } catch (e) { /* storage blocked, default off */ }
  }, [storageKey]);

  const persist = useCallback((v) => {
    try { window.localStorage.setItem(storageKey, v ? "1" : "0"); } catch (e) { /* ignore */ }
  }, [storageKey]);

  // position pins against their anchors; follow scroll + resize
  const measure = useCallback(() => {
    setRects(pins.map((p) => {
      const el = document.querySelector(`[data-commentary="${p.anchor}"]`);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        left: r.left + ((p.x ?? 50) / 100) * r.width,
        top: r.top + ((p.y ?? 50) / 100) * r.height,
      };
    }));
  }, [pins]);

  useEffect(() => {
    if (!on) return undefined;
    const schedule = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [on, measure]);

  // Esc closes the open card
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const toggle = () => {
    setOn((prev) => { const next = !prev; persist(next); if (!next) setActive(null); return next; });
  };

  const shown = on ? pins.map((p, i) => ({ p, i, r: rects[i] })).filter((x) => x.r) : [];

  // place the card near its pin, clamped into the viewport
  const cardPos = (r) => {
    if (!r || typeof window === "undefined") return { left: 20, top: 20 };
    const W = 320, M = 16;
    let left = r.left + 20;
    let top = r.top + 16;
    left = Math.min(left, window.innerWidth - W - M);
    left = Math.max(M, left);
    top = Math.min(top, window.innerHeight - 220);
    top = Math.max(M, top);
    return { left, top };
  };

  return (
    <>
      <button
        type="button"
        className={`cmt-toggle${on ? " on" : ""}`}
        aria-pressed={on}
        onClick={toggle}
        title={on ? "Hide the design notes" : "Show the design notes behind this case study"}
      >
        <span className="cmt-swatch" aria-hidden="true" />
        {label}
        {pins.length ? <span className="cmt-count">{pins.length}</span> : null}
      </button>

      {on && shown.length === 0 && (
        <div className="cmt-hint">No notes anchored on this page yet. Pins appear where the page is tagged.</div>
      )}

      {on && (
        <div className="cmt-layer" aria-hidden={active !== null ? "true" : "false"}>
          {shown.map(({ p, i, r }) => (
            <button
              key={p.id || i}
              type="button"
              className={`cmt-pin${active === i ? " active" : ""}`}
              style={{ left: r.left, top: r.top }}
              onClick={() => setActive(active === i ? null : i)}
              aria-label={`Design note ${i + 1}: ${p.decision}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {on && active !== null && pins[active] && (
        <div className="cmt-card" style={cardPos(rects[active])} role="dialog" aria-label="Design note">
          <button type="button" className="cmt-close" onClick={() => setActive(null)} aria-label="Close">×</button>
          <span className="cmt-num">Note {active + 1} of {pins.length}</span>
          <div className="cmt-block" style={{ marginTop: 6 }}>
            <h4>Decision</h4>
            <p className="cmt-decision">{pins[active].decision}</p>
          </div>
          {pins[active].why && (
            <div className="cmt-block"><h4>Why</h4><p>{pins[active].why}</p></div>
          )}
          {pins[active].rejected && (
            <div className="cmt-block"><h4>Rejected</h4><p>{pins[active].rejected}</p></div>
          )}
          {pins[active].confidence && (
            <div className="cmt-block">
              <span className={`cmt-conf ${String(pins[active].confidence).toLowerCase()}`}>
                {pins[active].confidence} confidence
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
