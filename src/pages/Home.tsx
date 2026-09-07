import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

// ─── Reusable primitives ──────────────────────────────────────────────────────

function Eyebrow({ label, color = "#00c8f0", center = false }: { label: string; color?: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}>
      <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 8px 2px ${color}99`, animation: "pulse-glow 2.5s ease-in-out infinite" }} />
      <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color }}>{label}</span>
    </div>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ background: "linear-gradient(135deg,#00c8f0,#7b61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {children}
    </span>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

function CircuitOverlay() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice">
      <line x1="0" y1="120" x2="280" y2="120" stroke="#00c8f0" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="0" y1="320" x2="180" y2="320" stroke="#7b61ff" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="520" y1="80" x2="800" y2="80" stroke="#00c8f0" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="600" y1="420" x2="800" y2="420" stroke="#7b61ff" strokeWidth="0.8" strokeDasharray="6 3" />
      <line x1="280" y1="0" x2="280" y2="220" stroke="#00c8f0" strokeWidth="0.8" />
      <line x1="280" y1="220" x2="380" y2="320" stroke="#00c8f0" strokeWidth="0.8" />
      <line x1="380" y1="320" x2="380" y2="600" stroke="#00c8f0" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="520" y1="0" x2="520" y2="80" stroke="#7b61ff" strokeWidth="0.8" />
      <line x1="600" y1="80" x2="600" y2="420" stroke="#7b61ff" strokeWidth="0.8" />
      <circle cx="280" cy="120" r="4" fill="#00c8f0" opacity="0.8" />
      <circle cx="280" cy="220" r="3" fill="#00c8f0" opacity="0.6" />
      <circle cx="380" cy="320" r="4" fill="#00c8f0" opacity="0.8" />
      <circle cx="520" cy="80" r="4" fill="#7b61ff" opacity="0.8" />
      <circle cx="600" cy="80" r="3" fill="#7b61ff" opacity="0.6" />
      <circle cx="600" cy="420" r="4" fill="#7b61ff" opacity="0.8" />
      <circle cx="180" cy="320" r="3" fill="#7b61ff" opacity="0.6" />
    </svg>
  );
}

const FLOAT_CARDS = [
  { style: { top: "-24px", left: "-24px", animation: "float 5s ease-in-out infinite" }, icon: "🤖", label: "Robotics", sub: "Line-follower · Active", border: "rgba(0,200,240,0.18)", bg: "rgba(0,200,240,0.12)" },
  { style: { top: "-16px", right: "-16px", animation: "float 5.5s ease-in-out infinite 0.8s" }, icon: "🧠", label: "AI Model", sub: "Training · 94.2% acc", border: "rgba(123,97,255,0.18)", bg: "rgba(123,97,255,0.12)" },
  { style: { bottom: "-24px", right: "-24px", animation: "float 6s ease-in-out infinite 1.6s" }, icon: "📡", label: "IoT Nodes", sub: "24 sensors online", border: "rgba(0,200,240,0.18)", bg: "rgba(0,200,240,0.1)" },
];

function TechComposition() {
  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center">
      <div className="absolute top-8 right-8 w-64 h-64 bg-[rgba(0,200,240,0.08)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-48 h-48 bg-[rgba(123,97,255,0.1)] rounded-full blur-3xl pointer-events-none" />
      <div className="relative w-full max-w-[520px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,200,240,0.2)] shadow-[0_0_60px_rgba(0,200,240,0.08),0_24px_80px_rgba(0,0,0,0.6)]" style={{ background: "linear-gradient(135deg,#0c1120,#05080f)" }}>
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#00c8f0] rounded-tl-2xl z-10" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#00c8f0] rounded-tr-2xl z-10" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#7b61ff] rounded-bl-2xl z-10" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#7b61ff] rounded-br-2xl z-10" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=520&fit=crop&auto=format&q=85" alt="Circuit board technology" className="w-full object-cover" style={{ aspectRatio: "4/3", opacity: 0.75 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/40 via-transparent to-transparent" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(0,200,240,0.06),rgba(123,97,255,0.08))" }} />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <div className="flex items-center gap-2 bg-[rgba(5,8,15,0.75)] backdrop-blur-md border border-[rgba(0,200,240,0.15)] rounded-xl px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-[#00e6a0] shadow-[0_0_6px_2px_rgba(0,230,160,0.5)]" />
              <span className="text-[11px] font-mono text-[rgba(232,237,245,0.8)]">INNOVATION LAB · ACTIVE</span>
            </div>
            <div className="bg-[rgba(5,8,15,0.75)] backdrop-blur-md border border-[rgba(123,97,255,0.2)] rounded-xl px-3 py-2">
              <span className="text-[11px] font-mono text-[#a08fff]">KATHMANDU, NEPAL</span>
            </div>
          </div>
        </div>
        {FLOAT_CARDS.map(({ style, icon, label, sub, border, bg }) => (
          <div key={label} className="absolute bg-[rgba(12,17,32,0.92)] backdrop-blur-md rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ border: `1px solid ${border}`, ...style as React.CSSProperties }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base border" style={{ background: bg, borderColor: border }}>{icon}</div>
              <div>
                <p className="text-[11px] font-semibold text-white leading-none mb-0.5" style={{ fontFamily: "Manrope, sans-serif" }}>{label}</p>
                <p className="text-[10px] text-[rgba(107,122,153,1)] font-mono">{sub}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute -bottom-4 -left-4 bg-[rgba(12,17,32,0.92)] backdrop-blur-md border border-[rgba(0,230,160,0.2)] rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ animation: "float 7s ease-in-out infinite 2.4s" }}>
          <div className="text-xl font-extrabold text-[#00e6a0] leading-none" style={{ fontFamily: "Manrope, sans-serif" }}>2,400+</div>
          <div className="text-[10px] text-[rgba(107,122,153,1)] font-mono mt-0.5">Students Trained</div>
        </div>
      </div>
      <div className="absolute top-12 right-12 w-[5px] h-[5px] rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
      <div className="absolute top-1/3 right-4 w-[5px] h-[5px] rounded-full bg-[#7b61ff]" style={{ boxShadow: "0 0 8px 2px rgba(123,97,255,0.6)", animation: "pulse-glow 3s ease-in-out infinite 1s" }} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.035) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[rgba(0,200,240,0.04)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[rgba(123,97,255,0.05)] rounded-full blur-[80px] pointer-events-none" />
      <CircuitOverlay />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-7 lg:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(0,200,240,0.25)] bg-[rgba(0,200,240,0.07)] backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 6px 2px rgba(0,200,240,0.5)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#00c8f0] uppercase font-mono">Education · Technology · Innovation</span>
              </div>
              <h1 className="text-5xl sm:text-6xl xl:text-[72px] font-extrabold leading-[1.0] tracking-[-0.025em] text-white mb-4" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
                Learn.{" "}<GradientText>Build.</GradientText>{" "}Innovate.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[rgba(232,237,245,0.75)] leading-snug" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
                Empowering students with Robotics, IoT, AI and STEM through hands-on technology education.
              </p>
            </div>
            <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.75] max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Gurukul Innovation Academy partners with schools and colleges to bring practical technology education into the classroom — while building innovative projects through research, experimentation and prototyping.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/programs" className="px-7 py-3.5 rounded-xl text-[14px] font-semibold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_28px_rgba(0,200,240,0.45)] active:scale-[0.97] transition-all duration-200 inline-flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Explore Programs <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/partners" className="px-7 py-3.5 rounded-xl text-[14px] font-semibold border border-[rgba(0,200,240,0.3)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] active:scale-[0.97] transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
                Partner With Us
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
              {[{ value: "2,400+", label: "Students" }, { value: "48", label: "Partner Schools" }, { value: "120+", label: "Projects Built" }].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-white" style={{ fontFamily: "Manrope, sans-serif" }}>{value}</span>
                  <span className="text-[12px] text-[rgba(107,122,153,1)]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <TechComposition />
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="mt-10 lg:hidden rounded-2xl overflow-hidden border border-[rgba(0,200,240,0.15)] relative">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&auto=format&q=85" alt="Technology laboratory" className="w-full object-cover opacity-70" style={{ aspectRatio: "16/9" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-[rgba(5,8,15,0.8)] backdrop-blur-md border border-[rgba(0,200,240,0.15)] rounded-xl px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-[#00e6a0]" style={{ boxShadow: "0 0 6px 2px rgba(0,230,160,0.5)" }} />
            <span className="text-[11px] font-mono text-[rgba(232,237,245,0.8)]">INNOVATION LAB · ACTIVE</span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
            <span className="text-[11px] font-mono tracking-widest text-[rgba(107,122,153,1)] uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[rgba(0,200,240,0.6)] to-transparent" />
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
  { value: 2400, suffix: "+", label: "Students Trained",      accent: "#00c8f0" },
  { value: 48,   suffix: "",  label: "Partner Schools",        accent: "#7b61ff" },
  { value: 120,  suffix: "+", label: "Projects Built",         accent: "#00e6a0" },
  { value: 7,    suffix: "",  label: "Districts Reached",      accent: "#ffa040" },
];

function StatItem({ stat, started }: { stat: typeof STATS[0]; started: boolean }) {
  const count = useCountUp(stat.value, started);
  return (
    <div className="flex flex-col items-center gap-1.5 text-center px-4">
      <div className="text-3xl xl:text-4xl font-extrabold tabular-nums leading-none" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, color: stat.accent, textShadow: `0 0 24px ${stat.accent}40` }}>
        {count}{stat.suffix}
      </div>
      <div className="text-[12px] text-[rgba(107,122,153,0.85)]" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
    </div>
  );
}

function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-10 overflow-hidden" style={{ background: "rgba(12,17,32,0.6)", borderTop: "1px solid rgba(0,200,240,0.08)", borderBottom: "1px solid rgba(0,200,240,0.08)" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(0,200,240,0.02),rgba(123,97,255,0.02))" }} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(255,255,255,0.05)]">
          {STATS.map((s) => <StatItem key={s.label} stat={s} started={started} />)}
        </div>
      </div>
    </div>
  );
}

// ─── 3. APPROACH ──────────────────────────────────────────────────────────────

function ApproachSection() {
  const highlights = [
    { icon: "🛠️", title: "Hands-on Learning", description: "Students build real working prototypes — robots, sensors, apps. Every lesson ends with something tangible.", color: "#00c8f0", glow: "rgba(0,200,240,0.1)", border: "rgba(0,200,240,0.18)" },
    { icon: "⚙️", title: "Real Projects", description: "From autonomous robots to smart greenhouse systems — genuine engineering challenges with real-world impact.", color: "#7b61ff", glow: "rgba(123,97,255,0.1)", border: "rgba(123,97,255,0.18)" },
    { icon: "🚀", title: "Future Skills", description: "Robotics, AI, IoT and programming that prepare students for technology careers — now and for the decade ahead.", color: "#00e6a0", glow: "rgba(0,230,160,0.1)", border: "rgba(0,230,160,0.18)" },
  ];
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.18)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Eyebrow label="Our Approach" center />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-[-0.02em] mt-5 mb-4" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
            Turning classrooms into <GradientText>innovation spaces.</GradientText>
          </h2>
          <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]" style={{ fontFamily: "Inter, sans-serif" }}>
            Technology is best learned by building it. We work with educational institutions to provide practical, project-based learning that moves students from consuming technology to creating it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map(({ icon, title, description, color, glow, border }, i) => (
            <div key={title} className="group relative rounded-2xl p-7 bg-[var(--card)] border transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden" style={{ borderColor: border.replace("0.18","0.12") }}>
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l rounded-tl-2xl" style={{ borderColor: color + "50" }} />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r rounded-br-2xl" style={{ borderColor: color + "50" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(ellipse at top left,${glow},transparent 70%)` }} />
              <div className="absolute top-5 right-5 text-[11px] font-mono opacity-20" style={{ color }}>0{i + 1}</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border transition-all group-hover:scale-110" style={{ background: glow, borderColor: border.replace("0.18","0.14") }}>{icon}</div>
              <h3 className="text-[16px] font-bold text-white mb-2.5" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>{title}</h3>
              <p className="text-[13.5px] text-[rgba(107,122,153,1)] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>{description}</p>
              <div className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. PROGRAMS PREVIEW ─────────────────────────────────────────────────────

const PROGRAM_PREVIEWS = [
  { icon: "🤖", title: "Robotics", sub: "Build. Program. Automate.", desc: "From basic circuits to autonomous machines — hands-on robotics that actually move.", accent: "#00c8f0", bg: "rgba(0,200,240,0.1)", border: "rgba(0,200,240,0.18)" },
  { icon: "📡", title: "IoT", sub: "Connect. Sense. Respond.", desc: "Connect devices, collect data and build intelligent systems that bridge physical and digital worlds.", accent: "#7b61ff", bg: "rgba(123,97,255,0.1)", border: "rgba(123,97,255,0.18)" },
  { icon: "🧠", title: "AI", sub: "Train. Predict. Create.", desc: "Practical experiments with machine learning and computer vision — no PhD required.", accent: "#00e6a0", bg: "rgba(0,230,160,0.08)", border: "rgba(0,230,160,0.18)" },
  { icon: "⭐", title: "STEM & Innovation", sub: "Design. Engineer. Solve.", desc: "Engineering thinking, design and problem-solving for the next generation of creators.", accent: "#ffa040", bg: "rgba(255,160,64,0.08)", border: "rgba(255,160,64,0.18)" },
];

function ProgramsPreview() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg,var(--background),#070b16)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,97,255,0.2)] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.03),rgba(123,97,255,0.03),transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow label="Technology Programs" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-[-0.02em] mt-4 mb-2" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
              What students <GradientText>learn and build.</GradientText>
            </h2>
            <p className="text-[14px] text-[rgba(107,122,153,1)]" style={{ fontFamily: "Inter, sans-serif" }}>Four programs. All project-based. All hands-on.</p>
          </div>
          <Link to="/programs" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-[rgba(0,200,240,0.28)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all" style={{ fontFamily: "Inter, sans-serif" }}>
            All Programs <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {PROGRAM_PREVIEWS.map((p) => (
            <Link to="/programs" key={p.title} className="group relative rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg" style={{ background: "rgba(12,17,32,0.7)", borderColor: p.border.replace("0.18","0.12") }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = p.border; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${p.accent}15, 0 20px 48px rgba(0,0,0,0.5), 0 0 32px ${p.bg}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = p.border.replace("0.18","0.12"); (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border group-hover:scale-110 transition-transform" style={{ background: p.bg, borderColor: p.border.replace("0.18","0.14") }}>{p.icon}</div>
              <div>
                <p className="text-[10px] font-mono font-bold tracking-widest uppercase mb-1" style={{ color: p.accent + "90" }}>{p.sub}</p>
                <h3 className="text-[16px] font-bold text-white mb-2" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>{p.title}</h3>
                <p className="text-[13px] text-[rgba(107,122,153,1)] leading-[1.65]" style={{ fontFamily: "Inter, sans-serif" }}>{p.desc}</p>
              </div>
              <div className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all" style={{ color: p.accent, fontFamily: "Inter, sans-serif" }}>
                Explore <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="absolute bottom-0 left-5 right-5 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />
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
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "#020509" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.3) 40%,rgba(123,97,255,0.3) 60%,transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.12)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.028) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.05),rgba(123,97,255,0.04),transparent 72%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-xl border" style={{ background: "rgba(0,200,240,0.06)", borderColor: "rgba(0,200,240,0.2)", boxShadow: "0 0 20px rgba(0,200,240,0.06)" }}>
              <span className="w-2 h-2 rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 3px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c8f0] uppercase font-mono">Gurukul Innovation Lab</span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl xl:text-[46px] font-extrabold text-white leading-tight tracking-[-0.025em] mb-4" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
                Where ideas become <GradientText>prototypes.</GradientText>
              </h2>
              <p className="text-[15px] leading-[1.85] text-[rgba(107,122,153,1)]" style={{ fontFamily: "Inter, sans-serif" }}>
                Our Innovation Lab is where we research, experiment and build. Independent of any curriculum — just technology, problems and solutions.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[{ val: "120+", label: "Prototypes", c: "#00c8f0" }, { val: "18", label: "Active Projects", c: "#7b61ff" }, { val: "4", label: "Research Tracks", c: "#00e6a0" }].map(({ val, label, c }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold leading-none mb-1" style={{ fontFamily: "Manrope, sans-serif", color: c, textShadow: `0 0 16px ${c}50` }}>{val}</div>
                  <div className="text-[11px] text-[rgba(107,122,153,1)]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/innovation-lab" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold transition-all" style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.3)", color: "#00c8f0", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,200,240,0.15)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,200,240,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,200,240,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                Explore Lab <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold border border-[rgba(255,255,255,0.08)] text-[rgba(232,237,245,0.6)] hover:text-white hover:border-[rgba(255,255,255,0.15)] transition-all" style={{ fontFamily: "Inter, sans-serif" }}>
                View Projects
              </Link>
            </div>
          </div>

          {/* Right — terminal preview */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border" style={{ background: "#050810", borderColor: "rgba(0,200,240,0.15)", boxShadow: "0 0 0 1px rgba(0,200,240,0.05),0 32px 80px rgba(0,0,0,0.8)" }}>
              <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(0,200,240,0.1)", background: "rgba(0,200,240,0.03)" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[11px] font-mono text-[rgba(107,122,153,0.7)] flex-1 text-center">gurukul-lab ~ innovation-terminal</span>
              </div>
              <div className="p-5 flex flex-col gap-2 min-h-[200px]">
                {[
                  { prompt: "$ cd /lab/projects/active", color: "rgba(0,200,240,0.5)" },
                  { prompt: "$ ls -la --sort=modified", color: "rgba(0,200,240,0.5)" },
                ].map(({ prompt, color }) => (
                  <div key={prompt} className="flex items-start gap-2 text-[12px] font-mono">
                    <span style={{ color }}>{prompt.split(" ")[0]}</span>
                    <span style={{ color: "rgba(232,237,245,0.65)" }}>{prompt.slice(prompt.indexOf(" ") + 1)}</span>
                  </div>
                ))}
                <div className="flex flex-col gap-1.5 pl-4 border-l border-[rgba(0,200,240,0.12)] my-1">
                  {[{ name: "autonomous-robot-v3/", c: "#00c8f0" }, { name: "iot-mesh-network/", c: "#00e6a0" }, { name: "edge-ai-vision/", c: "#7b61ff" }].map(({ name, c }) => (
                    <div key={name} className="flex items-center gap-3 text-[11px] font-mono">
                      <span style={{ color: c }}>▸</span>
                      <span style={{ color: "rgba(232,237,245,0.7)" }}>{name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e6a0]" style={{ boxShadow: "0 0 6px 2px rgba(0,230,160,0.5)", animation: "pulse-glow 2s ease-in-out infinite" }} />
                  <span className="text-[11px] font-mono" style={{ color: "rgba(0,230,160,0.8)" }}>lab-session active · 3 contributors online</span>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden lg:flex items-center gap-3 rounded-2xl px-4 py-3.5 border" style={{ background: "rgba(5,8,15,0.92)", backdropFilter: "blur(12px)", borderColor: "rgba(0,200,240,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.6)", animation: "float 5s ease-in-out infinite" }}>
              <span className="text-2xl">🤖</span>
              <div>
                <p className="text-[12px] font-semibold text-white leading-none mb-0.5" style={{ fontFamily: "Manrope, sans-serif" }}>Robot v3.2</p>
                <p className="text-[10px] font-mono" style={{ color: "rgba(0,200,240,0.7)" }}>SLAM · LiDAR · ROS2</p>
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
  { title: "Smart Home IoT", tag: "IoT", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=440&fit=crop&auto=format&q=80", desc: "Connected devices for smarter living.", statusColor: "#7b61ff", status: "Deployed" },
  { title: "Educational Robot", tag: "Robotics", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=440&fit=crop&auto=format&q=80", desc: "Hands-on robotics platform built for students.", statusColor: "#00c8f0", status: "Active" },
  { title: "AI Vision System", tag: "AI", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=700&h=440&fit=crop&auto=format&q=80", desc: "Computer vision for real-world applications.", statusColor: "#ffa040", status: "Research" },
];

function ProjectsSnapshot() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.15)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.022) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <Eyebrow label="Featured Projects" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-[-0.02em] mt-4" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
              Things we're <GradientText>building.</GradientText>
            </h2>
          </div>
          <Link to="/projects" className="shrink-0 inline-flex items-center gap-2 text-[13px] font-semibold text-[#00c8f0] hover:underline underline-offset-4" style={{ fontFamily: "Inter, sans-serif" }}>
            All Projects <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SNAP_PROJECTS.map((p) => (
            <div key={p.title} className="group relative rounded-2xl overflow-hidden border border-[rgba(0,200,240,0.1)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(0,200,240,0.22)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] cursor-default">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[rgba(5,8,15,0.82)] backdrop-blur-sm border border-[rgba(255,255,255,0.07)] rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.statusColor, boxShadow: `0 0 6px 2px ${p.statusColor}60` }} />
                  <span className="text-[10px] font-mono font-bold" style={{ color: p.statusColor }}>{p.status}</span>
                </div>
                <div className="absolute top-3 right-3 bg-[rgba(5,8,15,0.82)] backdrop-blur-sm border border-[rgba(0,200,240,0.15)] rounded-full px-2.5 py-1">
                  <span className="text-[10px] font-mono text-[rgba(0,200,240,0.8)]">{p.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-white mb-1.5" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>{p.title}</h3>
                <p className="text-[13px] text-[rgba(107,122,153,1)] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. PARTNERS STRIP ────────────────────────────────────────────────────────

function PartnersStrip() {
  const items = ["School A", "College B", "Institute C", "Academy D", "University E", "School F", "Foundation G", "College H"];
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "rgba(12,17,32,0.5)", borderTop: "1px solid rgba(0,200,240,0.07)", borderBottom: "1px solid rgba(0,200,240,0.07)" }}>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 text-center md:text-left">
            <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-[rgba(0,200,240,0.6)] uppercase mb-1">Trusted by</p>
            <p className="text-[13px] text-[rgba(107,122,153,0.8)]" style={{ fontFamily: "Inter, sans-serif" }}>Schools &amp; colleges across Nepal</p>
          </div>
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-[rgba(0,200,240,0.2)] to-transparent hidden md:block" />
          <div className="flex flex-wrap items-center gap-3 flex-1 justify-center md:justify-start">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.025)] hover:border-[rgba(0,200,240,0.2)] transition-colors cursor-default">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[rgba(0,200,240,0.3)] to-[rgba(123,97,255,0.3)]" />
                <span className="text-[12px] text-[rgba(107,122,153,0.8)]" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
          <Link to="/partners" className="shrink-0 text-[12.5px] font-semibold text-[#00c8f0] hover:underline underline-offset-4 whitespace-nowrap flex items-center gap-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
            View all <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 8. MAIN CTA ─────────────────────────────────────────────────────────────

function HomeCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#020509" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.4) 30%,rgba(123,97,255,0.4) 70%,transparent)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.03) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.08),rgba(123,97,255,0.06),transparent 70%)" }} />

      {/* Nodes */}
      {[{ t: "20%", l: "5%", c: "#00c8f0", d: "0s" }, { t: "70%", l: "4%", c: "#7b61ff", d: "1.2s" }, { t: "25%", r: "5%", c: "#7b61ff", d: "0.6s" }, { t: "72%", r: "4%", c: "#00e6a0", d: "1.8s" }].map((n, i) => (
        <div key={i} className="absolute w-[5px] h-[5px] rounded-full hidden lg:block" style={{ top: n.t, left: "l" in n ? n.l : undefined, right: "r" in n ? n.r : undefined, background: n.c, boxShadow: `0 0 10px 3px ${n.c}80`, animation: `pulse-glow 2.5s ease-in-out infinite ${n.d}` } as React.CSSProperties} />
      ))}

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border" style={{ background: "rgba(0,200,240,0.06)", borderColor: "rgba(0,200,240,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 3px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c8f0] uppercase font-mono">Ready to Start?</span>
          </div>
        </div>
        <h2 className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-white leading-tight tracking-[-0.03em] mb-5" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
          Let's build the next <GradientText>generation</GradientText> of innovators.
        </h2>
        <p className="text-[16px] text-[rgba(107,122,153,1)] leading-[1.8] max-w-xl mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
          Bring Robotics, IoT, AI and STEM education to your institution. We design, deliver and build — alongside your students.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link to="/contact" className="px-9 py-4 rounded-xl text-[15px] font-bold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_40px_rgba(0,200,240,0.5)] active:scale-[0.97] transition-all duration-200 inline-flex items-center gap-2.5" style={{ fontFamily: "Inter, sans-serif" }}>
            Partner With Us <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link to="/contact" className="px-9 py-4 rounded-xl text-[15px] font-semibold border border-[rgba(0,200,240,0.28)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] hover:border-[rgba(0,200,240,0.45)] active:scale-[0.97] transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
            Contact Us
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {["Free initial consultation", "No long-term lock-in", "Programs for all age groups"].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-[#00c8f0]">✓</span>
              <span className="text-[12.5px] text-[rgba(107,122,153,0.8)]" style={{ fontFamily: "Inter, sans-serif" }}>{t}</span>
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
