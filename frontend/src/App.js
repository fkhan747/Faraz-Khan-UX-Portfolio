import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { LightboxProvider } from "./components/Lightbox";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// Resume page merged into About ("About Me"). /resume redirects to /about below.
import CaseStudy from "./pages/CaseStudy";
import AuroraCaseStudy from "./pages/AuroraCaseStudy";
import ThreadfoldCaseStudy from "./pages/ThreadfoldCaseStudy";
import SlateConcept from "./pages/SlateConcept";
import AlmanacConcept from "./pages/AlmanacConcept";
import CruxConcept from "./pages/CruxConcept";
import AgenticWorkflow from "./pages/AgenticWorkflow";
import NotFound from "./pages/NotFound";
import CaseStudyGate from "./components/CaseStudyGate";
// The two case studies that run the slide-band treatment. They live under
// pilots/ for historical reasons; the directory name is the last trace of the
// redesign trial and the pages in it are production.
import CaseMeridianDeck from "./pages/pilots/CaseMeridianDeck";
import CaseFinvistaLong from "./pages/pilots/CaseFinvistaLong";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <LightboxProvider>
        <Routes>
          {/* ── CASE STUDIES ───────────────────────────────────────────
              These own the real /case/ URLs and sit outside <Layout>, because
              the light treatment was signed off without the dark site chrome;
              wrapping them in the nav and footer would fight the design. The
              vault gate still wraps the confidential ones, so reactivating the
              password is one flag.

              Two page treatments, both light. Meridian and FinVista run the
              slide-band system; Aurora and Threadfold run their own section
              pages. The dark versions of all of these were deleted on
              2026-08-04, git history has them. */}
          <Route path="/case/meridian" element={<CaseMeridianDeck />} />
          <Route path="/case/finvista" element={<CaseStudyGate key="finvista" slug="finvista"><CaseFinvistaLong /></CaseStudyGate>} />
          <Route path="/case/aurora" element={<CaseStudyGate key="aurora" slug="aurora"><AuroraCaseStudy /></CaseStudyGate>} />
          <Route path="/case/threadfold" element={<CaseStudyGate key="threadfold" slug="threadfold"><ThreadfoldCaseStudy /></CaseStudyGate>} />
          {/* Concepts sit outside <Layout> for the same reason. Almanac is
              dormant (live:false in content.js) and unlinked, kept reachable. */}
          <Route path="/case/slate" element={<SlateConcept />} />
          <Route path="/case/almanac" element={<AlmanacConcept />} />
          <Route path="/case/crux" element={<CruxConcept />} />
          {/* URLs that were shared before the cleanup. */}
          <Route path="/case/finvista-long" element={<Navigate to="/case/finvista" replace />} />
          <Route path="/case/finvista-deck" element={<Navigate to="/case/finvista" replace />} />
          <Route path="/case/finvista-v1" element={<Navigate to="/case/finvista" replace />} />
          <Route path="/case/aurora-v1" element={<Navigate to="/case/aurora" replace />} />
          <Route path="/case/threadfold-v1" element={<Navigate to="/case/threadfold" replace />} />
          <Route path="/case/meridian-v1" element={<Navigate to="/case/meridian" replace />} />
          <Route path="/case/meridian-narrated" element={<Navigate to="/case/meridian" replace />} />
          <Route path="/pilot/case/meridian" element={<Navigate to="/case/meridian" replace />} />
          <Route path="/pilot/case/finvista" element={<Navigate to="/case/finvista" replace />} />
          <Route path="/pilot/case/meridian-v1" element={<Navigate to="/case/meridian" replace />} />
          <Route path="/pilot" element={<Navigate to="/projects" replace />} />
          <Route path="/pilot/metalab" element={<Navigate to="/projects" replace />} />
          {/* Everything else keeps the normal shell. */}
          <Route path="*" element={<Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Navigate to="/about" replace />} />
            {/* /case/aurora and /case/threadfold are served by the deck pages above,
                outside Layout. */}
            {/* Concepts are served outside Layout too, alongside the deck
                pages. See the block above. */}
            {/* Legacy slugs (old shared links, deck, search caches) → real names */}
            <Route path="/case/recruitos" element={<Navigate to="/case/slate" replace />} />
            <Route path="/case/knowledgeos" element={<Navigate to="/case/almanac" replace />} />
            <Route path="/case/decisionos" element={<Navigate to="/case/crux" replace />} />
            <Route path="/case/somethings-cooking" element={<Navigate to="/case/threadfold" replace />} />
            {/* Anonymised 2026-08-03. The old slug abbreviated the real company
                name, so it redirects rather than being served. */}
            <Route path="/case/joat" element={<Navigate to="/case/threadfold" replace />} />
            <Route path="/case/joat-v1" element={<Navigate to="/case/threadfold" replace />} />
            <Route path="/agentic-workflow" element={<AgenticWorkflow />} />
            <Route path="/case/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>} />
        </Routes>
        </LightboxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
