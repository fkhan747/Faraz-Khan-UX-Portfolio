import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Mail } from "lucide-react";
import { Container } from "../components/Grid";
import Seo from "../components/Seo";

// Real 404 so a mistyped or stale link says so, instead of silently rendering
// the homepage under the wrong URL. Offers the two paths a lost visitor wants.
export default function NotFound() {
  return (
    <div data-testid="not-found-page">
      <Seo description="Page not found." />
      <section className="pt-[52px] pb-24 md:pb-32">
        <Container>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">404 · page not found</p>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.02] mb-6">
            This page took a <span className="italic font-light">wrong turn</span>.
          </h1>
          <p className="max-w-xl text-base md:text-lg text-[#A29CB4] leading-relaxed mb-9">
            The link is broken or the page has moved. Nothing lost. Here are the two places worth heading next.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#075EFD] text-white text-base font-semibold shadow-[0_10px_36px_-8px_rgba(7,94,253,0.7)] hover:bg-[#2E78FF] transition-colors"
            >
              <Briefcase size={18} /> View my work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white text-white text-base font-semibold hover:bg-white hover:text-[#100210] transition-colors"
            >
              <Mail size={16} /> Get in touch
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-[#A29CB4] hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back home
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
