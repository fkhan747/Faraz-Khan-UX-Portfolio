import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * The "Request access" pill shown on a locked case-study card. Sits above the
 * card's own link (a sibling, not nested — so it's valid HTML and its own click
 * routes to the contact page while the rest of the card opens the gate).
 */
export default function RequestAccessPill({ slug }) {
  return (
    <Link
      to="/contact?intent=access"
      data-testid={`request-access-${slug}`}
      onClick={(e) => e.stopPropagation()}
      className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2D50F] text-[#100210] text-[10px] font-mono font-bold uppercase tracking-widest shadow-[3px_3px_0_#F0186C] hover:-translate-y-0.5 transition-transform"
    >
      Request access <ArrowUpRight size={13} />
    </Link>
  );
}
