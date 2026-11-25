import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, Eyebrow, GradientText } from "../components/ui";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Category = "All" | "Robotics" | "IoT" | "AI" | "Automation";

interface Project {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  desc: string;
  img: string;
  tag: string;
}

const PROJECTS: Project[] = [
  {
    id: "smart-home",
    title: "Smart Home IoT",
    category: "IoT",
    desc: "Connected devices for smarter living. A full-stack IoT system linking sensors, actuators and a real-time dashboard.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&auto=format&q=85",
    tag: "IoT",
  },
  {
    id: "edu-robot",
    title: "Educational Robot",
    category: "Robotics",
    desc: "Hands-on robotics platform built for students. Modular, programmable and designed to teach mechatronics from the ground up.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop&auto=format&q=85",
    tag: "Robotics",
  },
  {
    id: "smart-agri",
    title: "Smart Agriculture",
    category: "IoT",
    desc: "IoT-based crop monitoring and irrigation automation. Sensors track soil moisture, temperature and humidity in real time.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format&q=85",
    tag: "IoT",
  },
  {
    id: "ai-vision",
    title: "AI Vision System",
    category: "AI",
    desc: "Computer vision for real-world applications. Object detection and classification running on low-power edge hardware.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&h=600&fit=crop&auto=format&q=85",
    tag: "AI",
  },
  {
    id: "line-follower",
    title: "Autonomous Line Follower",
    category: "Robotics",
    desc: "PID-controlled robot that navigates complex track layouts at speed. Built and tuned entirely by students.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format&q=85",
    tag: "Robotics",
  },
  {
    id: "home-automation",
    title: "Home Automation Hub",
    category: "Automation",
    desc: "Centralised controller for lighting, fans and appliances using ESP32. Fully voice and app controllable.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format&q=85",
    tag: "Automation",
  },
];

const FILTERS: Category[] = ["All", "Robotics", "IoT", "AI", "Automation"];

const ACCENT_MAP: Record<
  Exclude<Category, "All">,
  { fg: string; bg: string; border: string }
> = {
  Robotics: {
    fg: "var(--cat-cyan)",
    bg: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
  },
  IoT: {
    fg: "var(--cat-violet)",
    bg: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
  },
  AI: {
    fg: "var(--cat-amber)",
    bg: "var(--cat-amber-soft)",
    border: "var(--cat-amber-border)",
  },
  Automation: {
    fg: "var(--cat-emerald)",
    bg: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
  },
};

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const colors = ACCENT_MAP[project.category];

  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col surface-card transition-all duration-300"
      style={{
        borderColor: hovered ? colors.border : "var(--border-default)",
        boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            opacity: "var(--card-image-opacity)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--image-overlay-bottom)" }}
        />

        {/* Category chip */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide font-mono border backdrop-blur-sm transition-colors duration-200"
            style={{
              color: colors.fg,
              background: hovered ? colors.bg : "var(--image-badge-bg)",
              borderColor: hovered ? colors.border : "var(--border-default)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: colors.fg }}
            />
            {project.tag}
          </span>
        </div>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-8 h-8 border-t border-r rounded-tr-2xl transition-colors duration-300"
          style={{
            borderColor: hovered ? colors.fg : "var(--border-default)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex-1">
          <h3 className="type-card-title mb-2 leading-snug">{project.title}</h3>
          <p
            className="text-[13.5px] leading-[1.7]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--type-card)",
            }}
          >
            {project.desc}
          </p>
        </div>

        <div
          className="flex items-center justify-between pt-4 border-t transition-colors duration-300"
          style={{
            borderColor: hovered ? colors.border : "var(--divider-subtle)",
          }}
        >
          <Link
            to="/innovation-lab"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 focus-ring rounded"
            style={{ color: colors.fg, fontFamily: "var(--font-body)" }}
          >
            View Project
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex">
              <ArrowRightIcon size={13} />
            </span>
          </Link>

          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-300"
            style={{
              background: hovered ? colors.bg : "transparent",
              borderColor: hovered ? colors.border : "var(--border-default)",
              color: hovered ? colors.fg : "var(--text-muted)",
            }}
            aria-hidden="true"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H5M10 2V7"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="mb-4">
              <Eyebrow label="Our Work" />
            </div>
            <h1 className="type-section mb-3">
              Things we're <GradientText>building.</GradientText>
            </h1>
            <p className="type-body">
              Real projects. Real experiments. Real learning.
            </p>
          </div>

          {/* Filter pills */}
          <div
            className="flex flex-wrap gap-2 shrink-0"
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((f) => {
              const isActive = f === activeFilter;
              const colors = f !== "All" ? ACCENT_MAP[f] : null;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(f)}
                  className="px-4 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all duration-200 focus-ring cursor-pointer"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: isActive
                      ? colors
                        ? colors.bg
                        : "var(--accent-soft)"
                      : "var(--pill-bg)",
                    borderColor: isActive
                      ? colors
                        ? colors.border
                        : "var(--accent-border)"
                      : "var(--border-default)",
                    color: isActive
                      ? colors
                        ? colors.fg
                        : "var(--accent)"
                      : "var(--text-secondary)",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
            <span className="text-3xl opacity-50">🔬</span>
            <p className="type-body">
              No projects in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Stat Counter ─────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1400, started: boolean) {
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
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / 16));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  accent: string;
  soft: string;
  border: string;
  icon: string;
}

const STATS: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Students Reached",
    accent: "var(--cat-cyan)",
    soft: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
    icon: "🎓",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects Built",
    accent: "var(--cat-violet)",
    soft: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
    icon: "⚙️",
  },
  {
    value: 10,
    suffix: "+",
    label: "Institution Partnerships",
    accent: "var(--cat-emerald)",
    soft: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
    icon: "🏫",
  },
  {
    value: 4,
    suffix: "+",
    label: "Technology Programs",
    accent: "var(--cat-amber)",
    soft: "var(--cat-amber-soft)",
    border: "var(--cat-amber-border)",
    icon: "📡",
  },
];

function StatCounter({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 1200, started);
  return (
    <div
      className="relative flex flex-col items-center text-center gap-2 py-8 px-4 rounded-2xl surface-card surface-card-hover cursor-default overflow-hidden"
      style={{ borderColor: stat.border }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-1 border"
        style={{ background: stat.soft, borderColor: stat.border }}
      >
        {stat.icon}
      </div>

      <div
        className="text-4xl xl:text-5xl font-extrabold leading-none tabular-nums"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          color: stat.accent,
        }}
      >
        {count}
        {stat.suffix}
      </div>

      <div className="type-caption font-medium mt-1">{stat.label}</div>

      <div
        className="absolute bottom-0 left-8 right-8 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
        }}
      />
    </div>
  );
}

// ─── Student Impact Section ───────────────────────────────────────────────────

interface GalleryImage {
  src: string;
  label: string;
  span?: string;
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
];

function StudentImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden border-t"
      style={{
        background: "var(--gradient-section)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-grid" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <Eyebrow label="Student Impact" center />
          </div>

          <h2 className="type-section mb-5">
            Students don't just{" "}
            <GradientText>learn technology.</GradientText>
            <br />
            They build it.
          </h2>
          <p className="type-body max-w-2xl mx-auto">
            Every session ends with something real. Students leave with working prototypes, practical skills and the confidence that they can build technology — not just consume it.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map((s) => (
            <StatCounter key={s.label} stat={s} started={started} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: image mosaic */}
          <div className="grid grid-cols-2 gap-3 auto-rows-[180px]">
            {GALLERY.map(({ src, label, span }, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border group ${span ?? ""}`}
                style={{
                  borderColor: "var(--border-default)",
                  boxShadow: "var(--shadow-card)",
                  background: "var(--bg-card-solid)",
                }}
              >
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: "var(--card-image-opacity)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "var(--image-overlay-bottom)" }}
                />
                <div
                  className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-2xl"
                  style={{ borderColor: "var(--accent-border)" }}
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-lg border backdrop-blur-sm"
                    style={{
                      background: "var(--image-badge-bg)",
                      color: "var(--image-badge-text)",
                      borderColor: "var(--border-default)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: copy + proof points */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-4">
                <Eyebrow label="What Students Take Away" color="var(--cat-violet)" />
              </div>
              <h3 className="type-subsection mb-4">
                Practical skills that last beyond the session.
              </h3>
              <p className="type-body">
                Our programs are structured around real outcomes. By the end, every student has assembled, programmed and tested something with their own hands.
              </p>
            </div>

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
                  className="flex gap-3.5 p-4 rounded-xl surface-card hover:border-[var(--accent-border)] transition-colors duration-200 cursor-default group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg border shrink-0"
                    style={{
                      background: "var(--accent-soft)",
                      borderColor: "var(--accent-border)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-semibold mb-0.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--type-card)",
                      }}
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
                className="px-6 py-2.5 rounded-xl text-[13.5px] btn-primary inline-flex items-center gap-2 focus-ring"
              >
                See Our Programs <ArrowRightIcon size={13} />
              </Link>
              <Link
                to="/partners"
                className="px-6 py-2.5 rounded-xl text-[13.5px] btn-secondary focus-ring"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <div className="pt-16">
      <ProjectsSection />
      <StudentImpactSection />
    </div>
  );
}
