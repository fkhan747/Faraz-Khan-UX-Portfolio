import ConceptCaseStudy from "./ConceptCaseStudy";
import { recruitos } from "../data/recruitosCase";

// RecruitOS — Google-blue / Gemini-accented AI recruitment OS.
// Uses the shared concept renderer; the live prototype embeds via
// recruitos.prototypeUrl ("/recruitos/") inside section 06.
export default function RecruitosConcept() {
  return (
    <ConceptCaseStudy
      data={recruitos}
      accent="linear-gradient(120deg,#4285F4,#9168F0 55%,#E8519B)"
      wordmark={<>recruit<span className="dot-o">o</span>s</>}
    />
  );
}
