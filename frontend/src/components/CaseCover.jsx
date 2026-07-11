import { ArrowUpRight, Lock } from "lucide-react";

/**
 * A case-study card cover: the image fills the whole card, with a blue→magenta
 * brand tint + a bottom scrim, and the title/subtitle/year overlaid on top
 * (no separate solid content strip). Used on the home + projects grids.
 * `size="lg"` is the wide featured treatment. `locked` frosts the cover and
 * swaps in a confidential lock treatment.
 */
export default function CaseCover({ img, title, subtitle, year, comingSoon = false, locked = false, badge, size = "md", titleAs: TitleTag = "h3" }) {
  const aspect = size === "lg" ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[4/3]";
  const titleSize = size === "lg" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl";
  const badgeText = badge || (comingSoon ? "coming soon" : null);

  return (
    <div className={`relative ${aspect} overflow-hidden rounded-3xl bg-[#15101F]`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className={`cover-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${locked ? "blur-md scale-[1.08] group-hover:scale-[1.12]" : ""}`}
      />
      {/* brand tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(135deg, rgba(7,94,253,0.40), rgba(245,55,155,0.34))" }}
      />
      {/* readability scrim (stronger when locked so the frosted cover reveals nothing) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: locked
            ? "linear-gradient(to top, rgba(13,3,18,0.97) 6%, rgba(13,3,18,0.66) 44%, rgba(13,3,18,0.30) 100%)"
            : "linear-gradient(to top, rgba(13,3,18,0.96) 2%, rgba(13,3,18,0.45) 36%, rgba(13,3,18,0) 66%)",
        }}
      />
      {locked ? (
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest">
          <Lock size={11} /> confidential
        </span>
      ) : (
        badgeText && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur-sm border border-white/15 text-white text-[10px] font-mono uppercase tracking-widest">
            {badgeText}
          </span>
        )
      )}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3 mb-1 flex-wrap">
            <TitleTag className={`font-display ${titleSize} font-black text-white leading-none`}>{title}</TitleTag>
          </div>
          {subtitle && <p className="text-sm md:text-base text-white/75 max-w-xl">{subtitle}</p>}
        </div>
        {locked ? (
          <Lock className="flex-shrink-0 text-white/85 mb-1" size={size === "lg" ? 24 : 20} />
        ) : (
          <ArrowUpRight className="flex-shrink-0 text-white/85 group-hover:rotate-45 transition-transform mb-1" size={size === "lg" ? 26 : 22} />
        )}
      </div>
    </div>
  );
}
