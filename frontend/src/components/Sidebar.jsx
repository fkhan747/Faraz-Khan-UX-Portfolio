import { NavLink, Link, useLocation } from "react-router-dom";
import { Home, Linkedin, Mail, Menu, X, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { PROFILE } from "../data/content";
import BookCallButton from "./BookCallButton";

const NAV = [
  { to: "/projects", label: "projects", shortcut: "01" },
  { to: "/about", label: "about", shortcut: "02" },
  // Services hidden for now - restore this item (and the route in App.js) to unhide.
  // { to: "/services", label: "services", shortcut: "03" },
  { to: "/contact", label: "contact", shortcut: "03" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#E94B1F] text-white flex items-center justify-between px-5 py-3" data-testid="mobile-topbar">
        <div className="flex items-center gap-3">
          <Link to="/" data-testid="mobile-home" aria-label="home" className="w-8 h-8 rounded-full bg-[#FFD93D] text-[#0A0A0A] flex items-center justify-center"><Home size={14} /></Link>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-black" data-testid="mobile-logo">
            <span className="w-3 h-3 rounded-full bg-[#FFD93D]" />
            <span className="w-3 h-3 rounded-sm bg-white" />
            <span className="w-3 h-3 rotate-45 bg-black" />
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" className="p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <aside
        data-testid="sidebar"
        className={`fixed top-0 left-0 h-screen w-[280px] bg-[#E94B1F] text-[#0A0A0A] z-50 flex flex-col p-7 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header: home button + logo */}
        <div className="flex items-center justify-between mb-8" data-testid="sidebar-header">
          <NavLink
            to="/"
            end
            data-testid="sidebar-home"
            aria-label="home"
            className={({ isActive }) =>
              `inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors
               ${isActive ? "bg-[#0A0A0A] text-[#FFD93D]" : "bg-[#FFD93D] text-[#0A0A0A] hover:bg-white"}`
            }
          >
            <Home size={18} />
          </NavLink>
          <Link to="/" className="flex items-center gap-2 group" data-testid="sidebar-logo">
            <span className="w-4 h-4 rounded-full bg-[#FFD93D] group-hover:scale-110 transition-transform" />
            <span className="w-4 h-4 rounded-sm bg-white group-hover:scale-110 transition-transform" />
            <span className="w-4 h-4 rotate-45 bg-black group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Mini intro card */}
        <div className="bg-[#F7F1DA] rounded-2xl p-5 mb-6" data-testid="sidebar-mini-card">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5A5A5A] mb-3">{PROFILE.role}</p>
          <p className="font-display text-3xl md:text-4xl font-black leading-[0.95]">
            Faraz<br />Khan
          </p>
          <div className="flex items-center gap-2 mt-4 text-[10px] font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>{PROFILE.status}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-3 no-scrollbar overflow-y-auto" data-testid="sidebar-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-${item.label}`}
              className={({ isActive }) =>
                `flex items-center justify-between px-5 py-3.5 rounded-full font-semibold text-sm transition-all
                 ${isActive
                    ? "bg-[#0A0A0A] text-[#FFD93D]"
                    : "bg-[#FFD93D] text-[#0A0A0A] hover:translate-x-1"}`
              }
            >
              <span className="capitalize tracking-wide">{item.label}</span>
              <span className="text-[10px] font-mono opacity-70 bg-black/10 px-2 py-0.5 rounded-full">
                {item.shortcut}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA stack: View Resume + Book a call */}
        <div className="mt-6 space-y-3" data-testid="sidebar-cta">
          <p className="text-xs leading-relaxed text-white/95">
            reserve a time to speak directly with me
          </p>
          <Link
            to="/resume"
            data-testid="sidebar-view-resume"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-[#FFD93D] transition-colors"
          >
            <FileText size={14} /> view resume
          </Link>
          <BookCallButton
            data-testid="sidebar-book-call"
            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#0A0A0A] text-white font-semibold text-sm hover:bg-[#1a1a1a] transition-colors"
          >
            book a 30-min call →
          </BookCallButton>
        </div>

        {/* Footer row */}
        <div className="mt-6 pt-5 border-t border-black/20 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider">
          <span className="opacity-80">©2025 faraz khan</span>
          <div className="flex items-center gap-2.5">
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="linkedin" data-testid="social-linkedin" className="hover:scale-125 transition-transform"><Linkedin size={14} /></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="email" data-testid="social-email" className="hover:scale-125 transition-transform"><Mail size={14} /></a>
          </div>
        </div>
      </aside>
    </>
  );
}
