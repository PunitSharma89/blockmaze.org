interface SectionHeadingProps {
  label?: string;
  heading: React.ReactNode;
  subtext?: string;
  subHeading?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  subtext,
  subHeading,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 items-start md:items-center text-center w-full mb-3 ${className}`}
    >
      {label && <span className="section-eyebrow">{label}</span>}
      <h2 className="section-heading">{heading}</h2>
      {subHeading && <p className="section-subtext">{subHeading}</p>}
      {subtext && <p className="section-subtext">{subtext}</p>}
    </div>
  );
}
