import Link from "next/link";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12L12 4M5 4h7v7" />
    </svg>
  );
}

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
        <ArrowUpRight />
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
