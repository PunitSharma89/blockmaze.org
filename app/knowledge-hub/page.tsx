import { Metadata } from "next";
import Image from "next/image";
import KnowledgeHubScroll from "@/components/ui/KnowledgeHubScroll";
import { sanityFetch } from "@/lib/sanity";
import { allKnowledgeHubQuery } from "@/lib/queries";
import { getLocale } from "@/lib/getLocale";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Access Blockmaze Foundation resources, documentation, and research materials.",
};

interface KnowledgeHubItem {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  bulletPoints?: string[];
  link?: string;
  featuredImage?: {
    asset?: { url: string };
    alt?: string;
  };
  publishedAt?: string;
}

const heroText: Record<
  string,
  {
    chip: string;
    heading: string;
    headingHighlight: string;
    body: string;
    eyebrow: string;
    heading2: string;
    exploreMore: string;
  }
> = {
  en: {
    chip: "Documentation & Resources",
    heading: "Blockmaze Documentation &",
    headingHighlight: "Resources",
    body: "The Blockmaze knowledge hub serves as the single source of truth for all technical specifications, governance frameworks, validator standards, token economics, and real-world asset infrastructure documentation. All documents are version-controlled, governance-aligned, and intended for developers, validators, institutions, exchanges, and ecosystem participants.",
    eyebrow: "Documentation",
    heading2: "Knowledge Hub Resources",
    exploreMore: "Explore more",
  },
  ar: {
    chip: "الوثائق والموارد",
    heading: "وثائق وموارد",
    headingHighlight: "Blockmaze",
    body: "يُعدّ مركز المعرفة في Blockmaze المصدر الموثوق الوحيد لجميع المواصفات التقنية وأطر الحوكمة ومعايير المدققين واقتصاديات الرموز ووثائق البنية التحتية للأصول الحقيقية. جميع الوثائق محكومة بالإصدار ومتوافقة مع الحوكمة، وموجهة للمطورين والمدققين والمؤسسات والبورصات والمشاركين في النظام البيئي.",
    eyebrow: "الوثائق",
    heading2: "موارد مركز المعرفة",
    exploreMore: "استكشف المزيد",
  },
  es: {
    chip: "Documentación y Recursos",
    heading: "Documentación y",
    headingHighlight: "Recursos de Blockmaze",
    body: "El centro de conocimiento de Blockmaze sirve como la fuente única de verdad para todas las especificaciones técnicas, marcos de gobernanza, estándares de validadores, economía de tokens y documentación de infraestructura de activos del mundo real. Todos los documentos están controlados por versiones, alineados con la gobernanza y destinados a desarrolladores, validadores, instituciones, exchanges y participantes del ecosistema.",
    eyebrow: "Documentación",
    heading2: "Recursos del Centro de Conocimiento",
    exploreMore: "Explorar más",
  },
  fr: {
    chip: "Documentation & Ressources",
    heading: "Documentation &",
    headingHighlight: "Ressources Blockmaze",
    body: "Le centre de connaissances Blockmaze constitue la source de vérité unique pour toutes les spécifications techniques, les cadres de gouvernance, les normes des validateurs, l'économie des tokens et la documentation de l'infrastructure des actifs réels. Tous les documents sont versionnés, alignés sur la gouvernance et destinés aux développeurs, validateurs, institutions, exchanges et participants de l'écosystème.",
    eyebrow: "Documentation",
    heading2: "Ressources du Centre de Connaissances",
    exploreMore: "Explorer plus",
  },
};

export default async function KnowledgeHubPage() {
  const locale = await getLocale();
  const result = await sanityFetch<KnowledgeHubItem[]>(allKnowledgeHubQuery, {
    locale,
  });
  const items = result ?? [];

  const t = heroText[locale] ?? heroText.en;

  return (
    <>
      {/* 1 ── HERO — same as About page */}
      <section className="about-hero-section about-page-hero">
        <div className="about-hero-wrap">
          <div className="about-hero-text">
            <div className="hero-chip-v2">
              <span className="hero-chip-dot" />
              <span className="hero-chip-label">
                Documentation &amp; Resources
              </span>
            </div>
            <div className="about-hero-textblock">
              <h1 className="about-hero-h1">
                Blockmaze Documentation &amp;{" "}
                <span className="text-primary">Resources</span>
              </h1>
              <p className="about-hero-p">
                The Blockmaze knowledge hub serves as the single source of truth
                for all technical specifications, governance frameworks,
                validator standards, token economics, and real-world asset
                infrastructure documentation. All documents are
                version-controlled, governance-aligned, and intended for
                developers, validators, institutions, exchanges, and ecosystem
                participants.
              </p>
            </div>
          </div>
          <div className="about-hero-img-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/knowledge-hero.png"
              alt="Blockmaze Knowledge Hub"
              className="about-hero-img"
            />
          </div>
        </div>
      </section>

      {/* 2 ── KNOWLEDGE ITEMS — sticky scroll with full data */}
      {items.length > 0 ? (
        <KnowledgeHubScroll
          eyebrow="Documentation"
          heading="Knowledge Hub Resources"
          items={items}
        />
      ) : (
        <section className="section-padding bg-white">
          <p className="kh-empty-text">
            Resources and documentation will be available soon. Check back for
            updates.
          </p>
        </section>
      )}
    </>
  );
}
