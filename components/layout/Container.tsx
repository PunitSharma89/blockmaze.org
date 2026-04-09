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
      className={`flex justify-end px-5 text-end w-[100%] ${wide ? "max-w-[1596px]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
