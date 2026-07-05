import { Link } from "react-router-dom";
import { PROFILE } from "../data/content";
import { Container } from "./Grid";
import Logo from "./Logo";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";

/* Footer-only neon/glitch treatment for the FK monogram, echoing the landing
   portrait: a constant magenta+cyan neon glow plus an occasional RGB-split
   glitch burst (and a quick split on hover). All fk- scoped, so the nav logo
   stays clean. Reduced-motion keeps only the soft glow. */
const FK_LOGO_CSS = `
  .fk-logo{ position:relative; display:inline-block; line-height:0; }
  .fk-logo-base{ position:relative; z-index:2; display:block;
    filter:drop-shadow(0 0 5px rgba(240,24,108,0.55)) drop-shadow(0 0 12px rgba(23,195,232,0.32)); }
  .fk-logo-layer{ position:absolute; top:0; left:0; z-index:1; opacity:0; pointer-events:none; mix-blend-mode:screen; }
  .fk-logo-layer svg{ display:block; }
  @media (hover:hover) and (pointer:fine){
    .fk-logo-base{ animation:fk-base 6.5s steps(1,end) infinite; }
    .fk-logo-mag{ animation:fk-mag 6.5s steps(1,end) infinite; }
    .fk-logo-cyan{ animation:fk-cyan 6.5s steps(1,end) infinite; }
    .fk-logo:hover .fk-logo-mag{ animation:fk-mag-hover 0.5s steps(1,end) 1; }
    .fk-logo:hover .fk-logo-cyan{ animation:fk-cyan-hover 0.5s steps(1,end) 1; }
    .fk-logo:hover .fk-logo-base{ animation:fk-base-hover 0.5s steps(1,end) 1; }
  }
  @keyframes fk-base{ 0%,86%,100%{ transform:translate(0,0); } 88%{ transform:translate(-1px,0); } 90%{ transform:translate(1px,0); } 92%{ transform:translate(-1px,0); } }
  @keyframes fk-mag{ 0%,86%,100%{ opacity:0; transform:translate(0,0); } 88%{ opacity:0.9; transform:translate(-3px,1px); } 90%{ opacity:0.5; transform:translate(2px,-1px); } 92%{ opacity:0.85; transform:translate(-2px,0); } 94%{ opacity:0; } }
  @keyframes fk-cyan{ 0%,86%,100%{ opacity:0; transform:translate(0,0); } 88%{ opacity:0.85; transform:translate(3px,-1px); } 90%{ opacity:0.5; transform:translate(-2px,1px); } 92%{ opacity:0.8; transform:translate(2px,0); } 94%{ opacity:0; } }
  @keyframes fk-base-hover{ 0%,100%{ transform:translate(0,0); } 25%{ transform:translate(-1px,0); } 60%{ transform:translate(1px,0); } }
  @keyframes fk-mag-hover{ 0%{ opacity:0; transform:translate(0,0); } 20%{ opacity:0.9; transform:translate(-3px,1px); } 55%{ opacity:0.5; transform:translate(2px,-1px); } 85%{ opacity:0.8; transform:translate(-2px,0); } 100%{ opacity:0; } }
  @keyframes fk-cyan-hover{ 0%{ opacity:0; transform:translate(0,0); } 20%{ opacity:0.85; transform:translate(3px,-1px); } 55%{ opacity:0.5; transform:translate(-2px,1px); } 85%{ opacity:0.8; transform:translate(2px,0); } 100%{ opacity:0; } }
  @media (prefers-reduced-motion: reduce){
    .fk-logo-base, .fk-logo-mag, .fk-logo-cyan{ animation:none !important; transform:none !important; }
    .fk-logo-layer{ opacity:0 !important; }
  }
`;

/**
 * Shared site footer, rendered on every page via Layout. Carries internal nav
 * links (good for crawl + UX), identity, and the LinkedIn / Email / Résumé
 * actions. Year is dynamic.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10" data-testid="site-footer">
      <style>{FK_LOGO_CSS}</style>
      <Container className="py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Identity + internal nav */}
          <div className="flex items-start gap-4 md:gap-5">
            <Link to="/" aria-label="Faraz Khan, home" className="flex-shrink-0">
              <span className="fk-logo">
                <span className="fk-logo-layer fk-logo-mag" aria-hidden="true"><Logo className="h-24 w-auto" fill="#F0186C" /></span>
                <span className="fk-logo-layer fk-logo-cyan" aria-hidden="true"><Logo className="h-24 w-auto" fill="#17C3E8" /></span>
                <Logo className="fk-logo-base h-24 w-auto" variant="neon" />
              </span>
            </Link>
            <div>
              <Link to="/" className="font-display text-2xl font-black case-keep">Faraz Khan</Link>
              <p className="mt-2 text-sm text-[#A29CB4]">Senior UX Lead · {PROFILE.city}</p>
              <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <Link to="/projects" className="text-[#A29CB4] hover:text-[#F4F3FA] transition-colors">My Work</Link>
                <Link to="/about" className="text-[#A29CB4] hover:text-[#F4F3FA] transition-colors">This Is Me</Link>
                <Link to="/contact" className="text-[#A29CB4] hover:text-[#F4F3FA] transition-colors">Get in Touch</Link>
              </nav>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-comic-ghost btn-comic-cyan inline-flex items-center px-5 py-2.5 text-sm font-semibold">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="btn-comic-ghost btn-comic-magenta inline-flex items-center px-5 py-2.5 text-sm font-semibold">Email</a>
            <a href={RESUME_PATH} download="Faraz_Khan_Resume.pdf" className="btn-comic btn-comic-yellow inline-flex items-center px-5 py-2.5 text-sm font-semibold">Résumé</a>
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
