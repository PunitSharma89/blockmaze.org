import { MetadataRoute } from "next";

const BASE_URL = "https://blockmaze.org";

const staticPages = [
  "",
  "/about",
  "/contact-us",
  "/privacy-policy",
  "/terms-of-use",
  "/blockmaze-protocol",
  "/tokenomics",
  "/swap",
  "/whitepaper",
  "/whitepaper-doc",
  "/blockmaze-yellow-paper",
  "/governance",
  "/dao",
  "/validator",
  "/delegator",
  "/blockmaze-validator-handbook",
  "/blockmaze-delegator-handbook",
  "/blockmaze-architecture-diagram",
  "/blockmaze-security-model-slashing-rules",
  "/blockmaze-emission-vesting",
  "/blockmaze-rwa-issuer-framework",
  "/blockmaze-custody-redemption-responsibility-matrix",
  "/blockmaze-exchange-listing",
  "/legal-documentation",
  "/rfp",
  "/blogs",
  "/news",
  "/knowledge-hub",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  return staticEntries;
}
