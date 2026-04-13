import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 hidden">
      <ol className="flex items-center gap-2 text-sm text-gray-DEFAULT">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-gray-light">&gt;</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
