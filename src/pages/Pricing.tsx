import { useState } from "react"
import { Link } from "react-router"

// ─── Design tokens / helpers ──────────────────────────────────────────────────

function Eyebrow({
  label,
  color = "#00c8f0",
  center = false,
}: {
  label: string
  color?: string
  center?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}
    >
      <span
        className="w-[5px] h-[5px] rounded-full shrink-0"
        style={{
          background: color,
          boxShadow: `0 0 8px 2px ${color}99`,
          animation: "pulse-glow 2.5s ease-in-out infinite",
        }}
      />
      <span
        className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  )
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg,#00c8f0,#7b61ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  )
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-3 my-0 max-w-7xl mx-auto px-5 md:px-8">
      <span
        className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]"
        style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.5)" }}
      />
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg,rgba(0,200,240,0.22),rgba(123,97,255,0.12),transparent)",
        }}
      />
      <span
        className="w-[4px] h-[4px] rounded-full bg-[#7b61ff]"
        style={{ boxShadow: "0 0 6px 2px rgba(123,97,255,0.5)" }}
      />
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function PricingHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.028) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(0,200,240,0.05),rgba(123,97,255,0.04),transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(0,200,240,0.3),rgba(123,97,255,0.25),transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <Eyebrow label="Program Investment" />
          <h1
            className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-white leading-[1.05] tracking-[-0.028em] mt-5 mb-5"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Flexible programs for
            <br />
            <GradientText>every institution.</GradientText>
          </h1>
          <p
            className="text-[16px] text-[rgba(107,122,153,1)] leading-[1.85] max-w-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Technology education programs designed for schools, colleges and
            educational institutions — structured around your students, your
            goals and your context.
          </p>

          {/* Context callout */}
          <div
            className="mt-8 inline-flex items-start gap-3 px-5 py-4 rounded-2xl border"
            style={{
              background: "rgba(0,200,240,0.05)",
              borderColor: "rgba(0,200,240,0.18)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="mt-0.5 shrink-0"
              style={{ color: "#00c8f0" }}
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 9v5M10 6.5v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p
              className="text-[13.5px] text-[rgba(107,122,153,0.9)] leading-[1.7]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Program investment depends on number of students, batches,
              duration, technology selected, hardware requirements and
              institutional needs.{" "}
              <Link
                to="/contact"
                className="text-[#00c8f0] hover:underline underline-offset-3"
              >
                Contact us for a tailored proposal.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Investment factors ───────────────────────────────────────────────────────

const FACTORS = [
  {
    icon: "👥",
    label: "Number of Students",
    desc: "Total enrolled students per program",
  },
  {
    icon: "📦",
    label: "Batch Size",
    desc: "Number of students per learning group",
  },
  {
    icon: "📅",
    label: "Program Duration",
    desc: "Weekly, monthly or academic-year cycles",
  },
  {
    icon: "🔬",
    label: "Technology / Program",
    desc: "Robotics, IoT, AI, STEM or combined",
  },
  {
    icon: "🛠️",
    label: "Hardware & Kits",
    desc: "Equipment and materials per student/batch",
  },
  {
    icon: "⏱️",
    label: "Class Frequency",
    desc: "Weekly sessions, intensives or workshops",
  },
  {
    icon: "🏫",
    label: "Institution Type",
    desc: "School, college or vocational institute",
  },
  {
    icon: "📐",
    label: "Custom Requirements",
    desc: "Specialized curriculum or assessment",
  },
]

function InvestmentFactors() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8">
          <Eyebrow label="What Affects Pricing" />
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Program investment is shaped by your institution's needs.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FACTORS.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-3 p-4 rounded-xl border border-[rgba(0,200,240,0.09)] bg-[rgba(12,17,32,0.5)] hover:border-[rgba(0,200,240,0.2)] transition-colors"
            >
              <span className="text-xl shrink-0 mt-0.5">{icon}</span>
              <div>
                <p
                  className="text-[13px] font-semibold text-[rgba(232,237,245,0.9)] leading-tight mb-1"
                  style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
                >
                  {label}
                </p>
                <p
                  className="text-[11.5px] text-[rgba(107,122,153,0.8)] leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing model cards ──────────────────────────────────────────────────────

const PRICING_MODELS = [
  {
    icon: "🎓",
    title: "Per Student",
    subtitle: "Student-Based",
    desc: "Fee calculated per enrolled student. Ideal for institutions collecting fees directly from students or families.",
    suitable: "Schools and colleges charging students directly",
    accent: "#00c8f0",
    bg: "rgba(0,200,240,0.07)",
    border: "rgba(0,200,240,0.2)",
    tag: "Most Flexible",
  },
  {
    icon: "👥",
    title: "Per Batch",
    subtitle: "Batch-Based",
    desc: "Fixed fee per learning group regardless of individual student count. Predictable budgeting for fixed-size classes.",
    suitable: "Fixed-size student groups and class sections",
    accent: "#7b61ff",
    bg: "rgba(123,97,255,0.07)",
    border: "rgba(123,97,255,0.2)",
    tag: "Predictable",
  },
  {
    icon: "🏫",
    title: "Institutional Program",
    subtitle: "Institution-Wide",
    desc: "Comprehensive program fee covering multiple batches or the entire school's technology education program.",
    suitable: "Schools and colleges running structured technology programs",
    accent: "#00e6a0",
    bg: "rgba(0,230,160,0.07)",
    border: "rgba(0,230,160,0.2)",
    tag: "Most Popular",
  },
  {
    icon: "🤝",
    title: "Custom Partnership",
    subtitle: "Fully Customised",
    desc: "Designed around your institution's specific curriculum, schedule, student levels, hardware and technology requirements.",
    suitable: "Institutions with unique or complex requirements",
    accent: "#ffa040",
    bg: "rgba(255,160,64,0.07)",
    border: "rgba(255,160,64,0.2)",
    tag: null,
  },
]

interface PricingModelCardProps {
  model: typeof PRICING_MODELS[0]
}

function PricingModelCard({ model }: PricingModelCardProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative flex flex-col gap-5 rounded-2xl p-6 border transition-all duration-300 cursor-default"
      style={{
        background: hovered ? model.bg : "rgba(12,17,32,0.6)",
        borderColor: hovered
          ? model.border
          : model.border.replace("0.2", "0.1"),
        boxShadow: hovered
          ? `0 0 0 1px ${model.accent}12, 0 20px 60px rgba(0,0,0,0.4)`
          : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {model.tag && (
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide font-mono"
          style={{
            background: model.bg,
            color: model.accent,
            border: `1px solid ${model.border}`,
          }}
        >
          {model.tag}
        </div>
      )}

      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl"
        style={{ borderColor: model.accent + "40" }}
      />
      <div
        className="absolute bottom-0 right-0 w-5 h-5 border-b border-r rounded-br-2xl"
        style={{ borderColor: model.accent + "30" }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border transition-transform duration-300"
        style={{
          background: model.bg,
          borderColor: model.border.replace("0.2", "0.15"),
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        {model.icon}
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <p
          className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase"
          style={{ color: model.accent + "90" }}
        >
          {model.subtitle}
        </p>
        <h3
          className="text-[18px] font-extrabold text-white leading-tight"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
        >
          {model.title}
        </h3>
        <p
          className="text-[13.5px] text-[rgba(107,122,153,1)] leading-[1.7]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {model.desc}
        </p>
      </div>

      <div
        className="flex items-start gap-2 p-3 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 14 14"
          fill="none"
          className="mt-0.5 shrink-0"
          style={{ color: model.accent }}
        >
          <path
            d="M2.5 7L6 10.5L11.5 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p
          className="text-[12px] text-[rgba(107,122,153,0.8)]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Suitable for:{" "}
          <span className="text-[rgba(232,237,245,0.65)]">
            {model.suitable}
          </span>
        </p>
      </div>

      <Link
        to="/contact"
        className="w-full py-3 rounded-xl text-[13px] font-semibold text-center border transition-all"
        style={{
          color: model.accent,
          borderColor: model.border,
          background: hovered ? model.bg : "transparent",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Request Pricing →
      </Link>
    </div>
  )
}

function PricingModels() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg,var(--background),#070b16)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.12)] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <Eyebrow label="Pricing Models" />
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-3"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Choose the model that{" "}
            <GradientText>fits your institution.</GradientText>
          </h2>
          <p
            className="text-[14px] text-[rgba(107,122,153,1)] leading-[1.8]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Four program structures — each designed for different institutional
            contexts, budgets and administrative preferences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRICING_MODELS.map((m) => (
            <PricingModelCard key={m.title} model={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Program fee table ────────────────────────────────────────────────────────

const TABLE_PROGRAMS = [
  {
    name: "Robotics",
    icon: "🤖",
    duration: "12–16 weeks",
    level: "Grade 6–12 / College",
    mode: "In-school / Lab",
    includes: [
      "Curriculum & lesson plans",
      "Hands-on kit components",
      "Instructor sessions",
      "2 project builds",
      "Completion certificate",
    ],
    fee: "Contact Us",
    accent: "#00c8f0",
  },
  {
    name: "IoT",
    icon: "📡",
    duration: "10–14 weeks",
    level: "Grade 8–12 / College",
    mode: "In-school / Lab",
    includes: [
      "Sensor & module kit",
      "Project curriculum",
      "Instructor support",
      "Live IoT project",
      "Completion certificate",
    ],
    fee: "Contact Us",
    accent: "#7b61ff",
  },
  {
    name: "AI & Machine Learning",
    icon: "🧠",
    duration: "8–12 weeks",
    level: "Grade 10–12 / College",
    mode: "In-school / Online",
    includes: [
      "AI curriculum",
      "Practical experiments",
      "Instructor sessions",
      "Model project",
      "Completion certificate",
    ],
    fee: "Contact Us",
    accent: "#00e6a0",
  },
  {
    name: "STEM & Innovation",
    icon: "⭐",
    duration: "Flexible / Ongoing",
    level: "Grade 4–12",
    mode: "In-school",
    includes: [
      "Design & engineering curriculum",
      "Project materials",
      "Instructor support",
      "Innovation showcase",
      "Completion certificate",
    ],
    fee: "Contact Us",
    accent: "#ffa040",
  },
  {
    name: "Combined Technology Program",
    icon: "🔬",
    duration: "Full Academic Year",
    level: "All levels",
    mode: "In-school / Lab",
    includes: [
      "All 4 program curricula",
      "Full hardware kits",
      "Dedicated instructor",
      "Multiple project builds",
      "Annual showcase",
      "Assessment & reports",
      "Certificates",
    ],
    fee: "Request Proposal",
    accent: "#00c8f0",
    highlight: true,
  },
]

function PricingTable() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,97,255,0.15)] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <Eyebrow label="Program Fee Overview" color="#7b61ff" />
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-3"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Program comparison.
          </h2>
          <p
            className="text-[14px] text-[rgba(107,122,153,1)]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            All fees are customised per institution. Contact us for a proposal
            with actual pricing.
          </p>
        </div>

        {/* Desktop table */}
        <div
          className="hidden lg:block rounded-2xl overflow-hidden border border-[rgba(0,200,240,0.1)]"
          style={{ background: "rgba(12,17,32,0.6)" }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgba(0,200,240,0.1)",
                  background: "rgba(0,200,240,0.04)",
                }}
              >
                {[
                  "Program",
                  "Duration",
                  "Target Level",
                  "Delivery",
                  "What's Included",
                  "Investment",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 text-[11px] font-bold tracking-[0.16em] uppercase font-mono text-[rgba(0,200,240,0.65)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_PROGRAMS.map((prog, i) => (
                <tr
                  key={prog.name}
                  style={{
                    borderBottom:
                      i < TABLE_PROGRAMS.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                    background: prog.highlight
                      ? "rgba(0,200,240,0.04)"
                      : "transparent",
                  }}
                >
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 border"
                        style={{
                          background: prog.accent + "14",
                          borderColor: prog.accent + "28",
                        }}
                      >
                        {prog.icon}
                      </div>
                      <div>
                        <p
                          className="text-[14px] font-semibold text-white leading-tight"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: prog.highlight ? 700 : 600,
                          }}
                        >
                          {prog.name}
                        </p>
                        {prog.highlight && (
                          <p
                            className="text-[10px] font-mono font-bold tracking-wide mt-0.5"
                            style={{ color: prog.accent }}
                          >
                            FLAGSHIP
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5">
                    <span
                      className="text-[13px] text-[rgba(107,122,153,0.9)]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {prog.duration}
                    </span>
                  </td>
                  <td className="px-5 py-5">
                    <span
                      className="text-[13px] text-[rgba(107,122,153,0.9)]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {prog.level}
                    </span>
                  </td>
                  <td className="px-5 py-5">
                    <span
                      className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                      style={{
                        background: "rgba(0,200,240,0.06)",
                        borderColor: "rgba(0,200,240,0.14)",
                        color: "#00c8f0",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {prog.mode}
                    </span>
                  </td>
                  <td className="px-5 py-5">
                    <ul className="flex flex-col gap-1">
                      {prog.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[12px] text-[rgba(107,122,153,0.85)]"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 14 14"
                            fill="none"
                            style={{ color: prog.accent }}
                          >
                            <path
                              d="M2.5 7L6 10.5L11.5 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[12.5px] font-semibold border whitespace-nowrap transition-all hover:brightness-110"
                      style={{
                        background: prog.accent + "12",
                        borderColor: prog.accent + "30",
                        color: prog.accent,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {prog.fee}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-4 lg:hidden">
          {TABLE_PROGRAMS.map((prog) => (
            <div
              key={prog.name}
              className="rounded-2xl border p-5"
              style={{
                background: prog.highlight
                  ? "rgba(0,200,240,0.04)"
                  : "rgba(12,17,32,0.6)",
                borderColor: prog.highlight
                  ? "rgba(0,200,240,0.2)"
                  : "rgba(0,200,240,0.08)",
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
                    style={{
                      background: prog.accent + "14",
                      borderColor: prog.accent + "28",
                    }}
                  >
                    {prog.icon}
                  </div>
                  <div>
                    <p
                      className="text-[15px] font-bold text-white"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {prog.name}
                    </p>
                    <p className="text-[11px] text-[rgba(107,122,153,0.8)] font-mono">
                      {prog.duration}
                    </p>
                  </div>
                </div>
                {prog.highlight && (
                  <span
                    className="px-2 py-1 rounded-full text-[10px] font-bold font-mono"
                    style={{
                      background: prog.accent + "15",
                      color: prog.accent,
                      border: `1px solid ${prog.accent}30`,
                    }}
                  >
                    FLAGSHIP
                  </span>
                )}
              </div>
              <div
                className="grid grid-cols-2 gap-3 mb-4 text-[12px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div>
                  <p className="text-[rgba(107,122,153,0.6)] mb-0.5 text-[10px] uppercase tracking-wide font-mono">
                    Level
                  </p>
                  <p className="text-[rgba(232,237,245,0.75)]">{prog.level}</p>
                </div>
                <div>
                  <p className="text-[rgba(107,122,153,0.6)] mb-0.5 text-[10px] uppercase tracking-wide font-mono">
                    Mode
                  </p>
                  <p className="text-[rgba(232,237,245,0.75)]">{prog.mode}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-1 mb-4">
                {prog.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-[11.5px] text-[rgba(107,122,153,0.8)]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ color: prog.accent }}
                    >
                      <path
                        d="M2.5 7L6 10.5L11.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block w-full py-3 rounded-xl text-[13px] font-semibold text-center border transition-all"
                style={{
                  background: prog.accent + "12",
                  borderColor: prog.accent + "30",
                  color: prog.accent,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {prog.fee}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Institutional partnership package ────────────────────────────────────────

const PACKAGE_FEATURES = [
  "Structured, school-aligned curriculum",
  "Practical hands-on classes every session",
  "Project-based learning across all modules",
  "Qualified instructor support",
  "Student project builds and demonstrations",
  "Technology kits where applicable",
  "End-of-program project showcase",
  "Progress monitoring and assessment support",
  "Student certificates on completion",
  "Long-term program support and renewal",
]

function InstitutionalPackage() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "#020509" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(0,200,240,0.4),rgba(123,97,255,0.35),transparent)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.1)] to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(0,200,240,0.06),rgba(123,97,255,0.04),transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div
          className="rounded-3xl overflow-hidden border"
          style={{
            background: "rgba(5,8,15,0.7)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(0,200,240,0.2)",
            boxShadow:
              "0 0 0 1px rgba(0,200,240,0.06), 0 40px 100px rgba(0,0,0,0.6)",
          }}
        >
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[rgba(0,200,240,0.4)] rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[rgba(123,97,255,0.3)] rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[rgba(123,97,255,0.3)] rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[rgba(0,200,240,0.25)] rounded-br-3xl" />

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0">
            {/* Left */}
            <div
              className="p-8 lg:p-12 flex flex-col gap-6"
              style={{ borderRight: "1px solid rgba(0,200,240,0.08)" }}
            >
              <div
                className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border"
                style={{
                  background: "rgba(0,200,240,0.06)",
                  borderColor: "rgba(0,200,240,0.22)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00c8f0]"
                  style={{
                    boxShadow: "0 0 6px 2px rgba(0,200,240,0.5)",
                    animation: "pulse-glow 2.5s ease-in-out infinite",
                  }}
                />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c8f0] uppercase font-mono">
                  Flagship Package
                </span>
              </div>
              <div>
                <h2
                  className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white leading-tight tracking-[-0.02em] mb-3"
                  style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
                >
                  School / College{" "}
                  <GradientText>Technology Partnership.</GradientText>
                </h2>
                <p
                  className="text-[14px] text-[rgba(107,122,153,1)] leading-[1.8]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  A comprehensive, structured technology education program that
                  integrates seamlessly with your institution's academic
                  calendar — covering one or more technology disciplines,
                  delivered by our instructors with full support.
                </p>
              </div>

              <div
                className="p-5 rounded-2xl border flex flex-col gap-4"
                style={{
                  background: "rgba(0,200,240,0.04)",
                  borderColor: "rgba(0,200,240,0.14)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[rgba(0,200,240,0.6)]">
                    Investment
                  </span>
                </div>
                <div
                  className="text-3xl font-extrabold text-white"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  NPR —
                </div>
                <p
                  className="text-[12.5px] text-[rgba(107,122,153,0.85)] leading-[1.7]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Pricing varies based on programs selected, student count,
                  class frequency and duration. Request a proposal for your
                  institution's exact investment.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-[14px] font-bold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_32px_rgba(0,200,240,0.45)] active:scale-[0.98] transition-all"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Request Partnership Proposal
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Right */}
            <div className="p-8 lg:p-12 flex flex-col gap-6">
              <p className="text-[12px] font-mono font-bold tracking-[0.18em] uppercase text-[rgba(0,200,240,0.55)]">
                What's Included
              </p>
              <ul className="flex flex-col gap-3">
                {PACKAGE_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(0,200,240,0.12)",
                        border: "1px solid rgba(0,200,240,0.25)",
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7L6 10.5L11.5 4"
                          stroke="#00c8f0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-[13.5px] text-[rgba(232,237,245,0.8)] leading-snug"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Robotics", "IoT", "AI", "STEM"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-semibold border"
                    style={{
                      background: "rgba(0,200,240,0.06)",
                      borderColor: "rgba(0,200,240,0.18)",
                      color: "#00c8f0",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-semibold border"
                  style={{
                    background: "rgba(123,97,255,0.06)",
                    borderColor: "rgba(123,97,255,0.18)",
                    color: "#a08fff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Customisable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── What's included ──────────────────────────────────────────────────────────

const INCLUSIONS = [
  {
    icon: "📚",
    title: "Curriculum & Lesson Plans",
    desc: "Structured, topic-wise lesson plans aligned to the program and student level.",
    accent: "#00c8f0",
  },
  {
    icon: "🛠️",
    title: "Practical Training",
    desc: "Every session includes hands-on building, programming or experimentation.",
    accent: "#7b61ff",
  },
  {
    icon: "👨‍🏫",
    title: "Instructor Support",
    desc: "Qualified technology instructors guide students through every project.",
    accent: "#00e6a0",
  },
  {
    icon: "⚙️",
    title: "Projects & Activities",
    desc: "Structured project builds designed around the program's core technology.",
    accent: "#ffa040",
  },
  {
    icon: "📦",
    title: "Technology Kits",
    desc: "Hardware components and materials provided where required by the program.",
    accent: "#00c8f0",
  },
  {
    icon: "📊",
    title: "Assessment Support",
    desc: "Progress monitoring, evaluation tools and student performance reports.",
    accent: "#7b61ff",
  },
  {
    icon: "🎤",
    title: "Project Demonstration",
    desc: "End-of-program project showcases for school management and parents.",
    accent: "#00e6a0",
  },
  {
    icon: "🏆",
    title: "Completion Certificates",
    desc: "Gurukul Innovation Academy certificates issued to qualifying students.",
    accent: "#ffa040",
  },
]

function WhatsIncluded() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.12)] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <Eyebrow label="Program Inclusions" color="#00e6a0" />
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-3"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            What's included in every program?
          </h2>
          <p
            className="text-[14px] text-[rgba(107,122,153,1)] leading-[1.8]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            All Gurukul Innovation Academy programs are complete — designed so
            your institution can run a professional technology education program
            without sourcing curriculum, hardware or instructors separately.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INCLUSIONS.map(({ icon, title, desc, accent }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl p-5 border border-[rgba(0,200,240,0.08)] bg-[rgba(12,17,32,0.5)] hover:border-[rgba(0,200,240,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-[11px] font-mono opacity-15 text-[rgba(0,200,240,1)]">
                0{i + 1}
              </div>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 border"
                style={{
                  background: accent + "12",
                  borderColor: accent + "22",
                }}
              >
                {icon}
              </div>
              <h3
                className="text-[14px] font-bold text-white mb-1.5 leading-snug"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
              >
                {title}
              </h3>
              <p
                className="text-[12.5px] text-[rgba(107,122,153,0.9)] leading-[1.65]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {desc}
              </p>
              <div
                className="absolute bottom-0 left-5 right-5 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg,transparent,${accent},transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Custom program CTA ───────────────────────────────────────────────────────

function CustomProgram() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: "rgba(12,17,32,0.5)",
        borderTop: "1px solid rgba(0,200,240,0.07)",
        borderBottom: "1px solid rgba(0,200,240,0.07)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-between">
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 border"
              style={{
                background: "rgba(0,200,240,0.08)",
                borderColor: "rgba(0,200,240,0.2)",
              }}
            >
              🤝
            </div>
            <div>
              <h3
                className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
              >
                Need a Custom Program?
              </h3>
              <p
                className="text-[14px] text-[rgba(107,122,153,1)] leading-[1.75] max-w-xl"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Every institution has different goals, student levels and
                available resources. We can design a technology education
                program around your specific requirements — curriculum,
                technology, schedule and assessment.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-[14px] font-bold border border-[rgba(0,200,240,0.3)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] hover:border-[rgba(0,200,240,0.45)] hover:shadow-[0_0_24px_rgba(0,200,240,0.18)] active:scale-[0.98] transition-all"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Talk to Our Team
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
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How is the program fee calculated?",
    a: "The program fee depends on several factors: the number of students enrolled, number of batches, duration of the program (weekly, monthly or academic-year), technology program selected, hardware and kit requirements, and any custom institutional requirements. We provide a tailored proposal for each institution.",
  },
  {
    q: "Can the school collect fees from students?",
    a: "Yes. Many of our partner schools and colleges collect program fees directly from students or families as part of their extracurricular or technology fee structure. We invoice the institution, and the institution manages its own student fee collection.",
  },
  {
    q: "Can programs be customised for different classes or grade levels?",
    a: "Absolutely. Each program can be adapted in complexity, tools used and projects built to suit different grade levels — from foundational STEM for younger students to advanced Robotics, IoT and AI for senior classes and college students.",
  },
  {
    q: "Are hardware kits included in the program fee?",
    a: "Hardware and technology kit requirements vary by program. For programs requiring physical components (Robotics, IoT), kits are factored into the program investment. The exact kit requirements and whether they are per-student or per-batch will be specified in your proposal.",
  },
  {
    q: "Can the program run throughout the academic year?",
    a: "Yes. We offer full academic-year program structures, term-based programs and shorter intensive formats. Our Combined Technology Partnership is designed to operate as an ongoing program integrated into the school's annual calendar.",
  },
  {
    q: "Do you offer programs for different grade levels?",
    a: "Yes. Our programs are designed for a range of levels: STEM & Innovation from Grade 4 onwards, Robotics from Grade 6, IoT from Grade 8, and AI & Machine Learning from Grade 10 through to college. We also offer combined or multi-level programs for institutions with multiple classes.",
  },
  {
    q: "Can we request a customised proposal for our institution?",
    a: "Yes — and we encourage it. Every institution has unique needs. Contact us through the form on this page or the Contact page and we will schedule a consultation to understand your institution, student profile and goals, then provide a detailed written proposal.",
  },
]

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,97,255,0.12)] to-transparent" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8">
        <div className="mb-10 text-center">
          <Eyebrow label="Frequently Asked" color="#7b61ff" center />
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Common questions.
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen
                    ? "rgba(0,200,240,0.22)"
                    : "rgba(0,200,240,0.07)",
                  background: isOpen
                    ? "rgba(0,200,240,0.04)"
                    : "rgba(12,17,32,0.4)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span
                    className="text-[14.5px] font-semibold text-[rgba(232,237,245,0.9)] leading-snug"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200"
                    style={{
                      background: isOpen
                        ? "rgba(0,200,240,0.12)"
                        : "rgba(255,255,255,0.04)",
                      borderColor: isOpen
                        ? "rgba(0,200,240,0.3)"
                        : "rgba(255,255,255,0.07)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        color: isOpen ? "#00c8f0" : "rgba(107,122,153,0.8)",
                      }}
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <div
                      className="h-px mb-4"
                      style={{ background: "rgba(0,200,240,0.08)" }}
                    />
                    <p
                      className="text-[13.5px] text-[rgba(107,122,153,1)] leading-[1.8]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function PricingCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#020509" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(0,200,240,0.35),rgba(123,97,255,0.3),transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(0,200,240,0.07),rgba(123,97,255,0.05),transparent 70%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border"
            style={{
              background: "rgba(0,200,240,0.05)",
              borderColor: "rgba(0,200,240,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#00c8f0]"
              style={{
                boxShadow: "0 0 8px 3px rgba(0,200,240,0.6)",
                animation: "pulse-glow 2.5s ease-in-out infinite",
              }}
            />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c8f0] uppercase font-mono">
              Ready to Build a Program?
            </span>
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-[-0.025em] mb-4"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
        >
          Let's design the right program
          <br />
          <GradientText>for your institution.</GradientText>
        </h2>
        <p
          className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8] mb-10 max-w-lg mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Speak with our team to discuss your institution's requirements,
          student profile and goals. We'll provide a detailed written proposal
          with transparent, itemised investment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link
            to="/contact"
            className="px-9 py-4 rounded-xl text-[15px] font-bold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_40px_rgba(0,200,240,0.5)] active:scale-[0.97] transition-all inline-flex items-center gap-2.5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Request a Proposal
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
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
            className="px-9 py-4 rounded-xl text-[15px] font-semibold border border-[rgba(0,200,240,0.28)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Partnership Model
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {[
            "Free consultation",
            "Detailed written proposal",
            "No hidden fees",
            "Customisable to your needs",
          ].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-[#00c8f0]">✓</span>
              <span
                className="text-[12.5px] text-[rgba(107,122,153,0.75)]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page export ──────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <InvestmentFactors />
      <SectionDivider />
      <PricingModels />
      <PricingTable />
      <InstitutionalPackage />
      <WhatsIncluded />
      <CustomProgram />
      <FAQAccordion />
      <PricingCTA />
    </>
  )
}
