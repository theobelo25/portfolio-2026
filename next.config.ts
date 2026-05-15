import type { NextConfig } from "next";
import { DIRECTUS_URL_FALLBACK } from "./lib/directus-env";

type RemotePattern = NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
>[number];

function patternFromDirectusBase(raw: string): RemotePattern | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    const base = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    const protocol = (base.protocol === "http:" ? "http" : "https") as
      | "http"
      | "https";
    return {
      protocol,
      hostname: base.hostname,
      port: base.port || "",
      pathname: "/assets/**",
    };
  } catch {
    return null;
  }
}

/** Allow every origin we might emit or receive from Directus (env + public fallback). */
function directusAssetRemotePatterns(): RemotePattern[] {
  const raws = [
    process.env.NEXT_PUBLIC_DIRECTUS_URL,
    process.env.DIRECTUS_URL,
    DIRECTUS_URL_FALLBACK,
  ];
  const seen = new Set<string>();
  const out: RemotePattern[] = [];
  for (const raw of raws) {
    if (!raw?.trim()) continue;
    const p = patternFromDirectusBase(raw);
    if (!p) continue;
    const key = `${p.protocol}://${p.hostname}:${p.port || "default"}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: directusAssetRemotePatterns(),
  },
};

export default nextConfig;
