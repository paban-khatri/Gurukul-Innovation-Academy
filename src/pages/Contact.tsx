import { useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, Eyebrow, GradientText } from "../components/ui";

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

const INFO = [
  {
    color: "var(--cat-cyan)",
    soft: "var(--cat-cyan-soft)",
    border: "var(--cat-cyan-border)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M2 6l8 6 8-6" />
      </svg>
    ),
    label: "Email",
    value: "paban.khatri67@gmail.com",
    href: "mailto:paban.khatri67@gmail.com",
    sub: "Response within 24 hours",
  },
  {
    color: "var(--cat-violet)",
    soft: "var(--cat-violet-soft)",
    border: "var(--cat-violet-border)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 19 12.95M13 17a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4zM5 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4z" />
        <path d="M7 17h6" />
      </svg>
    ),
    label: "Phone",
    value: "+977 9864695384",
    href: "tel:+9779864695384",
    sub: "Sun–Fri, 10am–6pm NPT",
  },
  {
    color: "var(--cat-emerald)",
    soft: "var(--cat-emerald-soft)",
    border: "var(--cat-emerald-border)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" />
        <circle cx="10" cy="7" r="2" />
      </svg>
    ),
    label: "Location",
    value: "Sindhuli, Nepal",
    sub: "Serving schools across Nepal",
  },
];

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[11px] font-bold tracking-[0.16em] uppercase font-mono"
        style={{ color: "var(--type-label)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    interest: "",
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      if (error) setError(null);
      setForm({ ...form, [k]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email address, and message.");
      return;
    }
    setError(null);
    setSent(true);
  };

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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-5">
              <Eyebrow label="Get In Touch" center />
            </div>
            <h1 className="type-section mb-4">
              Let's Build Something <GradientText>Together.</GradientText>
            </h1>
            <p className="type-body">
              Whether you're a school looking to partner, a student wanting to learn, or an organisation interested in collaboration — we'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 xl:gap-16 items-start">
            {/* Left: Info column */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                {INFO.map(({ icon, label, value, sub, href, color, soft, border }) => {
                  const cardContent = (
                    <>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
                        style={{
                          background: soft,
                          borderColor: border,
                          color,
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p
                          className="text-[10.5px] font-mono uppercase tracking-wider mb-0.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-[14.5px] font-semibold mb-0.5 group-hover:text-[var(--accent)] transition-colors"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {value}
                        </p>
                        <p className="type-caption">{sub}</p>
                      </div>
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-5 rounded-2xl surface-card surface-card-hover group cursor-pointer focus-ring"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div
                      key={label}
                      className="flex items-start gap-4 p-5 rounded-2xl surface-card group"
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-border), transparent)",
                  }}
                />
                <span
                  className="text-[10.5px] font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Follow us
                </span>
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(270deg, var(--accent-border), transparent)",
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center surface-card transition-all duration-200 focus-ring"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--accent-border)";
                      el.style.background = "var(--accent-soft)";
                      el.style.color = "var(--accent)";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border-default)";
                      el.style.background = "var(--bg-card)";
                      el.style.color = "var(--text-secondary)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              <div>
                <p
                  className="text-[10.5px] font-mono uppercase tracking-wider mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Quick links
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Partner With Us", to: "/partners" },
                    { label: "Our Programs", to: "/programs" },
                    { label: "Innovation Lab", to: "/innovation-lab" },
                    { label: "Our Projects", to: "/projects" },
                  ].map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      className="text-[12.5px] px-3.5 py-1.5 rounded-lg border transition-colors focus-ring"
                      style={{
                        fontFamily: "var(--font-body)",
                        borderColor: "var(--border-default)",
                        background: "var(--bg-card-solid)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="relative rounded-2xl p-8 lg:p-10 surface-card overflow-hidden"
              style={{
                background: "var(--bg-card-solid)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-7 h-7 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl opacity-60"
                style={{ borderColor: "var(--accent)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-7 h-7 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl opacity-60"
                style={{ borderColor: "var(--accent-secondary)" }}
              />

              {sent ? (
                <div className="relative flex flex-col items-center justify-center text-center gap-5 py-16">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                    style={{
                      background: "var(--status-success-soft)",
                      borderColor: "var(--status-success-border)",
                      color: "var(--status-success)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 14l6 6L23 8" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-extrabold mb-2"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--type-success)",
                      }}
                    >
                      Message sent!
                    </h3>
                    <p className="type-body max-w-xs">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          institution: "",
                          interest: "",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl text-[13px] btn-secondary focus-ring cursor-pointer"
                    >
                      Send another
                    </button>
                    <Link
                      to="/"
                      className="px-5 py-2.5 rounded-xl text-[13px] btn-primary focus-ring"
                    >
                      Back to home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
                  <div className="mb-1">
                    <h2 className="type-card-title mb-1">Send us a message</h2>
                    <p className="type-caption">
                      We read every message and respond personally.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="px-4 py-3 rounded-xl border text-[13px] font-medium"
                      style={{
                        background: "var(--status-error-soft)",
                        borderColor: "var(--status-error-border)",
                        color: "var(--type-error)",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" id="name">
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Aarav Sharma"
                        value={form.name}
                        onChange={set("name")}
                        className="theme-input"
                      />
                    </Field>
                    <Field label="Email Address *" id="email">
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="aarav@example.com"
                        value={form.email}
                        onChange={set("email")}
                        className="theme-input"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Phone Number" id="phone">
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+977 98XXXXXXXX"
                        value={form.phone}
                        onChange={set("phone")}
                        className="theme-input"
                      />
                    </Field>
                    <Field label="School / Institution" id="institution">
                      <input
                        id="institution"
                        type="text"
                        placeholder="Your school or college"
                        value={form.institution}
                        onChange={set("institution")}
                        className="theme-input"
                      />
                    </Field>
                  </div>

                  <Field label="I am interested in" id="interest">
                    <div className="relative">
                      <select
                        id="interest"
                        value={form.interest}
                        onChange={set("interest")}
                        className="theme-input appearance-none cursor-pointer pr-10"
                      >
                        <option value="">Select a topic</option>
                        <option>Robotics Program</option>
                        <option>IoT Program</option>
                        <option>AI Program</option>
                        <option>STEM Program</option>
                        <option>Innovation Lab</option>
                        <option>School / College Partnership</option>
                        <option>Technology Project</option>
                        <option>Other</option>
                      </select>
                      <div
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: "var(--text-muted)" }}
                        aria-hidden="true"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Field>

                  <Field label="Message *" id="message">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your school, the grade level you're targeting, and what technology topics interest you most…"
                      value={form.message}
                      onChange={set("message")}
                      className="theme-input resize-none leading-[1.6]"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-[14.5px] btn-primary inline-flex items-center justify-center gap-2.5 mt-1 focus-ring cursor-pointer"
                  >
                    Send Message <ArrowRightIcon size={15} />
                  </button>

                  <p className="text-center type-caption">
                    We typically respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
