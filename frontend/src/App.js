import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { LightboxProvider } from "./components/Lightbox";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
// Services page hidden for now - keep the import + route commented so it can be
// restored later without rebuilding the page. To unhide: uncomment both lines
// and the nav item in components/Sidebar.jsx.
// import Services from "./pages/Services";
import Contact from "./pages/Contact";
// Resume page merged into About ("About Me"). /resume redirects to /about below.
// Resume.jsx is kept on disk (unused) in case the standalone CV page is ever restored.
import CaseStudy from "./pages/CaseStudy";
import FinvistaCaseStudy from "./pages/FinvistaCaseStudy";
import AuroraCaseStudy from "./pages/AuroraCaseStudy";
import ThreadfoldCaseStudy from "./pages/ThreadfoldCaseStudy";
import MeridianCaseStudy from "./pages/MeridianCaseStudy";
import SlateConcept from "./pages/SlateConcept";
import AlmanacConcept from "./pages/AlmanacConcept";
import CruxConcept from "./pages/CruxConcept";
import AgenticWorkflow from "./pages/AgenticWorkflow";
import NotFound from "./pages/NotFound";
import CaseStudyGate from "./components/CaseStudyGate";
// Redesign pilots. Deliberately rendered OUTSIDE <Layout> so the current dark
// nav and footer do not fight the light directions being evaluated. Temporary:
// delete this import and the /pilot routes once a direction is chosen.
import PilotMetalab from "./pages/pilots/PilotMetalab";
import CaseMeridianLight from "./pages/pilots/CaseMeridianLight";
import CaseMeridianDeck from "./pages/pilots/CaseMeridianDeck";
import CaseFinvistaDeck from "./pages/pilots/CaseFinvistaDeck";
import CaseFinvistaLong from "./pages/pilots/CaseFinvistaLong";
import CaseAuroraDeck from "./pages/pilots/CaseAuroraDeck";
import CaseThreadfoldDeck from "./pages/pilots/CaseThreadfoldDeck";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <LightboxProvider>
        <Routes>
          {/* Pilots first, chrome-free. */}
          <Route path="/pilot/metalab" element={<PilotMetalab />} />
          {/* ── LIVE CASE STUDIES ──────────────────────────────────────
              The finished deck pages own the real /case/ URLs. They sit here,
              outside <Layout>, because the light treatment was signed off
              without the dark site chrome; wrapping them in the old nav and
              footer would fight the design. The vault gate still wraps the
              confidential ones, so reactivating the password is one flag. */}
          <Route path="/case/meridian" element={<CaseMeridianDeck />} />
          {/* FinVista runs the long-form treatment as of 2026-08-04. The deck
              version it replaced stays reachable at /case/finvista-deck. The
              other three are still on the deck and move over as their
              long-form content is finalised. */}
          <Route path="/case/finvista" element={<CaseStudyGate key="finvista" slug="finvista"><CaseFinvistaLong /></CaseStudyGate>} />
          <Route path="/case/finvista-deck" element={<CaseStudyGate key="finvista-deck" slug="finvista"><CaseFinvistaDeck /></CaseStudyGate>} />
          <Route path="/case/aurora" element={<CaseStudyGate key="aurora" slug="aurora"><CaseAuroraDeck /></CaseStudyGate>} />
          <Route path="/case/threadfold" element={<CaseStudyGate key="threadfold" slug="threadfold"><CaseThreadfoldDeck /></CaseStudyGate>} />
          {/* Concepts sit outside <Layout> for the same reason the deck pages
              do: they now wear the light case-study chrome, and the dark site
              nav on top of a paper ground reads as two different websites. */}
          <Route path="/case/slate" element={<SlateConcept />} />
          <Route path="/case/almanac" element={<AlmanacConcept />} />
          <Route path="/case/crux" element={<CruxConcept />} />
          {/* Superseded versions, kept reachable rather than deleted. */}
          <Route path="/case/meridian-v1" element={<MeridianCaseStudy />} />
          <Route path="/case/finvista-v1" element={<CaseStudyGate key="finvista-v1" slug="finvista"><FinvistaCaseStudy /></CaseStudyGate>} />
          <Route path="/case/aurora-v1" element={<CaseStudyGate key="aurora-v1" slug="aurora"><AuroraCaseStudy /></CaseStudyGate>} />
          <Route path="/case/threadfold-v1" element={<CaseStudyGate key="threadfold-v1" slug="threadfold"><ThreadfoldCaseStudy /></CaseStudyGate>} />
          <Route path="/case/meridian-narrated" element={<CaseMeridianLight />} />
          {/* The review URL the long-form page was signed off at, kept working
              for any link already shared. */}
          <Route path="/case/finvista-long" element={<Navigate to="/case/finvista" replace />} />
          {/* Old pilot paths keep working for any link already shared. */}
          <Route path="/pilot/case/meridian" element={<Navigate to="/case/meridian" replace />} />
          <Route path="/pilot/case/finvista" element={<Navigate to="/case/finvista" replace />} />
          <Route path="/pilot/case/meridian-v1" element={<Navigate to="/case/meridian-narrated" replace />} />
          <Route path="/pilot" element={<Navigate to="/pilot/metalab" replace />} />
          {/* Everything else keeps the normal shell. */}
          <Route path="*" element={<Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> */}
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
            <Route path="/case/joat-v1" element={<Navigate to="/case/threadfold-v1" replace />} />
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
