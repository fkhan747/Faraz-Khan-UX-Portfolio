import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
// Services page hidden for now — keep the import + route commented so it can be
// restored later without rebuilding the page. To unhide: uncomment both lines
// and the nav item in components/Sidebar.jsx.
// import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import CaseStudy from "./pages/CaseStudy";
import FinvistaCaseStudy from "./pages/FinvistaCaseStudy";
import AuroraCaseStudy from "./pages/AuroraCaseStudy";
import RecruitosConcept from "./pages/RecruitosConcept";
import KnowledgeosConcept from "./pages/KnowledgeosConcept";
import DecisionosConcept from "./pages/DecisionosConcept";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/case/finvista" element={<FinvistaCaseStudy />} />
            <Route path="/case/aurora" element={<AuroraCaseStudy />} />
            <Route path="/case/recruitos" element={<RecruitosConcept />} />
            <Route path="/case/knowledgeos" element={<KnowledgeosConcept />} />
            <Route path="/case/decisionos" element={<DecisionosConcept />} />
            <Route path="/case/:slug" element={<CaseStudy />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
