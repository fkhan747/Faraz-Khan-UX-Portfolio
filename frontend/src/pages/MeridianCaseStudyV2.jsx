import MeridianCaseStudy from "./MeridianCaseStudy";
import { meridianV2 } from "../data/meridianV2Case";

/* Comparison build of the Meridian case study at /case/meridian-v2. Renders the
   same page with the enriched data (responsibilities, design principles,
   constraints, validation + expected outcomes). The original is untouched at
   /case/meridian. Temporary, for side-by-side review. */
export default function MeridianCaseStudyV2() {
  return <MeridianCaseStudy data={meridianV2} />;
}
