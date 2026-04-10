import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Blockmaze Foundation. Our team is ready to assist users, partners, developers, and media.",
};

export default function ContactUsPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Contact Us" }]} />
      </Container>
      <section className="section-padding">
        <Container>
          <div className="mx-auto bg-[#fafafa] rounded-[30px] p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="max-w-3xl">
                <h1 className="text-gray-dark mb-4">
                  Need help? We&apos;ve got you covered.
                </h1>
                <p className="text-gray-DEFAULT mb-8 leading-relaxed">
                  Our team is ready to assist users, partners, developers, and
                  media, and will reply within 24-48 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
