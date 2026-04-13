"use client";

import { useState } from "react";
import Link from "next/link";
import type { SanityNavItem } from "@/components/layout/HeaderClient";
import NavDropdown from "./NavDropdown";

interface NavbarProps {
  navItems: SanityNavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-5">
      {navItems.map((item) => (
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
              className="flex items-center gap-[6px] px-3 text-[14px] font-medium leading-6 text-white hover:text-[#ffb01e] transition-colors py-2"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === item.label ? null : item.label
                )
              }
            >
              {item.label}
              <svg
                className={`w-[14px] h-[14px] transition-transform ${
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
              className="block px-3 text-[14px] font-medium leading-6 text-white hover:text-[#ffb01e] transition-colors py-2"
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
