import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Access Blockmaze Foundation resources, documentation, and research materials.",
};

export default function KnowledgeHubPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Knowledge Hub" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <SectionHeading
            heading="Knowledge Hub"
            subtext="Access Blockmaze Foundation resources, documentation, and research materials."
          />
          <div className="text-center text-gray-DEFAULT py-12">
            <p>
              Resources and documentation will be available soon. Check back for
              updates.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
