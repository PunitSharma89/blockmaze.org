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

const heroText: Record<string, { chip: string; heading: string; headingHighlight: string; body: string; eyebrow: string; heading2: string; exploreMore: string }> = {
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
  const result = await sanityFetch<KnowledgeHubItem[]>(allKnowledgeHubQuery, { locale });
  const items = result ?? [];

  const t = heroText[locale] ?? heroText.en;

  return (
    <>
      {/* 1 ── HERO */}
      <section className="about-hero">
        <div className="about-hero-grid" />
        <div className="about-hero-inner">
          <div className="hero-chip-v2">
            <span className="hero-chip-dot" />
            <span className="hero-chip-label">{t.chip}</span>
          </div>
          <div className="hero-figma-textblock">
            <h1 className="hero-figma-h1">
              {t.heading}{" "}
              <span className="text-primary">{t.headingHighlight}</span>
            </h1>
            <p className="hero-figma-p">{t.body}</p>
          </div>
          <div className="about-globe-container">
            <Image
              src="/images/about-globe.svg"
              alt="Blockmaze Knowledge Hub"
              width={950}
              height={400}
              className="about-globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 ── KNOWLEDGE ITEMS */}
      {items.length > 0 ? (
        <KnowledgeHubScroll
          eyebrow={t.eyebrow}
          heading={t.heading2}
          items={items}
          exploreMoreLabel={t.exploreMore}
        />
      ) : (
        <section className="section-padding bg-white">
          <p className="kh-empty-text">
            Resources and documentation will be available soon. Check back for updates.
          </p>
        </section>
      )}
    </>
  );
}
