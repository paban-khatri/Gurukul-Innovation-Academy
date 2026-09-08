import { useState, useRef, useEffect } from "react"
import { Link } from "react-router"

// ─── Data ─────────────────────────────────────────────────────────────────────

type Category = "All" | "Robotics" | "IoT" | "AI" | "Automation"

interface Project {
  id: string
  title: string
  category: Exclude<Category, "All">
  desc: string
  img: string
  accent: string
  tag: string
}

const PROJECTS: Project[] = [
  {
    id: "smart-home",
    title: "Smart Home IoT",
    category: "IoT",
    desc: "Connected devices for smarter living. A full-stack IoT system linking sensors, actuators and a real-time dashboard.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&auto=format&q=85",
    accent: "#7b61ff",
    tag: "IoT",
  },
  {
    id: "edu-robot",
    title: "Educational Robot",
    category: "Robotics",
    desc: "Hands-on robotics platform built for students. Modular, programmable and designed to teach mechatronics from the ground up.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop&auto=format&q=85",
    accent: "#00c8f0",
    tag: "Robotics",
  },
  {
    id: "smart-agri",
    title: "Smart Agriculture",
    category: "IoT",
    desc: "IoT-based crop monitoring and irrigation automation. Sensors track soil moisture, temperature and humidity in real time.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format&q=85",
    accent: "#00e6a0",
    tag: "IoT",
  },
  {
    id: "ai-vision",
    title: "AI Vision System",
    category: "AI",
    desc: "Computer vision for real-world applications. Object detection and classification running on low-power edge hardware.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&h=600&fit=crop&auto=format&q=85",
    accent: "#ffa040",
    tag: "AI",
  },
  {
    id: "line-follower",
    title: "Autonomous Line Follower",
    category: "Robotics",
    desc: "PID-controlled robot that navigates complex track layouts at speed. Built and tuned entirely by students.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format&q=85",
    accent: "#00c8f0",
    tag: "Robotics",
  },
  {
    id: "home-automation",
    title: "Home Automation Hub",
    category: "Automation",
    desc: "Centralised controller for lighting, fans and appliances using ESP32. Fully voice and app controllable.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format&q=85",
    accent: "#ffa040",
    tag: "Automation",
  },
]

const FILTERS: Category[] = ["All", "Robotics", "IoT", "AI", "Automation"]

const ACCENT_MAP: Record<Exclude<Category, "All">, {
  fg: string
  bg: string
  border: string
}> = {
  Robotics: {
    fg: "#00c8f0",
    bg: "rgba(0,200,240,0.1)",
    border: "rgba(0,200,240,0.25)",
  },
  IoT: {
    fg: "#7b61ff",
    bg: "rgba(123,97,255,0.1)",
    border: "rgba(123,97,255,0.25)",
  },
  AI: {
    fg: "#ffa040",
    bg: "rgba(255,160,64,0.1)",
    border: "rgba(255,160,64,0.25)",
  },
  Automation: {
    fg: "#00e6a0",
    bg: "rgba(0,230,160,0.1)",
    border: "rgba(0,230,160,0.25)",
  },
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const colors = ACCENT_MAP[project.category]

  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col cursor-default transition-all duration-350"
      style={{
        background: "#0c1120",
        border: `1px solid ${
          hovered ? colors.border : "rgba(255,255,255,0.07)"
        }`,
        boxShadow: hovered
          ? `0 0 0 1px ${colors.fg}15, 0 28px 72px rgba(0,0,0,0.55), 0 0 48px ${colors.bg}`
          : "0 4px 24px rgba(0,0,0,0.35)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            opacity: hovered ? 0.82 : 0.62,
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />

        {/* Scanline texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, #0c1120 0%, rgba(12,17,32,0.3) 55%, transparent 100%)`,
          }}
        />

        {/* Side accent glow on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-400 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${colors.bg} 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Category chip */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide font-mono border transition-all duration-300"
            style={{
              color: colors.fg,
              background: hovered ? colors.bg : "rgba(5,8,15,0.75)",
              borderColor: hovered ? colors.border : "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background: colors.fg,
                boxShadow: `0 0 6px 1px ${colors.fg}70`,
              }}
            />
            {project.tag}
          </span>
        </div>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-8 h-8 border-t border-r rounded-tr-2xl transition-colors duration-300"
          style={{
            borderColor: hovered ? colors.fg + "60" : "rgba(255,255,255,0.06)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex-1">
          <h3
            className="text-[16px] font-bold text-white mb-2 leading-snug transition-colors duration-200"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
          >
            {project.title}
          </h3>
          <p
            className="text-[13px] text-[rgba(107,122,153,1)] leading-[1.7]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {project.desc}
          </p>
        </div>

        {/* Bottom accent line + CTA */}
        <div
          className="flex items-center justify-between pt-4 border-t transition-colors duration-300"
          style={{
            borderColor: hovered ? colors.fg + "20" : "rgba(255,255,255,0.05)",
          }}
        >
          <button
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all duration-200"
            style={{
              color: colors.fg,
              fontFamily: "Inter, sans-serif",
            }}
          >
            View Project
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
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

          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-300"
            style={{
              background: hovered ? colors.bg : "transparent",
              borderColor: hovered ? colors.border : "rgba(255,255,255,0.06)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H5M10 2V7"
                stroke={hovered ? colors.fg : "rgba(107,122,153,0.5)"}
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.3s" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Projects Section ─────────────────────────────────────────────────────────

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("All")
  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section className="relative bg-[var(--background)] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.18)] to-transparent" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,240,0.025) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[rgba(0,200,240,0.03)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[rgba(123,97,255,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-[5px] h-[5px] rounded-full bg-[#00c8f0] shrink-0"
                style={{
                  boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)",
                  animation: "pulse-glow 2.5s ease-in-out infinite",
                }}
              />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#00c8f0] uppercase font-mono">
                Our Work
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold text-white leading-tight tracking-[-0.02em] mb-3"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              Things we're{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#00c8f0,#7b61ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                building.
              </span>
            </h2>
            <p
              className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Real projects. Real experiments. Real learning.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {FILTERS.map((f) => {
              const isActive = f === activeFilter
              const colors = f !== "All" ? ACCENT_MAP[f] : null
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-all duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background: isActive
                      ? colors
                        ? colors.bg
                        : "rgba(0,200,240,0.1)"
                      : "transparent",
                    borderColor: isActive
                      ? colors
                        ? colors.border
                        : "rgba(0,200,240,0.3)"
                      : "rgba(255,255,255,0.08)",
                    color: isActive
                      ? colors
                        ? colors.fg
                        : "#00c8f0"
                      : "rgba(107,122,153,1)",
                    boxShadow:
                      isActive && colors ? `0 0 16px ${colors.bg}` : "none",
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
            <span className="text-3xl opacity-40">🔬</span>
            <p
              className="text-[14px] text-[rgba(107,122,153,0.7)]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              No projects in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Stat Counter ─────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1400, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = Math.ceil(duration / target)
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / 16))
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

interface Stat {
  value: number
  suffix: string
  label: string
  accent: string
  icon: string
}

const STATS: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Students Reached",
    accent: "#00c8f0",
    icon: "🎓",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects Built",
    accent: "#7b61ff",
    icon: "⚙️",
  },
  {
    value: 10,
    suffix: "+",
    label: "Institution Partnerships",
    accent: "#00e6a0",
    icon: "🏫",
  },
  {
    value: 4,
    suffix: "+",
    label: "Technology Programs",
    accent: "#ffa040",
    icon: "📡",
  },
]

function StatCounter({ stat, started }: { stat: Stat started: boolean }) {
  const count = useCountUp(stat.value, 1200, started)
  return (
    <div
      className="relative flex flex-col items-center text-center gap-2 py-8 px-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 cursor-default overflow-hidden"
      style={{
        background: "rgba(12,17,32,0.7)",
        borderColor: stat.accent + "22",
        boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Bg glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at center bottom, ${stat.accent}10 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-1 border"
        style={{
          background: stat.accent + "12",
          borderColor: stat.accent + "28",
        }}
      >
        {stat.icon}
      </div>

      {/* Number */}
      <div
        className="text-4xl xl:text-5xl font-extrabold leading-none tabular-nums"
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 800,
          color: stat.accent,
          textShadow: `0 0 30px ${stat.accent}40`,
        }}
      >
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div
        className="text-[13px] font-medium text-[rgba(107,122,153,1)] leading-snug mt-1"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {stat.label}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-8 right-8 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.accent}50, transparent)`,
        }}
      />

      {/* Placeholder note */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-60 transition-opacity">
        <span className="text-[9px] font-mono text-[rgba(107,122,153,0.5)] border border-[rgba(255,255,255,0.06)] px-1.5 py-0.5 rounded">
          editable
        </span>
      </div>
    </div>
  )
}

// ─── Student gallery image ────────────────────────────────────────────────────

interface GalleryImage {
  src: string
  label: string
  span?: string
}

const GALLERY: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=560&fit=crop&auto=format&q=85",
    label: "Students working on electronics",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=420&fit=crop&auto=format&q=85",
    label: "Robotics build session",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=420&fit=crop&auto=format&q=85",
    label: "Circuit board assembly",
  },
  {
    src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=700&h=420&fit=crop&auto=format&q=85",
    label: "IoT and programming lab",
  },
]

// ─── Student Impact Section ───────────────────────────────────────────────────

function StudentImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, #020509 100%)",
      }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,97,255,0.22)] to-transparent" />

      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,240,0.02) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Master glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,200,240,0.04) 0%, rgba(123,97,255,0.03) 50%, transparent 75%)",
        }}
      />

      {/* Decorative circuit traces */}
      <svg
        className="absolute left-0 top-0 w-40 h-full pointer-events-none opacity-20"
        viewBox="0 0 160 900"
        fill="none"
        preserveAspectRatio="xMinYMid slice"
      >
        <line
          x1="40"
          y1="0"
          x2="40"
          y2="280"
          stroke="#00c8f0"
          strokeWidth="0.8"
          strokeDasharray="5 4"
        />
        <line
          x1="40"
          y1="280"
          x2="100"
          y2="380"
          stroke="#00c8f0"
          strokeWidth="0.8"
        />
        <line
          x1="100"
          y1="380"
          x2="100"
          y2="900"
          stroke="#00c8f0"
          strokeWidth="0.8"
          strokeDasharray="5 4"
        />
        <circle cx="40" cy="280" r="3.5" fill="#00c8f0" />
        <circle cx="100" cy="380" r="3.5" fill="#00c8f0" />
      </svg>
      <svg
        className="absolute right-0 top-0 w-40 h-full pointer-events-none opacity-20"
        viewBox="0 0 160 900"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        <line
          x1="120"
          y1="0"
          x2="120"
          y2="320"
          stroke="#7b61ff"
          strokeWidth="0.8"
          strokeDasharray="5 4"
        />
        <line
          x1="120"
          y1="320"
          x2="60"
          y2="420"
          stroke="#7b61ff"
          strokeWidth="0.8"
        />
        <line
          x1="60"
          y1="420"
          x2="60"
          y2="900"
          stroke="#7b61ff"
          strokeWidth="0.8"
          strokeDasharray="5 4"
        />
        <circle cx="120" cy="320" r="3.5" fill="#7b61ff" />
        <circle cx="60" cy="420" r="3.5" fill="#7b61ff" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]"
              style={{
                boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)",
                animation: "pulse-glow 2.5s ease-in-out infinite",
              }}
            />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#00c8f0] uppercase font-mono">
              Student Impact
            </span>
            <span
              className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]"
              style={{
                boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)",
                animation: "pulse-glow 2.5s ease-in-out infinite 0.8s",
              }}
            />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-tight tracking-[-0.025em] mb-5"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
          >
            Students don't just{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#00c8f0 0%,#7b61ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              learn technology.
            </span>
            <br />
            They build it.
          </h2>
          <p
            className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every session ends with something real. Students leave with working
            prototypes, practical skills and the confidence that they can build
            technology — not just consume it.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map((s) => (
            <StatCounter key={s.label} stat={s} started={started} />
          ))}
        </div>

        {/* Gallery + caption */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: image mosaic */}
          <div className="grid grid-cols-2 gap-3 auto-rows-[180px]">
            {GALLERY.map(({ src, label, span }, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-[rgba(0,200,240,0.1)] group ${span ?? ""}`}
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-106"
                  style={{
                    opacity: 0.65,
                    transition: "opacity 0.3s, transform 0.5s",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.opacity =
                      "0.85"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.opacity =
                      "0.65"
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020509]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,200,240,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[rgba(0,200,240,0.3)] rounded-tl-2xl" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] font-mono text-[rgba(232,237,245,0.7)]">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: copy + proof points */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-[5px] h-[5px] rounded-full bg-[#7b61ff]"
                  style={{
                    boxShadow: "0 0 8px 2px rgba(123,97,255,0.6)",
                    animation: "pulse-glow 2.5s ease-in-out infinite",
                  }}
                />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#7b61ff] uppercase font-mono">
                  What Students Take Away
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
              >
                Practical skills that last beyond the session.
              </h3>
              <p
                className="text-[14px] text-[rgba(107,122,153,1)] leading-[1.8]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our programs are structured around real outcomes. By the end,
                every student has assembled, programmed and tested something
                with their own hands.
              </p>
            </div>

            {/* Proof points */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: "🤖",
                  title: "Assembled real hardware",
                  desc: "Students wire circuits, solder components and mount electronics — not simulations.",
                },
                {
                  icon: "💻",
                  title: "Written working code",
                  desc: "From blinking an LED to controlling a robot — code that runs on real devices.",
                },
                {
                  icon: "📦",
                  title: "Shipped a project",
                  desc: "Every student graduates the program with a completed, documented prototype.",
                },
                {
                  icon: "🧠",
                  title: "Developed engineering thinking",
                  desc: "Debugging, iteration and systematic problem-solving become natural habits.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3.5 p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(12,17,32,0.5)] hover:border-[rgba(0,200,240,0.15)] transition-all duration-200 cursor-default group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-[rgba(0,200,240,0.08)] border border-[rgba(0,200,240,0.12)] shrink-0 group-hover:bg-[rgba(0,200,240,0.12)] transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-[13px] font-semibold text-white mb-0.5"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[12.5px] text-[rgba(107,122,153,1)] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/programs"
                className="px-6 py-2.5 rounded-xl text-[13px] font-semibold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,200,240,0.35)] transition-all inline-flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                See Our Programs
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
                className="px-6 py-2.5 rounded-xl text-[13px] font-semibold border border-[rgba(0,200,240,0.28)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom note about stats */}
        <p className="text-center text-[11px] font-mono text-[rgba(107,122,153,0.45)] mt-16">
          * Statistics are indicative placeholders — update values in{" "}
          <code className="text-[rgba(0,200,240,0.4)]">
            src/pages/Projects.tsx → STATS
          </code>{" "}
          as the program grows.
        </p>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <div className="pt-16">
      <ProjectsSection />
      <StudentImpactSection />
    </div>
  )
}
