import { useState, useEffect } from "react";

const LAB_WORKFLOW = [
  { id: "research",  label: "Research",  icon: "🔬", desc: "Identify the problem space and explore existing solutions." },
  { id: "prototype", label: "Prototype", icon: "⚙️", desc: "Rapid iteration with development boards and 3D-printed parts." },
  { id: "build",     label: "Build",     icon: "🛠️", desc: "Assemble working hardware-software systems end-to-end." },
  { id: "test",      label: "Test",      icon: "📡", desc: "Stress-test in real environments, capture data, identify failure modes." },
  { id: "improve",   label: "Improve",   icon: "🚀", desc: "Refine performance, miniaturise and prepare for deployment." },
];

const LAB_PROJECTS = [
  { title: "Autonomous Navigation Robot", tag: "Robotics", status: "In Progress", statusColor: "#00c8f0", desc: "Multi-sensor robot navigating dynamic environments using SLAM and LiDAR fusion.", stack: ["ROS2", "ESP32", "LiDAR", "Python"], img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=380&fit=crop&auto=format&q=80" },
  { title: "Smart Environmental Monitor", tag: "IoT", status: "Deployed", statusColor: "#00e6a0", desc: "Distributed IoT mesh for real-time air quality, temperature and humidity mapping.", stack: ["ESP32", "MQTT", "InfluxDB", "Grafana"], img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=380&fit=crop&auto=format&q=80" },
  { title: "Edge AI Vision System", tag: "AI / ML", status: "Research", statusColor: "#7b61ff", desc: "On-device inference for object detection and classification without cloud dependency.", stack: ["TensorFlow Lite", "OpenCV", "Raspberry Pi", "Python"], img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=380&fit=crop&auto=format&q=80" },
];

function TerminalLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-[12px] font-mono leading-relaxed">
      <span style={{ color: "rgba(0,200,240,0.5)" }}>$</span>
      <span style={{ color: "rgba(232,237,245,0.65)" }}>{children}</span>
    </div>
  );
}

function LabProjectCard({ project }: { project: typeof LAB_PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-default flex flex-col"
      style={{ background: "#070b16", borderColor: hovered ? "rgba(0,200,240,0.28)" : "rgba(0,200,240,0.1)", boxShadow: hovered ? "0 0 0 1px rgba(0,200,240,0.12),0 24px 64px rgba(0,0,0,0.7),0 0 48px rgba(0,200,240,0.06)" : "0 4px 24px rgba(0,0,0,0.5)", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-44 overflow-hidden shrink-0">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500" style={{ opacity: 0.55, transform: hovered ? "scale(1.06)" : "scale(1)" }} />
        <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(0deg,rgba(0,0,0,0.08) 0px,rgba(0,0,0,0.08) 1px,transparent 1px,transparent 3px)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-[rgba(7,11,22,0.4)] to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[rgba(5,8,15,0.82)] backdrop-blur-sm border border-[rgba(255,255,255,0.07)] rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.statusColor, boxShadow: `0 0 6px 2px ${project.statusColor}60`, animation: project.status === "In Progress" ? "pulse-glow 2s ease-in-out infinite" : "none" }} />
          <span className="text-[10px] font-mono font-bold" style={{ color: project.statusColor }}>{project.status}</span>
        </div>
        <div className="absolute top-3 right-3 bg-[rgba(5,8,15,0.82)] backdrop-blur-sm border border-[rgba(0,200,240,0.15)] rounded-full px-2.5 py-1">
          <span className="text-[10px] font-mono text-[rgba(0,200,240,0.8)]">{project.tag}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-[15px] font-bold text-white leading-snug" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>{project.title}</h3>
        <p className="text-[13px] text-[rgba(107,122,153,1)] leading-[1.7] flex-1" style={{ fontFamily: "Inter, sans-serif" }}>{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((s) => (
            <span key={s} className="text-[11px] px-2.5 py-1 rounded-lg border font-mono" style={{ color: "rgba(107,122,153,1)", borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InnovationLab() {
  const [activeFlow, setActiveFlow] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveFlow((p) => (p + 1) % LAB_WORKFLOW.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pt-16">
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#020509" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.35) 40%,rgba(123,97,255,0.35) 60%,transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.15) 50%,transparent)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.032) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.04),rgba(123,97,255,0.03),transparent 75%)" }} />

        {/* Circuit SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.2 }}>
          <line x1="0" y1="200" x2="160" y2="200" stroke="#00c8f0" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="160" y1="200" x2="160" y2="460" stroke="#00c8f0" strokeWidth="0.8" />
          <line x1="160" y1="460" x2="300" y2="460" stroke="#00c8f0" strokeWidth="0.8" strokeDasharray="6 4" />
          <circle cx="160" cy="200" r="4" fill="#00c8f0" />
          <circle cx="160" cy="460" r="4" fill="#00c8f0" />
          <line x1="1440" y1="280" x2="1280" y2="280" stroke="#7b61ff" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="1280" y1="280" x2="1280" y2="560" stroke="#7b61ff" strokeWidth="0.8" />
          <circle cx="1280" cy="280" r="4" fill="#7b61ff" />
          <circle cx="1280" cy="560" r="4" fill="#7b61ff" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start mb-16 lg:mb-20">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-xl border" style={{ background: "rgba(0,200,240,0.06)", borderColor: "rgba(0,200,240,0.2)", boxShadow: "0 0 24px rgba(0,200,240,0.06)" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: "#00c8f0", boxShadow: "0 0 8px 3px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c8f0] uppercase font-mono">Gurukul Innovation Lab</span>
              </div>

              <h2 className="text-3xl sm:text-4xl xl:text-[48px] font-extrabold text-white leading-tight tracking-[-0.025em] mb-5" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
                From ideas{" "}
                <span style={{ background: "linear-gradient(135deg,#00c8f0,#7b61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>to prototypes.</span>
              </h2>
              <p className="text-[15px] leading-[1.85] mb-8" style={{ color: "rgba(107,122,153,1)", fontFamily: "Inter, sans-serif" }}>
                Our Innovation Lab is where we experiment, research and build. We develop robotics, IoT, AI and automation projects to solve practical problems and explore new possibilities — independently of any curriculum.
              </p>

              <div className="flex flex-wrap gap-5 mb-8">
                {[{ val: "120+", label: "Prototypes Built", accent: "#00c8f0" }, { val: "18", label: "Active Projects", accent: "#7b61ff" }, { val: "4", label: "Research Tracks", accent: "#00e6a0" }].map(({ val, label, accent }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-2xl font-extrabold leading-none" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, color: accent, textShadow: `0 0 20px ${accent}50` }}>{val}</span>
                    <span className="text-[11px]" style={{ color: "rgba(107,122,153,1)", fontFamily: "Inter, sans-serif" }}>{label}</span>
                  </div>
                ))}
              </div>

              <a href="#lab-projects" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200" style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.3)", color: "#00c8f0", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,200,240,0.15)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,200,240,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,200,240,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                Explore Our Lab
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            {/* Terminal */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border" style={{ background: "#050810", borderColor: "rgba(0,200,240,0.15)", boxShadow: "0 0 0 1px rgba(0,200,240,0.06),0 32px 80px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(0,200,240,0.1)", background: "rgba(0,200,240,0.03)" }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[11px] font-mono text-[rgba(107,122,153,0.8)] flex-1 text-center">gurukul-lab ~ innovation-terminal</span>
                </div>
                <div className="p-5 flex flex-col gap-2.5 min-h-[260px]">
                  <TerminalLine>cd /lab/projects/active</TerminalLine>
                  <TerminalLine>ls -la --sort=modified</TerminalLine>
                  <div className="flex flex-col gap-1.5 pl-4 border-l border-[rgba(0,200,240,0.12)] my-1">
                    {[
                      { name: "autonomous-robot-v3/", size: "4.2MB", mod: "2s ago",  color: "#00c8f0" },
                      { name: "iot-mesh-network/",    size: "1.8MB", mod: "14m ago", color: "#00e6a0" },
                      { name: "edge-ai-vision/",      size: "6.1MB", mod: "2h ago",  color: "#7b61ff" },
                      { name: "smart-irrigation-v2/", size: "890KB", mod: "1d ago",  color: "#ffa040" },
                    ].map(({ name, size, mod, color }) => (
                      <div key={name} className="flex items-center gap-3 text-[11px] font-mono">
                        <span style={{ color }}>▸</span>
                        <span style={{ color: "rgba(232,237,245,0.7)", flex: 1 }}>{name}</span>
                        <span style={{ color: "rgba(107,122,153,0.7)" }}>{size}</span>
                        <span style={{ color: "rgba(107,122,153,0.5)", minWidth: 52, textAlign: "right" }}>{mod}</span>
                      </div>
                    ))}
                  </div>
                  <TerminalLine>git status --short</TerminalLine>
                  <div className="text-[11px] font-mono pl-4" style={{ color: "#00e6a0" }}>
                    M  src/navigation/slam_core.py<br />
                    A  models/yolov8_custom.pt<br />
                    M  firmware/sensor_array.ino
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e6a0]" style={{ boxShadow: "0 0 6px 2px rgba(0,230,160,0.5)", animation: "pulse-glow 2s ease-in-out infinite" }} />
                    <span className="text-[11px] font-mono" style={{ color: "rgba(0,230,160,0.8)" }}>lab-session active · 3 contributors online</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden lg:flex items-center gap-3 rounded-2xl px-4 py-3.5 border" style={{ background: "rgba(5,8,15,0.92)", backdropFilter: "blur(12px)", borderColor: "rgba(0,200,240,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.6)", animation: "float 5s ease-in-out infinite" }}>
                <div className="text-2xl">🤖</div>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-none mb-0.5" style={{ fontFamily: "Manrope, sans-serif" }}>Robot v3.2</p>
                  <p className="text-[10px] font-mono" style={{ color: "rgba(0,200,240,0.7)" }}>SLAM · LiDAR · ROS2</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 border" style={{ background: "rgba(5,8,15,0.88)", backdropFilter: "blur(8px)", borderColor: "rgba(123,97,255,0.2)", animation: "float 6s ease-in-out infinite 1.2s" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: "#7b61ff", boxShadow: "0 0 8px 2px rgba(123,97,255,0.6)" }} />
                <span className="text-[11px] font-mono" style={{ color: "#a08fff" }}>Edge AI · 94.2% acc</span>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="rounded-2xl p-6 md:p-8 mb-16 border relative overflow-hidden" style={{ background: "rgba(7,11,22,0.9)", borderColor: "rgba(0,200,240,0.1)" }}>
            <div className="flex items-center gap-3 mb-7">
              <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-[rgba(0,200,240,0.6)]">Innovation Workflow</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(0,200,240,0.2),transparent)" }} />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-start gap-0">
              {LAB_WORKFLOW.map((step, i) => {
                const isActive = activeFlow === i;
                return (
                  <div key={step.id} className="flex items-start flex-1 min-w-0">
                    <div className="flex-1 flex flex-col items-center gap-3 px-2 cursor-default transition-all duration-300" onMouseEnter={() => setActiveFlow(i)}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-300" style={{ background: isActive ? "rgba(0,200,240,0.12)" : "rgba(255,255,255,0.03)", borderColor: isActive ? "rgba(0,200,240,0.4)" : "rgba(255,255,255,0.06)", boxShadow: isActive ? "0 0 24px rgba(0,200,240,0.2)" : "none", transform: isActive ? "scale(1.08)" : "scale(1)" }}>{step.icon}</div>
                      <div className="text-center">
                        <p className="text-[12px] font-bold uppercase tracking-widest font-mono mb-1.5 transition-colors duration-300" style={{ color: isActive ? "#00c8f0" : "rgba(107,122,153,0.7)" }}>{step.label}</p>
                        <p className="text-[12px] leading-[1.6] transition-all duration-300 max-w-[140px]" style={{ color: isActive ? "rgba(232,237,245,0.75)" : "rgba(107,122,153,0.45)", fontFamily: "Inter, sans-serif" }}>{step.desc}</p>
                      </div>
                    </div>
                    {i < LAB_WORKFLOW.length - 1 && (
                      <div className="flex items-start pt-5 shrink-0 w-8">
                        <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
                          <line x1="0" y1="7" x2="28" y2="7" stroke={activeFlow === i || activeFlow === i + 1 ? "#00c8f0" : "rgba(255,255,255,0.08)"} strokeWidth="1" strokeDasharray="3 2" style={{ transition: "stroke 0.3s" }} />
                          <path d="M24 3L28 7L24 11" stroke={activeFlow === i || activeFlow === i + 1 ? "#00c8f0" : "rgba(255,255,255,0.08)"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ transition: "stroke 0.3s" }} />
                          <circle cx="0" cy="7" r="2" fill={activeFlow === i ? "#00c8f0" : "rgba(255,255,255,0.08)"} style={{ transition: "fill 0.3s" }} />
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
                    {i < LAB_WORKFLOW.length - 1 && <div className="absolute left-[19px] top-12 bottom-0 w-px" style={{ background: "rgba(0,200,240,0.12)" }} />}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border shrink-0 transition-all duration-300" style={{ background: isActive ? "rgba(0,200,240,0.12)" : "rgba(255,255,255,0.03)", borderColor: isActive ? "rgba(0,200,240,0.4)" : "rgba(255,255,255,0.06)", boxShadow: isActive ? "0 0 16px rgba(0,200,240,0.2)" : "none" }}>{step.icon}</div>
                    <div className="pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-widest font-mono mb-1" style={{ color: isActive ? "#00c8f0" : "rgba(107,122,153,0.7)" }}>{step.label}</p>
                      <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(107,122,153,0.8)", fontFamily: "Inter, sans-serif" }}>{step.desc}</p>
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
                  <span className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
                  <span className="text-[11px] font-bold tracking-[0.22em] text-[#00c8f0] uppercase font-mono">Active Projects</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>Currently in the lab.</h3>
              </div>
              <div className="flex items-center gap-2 shrink-0 border border-[rgba(0,230,160,0.2)] rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e6a0]" style={{ boxShadow: "0 0 6px 2px rgba(0,230,160,0.5)", animation: "pulse-glow 2s ease-in-out infinite" }} />
                <span className="text-[11px] font-mono text-[rgba(0,230,160,0.8)]">Lab Online</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LAB_PROJECTS.map((p) => <LabProjectCard key={p.title} project={p} />)}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[{ label: "Robotics", icon: "🤖" }, { label: "IoT", icon: "📡" }, { label: "AI / ML", icon: "🧠" }, { label: "Electronics", icon: "⚡" }, { label: "3D Printing", icon: "🖨️" }, { label: "Automation", icon: "⚙️" }, { label: "Embedded Systems", icon: "💾" }, { label: "Computer Vision", icon: "👁️" }].map(({ label, icon }) => (
                <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default hover:border-[rgba(0,200,240,0.3)] hover:bg-[rgba(0,200,240,0.05)]" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)" }}>
                  <span className="text-sm">{icon}</span>
                  <span className="text-[12px] font-medium" style={{ color: "rgba(107,122,153,1)", fontFamily: "Inter, sans-serif" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
