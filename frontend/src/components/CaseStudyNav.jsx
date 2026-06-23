import { useEffect, useState } from "react";

/**
 * CaseStudyNav — a floating, in-page section jumper specific to a case study.
 *
 * Auto-derives its items from the page itself: every <section data-testid="section-*">
 * with a SectionLabel eyebrow ("01 · Overview") becomes a link. Clicking scrolls to
 * the section; an IntersectionObserver highlights the one you're reading.
 *
 * Dark "glass" container, fixed in the left margin. Only shown on very wide screens
 * where that margin genuinely exists (so it never overlaps the content); hidden
 * otherwise. Drop <CaseStudyNav /> once inside a case-study <article>.
 */
export default function CaseStudyNav() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let observer;
    let cancelled = false;

    const build = () => {
      if (cancelled) return;
      const secs = [
        ...document.querySelectorAll('article [data-testid^="section-"]'),
      ];
      const built = secs
        .map((el) => {
          const eyebrow = el.querySelector(".font-mono");
          let num = "";
          let name = "";
          if (eyebrow) {
            const parts = eyebrow.textContent.trim().split("·");
            if (parts.length >= 2) {
              num = parts[0].trim();
              name = parts.slice(1).join("·").trim();
            } else {
              name = eyebrow.textContent.trim();
            }
          }
          return { el, num, name };
        })
        .filter((s) => s.name);

      // Sections render with the page, but retry once if hydration hasn't settled.
      if (!built.length) {
        setTimeout(build, 300);
        return;
      }

      setItems(built);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = built.findIndex((b) => b.el === entry.target);
              if (idx >= 0) setActive(idx);
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      built.forEach((b) => observer.observe(b.el));
    };

    build();
    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
    };
  }, []);

  if (!items.length) return null;

  const jump = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Jump to section"
      className="hidden min-[1780px]:flex fixed left-3 top-1/2 -translate-y-1/2 z-40 w-[162px] flex-col gap-0.5 max-h-[82vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-2 shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
    >
      <p className="px-2.5 pt-1 pb-2 text-[9px] font-mono uppercase tracking-[0.22em] text-white/35">
        On this page
      </p>
      {items.map((it, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            onClick={() => jump(it.el)}
            className={`group flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-left transition-colors ${
              isActive ? "bg-white/10" : "hover:bg-white/5"
            }`}
          >
            <span
              className={`font-mono text-[10px] tabular-nums transition-colors ${
                isActive ? "text-[#F5379B]" : "text-white/35 group-hover:text-white/60"
              }`}
            >
              {it.num || "•"}
            </span>
            <span
              className={`text-[12px] font-medium leading-tight transition-colors ${
                isActive ? "text-white" : "text-white/55 group-hover:text-white/80"
              }`}
            >
              {it.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
