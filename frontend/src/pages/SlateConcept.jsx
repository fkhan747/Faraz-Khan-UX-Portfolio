import ConceptCaseStudy from "./ConceptCaseStudy";
import { slate } from "../data/slateCase";

// Slate - Google-blue / Gemini-accented AI recruitment workspace.
// Uses the shared concept renderer; the live prototype embeds via
// slate.prototypeUrl ("/slate/") inside section 06.
export default function SlateConcept() {
  return (
    <ConceptCaseStudy
      data={slate}
      accent="linear-gradient(120deg,#4285F4,#9168F0 55%,#E8519B)"
      wordmark={<>Slate</>}
    />
  );
}
