"use client";

import { useState, useRef, useEffect } from "react";

const LOCALES = [
  { id: "en", label: "EN", full: "English" },
  { id: "ar", label: "AR", full: "Arabic" },
  { id: "es", label: "ES", full: "Spanish" },
  { id: "fr", label: "FR", full: "French" },
];

function getCurrentLocale(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  return match ? match[1] : "en";
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocale(getCurrentLocale());
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=lax`;
    setLocale(newLocale);
    setOpen(false);
    // Full reload so server re-reads cookie and fetches correct locale content
    window.location.reload();
  };

  const current = LOCALES.find((l) => l.id === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className="lang-switcher">
      <button
        className="lang-switcher-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{current.label}</span>
        <svg
          className={`lang-switcher-arrow${open ? " open" : ""}`}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="lang-switcher-dropdown">
          {LOCALES.map((loc) => (
            <button
              key={loc.id}
              className={`lang-switcher-option${locale === loc.id ? " active" : ""}`}
              onClick={() => switchLocale(loc.id)}
            >
              <span className="lang-switcher-code">{loc.label}</span>
              <span className="lang-switcher-name">{loc.full}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
