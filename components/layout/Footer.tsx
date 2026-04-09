import Link from "next/link";
import Image from "next/image";
import { footerCompanyLinks, footerQuickLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-section-dark text-white">
      {/* Main footer content */}
      <div className="mx-auto w-[80%] max-w-[1080px] pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo + Description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Blockmaze Foundation"
                width={250}
                height={62}
                className="brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-gray-light text-sm leading-relaxed max-w-md">
              Supporting the long-term security, neutrality, and sustainability
              of the Blockmaze ecosystem through governance, research, and
              ecosystem programs.
            </p>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-light text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-light text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact row */}
        <div className="border-t border-white/10 pt-6 mb-8">
          <a
            href="mailto:hello@blockmaze.com"
            className="inline-flex items-center gap-2 text-gray-light hover:text-primary text-sm transition-colors"
          >
            <Image
              src="/images/mail-icon.png"
              alt="Email"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
            hello@blockmaze.com
          </a>
        </div>

        {/* Large footer logo */}
        <div className="flex justify-center py-8">
          <Image
            src="/images/footer-logo.png"
            alt="Blockmaze"
            width={1157}
            height={160}
            className="w-full max-w-[800px] opacity-20"
          />
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-light">
          <span>&copy; All Rights Reserved</span>
          <span>Copyright 2026. Blockmaze.org</span>
        </div>
      </div>
    </footer>
  );
}
