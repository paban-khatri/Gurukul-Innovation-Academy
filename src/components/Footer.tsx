import { Link, useLocation } from "react-router";
import Logo from "./Logo";

const FOOTER_NAV = [
  {
    heading: "Company",
    links: [
      { label: "About Us",       to: "/about" },
      { label: "Innovation Lab", to: "/innovation-lab" },
      { label: "Our Projects",   to: "/projects" },
      { label: "Contact",        to: "/contact" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Robotics",         to: "/programs" },
      { label: "IoT",              to: "/programs" },
      { label: "AI & ML",          to: "/programs" },
      { label: "STEM & Innovation",to: "/programs" },
    ],
  },
  {
    heading: "Partnership",
    links: [
      { label: "School Partners",  to: "/partners" },
      { label: "How It Works",     to: "/partners" },
      { label: "Why Gurukul",      to: "/partners" },
      { label: "Become a Partner", to: "/contact" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" /></svg>,
  },
  {
    label: "GitHub",
    href: "#",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
  },
];

export default function Footer() {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#020509", borderTop: "1px solid rgba(0,200,240,0.1)" }}
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,200,240,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,240,0.022) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Top glow band */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,240,0.4),rgba(123,97,255,0.4),transparent)" }} />
      {/* Background radial */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,200,240,0.025),rgba(123,97,255,0.02),transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* ── Main footer body ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-14 lg:py-16">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p
              className="text-[13.5px] text-[rgba(107,122,153,0.9)] leading-[1.8] max-w-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A technology education and innovation company. We partner with schools and colleges to teach Robotics, IoT, AI and STEM through practical, project-based learning.
            </p>

            {/* Tagline */}
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-gradient-to-r from-[#00c8f0] to-transparent" />
              <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[rgba(0,200,240,0.6)] uppercase">
                Learn · Build · Innovate
              </span>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)", color: "rgba(107,122,153,0.7)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(0,200,240,0.3)";
                    el.style.background = "rgba(0,200,240,0.08)";
                    el.style.color = "#00c8f0";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.color = "rgba(107,122,153,0.7)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-[#00c8f0] opacity-60" />
                <h4
                  className="text-[11px] font-bold tracking-[0.2em] text-[rgba(232,237,245,0.5)] uppercase font-mono"
                >
                  {heading}
                </h4>
              </div>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-[13px] transition-all duration-150 inline-flex items-center gap-1 group"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: pathname === to ? "#00c8f0" : "rgba(107,122,153,0.85)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(232,237,245,0.9)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = pathname === to ? "#00c8f0" : "rgba(107,122,153,0.85)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider with nodes ── */}
        <div className="relative flex items-center gap-3 mb-6">
          <span className="w-[5px] h-[5px] rounded-full bg-[#00c8f0]" style={{ boxShadow: "0 0 8px 2px rgba(0,200,240,0.5)" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(0,200,240,0.25), rgba(123,97,255,0.15), transparent)" }} />
          <span className="w-[4px] h-[4px] rounded-full bg-[#7b61ff]" style={{ boxShadow: "0 0 6px 2px rgba(123,97,255,0.5)" }} />
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-8 text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>
          <p className="text-[rgba(107,122,153,0.6)] text-center sm:text-left">
            © {year} Gurukul Innovation Academy. All rights reserved. · Sindhuli, Nepal
          </p>
          <div className="flex items-center gap-4 text-[rgba(107,122,153,0.5)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e6a0]" style={{ boxShadow: "0 0 5px rgba(0,230,160,0.5)" }} />
              <span className="font-mono text-[11px]">All systems operational</span>
            </span>
            <span>·</span>
            <span className="hover:text-[rgba(232,237,245,0.6)] transition-colors cursor-pointer">Privacy</span>
            <span>·</span>
            <span className="hover:text-[rgba(232,237,245,0.6)] transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
