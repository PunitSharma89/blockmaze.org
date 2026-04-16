"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const LOCALES = [
  { id: "en", label: "EN", full: "English", flag: "/images/flags/en.svg" },
  { id: "ar", label: "AR", full: "Arabic",  flag: "/images/flags/ar.svg" },
  { id: "es", label: "ES", full: "Spanish", flag: "/images/flags/es.svg" },
  { id: "fr", label: "FR", full: "French",  flag: "/images/flags/fr.svg" },
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
    window.location.reload();
  };

  const current = LOCALES.find((l) => l.id === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className="lang-switcher">
      <button
        className="lang-switcher-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        aria-expanded={open}
      >
        <Image
          src={current.flag}
          alt={current.full}
          width={20}
          height={15}
          className="lang-switcher-flag-img"
        />
        <span className="lang-switcher-label">{current.label}</span>
        <svg
          className={`lang-switcher-arrow${open ? " open" : ""}`}
          width="10" height="10" viewBox="0 0 12 12" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round"
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
              <Image
                src={loc.flag}
                alt={loc.full}
                width={22}
                height={16}
                className="lang-switcher-flag-img"
              />
              <span className="lang-switcher-name">{loc.full}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
