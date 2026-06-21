/**
 * Custom "FK" monogram built from geometric letterforms — a blue F and a
 * magenta K, echoing the brand's blue + magenta palette. Replaces the old
 * three-shape mark. Scales with the className (set a height).
 */
export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 104 64"
      className={className}
      role="img"
      aria-label="Faraz Khan"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* F — blocky geometric letterform */}
      <path
        d="M6 6 H40 V18 H18 V27 H34 V39 H18 V58 H6 Z"
        fill="#075EFD"
      />
      {/* K — stem + two diagonal arms */}
      <rect x="54" y="6" width="12" height="52" fill="#F5379B" />
      <line x1="64" y1="32" x2="98" y2="7" stroke="#F5379B" strokeWidth="13" strokeLinecap="butt" />
      <line x1="64" y1="32" x2="98" y2="57" stroke="#F5379B" strokeWidth="13" strokeLinecap="butt" />
    </svg>
  );
}
