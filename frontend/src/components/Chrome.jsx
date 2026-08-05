import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { Container } from "./Grid";
import BookCallButton from "./BookCallButton";
import Logo from "./Logo";

/* Same file the About, Contact and Footer buttons serve. */
const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";

/**
 * Global top header (sticky). White "inverse" bar aligned to the body-content
 * width (via <Container>), sat slightly down from the top with a blue glow on
 * all sides. On desktop: logo + nav links left, Book-a-call CTA right. Below the
 * `sm` breakpoint the links + CTA collapse into a hamburger sheet so nothing
 * clips or overflows on a phone.
 */
const NAV = [
  { to: "/projects", label: "Work" },
  { to: "/ai-lab", label: "AI Lab" },
  { to: "/about", label: "About Me" },
  { to: "/contact", label: "Contact" },
];

/* Borderless. The only bordered/filled control in the chrome is Book a Call,
   so the eye has one target rather than five competing ones. */
const navItem = ({ isActive }) =>
  `nav-plain ${isActive ? "nav-plain-current" : ""} inline-flex items-center px-3 md:px-3.5 py-2 ` +
  `text-[13px] md:text-sm font-semibold whitespace-nowrap text-white/70 hover:text-white transition-colors`;

export default function Chrome() {
  // The scrim behind the chrome has to follow the page, not the other way
  // round: a dark band across the top of a paper page reads as a mistake.
  const isLanding = useLocation().pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Full-width scrim so content scrolls cleanly under the floating bar */}
      <div
        className="fixed top-0 inset-x-0 h-[164px] z-40 pointer-events-none"
        style={{ background: isLanding
          ? "linear-gradient(to bottom, #100210 76%, rgba(16,2,16,0))"
          : "linear-gradient(to bottom, #EFEDE7 76%, rgba(239,237,231,0))" }}
        aria-hidden="true"
      />

      {/* Sticky top bar, aligned to body-content width, nudged down from the top */}
      <header className="fixed top-0 inset-x-0 z-50 pt-7 pointer-events-none" data-testid="global-header">
        <Container>
          <div className="nav-shell pointer-events-auto flex items-center justify-between gap-3 rounded-2xl px-0 py-2.5">
            {/* Left: logo + nav links (links hidden on phones) */}
            <div className="flex items-center gap-0.5 md:gap-1 min-w-0">
              <Link
                to="/"
                aria-label="Faraz Khan, home"
                data-testid="chrome-logo"
                className="flex items-center flex-shrink-0 mr-3 md:mr-5"
                onClick={() => setOpen(false)}
              >
                <Logo className="h-12 w-auto text-white [&_*]:fill-current" />
              </Link>
              <div className="hidden sm:flex items-center gap-2 md:gap-2.5">
                {NAV.map((item) => (
                  <NavLink key={item.to} to={item.to} data-testid={`nav-${item.label.toLowerCase()}`} className={navItem}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right: desktop CTAs, or hamburger on phones. The resume link is
                the ghost variant so Book a Call stays the one filled control in
                the chrome; two saturated buttons side by side would split the
                target. .btn-comic-ghost already carries both grounds, dark bar
                on the landing and light bar everywhere else. */}
            <div className="hidden sm:flex items-center gap-2 md:gap-2.5 flex-shrink-0">
              <a
                href={RESUME_PATH}
                download="Faraz_Khan_Resume.pdf"
                data-testid="nav-download-resume"
                className="btn-comic btn-comic-ghost inline-flex items-center gap-2 px-4 md:px-5 py-2.5 text-[13px] md:text-sm font-semibold normal-case whitespace-nowrap"
              >
                <Download size={15} aria-hidden="true" />
                {/* Short label until there is room for the long one. The nav
                    links are nowrap inside a min-w-0 flex child, so when the
                    bar runs out of width they overflow their own box and slide
                    under this button rather than making anything shrink. */}
                <span className="lg:hidden">Resume</span>
                <span className="hidden lg:inline">Download Resume</span>
              </a>
              <BookCallButton
                data-testid="sidebar-book-call"
                className="btn-comic btn-cta inline-flex items-center px-4 md:px-5 py-2.5 text-[13px] md:text-sm font-semibold normal-case whitespace-nowrap"
              >
                Book a Call →
              </BookCallButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              data-testid="nav-menu-toggle"
              className="sm:hidden flex-shrink-0 h-10 w-10 grid place-items-center rounded-full text-white hover:bg-white/10 transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Separator. Full-bleed rather than container-width: it is dividing
              the chrome from the page, and a rule that stops short of the edge
              reads as a decoration on the nav instead. */}
          <div className="nav-rule pointer-events-none" aria-hidden="true" />

          {/* Mobile sheet */}
          {open && (
            <div
              className="nav-sheet sm:hidden pointer-events-auto mt-2 rounded-3xl p-2"
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
              <a
                href={RESUME_PATH}
                download="Faraz_Khan_Resume.pdf"
                data-testid="nav-mobile-download-resume"
                onClick={() => setOpen(false)}
                className="btn-comic btn-comic-ghost w-full mt-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold normal-case"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
              <BookCallButton
                className="btn-comic btn-comic-yellow w-full mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold normal-case"
              >
                Book a Call →
              </BookCallButton>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
