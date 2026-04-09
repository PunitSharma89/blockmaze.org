import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blockmaze.org",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
