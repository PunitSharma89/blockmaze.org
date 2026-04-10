import Link from "next/link";
import Image from "next/image";
import { footerCompanyLinks, footerQuickLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative bubble */}
      <div className="footer-bubble-wrap">
        <Image
          src="/images/footer-bubble-1.png"
          alt=""
          width={1024}
          height={514}
          className="footer-bubble-img"
          aria-hidden="true"
        />
      </div>

      {/* Main content */}
      <div className="footer-inner">
        <div className="footer-top">
          {/* Left — logo + description + email */}
          <div className="footer-brand">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Blockmaze Foundation"
                width={722}
                height={85}
                className="footer-logo"
              />
            </Link>
            <p className="footer-desc">
              Supporting the long-term security, neutrality, and sustainability
              of the Blockmaze ecosystem through governance, research, and
              ecosystem programs.
            </p>
            <a href="mailto:hello@blockmaze.com" className="footer-email">
              <Image
                src="/images/footer-mail.svg"
                alt="Email"
                width={24}
                height={24}
              />
              <span>hello@blockmaze.com</span>
            </a>
          </div>

          {/* Right — link columns */}
          <div className="footer-links">
            <div className="footer-link-col">
              <h4 className="footer-link-heading">Company</h4>
              <ul className="footer-link-list">
                {footerCompanyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-link-col">
              <h4 className="footer-link-heading">Quick Links</h4>
              <ul className="footer-link-list">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>&copy; All Rights Reserved</span>
          <span>Copyright 2026. Blockmaze.com</span>
        </div>
      </div>
    </footer>
  );
}
