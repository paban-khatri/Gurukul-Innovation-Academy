import { Link } from "react-router"

export default function NotFound() {
  return (
    <div
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#020509" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(0,200,240,0.05),rgba(123,97,255,0.04),transparent 70%)",
        }}
      />

      <div className="relative text-center px-5 flex flex-col items-center gap-6">
        {/* 404 watermark */}
        <div
          className="text-[120px] sm:text-[160px] font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            color: "rgba(0,200,240,0.06)",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </div>

        <div className="flex flex-col items-center gap-4 -mt-10">
          {/* Nodes */}
          <div className="flex items-center gap-2">
            <span
              className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]"
              style={{
                boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)",
                animation: "pulse-glow 2.5s ease-in-out infinite",
              }}
            />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#00c8f0] uppercase">
              Signal Lost
            </span>
            <span
              className="w-[5px] h-[5px] rounded-full bg-[#7b61ff]"
              style={{
                boxShadow: "0 0 8px 2px rgba(123,97,255,0.6)",
                animation: "pulse-glow 2.5s ease-in-out infinite 0.8s",
              }}
            />
          </div>

          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Page not found.
          </h1>
          <p
            className="text-[15px] text-[rgba(107,122,153,1)] max-w-md leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The route you're looking for doesn't exist or may have moved. Let's
            get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              to="/"
              className="px-7 py-3 rounded-xl text-[14px] font-semibold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,200,240,0.4)] transition-all inline-flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Back to Home
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-xl text-[14px] font-semibold border border-[rgba(0,200,240,0.28)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
