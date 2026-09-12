import { useState, useEffect, useRef } from "react";
import { handleNavClick } from "../hooks/useRoute";

function LogoIcon() {
  const [hovered, setHovered] = useState(false);
  const color = hovered ? "#EC4E33" : "#282828";
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block size-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect width="48" height="48" rx="9.6" style={{ fill: color, transition: "fill 300ms ease" }} />
      <path d="M27.2362 22.7698C27.4126 22.7698 27.5556 22.6269 27.5556 22.4505V20.7646C27.5556 20.5883 27.4126 20.4453 27.2363 20.4453H16.3193C16.143 20.4453 16 20.5883 16 20.7646V31.6816C16 31.8579 16.143 32.0009 16.3193 32.0009H27.2363C27.4126 32.0009 27.5556 31.8579 27.5556 31.6816V29.9956C27.5556 29.8193 27.4126 29.6763 27.2363 29.6763H18.6408C18.4645 29.6763 18.3215 29.5334 18.3215 29.357V23.0885C18.3215 22.9121 18.4645 22.7691 18.6408 22.7692L27.2362 22.7698Z" fill="white" />
      <path d="M32 16.3193C32 16.143 31.857 16 31.6807 16H16.3193C16.143 16 16 16.143 16 16.3193V17.9796C16 18.1559 16.143 18.2989 16.3193 18.2989H29.3822C29.5585 18.2989 29.7014 18.4418 29.7014 18.6182V24.8226C29.7014 24.999 29.5585 25.1419 29.3821 25.1419H20.8864C20.7101 25.1419 20.5671 25.2849 20.5671 25.4612V27.1237C20.5671 27.3 20.7101 27.443 20.8864 27.443H29.3822C29.5585 27.443 29.7014 27.5859 29.7014 27.7623V31.6807C29.7014 31.857 29.8444 32 30.0207 32H31.6807C31.857 32 32 31.857 32 31.6807V16.3193Z" fill="white" />
      <rect x="1.125" y="1.125" width="45.75" height="45.75" rx="8.475" stroke={color} strokeWidth="2.25" style={{ transition: "stroke 300ms ease" }} />
    </svg>
  );
}

// Flat solid pills — hover swaps to the "Blue 2" brand color.
const PILL_COLORS = "bg-ink text-white hover:bg-[#3d6596] transition-colors duration-300";

function ContactCTA({ style, className, onClick }: { style?: React.CSSProperties; className?: string; onClick?: () => void }) {
  return (
    <a
      href="mailto:cforbesdesign@gmail.com"
      className={`${PILL_COLORS} ${className ?? ""}`}
      style={style}
      onClick={() => onClick?.()}
    >
      Contact
    </a>
  );
}

function LinkedInCTA({ style, className, onClick }: { style?: React.CSSProperties; className?: string; onClick?: () => void }) {
  return (
    <a
      href="https://linkedin.com/in/craig-forbes-8769331b"
      target="_blank"
      rel="noreferrer"
      className={`${PILL_COLORS} ${className ?? ""}`}
      style={style}
      onClick={() => onClick?.()}
    >
      LinkedIn
    </a>
  );
}

const NAV_STYLE: React.CSSProperties = {
  backdropFilter: "blur(48px)",
  WebkitBackdropFilter: "blur(48px)",
  backgroundColor: "rgba(245, 245, 245, 0.5)",
  borderRadius: 36,
};

function HamburgerIcon({ open }: { open: boolean }) {
  const barBase: React.CSSProperties = {
    position: "absolute",
    width: 18,
    height: 2,
    left: 3,
    backgroundColor: "#141414",
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

export function NavAlt() {
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
    <div
      className="fixed top-0 left-0 z-40 w-full"
      style={{
        ...NAV_STYLE,
        borderRadius: 0,
        transform: navHidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <nav className="mx-auto max-w-[1512px] px-6 py-6 sm:px-12 xl:px-20">
        {/* Top row — logo left, links/hamburger right. Never moves. */}
        <div className="flex items-center justify-between">
          <a id="nav-logo" href="/" onClick={handleNavClick("/")} className="flex items-center">
            <LogoIcon />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-4 xs:flex">
            <li>
              <LinkedInCTA
                className="rounded-full"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                  textDecoration: "none",
                  height: 48,
                  padding: "0 24px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </li>
            <li>
              <ContactCTA
                className="rounded-full"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                  textDecoration: "none",
                  height: 48,
                  padding: "0 24px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </li>
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
          className="overflow-hidden xs:hidden"
          style={{
            maxHeight: open ? 400 : 0,
            transition: "max-height 0.35s ease-in-out",
          }}
        >
          <div className="flex flex-col gap-3" style={{ paddingTop: 16 }}>
            <LinkedInCTA
              className="block w-full text-center"
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                borderRadius: 9999,
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.2px",
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            />
            <ContactCTA
              className="block w-full text-center"
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                borderRadius: 9999,
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.2px",
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
