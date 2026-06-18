import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Sidebar from "./Sidebar";
import { Container } from "./Grid";

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === "/";

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Sidebar />
      <main className="md:ml-[280px] pt-16 md:pt-0 min-h-screen" data-testid="main-content">
        {/* Back / Home page-level bar (every page except landing) */}
        {!isLanding && (
          <div className="py-4 border-b border-black/5 bg-[#FDFBF7]/80 backdrop-blur-sm sticky top-0 md:top-0 z-30" data-testid="page-nav-bar">
            <Container className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleBack}
                data-testid="back-button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 text-xs font-semibold text-[#0A0A0A] hover:bg-[#F7F1DA] transition-colors"
              >
                <ArrowLeft size={14} /> back
              </button>
              <Link
                to="/"
                data-testid="home-button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 text-xs font-semibold text-[#0A0A0A] hover:bg-[#F7F1DA] transition-colors"
              >
                <Home size={14} /> home
              </Link>
            </Container>
          </div>
        )}

        {children}
      </main>
    </div>
  );
}
