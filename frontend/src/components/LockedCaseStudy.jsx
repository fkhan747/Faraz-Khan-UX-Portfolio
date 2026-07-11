import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import { Container } from "./Grid";
import Seo from "./Seo";
import DirectContactStrip from "./DirectContactStrip";
import { NEON_CSS as AB_CSS, Squiggle as AbSquiggle } from "./neonStyle";
import { unlockCase } from "../lib/vault";

/**
 * The confidential screen shown in place of a locked case study. Wears the
 * site's comic/neon language. Lets a visitor with the password unlock in place,
 * or request access (which routes to the contact page) and reach out directly.
 */
export default function LockedCaseStudy({ slug, onUnlock }) {
  const proj = projects.find((p) => p.slug === slug) || {};
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setErr(false);
    // The only unlock check is whether AES-GCM decryption of the case data
    // succeeds — there is no password (or hash) anywhere in the app.
    const data = await unlockCase(slug, pw);
    setBusy(false);
    if (data) onUnlock(data);
    else {
      setErr(true);
      setPw("");
    }
  }

  return (
    <div data-testid={`locked-${slug}`}>
      <style>{AB_CSS}</style>
      <Seo title={`${proj.title || "Case study"} · Confidential`} noindex />
      <section className="pt-12 pb-24 relative overflow-hidden min-h-[78vh]">
        <AbSquiggle className="ab-sq-1" color="#F0186C" rot={-32} />
        <span className="hidden md:block absolute right-[10%] top-24 z-0">
          <AbSquiggle className="ab-sq-3" color="#17C3E8" rot={-14} />
        </span>
        <Container>
          <Link
            to="/projects"
            data-testid="locked-back"
            className="inline-flex items-center gap-2 text-sm text-[#A29CB4] hover:text-[#F4F3FA] transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          <div className="relative z-10 max-w-2xl mx-auto ab-card ab-flat ab-c4 overflow-hidden p-8 md:p-11 text-center">
            <div
              className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#7B2FBE] blur-3xl opacity-30 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-[#F0186C] blur-3xl opacity-20 pointer-events-none"
              aria-hidden="true"
            />

            <span className="relative inline-grid place-items-center h-14 w-14 rounded-2xl bg-[#F0186C] text-white mb-6 shadow-[4px_4px_0_#7B2FBE]">
              <Lock size={24} />
            </span>
            <p className="relative text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-3">
              confidential client work
            </p>
            <h1 className="relative font-display text-3xl md:text-4xl font-black text-[#F7F5FF] leading-[1.05] mb-4 case-keep">
              {proj.title || "This case study"} is protected.
            </h1>
            <p className="relative text-[15px] md:text-base text-[#C9C4D6] leading-relaxed mb-8 max-w-md mx-auto">
              This is real client work under confidentiality, so it lives behind
              a password. If you already have it, enter it below. If not, request
              access and I&apos;ll walk you through the whole thing.
            </p>

            <form
              onSubmit={submit}
              className="relative flex flex-col sm:flex-row gap-3 justify-center items-stretch mb-3 max-w-md mx-auto"
            >
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Enter password"
                aria-label="Case study password"
                data-testid="locked-pw"
                className="flex-1 rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-[#F4F3FA] placeholder-white/40 focus:outline-none focus:border-[#F0186C] transition-colors"
              />
              <button
                type="submit"
                disabled={busy}
                data-testid="locked-unlock"
                className="ab-btn justify-center whitespace-nowrap disabled:opacity-60"
              >
                {busy ? "Checking…" : "Unlock"}
              </button>
            </form>
            {err && (
              <p
                className="relative text-sm text-[#F0186C] mb-1"
                data-testid="locked-error"
              >
                That&apos;s not the password. Request access below and I&apos;ll
                send it over.
              </p>
            )}

            <div className="relative mt-6">
              <Link
                to="/contact?intent=access"
                data-testid="locked-request"
                className="ab-btn ab-btn-ghost justify-center"
              >
                Request access <ArrowUpRight size={16} />
              </Link>
            </div>

            <DirectContactStrip className="relative mt-9 pt-6 border-t border-white/10" />
          </div>
        </Container>
      </section>
    </div>
  );
}
