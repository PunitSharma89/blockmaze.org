import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt?: string;
  slug: string;
  image: string;
  category?: string;
  categorySlug?: string;
}

export default function BlogCard({ title, slug, image }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <Link href={`/blogs/${slug}`} className="block">
        <div className="relative aspect-[400/250] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
    </article>
  );
}
