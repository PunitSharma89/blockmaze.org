"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {mainNavigation.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() =>
            item.children ? setOpenDropdown(item.label) : undefined
          }
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.children ? (
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-dark hover:text-primary transition-colors py-2"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === item.label ? null : item.label
                )
              }
            >
              {item.label}
              <svg
                className={`w-3 h-3 transition-transform ${
                  openDropdown === item.label ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          ) : (
            <Link
              href={item.href}
              className="text-sm font-medium text-gray-dark hover:text-primary transition-colors py-2"
            >
              {item.label}
            </Link>
          )}
          {item.children && (
            <NavDropdown
              items={item.children}
              isOpen={openDropdown === item.label}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
