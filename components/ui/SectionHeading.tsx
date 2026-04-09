interface SectionHeadingProps {
  label?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  subtext,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <h4 className="text-primary font-semibold mb-3">{label}</h4>
      )}
      <h2 className="text-gray-dark mb-4">{heading}</h2>
      {subtext && (
        <p
          className={`text-gray-DEFAULT text-lg leading-relaxed ${centered ? "max-w-3xl mx-auto" : ""}`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
