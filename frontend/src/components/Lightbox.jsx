import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { useVaultSrc } from "./VaultImage";

/**
 * App-wide image lightbox. A single overlay shared by every case study via
 * <LightboxProvider> (mounted in App.js). Any image opens it with
 * useLightbox().open({ src, alt, caption }). The <Zoomable> wrapper handles
 * the per-image "view full screen" button + click target.
 */
const LightboxContext = createContext({ open: () => {}, close: () => {} });
export const useLightbox = () => useContext(LightboxContext);

/* One image inside the overlay. Split into its own component so each entry of a
   group can resolve its own vault URL (hooks cannot run in a loop). */
function LightboxImage({ src, alt, count = 1 }) {
  const resolved = useVaultSrc(src);
  /* Each image is capped to its share of the viewport width as well as its
     height, so a group of tall phone screens fits on one row instead of
     wrapping and overflowing off the top of the screen. */
  const style = count > 1
    ? { maxWidth: `${Math.floor(86 / count)}vw`, maxHeight: "82vh" }
    : { maxWidth: "95vw", maxHeight: "85vh" };
  return (
    <img
      src={resolved || src}
      alt={alt || ""}
      onClick={(e) => e.stopPropagation()}
      style={style}
      className="w-auto h-auto object-contain rounded-lg shadow-[0_40px_80px_-24px_rgba(7,94,253,0.45)] bg-white"
    />
  );
}

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  const open = useCallback((it) => setItem(it), []);
  const close = useCallback(() => setItem(null), []);

  /* Two shapes are accepted:
       open({ src, alt, caption })              one image
       open({ items: [{src, alt}], caption })   a group, shown side by side
     The group form exists so a panel holding several screens can expand as one
     unit rather than making the reader open each screen separately. */
  const group = Array.isArray(item?.items) ? item.items : null;

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, close]);

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      {item && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8 lightbox-fade"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption || item.alt || "Image preview"}
          data-testid="lightbox"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close full screen"
            className="absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 rounded-full bg-white/10 border border-white/20 text-white grid place-items-center hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          {group ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-3 md:gap-6 max-w-[95vw] max-h-[85vh]"
            >
              {group.map((g) => (
                <LightboxImage key={g.src} src={g.src} alt={g.alt} count={group.length} />
              ))}
            </div>
          ) : (
            <LightboxImage src={item.src} alt={item.alt} />
          )}
          {item.caption && (
            <p
              onClick={(e) => e.stopPropagation()}
              className="mt-4 max-w-2xl text-center text-sm text-white/75 leading-relaxed"
            >
              {item.caption}
            </p>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}
