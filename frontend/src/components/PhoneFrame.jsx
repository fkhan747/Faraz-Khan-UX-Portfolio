/**
 * Lightweight Android-style phone mockup: a thin dark bezel with a rounded
 * screen, wrapping a mobile screenshot. The screenshot keeps its natural
 * aspect (w-full h-auto). Pair with <Zoomable> for the full-screen viewer.
 */
export default function PhoneFrame({ src, alt = "", className = "" }) {
  return (
    <div
      className={`mx-auto bg-[#0d0d11] rounded-[1.6rem] p-[6px] shadow-[0_16px_38px_rgba(8,4,16,0.45)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.25rem] bg-white">
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      </div>
    </div>
  );
}
