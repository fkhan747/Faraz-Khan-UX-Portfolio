import { Mail, Phone, Linkedin } from "lucide-react";
import { PROFILE } from "../data/content";

const telHref = "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");

/**
 * Compact "or reach me directly" row: email, phone, LinkedIn. Used on the gated
 * case-study screen and the request-access contact view so both match.
 */
export default function DirectContactStrip({ className = "" }) {
  return (
    <div className={className}>
      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/45 mb-4 text-center">
        or reach me directly
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-2 text-[#C9C4D6] hover:text-[#F0186C] transition-colors"
        >
          <Mail size={15} /> {PROFILE.email}
        </a>
        <a
          href={telHref}
          className="inline-flex items-center gap-2 text-[#C9C4D6] hover:text-[#17C3E8] transition-colors"
        >
          <Phone size={15} /> {PROFILE.phone}
        </a>
        <a
          href={PROFILE.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#C9C4D6] hover:text-[#9B4DE0] transition-colors"
        >
          <Linkedin size={15} /> LinkedIn
        </a>
      </div>
    </div>
  );
}
