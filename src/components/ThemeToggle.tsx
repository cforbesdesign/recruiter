import { useState } from "react";
import type { Theme } from "../hooks/useTheme";

/**
 * Floating light/dark switch, pinned bottom-right. Sun and moon cross-fade and
 * rotate through each other rather than swapping instantly.
 */
export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-full md:right-8 md:bottom-8"
      style={{
        // cta-bg inverts per theme, so the button stays visible against the
        // page in both (--color-inverse would vanish on the dark ground).
        backgroundColor: hovered ? "var(--color-accent)" : "var(--color-cta-bg)",
        color: hovered ? "var(--color-almost-white)" : "var(--color-cta-fg)",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 16px rgb(0 0 0 / 0.18)",
        transition: "background-color 300ms ease, transform 300ms ease",
        transform: hovered ? "scale(1.06)" : "scale(1)",
      }}
    >
      <span className="relative block size-6">
        {/* Sun — shown in dark mode, i.e. the action is "go light" */}
        <Icon visible={isDark}>
          <circle cx="12" cy="12" r="4.25" />
          <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3" />
        </Icon>
        {/* Moon — shown in light mode */}
        <Icon visible={!isDark}>
          <path d="M20 13.4A8.2 8.2 0 1 1 10.6 4a6.6 6.6 0 0 0 9.4 9.4Z" />
        </Icon>
      </span>
    </button>
  );
}

function Icon({
  visible,
  children,
}: {
  visible: boolean;
  children: React.ReactNode;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute inset-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.6)",
        transition: "opacity 300ms ease, transform 300ms ease",
      }}
    >
      {children}
    </svg>
  );
}
