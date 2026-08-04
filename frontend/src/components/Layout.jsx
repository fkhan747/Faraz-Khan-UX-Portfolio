import Chrome from "./Chrome";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

/**
 * App shell. Navigation lives in the global <Chrome /> (top bar). A shared
 * <Footer /> renders on every page, and <BackToTop /> floats in after scroll.
 */
export default function Layout({ children }) {
  const isLanding = useLocation().pathname === "/";
  return (
    /* Landing keeps the dark cover; every other page is on paper. One class
       here drives it, so there is a single switch rather than a theme prop
       threaded through every page. */
    <div className={`min-h-screen flex flex-col ${isLanding ? "bg-[#100210]" : "theme-light bg-[#EFEDE7]"}`}>
      <Chrome />
      <main className="pt-[153px] flex-1" data-testid="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
