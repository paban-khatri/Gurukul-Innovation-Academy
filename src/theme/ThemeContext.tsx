import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemePreference = "dark" | "light" | "midnight" | "system";
export type ResolvedTheme = "dark" | "light" | "midnight";

const STORAGE_KEY = "gia-theme";
const VALID_THEMES: readonly ThemePreference[] = [
  "dark",
  "light",
  "midnight",
  "system",
];

function isValidTheme(value: string | null): value is ThemePreference {
  return value !== null && (VALID_THEMES as readonly string[]).includes(value);
}

function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isValidTheme(stored)) return stored;
  } catch {
    // Ignore storage access errors in restricted contexts
  }
  return "dark";
}

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(
  preference: ThemePreference,
  systemTheme: "dark" | "light",
): ResolvedTheme {
  return preference === "system" ? systemTheme : preference;
}

function applyThemeToDocument(
  resolved: ResolvedTheme,
  preference: ThemePreference,
) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.setAttribute("data-theme-preference", preference);
  root.style.colorScheme = resolved === "light" ? "light" : "dark";
}

interface ThemeContextValue {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  systemTheme: "dark" | "light";
  setTheme: (next: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(() =>
    readStoredPreference(),
  );
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">(() =>
    getSystemTheme(),
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = (matches: boolean) => {
      setSystemTheme(matches ? "dark" : "light");
    };

    updateSystemTheme(media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      updateSystemTheme(event.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  const resolvedTheme = useMemo(
    () => resolveTheme(theme, systemTheme),
    [theme, systemTheme],
  );

  useEffect(() => {
    applyThemeToDocument(resolvedTheme, theme);
  }, [resolvedTheme, theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setThemeState(isValidTheme(event.newValue) ? event.newValue : "dark");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setTheme = useCallback((next: ThemePreference) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage write errors
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      systemTheme,
      setTheme,
    }),
    [theme, resolvedTheme, systemTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
