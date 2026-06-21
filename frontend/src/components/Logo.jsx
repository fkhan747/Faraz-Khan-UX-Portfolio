/**
 * Site logo: the custom calligraphic FK monogram, served from /logo.png
 * (transparent PNG dropped into public/). Set the rendered height via className.
 * NOTE: a transparent PNG can't be selectively recolored (e.g. magenta diamond
 * accents) — that would need an SVG version.
 */
export default function Logo({ className = "" }) {
  return <img src="/logo.png" alt="Faraz Khan" className={className} />;
}
