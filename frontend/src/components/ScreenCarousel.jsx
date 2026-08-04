import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
 * ScreenCarousel - one screen fully visible, the next one peeking, arrows to
 * move between them.
 *
 * Built for the case-study "final design" sections, where a masonry grid of
 * six screens made every screen small and gave the reader no order to follow.
 * A carousel shows one at full size and makes the sequence explicit.
 *
 * Accessibility: the track is a real scroll container, so trackpad, touch and
 * keyboard scrolling all work without the arrows. The arrows are buttons with
 * labels and go disabled at each end rather than silently doing nothing.
 *
 * Spacing between slides is a margin, not a flex `gap`: the prerender Chromium
 * ignores flex gap and would run the slides together in the built HTML.
 */

const CAROUSEL_CSS = `
  .sc-wrap{ position:relative; }
  .sc-track{
    display:flex; overflow-x:auto; scroll-snap-type:x mandatory;
    scroll-behavior:smooth; padding-bottom:8px;
    scrollbar-width:none; -ms-overflow-style:none;
  }
  .sc-track::-webkit-scrollbar{ display:none; }
  .sc-slide{
    flex:0 0 78%; scroll-snap-align:start; margin-right:20px;
    background:#fff; border:1px solid #DCD7CC; border-radius:22px; overflow:hidden;
  }
  .sc-slide:last-child{ margin-right:0; }
  @media (max-width:1024px){ .sc-slide{ flex-basis:86%; } }
  @media (max-width:640px){ .sc-slide{ flex-basis:92%; margin-right:14px; } }
  .sc-media{ background:#fff; padding:14px; }
  .sc-media img{ width:100%; height:auto; display:block; border-radius:12px; }
  .sc-cap{ padding:20px 22px 24px; border-top:1px solid #DCD7CC; }
  .sc-tag{ font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600;
    text-transform:uppercase; letter-spacing:.16em; color:var(--case-acc,#C71E73); }
  .sc-title{ font-family:'Playfair Display',serif; font-weight:700; font-size:1.05rem;
    margin:8px 0 0; color:#171512; }
  .sc-desc{ font-size:14.5px; line-height:1.6; color:#6B665D; margin:8px 0 0; }

  .sc-nav{ display:flex; gap:10px; justify-content:flex-end; margin-top:18px; }
  .sc-arrow{
    width:46px; height:46px; border-radius:9999px; display:inline-flex;
    align-items:center; justify-content:center; cursor:pointer;
    background:#fff; border:1px solid #DCD7CC; color:#171512;
    transition:background-color .16s ease-out, border-color .16s ease-out, opacity .16s ease-out;
  }
  .sc-arrow:disabled{ opacity:.35; cursor:default; }
  .sc-arrow:focus-visible{ outline:2px solid var(--case-acc,#C71E73); outline-offset:3px; }
  @media (hover:hover) and (pointer:fine){
    .sc-arrow:not(:disabled):hover{ background:#F4F2EC; border-color:#B9B2A5; }
  }
  .sc-count{ font-family:'JetBrains Mono',monospace; font-size:12px; color:#6B665D;
    align-self:center; margin-right:auto; }
`;

export default function ScreenCarousel({ items, renderMedia, label = "Screens" }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [index, setIndex] = useState(0);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    const slide = el.firstElementChild;
    if (slide) {
      const step = slide.getBoundingClientRect().width + 20;
      setIndex(Math.min(items.length - 1, Math.round(el.scrollLeft / step)));
    }
  }, [items.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const move = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.firstElementChild;
    const step = slide ? slide.getBoundingClientRect().width + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="sc-wrap">
      <style>{CAROUSEL_CSS}</style>
      <div className="sc-track" ref={trackRef} role="group" aria-label={label}>
        {items.map((it) => (
          <figure className="sc-slide" key={it.src || it.title}>
            <div className="sc-media">{renderMedia(it)}</div>
            <figcaption className="sc-cap">
              {it.tag && <span className="sc-tag">{it.tag}</span>}
              <h3 className="sc-title">{it.title}</h3>
              {it.desc && <p className="sc-desc">{it.desc}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="sc-nav">
        <span className="sc-count">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button type="button" className="sc-arrow" onClick={() => move(-1)} disabled={atStart} aria-label="Previous screen">
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button type="button" className="sc-arrow" onClick={() => move(1)} disabled={atEnd} aria-label="Next screen">
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
