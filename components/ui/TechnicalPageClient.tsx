"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { sanityFetch } from "@/lib/sanity";
import { technicalPageQuery } from "@/lib/queries";

interface TechnicalSection {
  sectionId: string;
  heading: string;
  rawHtml?: string;
  image?: {
    asset?: { url: string };
    alt?: string;
    caption?: string;
  };
}

interface TechnicalPageData {
  _id: string;
  title: string;
  sections: TechnicalSection[];
}

interface Props {
  slug: string;
  fallbackTitle?: string;
}

const SUPPORTED_LOCALES = ["en", "ar", "es", "fr"];

function getCookieLocale(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  const val = match ? match[1] : "en";
  return SUPPORTED_LOCALES.includes(val) ? val : "en";
}

export default function TechnicalPageClient({ slug, fallbackTitle }: Props) {
  const [data, setData] = useState<TechnicalPageData | null>(null);
  const [activeId, setActiveId] = useState<string>("");
  const [locale, setLocale] = useState<string>("en");

  function scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    setLocale(getCookieLocale());
  }, []);

  useEffect(() => {
    sanityFetch<TechnicalPageData>(technicalPageQuery, { slug, locale }).then(setData);
  }, [slug, locale]);

  useEffect(() => {
    const handleScroll = () => {
      const offset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          ) || "80"
        ) + 32;
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY + offset >= el.offsetTop) {
          current = el.id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageTitle = data?.title ?? fallbackTitle ?? "";
  const sections = data?.sections ?? [];

  return (
    <div className="tech-page-outer">
      {/* Mobile dropdown TOC — sticky below header */}
      <div className="toc-dropdown-wrap">
        <label className="toc-dropdown-label">Table of Content</label>
        <select
          className="toc-dropdown-select"
          defaultValue=""
          onChange={(e) => {
            const id = e.target.value;
            e.target.value = "";
            if (!id) return;
            // Defer until after the native select dropdown fully closes
            // (mobile browsers shift the viewport on dismiss — this prevents the jump)
            setTimeout(() => scrollToSection(id), 50);
          }}
        >
          <option value="" disabled>
            Jump to section…
          </option>
          {sections.map((section) => (
            <option key={section.sectionId} value={section.sectionId}>
              {section.heading}
            </option>
          ))}
        </select>
      </div>

      {/* Sidebar + Main row */}
      <div className="tech-page-wrap">

      {/* Sidebar TOC — desktop only */}
      <aside className="tech-page-sidebar">
        <p className="tech-page-toc-heading">Table of Content</p>
        <ul className="tech-page-toc-list">
          {sections.map((section) => {
            const match = section.heading.match(/^(\d+\.)\s*(.*)/);
            const num = match ? match[1] : null;
            const label = match ? match[2] : section.heading;

            return (
              <li key={section.sectionId}>
                <a
                  href={`#${section.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.sectionId);
                  }}
                  className={`summary-menu-link ${
                    activeId === section.sectionId ? "active" : ""
                  }`}
                >
                  {num && <span className="toc-num">{num}</span>}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="tech-page-main">
        <div className="tech-page-content">
          <h1 className="tech-page-title">{pageTitle}</h1>
          <hr className="tech-page-divider" />

          {sections.map((section) => (
            <section
              key={section.sectionId}
              id={section.sectionId}
              className="tech-page-section"
            >
              {section.rawHtml ? (
                <div
                  className="prose-protocol"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.rawHtml) }}
                />
              ) : (
                <h2 className="tech-page-section-heading">
                  {section.heading}
                </h2>
              )}
              {section.image?.asset?.url && (
                <figure className="tech-page-figure">
                  <Image
                    src={section.image.asset.url}
                    alt={section.image.alt || section.heading}
                    width={900}
                    height={500}
                    className="tech-page-img"
                  />
                  {section.image.caption && (
                    <figcaption className="tech-page-caption">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </div>
      </main>

      </div>
    </div>
  );
}
