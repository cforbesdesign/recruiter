import { handleNavClick } from "../hooks/useRoute";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/craig-forbes-8769331b" },
  { label: "Behance", href: "https://www.behance.net/cforbesdesc5fc" },
];

export function Footer() {
  return (
    <footer className="bg-inverse">
      <div className="mx-auto flex max-w-[1512px] flex-col gap-20 px-6 pt-25 pb-20 min-[500px]:px-20">
        <div className="flex w-full items-center justify-end">
          <div className="flex items-center gap-8 text-[16px] text-on-inverse">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-[45px] leading-[1.05] text-on-inverse min-[500px]:max-w-[825px] min-[500px]:text-[48px] min-[1200px]:max-w-none min-[1200px]:text-[56px]">
          Let&rsquo;s chart your next course together.
        </p>

        <div className="flex flex-wrap items-start gap-5 min-[500px]:flex-nowrap min-[500px]:items-center">
          <a
            href="/contact"
            onClick={handleNavClick("/contact")}
            className="flex h-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-on-inverse bg-inverse px-6 text-[16px] text-on-inverse transition-colors duration-300 hover:bg-page hover:text-content min-[500px]:h-[45px]"
          >
            Make Contact
          </a>
          <div className="flex w-full shrink-0 items-center gap-3 rounded-full px-2 py-3 min-[500px]:w-auto min-[500px]:px-5">
            <span className="relative size-2 shrink-0 rounded-full bg-status animate-status-pulse" />
            <p className="text-[14px] font-bold text-on-inverse opacity-90">Available For Work</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-6">
          <div className="h-px w-full bg-divider" />
          <p className="text-[14px] text-on-inverse opacity-40">
            © Craig Forbes 2026 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
