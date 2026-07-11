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
// Resume page merged into About ("This is Me"). /resume redirects to /about below.
// Resume.jsx is kept on disk (unused) in case the standalone CV page is ever restored.
import CaseStudy from "./pages/CaseStudy";
import FinvistaCaseStudy from "./pages/FinvistaCaseStudy";
import AuroraCaseStudy from "./pages/AuroraCaseStudy";
import JoatCaseStudy from "./pages/JoatCaseStudy";
import MeridianCaseStudy from "./pages/MeridianCaseStudy";
import SlateConcept from "./pages/SlateConcept";
import AlmanacConcept from "./pages/AlmanacConcept";
import CruxConcept from "./pages/CruxConcept";
import AgenticWorkflow from "./pages/AgenticWorkflow";
import NotFound from "./pages/NotFound";
import CaseStudyGate from "./components/CaseStudyGate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <LightboxProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Navigate to="/about" replace />} />
            <Route path="/case/finvista" element={<CaseStudyGate key="finvista" slug="finvista"><FinvistaCaseStudy /></CaseStudyGate>} />
            <Route path="/case/aurora" element={<CaseStudyGate key="aurora" slug="aurora"><AuroraCaseStudy /></CaseStudyGate>} />
            <Route path="/case/joat" element={<CaseStudyGate key="joat" slug="joat"><JoatCaseStudy /></CaseStudyGate>} />
            <Route path="/case/meridian" element={<MeridianCaseStudy />} />
            <Route path="/case/slate" element={<SlateConcept />} />
            <Route path="/case/almanac" element={<AlmanacConcept />} />
            <Route path="/case/crux" element={<CruxConcept />} />
            {/* Legacy slugs (old shared links, deck, search caches) → real names */}
            <Route path="/case/recruitos" element={<Navigate to="/case/slate" replace />} />
            <Route path="/case/knowledgeos" element={<Navigate to="/case/almanac" replace />} />
            <Route path="/case/decisionos" element={<Navigate to="/case/crux" replace />} />
            <Route path="/case/somethings-cooking" element={<Navigate to="/case/joat" replace />} />
            <Route path="/agentic-workflow" element={<AgenticWorkflow />} />
            <Route path="/case/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        </LightboxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
