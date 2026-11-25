import { useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, Eyebrow, GradientText } from "../components/ui";

// ─── 1. PARTNER LOGO GRID ─────────────────────────────────────────────────────

const PARTNER_PLACEHOLDERS = [
  { id: "A", type: "School", category: "Partner School" },
  { id: "B", type: "College", category: "Higher Education" },
  { id: "C", type: "Institute", category: "Technical Institute" },
  { id: "D", type: "Academy", category: "Partner School" },
  { id: "E", type: "University", category: "Higher Education" },
  { id: "F", type: "School", category: "Partner School" },
  { id: "G", type: "Organisation", category: "NGO Partner" },
  { id: "H", type: "College", category: "Higher Education" },
  { id: "I", type: "Foundation", category: "Foundation Partner" },
  { id: "J", type: "School", category: "Partner School" },
  { id: "K", type: "Institute", category: "Technical Institute" },
  { id: "L", type: "Council", category: "Government Body" },
];

function PartnerLogoPlaceholder({
  partner,
}: {
  partner: (typeof PARTNER_PLACEHOLDERS)[0];
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 rounded-2xl p-6 surface-card transition-all duration-200 cursor-default group"
      style={{
        borderColor: hovered ? "var(--accent-border)" : "var(--border-default)",
        boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-sm)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden border transition-colors"
        style={{
          background: hovered ? "var(--accent-soft)" : "var(--pill-bg)",
          borderColor: hovered ? "var(--accent-border)" : "var(--border-default)",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            rx="4"
            stroke={hovered ? "var(--accent)" : "var(--border-strong)"}
            strokeWidth="1.3"
            fill="none"
          />
          <text
            x="16"
            y="21"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill={hovered ? "var(--accent)" : "var(--text-secondary)"}
            fontFamily="var(--font-heading)"
          >
            {partner.id}
          </text>
        </svg>
      </div>

      <div className="text-center">
        <p
          className="text-[13px] font-semibold leading-none mb-1 transition-colors"
          style={{
            fontFamily: "var(--font-body)",
            color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
          }}
        >
          {partner.type} {partner.id}
        </p>
        <p
          className="text-[10.5px] font-mono"
          style={{ color: hovered ? "var(--accent)" : "var(--text-muted)" }}
        >
          {partner.category}
        </p>
      </div>
    </div>
  );
}

function PartnerLogoSection() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-bg)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-5">
            <Eyebrow label="Our Partners" />
          </div>
          <h1 className="type-section mb-4">
            Working Together <GradientText>With Education</GradientText>
          </h1>
          <p className="type-body">
            We partner with schools, colleges and organisations to create meaningful technology learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {PARTNER_PLACEHOLDERS.map((p) => (
            <PartnerLogoPlaceholder key={p.id} partner={p} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-[12px] font-mono" style={{ color: "var(--text-muted)" }}>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent-border))",
              }}
            />
            Your institution could be next
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(270deg, transparent, var(--accent-border))",
              }}
            />
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[13.5px] btn-secondary focus-ring"
          >
            Become a Partner <ArrowRightIcon size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 2. PARTNERSHIP PROCESS ───────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    label: "Connect",
    heading: "We listen first.",
    body: "We understand your institution, your students' level, existing infrastructure and the learning outcomes you want to achieve.",
    accent: "var(--cat-cyan)",
    soft: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 2L13 9" />
        <path d="M20 2H14" />
        <path d="M20 2V8" />
        <path d="M9 4H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4" />
        <line x1="7" y1="12" x2="13" y2="12" />
        <line x1="7" y1="16" x2="10" y2="16" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Design",
    heading: "Built around you.",
    body: "We design a program tailored to your student level, subject curriculum, session schedule and the resources available at your institution.",
    accent: "var(--cat-violet)",
    soft: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="6" height="6" rx="1.5" />
        <rect x="13" y="13" width="6" height="6" rx="1.5" />
        <path d="M3 15h5M5.5 13v5" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Teach",
    heading: "Hands-on, in-person.",
    body: "Our trained instructors come to your campus and deliver practical, project-based sessions — not lectures, not slides.",
    accent: "var(--cat-emerald)",
    soft: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="18" height="10" rx="1" />
        <line x1="11" y1="15" x2="11" y2="19" />
        <line x1="7" y1="19" x2="15" y2="19" />
        <circle cx="11" cy="10" r="2.5" />
        <line x1="5" y1="8" x2="7" y2="8" />
        <line x1="5" y1="11" x2="7" y2="11" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Build",
    heading: "Students ship real work.",
    body: "Students complete working projects — robots, IoT systems, AI prototypes — and demonstrate what they built. Technology learned by creating it.",
    accent: "var(--cat-amber)",
    soft: "var(--cat-amber-soft)",
    border: "var(--cat-amber-border)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 2.5l5 5-11 11H3.5v-5.5l11-11z" />
        <line x1="12" y1="5" x2="17" y2="10" />
        <circle cx="6" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden border-t"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-5">
            <Eyebrow label="How It Works" />
          </div>
          <h2 className="type-section mb-3">Our partnership process.</h2>
          <p className="type-body">
            From first contact to student-built projects — here's exactly how we work with institutions.
          </p>
        </div>

        {/* Desktop steps */}
        <div className="hidden md:flex items-start justify-between gap-0 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-start flex-1">
              <div
                className="relative flex flex-col gap-4 rounded-2xl p-6 surface-card cursor-default transition-all duration-300 flex-1 mx-1.5"
                style={{
                  borderColor:
                    activeStep === i ? step.border : "var(--border-default)",
                  boxShadow:
                    activeStep === i
                      ? "var(--shadow-card-hover)"
                      : "var(--shadow-card)",
                  transform:
                    activeStep === i ? "translateY(-5px)" : "translateY(0)",
                }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div
                  className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl transition-colors duration-300"
                  style={{
                    borderColor:
                      activeStep === i ? step.accent : step.border,
                  }}
                />
                <div
                  className="text-[11px] font-mono font-bold tracking-widest transition-colors duration-300"
                  style={{
                    color: activeStep === i ? step.accent : "var(--text-muted)",
                  }}
                >
                  {step.num}
                </div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                  style={{
                    background: step.soft,
                    borderColor: step.border,
                    color: step.accent,
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <p
                    className="text-[10.5px] font-bold tracking-[0.2em] uppercase mb-1.5 font-mono"
                    style={{ color: step.accent }}
                  >
                    {step.label}
                  </p>
                  <h3
                    className="text-[16px] font-bold mb-2 leading-snug"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="text-[13.5px] leading-[1.7]"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--type-card)",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-6 right-6 h-px transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                    opacity: activeStep === i ? 1 : 0,
                  }}
                />
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex items-start pt-12 shrink-0 w-6" aria-hidden="true">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <line
                      x1="0"
                      y1="6"
                      x2="20"
                      y2="6"
                      stroke={
                        activeStep === i || activeStep === i + 1
                          ? "var(--accent)"
                          : "var(--border-strong)"
                      }
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <path
                      d="M17 3L21 6L17 9"
                      stroke={
                        activeStep === i || activeStep === i + 1
                          ? "var(--accent)"
                          : "var(--border-strong)"
                      }
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="flex md:hidden flex-col gap-0 mb-12 relative">
          <div
            className="absolute left-[19px] top-10 bottom-10 w-px opacity-40"
            style={{ background: "var(--gradient-brand)" }}
          />
          {STEPS.map((step) => (
            <div key={step.num} className="relative flex gap-5 pb-8 last:pb-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 z-10"
                style={{
                  background: step.soft,
                  borderColor: step.border,
                  color: step.accent,
                }}
              >
                {step.icon}
              </div>
              <div
                className="flex-1 rounded-2xl p-5 surface-card"
                style={{ borderColor: step.border }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10.5px] font-mono font-bold"
                    style={{ color: step.accent }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="w-px h-3"
                    style={{ background: "var(--border-strong)" }}
                  />
                  <span
                    className="text-[10.5px] font-bold tracking-[0.18em] uppercase font-mono"
                    style={{ color: step.accent }}
                  >
                    {step.label}
                  </span>
                </div>
                <h3
                  className="text-[16px] font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {step.heading}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.7]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--type-card)",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why callout */}
        <div
          className="rounded-2xl p-8 md:p-10 surface-card relative overflow-hidden"
          style={{ borderColor: "var(--accent-border)" }}
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                icon: "🏫",
                title: "We come to you",
                body: "Our instructors travel to your campus. No need to send students anywhere — the lab comes to the classroom.",
                soft: "var(--cat-cyan-soft)",
                border: "var(--cat-cyan-border)",
              },
              {
                icon: "📐",
                title: "Custom to your school",
                body: "Every program is designed around your student levels, subject needs and available facilities — not a one-size template.",
                soft: "var(--cat-violet-soft)",
                border: "var(--cat-violet-border)",
              },
              {
                icon: "🏆",
                title: "Students build real things",
                body: "Programs end with student-built projects — functional robots, working sensors, trained AI models. Real outcomes, not theory.",
                soft: "var(--cat-emerald-soft)",
                border: "var(--cat-emerald-border)",
              },
            ].map(({ icon, title, body, soft, border }) => (
              <div key={title} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 border mt-0.5"
                  style={{ background: soft, borderColor: border }}
                >
                  {icon}
                </div>
                <div>
                  <h4
                    className="text-[15px] font-bold mb-1.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-[13.5px] leading-[1.7]"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--type-card)",
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. WHY GURUKUL ──────────────────────────────────────────────────────────

const WHY_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2L12 7H17L13 10.5L14.5 16L10 13L5.5 16L7 10.5L3 7H8L10 2Z" />
      </svg>
    ),
    title: "Hands-on Learning",
    desc: "Students learn by building. Every session ends with a tangible outcome — not a slide deck.",
    accent: "var(--cat-cyan)",
    soft: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="16" height="11" rx="2" />
        <line x1="10" y1="14" x2="10" y2="18" />
        <line x1="6" y1="18" x2="14" y2="18" />
        <circle cx="10" cy="8.5" r="2" />
      </svg>
    ),
    title: "Industry-Relevant Skills",
    desc: "Arduino, Python, MQTT, TensorFlow — tools used by real engineers, taught to students.",
    accent: "var(--cat-violet)",
    soft: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 6h14M3 10h10M3 14h6" />
        <circle cx="16" cy="14" r="3" />
        <path d="M16 12.5v1.5l1 1" />
      </svg>
    ),
    title: "Project-Based Education",
    desc: "Every concept connects directly to a practical project. Theory follows practice, not the other way.",
    accent: "var(--cat-emerald)",
    soft: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="7" r="3.5" />
        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" />
        <line x1="14" y1="3" x2="17" y2="3" />
        <line x1="15.5" y1="1.5" x2="15.5" y2="4.5" />
      </svg>
    ),
    title: "Experienced Mentorship",
    desc: "Guidance from technology practitioners who have built real systems — not just educators.",
    accent: "var(--cat-amber)",
    soft: "var(--cat-amber-soft)",
    border: "var(--cat-amber-border)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2c0 0-7 4-7 9a7 7 0 0 0 14 0c0-5-7-9-7-9Z" />
        <path d="M10 2v11M6.5 8.5c1 1 2.5 2 3.5 2.5" />
      </svg>
    ),
    title: "Innovation Culture",
    desc: "Students are encouraged to experiment, fail fast and iterate. The lab is a safe space to explore.",
    accent: "var(--cat-cyan)",
    soft: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7h14v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
        <path d="M7 7V5a3 3 0 0 1 6 0v2" />
        <line x1="10" y1="11" x2="10" y2="14" />
        <circle cx="10" cy="10.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "Programs designed to grow with your institution — expanding topics, cohorts and complexity year on year.",
    accent: "var(--cat-violet)",
    soft: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
  },
];

function WhyGurukulSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-5">
            <Eyebrow label="Why Gurukul Innovation Academy" color="var(--cat-violet)" />
          </div>
          <h2 className="type-section mb-4">
            What makes us <GradientText>different.</GradientText>
          </h2>
          <p className="type-body">
            We're not a curriculum provider or an online platform. We're a technology team that builds partnerships, shows up in person, and stays invested in student outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="group relative rounded-2xl p-6 surface-card surface-card-hover cursor-default overflow-hidden"
            >
              <div
                className="absolute top-4 right-5 text-[11px] font-mono opacity-40"
                style={{ color: feat.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl opacity-60"
                style={{ borderColor: feat.accent }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: feat.soft,
                  borderColor: feat.border,
                  color: feat.accent,
                }}
              >
                {feat.icon}
              </div>

              <h3 className="type-card-title mb-2.5 leading-snug">
                {feat.title}
              </h3>
              <p
                className="text-[13.5px] leading-[1.7]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--type-card)",
                }}
              >
                {feat.desc}
              </p>

              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. MAIN CTA BANNER ──────────────────────────────────────────────────────

function MainCTASection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden border-t"
      style={{
        background: "var(--bg-deep)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid-dense" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-bg)" }}
      />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border"
            style={{
              background: "var(--accent-soft)",
              borderColor: "var(--accent-border)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full node-pulse"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono"
              style={{ color: "var(--accent)" }}
            >
              Ready to Start?
            </span>
          </div>
        </div>

        <h2 className="type-section mb-5">
          Let's build the next <GradientText>generation</GradientText> of innovators.
        </h2>

        <p className="type-body max-w-xl mx-auto mb-10">
          Bring Robotics, IoT, AI and STEM education to your institution. We design, deliver and build — alongside your students.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="px-9 py-4 rounded-xl text-[15px] btn-primary inline-flex items-center gap-2.5 focus-ring"
          >
            Partner With Us <ArrowRightIcon size={16} />
          </Link>
          <Link
            to="/contact"
            className="px-9 py-4 rounded-xl text-[15px] btn-secondary focus-ring"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {[
            "Free initial consultation",
            "No long-term lock-in",
            "Programs for all age groups",
          ].map((text) => (
            <div key={text} className="flex items-center gap-1.5">
              <span
                className="text-[12px] font-bold"
                style={{ color: "var(--accent)" }}
              >
                ✓
              </span>
              <span className="type-caption">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Partners() {
  return (
    <div className="pt-16">
      <PartnerLogoSection />
      <ProcessSection />
      <WhyGurukulSection />
      <MainCTASection />
    </div>
  );
}
