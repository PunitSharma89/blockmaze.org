import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Blockmaze Protocol",
  description: "Technical specification of the Blockmaze protocol including node setup, system requirements, validator operations, and tokenomics.",
};

export default function BlockmazeProtocolPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Blockmaze Protocol" }]} />
      </Container>
      <TechnicalPageClient slug="blockmaze-protocol" fallbackTitle="Blockmaze Protocol Technical Specification" />
    </>
  );
}
