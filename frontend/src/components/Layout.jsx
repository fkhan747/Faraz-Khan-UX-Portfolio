import Chrome from "./Chrome";

/**
 * App shell. The old 280px left sidebar is gone — navigation now lives in the
 * global <Chrome /> (top-left home/logo, top-right live pill, sticky bottom nav).
 * <main> is full-width with top padding to clear the fixed top chrome and bottom
 * padding so page footers never hide under the sticky bottom nav.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#100210]">
      <Chrome />
      <main className="pt-20 md:pt-24 pb-28 md:pb-32 min-h-screen" data-testid="main-content">
        {children}
      </main>
    </div>
  );
}
