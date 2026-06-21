import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll to the top on every route change, so navigating from one page
 * to another always lands at the top (not the previous scroll position).
 * Rendered once, inside <BrowserRouter> in App.js.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
