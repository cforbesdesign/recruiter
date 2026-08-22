import { useState, useEffect, useRef } from "react";
import { handleNavClick } from "../hooks/useRoute";

function LogoIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-full block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <defs>
        <mask id="logo-cutout">
          <rect width="48" height="48" fill="white" />
          <path d="M28.8889 22.3056V19.1094H13V34.9983H28.8889V31.802H16.1921V22.3046L28.8889 22.3056Z" fill="black" />
          <path d="M34.9794 13H13V16.161H31.8395V25.5702H19.2798V28.7341H31.8395V35H35V13H34.9794Z" fill="black" />
        </mask>
      </defs>
      <rect
        width="48"
        height="48"
        mask="url(#logo-cutout)"
        style={{ fill: hovered ? "var(--color-accent)" : "var(--color-content)", transition: "fill 300ms ease" }}
      />
    </svg>
  );
}

function ContactCTA({ style, className, onClick }: { style?: React.CSSProperties; className?: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="/contact"
      className={className}
      style={{
        ...style,
        backgroundColor: hovered ? "var(--color-accent)" : "var(--color-cta-bg)",
        // Accent is light-on-orange in both themes, so override the dark-mode
        // dark label while hovered.
        color: hovered ? "var(--color-almost-white)" : "var(--color-cta-fg)",
        transition: "background-color 300ms ease, color 300ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        handleNavClick("/contact")(e);
        onClick?.();
      }}
    >
      Make Contact
    </a>
  );
}

function NavLink({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: '"neue-haas-grotesk-display", sans-serif',
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: "0.2px",
        lineHeight: "22px",
        color: hovered ? "var(--color-accent)" : "var(--color-cta-bg)",
        textDecoration: "none",
        transition: "color 300ms ease",
      }}
    >
      {children}
    </a>
  );
}

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "LinkedIn", href: "https://linkedin.com/in/craig-forbes-8769331b", external: true },
  { label: "Make Contact", href: "/contact", external: false },
];

function HamburgerIcon({ open }: { open: boolean }) {
  const barBase: React.CSSProperties = {
    position: "absolute",
    width: 18,
    height: 2,
    left: 3,
    backgroundColor: "var(--color-content)",
    borderRadius: 999,
    transformOrigin: "center center",
    transition: "top 0.3s ease, transform 0.3s ease",
  };
  return (
    <span style={{ position: "relative", display: "block", width: 24, height: 24 }}>
      <span style={{ ...barBase, top: open ? 11 : 7, transform: open ? "rotate(45deg)" : "none" }} />
      <span style={{ ...barBase, top: open ? 11 : 15, transform: open ? "rotate(-45deg)" : "none" }} />
    </span>
  );
}

const NAV_STYLE: React.CSSProperties = {
  backdropFilter: "blur(48px)",
  WebkitBackdropFilter: "blur(48px)",
  backgroundColor: "var(--color-nav-bg)",
  borderRadius: 36,
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 80) {
        setNavHidden(true);
        setOpen(false);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-4 left-1/2 z-40 w-[calc(100%-48px)] max-w-[1512px] sm:w-[calc(100%-96px)] xl:w-[calc(100%-160px)] overflow-hidden"
      style={{
        ...NAV_STYLE,
        transform: navHidden ? "translate(-50%, calc(-100% - 2rem))" : "translate(-50%, 0)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Top row — logo left, links/hamburger right. Never moves. */}
      <div
        className="flex items-center justify-between p-4 xs:p-2"
      >
        <a href="/" onClick={handleNavClick("/")} className="flex items-center">
          <LogoIcon />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xs:flex">
          {links.map(({ label, href, external }) => {
            const isCta = label === "Make Contact";
            return (
              <li key={label}>
                {isCta ? (
                  <ContactCTA
                    style={{
                      fontFamily: '"neue-haas-grotesk-display", sans-serif',
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "0.2px",
                      color: "var(--color-cta-fg)",
                      textDecoration: "none",
                      borderRadius: 9999,
                      padding: "8px 20px",
                      display: "inline-block",
                    }}
                  />
                ) : (
                  <NavLink href={href} external={external}>
                    {label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex items-center justify-center xs:hidden"
          style={{ width: 24, height: 24, background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Mobile expandable links */}
      <div
        className="xs:hidden overflow-hidden"
        style={{
          maxHeight: open ? 400 : 0,
          transition: "max-height 0.35s ease-in-out",
        }}
      >
        {/* Gap between top row and links matches Mobbin's gap:20px */}
        <ul
          className="flex flex-col"
          style={{ padding: "8px 20px 20px", gap: 16 }}
        >
          {links.slice(0, -1).map(({ label, href, external }, index) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`block transition-all duration-300 ease-out ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "0.2px",
                  lineHeight: "22px",
                  color: "var(--color-content)",
                  textDecoration: "none",
                  transitionDelay: open ? `${index * 50 + 50}ms` : "0ms",
                }}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ padding: "0 13px 13px" }}>
          <ContactCTA
            className="block w-full text-center"
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              color: "var(--color-cta-fg)",
              borderRadius: 9999,
              padding: "12px 0",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.2px",
              textDecoration: "none",
            }}
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
