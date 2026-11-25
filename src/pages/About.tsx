import { Link } from "react-router";
import { ArrowRightIcon, Eyebrow, GradientText } from "../components/ui";

function MissionVisionCard({
  type,
  text,
}: {
  type: "Mission" | "Vision";
  text: string;
}) {
  const isMission = type === "Mission";
  const accent = isMission ? "var(--cat-cyan)" : "var(--cat-violet)";
  const soft = isMission ? "var(--cat-cyan-soft)" : "var(--cat-violet-soft)";
  const border = isMission ? "var(--cat-cyan-border)" : "var(--cat-violet-border)";

  const icon = isMission ? (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="9" cy="9" r="7" />
      <circle cx="9" cy="9" r="3" />
      <line x1="9" y1="2" x2="9" y2="0.5" />
      <line x1="9" y1="16" x2="9" y2="17.5" />
      <line x1="2" y1="9" x2="0.5" y2="9" />
      <line x1="16" y1="9" x2="17.5" y2="9" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M9 2L11.5 7H16.5L12.5 10.5L14 16L9 13L4 16L5.5 10.5L1.5 7H6.5L9 2Z" />
    </svg>
  );

  return (
    <div
      className="flex gap-4 rounded-xl p-5 surface-card transition-transform duration-200 hover:-translate-y-0.5"
      style={{ borderColor: border }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border"
        style={{ background: soft, borderColor: border }}
      >
        {icon}
      </div>
      <div>
        <p
          className="text-[11px] font-bold tracking-[0.18em] uppercase mb-1.5 font-mono"
          style={{ color: accent }}
        >
          {type}
        </p>
        <p
          className="text-[14.5px] leading-[1.7]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function About() {
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
          <div className="flex items-center gap-3 mb-14 lg:mb-16">
            <Eyebrow label="Who We Are" />
            <div
              className="flex-1 h-px max-w-[120px]"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent-border), transparent)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  background: "var(--bg-card-solid)",
                  borderColor: "var(--accent-border)",
                  boxShadow: "var(--shadow-elevated)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl z-10"
                  style={{ borderColor: "var(--accent)" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl z-10"
                  style={{ borderColor: "var(--accent-secondary)" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=660&fit=crop&auto=format&q=85"
                  alt="Students working with electronics"
                  className="w-full object-cover"
                  style={{
                    aspectRatio: "4/3",
                    display: "block",
                    opacity: "var(--hero-image-opacity)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "var(--image-overlay-bottom)" }}
                />

                <div
                  className="absolute bottom-5 left-5 backdrop-blur-md border rounded-2xl px-5 py-4"
                  style={{
                    background: "var(--image-badge-bg)",
                    borderColor: "var(--border-default)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex items-end gap-3">
                    {[
                      { val: "48", label: "Partner Institutions" },
                      { val: "7", label: "Districts" },
                    ].map(({ val, label }, i) => (
                      <div key={label} className="flex items-end gap-3">
                        {i > 0 && (
                          <div
                            className="w-px h-10"
                            style={{ background: "var(--border-strong)" }}
                          />
                        )}
                        <div>
                          <div className="text-3xl font-extrabold leading-none gradient-text">
                            {val}
                          </div>
                          <div
                            className="text-[11.5px] mt-0.5 font-medium"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute top-5 right-5 backdrop-blur-md border rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "var(--image-badge-bg)",
                    borderColor: "var(--border-default)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    className="text-xl font-extrabold leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--accent-secondary-text)",
                    }}
                  >
                    5+
                  </div>
                  <div
                    className="text-[10.5px] mt-0.5 font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Years Active
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-3 -left-3 w-[5px] h-[5px] rounded-full node-pulse"
                style={{
                  background: "var(--accent)",
                  boxShadow: "var(--glow-node)",
                }}
              />
              <div
                className="absolute -top-3 -right-3 w-[4px] h-[4px] rounded-full node-pulse"
                style={{
                  background: "var(--accent-secondary)",
                  animationDelay: "1s",
                }}
              />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <div>
                <h1 className="type-section mb-5">
                  Education that goes{" "}
                  <GradientText>beyond the classroom.</GradientText>
                </h1>
                <p className="type-body">
                  Gurukul Innovation Academy is a technology education and innovation company focused on bringing practical technology learning to schools and colleges while developing real-world technology solutions through our own innovation initiatives.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-border), transparent)",
                  }}
                />
                <div
                  className="w-[5px] h-[5px] rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              <div className="flex flex-col gap-3">
                <MissionVisionCard
                  type="Mission"
                  text="Make emerging technology accessible, practical and exciting for students across Nepal."
                />
                <MissionVisionCard
                  type="Vision"
                  text="Build a generation of creators, engineers and innovators who shape the future of Nepal."
                />
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {[
                  { label: "Education", icon: "🎓" },
                  { label: "Technology", icon: "⚙️" },
                  { label: "Innovation", icon: "💡" },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 py-4 rounded-xl surface-card hover:border-[var(--accent-border)] transition-colors cursor-default"
                  >
                    <span className="text-xl">{icon}</span>
                    <span
                      className="text-[11px] font-semibold tracking-wide uppercase"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/programs"
                  className="px-6 py-2.5 rounded-xl text-[13.5px] btn-primary inline-flex items-center gap-2 focus-ring"
                >
                  View Programs <ArrowRightIcon size={13} />
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
    </div>
  );
}
