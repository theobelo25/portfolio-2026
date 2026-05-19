import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { directusPublicUrl } from "@/lib/directus-env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return "";
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

export function isRemoteUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

/** Extracts a Directus file id from a raw id or `/assets/{id}` URL; non-Directus URLs return null. */
export function resolveDirectusAssetId(imageIdOrUrl: string): string | null {
  const trimmed = imageIdOrUrl.trim();
  if (!trimmed) return null;

  if (isRemoteUrl(trimmed)) {
    try {
      const { pathname } = new URL(trimmed);
      const match = pathname.match(/\/assets\/([^/]+)\/?$/);
      return match?.[1] ?? null;
    } catch {
      return null;
    }
  }

  return trimmed;
}

const LQIP_DEFAULTS = {
  width: "16",
  height: "16",
  fit: "cover",
  quality: "30",
  format: "jpg",
} as const;

/**
 * Directus transform URL for a tiny preview (LQIP). Returns null for non-Directus images.
 * Use `directusServerUrl()` when fetching server-side; `directusPublicUrl()` for browser use.
 */
export function createLqipUrl(
  imageIdOrUrl: string,
  baseUrl: string = directusPublicUrl(),
): string | null {
  const assetId = resolveDirectusAssetId(imageIdOrUrl);
  if (!assetId) return null;

  const normalizedBase = baseUrl.replace(/\/$/, "");
  const params = new URLSearchParams(LQIP_DEFAULTS);
  return `${normalizedBase}/assets/${assetId}?${params.toString()}`;
}

/** Directus file id → absolute asset URL; already-absolute URLs are returned unchanged. */
export function createImageUrl(imageIdOrUrl: string): string {
  if (isRemoteUrl(imageIdOrUrl)) {
    return imageIdOrUrl;
  }
  return String(`${directusPublicUrl()}/assets/${imageIdOrUrl}`);
}
