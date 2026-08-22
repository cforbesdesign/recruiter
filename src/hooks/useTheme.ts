import { useState, useEffect, useCallback, useRef } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "cf-theme";

/** Stored choice if there is one, otherwise the OS preference. */
function initialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
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

  // Follow the OS only while the visitor hasn't made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    userChose.current = true;
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
