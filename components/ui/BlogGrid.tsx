interface BlogGridProps {
  children: React.ReactNode;
  columns?: 2 | 3;
  className?: string;
}

export default function BlogGrid({
  children,
  columns = 3,
  className = "",
}: BlogGridProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-8 ${className}`}>{children}</div>
  );
}
