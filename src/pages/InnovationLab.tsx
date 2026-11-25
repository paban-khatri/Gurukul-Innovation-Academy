import { useState, useEffect } from "react";
import { ArrowRightIcon, GradientText } from "../components/ui";

const LAB_WORKFLOW = [
  {
    id: "research",
    label: "Research",
    icon: "🔬",
    desc: "Identify the problem space and explore existing solutions.",
  },
  {
    id: "prototype",
    label: "Prototype",
    icon: "⚙️",
    desc: "Rapid iteration with development boards and 3D-printed parts.",
  },
  {
    id: "build",
    label: "Build",
    icon: "🛠️",
    desc: "Assemble working hardware-software systems end-to-end.",
  },
  {
    id: "test",
    label: "Test",
    icon: "📡",
    desc: "Stress-test in real environments, capture data, identify failure modes.",
  },
  {
    id: "improve",
    label: "Improve",
    icon: "🚀",
    desc: "Refine performance, miniaturise and prepare for deployment.",
  },
];

const LAB_PROJECTS = [
  {
    title: "Autonomous Navigation Robot",
    tag: "Robotics",
    status: "In Progress",
    statusColor: "var(--cat-cyan)",
    desc: "Multi-sensor robot navigating dynamic environments using SLAM and LiDAR fusion.",
    stack: ["ROS2", "ESP32", "LiDAR", "Python"],
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=380&fit=crop&auto=format&q=80",
  },
  {
    title: "Smart Environmental Monitor",
    tag: "IoT",
    status: "Deployed",
    statusColor: "var(--cat-emerald)",
    desc: "Distributed IoT mesh for real-time air quality, temperature and humidity mapping.",
    stack: ["ESP32", "MQTT", "InfluxDB", "Grafana"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=380&fit=crop&auto=format&q=80",
  },
  {
    title: "Edge AI Vision System",
    tag: "AI / ML",
    status: "Research",
    statusColor: "var(--cat-violet)",
    desc: "On-device inference for object detection and classification without cloud dependency.",
    stack: ["TensorFlow Lite", "OpenCV", "Raspberry Pi", "Python"],
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=380&fit=crop&auto=format&q=80",
  },
];

function TerminalLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-[12px] font-mono leading-relaxed">
      <span className="text-[#22d3ee]">$</span>
      <span className="text-[#e2e8f0]">{children}</span>
    </div>
  );
}

function LabProjectCard({ project }: { project: (typeof LAB_PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden surface-card transition-all duration-300 cursor-default flex flex-col"
      style={{
        borderColor: hovered ? "var(--accent-border)" : "var(--border-default)",
        boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-44 overflow-hidden shrink-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            opacity: "var(--card-image-opacity)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
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
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              project.status === "In Progress" ? "node-pulse" : ""
            }`}
            style={{ background: project.statusColor }}
          />
          <span
            className="text-[10.5px] font-mono font-bold"
            style={{ color: project.statusColor }}
          >
            {project.status}
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
            {project.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="type-card-title leading-snug">{project.title}</h3>
        <p
          className="text-[13.5px] leading-[1.7] flex-1"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--type-card)",
          }}
        >
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] px-2.5 py-1 rounded-lg border font-mono"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--pill-border)",
                background: "var(--pill-bg)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InnovationLab() {
  const [activeFlow, setActiveFlow] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActiveFlow((p) => (p + 1) % LAB_WORKFLOW.length),
      2400,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pt-16">
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "var(--bg-deep)" }}
      >
        <div className="absolute inset-0 pointer-events-none circuit-grid-dense" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero-bg)" }}
        />

        {/* Circuit SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: "var(--circuit-opacity)" }}
          aria-hidden="true"
        >
          <line x1="0" y1="200" x2="160" y2="200" stroke="var(--circuit-primary)" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="160" y1="200" x2="160" y2="460" stroke="var(--circuit-primary)" strokeWidth="0.8" />
          <line x1="160" y1="460" x2="300" y2="460" stroke="var(--circuit-primary)" strokeWidth="0.8" strokeDasharray="6 4" />
          <circle cx="160" cy="200" r="4" fill="var(--circuit-primary)" />
          <circle cx="160" cy="460" r="4" fill="var(--circuit-primary)" />
          <line x1="1440" y1="280" x2="1280" y2="280" stroke="var(--circuit-secondary)" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="1280" y1="280" x2="1280" y2="560" stroke="var(--circuit-secondary)" strokeWidth="0.8" />
          <circle cx="1280" cy="280" r="4" fill="var(--circuit-secondary)" />
          <circle cx="1280" cy="560" r="4" fill="var(--circuit-secondary)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start mb-16 lg:mb-20">
            <div>
              <div
                className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-xl border"
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

              <h1 className="type-section mb-5">
                From ideas <GradientText>to prototypes.</GradientText>
              </h1>
              <p className="type-body mb-8">
                Our Innovation Lab is where we experiment, research and build. We develop robotics, IoT, AI and automation projects to solve practical problems and explore new possibilities — independently of any curriculum.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { val: "120+", label: "Prototypes Built", accent: "var(--cat-cyan)" },
                  { val: "18", label: "Active Projects", accent: "var(--cat-violet)" },
                  { val: "4", label: "Research Tracks", accent: "var(--cat-emerald)" },
                ].map(({ val, label, accent }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span
                      className="text-2xl font-extrabold leading-none"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        color: accent,
                      }}
                    >
                      {val}
                    </span>
                    <span className="type-caption">{label}</span>
                  </div>
                ))}
              </div>

              <a
                href="#lab-projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[14px] btn-primary focus-ring"
              >
                Explore Our Lab <ArrowRightIcon />
              </a>
            </div>

            {/* Terminal */}
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
                  className="flex items-center gap-3 px-4 py-3 border-b"
                  style={{
                    borderColor: "rgba(148, 163, 184, 0.16)",
                    background: "var(--bg-terminal-header)",
                  }}
                >
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#94a3b8] flex-1 text-center">
                    gurukul-lab ~ innovation-terminal
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2.5 min-h-[260px]">
                  <TerminalLine>cd /lab/projects/active</TerminalLine>
                  <TerminalLine>ls -la --sort=modified</TerminalLine>
                  <div className="flex flex-col gap-1.5 pl-4 border-l border-[rgba(34,211,238,0.2)] my-1">
                    {[
                      { name: "autonomous-robot-v3/", size: "4.2MB", mod: "2s ago", color: "#22d3ee" },
                      { name: "iot-mesh-network/", size: "1.8MB", mod: "14m ago", color: "#34d399" },
                      { name: "edge-ai-vision/", size: "6.1MB", mod: "2h ago", color: "#93c5fd" },
                      { name: "smart-irrigation-v2/", size: "890KB", mod: "1d ago", color: "#fbbf24" },
                    ].map(({ name, size, mod, color }) => (
                      <div key={name} className="flex items-center gap-3 text-[11px] font-mono">
                        <span style={{ color }}>▸</span>
                        <span className="text-[#e2e8f0] flex-1 truncate">{name}</span>
                        <span className="text-[#94a3b8]">{size}</span>
                        <span className="text-[#94a3b8]" style={{ minWidth: 52, textAlign: "right" }}>
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                  <TerminalLine>git status --short</TerminalLine>
                  <div className="text-[11px] font-mono pl-4 text-[#34d399]">
                    M  src/navigation/slam_core.py
                    <br />
                    A  models/yolov8_custom.pt
                    <br />
                    M  firmware/sensor_array.ino
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] node-pulse" />
                    <span className="text-[11px] font-mono text-[#34d399]">
                      lab-session active · 3 contributors online
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-5 -left-5 hidden lg:flex items-center gap-3 rounded-2xl px-4 py-3.5 border float"
                style={{
                  background: "var(--bg-card-solid)",
                  borderColor: "var(--accent-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="text-2xl">🤖</div>
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
                  <p className="text-[10.5px] font-mono" style={{ color: "var(--accent)" }}>
                    SLAM · LiDAR · ROS2
                  </p>
                </div>
              </div>

              <div
                className="absolute -top-3 -right-3 hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 border float"
                style={{
                  background: "var(--bg-card-solid)",
                  borderColor: "var(--accent-secondary-border)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: "1.2s",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent-secondary)" }}
                />
                <span
                  className="text-[11px] font-mono font-medium"
                  style={{ color: "var(--accent-secondary-text)" }}
                >
                  Edge AI · 94.2% acc
                </span>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="rounded-2xl p-6 md:p-8 mb-16 surface-card relative overflow-hidden">
            <div className="flex items-center gap-3 mb-7">
              <span
                className="text-[10.5px] font-mono font-bold tracking-[0.22em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Innovation Workflow
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent-border), transparent)",
                }}
              />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-start gap-0">
              {LAB_WORKFLOW.map((step, i) => {
                const isActive = activeFlow === i;
                return (
                  <div key={step.id} className="flex items-start flex-1 min-w-0">
                    <button
                      type="button"
                      className="flex-1 flex flex-col items-center gap-3 px-2 cursor-pointer transition-all duration-300 focus-ring rounded-xl py-2"
                      onMouseEnter={() => setActiveFlow(i)}
                      onFocus={() => setActiveFlow(i)}
                      onClick={() => setActiveFlow(i)}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-300"
                        style={{
                          background: isActive ? "var(--accent-soft)" : "var(--pill-bg)",
                          borderColor: isActive ? "var(--accent-border)" : "var(--border-default)",
                          boxShadow: isActive ? "var(--glow-accent)" : "none",
                          transform: isActive ? "scale(1.06)" : "scale(1)",
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className="text-center">
                        <p
                          className="text-[12px] font-bold uppercase tracking-widest font-mono mb-1.5 transition-colors duration-300"
                          style={{
                            color: isActive ? "var(--accent)" : "var(--text-secondary)",
                          }}
                        >
                          {step.label}
                        </p>
                        <p
                          className="text-[12.5px] leading-[1.6] transition-colors duration-300 max-w-[140px]"
                          style={{
                            color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </button>
                    {i < LAB_WORKFLOW.length - 1 && (
                      <div className="flex items-start pt-7 shrink-0 w-8" aria-hidden="true">
                        <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
                          <line
                            x1="0"
                            y1="7"
                            x2="28"
                            y2="7"
                            stroke={
                              activeFlow === i || activeFlow === i + 1
                                ? "var(--accent)"
                                : "var(--border-strong)"
                            }
                            strokeWidth="1"
                            strokeDasharray="3 2"
                          />
                          <path
                            d="M24 3L28 7L24 11"
                            stroke={
                              activeFlow === i || activeFlow === i + 1
                                ? "var(--accent)"
                                : "var(--border-strong)"
                            }
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          <circle
                            cx="0"
                            cy="7"
                            r="2"
                            fill={
                              activeFlow === i ? "var(--accent)" : "var(--border-strong)"
                            }
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile */}
            <div className="flex md:hidden flex-col gap-0">
              {LAB_WORKFLOW.map((step, i) => {
                const isActive = activeFlow === i;
                return (
                  <div key={step.id} className="flex gap-4 pb-6 last:pb-0 relative">
                    {i < LAB_WORKFLOW.length - 1 && (
                      <div
                        className="absolute left-[19px] top-12 bottom-0 w-px"
                        style={{ background: "var(--border-default)" }}
                      />
                    )}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? "var(--accent-soft)" : "var(--pill-bg)",
                        borderColor: isActive ? "var(--accent-border)" : "var(--border-default)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <div className="pt-1">
                      <p
                        className="text-[11px] font-bold uppercase tracking-widest font-mono mb-1"
                        style={{
                          color: isActive ? "var(--accent)" : "var(--text-secondary)",
                        }}
                      >
                        {step.label}
                      </p>
                      <p
                        className="text-[13.5px] leading-[1.65]"
                        style={{
                          color: "var(--text-supporting)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Projects */}
          <div id="lab-projects">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-[5px] h-[5px] rounded-full node-pulse"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "var(--glow-node)",
                    }}
                  />
                  <span
                    className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono"
                    style={{ color: "var(--accent)" }}
                  >
                    Active Projects
                  </span>
                </div>
                <h2 className="type-subsection">Currently in the lab.</h2>
              </div>
              <div
                className="flex items-center gap-2 shrink-0 border rounded-full px-3 py-1.5"
                style={{
                  borderColor: "var(--status-success-border)",
                  background: "var(--status-success-soft)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full node-pulse"
                  style={{ background: "var(--status-success)" }}
                />
                <span
                  className="text-[11px] font-mono font-semibold"
                  style={{ color: "var(--status-success)" }}
                >
                  Lab Online
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LAB_PROJECTS.map((p) => (
                <LabProjectCard key={p.title} project={p} />
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Robotics", icon: "🤖" },
                { label: "IoT", icon: "📡" },
                { label: "AI / ML", icon: "🧠" },
                { label: "Electronics", icon: "⚡" },
                { label: "3D Printing", icon: "🖨️" },
                { label: "Automation", icon: "⚙️" },
                { label: "Embedded Systems", icon: "💾" },
                { label: "Computer Vision", icon: "👁️" },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-colors duration-200 cursor-default"
                  style={{
                    borderColor: "var(--pill-border)",
                    background: "var(--pill-bg)",
                  }}
                >
                  <span className="text-sm">{icon}</span>
                  <span
                    className="text-[12.5px] font-medium"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
