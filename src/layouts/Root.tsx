import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Root() {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      className="min-h-screen w-full flex flex-col overflow-x-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <Navigation />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
