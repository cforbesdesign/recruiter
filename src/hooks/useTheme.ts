import { useState, useEffect, useCallback, useRef } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "cf-theme";

/**
 * Light is the default for everyone. Dark is opt-in via the toggle and only
 * persists once the visitor has chosen it — the OS preference is not consulted.
 */
function initialTheme(): Theme {
  return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const userChose = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#282828" : "#f5f5f5");
    // Persisted here rather than in the updater — StrictMode double-invokes
    // updaters, so a write in there would flip twice and cancel itself out.
    if (userChose.current) localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = useCallback(() => {
    userChose.current = true;
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
