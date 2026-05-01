import type { NextConfig } from "next";
import { DIRECTUS_URL_FALLBACK } from "./lib/directus-env";

function directusAssetRemotePattern() {
  const raw =
    process.env.NEXT_PUBLIC_DIRECTUS_URL?.trim() ||
    process.env.DIRECTUS_URL?.trim() ||
    DIRECTUS_URL_FALLBACK;
  try {
    const base = new URL(raw);
    const protocol = (base.protocol === "http:" ? "http" : "https") as
      | "http"
      | "https";
    return {
      protocol,
      hostname: base.hostname,
      port: base.port || "",
      pathname: "/assets/**",
    } as const;
  } catch {
    return null;
  }
}

const directusPattern = directusAssetRemotePattern();

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: directusPattern ? [directusPattern] : [],
  },
};

export default nextConfig;
