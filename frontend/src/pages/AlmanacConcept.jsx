import ConceptCaseStudy from "./ConceptCaseStudy";
import { almanac } from "../data/almanacCase";

// Almanac - teal-accented enterprise AI knowledge concept. Shared renderer.
export default function AlmanacConcept() {
  return (
    <ConceptCaseStudy
      data={almanac}
      accent="linear-gradient(120deg,#0E9CA6,#2BB6B0 55%,#6FD7C6)"
      barAccent="#0A6F77"
      wordmark={<>Almanac</>}
    />
  );
}
