import Chrome from "./Chrome";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

/**
 * App shell. Navigation lives in the global <Chrome /> (top bar). A shared
 * <Footer /> renders on every page, and <BackToTop /> floats in after scroll.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#100210] flex flex-col">
      <Chrome />
      <main className="pt-[90px] flex-1" data-testid="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
