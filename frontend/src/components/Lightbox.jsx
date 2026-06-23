import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

/**
 * App-wide image lightbox. A single overlay shared by every case study via
 * <LightboxProvider> (mounted in App.js). Any image opens it with
 * useLightbox().open({ src, alt, caption }). The <Zoomable> wrapper handles
 * the per-image "view full screen" button + click target.
 */
const LightboxContext = createContext({ open: () => {}, close: () => {} });
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  const open = useCallback((it) => setItem(it), []);
  const close = useCallback(() => setItem(null), []);

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
          <img
            src={item.src}
            alt={item.alt || ""}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-[0_40px_80px_-24px_rgba(7,94,253,0.45)] bg-white"
          />
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
