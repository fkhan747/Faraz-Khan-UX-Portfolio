import { NavLink, Link } from "react-router-dom";
import { Container } from "./Grid";
import BookCallButton from "./BookCallButton";
import Logo from "./Logo";

/**
 * Global top header (sticky). White "inverse" bar aligned to the body-content
 * width (via <Container>), sat slightly down from the top with a blue glow on
 * all sides. Logo + nav links sit on the left; the Book-a-call CTA on the right.
 * Page content scrolls underneath (a full-width page-bg scrim masks the top).
 */
const NAV = [
  { to: "/about", label: "This is Me" },
  { to: "/projects", label: "My Work" },
  { to: "/contact", label: "Get in Touch" },
];

const navItem = ({ isActive }) =>
  `px-3 md:px-4 py-2.5 rounded-full text-[13px] md:text-sm font-semibold whitespace-nowrap transition-colors
   ${isActive ? "bg-[#075EFD] text-white" : "text-[#1A1326]/70 hover:text-[#100210] hover:bg-[#1A1326]/10"}`;

export default function Chrome() {
  return (
    <>
      {/* Full-width scrim so content scrolls cleanly under the floating bar */}
      <div
        className="fixed top-0 inset-x-0 h-[120px] z-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #100210 66%, rgba(16,2,16,0))" }}
        aria-hidden="true"
      />

      {/* Sticky top bar, aligned to body-content width, nudged down from the top */}
      <header className="fixed top-0 inset-x-0 z-50 pt-7 pointer-events-none" data-testid="global-header">
        <Container>
          <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-full bg-white/95 backdrop-blur-md border border-[#075EFD]/15 pl-4 md:pl-5 pr-5 md:pr-7 py-2.5 shadow-[0_0_44px_-4px_rgba(7,94,253,0.5)]">
            {/* Left: logo + nav links */}
            <div className="flex items-center gap-0.5 md:gap-1 min-w-0 overflow-x-auto no-scrollbar">
              <Link
                to="/"
                aria-label="Faraz Khan, home"
                data-testid="chrome-logo"
                className="flex items-center flex-shrink-0 ml-1 md:ml-2 mr-2 md:mr-4"
              >
                <Logo className="h-12 w-auto" />
              </Link>
              {NAV.map((item) => (
                <NavLink key={item.to} to={item.to} data-testid={`nav-${item.label.toLowerCase()}`} className={navItem}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right: CTA */}
            <BookCallButton
              data-testid="sidebar-book-call"
              className="ml-2 inline-flex items-center px-3.5 md:px-4 py-2.5 rounded-full bg-transparent border border-[#C71E73] text-[#C71E73] text-[13px] md:text-sm font-semibold capitalize hover:bg-[#C71E73] hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
            >
              Book a call →
            </BookCallButton>
          </div>
        </Container>
      </header>
    </>
  );
}
