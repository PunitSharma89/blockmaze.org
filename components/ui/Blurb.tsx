import Image from "next/image";

interface BlurbProps {
  icon: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  heading: string;
  description: string;
  bullets?: string[];
  className?: string;
}

export default function Blurb({
  icon,
  heading,
  description,
  bullets,
  className = "",
}: BlurbProps) {
  return (
    <div className={`${className}`}>
      <div className="mb-4">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.width || 50}
          height={icon.height || 50}
        />
      </div>
      <h4 className="text-gray-dark font-semibold mb-3">{heading}</h4>
      <p className="text-gray-DEFAULT text-sm leading-relaxed mb-3">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-DEFAULT"
            >
              <span className="text-primary mt-1 flex-shrink-0">&#8226;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
