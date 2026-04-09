import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  category?: string;
  categorySlug?: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  image,
  category,
  categorySlug,
}: BlogCardProps) {
  return (
    <article className="card p-0 overflow-hidden">
      <Link href={`/${slug}`} className="block">
        <div className="relative aspect-[400/250] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        {category && (
          <Link
            href={categorySlug ? `/category/${categorySlug}` : "#"}
            className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 inline-block hover:text-primary-dark transition-colors"
          >
            {category}
          </Link>
        )}
        <h3 className="text-lg font-semibold text-gray-dark mb-3 leading-tight">
          <Link
            href={`/${slug}`}
            className="hover:text-primary transition-colors text-gray-dark"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-DEFAULT text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
