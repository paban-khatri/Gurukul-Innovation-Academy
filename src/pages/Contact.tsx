import { useState } from "react";
import { Link } from "react-router";

// ─── Social icons ─────────────────────────────────────────────────────────────

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

// ─── Contact info items ───────────────────────────────────────────────────────

const INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#00c8f0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#7b61ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#00e6a0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" />
        <circle cx="10" cy="7" r="2" />
      </svg>
    ),
    label: "Location",
    value: "Sindhuli, Nepal",
    sub: "Serving schools across Nepal",
  },
];

// ─── Form input helper ────────────────────────────────────────────────────────

function Field({
  label, id, children,
}: {
  label: string; id: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[10px] font-bold tracking-[0.18em] uppercase text-[rgba(107,122,153,0.8)] font-mono"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  background: "rgba(7,11,22,0.8)",
  border: "1px solid rgba(0,200,240,0.12)",
  fontFamily: "Inter, sans-serif",
  color: "white",
  borderRadius: "10px",
  padding: "11px 16px",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  width: "100%",
};

function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  (e.currentTarget as HTMLElement).style.borderColor = "#00c8f0";
  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,200,240,0.1)";
}
function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,240,0.12)";
  (e.currentTarget as HTMLElement).style.boxShadow = "none";
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", institution: "", interest: "", message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-16">
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#020509" }}>

        {/* Top separator */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.35) 40%,rgba(123,97,255,0.35) 60%,transparent)" }} />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,200,240,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.025) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.04),rgba(123,97,255,0.04),transparent 70%)" }} />

        {/* Ambient nodes */}
        {[
          { top: "15%", left: "4%",  c: "#00c8f0", d: "0s" },
          { top: "60%", left: "2%",  c: "#7b61ff", d: "1.2s" },
          { top: "25%", right: "4%", c: "#7b61ff", d: "0.6s" },
          { top: "72%", right: "3%", c: "#00e6a0", d: "1.8s" },
        ].map((n, i) => (
          <div key={i} className="absolute w-[5px] h-[5px] rounded-full hidden lg:block"
            style={{ top: n.top, left: "left" in n ? n.left : undefined, right: "right" in n ? (n as { right: string }).right : undefined, background: n.c, boxShadow: `0 0 10px 3px ${n.c}80`, animation: `pulse-glow 2.5s ease-in-out infinite ${n.d}` } as React.CSSProperties}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.6)", animation: "pulse-glow 2.5s ease-in-out infinite" }} />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#00c8f0] uppercase font-mono">Get In Touch</span>
              </div>
            </div>
            <h2
              className="text-3xl sm:text-4xl xl:text-[48px] font-extrabold text-white leading-tight tracking-[-0.025em] mb-4"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              Let's Build Something{" "}
              <span style={{ background: "linear-gradient(135deg,#00c8f0,#7b61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Together.
              </span>
            </h2>
            <p className="text-[15px] text-[rgba(107,122,153,1)] leading-[1.8]" style={{ fontFamily: "Inter, sans-serif" }}>
              Whether you're a school looking to partner, a student wanting to learn, or an organisation interested in collaboration — we'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 xl:gap-16 items-start">

            {/* ── Left: Info column ── */}
            <div className="flex flex-col gap-8">

              {/* Contact info cards */}
              <div className="flex flex-col gap-3">
                {INFO.map(({ icon, label, value, sub, href }) => {
                  const cardContent = (
                    <>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "rgba(0,200,240,0.07)", borderColor: "rgba(0,200,240,0.15)" }}>
                        {icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-[rgba(107,122,153,0.7)] mb-0.5">{label}</p>
                        <p className="text-[14px] font-semibold text-white mb-0.5 group-hover:text-[#00c8f0] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{value}</p>
                        <p className="text-[12px] text-[rgba(107,122,153,0.6)]" style={{ fontFamily: "Inter, sans-serif" }}>{sub}</p>
                      </div>
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-250 group hover:-translate-y-0.5 hover:border-[rgba(0,200,240,0.3)] hover:bg-[rgba(0,200,240,0.03)] cursor-pointer"
                      style={{ background: "rgba(12,17,32,0.7)", borderColor: "rgba(0,200,240,0.1)" }}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div
                      key={label}
                      className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-250 group hover:-translate-y-0.5"
                      style={{ background: "rgba(12,17,32,0.7)", borderColor: "rgba(0,200,240,0.1)" }}
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[rgba(0,200,240,0.2)] to-transparent" />
                <span className="text-[10px] font-mono text-[rgba(107,122,153,0.5)] uppercase tracking-wider">Follow us</span>
                <div className="h-px flex-1 bg-gradient-to-l from-[rgba(0,200,240,0.2)] to-transparent" />
              </div>

              {/* Social icons */}
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200"
                    style={{ background: "rgba(12,17,32,0.7)", borderColor: "rgba(0,200,240,0.1)", color: "rgba(107,122,153,0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,240,0.3)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,200,240,0.08)";
                      (e.currentTarget as HTMLElement).style.color = "#00c8f0";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,240,0.1)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(12,17,32,0.7)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(107,122,153,0.8)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* Quick links */}
              <div>
                <p className="text-[10px] font-mono text-[rgba(107,122,153,0.5)] uppercase tracking-wider mb-3">Quick links</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Partner With Us", to: "/partners" },
                    { label: "Our Programs",    to: "/programs" },
                    { label: "Innovation Lab",  to: "/innovation-lab" },
                    { label: "Our Projects",    to: "/projects" },
                  ].map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      className="text-[12px] px-3.5 py-1.5 rounded-lg border border-[rgba(0,200,240,0.13)] text-[rgba(107,122,153,0.9)] hover:border-[rgba(0,200,240,0.28)] hover:text-[#00c8f0] hover:bg-[rgba(0,200,240,0.06)] transition-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div
              className="relative rounded-2xl p-8 lg:p-10 border overflow-hidden"
              style={{ background: "rgba(8,12,22,0.95)", borderColor: "rgba(0,200,240,0.14)", boxShadow: "0 0 0 1px rgba(0,200,240,0.05), 0 32px 80px rgba(0,0,0,0.5)" }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#00c8f0] rounded-tl-2xl opacity-50" />
              <div className="absolute bottom-0 right-0 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#7b61ff] rounded-br-2xl opacity-50" />
              {/* BG glow */}
              <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse at top center,rgba(0,200,240,0.05),transparent)" }} />

              {sent ? (
                /* ── Success state ── */
                <div className="relative flex flex-col items-center justify-center text-center gap-5 py-16">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                    style={{ background: "rgba(0,230,160,0.1)", borderColor: "rgba(0,230,160,0.3)", boxShadow: "0 0 32px rgba(0,230,160,0.2)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#00e6a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 14l6 6L23 8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Message sent!</h3>
                    <p className="text-[14px] text-[rgba(107,122,153,1)] max-w-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", institution: "", interest: "", message: "" }); }}
                      className="px-5 py-2 rounded-xl text-[13px] font-semibold border border-[rgba(0,200,240,0.25)] text-[#00c8f0] hover:bg-[rgba(0,200,240,0.08)] transition-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Send another
                    </button>
                    <Link to="/" className="px-5 py-2 rounded-xl text-[13px] font-semibold bg-[rgba(0,200,240,0.1)] text-[#00c8f0] border border-[rgba(0,200,240,0.2)] hover:bg-[rgba(0,200,240,0.15)] transition-all" style={{ fontFamily: "Inter, sans-serif" }}>
                      Back to home
                    </Link>
                  </div>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
                  <div className="mb-1">
                    <h3 className="text-[18px] font-extrabold text-white mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Send us a message</h3>
                    <p className="text-[13px] text-[rgba(107,122,153,0.8)]" style={{ fontFamily: "Inter, sans-serif" }}>We read every message and respond personally.</p>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" id="name">
                      <input id="name" required type="text" placeholder="Aarav Sharma" value={form.name} onChange={set("name")} style={inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                    </Field>
                    <Field label="Email Address *" id="email">
                      <input id="email" required type="email" placeholder="aarav@example.com" value={form.email} onChange={set("email")} style={inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                    </Field>
                  </div>

                  {/* Phone + Institution */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Phone Number" id="phone">
                      <input id="phone" type="tel" placeholder="+977 9864695384" value={form.phone} onChange={set("phone")} style={inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                    </Field>
                    <Field label="School / Institution" id="institution">
                      <input id="institution" type="text" placeholder="Your school or college" value={form.institution} onChange={set("institution")} style={inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                    </Field>
                  </div>

                  {/* Interest dropdown */}
                  <Field label="I am interested in" id="interest">
                    <div className="relative">
                      <select
                        id="interest"
                        value={form.interest}
                        onChange={set("interest")}
                        style={{ ...inputBase, appearance: "none", cursor: "pointer", paddingRight: "40px" }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
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
                      {/* Chevron */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4l4 4 4-4" stroke="rgba(107,122,153,0.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Field>

                  {/* Message */}
                  <Field label="Message *" id="message">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your school, the grade level you're targeting, and what technology topics interest you most…"
                      value={form.message}
                      onChange={set("message")}
                      style={{ ...inputBase, resize: "none", lineHeight: "1.6" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-[14px] font-bold bg-[#00c8f0] text-[#05080f] hover:brightness-110 hover:shadow-[0_0_32px_rgba(0,200,240,0.4)] active:scale-[0.98] transition-all duration-200 inline-flex items-center justify-center gap-2.5 mt-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>

                  <p className="text-center text-[11px] text-[rgba(107,122,153,0.5)]" style={{ fontFamily: "Inter, sans-serif" }}>
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
