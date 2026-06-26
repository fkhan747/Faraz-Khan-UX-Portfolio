import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, concepts } from "../data/content";

/**
 * ProjectNav - Previous / Next project pager.
 *
 * Fixed, circular order matching the data ([...projects, ...concepts]):
 *   FinVista → Aurora → Next-Gen Institute → Jack of All Threads
 *   → Slate → Almanac → Crux → (wraps back to FinVista).
 *
 * variant="footer" (the site-wide default placement now): a subtle, grey-bordered
 *   pill that sits in the case-study footer next to the primary CTAs. Use
 *   `which="prev"` / `which="next"` to render a single side (so Previous can flank
 *   the email button and Next can flank the "view all projects" button).
 * variant="top": the legacy compact pager (kept for safety; no longer placed).
 */
// Dormant concepts (live === false) are skipped, so prev/next never lands on
// them. Their case-study route still works if someone visits it directly.
const ORDER = [...projects, ...concepts.filter((c) => c.live !== false)].map((p) => ({
  slug: p.slug,
  title: p.title,
  href: p.href || `/case/${p.slug}`,
}));

function neighbors(slug) {
  const idx = ORDER.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  return {
    prev: ORDER[(idx - 1 + ORDER.length) % ORDER.length],
    next: ORDER[(idx + 1) % ORDER.length],
  };
}

/* Subtle grey footer pill, matched in height to the footer CTAs but deliberately
   low-contrast so it does not compete with "email me" / "view all projects". */
function FooterLink({ to, dir, title }) {
  const isPrev = dir === "prev";
  return (
    <Link
      to={to}
      data-testid={isPrev ? "prev-project" : "next-project"}
      title={`${isPrev ? "Previous" : "Next"} project: ${title}`}
      className={`group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 text-[#A29CB4] hover:border-white/40 hover:text-[#F4F3FA] transition-[color,border-color,transform] duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5379B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100210] ${isPrev ? "sm:mr-5" : "sm:ml-5"}`}
    >
      {isPrev && <ArrowLeft size={16} className="shrink-0 text-white/40 group-hover:text-[#F5379B] transition-colors" />}
      <span className={`leading-tight ${isPrev ? "text-left" : "text-right"}`}>
        <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">{isPrev ? "Previous" : "Next"}</span>
        <span className="block max-w-[40vw] sm:max-w-[160px] truncate text-sm font-semibold">{title}</span>
      </span>
      {!isPrev && <ArrowRight size={16} className="shrink-0 text-white/40 group-hover:text-[#F5379B] transition-colors" />}
    </Link>
  );
}

export default function ProjectNav({ slug, variant = "footer", which = "both" }) {
  const n = neighbors(slug);
  if (!n) return null;
  const { prev, next } = n;

  if (variant === "footer") {
    if (which === "prev") return <FooterLink to={prev.href} dir="prev" title={prev.title} />;
    if (which === "next") return <FooterLink to={next.href} dir="next" title={next.title} />;
    return (
      <>
        <FooterLink to={prev.href} dir="prev" title={prev.title} />
        <FooterLink to={next.href} dir="next" title={next.title} />
      </>
    );
  }

  // Legacy top pager (no longer placed; kept so nothing breaks if referenced).
  return (
    <nav aria-label="Project navigation" className="flex items-center gap-2 sm:gap-2.5">
      <Link to={prev.href} data-testid="prev-project" title={`Previous project: ${prev.title}`}
        className="group flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-1.5 hover:bg-white/10 hover:border-white/25 transition-colors">
        <ArrowLeft size={14} className="shrink-0 text-white/45 group-hover:text-[#F5379B] transition-colors" />
        <span className="text-left leading-tight">
          <span className="block text-[8px] font-mono uppercase tracking-[0.2em] text-white/40">Previous</span>
          <span className="block max-w-[34vw] sm:max-w-[150px] truncate text-xs font-bold text-white/85">{prev.title}</span>
        </span>
      </Link>
      <Link to={next.href} data-testid="next-project" title={`Next project: ${next.title}`}
        className="group flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-1.5 hover:bg-white/10 hover:border-white/25 transition-colors">
        <span className="text-right leading-tight">
          <span className="block text-[8px] font-mono uppercase tracking-[0.2em] text-white/40">Next</span>
          <span className="block max-w-[34vw] sm:max-w-[150px] truncate text-xs font-bold text-white/85">{next.title}</span>
        </span>
        <ArrowRight size={14} className="shrink-0 text-white/45 group-hover:text-[#F5379B] transition-colors" />
      </Link>
    </nav>
  );
}
