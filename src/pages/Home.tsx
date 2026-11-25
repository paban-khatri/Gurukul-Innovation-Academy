import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, Eyebrow, GradientText } from "../components/ui";

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

function CircuitOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: "var(--circuit-opacity)" }}
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <line x1="0" y1="120" x2="280" y2="120" stroke="var(--circuit-primary)" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="0" y1="320" x2="180" y2="320" stroke="var(--circuit-secondary)" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="520" y1="80" x2="800" y2="80" stroke="var(--circuit-primary)" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="600" y1="420" x2="800" y2="420" stroke="var(--circuit-secondary)" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="280" y1="0" x2="280" y2="220" stroke="var(--circuit-primary)" strokeWidth="0.8" />
      <line x1="280" y1="220" x2="380" y2="320" stroke="var(--circuit-primary)" strokeWidth="0.8" />
      <line x1="380" y1="320" x2="380" y2="600" stroke="var(--circuit-primary)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="520" y1="0" x2="520" y2="80" stroke="var(--circuit-secondary)" strokeWidth="0.8" />
      <line x1="600" y1="80" x2="600" y2="420" stroke="var(--circuit-secondary)" strokeWidth="0.8" />
      <circle cx="280" cy="120" r="4" fill="var(--circuit-primary)" opacity="0.8" />
      <circle cx="280" cy="220" r="3" fill="var(--circuit-primary)" opacity="0.6" />
      <circle cx="380" cy="320" r="4" fill="var(--circuit-primary)" opacity="0.8" />
      <circle cx="520" cy="80" r="4" fill="var(--circuit-secondary)" opacity="0.8" />
      <circle cx="600" cy="80" r="3" fill="var(--circuit-secondary)" opacity="0.6" />
      <circle cx="600" cy="420" r="4" fill="var(--circuit-secondary)" opacity="0.8" />
      <circle cx="180" cy="320" r="3" fill="var(--circuit-secondary)" opacity="0.6" />
    </svg>
  );
}

const FLOAT_CARDS = [
  {
    animClass: "float",
    posStyle: { top: "-20px", left: "-16px" },
    icon: "🤖",
    label: "Robotics",
    sub: "Line-follower · Active",
    border: "var(--cat-cyan-border)",
    bg: "var(--cat-cyan-soft)",
  },
  {
    animClass: "float",
    posStyle: { top: "-16px", right: "-16px", animationDelay: "0.8s" },
    icon: "🧠",
    label: "AI Model",
    sub: "Training · 94.2% acc",
    border: "var(--cat-violet-border)",
    bg: "var(--cat-violet-soft)",
  },
  {
    animClass: "float-down",
    posStyle: { bottom: "-32px", left: "-16px", animationDelay: "1.6s" },
    icon: "🎓",
    label: "Students Trained",
    sub: "2,400+ active",
    border: "var(--cat-emerald-border)",
    bg: "var(--cat-emerald-soft)",
  },
  {
    animClass: "float-down",
    posStyle: { bottom: "-32px", right: "-16px", animationDelay: "1.1s" },
    icon: "📡",
    label: "IoT Nodes",
    sub: "24 sensors online",
    border: "var(--cat-cyan-border)",
    bg: "var(--cat-cyan-soft)",
  },
];

function TechComposition() {
  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center">
      <div
        className="absolute top-8 right-8 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-soft)" }}
      />
      <div
        className="absolute bottom-8 left-8 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-secondary-soft)" }}
      />
      <div className="relative w-full max-w-[460px] xl:max-w-[520px] mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden border"
          style={{
            background: "var(--bg-card-solid)",
            borderColor: "var(--accent-border)",
            boxShadow: "var(--shadow-elevated)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl z-10"
            style={{ borderColor: "var(--accent)" }}
          />
          <div
            className="absolute top-0 right-0 w-5 h-5 border-t border-r rounded-tr-2xl z-10"
            style={{ borderColor: "var(--accent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-5 h-5 border-b border-l rounded-bl-2xl z-10"
            style={{ borderColor: "var(--accent-secondary)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-5 h-5 border-b border-r rounded-br-2xl z-10"
            style={{ borderColor: "var(--accent-secondary)" }}
          />
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=520&fit=crop&auto=format&q=85"
            alt="Circuit board technology"
            className="w-full object-cover"
            style={{ aspectRatio: "4/3", opacity: "var(--hero-image-opacity)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--image-overlay-bottom)" }}
          />
          <div className="absolute bottom-6 left-0 right-0 px-4 flex items-end justify-between pointer-events-none">
            <div
              className="flex items-center gap-2 backdrop-blur-md border rounded-xl px-3 py-2"
              style={{
                background: "var(--image-badge-bg)",
                borderColor: "var(--border-default)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--status-success)" }}
              />
              <span
                className="text-[11px] font-mono font-medium"
                style={{ color: "var(--image-badge-text)" }}
              >
                INNOVATION LAB · ACTIVE
              </span>
            </div>
            <div
              className="backdrop-blur-md border rounded-xl px-3 py-2"
              style={{
                background: "var(--image-badge-bg)",
                borderColor: "var(--border-default)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span
                className="text-[11px] font-mono font-medium"
                style={{ color: "var(--accent-secondary-text)" }}
              >
                Sindhuli, NEPAL
              </span>
            </div>
          </div>
        </div>

        {FLOAT_CARDS.map(({ animClass, posStyle, icon, label, sub, border, bg }) => (
          <div
            key={label}
            className={`absolute backdrop-blur-md rounded-xl p-3 z-20 ${animClass}`}
            style={{
              background: "var(--bg-glass)",
              border: `1px solid ${border}`,
              boxShadow: "var(--shadow-card)",
              ...(posStyle as React.CSSProperties),
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base border"
                style={{ background: bg, borderColor: border }}
              >
                {icon}
              </div>
              <div>
                <p
                  className="text-[11.5px] font-semibold leading-none mb-0.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {label}
                </p>
                <p
                  className="text-[10.5px] font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {sub}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute top-12 right-12 w-[5px] h-[5px] rounded-full node-pulse"
        style={{ background: "var(--accent)", boxShadow: "var(--glow-node)" }}
      />
      <div
        className="absolute top-1/3 right-4 w-[5px] h-[5px] rounded-full node-pulse"
        style={{
          background: "var(--accent-secondary)",
          animationDelay: "1s",
        }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-bg)" }}
      />
      <CircuitOverlay />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, var(--bg-primary), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 sm:pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border backdrop-blur-sm mb-5 sm:mb-6"
                style={{
                  borderColor: "var(--accent-border)",
                  background: "var(--accent-soft)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full node-pulse"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "var(--glow-node)",
                  }}
                />
                <span
                  className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] uppercase font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  Education · Technology · Innovation
                </span>
              </div>
              <h1 className="type-hero mb-3 sm:mb-4">
                Learn. <GradientText>Build.</GradientText> Innovate.
              </h1>
              <p className="type-body-lg font-semibold">
                Empowering students with Robotics, IoT, AI and STEM through hands-on technology education.
              </p>
            </div>

            <p className="type-body max-w-lg">
              Gurukul Innovation Academy partners with schools and colleges to bring practical technology education into the classroom — while building innovative projects through research, experimentation and prototyping.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/programs"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-[14px] btn-primary inline-flex items-center gap-2 focus-ring"
              >
                Explore Programs <ArrowRightIcon />
              </Link>
              <Link
                to="/partners"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-[14px] btn-secondary inline-flex items-center focus-ring"
              >
                Partner With Us
              </Link>
            </div>

            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 border-t"
              style={{ borderColor: "var(--divider-subtle)" }}
            >
              {[
                { value: "2,400+", label: "Students" },
                { value: "48", label: "Partner Schools" },
                { value: "120+", label: "Projects Built" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className="text-sm sm:text-base font-extrabold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {value}
                  </span>
                  <span className="type-caption">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <TechComposition />
          </div>
        </div>

        {/* Mobile & Tablet hero showcase */}
        <div className="mt-8 sm:mt-10 lg:hidden flex flex-col gap-3">
          <div
            className="rounded-2xl overflow-hidden border relative"
            style={{
              background: "var(--bg-card-solid)",
              borderColor: "var(--accent-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-2xl z-10"
              style={{ borderColor: "var(--accent)" }}
            />
            <div
              className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-2xl z-10"
              style={{ borderColor: "var(--accent)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl-2xl z-10"
              style={{ borderColor: "var(--accent-secondary)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br-2xl z-10"
              style={{ borderColor: "var(--accent-secondary)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop&auto=format&q=85"
              alt="Technology laboratory"
              className="w-full object-cover"
              style={{ aspectRatio: "16/9", opacity: "var(--hero-image-opacity)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "var(--image-overlay-bottom)" }}
            />
            <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-end justify-between gap-2">
              <div
                className="flex items-center gap-1.5 sm:gap-2 backdrop-blur-md border rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2"
                style={{
                  background: "var(--image-badge-bg)",
                  borderColor: "var(--border-default)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                  style={{ background: "var(--status-success)" }}
                />
                <span
                  className="text-[10px] sm:text-[11px] font-mono font-medium"
                  style={{ color: "var(--image-badge-text)" }}
                >
                  INNOVATION LAB · ACTIVE
                </span>
              </div>
              <div
                className="backdrop-blur-md border rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2"
                style={{
                  background: "var(--image-badge-bg)",
                  borderColor: "var(--border-default)",
                }}
              >
                <span
                  className="text-[10px] sm:text-[11px] font-mono font-medium"
                  style={{ color: "var(--accent-secondary-text)" }}
                >
                  Sindhuli, NEPAL
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {FLOAT_CARDS.map(({ icon, label, sub, border, bg }) => (
              <div
                key={label}
                className="surface-card rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5"
                style={{ borderColor: border }}
              >
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-sm sm:text-base border shrink-0"
                  style={{ background: bg, borderColor: border }}
                >
                  {icon}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[11px] font-semibold leading-tight truncate mb-0.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[10px] font-mono truncate"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-14 lg:mt-20">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <span
              className="text-[11px] font-mono tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Scroll
            </span>
            <div
              className="w-[1px] h-8"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. STATS STRIP ───────────────────────────────────────────────────────────

function useCountUp(target: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);
  return count;
}

const STATS = [
  { value: 2400, suffix: "+", label: "Students Trained", accent: "var(--cat-cyan)" },
  { value: 48, suffix: "", label: "Partner Schools", accent: "var(--cat-violet)" },
  { value: 120, suffix: "+", label: "Projects Built", accent: "var(--cat-emerald)" },
  { value: 7, suffix: "", label: "Districts Reached", accent: "var(--cat-amber)" },
];

function StatItem({
  stat,
  started,
}: {
  stat: (typeof STATS)[0];
  started: boolean;
}) {
  const count = useCountUp(stat.value, started);
  return (
    <div className="flex flex-col items-center gap-1.5 text-center px-4 py-2">
      <div
        className="text-3xl xl:text-4xl font-extrabold tabular-nums leading-none"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          color: stat.accent,
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="type-caption font-medium">{stat.label}</div>
    </div>
  );
}

function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-10 overflow-hidden border-y"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x"
          style={{ borderColor: "var(--divider-subtle)" }}
        >
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 3. APPROACH ──────────────────────────────────────────────────────────────

function ApproachSection() {
  const highlights = [
    {
      icon: "🛠️",
      title: "Hands-on Learning",
      description:
        "Students build real working prototypes — robots, sensors, apps. Every lesson ends with something tangible.",
      color: "var(--cat-cyan)",
      soft: "var(--cat-cyan-soft)",
      border: "var(--cat-cyan-border)",
    },
    {
      icon: "⚙️",
      title: "Real Projects",
      description:
        "From autonomous robots to smart greenhouse systems — genuine engineering challenges with real-world impact.",
      color: "var(--cat-violet)",
      soft: "var(--cat-violet-soft)",
      border: "var(--cat-violet-border)",
    },
    {
      icon: "🚀",
      title: "Future Skills",
      description:
        "Robotics, AI, IoT and programming that prepare students for technology careers — now and for the decade ahead.",
      color: "var(--cat-emerald)",
      soft: "var(--cat-emerald-soft)",
      border: "var(--cat-emerald-border)",
    },
  ];
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Eyebrow label="Our Approach" center />
          <h2 className="type-section mt-5 mb-4">
            Turning classrooms into <GradientText>innovation spaces.</GradientText>
          </h2>
          <p className="type-body">
            Technology is best learned by building it. We work with educational institutions to provide practical, project-based learning that moves students from consuming technology to creating it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map(({ icon, title, description, color, soft, border }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl p-7 surface-card surface-card-hover cursor-default overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-10 h-10 border-t border-l rounded-tl-2xl opacity-60"
                style={{ borderColor: color }}
              />
              <div
                className="absolute bottom-0 right-0 w-10 h-10 border-b border-r rounded-br-2xl opacity-60"
                style={{ borderColor: color }}
              />
              <div
                className="absolute top-5 right-5 text-[11px] font-mono opacity-40"
                style={{ color }}
              >
                0{i + 1}
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border transition-transform group-hover:scale-105"
                style={{ background: soft, borderColor: border }}
              >
                {icon}
              </div>
              <h3 className="type-card-title mb-2.5">{title}</h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--type-card)",
                }}
              >
                {description}
              </p>
              <div
                className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. PROGRAMS PREVIEW ─────────────────────────────────────────────────────

const PROGRAM_PREVIEWS = [
  {
    icon: "🤖",
    title: "Robotics",
    sub: "Build. Program. Automate.",
    desc: "From basic circuits to autonomous machines — hands-on robotics that actually move.",
    accent: "var(--cat-cyan)",
    bg: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
  },
  {
    icon: "📡",
    title: "IoT",
    sub: "Connect. Sense. Respond.",
    desc: "Connect devices, collect data and build intelligent systems that bridge physical and digital worlds.",
    accent: "var(--cat-violet)",
    bg: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
  },
  {
    icon: "🧠",
    title: "AI",
    sub: "Train. Predict. Create.",
    desc: "Practical experiments with machine learning and computer vision — no PhD required.",
    accent: "var(--cat-emerald)",
    bg: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
  },
  {
    icon: "⭐",
    title: "STEM & Innovation",
    sub: "Design. Engineer. Solve.",
    desc: "Engineering thinking, design and problem-solving for the next generation of creators.",
    accent: "var(--cat-amber)",
    bg: "var(--cat-amber-soft)",
    border: "var(--cat-amber-border)",
  },
];

function ProgramsPreview() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden border-t"
      style={{
        background: "var(--gradient-section)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow label="Technology Programs" />
            <h2 className="type-section mt-4 mb-2">
              What students <GradientText>learn and build.</GradientText>
            </h2>
            <p className="type-body">
              Four programs. All project-based. All hands-on.
            </p>
          </div>
          <Link
            to="/programs"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] btn-secondary focus-ring"
          >
            All Programs <ArrowRightIcon size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {PROGRAM_PREVIEWS.map((p) => (
            <Link
              to="/programs"
              key={p.title}
              className="group relative rounded-2xl p-6 surface-card surface-card-hover flex flex-col gap-4 focus-ring"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border group-hover:scale-105 transition-transform"
                style={{ background: p.bg, borderColor: p.border }}
              >
                {p.icon}
              </div>
              <div>
                <p
                  className="text-[10.5px] font-mono font-bold tracking-widest uppercase mb-1"
                  style={{ color: p.accent }}
                >
                  {p.sub}
                </p>
                <h3 className="type-card-title mb-2">{p.title}</h3>
                <p
                  className="text-[13.5px] leading-[1.65]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--type-card)",
                  }}
                >
                  {p.desc}
                </p>
              </div>
              <div
                className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold"
                style={{ color: p.accent, fontFamily: "var(--font-body)" }}
              >
                Explore
                <span className="group-hover:translate-x-1 transition-transform inline-flex">
                  <ArrowRightIcon size={12} />
                </span>
              </div>
              <div
                className="absolute bottom-0 left-5 right-5 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INNOVATION LAB TEASER ─────────────────────────────────────────────────

function LabTeaser() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden border-y"
      style={{
        background: "var(--bg-deep)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid-dense" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <div
              className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-xl border"
              style={{
                background: "var(--accent-soft)",
                borderColor: "var(--accent-border)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full node-pulse"
                style={{
                  background: "var(--accent)",
                  boxShadow: "var(--glow-node)",
                }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono"
                style={{ color: "var(--accent)" }}
              >
                Gurukul Innovation Lab
              </span>
            </div>

            <div>
              <h2 className="type-section mb-4">
                Where ideas become <GradientText>prototypes.</GradientText>
              </h2>
              <p className="type-body">
                Our Innovation Lab is where we research, experiment and build. Independent of any curriculum — just technology, problems and solutions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "120+", label: "Prototypes", c: "var(--cat-cyan)" },
                { val: "18", label: "Active Projects", c: "var(--cat-violet)" },
                { val: "4", label: "Research Tracks", c: "var(--cat-emerald)" },
              ].map(({ val, label, c }) => (
                <div key={label}>
                  <div
                    className="text-2xl font-extrabold leading-none mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: c }}
                  >
                    {val}
                  </div>
                  <div className="type-caption">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/innovation-lab"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] btn-primary focus-ring"
              >
                Explore Lab <ArrowRightIcon />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] btn-secondary focus-ring"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right — terminal preview (intentionally dark console across themes) */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                background: "var(--bg-terminal)",
                borderColor: "var(--border-strong)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <div
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 border-b"
                style={{
                  borderColor: "rgba(148, 163, 184, 0.16)",
                  background: "var(--bg-terminal-header)",
                }}
              >
                <div className="flex gap-1.5 shrink-0" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-mono text-[#94a3b8] flex-1 text-center truncate">
                  gurukul-lab ~ innovation-terminal
                </span>
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-2.5 sm:gap-3 min-h-[280px] sm:min-h-[300px]">
                {[
                  "$ cd /lab/projects/active",
                  "$ ls -la --sort=modified",
                ].map((prompt) => (
                  <div
                    key={prompt}
                    className="flex items-start gap-2 text-[11.5px] sm:text-[12px] font-mono"
                  >
                    <span className="text-[#22d3ee]">$</span>
                    <span className="text-[#e2e8f0]">
                      {prompt.slice(prompt.indexOf(" ") + 1)}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col gap-1.5 pl-3 sm:pl-4 border-l border-[rgba(34,211,238,0.2)] my-1">
                  {[
                    { name: "autonomous-robot-v3/", size: "4.2MB", mod: "2s ago", c: "#22d3ee" },
                    { name: "iot-mesh-network/", size: "1.8MB", mod: "14m ago", c: "#34d399" },
                    { name: "edge-ai-vision/", size: "6.1MB", mod: "2h ago", c: "#93c5fd" },
                    { name: "smart-agri-hydroponics/", size: "940KB", mod: "1d ago", c: "#fbbf24" },
                  ].map(({ name, size, mod, c }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 sm:gap-3 text-[11px] font-mono"
                    >
                      <span style={{ color: c }}>▸</span>
                      <span className="truncate text-[#e2e8f0] flex-1">
                        {name}
                      </span>
                      <span className="shrink-0 text-[#94a3b8]">{size}</span>
                      <span
                        className="shrink-0 hidden sm:inline text-[#94a3b8]"
                        style={{ minWidth: 48, textAlign: "right" }}
                      >
                        {mod}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-[11.5px] sm:text-[12px] font-mono pt-1">
                  <span className="text-[#22d3ee]">$</span>
                  <span className="text-[#e2e8f0]">git status --short</span>
                </div>
                <div className="text-[11px] font-mono pl-3 sm:pl-4 flex flex-col gap-0.5 text-[#34d399]">
                  <span>M  src/navigation/slam_core.py</span>
                  <span>A  models/yolov8_custom.pt</span>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pt-3 mt-auto border-t border-[rgba(148,163,184,0.16)]">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shrink-0 node-pulse" />
                    <span className="text-[11px] font-mono truncate text-[#34d399]">
                      lab-session active · 3 online
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono text-[#94a3b8] shrink-0">
                    Sindhuli node
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 hidden lg:flex items-center gap-3 rounded-2xl px-4 py-3.5 border float"
              style={{
                background: "var(--bg-card-solid)",
                borderColor: "var(--accent-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span className="text-2xl">🤖</span>
              <div>
                <p
                  className="text-[12px] font-semibold leading-none mb-0.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  Robot v3.2
                </p>
                <p
                  className="text-[10.5px] font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  SLAM · LiDAR · ROS2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. PROJECTS SNAPSHOT ─────────────────────────────────────────────────────

const SNAP_PROJECTS = [
  {
    title: "Smart Home IoT",
    tag: "IoT",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=440&fit=crop&auto=format&q=80",
    desc: "Connected devices for smarter living.",
    statusColor: "var(--cat-violet)",
    status: "Deployed",
  },
  {
    title: "Educational Robot",
    tag: "Robotics",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=440&fit=crop&auto=format&q=80",
    desc: "Hands-on robotics platform built for students.",
    statusColor: "var(--cat-cyan)",
    status: "Active",
  },
  {
    title: "AI Vision System",
    tag: "AI",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=700&h=440&fit=crop&auto=format&q=80",
    desc: "Computer vision for real-world applications.",
    statusColor: "var(--cat-amber)",
    status: "Research",
  },
];

function ProjectsSnapshot() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <Eyebrow label="Featured Projects" />
            <h2 className="type-section mt-4">
              Things we're <GradientText>building.</GradientText>
            </h2>
          </div>
          <Link
            to="/projects"
            className="shrink-0 inline-flex items-center gap-2 text-[13.5px] font-semibold hover:underline underline-offset-4 focus-ring rounded"
            style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
          >
            All Projects <ArrowRightIcon size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SNAP_PROJECTS.map((p) => (
            <Link
              to="/projects"
              key={p.title}
              className="group relative rounded-2xl overflow-hidden surface-card surface-card-hover block focus-ring"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  style={{ opacity: "var(--card-image-opacity)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "var(--image-overlay-bottom)" }}
                />
                <div
                  className="absolute top-3 left-3 flex items-center gap-1.5 backdrop-blur-sm border rounded-full px-3 py-1"
                  style={{
                    background: "var(--image-badge-bg)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: p.statusColor }}
                  />
                  <span
                    className="text-[10.5px] font-mono font-bold"
                    style={{ color: p.statusColor }}
                  >
                    {p.status}
                  </span>
                </div>
                <div
                  className="absolute top-3 right-3 backdrop-blur-sm border rounded-full px-2.5 py-1"
                  style={{
                    background: "var(--image-badge-bg)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <span
                    className="text-[10.5px] font-mono font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="type-card-title mb-1.5">{p.title}</h3>
                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--type-card)",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. PARTNERS STRIP ────────────────────────────────────────────────────────

function PartnersStrip() {
  const items = [
    "School A",
    "College B",
    "Institute C",
    "Academy D",
    "University E",
    "School F",
    "Foundation G",
    "College H",
  ];
  return (
    <section
      className="relative py-16 overflow-hidden border-y"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 text-center md:text-left">
            <p
              className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-1"
              style={{ color: "var(--accent)" }}
            >
              Trusted by
            </p>
            <p className="type-caption">Schools &amp; colleges across Nepal</p>
          </div>
          <div
            className="h-10 w-px hidden md:block"
            style={{ background: "var(--border-strong)" }}
          />
          <div className="flex flex-wrap items-center gap-3 flex-1 justify-center md:justify-start">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors cursor-default"
                style={{
                  background: "var(--bg-card-solid)",
                  borderColor: "var(--border-default)",
                }}
              >
                <div
                  className="w-5 h-5 rounded"
                  style={{
                    background: "var(--gradient-brand)",
                    opacity: 0.7,
                  }}
                />
                <span
                  className="text-[12.5px] font-medium"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <Link
            to="/partners"
            className="shrink-0 text-[13px] font-semibold hover:underline underline-offset-4 whitespace-nowrap flex items-center gap-1.5 focus-ring rounded"
            style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
          >
            View all <ArrowRightIcon size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 8. MAIN CTA ─────────────────────────────────────────────────────────────

function HomeCTA() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid-dense" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-bg)" }}
      />

      {/* Ambient nodes */}
      {[
        { t: "20%", l: "5%", c: "var(--cat-cyan)", d: "0s" },
        { t: "70%", l: "4%", c: "var(--cat-violet)", d: "1.2s" },
        { t: "25%", r: "5%", c: "var(--cat-violet)", d: "0.6s" },
        { t: "72%", r: "4%", c: "var(--cat-emerald)", d: "1.8s" },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute w-[5px] h-[5px] rounded-full hidden lg:block node-pulse"
          style={
            {
              top: n.t,
              left: "l" in n ? n.l : undefined,
              right: "r" in n ? n.r : undefined,
              background: n.c,
              animationDelay: n.d,
            } as React.CSSProperties
          }
        />
      ))}

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
          ].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <span
                className="text-[12px] font-bold"
                style={{ color: "var(--accent)" }}
              >
                ✓
              </span>
              <span className="type-caption">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ApproachSection />
      <ProgramsPreview />
      <LabTeaser />
      <ProjectsSnapshot />
      <PartnersStrip />
      <HomeCTA />
    </>
  );
}
