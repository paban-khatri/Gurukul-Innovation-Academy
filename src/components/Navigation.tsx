import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Innovation Lab", to: "/innovation-lab" },
  { label: "Projects", to: "/projects" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--bg-navbar)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-default)"
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? "page" : undefined}
                  className="px-3 py-2 rounded-lg text-[14px] font-medium transition-colors duration-150 focus-ring"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: active ? "var(--type-nav-active)" : "var(--type-nav)",
                    background: active ? "var(--accent-soft)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--type-nav-hover)";
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--pill-bg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--type-nav)";
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop controls */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeSwitcher variant="dropdown" />
            <Link
              to="/partners"
              className="px-4 py-2 rounded-lg text-[13px] font-semibold btn-secondary focus-ring whitespace-nowrap"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeSwitcher variant="dropdown" />
            <button
              type="button"
              className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg border transition-colors focus-ring cursor-pointer"
              style={{
                borderColor: "var(--border-default)",
                background: "var(--pill-bg)",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
                style={{ background: "var(--text-primary)" }}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
                style={{ background: "var(--text-primary)" }}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
                style={{ background: "var(--text-primary)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "var(--bg-overlay)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-[min(320px,85vw)] flex flex-col transition-transform duration-300"
          style={{
            background: "var(--bg-drawer)",
            borderLeft: "1px solid var(--border-default)",
            boxShadow: "var(--shadow-elevated)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div
            className="h-16 flex items-center justify-between px-5"
            style={{ borderBottom: "1px solid var(--border-default)" }}
          >
            <Logo />
          </div>
          <nav aria-label="Mobile navigation" className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
            {NAV_LINKS.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? "page" : undefined}
                  className="w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-colors focus-ring"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: active ? "var(--type-nav-active)" : "var(--type-nav)",
                    background: active ? "var(--accent-soft)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border-default)" }}>
              <ThemeSwitcher variant="panel" />
            </div>
          </nav>
          <div
            className="p-4"
            style={{ borderTop: "1px solid var(--border-default)" }}
          >
            <Link
              to="/partners"
              className="block w-full py-3 rounded-xl text-[14px] font-semibold text-center btn-primary focus-ring"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
