import ConceptCaseStudy from "./ConceptCaseStudy";
import { decisionos } from "../data/decisionosCase";

// DecisionOS - magenta-accented AI decision-intelligence OS. Shared renderer.
export default function DecisionosConcept() {
  return (
    <ConceptCaseStudy
      data={decisionos}
      accent="linear-gradient(120deg,#E8519B,#C45BCB 55%,#8A6BF0)"
      wordmark={<>crux</>}
    />
  );
}
