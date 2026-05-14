import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import {
  CMS_TAG_PROJECTS,
  cmsProjectTag,
} from "@/lib/cms-cache";

function authorize(request: NextRequest): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return false;
  }
  const q = request.nextUrl.searchParams.get("secret");
  const h = request.headers.get("x-revalidate-secret");
  return q === secret || h === secret;
}

/**
 * On-demand revalidation after CMS publishes (e.g. Directus Flow → HTTP Request).
 * POST /api/revalidate?secret=YOUR_SECRET
 * Optional: &slug=my-project → also invalidates that slug’s tag (list is still cleared via projects tag).
 */
export async function POST(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(CMS_TAG_PROJECTS, "default");

  const slug =
    request.nextUrl.searchParams.get("slug") ??
    (await request.json().catch(() => null))?.slug;

  if (typeof slug === "string" && slug.length > 0) {
    revalidateTag(cmsProjectTag(slug), "default");
  }

  return NextResponse.json({ revalidated: true });
}
