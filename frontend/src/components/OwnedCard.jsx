import Reveal from "./Reveal";

/**
 * "What I owned" responsibility chips, shown in a case-study hero.
 * Every case study carries the same block, so it looks the same on all of them.
 *
 * LIGHT, since 2026-08-04. It used to be a translucent near-black panel built
 * for white type over a cover photograph. Once the heroes moved onto paper that
 * fill composited to grey, the eyebrow was bright magenta on grey, and the
 * chips were 5%-white on a grey card, so the whole block read as broken. It is
 * a white card with a hairline now.
 *
 * `accent` tints the eyebrow and the chip dots. Pass the case study's brand
 * colour; it needs to be dark enough to read on white, which every case accent
 * in use is.
 */
export default function OwnedCard({ items = [], accent = "#C71E73", className = "" }) {
  if (!items.length) return null;
  return (
    /* `owned-card` / `owned-card-label` are styling hooks kept for the concept
       pages, which target them from their own stylesheet. */
    <Reveal
      className={`owned-card mt-7 max-w-4xl rounded-2xl p-5 bg-white border border-[#DCD7CC] ${className}`}
    >
      <p
        className="owned-card-label text-[10px] font-mono uppercase tracking-widest mb-3"
        style={{ color: accent }}
      >
        What I owned
      </p>
      <div className="flex flex-wrap gap-2.5">
        {items.map((x) => (
          <span
            key={x}
            className="inline-flex items-center gap-2 rounded-full border border-[#DCD7CC] bg-[#F7F6F2] px-4 py-2 text-sm font-semibold text-[#171512]"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
            {x}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
