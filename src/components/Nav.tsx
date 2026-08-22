import { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "LinkedIn", href: "https://linkedin.com/in/craig-forbes-8769331b", external: true },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", open ? "#282828" : "#f5f5f5");
  }, [open]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      setHidden(scrollingDown && currentY > 96);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-transform duration-300 ease-in-out ${
        hidden ? "xs:-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`relative z-30 mx-auto flex h-[76px] max-w-[1512px] items-center justify-between px-6 backdrop-blur-sm transition-colors duration-300 ease-in-out xs:h-[104px] xs:px-12 md:px-20 ${
          open ? "bg-transparent" : "bg-almost-white/90"
        }`}
      >
        <a href="/" className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded">
          <img src={logo} alt="Craig Forbes" className="size-9 rounded xs:size-full" />
        </a>

        <ul className="hidden items-center gap-6 xs:flex md:gap-12">
          {links.map(({ label, href, external }) => (
            <li key={label} className="group flex flex-col items-start">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="text-[25px] text-ink"
              >
                {label}
              </a>
              <span className="h-1 w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex size-12 shrink-0 items-center justify-center rounded-full xs:hidden"
        >
          <span className="relative block h-[15px] w-[18px]">
            <img
              src={menuIcon}
              alt=""
              className={`absolute inset-0 m-auto h-[9px] w-[18px] transition-all duration-300 ease-out ${
                open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <img
              src={closeIcon}
              alt=""
              className={`absolute inset-0 m-auto h-[15px] w-[16px] transition-all duration-300 ease-out ${
                open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden rounded-b-[40px] bg-ink shadow-[0px_4px_3.5px_rgba(40,40,40,0.25)] transition-[clip-path] duration-300 ease-in-out xs:hidden ${
          open ? "[clip-path:inset(0_0_0%_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="h-[76px]" />
        <div className="flex h-[calc(75vh-76px)] items-center justify-center">
          <ul className="flex flex-col items-center gap-4">
            {links.map(({ label, href, external }, index) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={`block text-[25px] text-almost-white transition-all duration-300 ease-out ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${index * 80}ms` : "0ms" }}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
