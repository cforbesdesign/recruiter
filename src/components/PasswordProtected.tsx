import { useState } from "react";
// import { useEffect } from "react"; // only needed by the disabled noise-button alignment logic below
import type { FormEvent } from "react";
import { unlock } from "../hooks/useUnlock";
// import { NoiseBackground } from "./NoiseBackground"; // disabled for now, may bring back later
// import logoMark from "../assets/icons/logo.svg"; // logo + lock badge disabled for now, may bring back later
// import lockGlyph from "../assets/icons/lock-glyph.svg";
// import arrowRight from "../assets/icons/arrow-right.svg"; // in-field arrow button replaced with a full-width Submit button below

const VALID_PASSWORDS = ["let-me-in", "PurpleRockScissors2026", "bighuman", "Overbrook", "Wheatland", "ADG-2026!", "DEPT-2026!"];

export function PasswordProtected() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  // Noise background + its pause button are disabled for now, may bring back later.
  // const [noiseRunning, setNoiseRunning] = useState(true);
  // const [buttonLeft, setButtonLeft] = useState<number | null>(null);
  // const [buttonBottom, setButtonBottom] = useState<number | null>(null);

  // useEffect(() => {
  //   const align = () => {
  //     const navLogo = document.getElementById("nav-logo");
  //     if (navLogo) {
  //       const rect = navLogo.getBoundingClientRect();
  //       setButtonLeft(rect.left);
  //       setButtonBottom(rect.top);
  //     }
  //   };
  //   align();
  //   window.addEventListener("resize", align);
  //   return () => window.removeEventListener("resize", align);
  // }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (VALID_PASSWORDS.includes(value)) {
      unlock();
    } else {
      setError(true);
    }
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-start gap-8 overflow-hidden bg-almost-white px-6 pt-28 text-center xs:justify-center xs:pt-0">
      {/* Noise background + its pause button are disabled for now, may bring back later.
      <NoiseBackground running={noiseRunning} />

      <button
        type="button"
        onClick={() => setNoiseRunning((v) => !v)}
        aria-label={noiseRunning ? "Pause static" : "Play static"}
        aria-pressed={!noiseRunning}
        style={{ left: buttonLeft ?? undefined, bottom: buttonBottom ?? undefined }}
        className="fixed bottom-6 left-6 z-10 flex size-10 items-center justify-center rounded-full border border-ink bg-ink text-almost-white transition-colors hover:bg-ink/90 xs:size-12"
      >
        {noiseRunning ? (
          <span className="flex gap-[3px]">
            <span className="h-[12px] w-[3px] rounded-full bg-almost-white" />
            <span className="h-[12px] w-[3px] rounded-full bg-almost-white" />
          </span>
        ) : (
          <span
            className="ml-[2px] h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-almost-white"
            style={{ borderRightWidth: 0 }}
          />
        )}
      </button>
      */}

      {/* Logo + lock badge commented out for now, may bring back later.
      <div className="relative hidden xs:flex">
        <div className="size-12 shrink-0">
          <img src={logoMark} alt="" className="size-full" />
        </div>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-tr-[9.6px] rounded-br-[9.6px] bg-ink">
          <img src={lockGlyph} alt="" className="h-[16px] w-[12.8px]" />
        </div>
      </div>
      */}

      <div className="relative mt-12 flex flex-col items-center gap-2 xs:mt-0">
        <h1 className="text-[30px] font-semibold leading-[1.05] text-ink">
          This content is protected
        </h1>
        <p className="text-[16px] text-ink">To view, please enter the password</p>
      </div>

      <form onSubmit={onSubmit} className="relative flex flex-col items-center gap-3">
        <div className="relative">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            aria-invalid={error}
            aria-label="Password"
            className="h-[48px] w-[319px] rounded-[9.6px] border-2 border-[#a3a3a3] bg-transparent px-4 text-left font-mono text-[20px] tracking-tight text-ink caret-transparent outline-none placeholder:text-[16px] placeholder:text-[#b3b3b3]"
          />
          {!value && (
            <span className="animate-blink pointer-events-none absolute top-1/2 left-4 h-[22px] w-[2px] -translate-y-1/2 bg-accent" />
          )}
        </div>
        <button
          type="submit"
          disabled={!value}
          aria-label="Submit password"
          className="h-[48px] w-[319px] rounded-full bg-ink text-[20px] font-medium text-almost-white transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit
        </button>
        {error && (
          <p className="text-[14px] text-accent">
            That password isn&rsquo;t right. Try again.
          </p>
        )}
      </form>
    </section>
  );
}
