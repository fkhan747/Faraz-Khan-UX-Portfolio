import ConceptCaseStudy from "./ConceptCaseStudy";
import { crux } from "../data/cruxCase";

// Crux - magenta-accented AI-agent supervision console concept. Shared renderer.
export default function CruxConcept() {
  return (
    <ConceptCaseStudy
      data={crux}
      accent="linear-gradient(120deg,#E8519B,#C45BCB 55%,#8A6BF0)"
      wordmark={<>Crux</>}
    />
  );
}
