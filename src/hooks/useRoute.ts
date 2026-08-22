import { useState, useEffect } from "react";

/** Current pathname, kept in sync with browser back/forward and `navigate()`. */
export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onChange);
    window.addEventListener("routechange", onChange);
    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener("routechange", onChange);
    };
  }, []);

  return path;
}

/** Push a new path without a full page load. */
export function navigate(to: string) {
  if (to === window.location.pathname) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event("routechange"));
  window.scrollTo(0, 0);
}

/**
 * Click handler for internal links: intercepts plain left-clicks so they route
 * client-side, while leaving modified clicks (new tab, etc.) to the browser.
 */
export function handleNavClick(to: string) {
  return (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
  };
}
