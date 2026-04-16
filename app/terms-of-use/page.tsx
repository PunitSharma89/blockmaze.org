import { Metadata } from "next";
import Container from "@/components/layout/Container";
import { sanityFetch } from "@/lib/sanity";
import { legalPageQuery } from "@/lib/queries";
import { getLocale } from "@/lib/getLocale";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Blockmaze Terms of Use - Terms governing the use of the Blockmaze platform and services.",
};

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalData {
  pageTitle?: string;
  sections?: LegalSection[];
}

export default async function TermsOfUsePage() {
  const locale = await getLocale();
  const data = await sanityFetch<LegalData>(legalPageQuery, { slug: "terms-of-use", locale });

  const sections = data?.sections ?? [];

  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto">
          <h1 className="text-gray-dark mb-8">{data?.pageTitle ?? "Terms of Use"}</h1>
          {sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-gray-dark text-2xl mb-4">{section.heading}</h3>
              {(section.paragraphs ?? []).map((p, j) => (
                <p key={j} className="text-gray-DEFAULT mb-6 leading-relaxed">{p}</p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {section.bullets.map((item, k) => (
                    <li key={k} className="flex items-start gap-2 text-gray-DEFAULT">
                      <span className="text-primary mt-1">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
