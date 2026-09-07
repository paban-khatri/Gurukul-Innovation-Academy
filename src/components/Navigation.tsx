import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home",           to: "/" },
  { label: "About",          to: "/about" },
  { label: "Programs",       to: "/programs" },
  { label: "Innovation Lab", to: "/innovation-lab" },
  { label: "Projects",       to: "/projects" },
  { label: "Partners",       to: "/partners" },
  { label: "Contact",        to: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { pathname }              = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,8,15,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,200,240,0.1)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-150"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive(to) ? "#00c8f0" : "rgba(232,237,245,0.6)",
                  background: isActive(to) ? "rgba(0,200,240,0.08)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(to)) {
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(to)) {
                    (e.currentTarget as HTMLElement).style.color = "rgba(232,237,245,0.6)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/partners"
              className="px-5 py-2 rounded-lg text-[13px] font-semibold border border-[rgba(0,200,240,0.35)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all duration-150"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(5,8,15,0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-[min(320px,85vw)] flex flex-col transition-transform duration-300"
          style={{
            background: "#0c1120",
            borderLeft: "1px solid rgba(0,200,240,0.1)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="h-16 flex items-center px-5" style={{ borderBottom: "1px solid rgba(0,200,240,0.08)" }}>
            <Logo />
          </div>
          <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="w-full text-left px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive(to) ? "#00c8f0" : "rgba(232,237,245,0.7)",
                  background: isActive(to) ? "rgba(0,200,240,0.08)" : "transparent",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="p-4" style={{ borderTop: "1px solid rgba(0,200,240,0.08)" }}>
            <Link
              to="/partners"
              className="block w-full py-3.5 rounded-xl text-[14px] font-semibold text-center bg-[#00c8f0] text-[#05080f] hover:brightness-110 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
