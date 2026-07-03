import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "./Grid";
import BookCallButton from "./BookCallButton";
import Logo from "./Logo";

/**
 * Global top header (sticky). White "inverse" bar aligned to the body-content
 * width (via <Container>), sat slightly down from the top with a blue glow on
 * all sides. On desktop: logo + nav links left, Book-a-call CTA right. Below the
 * `sm` breakpoint the links + CTA collapse into a hamburger sheet so nothing
 * clips or overflows on a phone.
 */
const NAV = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const navItem = ({ isActive }) =>
  `px-3 md:px-4 py-2.5 rounded-full text-[13px] md:text-sm font-semibold whitespace-nowrap transition-colors
   ${isActive ? "bg-[#075EFD] text-white" : "text-[#1A1326]/70 hover:text-[#100210] hover:bg-[#1A1326]/10"}`;

export default function Chrome() {
  const [open, setOpen] = useState(false);

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
          <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-full bg-white/95 backdrop-blur-md border border-[#075EFD]/15 pl-4 md:pl-5 pr-3 md:pr-7 py-2.5 shadow-[0_0_44px_-4px_rgba(7,94,253,0.5)]">
            {/* Left: logo + nav links (links hidden on phones) */}
            <div className="flex items-center gap-0.5 md:gap-1 min-w-0">
              <Link
                to="/"
                aria-label="Faraz Khan, home"
                data-testid="chrome-logo"
                className="flex items-center flex-shrink-0 ml-1 md:ml-2 mr-2 md:mr-4"
                onClick={() => setOpen(false)}
              >
                <Logo className="h-12 w-auto" />
              </Link>
              <div className="hidden sm:flex items-center gap-0.5 md:gap-1">
                {NAV.map((item) => (
                  <NavLink key={item.to} to={item.to} data-testid={`nav-${item.label.toLowerCase()}`} className={navItem}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right: desktop CTA, or hamburger on phones */}
            <BookCallButton
              data-testid="sidebar-book-call"
              className="hidden sm:inline-flex ml-2 items-center px-3.5 md:px-4 py-2.5 rounded-full bg-transparent border border-[#C71E73] text-[#C71E73] text-[13px] md:text-sm font-semibold capitalize hover:bg-[#C71E73] hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
            >
              Book a call →
            </BookCallButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              data-testid="nav-menu-toggle"
              className="sm:hidden flex-shrink-0 h-10 w-10 grid place-items-center rounded-full border border-[#075EFD]/25 text-[#100210] hover:bg-[#1A1326]/10 transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile sheet */}
          {open && (
            <div
              className="sm:hidden pointer-events-auto mt-2 rounded-3xl bg-white/97 backdrop-blur-md border border-[#075EFD]/15 shadow-[0_0_44px_-4px_rgba(7,94,253,0.5)] p-2"
              data-testid="nav-mobile-sheet"
            >
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                      isActive ? "bg-[#075EFD] text-white" : "text-[#1A1326]/80 hover:bg-[#1A1326]/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <BookCallButton
                className="w-full mt-1 inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-[#C71E73] text-white text-sm font-semibold capitalize"
              >
                Book a call →
              </BookCallButton>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
