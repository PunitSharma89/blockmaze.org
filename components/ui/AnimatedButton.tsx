import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "white" | "dark";
  external?: boolean;
  className?: string;
}

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: AnimatedButtonProps) {
  const variants = {
    primary: {
      bg: "animated-btn--primary",
      icon: "animated-btn-icon--primary",
    },
    white: {
      bg: "animated-btn--white",
      icon: "animated-btn-icon--white",
    },
    dark: {
      bg: "animated-btn--dark",
      icon: "animated-btn-icon--dark",
    },
  };

  const v = variants[variant];

  const content = (
    <>
      <span className="animated-btn-text">{children}</span>
      <span className={`animated-btn-icon ${v.icon}`}>
        <ArrowUpRight size={16} />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`animated-btn ${v.bg} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`animated-btn ${v.bg} ${className}`}>
      {content}
    </Link>
  );
}
