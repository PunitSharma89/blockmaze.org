import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm border border-gray-200 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          Prev
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={`px-4 py-2 text-sm border rounded transition-colors ${
            page === currentPage
              ? "bg-primary text-white border-primary"
              : "border-gray-200 hover:bg-primary hover:text-white hover:border-primary"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm border border-gray-200 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
