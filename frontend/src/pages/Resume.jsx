import { Download, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PROFILE } from "../data/content";
import { Container } from "../components/Grid";
import CopyButton from "../components/CopyButton";

const RESUME_PATH = "/files/Faraz_Khan_Resume.pdf";

export default function Resume() {
  return (
    <div data-testid="resume-page" className="pb-16">
      {/* Page header */}
      <section className="pt-10 pb-8">
        <Container>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E94B1F] mb-5">my resume · pdf</p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter lowercase leading-[0.95]">
            résum<span className="dot-o">é</span>.
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={RESUME_PATH}
              download="Faraz_Khan_Resume.pdf"
              data-testid="resume-download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-[#FFD93D] font-semibold text-sm hover:bg-[#1a1a1a] transition-colors"
            >
              <Download size={16} /> download pdf
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="resume-open-new-tab"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 text-[#0A0A0A] font-semibold text-sm hover:bg-[#F7F1DA] transition-colors"
            >
              <ExternalLink size={16} /> open in new tab
            </a>
            <Link
              to="/"
              data-testid="resume-back-home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 text-[#0A0A0A] font-semibold text-sm hover:bg-[#F7F1DA] transition-colors"
            >
              <ArrowLeft size={16} /> back home
            </Link>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-[#1a1a1a]">
          <strong>{PROFILE.role}</strong> · 12+ years across BFSI, enterprise software, and consumer tech. Last updated for Q1 2026 opportunities.
        </p>
        </Container>
      </section>

      {/* PDF viewer */}
      <section data-testid="resume-viewer-wrap">
        <Container>
        <div className="rounded-3xl bg-[#F7F1DA] p-3 md:p-5">
          <object
            data={`${RESUME_PATH}#zoom=page-width`}
            type="application/pdf"
            className="w-full h-[80vh] rounded-2xl bg-white"
            data-testid="resume-viewer"
            aria-label="Faraz Khan resume PDF"
          >
            <div className="w-full h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-8">
              <p className="font-display text-2xl font-black">your browser can&apos;t embed PDFs.</p>
              <p className="text-sm text-[#5A5A5A] max-w-md">No worries — tap below to download or open the resume in a new tab.</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href={RESUME_PATH}
                  download="Faraz_Khan_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-[#FFD93D] font-semibold text-sm"
                >
                  <Download size={16} /> download pdf
                </a>
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 font-semibold text-sm"
                >
                  <ExternalLink size={16} /> open in new tab
                </a>
              </div>
            </div>
          </object>
        </div>
        </Container>
      </section>

      {/* Footer note */}
      <section className="mt-10 text-center">
        <Container>
        <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5A5A5A]">
          questions? email <a href={`mailto:${PROFILE.email}`} className="underline decoration-[#E94B1F] underline-offset-4 normal-case">{PROFILE.email}</a>
          <CopyButton value={PROFILE.email} label="email" size={14} className="h-7 w-7 border border-black/15 text-[#5A5A5A] hover:bg-[#F7F1DA]" />
        </p>
        </Container>
      </section>
    </div>
  );
}
