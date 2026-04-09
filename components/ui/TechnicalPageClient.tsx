"use client";

import { useEffect, useState } from "react";
import { sanityFetch } from "@/lib/sanity";
import { technicalPageQuery } from "@/lib/queries";

interface TechnicalSection {
  sectionId: string;
  heading: string;
  rawHtml?: string;
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

export default function TechnicalPageClient({ slug, fallbackTitle }: Props) {
  const [data, setData] = useState<TechnicalPageData | null>(null);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    sanityFetch<TechnicalPageData>(technicalPageQuery, { slug }).then(setData);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
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
    <div className="flex w-full min-h-screen">

      {/* Sidebar TOC */}
      <aside className="hidden lg:flex flex-col w-[260px] flex-shrink-0 sticky top-0 h-screen bg-white border-r border-[#e5e5e5] overflow-y-auto p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-dark border-b border-gray-dark pb-3 mb-5">
          Table of Content
        </p>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.sectionId}>
              <a
                href={`#${section.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.sectionId)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-sm leading-snug transition-colors duration-200 ${
                  activeId === section.sectionId
                    ? "text-primary font-semibold"
                    : "[color:var(--color-gray-DEFAULT)] hover:text-primary"
                }`}
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 py-12 px-10 lg:px-16 bg-[#f5f5f5]">
        <div className="max-w-full p-5 bg-white mx-auto">
          <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-wide text-dark mb-5">
            {pageTitle}
          </h1>
          <hr className="border-dark mb-10" />

          {sections.map((section) => (
            <section key={section.sectionId} id={section.sectionId} className="mb-12 scroll-mt-6">
              {section.rawHtml ? (
                <div
                  className="prose-protocol"
                  dangerouslySetInnerHTML={{ __html: section.rawHtml }}
                />
              ) : (
                <h2 className="text-xl font-bold text-gray-dark mb-4">{section.heading}</h2>
              )}
            </section>
          ))}
        </div>
      </main>

    </div>
  );
}
