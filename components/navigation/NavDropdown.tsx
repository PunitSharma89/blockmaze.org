"use client";

import Link from "next/link";
import { NavItem } from "@/lib/navigation";

interface NavDropdownProps {
  items: NavItem[];
  isOpen: boolean;
}

export default function NavDropdown({ items, isOpen }: NavDropdownProps) {
  if (!isOpen) return null;

  return (
    <ul className="absolute top-full left-0 z-50 min-w-[220px] bg-white border border-[#eef4fd] py-2 shadow-lg rounded-b-md">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="block px-5 py-2 text-sm text-[#0b0b0b] hover:text-[#ffb01e] transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
