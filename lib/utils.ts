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

/** Directus file id → absolute asset URL; already-absolute URLs are returned unchanged. */
export function createImageUrl(imageIdOrUrl: string): string {
  if (/^https?:\/\//i.test(imageIdOrUrl)) {
    return imageIdOrUrl;
  }
  return String(`${directusPublicUrl()}/assets/${imageIdOrUrl}`);
}
