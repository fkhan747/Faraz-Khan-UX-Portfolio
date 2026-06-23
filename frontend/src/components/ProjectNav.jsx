import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, concepts } from "../data/content";

/**
 * ProjectNav — compact Previous / Next project pager for the top of a case
 * study, sat on the same row as the "all projects" back-link (Next on the
 * right edge).
 *
 * Fixed, circular order matching the data ([...projects, ...concepts]):
 *   FinVista → Aurora → Next-Gen Institute → Jack of All Threads
 *   → Slate → Almanac → Crux → (wraps back to FinVista).
 */
const ORDER = [...projects, ...concepts].map((p) => ({
  slug: p.slug,
  title: p.title,
  href: p.href || `/case/${p.slug}`,
}));

export default function ProjectNav({ slug }) {
  const idx = ORDER.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;

  const prev = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const next = ORDER[(idx + 1) % ORDER.length];

  return (
    <nav aria-label="Project navigation" className="flex items-center gap-2 sm:gap-2.5">
      <Link
        to={prev.href}
        data-testid="prev-project"
        title={`Previous project: ${prev.title}`}
        className="group flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-1.5 hover:bg-white/10 hover:border-white/25 transition-colors"
      >
        <ArrowLeft size={14} className="shrink-0 text-white/45 group-hover:text-[#F5379B] transition-colors" />
        <span className="text-left leading-tight">
          <span className="block text-[8px] font-mono uppercase tracking-[0.2em] text-white/40">Previous</span>
          <span className="block max-w-[34vw] sm:max-w-[150px] truncate text-xs font-bold text-white/85">{prev.title}</span>
        </span>
      </Link>

      <Link
        to={next.href}
        data-testid="next-project"
        title={`Next project: ${next.title}`}
        className="group flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-1.5 hover:bg-white/10 hover:border-white/25 transition-colors"
      >
        <span className="text-right leading-tight">
          <span className="block text-[8px] font-mono uppercase tracking-[0.2em] text-white/40">Next</span>
          <span className="block max-w-[34vw] sm:max-w-[150px] truncate text-xs font-bold text-white/85">{next.title}</span>
        </span>
        <ArrowRight size={14} className="shrink-0 text-white/45 group-hover:text-[#F5379B] transition-colors" />
      </Link>
    </nav>
  );
}
