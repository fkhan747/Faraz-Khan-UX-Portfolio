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
  `nav-comic ${isActive ? "nav-comic-current" : ""} inline-flex items-center px-3.5 md:px-4 py-2 text-[13px] md:text-sm font-semibold whitespace-nowrap`;

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
          <div className="nav-shell pointer-events-auto flex items-center justify-between gap-3 rounded-2xl pl-4 md:pl-5 pr-3 md:pr-7 py-2.5">
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
              <div className="hidden sm:flex items-center gap-2 md:gap-2.5">
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
              className="btn-comic btn-comic-yellow hidden sm:inline-flex ml-2 items-center px-4 md:px-5 py-2.5 text-[13px] md:text-sm font-semibold capitalize whitespace-nowrap flex-shrink-0"
            >
              Book a call →
            </BookCallButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              data-testid="nav-menu-toggle"
              className="sm:hidden flex-shrink-0 h-10 w-10 grid place-items-center rounded-full border border-[#7B2FBE]/30 text-[#100210] hover:bg-[#1A1326]/10 transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile sheet */}
          {open && (
            <div
              className="nav-shell sm:hidden pointer-events-auto mt-2 rounded-3xl p-2"
              data-testid="nav-mobile-sheet"
            >
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `nav-comic ${isActive ? "nav-comic-current" : ""} flex w-full items-center px-4 py-3 mb-2 text-sm font-semibold`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <BookCallButton
                className="btn-comic btn-comic-yellow w-full mt-1 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold capitalize"
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
