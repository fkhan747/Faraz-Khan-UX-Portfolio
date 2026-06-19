import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Home } from "lucide-react";
import { PROFILE } from "../data/content";
import BookCallButton from "./BookCallButton";

/**
 * Global site chrome (replaces the old left Sidebar):
 *   - top-left  : home button + 3-shape logo (fixed). Gets a subtle scrim once
 *                 the page is scrolled so it doesn't clash with content.
 *   - top-right : "available" live pill (fixed).
 *   - bottom    : sticky nav — Home (icon) · Projects/About/Contact group ·
 *                 Resume · Book a call. Lighter surface + coral active state so
 *                 it stays distinct on the dark page. Fades only slightly while
 *                 scrolling (respects prefers-reduced-motion).
 */
const NAV = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const navItem = ({ isActive }) =>
  `px-3.5 md:px-4 py-2 rounded-full text-[13px] md:text-sm font-semibold whitespace-nowrap transition-colors
   ${isActive ? "bg-[#075EFD] text-white" : "text-[#1A1326]/70 hover:text-[#100210] hover:bg-[#1A1326]/10"}`;

export default function Chrome() {
  const [scrolling, setScrolling] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (reduce.current) return;
      setScrolling(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setScrolling(false), 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      {/* Top scrim — fades in on scroll so the floating chrome doesn't overlap content */}
      <div
        className="fixed top-0 inset-x-0 h-24 z-30 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "linear-gradient(to bottom, #100210 22%, rgba(16,2,16,0.65) 60%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* TOP-LEFT — home + logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-40 flex items-center gap-3" data-testid="chrome-topleft">
        <NavLink
          to="/"
          end
          aria-label="home"
          data-testid="chrome-home"
          className={({ isActive }) =>
            `inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 transition-colors shadow-sm
             ${isActive ? "bg-[#075EFD] text-white border-transparent" : "bg-[#1A1326] text-[#F4F3FA] hover:bg-[#241B33]"}`
          }
        >
          <Home size={18} />
        </NavLink>
        <Link to="/" aria-label="home" data-testid="chrome-logo" className="flex items-center gap-1.5 group">
          <span className="w-3.5 h-3.5 rounded-full bg-[#075EFD] group-hover:scale-110 transition-transform" />
          <span className="w-3.5 h-3.5 rounded-sm bg-[#F5379B] group-hover:scale-110 transition-transform" />
          <span className="w-3.5 h-3.5 rotate-45 bg-[#F4F3FA] group-hover:scale-110 transition-transform" />
        </Link>
      </div>

      {/* TOP-RIGHT — live "available" pill */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40" data-testid="chrome-livepill">
        <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1326]/90 backdrop-blur border border-white/10 text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-[#F4F3FA] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5379B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5379B]" />
          </span>
          <span className="hidden sm:inline">{PROFILE.status}</span>
          <span className="sm:hidden">available</span>
        </span>
      </div>

      {/* BOTTOM — sticky nav with a distinct (lighter) surface + coral active state */}
      <nav
        data-testid="bottom-nav"
        aria-label="primary"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-300 ease-out"
        style={{ opacity: scrolling ? 0.85 : 1 }}
        onMouseEnter={() => setScrolling(false)}
      >
        <div className="flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md border border-[#075EFD]/15 p-1.5 md:p-2 shadow-[0_14px_46px_-10px_rgba(7,94,253,0.5)] max-w-[calc(100vw-1.5rem)] overflow-x-auto no-scrollbar">
          {/* Home (icon) */}
          <NavLink
            to="/"
            end
            aria-label="home"
            data-testid="nav-home"
            className={({ isActive }) =>
              `inline-flex items-center justify-center h-9 w-9 rounded-full transition-colors flex-shrink-0
               ${isActive ? "bg-[#075EFD] text-white" : "text-[#1A1326]/70 hover:text-[#100210] hover:bg-[#1A1326]/10"}`
            }
          >
            <Home size={17} />
          </NavLink>

          <span className="w-px h-5 bg-[#1A1326]/15 mx-1 flex-shrink-0" aria-hidden="true" />

          {/* Projects / About / Contact — one group */}
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} data-testid={`nav-${item.label.toLowerCase()}`} className={navItem}>
              {item.label}
            </NavLink>
          ))}

          {/* extra gap, then Resume */}
          <span className="w-5 flex-shrink-0" aria-hidden="true" />
          <NavLink to="/resume" data-testid="nav-resume" className={navItem}>
            Resume
          </NavLink>

          {/* Book a call */}
          <BookCallButton
            data-testid="sidebar-book-call"
            className="ml-1 inline-flex items-center px-3.5 md:px-4 py-2 rounded-full bg-[#F5379B] text-white text-[13px] md:text-sm font-semibold hover:bg-[#D81F7E] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Book a call →
          </BookCallButton>
        </div>
      </nav>
    </>
  );
}
