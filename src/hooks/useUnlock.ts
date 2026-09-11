import { useState, useEffect } from "react";

const KEY = "portfolio-unlocked-until";
const DURATION_MS = 24 * 60 * 60 * 1000;

export function isUnlocked() {
  const until = Number(localStorage.getItem(KEY));
  return Number.isFinite(until) && Date.now() < until;
}

/** Unlocks every password-protected project for this browser for 24 hours. */
export function unlock() {
  localStorage.setItem(KEY, String(Date.now() + DURATION_MS));
  window.dispatchEvent(new Event("unlockchange"));
}

/** Whether protected projects are currently unlocked, kept in sync with `unlock()` and re-checked as the 24-hour window expires. */
export function useUnlocked() {
  const [unlocked, setUnlocked] = useState(isUnlocked());

  useEffect(() => {
    const check = () => setUnlocked(isUnlocked());
    window.addEventListener("unlockchange", check);
    const interval = setInterval(check, 60_000);
    return () => {
      window.removeEventListener("unlockchange", check);
      clearInterval(interval);
    };
  }, []);

  return unlocked;
}
