import { useEffect, useRef, useState } from "react";
import { Maximize2 } from "lucide-react";
import { useLightbox } from "./Lightbox";

/**
 * Wraps a case-study image (its existing box markup goes in as children) and:
 *  - makes the whole box a click/keyboard target that opens the shared Lightbox,
 *  - adds a visible "view full screen" button (always shown on touch, hover-reveal
 *    on desktop),
 *  - shows a soft skeleton until the inner <img> loads, so lazy images never flash
 *    as a blank white box.
 * Pass the original wrapper's className so layout is unchanged.
 */
export default function Zoomable({ src, alt = "", caption, className = "", children }) {
  const { open } = useLightbox();
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const item = { src, alt, caption: caption || alt };

  useEffect(() => {
    const img = ref.current && ref.current.querySelector("img");
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) { setLoaded(true); return; }
    const done = () => setLoaded(true);
    img.addEventListener("load", done);
    img.addEventListener("error", done);
    return () => {
      img.removeEventListener("load", done);
      img.removeEventListener("error", done);
    };
  }, [src]);

  const fire = () => open(item);

  return (
    <div
      ref={ref}
      className={`relative group/zoom cursor-zoom-in ${className}`}
      onClick={fire}
      role="button"
      tabIndex={0}
      aria-label={`View full screen: ${caption || alt || "image"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fire(); }
      }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 z-[1] animate-pulse bg-gradient-to-br from-black/[0.06] via-black/[0.12] to-black/[0.06] pointer-events-none"
          aria-hidden="true"
        />
      )}
      {children}
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/55 backdrop-blur-sm text-white border border-white/20 shadow-[0_8px_24px_-8px_rgba(7,94,253,0.5)] opacity-0 group-hover/zoom:opacity-100 max-sm:opacity-100 transition-opacity duration-200"
      >
        <Maximize2 size={16} />
      </span>
    </div>
  );
}
