interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export default function Container({
  children,
  wide = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`px-5 max-w-[1596px] mx-auto w-[100%] ${wide ? "max-w-[1596px]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
