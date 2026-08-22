import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { handleNavClick } from "../hooks/useRoute";
import contactPhoto from "../assets/images/contact-mission-control.png";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const EMPTY: Fields = { name: "", email: "", phone: "", company: "", message: "" };

const FIELDS = [
  { key: "name", label: "Name", type: "text", autoComplete: "name" },
  { key: "email", label: "Email", type: "email", autoComplete: "email" },
  { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { key: "company", label: "Company", type: "text", autoComplete: "organization" },
] as const;

const inputClass =
  "w-full border-0 border-b border-line bg-transparent py-4 text-[20px] text-content outline-none transition-colors duration-300 ease-out placeholder:text-content-subtle focus:border-accent";

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact — Craig Forbes";
  }, []);

  const set = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    if (!consent) next.consent = "Please accept the privacy policy to continue.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Front-end only for now — no transmission.
    setValues(EMPTY);
    setConsent(false);
    setSent(true);
  };

  return (
    <section className="flex min-h-[100svh] flex-col bg-page md:flex-row">
      {/* Left — photo with headline */}
      <div className="relative min-h-[420px] flex-1 overflow-hidden md:min-h-0 md:basis-[55%]">
        <img
          src={contactPhoto}
          alt="Apollo-era mission control room during a launch countdown"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black-1/40" />
        <h1 className="absolute inset-0 z-10 flex flex-col justify-center px-6 text-[64px] leading-[0.95] tracking-tight text-on-inverse xs:px-12 sm:text-[88px] md:px-20 lg:text-[112px] xl:text-[128px]">
          Make
          <span className="text-accent">contact</span>
        </h1>
      </div>

      {/* Right — form card */}
      <div className="flex flex-1 items-center px-6 pt-28 pb-16 xs:px-12 md:basis-[45%] md:px-12 md:py-28 xl:px-20">
        <div className="w-full rounded-3xl bg-surface px-6 py-10 xs:px-10 xs:py-12 md:px-12">
          <form onSubmit={onSubmit} noValidate>
            {FIELDS.map(({ key, label, type, autoComplete }) => (
              <div key={key} className="mb-2">
                <label htmlFor={key} className="sr-only">
                  {label}
                </label>
                <input
                  id={key}
                  name={key}
                  type={type}
                  autoComplete={autoComplete}
                  placeholder={label}
                  value={values[key]}
                  onChange={(e) => set(key, e.target.value)}
                  aria-invalid={Boolean(errors[key])}
                  className={`${inputClass} ${errors[key] ? "border-accent" : ""}`}
                />
                {errors[key] && (
                  <p className="mt-2 text-[14px] text-accent">{errors[key]}</p>
                )}
              </div>
            ))}

            <div className="mb-8">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Message"
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                className={`${inputClass} resize-y ${errors.message ? "border-accent" : ""}`}
              />
              {errors.message && (
                <p className="mt-2 text-[14px] text-accent">{errors.message}</p>
              )}
            </div>

            <div className="mb-10 flex items-start gap-4">
              <input
                id="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setErrors((err) => {
                    const next = { ...err };
                    delete next.consent;
                    return next;
                  });
                }}
                className="peer sr-only"
              />
              <label
                htmlFor="consent"
                className={`mt-[3px] flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md border-[1.5px] transition-colors duration-300 ease-out peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40 ${
                  errors.consent ? "border-accent" : "border-line"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={consent ? "opacity-100" : "opacity-0"}
                  style={{ transition: "opacity 300ms ease" }}
                >
                  <path
                    d="M2 7.5L5.5 11L12 3.5"
                    stroke="#f5f5f5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <div>
                <label
                  htmlFor="consent"
                  className="cursor-pointer text-[16px] leading-[1.4] text-content"
                >
                  I have read the information on the processing of my personal
                  data for the purpose of responding to my enquiry. Details in
                  the{" "}
                  <a
                    href="/privacy-policy"
                    onClick={handleNavClick("/privacy-policy")}
                    className="text-accent underline decoration-1 underline-offset-2"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
                {errors.consent && (
                  <p className="mt-2 text-[14px] text-accent">{errors.consent}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <SendButton />
            </div>
          </form>

          {sent && (
            <div
              role="status"
              className="mt-8 rounded-full border border-success px-6 py-4 text-[16px] text-content"
            >
              Thank you for your message. It has been sent.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SendButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--color-accent)" : "var(--color-cta-bg)",
        transition: "background-color 300ms ease, color 300ms ease",
        borderRadius: 9999,
        color: hovered ? "var(--color-almost-white)" : "var(--color-cta-fg)",
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: "0.2px",
        padding: "14px 40px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Send
    </button>
  );
}
