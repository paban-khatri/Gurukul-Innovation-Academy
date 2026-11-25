import { Link, useLocation } from "react-router";
import Logo from "./Logo";

const FOOTER_NAV = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Innovation Lab", to: "/innovation-lab" },
      { label: "Our Projects", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Robotics", to: "/programs" },
      { label: "IoT", to: "/programs" },
      { label: "AI & ML", to: "/programs" },
      { label: "STEM & Innovation", to: "/programs" },
    ],
  },
  {
    heading: "Partnership",
    links: [
      { label: "School Partners", to: "/partners" },
      { label: "How It Works", to: "/partners" },
      { label: "Why Gurukul", to: "/partners" },
      { label: "Become a Partner", to: "/contact" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-footer)",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none circuit-grid opacity-80" />
      {/* Top hairline */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-border), var(--accent-secondary-border), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Main footer body */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-14 lg:py-16">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p
              className="text-[14px] leading-[1.75] max-w-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--type-footer)",
              }}
            >
              A technology education and innovation company. We partner with schools and colleges to teach Robotics, IoT, AI and STEM through practical, project-based learning.
            </p>

            {/* Tagline */}
            <div className="flex items-center gap-2">
              <div
                className="h-px w-10"
                style={{
                  background: "linear-gradient(90deg, var(--accent), transparent)",
                }}
              />
              <span
                className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase"
                style={{ color: "var(--accent)" }}
              >
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 focus-ring"
                  style={{
                    background: "var(--bg-card-solid)",
                    borderColor: "var(--border-default)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--accent-border)";
                    el.style.background = "var(--accent-soft)";
                    el.style.color = "var(--accent)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border-default)";
                    el.style.background = "var(--bg-card-solid)";
                    el.style.color = "var(--text-muted)";
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
                <span
                  className="w-1 h-3 rounded-full"
                  style={{ background: "var(--accent)", opacity: 0.75 }}
                />
                <h4
                  className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  {heading}
                </h4>
              </div>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, to }) => {
                  const active = pathname === to;
                  return (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-[13.5px] transition-all duration-150 inline-flex items-center gap-1 focus-ring rounded"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: active ? "var(--accent)" : "var(--type-footer)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            active ? "var(--accent)" : "var(--text-primary)";
                          (e.currentTarget as HTMLElement).style.paddingLeft =
                            "4px";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            active ? "var(--accent)" : "var(--type-footer)";
                          (e.currentTarget as HTMLElement).style.paddingLeft =
                            "0px";
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider with nodes */}
        <div className="relative flex items-center gap-3 mb-6">
          <span
            className="w-[5px] h-[5px] rounded-full"
            style={{
              background: "var(--accent)",
              boxShadow: "var(--glow-node)",
            }}
          />
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--accent-border), var(--accent-secondary-border), transparent)",
            }}
          />
          <span
            className="w-[4px] h-[4px] rounded-full"
            style={{
              background: "var(--accent-secondary)",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-8 text-[12.5px]"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
        >
          <p className="text-center sm:text-left">
            © {year} Gurukul Innovation Academy. All rights reserved. · Sindhuli, Nepal
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--status-success)" }}
              />
              <span className="font-mono text-[11px]" style={{ color: "var(--text-supporting)" }}>
                All systems operational
              </span>
            </span>
            <span aria-hidden="true">·</span>
            <Link
              to="/contact"
              className="hover:underline underline-offset-4 transition-colors focus-ring rounded"
              style={{ color: "var(--text-muted)" }}
            >
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/contact"
              className="hover:underline underline-offset-4 transition-colors focus-ring rounded"
              style={{ color: "var(--text-muted)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
