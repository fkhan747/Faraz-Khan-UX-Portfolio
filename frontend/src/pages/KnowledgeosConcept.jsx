import ConceptCaseStudy from "./ConceptCaseStudy";
import { knowledgeos } from "../data/knowledgeosCase";

// KnowledgeOS - teal-accented AI knowledge OS. Uses the shared concept renderer.
export default function KnowledgeosConcept() {
  return (
    <ConceptCaseStudy
      data={knowledgeos}
      accent="linear-gradient(120deg,#0E9CA6,#2BB6B0 55%,#6FD7C6)"
      wordmark={<>almanac</>}
    />
  );
}
