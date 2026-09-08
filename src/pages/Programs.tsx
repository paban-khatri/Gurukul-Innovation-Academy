import { useState } from "react"
import { Link } from "react-router"

interface Program {
  id: string
  title: string
  subtitle: string
  description: string
  topics: string[]
  cta: string
  icon: React.ReactNode
  accent: string
  glow: string
  border: string
  gradient: string
}

const PROGRAMS: Program[] = [
  {
    id: "robotics",
    title: "Robotics",
    subtitle: "Build. Program. Automate.",
    description:
      "Learn robotics through hands-on construction, electronics, programming and real-world challenges — from basic circuits to autonomous machines.",
    topics: [
      "Arduino",
      "Sensors",
      "Motors",
      "Embedded Systems",
      "Robot Design",
      "Automation",
    ],
    cta: "Explore Robotics",
    accent: "#00c8f0",
    glow: "rgba(0,200,240,0.1)",
    border: "rgba(0,200,240,0.18)",
    gradient: "from-[rgba(0,200,240,0.08)] to-transparent",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#00c8f0"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="3" width="12" height="10" rx="2" />
        <circle cx="11" cy="7" r="1.2" fill="#00c8f0" stroke="none" />
        <circle cx="17" cy="7" r="1.2" fill="#00c8f0" stroke="none" />
        <line x1="14" y1="13" x2="14" y2="17" />
        <rect x="5" y="17" width="18" height="8" rx="2" />
        <line x1="5" y1="21" x2="2" y2="21" />
        <line x1="23" y1="21" x2="26" y2="21" />
        <line x1="9" y1="25" x2="9" y2="27" />
        <line x1="14" y1="25" x2="14" y2="27" />
        <line x1="19" y1="25" x2="19" y2="27" />
      </svg>
    ),
  },
  {
    id: "iot",
    title: "IoT",
    subtitle: "Connect. Sense. Respond.",
    description:
      "Understand how devices communicate, collect data and become intelligent connected systems that bridge the physical and digital world.",
    topics: [
      "ESP32 / ESP8266",
      "Sensors",
      "MQTT",
      "Cloud",
      "Smart Devices",
      "Automation",
    ],
    cta: "Explore IoT",
    accent: "#7b61ff",
    glow: "rgba(123,97,255,0.1)",
    border: "rgba(123,97,255,0.18)",
    gradient: "from-[rgba(123,97,255,0.08)] to-transparent",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#7b61ff"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <circle cx="14" cy="14" r="4" />
        <circle cx="14" cy="14" r="1.5" fill="#7b61ff" stroke="none" />
        <path d="M7.5 7.5 A9 9 0 0 0 7.5 20.5" />
        <path d="M20.5 7.5 A9 9 0 0 1 20.5 20.5" />
        <path d="M4 4 A14 14 0 0 0 4 24" />
        <path d="M24 4 A14 14 0 0 1 24 24" />
        <circle cx="4" cy="14" r="1" fill="#7b61ff" stroke="none" />
        <circle cx="24" cy="14" r="1" fill="#7b61ff" stroke="none" />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "Train. Predict. Create.",
    description:
      "Introduce students to artificial intelligence through practical experiments and real-world applications — no PhD required, just curiosity.",
    topics: [
      "Machine Learning",
      "Computer Vision",
      "AI Tools",
      "Data",
      "Intelligent Systems",
    ],
    cta: "Explore AI",
    accent: "#00e6a0",
    glow: "rgba(0,230,160,0.08)",
    border: "rgba(0,230,160,0.18)",
    gradient: "from-[rgba(0,230,160,0.06)] to-transparent",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#00e6a0"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <ellipse cx="14" cy="14" rx="7" ry="5" />
        <line x1="14" y1="9" x2="14" y2="3" />
        <line x1="14" y1="19" x2="14" y2="25" />
        <line x1="7" y1="14" x2="1" y2="14" />
        <line x1="21" y1="14" x2="27" y2="14" />
        <circle cx="14" cy="3" r="1.5" fill="#00e6a0" stroke="none" />
        <circle cx="14" cy="25" r="1.5" fill="#00e6a0" stroke="none" />
        <circle cx="1" cy="14" r="1.5" fill="#00e6a0" stroke="none" />
        <circle cx="27" cy="14" r="1.5" fill="#00e6a0" stroke="none" />
      </svg>
    ),
  },
  {
    id: "stem",
    title: "STEM & Innovation",
    subtitle: "Design. Engineer. Solve.",
    description:
      "Develop creativity, engineering thinking and problem-solving through project-based STEM learning that prepares students for real-world challenges.",
    topics: [
      "Engineering",
      "Electronics",
      "Design Thinking",
      "Prototyping",
      "Problem Solving",
      "Innovation",
    ],
    cta: "Explore STEM",
    accent: "#ffa040",
    glow: "rgba(255,160,64,0.08)",
    border: "rgba(255,160,64,0.18)",
    gradient: "from-[rgba(255,160,64,0.06)] to-transparent",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#ffa040"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="14,2 17,10 26,10 19,15.5 21.5,24 14,19 6.5,24 9,15.5 2,10 11,10" />
      </svg>
    ),
  },
]

function ProgramCard({ program }: { program: Program }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative rounded-2xl flex flex-col gap-0 overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: "#0c1120",
        border: `1px solid ${hovered ? program.accent + "40" : program.border}`,
        boxShadow: hovered
          ? `0 0 0 1px ${program.accent}20,0 24px 64px rgba(0,0,0,0.5),0 0 40px ${program.glow}`
          : "0 4px 24px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b pointer-events-none transition-opacity duration-300 ${program.gradient}`}
        style={{ opacity: hovered ? 1 : 0 }}
      />
      <div
        className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl z-10 transition-colors duration-300"
        style={{ borderColor: hovered ? program.accent : program.border }}
      />
      <div
        className="absolute bottom-0 right-0 w-5 h-5 border-b border-r rounded-br-2xl z-10 transition-colors duration-300"
        style={{ borderColor: hovered ? program.accent : "transparent" }}
      />

      <div className="relative z-10 p-6 flex flex-col flex-1 gap-5">
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-300"
            style={{
              background: program.glow,
              borderColor: hovered ? program.accent + "50" : program.border,
              boxShadow: hovered ? `0 0 20px ${program.glow}` : "none",
            }}
          >
            {program.icon}
          </div>
          <div
            className="text-[11px] font-mono px-2.5 py-1 rounded-full border transition-all duration-300"
            style={{
              color: program.accent,
              borderColor: program.accent + "30",
              background: program.glow,
              opacity: hovered ? 1 : 0.7,
            }}
          >
            {program.subtitle}
          </div>
        </div>

        <div>
          <h3
            className="text-xl font-bold text-white mb-2.5"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
          >
            {program.title}
          </h3>
          <p
            className="text-[13.5px] text-[rgba(107,122,153,1)] leading-[1.7]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {program.description}
          </p>
        </div>

        <div
          className="h-px transition-colors duration-300"
          style={{
            background: hovered
              ? `linear-gradient(90deg,${program.accent}30,transparent)`
              : "rgba(255,255,255,0.05)",
          }}
        />

        <div>
          <p
            className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 font-mono"
            style={{ color: program.accent + "90" }}
          >
            Topics Covered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {program.topics.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-lg font-medium border transition-colors duration-300"
                style={{
                  color: hovered
                    ? "rgba(232,237,245,0.8)"
                    : "rgba(107,122,153,1)",
                  borderColor: hovered
                    ? program.accent + "25"
                    : "rgba(255,255,255,0.06)",
                  background: hovered ? program.glow : "rgba(255,255,255,0.03)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-1">
          <button
            className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group/btn"
            style={{ color: program.accent, fontFamily: "Inter, sans-serif" }}
          >
            {program.cta}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 group-hover/btn:translate-x-1"
            >
              <path
                d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Programs() {
  return (
    <div className="pt-16">
      <section className="relative bg-[var(--background)] py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,97,255,0.2)] to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(0,200,240,0.03)] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-14 lg:mb-16">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-[5px] h-[5px] rounded-full bg-[#00c8f0] shrink-0"
                style={{
                  boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)",
                  animation: "pulse-glow 2.5s ease-in-out infinite",
                }}
              />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#00c8f0] uppercase font-mono">
                Technology Programs
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold text-white leading-tight tracking-[-0.02em] mb-4"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              Technology programs built for the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#00c8f0,#7b61ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                next generation.
              </span>
            </h2>
            <p
              className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Practical, project-based learning designed with real technology.
              Every program ends with students having built something real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PROGRAMS.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-[rgba(255,255,255,0.05)]">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                { icon: "📍", text: "Delivered in schools across Nepal" },
                { icon: "🛠️", text: "100% project-based curriculum" },
                { icon: "🎓", text: "Certificate on completion" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-sm">{icon}</span>
                  <span
                    className="text-[12.5px] text-[rgba(107,122,153,1)]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <Link
                to="/pricing"
                className="px-5 py-2.5 rounded-xl text-[13px] font-semibold bg-[rgba(0,200,240,0.1)] border border-[rgba(0,200,240,0.35)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.2)] transition-all duration-200 whitespace-nowrap inline-flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                View Fees & Pricing
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
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
                to="/partners"
                className="px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-white/15 text-[rgba(232,237,245,0.85)] hover:bg-white/5 transition-all duration-200 whitespace-nowrap inline-flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
