import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" button. Fades in after the user scrolls down a bit,
 * smooth-scrolls to the top on click. White fill with a magenta arrow so it is
 * visible on the dark page without shouting. Rendered once in Layout.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      data-testid="back-to-top"
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-white text-[#F5379B] border-2 border-[#F5379B] grid place-items-center shadow-lg shadow-black/30 transition-all duration-300 hover:bg-[#F5379B] hover:text-white ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
