import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "white";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
    white: "btn-white",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
