import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "./Button";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "white";
}

interface HeroSectionProps {
  label?: string;
  heading: string;
  subtext?: string;
  actions?: HeroAction[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  dark?: boolean;
}

export default function HeroSection({
  label,
  heading,
  subtext,
  actions,
  image,
  dark = false,
}: HeroSectionProps) {
  return (
    <section
      className={`section-padding ${dark ? "bg-section-dark text-white" : "bg-white"}`}
    >
      <Container>
        <div
          className={`flex flex-col ${image ? "lg:flex-row" : ""} items-center gap-12`}
        >
          {/* Text content */}
          <div className={`${image ? "lg:w-1/2" : "max-w-3xl mx-auto text-center"}`}>
            {label && (
              <h4
                className={`text-primary font-semibold mb-4 ${!image ? "text-center" : ""}`}
              >
                {label}
              </h4>
            )}
            <h1
              className={`mb-6 ${dark ? "text-white" : "text-gray-dark"} ${!image ? "text-center" : ""}`}
            >
              {heading}
            </h1>
            {subtext && (
              <p
                className={`text-lg mb-8 ${dark ? "text-gray-light" : "text-gray-DEFAULT"} ${!image ? "text-center" : ""}`}
              >
                {subtext}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div
                className={`flex flex-wrap gap-4 ${!image ? "justify-center" : ""}`}
              >
                {actions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant || "primary"}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="lg:w-1/2">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
