export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "RFP", href: "/rfp" },
  {
    label: "Ecosystem",
    href: "#",
    children: [
      { label: "Governance Council", href: "/governance" },
      { label: "DAO", href: "/dao" },
      { label: "Swap", href: "/swap" },
      { label: "Validator", href: "/validator" },
      { label: "Delegator", href: "/delegator" },
      {
        label: "Developer Docs",
        href: "https://docs.testnet.stackflow.site/",
        external: true,
      },
      { label: "Tokenomics", href: "/tokenomics" },
    ],
  },
  {
    label: "Insights",
    href: "#",
    children: [
      { label: "Knowledge Hub", href: "/knowledge-hub" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Tokenomics", href: "/tokenomics" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-use" },
];
