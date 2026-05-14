import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "theocodesdev-directus-61bcf9-147-93-114-102.traefik.me",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "admin.theocodes.dev",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
