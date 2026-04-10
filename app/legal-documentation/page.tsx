import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Legal Documentation | Blockmaze",
  description: "Access the foundational documents that define governance processes, issuer standards, protocol parameters, and accountability boundaries across the Blockmaze network.",
};

export default function LegalDocumentationPage() {
  return (
    <TechnicalPageClient slug="legal-documentation" fallbackTitle="Legal Documentation" />
  );
}
