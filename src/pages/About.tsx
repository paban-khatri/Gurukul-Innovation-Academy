import { Link } from "react-router";

function MissionVisionCard({ type, text }: { type: "Mission" | "Vision"; text: string }) {
  const isMission = type === "Mission";
  const accent = isMission ? "#00c8f0" : "#7b61ff";
  const glow   = isMission ? "rgba(0,200,240,0.12)" : "rgba(123,97,255,0.12)";
  const border = isMission ? "rgba(0,200,240,0.15)" : "rgba(123,97,255,0.15)";
  const icon   = isMission ? (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={accent} strokeWidth="1.4" strokeLinecap="round">
      <circle cx="9" cy="9" r="7" /><circle cx="9" cy="9" r="3" />
      <line x1="9" y1="2" x2="9" y2="0.5" /><line x1="9" y1="16" x2="9" y2="17.5" />
      <line x1="2" y1="9" x2="0.5" y2="9" /><line x1="16" y1="9" x2="17.5" y2="9" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={accent} strokeWidth="1.4" strokeLinecap="round">
      <path d="M9 2L11.5 7H16.5L12.5 10.5L14 16L9 13L4 16L5.5 10.5L1.5 7H6.5L9 2Z" />
    </svg>
  );
  return (
    <div className="flex gap-4 rounded-xl p-5 border transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(12,17,32,0.7)", borderColor: border }}>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border" style={{ background: glow, borderColor: border }}>{icon}</div>
      <div>
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2 font-mono" style={{ color: accent }}>{type}</p>
        <p className="text-[14px] text-[rgba(232,237,245,0.85)] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>{text}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-16">
      <section className="relative bg-[var(--background)] py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,200,240,0.15)] to-transparent" />
        <div className="absolute right-0 top-1/3 w-[480px] h-[480px] bg-[rgba(123,97,255,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute left-0 bottom-1/4 w-[360px] h-[360px] bg-[rgba(0,200,240,0.04)] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-14 lg:mb-16">
            <span className="w-[5px] h-[5px] rounded-full bg-[#00c8f0] shrink-0" style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#00c8f0] uppercase font-mono">Who We Are</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,200,240,0.25)] to-transparent max-w-[120px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,200,240,0.16)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 0 1px rgba(0,200,240,0.06)" }}>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-[#00c8f0] rounded-tl-2xl z-10" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[#7b61ff] rounded-br-2xl z-10" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=660&fit=crop&auto=format&q=85" alt="Students working with electronics" className="w-full object-cover" style={{ aspectRatio: "4/3", display: "block", opacity: 0.78 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,200,240,0.06)] via-transparent to-[rgba(123,97,255,0.1)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 bg-[rgba(5,8,15,0.85)] backdrop-blur-md border border-[rgba(0,200,240,0.2)] rounded-2xl px-5 py-4">
                  <div className="flex items-end gap-3">
                    {[{ val: "48", label: "Partner Institutions" }, { val: "7", label: "Districts" }].map(({ val, label }, i) => (
                      <div key={label} className="flex items-end gap-3">
                        {i > 0 && <div className="w-px h-10 bg-[rgba(0,200,240,0.15)]" />}
                        <div>
                          <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, background: "linear-gradient(135deg,#00c8f0,#7b61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{val}</div>
                          <div className="text-[11px] text-[rgba(107,122,153,1)] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-5 right-5 bg-[rgba(5,8,15,0.85)] backdrop-blur-md border border-[rgba(123,97,255,0.2)] rounded-xl px-4 py-3 text-center">
                  <div className="text-xl font-extrabold text-[#a08fff] leading-none" style={{ fontFamily: "Manrope, sans-serif" }}>5+</div>
                  <div className="text-[10px] text-[rgba(107,122,153,1)] mt-0.5 font-mono">Years Active</div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-[5px] h-[5px] rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
              <div className="absolute -top-3 -right-3 w-[4px] h-[4px] rounded-full bg-[#7b61ff]" style={{ boxShadow: "0 0 8px 2px rgba(123,97,255,0.6)", animation: "pulse-glow 3s ease-in-out infinite 1s" }} />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl xl:text-[42px] font-extrabold text-white leading-tight tracking-[-0.02em] mb-5" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}>
                  Education that goes{" "}
                  <span style={{ background: "linear-gradient(135deg,#00c8f0,#7b61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>beyond the classroom.</span>
                </h2>
                <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]" style={{ fontFamily: "Inter, sans-serif" }}>
                  Gurukul Innovation Academy is a technology education and innovation company focused on bringing practical technology learning to schools and colleges while developing real-world technology solutions through our own innovation initiatives.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[rgba(0,200,240,0.2)] to-transparent" />
                <div className="w-[5px] h-[5px] rounded-full bg-[rgba(0,200,240,0.4)]" />
              </div>

              <div className="flex flex-col gap-3">
                <MissionVisionCard type="Mission" text="Make emerging technology accessible, practical and exciting for students across Nepal." />
                <MissionVisionCard type="Vision" text="Build a generation of creators, engineers and innovators who shape the future of Nepal." />
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {[{ label: "Education", icon: "🎓" }, { label: "Technology", icon: "⚙️" }, { label: "Innovation", icon: "💡" }].map(({ label, icon }) => (
                  <div key={label} className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[rgba(0,200,240,0.1)] bg-[rgba(12,17,32,0.6)] hover:border-[rgba(0,200,240,0.25)] transition-colors cursor-default">
                    <span className="text-xl">{icon}</span>
                    <span className="text-[11px] font-semibold text-[rgba(232,237,245,0.6)] tracking-wide uppercase" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/programs" className="px-6 py-2.5 rounded-xl text-[13px] font-semibold bg-[#00c8f0] text-[#05080f] hover:brightness-110 transition-all inline-flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  View Programs
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/partners" className="px-6 py-2.5 rounded-xl text-[13px] font-semibold border border-[rgba(0,200,240,0.3)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all" style={{ fontFamily: "Inter, sans-serif" }}>
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
