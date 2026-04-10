import { Metadata } from "next";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Whitepaper Document | Blockmaze",
  description: "Full Blockmaze Whitepaper document view.",
};

export default function WhitepaperDocPage() {
  return (
    <TechnicalPageClient slug="whitepaper-doc" fallbackTitle="Blockmaze Whitepaper" />
  );
}
