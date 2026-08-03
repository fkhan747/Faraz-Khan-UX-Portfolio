import Reveal from "./Reveal";

/**
 * "What I owned" responsibility chips, shown in a case-study hero.
 * Mirrors the Meridian treatment so every case study carries the same block.
 * `accent` tints the eyebrow label and the chip dots.
 */
export default function OwnedCard({ items = [], accent = "#F5379B", className = "" }) {
  if (!items.length) return null;
  return (
    /* `owned-card` / `owned-card-label` are styling hooks with no rules of
       their own here. The light concept pages use them to re-ground this block
       on paper; on the dark pages they do nothing. */
    <Reveal className={`owned-card mt-7 max-w-4xl rounded-2xl p-5 bg-[#100210]/55 backdrop-blur-md border border-white/12 ${className}`}>
      <p className="owned-card-label text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: accent }}>What I owned</p>
      <div className="flex flex-wrap gap-2.5">
        {items.map((x) => (
          <span key={x} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F4F3FA]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />{x}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
