import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TechnicalPageClient from "@/components/ui/TechnicalPageClient";

export const metadata: Metadata = {
  title: "Yellow Paper",
  description: "Blockmaze Yellow Paper - Technical specification and formal methods documentation.",
};

export default function YellowPaperPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Yellow Paper" }]} />
      </Container>
      <TechnicalPageClient slug="blockmaze-yellow-paper" fallbackTitle="Blockmaze Yellow Paper" />
    </>
  );
}
