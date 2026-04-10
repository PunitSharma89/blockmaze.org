import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Blockmaze Protocol",
  description: "Technical specification of the Blockmaze protocol including node setup, system requirements, validator operations, and tokenomics.",
};

const sections = [
  {
    title: "Blockmaze Protocol Technical Specification",
    description:
      "Defines the operational requirements and technical standards for running and maintaining Blockmaze nodes.",
    bullets: [
      "Validator and full node roles",
      "System and server requirements",
      "Validator security and governance responsibilities",
      "Network performance and the BMZ utility model",
    ],
    link: "/blockmaze-protocol/technical-specification",
    image: "/images/whitepaper-img.png",
    imageLeft: false,
  },
  {
    title: "Yellow Paper",
    description:
      "A formal specification of Blockmaze's Layer-0 architecture, consensus system, governance framework, economic model, and interoperability design.",
    bullets: [
      "Layer-0 architecture and chain registry",
      "BFT PoS consensus and slashing",
      "Dual governance and quadratic voting",
      "RWA execution, settlement, and IBC interoperability",
    ],
    link: "/blockmaze-yellow-paper",
    image: "/images/block_resource.png",
    imageLeft: true,
  },
];

export default function BlockmazeProtocolPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Blockmaze Protocol" }]} />
      </Container>

      <section className="section-padding">
        <Container>
          <div className="flex flex-col gap-20">
            {sections.map((section) => (
              <div
                key={section.title}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  section.imageLeft ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-dark mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-gray-DEFAULT mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-gray-DEFAULT">
                        <span className="text-dark font-bold mt-0.5">♦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={section.link}
                    className="inline-block border border-dark text-dark px-6 py-3 text-sm font-medium hover:bg-dark hover:text-white transition-colors duration-200"
                  >
                    Explore more
                  </Link>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={500}
                    height={400}
                    className="object-contain w-full max-w-[480px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
