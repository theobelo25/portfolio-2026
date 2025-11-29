import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if applicable
        hostname: "cdn.sanity.io", // The exact hostname of the image source
      },
    ],
  },
};

export default nextConfig;
