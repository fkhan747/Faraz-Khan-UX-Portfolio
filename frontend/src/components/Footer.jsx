import { Link } from "react-router-dom";
import { PROFILE } from "../data/content";
import { Container } from "./Grid";
import Logo from "./Logo";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";

/**
 * Shared site footer, rendered on every page via Layout. Carries internal nav
 * links (good for crawl + UX), identity, and the LinkedIn / Email / Résumé
 * actions. Year is dynamic.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10" data-testid="site-footer">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Identity + internal nav */}
          <div className="flex items-start gap-4 md:gap-5">
            <Link to="/" aria-label="Faraz Khan, home" className="flex-shrink-0">
              <Logo className="h-24 w-auto" fill="#FFFFFF" />
            </Link>
            <div>
              <Link to="/" className="font-display text-2xl font-black case-keep">Faraz Khan</Link>
              <p className="mt-2 text-sm text-[#A29CB4]">Senior UX Lead · {PROFILE.city}</p>
              <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <Link to="/projects" className="text-[#A29CB4] hover:text-[#F4F3FA] transition-colors">My Work</Link>
                <Link to="/about" className="text-[#A29CB4] hover:text-[#F4F3FA] transition-colors">This is Me</Link>
                <Link to="/contact" className="text-[#A29CB4] hover:text-[#F4F3FA] transition-colors">Get in Touch</Link>
              </nav>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-[#0A66C2] text-[#6FB2F5] px-4 py-2 text-sm font-semibold hover:bg-[#0A66C2] hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center rounded-full border border-[#075EFD] text-[#5B9BFF] px-4 py-2 text-sm font-semibold hover:bg-[#075EFD] hover:text-white transition-colors">Email</a>
            <a href={RESUME_PATH} download="Faraz_Khan_Resume.pdf" className="inline-flex items-center rounded-full border border-[#F5379B] text-[#F5379B] px-4 py-2 text-sm font-semibold hover:bg-[#F5379B] hover:text-white transition-colors">Résumé</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between gap-4 flex-wrap text-xs font-mono uppercase tracking-widest text-white">
          <span>©{new Date().getFullYear()} {PROFILE.name}</span>
          <span>made with care, not with templates</span>
        </div>
      </Container>
    </footer>
  );
}
