interface SectionHeadingProps {
  label?: string;
  heading: React.ReactNode;
  subtext?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  subtext,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 items-center text-center w-full mb-12 ${className}`}>
      {label && <span className="section-eyebrow">{label}</span>}
      <h2 className="section-heading">{heading}</h2>
      {subtext && <p className="section-subtext">{subtext}</p>}
    </div>
  );
}
