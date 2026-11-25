import { useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, Eyebrow, GradientText } from "../components/ui";

interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  cta: string;
  icon: React.ReactNode;
  accent: string;
  soft: string;
  border: string;
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
    accent: "var(--cat-cyan)",
    soft: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="8" y="3" width="12" height="10" rx="2" />
        <circle cx="11" cy="7" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
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
    accent: "var(--cat-violet)",
    soft: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <circle cx="14" cy="14" r="4" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <path d="M7.5 7.5 A9 9 0 0 0 7.5 20.5" />
        <path d="M20.5 7.5 A9 9 0 0 1 20.5 20.5" />
        <path d="M4 4 A14 14 0 0 0 4 24" />
        <path d="M24 4 A14 14 0 0 1 24 24" />
        <circle cx="4" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="24" cy="14" r="1" fill="currentColor" stroke="none" />
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
    accent: "var(--cat-emerald)",
    soft: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <ellipse cx="14" cy="14" rx="7" ry="5" />
        <line x1="14" y1="9" x2="14" y2="3" />
        <line x1="14" y1="19" x2="14" y2="25" />
        <line x1="7" y1="14" x2="1" y2="14" />
        <line x1="21" y1="14" x2="27" y2="14" />
        <circle cx="14" cy="3" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="14" cy="25" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="1" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="27" cy="14" r="1.5" fill="currentColor" stroke="none" />
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
    accent: "var(--cat-amber)",
    soft: "var(--cat-amber-soft)",
    border: "var(--cat-amber-border)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="14,2 17,10 26,10 19,15.5 21.5,24 14,19 6.5,24 9,15.5 2,10 11,10" />
      </svg>
    ),
  },
];

function ProgramCard({ program }: { program: Program }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl flex flex-col overflow-hidden surface-card transition-all duration-300"
      style={{
        borderColor: hovered ? program.border : "var(--border-default)",
        boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
              background: program.soft,
              borderColor: program.border,
              color: program.accent,
            }}
          >
            {program.icon}
          </div>
          <div
            className="text-[10.5px] font-mono font-semibold px-2.5 py-1 rounded-full border"
            style={{
              color: program.accent,
              borderColor: program.border,
              background: program.soft,
            }}
          >
            {program.subtitle}
          </div>
        </div>

        <div>
          <h3 className="type-card-title mb-2.5">{program.title}</h3>
          <p
            className="text-[14px] leading-[1.7]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--type-card)",
            }}
          >
            {program.description}
          </p>
        </div>

        <div
          className="h-px"
          style={{
            background: hovered
              ? `linear-gradient(90deg, ${program.border}, transparent)`
              : "var(--divider-subtle)",
          }}
        />

        <div>
          <p
            className="text-[10.5px] font-bold tracking-[0.18em] uppercase mb-2.5 font-mono"
            style={{ color: program.accent }}
          >
            Topics Covered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {program.topics.map((t) => (
              <span
                key={t}
                className="text-[11.5px] px-2.5 py-1 rounded-lg font-medium border transition-colors duration-200"
                style={{
                  color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
                  borderColor: hovered ? program.border : "var(--pill-border)",
                  background: hovered ? program.soft : "var(--pill-bg)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-1">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold transition-all duration-200 group/btn focus-ring rounded"
            style={{ color: program.accent, fontFamily: "var(--font-body)" }}
          >
            {program.cta}
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1 inline-flex">
              <ArrowRightIcon size={14} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <div className="pt-16">
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 pointer-events-none circuit-grid" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero-bg)" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-14 lg:mb-16">
            <div className="mb-5">
              <Eyebrow label="Technology Programs" />
            </div>
            <h1 className="type-section mb-4">
              Technology programs built for the{" "}
              <GradientText>next generation.</GradientText>
            </h1>
            <p className="type-body">
              Practical, project-based learning designed with real technology. Every program ends with students having built something real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PROGRAMS.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>

          <div
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t"
            style={{ borderColor: "var(--border-default)" }}
          >
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                { icon: "📍", text: "Delivered in schools across Nepal" },
                { icon: "🛠️", text: "100% project-based curriculum" },
                { icon: "🎓", text: "Certificate on completion" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-sm">{icon}</span>
                  <span className="type-caption">{text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/partners"
              className="shrink-0 px-6 py-2.5 rounded-xl text-[13.5px] btn-secondary whitespace-nowrap inline-flex items-center gap-2 focus-ring"
            >
              Bring a program to your school <ArrowRightIcon size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
