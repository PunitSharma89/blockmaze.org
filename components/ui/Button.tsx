"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-3 rounded-lg transition-all duration-200";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
