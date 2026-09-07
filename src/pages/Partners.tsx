import { useState } from "react";
import { Link } from "react-router";

// ─── Shared primitives ────────────────────────────────────────────────────────

function SectionEyebrow({ label, color = "#00c8f0" }: { label: string; color?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="w-[5px] h-[5px] rounded-full shrink-0"
        style={{ background: color, boxShadow: `0 0 8px 2px ${color}99`, animation: "pulse-glow 2.5s ease-in-out infinite" }}
      />
      <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

// ─── 1. PARTNER LOGO GRID ─────────────────────────────────────────────────────

const PARTNER_PLACEHOLDERS = [
  { id: "A", type: "School",        category: "Partner School" },
  { id: "B", type: "College",       category: "Higher Education" },
  { id: "C", type: "Institute",     category: "Technical Institute" },
  { id: "D", type: "Academy",       category: "Partner School" },
  { id: "E", type: "University",    category: "Higher Education" },
  { id: "F", type: "School",        category: "Partner School" },
  { id: "G", type: "Organisation",  category: "NGO Partner" },
  { id: "H", type: "College",       category: "Higher Education" },
  { id: "I", type: "Foundation",    category: "Foundation Partner" },
  { id: "J", type: "School",        category: "Partner School" },
  { id: "K", type: "Institute",     category: "Technical Institute" },
  { id: "L", type: "Council",       category: "Government Body" },
];

function PartnerLogoPlaceholder({ partner }: { partner: typeof PARTNER_PLACEHOLDERS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition-all duration-250 cursor-default group"
      style={{
        background: hovered ? "rgba(12,17,32,0.95)" : "rgba(12,17,32,0.5)",
        borderColor: hovered ? "rgba(0,200,240,0.25)" : "rgba(255,255,255,0.06)",
        boxShadow: hovered ? "0 0 0 1px rgba(0,200,240,0.08), 0 12px 40px rgba(0,0,0,0.35)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Abstract logo mark */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden border"
        style={{
          background: hovered ? "rgba(0,200,240,0.08)" : "rgba(255,255,255,0.03)",
          borderColor: hovered ? "rgba(0,200,240,0.2)" : "rgba(255,255,255,0.06)",
        }}
      >
        {/* Placeholder graphic — letter-based geometric mark */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            x="4" y="4" width="24" height="24" rx="4"
            stroke={hovered ? "#00c8f0" : "rgba(107,122,153,0.4)"}
            strokeWidth="1.2"
            fill="none"
            style={{ transition: "stroke 0.25s" }}
          />
          <text
            x="16" y="21"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill={hovered ? "#00c8f0" : "rgba(107,122,153,0.6)"}
            fontFamily="Manrope, sans-serif"
            style={{ transition: "fill 0.25s" }}
          >
            {partner.id}
          </text>
        </svg>
        {/* Subtle corner glow */}
        {hovered && (
          <div className="absolute top-0 left-0 w-6 h-6 rounded-xl" style={{ background: "radial-gradient(circle at top left, rgba(0,200,240,0.3), transparent)" }} />
        )}
      </div>

      <div className="text-center">
        <p
          className="text-[12px] font-semibold text-[rgba(232,237,245,0.5)] leading-none mb-1 transition-colors group-hover:text-[rgba(232,237,245,0.8)]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {partner.type} {partner.id}
        </p>
        <p className="text-[10px] font-mono" style={{ color: hovered ? "rgba(0,200,240,0.7)" : "rgba(107,122,153,0.5)" }}>
          {partner.category}
        </p>
      </div>
    </div>
  );
}

function PartnerLogoSection() {
  return (
    <section className="relative bg-[var(--background)] py-24 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.2)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[rgba(0,200,240,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-5">
            <SectionEyebrow label="Our Partners" />
          </div>
          <h2
            className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold text-white leading-tight tracking-[-0.02em] mb-4"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Working Together{" "}
            <span style={{ background: "linear-gradient(135deg,#00c8f0,#7b61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              With Education
            </span>
          </h2>
          <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]" style={{ fontFamily: "Inter, sans-serif" }}>
            We partner with schools, colleges and organisations to create meaningful technology learning experiences.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {PARTNER_PLACEHOLDERS.map((p) => (
            <PartnerLogoPlaceholder key={p.id} partner={p} />
          ))}
        </div>

        {/* Become partner CTA */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-[12px] text-[rgba(107,122,153,0.7)] font-mono">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(0,200,240,0.2)]" />
            Your institution could be next
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(0,200,240,0.2)]" />
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[13px] font-semibold border border-[rgba(0,200,240,0.3)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] hover:shadow-[0_0_20px_rgba(0,200,240,0.15)] transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Become a Partner
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 2. PARTNERSHIP PROCESS ───────────────────────────────────────────────────

const STEPS = [
  { num: "01", label: "Connect", heading: "We listen first.", body: "We understand your institution, your students' level, existing infrastructure and the learning outcomes you want to achieve.", accent: "#00c8f0", glow: "rgba(0,200,240,0.12)", border: "rgba(0,200,240,0.22)",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 2L13 9" /><path d="M20 2H14" /><path d="M20 2V8" /><path d="M9 4H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4" /><line x1="7" y1="12" x2="13" y2="12" /><line x1="7" y1="16" x2="10" y2="16" /></svg>,
  },
  { num: "02", label: "Design", heading: "Built around you.", body: "We design a program tailored to your student level, subject curriculum, session schedule and the resources available at your institution.", accent: "#7b61ff", glow: "rgba(123,97,255,0.12)", border: "rgba(123,97,255,0.22)",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="6" height="6" rx="1.5" /><rect x="13" y="13" width="6" height="6" rx="1.5" /><path d="M3 15h5M5.5 13v5" /></svg>,
  },
  { num: "03", label: "Teach", heading: "Hands-on, in-person.", body: "Our trained instructors come to your campus and deliver practical, project-based sessions — not lectures, not slides.", accent: "#00e6a0", glow: "rgba(0,230,160,0.10)", border: "rgba(0,230,160,0.22)",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="18" height="10" rx="1" /><line x1="11" y1="15" x2="11" y2="19" /><line x1="7" y1="19" x2="15" y2="19" /><circle cx="11" cy="10" r="2.5" /><line x1="5" y1="8" x2="7" y2="8" /><line x1="5" y1="11" x2="7" y2="11" /></svg>,
  },
  { num: "04", label: "Build", heading: "Students ship real work.", body: "Students complete working projects — robots, IoT systems, AI prototypes — and demonstrate what they built. Technology learned by creating it.", accent: "#ffa040", glow: "rgba(255,160,64,0.10)", border: "rgba(255,160,64,0.22)",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2.5l5 5-11 11H3.5v-5.5l11-11z" /><line x1="12" y1="5" x2="17" y2="10" /><circle cx="6" cy="17" r="1" fill="currentColor" stroke="none" /></svg>,
  },
];

function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section className="relative bg-[var(--background)] py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.1)] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.03),rgba(123,97,255,0.03),transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.022) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-5">
            <SectionEyebrow label="How It Works" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-[-0.02em] mb-3" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
            Our partnership process.
          </h2>
          <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]" style={{ fontFamily: "Inter, sans-serif" }}>
            From first contact to student-built projects — here's exactly how we work with institutions.
          </p>
        </div>

        {/* Desktop steps */}
        <div className="hidden md:flex items-start justify-between gap-0 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-start flex-1">
              <div
                className="relative flex flex-col gap-4 rounded-2xl p-6 cursor-default transition-all duration-300 flex-1 mx-1.5"
                style={{ background: activeStep === i ? "rgba(12,17,32,1)" : "rgba(12,17,32,0.7)", border: `1px solid ${activeStep === i ? step.accent + "45" : step.border.replace("0.22","0.14")}`, boxShadow: activeStep === i ? `0 0 0 1px ${step.accent}20,0 20px 60px rgba(0,0,0,0.5),0 0 40px ${step.glow}` : "0 4px 20px rgba(0,0,0,0.25)", transform: activeStep === i ? "translateY(-6px)" : "translateY(0)" }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl transition-colors duration-300" style={{ borderColor: activeStep === i ? step.accent : step.border.replace("0.22","0.12") }} />
                <div className="text-[11px] font-mono font-bold tracking-widest transition-colors duration-300" style={{ color: activeStep === i ? step.accent : "rgba(107,122,153,0.6)" }}>{step.num}</div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300" style={{ background: step.glow, borderColor: activeStep === i ? step.accent + "50" : step.border.replace("0.22","0.12"), color: step.accent, boxShadow: activeStep === i ? `0 0 24px ${step.glow}` : "none" }}>{step.icon}</div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 font-mono transition-colors duration-300" style={{ color: activeStep === i ? step.accent : step.accent + "80" }}>{step.label}</p>
                  <h3 className="text-[15px] font-bold text-white mb-2 leading-snug" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>{step.heading}</h3>
                  <p className="text-[13px] leading-[1.7] text-[rgba(107,122,153,1)]" style={{ fontFamily: "Inter, sans-serif" }}>{step.body}</p>
                </div>
                <div className="absolute bottom-0 left-6 right-6 h-px transition-opacity duration-300" style={{ background: `linear-gradient(90deg,transparent,${step.accent},transparent)`, opacity: activeStep === i ? 1 : 0 }} />
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex items-start pt-12 shrink-0 w-6">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <line x1="0" y1="6" x2="20" y2="6" stroke={activeStep === i || activeStep === i + 1 ? "#00c8f0" : "rgba(255,255,255,0.08)"} strokeWidth="1" strokeDasharray="3 2" style={{ transition: "stroke 0.3s" }} />
                    <path d="M17 3L21 6L17 9" stroke={activeStep === i || activeStep === i + 1 ? "#00c8f0" : "rgba(255,255,255,0.08)"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ transition: "stroke 0.3s" }} />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="flex md:hidden flex-col gap-0 mb-12 relative">
          <div className="absolute left-[19px] top-10 bottom-10 w-px" style={{ background: "linear-gradient(180deg,#00c8f0,#7b61ff,#00e6a0,#ffa040)", opacity: 0.25 }} />
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 z-10" style={{ background: step.glow, borderColor: step.border, color: step.accent, boxShadow: `0 0 16px ${step.glow}` }}>{step.icon}</div>
              <div className="flex-1 rounded-2xl p-5 border" style={{ background: "rgba(12,17,32,0.8)", borderColor: step.border.replace("0.22","0.16") }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold" style={{ color: step.accent }}>{step.num}</span>
                  <span className="w-px h-3 bg-[rgba(255,255,255,0.1)]" />
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase font-mono" style={{ color: step.accent + "90" }}>{step.label}</span>
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>{step.heading}</h3>
                <p className="text-[13px] text-[rgba(107,122,153,1)] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why callout */}
        <div className="rounded-2xl p-8 md:p-10 border relative overflow-hidden" style={{ background: "linear-gradient(135deg,rgba(12,17,32,0.95),rgba(8,12,24,0.95))", borderColor: "rgba(0,200,240,0.14)", boxShadow: "0 0 0 1px rgba(0,200,240,0.06),0 32px 80px rgba(0,0,0,0.4)" }}>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {[
              { icon: "🏫", title: "We come to you", body: "Our instructors travel to your campus. No need to send students anywhere — the lab comes to the classroom.", accent: "#00c8f0" },
              { icon: "📐", title: "Custom to your school", body: "Every program is designed around your student levels, subject needs and available facilities — not a one-size template.", accent: "#7b61ff" },
              { icon: "🏆", title: "Students build real things", body: "Programs end with student-built projects — functional robots, working sensors, trained AI models. Real outcomes, not theory.", accent: "#00e6a0" },
            ].map(({ icon, title, body, accent }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 border mt-0.5" style={{ background: accent === "#00c8f0" ? "rgba(0,200,240,0.1)" : accent === "#7b61ff" ? "rgba(123,97,255,0.1)" : "rgba(0,230,160,0.1)", borderColor: accent + "30" }}>{icon}</div>
                <div>
                  <h4 className="text-[14px] font-bold text-white mb-1.5" style={{ fontFamily: "Manrope, sans-serif" }}>{title}</h4>
                  <p className="text-[13px] text-[rgba(107,122,153,1)] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>{body}</p>
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
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2L12 7H17L13 10.5L14.5 16L10 13L5.5 16L7 10.5L3 7H8L10 2Z" /></svg>, title: "Hands-on Learning", desc: "Students learn by building. Every session ends with a tangible outcome — not a slide deck.", accent: "#00c8f0" },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="16" height="11" rx="2" /><line x1="10" y1="14" x2="10" y2="18" /><line x1="6" y1="18" x2="14" y2="18" /><circle cx="10" cy="8.5" r="2" /></svg>, title: "Industry-Relevant Skills", desc: "Arduino, Python, MQTT, TensorFlow — tools used by real engineers, taught to students.", accent: "#7b61ff" },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h14M3 10h10M3 14h6" /><circle cx="16" cy="14" r="3" /><path d="M16 12.5v1.5l1 1" /></svg>, title: "Project-Based Education", desc: "Every concept connects directly to a practical project. Theory follows practice, not the other way.", accent: "#00e6a0" },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="7" r="3.5" /><path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" /><line x1="14" y1="3" x2="17" y2="3" /><line x1="15.5" y1="1.5" x2="15.5" y2="4.5" /></svg>, title: "Experienced Mentorship", desc: "Guidance from technology practitioners who have built real systems — not just educators.", accent: "#ffa040" },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2c0 0-7 4-7 9a7 7 0 0 0 14 0c0-5-7-9-7-9Z" /><path d="M10 2v11M6.5 8.5c1 1 2.5 2 3.5 2.5" /></svg>, title: "Innovation Culture", desc: "Students are encouraged to experiment, fail fast and iterate. The lab is a safe space to explore.", accent: "#00c8f0" },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h14v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /><path d="M7 7V5a3 3 0 0 1 6 0v2" /><line x1="10" y1="11" x2="10" y2="14" /><circle cx="10" cy="10.5" r="0.5" fill="currentColor" /></svg>, title: "Long-Term Partnership", desc: "Programs designed to grow with your institution — expanding topics, cohorts and complexity year on year.", accent: "#7b61ff" },
];

function WhyGurukulSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, var(--background) 0%, #070b16 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,97,255,0.2)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.022) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.04),rgba(123,97,255,0.04),transparent 75%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-5">
            <SectionEyebrow label="Why Gurukul Innovation Academy" color="#7b61ff" />
          </div>
          <h2
            className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold text-white leading-tight tracking-[-0.02em] mb-4"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            What makes us{" "}
            <span style={{ background: "linear-gradient(135deg,#7b61ff,#00c8f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              different.
            </span>
          </h2>
          <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]" style={{ fontFamily: "Inter, sans-serif" }}>
            We're not a curriculum provider or an online platform. We're a technology team that builds partnerships, shows up in person, and stays invested in student outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_FEATURES.map((feat, i) => {
            const bg   = feat.accent === "#00c8f0" ? "rgba(0,200,240,0.08)"  : feat.accent === "#7b61ff" ? "rgba(123,97,255,0.08)"  : feat.accent === "#00e6a0" ? "rgba(0,230,160,0.08)"  : "rgba(255,160,64,0.08)";
            const bdr  = feat.accent === "#00c8f0" ? "rgba(0,200,240,0.18)"  : feat.accent === "#7b61ff" ? "rgba(123,97,255,0.18)"  : feat.accent === "#00e6a0" ? "rgba(0,230,160,0.18)"  : "rgba(255,160,64,0.18)";
            return (
              <div
                key={feat.title}
                className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden"
                style={{ background: "rgba(12,17,32,0.7)", borderColor: bdr.replace("0.18","0.12") }}
              >
                {/* Hover fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(ellipse at top left,${bg},transparent 70%)` }} />
                {/* Number watermark */}
                <div className="absolute top-4 right-5 text-[11px] font-mono opacity-20" style={{ color: feat.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Corner */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl transition-colors duration-300" style={{ borderColor: `${feat.accent}30` }} />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg, borderColor: bdr.replace("0.18","0.14"), color: feat.accent, boxShadow: `0 0 0 0 ${feat.accent}` }}
                >
                  {feat.icon}
                </div>

                <h3
                  className="text-[15px] font-bold text-white mb-2.5 leading-snug"
                  style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-[13px] text-[rgba(107,122,153,1)] leading-[1.7]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {feat.desc}
                </p>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg,transparent,${feat.accent}60,transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 4. MAIN CTA BANNER ──────────────────────────────────────────────────────

function MainCTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#020509" }}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.4) 30%,rgba(123,97,255,0.4) 70%,transparent)" }} />

      {/* Dense grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.03) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.08) 0%,rgba(123,97,255,0.06) 45%,transparent 70%)" }} />

      {/* Circuit traces */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="xMidYMid slice">
        <line x1="0" y1="120" x2="200" y2="120" stroke="#00c8f0" strokeWidth="0.8" strokeDasharray="6 4" />
        <line x1="200" y1="120" x2="200" y2="250" stroke="#00c8f0" strokeWidth="0.8" />
        <circle cx="200" cy="120" r="4" fill="#00c8f0" />
        <circle cx="200" cy="250" r="3" fill="#00c8f0" />
        <line x1="1440" y1="150" x2="1240" y2="150" stroke="#7b61ff" strokeWidth="0.8" strokeDasharray="6 4" />
        <line x1="1240" y1="150" x2="1240" y2="300" stroke="#7b61ff" strokeWidth="0.8" />
        <circle cx="1240" cy="150" r="4" fill="#7b61ff" />
        <circle cx="1240" cy="300" r="3" fill="#7b61ff" />
        <line x1="0" y1="380" x2="120" y2="380" stroke="#00e6a0" strokeWidth="0.8" strokeDasharray="4 4" />
        <line x1="1440" y1="360" x2="1320" y2="360" stroke="#ffa040" strokeWidth="0.8" strokeDasharray="4 4" />
      </svg>

      {/* Floating nodes */}
      {[
        { top: "20%", left: "8%",  color: "#00c8f0", delay: "0s" },
        { top: "70%", left: "5%",  color: "#7b61ff", delay: "1s" },
        { top: "30%", right: "7%", color: "#00c8f0", delay: "0.5s" },
        { top: "75%", right: "9%", color: "#00e6a0", delay: "1.5s" },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute w-[5px] h-[5px] rounded-full"
          style={{ ...n, background: n.color, boxShadow: `0 0 10px 3px ${n.color}80`, animation: `pulse-glow 2.5s ease-in-out infinite ${n.delay}` } as React.CSSProperties}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border" style={{ background: "rgba(0,200,240,0.06)", borderColor: "rgba(0,200,240,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 3px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c8f0] uppercase font-mono">Ready to Start?</span>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-white leading-tight tracking-[-0.03em] mb-5"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
        >
          Let's build the next{" "}
          <span style={{ background: "linear-gradient(135deg,#00c8f0 0%,#7b61ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 24px rgba(0,200,240,0.3))" }}>
            generation
          </span>{" "}
          of innovators.
        </h2>

        <p
          className="text-[16px] text-[rgba(107,122,153,1)] leading-[1.8] max-w-xl mx-auto mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Bring Robotics, IoT, AI and STEM education to your institution. We design, deliver and build — alongside your students.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="px-9 py-4 rounded-xl text-[15px] font-bold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_40px_rgba(0,200,240,0.5)] active:scale-[0.97] transition-all duration-200 inline-flex items-center gap-2.5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Partner With Us
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link
            to="/contact"
            className="px-9 py-4 rounded-xl text-[15px] font-semibold border border-[rgba(0,200,240,0.28)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] hover:border-[rgba(0,200,240,0.45)] active:scale-[0.97] transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {[
            { icon: "✓", text: "Free initial consultation" },
            { icon: "✓", text: "No long-term lock-in" },
            { icon: "✓", text: "Programs for all age groups" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-[#00c8f0]">{icon}</span>
              <span className="text-[12.5px] text-[rgba(107,122,153,0.8)]" style={{ fontFamily: "Inter, sans-serif" }}>{text}</span>
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
