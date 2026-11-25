import { Link } from "react-router";
import { ArrowRightIcon } from "../components/ui";

export default function NotFound() {
  return (
    <div
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-bg)" }}
      />

      <div className="relative text-center px-5 flex flex-col items-center gap-6">
        <div
          className="text-[120px] sm:text-[160px] font-extrabold leading-none select-none pointer-events-none opacity-25"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            color: "var(--accent-border)",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </div>

        <div className="flex flex-col items-center gap-4 -mt-10">
          <div className="flex items-center gap-2">
            <span
              className="w-[5px] h-[5px] rounded-full node-pulse"
              style={{
                background: "var(--accent)",
                boxShadow: "var(--glow-node)",
              }}
            />
            <span
              className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Signal Lost
            </span>
            <span
              className="w-[5px] h-[5px] rounded-full node-pulse"
              style={{
                background: "var(--accent-secondary)",
                animationDelay: "0.8s",
              }}
            />
          </div>

          <h1 className="type-section">Page not found.</h1>
          <p className="type-body max-w-md">
            The route you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              to="/"
              className="px-7 py-3 rounded-xl text-[14px] btn-primary inline-flex items-center gap-2 focus-ring"
            >
              Back to Home <ArrowRightIcon />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-xl text-[14px] btn-secondary focus-ring"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
