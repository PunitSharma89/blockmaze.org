import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from the Blockmaze Foundation and ecosystem.",
};

export default function NewsPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "News" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <SectionHeading
            heading="News"
            subtext="Latest news and updates from the Blockmaze Foundation and ecosystem."
          />
          <div className="text-center text-gray-DEFAULT py-12">
            <p>News articles will be available soon. Check back for updates.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
