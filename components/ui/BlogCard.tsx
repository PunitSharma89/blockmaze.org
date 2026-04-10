import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt?: string;
  slug: string;
  image: string;
  category?: string;
  categorySlug?: string;
  publishedAt?: string;
  readTime?: string;
}

function estimateReadTime(excerpt?: string): string {
  if (!excerpt) return "5 min read";
  const words = excerpt.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({
  title,
  slug,
  image,
  excerpt,
  publishedAt,
}: BlogCardProps) {
  const readTime = estimateReadTime(excerpt);
  const date = formatDate(publishedAt);

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link href={`/blogs/${slug}`} className="block overflow-hidden mb-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-[16px]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#e5e5e5]" />
          )}
        </div>
      </Link>

      {/* Meta: read time + date */}
      <div className="flex items-center gap-2 text-xs text-[#888] mb-2">
        <span>{readTime}</span>
        {date && (
          <>
            <span>•</span>
            <span>{date}</span>
          </>
        )}
      </div>

      {/* Title */}
      <Link href={`/blogs/${slug}`}>
        <h3 className="text-[16px] font-bold text-[#0f0f0f] leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-[13px] text-[#666] leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      )}
    </article>
  );
}
