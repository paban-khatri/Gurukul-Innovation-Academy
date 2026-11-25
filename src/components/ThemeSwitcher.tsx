import { useEffect, useRef, useState } from "react";
import { useTheme, type ThemePreference } from "../theme/ThemeContext";

interface ThemeOption {
  id: ThemePreference;
  label: string;
  description: string;
  swatch: string;
  accent: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "dark",
    label: "Dark",
    description: "Original dark tech",
    swatch: "#080d17",
    accent: "#00d4f5",
  },
  {
    id: "light",
    label: "Light",
    description: "Clean academy",
    swatch: "#f8fafc",
    accent: "#0891b2",
  },
  {
    id: "midnight",
    label: "Midnight",
    description: "Deep navy blue",
    swatch: "#0b1120",
    accent: "#67e8f9",
  },
  {
    id: "system",
    label: "System",
    description: "Match OS setting",
    swatch: "linear-gradient(135deg, #080d17 50%, #f8fafc 50%)",
    accent: "#60a5fa",
  },
];

function ThemeIcon({ theme, size = 15 }: { theme: ThemePreference; size?: number }) {
  if (theme === "light") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    );
  }
  if (theme === "midnight") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4M21 5h-4" />
      </svg>
    );
  }
  if (theme === "system") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeSwitcher({
  variant = "dropdown",
}: {
  variant?: "dropdown" | "panel";
}) {
  const { theme, systemTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (variant === "panel") {
    return (
      <div className="flex flex-col gap-2">
        <span
          className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--text-muted)" }}
        >
          Appearance
        </span>
        <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Color theme">
          {THEME_OPTIONS.map((opt) => {
            const active = theme === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setTheme(opt.id)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition-all duration-150 focus-ring"
                style={{
                  background: active ? "var(--accent-soft)" : "var(--pill-bg)",
                  borderColor: active ? "var(--accent-border)" : "var(--border-default)",
                  color: active ? "var(--accent)" : "var(--text-secondary)",
                }}
              >
                <span className="shrink-0">
                  <ThemeIcon theme={opt.id} size={15} />
                </span>
                <span className="text-[13px] font-medium truncate">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const currentOption =
    THEME_OPTIONS.find((opt) => opt.id === theme) ?? THEME_OPTIONS[0];

  const handleMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      itemRefs.current[(index + 1) % THEME_OPTIONS.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      itemRefs.current[
        (index - 1 + THEME_OPTIONS.length) % THEME_OPTIONS.length
      ]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      itemRefs.current[THEME_OPTIONS.length - 1]?.focus();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Color theme: ${currentOption.label}. Switch theme`}
        onClick={() => {
          setOpen((prev) => {
            const next = !prev;
            if (next) {
              requestAnimationFrame(() => {
                const activeIdx = THEME_OPTIONS.findIndex((o) => o.id === theme);
                itemRefs.current[activeIdx >= 0 ? activeIdx : 0]?.focus();
              });
            }
            return next;
          });
        }}
        className="h-9 px-2.5 sm:px-3 rounded-lg border inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-150 focus-ring cursor-pointer"
        style={{
          background: open ? "var(--accent-soft)" : "var(--pill-bg)",
          borderColor: open ? "var(--accent-border)" : "var(--border-default)",
          color: "var(--text-secondary)",
        }}
      >
        <span style={{ color: "var(--accent)" }}>
          <ThemeIcon theme={theme} size={15} />
        </span>
        <span className="hidden sm:inline min-w-[54px] text-left">
          {currentOption.label}
        </span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`hidden sm:block transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Theme options"
          className="absolute right-0 mt-2 w-56 rounded-xl border p-1.5 z-50"
          style={{
            background: "var(--bg-popover)",
            borderColor: "var(--border-strong)",
            boxShadow: "var(--shadow-elevated)",
          }}
        >
          <div
            className="px-2.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.16em]"
            style={{ color: "var(--text-muted)" }}
          >
            Theme Mode
          </div>
          {THEME_OPTIONS.map((opt, idx) => {
            const active = theme === opt.id;
            const subtitle =
              opt.id === "system"
                ? `OS: ${systemTheme === "dark" ? "Dark" : "Light"}`
                : opt.description;
            return (
              <button
                key={opt.id}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onKeyDown={(e) => handleMenuKeyDown(e, idx)}
                onClick={() => {
                  setTheme(opt.id);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors duration-150 focus-ring cursor-pointer"
                style={{
                  background: active ? "var(--accent-soft)" : "transparent",
                  color: active ? "var(--text-primary)" : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--pill-bg)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }
                }}
              >
                <span
                  className="w-7 h-7 rounded-md border flex items-center justify-center shrink-0"
                  style={{
                    background: opt.swatch,
                    borderColor: active
                      ? "var(--accent-border)"
                      : "var(--border-default)",
                    color: opt.id === "light" ? "#0f172a" : "#f8fafc",
                  }}
                >
                  <ThemeIcon theme={opt.id} size={13} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold leading-tight">
                    {opt.label}
                  </div>
                  <div
                    className="text-[11px] leading-tight mt-0.5 truncate"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {subtitle}
                  </div>
                </div>
                {active && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--accent)" }}
                  >
                    <path
                      d="M3.5 8.5L6.5 11.5L12.5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
