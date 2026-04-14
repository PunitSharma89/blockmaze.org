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
      className={`mx-auto w-[100%] px-4 lg:px-0 lg:w-[80%] ${
        wide ? "max-w-[1596px]" : "max-w-[1440px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
