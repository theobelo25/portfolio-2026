# ADR 001: CMS cache and on-demand revalidation

**Status:** Accepted  
**Date:** 2026-05-19

## Context

Project content (lists, tags, case studies) comes from Directus. The site should stay fast and resilient when the CMS is slow or briefly unavailable, while still allowing fresh content after a publish without redeploying the Next.js app.

## Decision

### 1. Cache at the data layer, not on routes

All CMS reads go through `unstable_cache` in [`lib/actions/projects.actions.ts`](../../lib/actions/projects.actions.ts). Configuration is centralized in [`lib/cms-cache.ts`](../../lib/cms-cache.ts):

| Export | Role |
|--------|------|
| `CMS_REVALIDATE_SECONDS` | Time-based revalidation (default **300** s) |
| `CMS_TAG_PROJECTS` | Tag `directus:projects` — lists, tags, featured |
| `cmsProjectTag(slug)` | Tag `directus:project:{slug}` — per case study |

We **do not** set `export const revalidate` on project pages with an env-driven value. Next.js 16 requires a static literal on the route segment; TTL belongs on `unstable_cache` only.

### 2. Two ways content goes stale

1. **Time** — After `CMS_REVALIDATE_SECONDS`, the next request refetches Directus. For a portfolio, **300 s (5 min)** is a reasonable default; **86400 s (daily)** is fine if you rely on webhooks.
2. **On-demand** — `POST /api/revalidate` ([`app/api/revalidate/route.ts`](../../app/api/revalidate/route.ts)) calls `revalidateTag(CMS_TAG_PROJECTS)` when `REVALIDATE_SECRET` matches. Optional `slug` also invalidates `cmsProjectTag(slug)`.

Wire a Directus Flow (HTTP Request on item create/update/delete) to the revalidate URL after publish.

### 3. Sitemap uses a separate, longer ISR window

[`app/sitemap.ts`](../../app/sitemap.ts) exports `revalidate = 86400` (daily). It still reads project slugs from the same cached actions; the sitemap route itself is not hot-path traffic.

### 4. Graceful degradation

Fetch helpers return `cmsUnavailable` / `cmsDataRejected` flags so UI can show notices instead of empty grids that look like “no projects.” Parse failures skip invalid rows in production; dev logs warnings.

## Consequences

- **Pros:** One place to tune TTL and tags; publish → webhook → fresh content without rebuild; cached responses protect the app from CMS blips.
- **Cons:** Visitors may see cached work until TTL or webhook fires; `REVALIDATE_SECRET` must stay private; tag invalidation clears all list caches (acceptable for portfolio scale).

## Alternatives considered

| Approach | Why not |
|----------|---------|
| No cache, fetch Directus every request | Slower, brittle under load |
| `export const revalidate = 300` on pages only | Does not cache shared list fetches; env TTL not allowed on route in Next 16 |
| Full static export | Case studies and filters need server data + ISR |

## References

- [`lib/cms-cache.ts`](../../lib/cms-cache.ts) — constants and comments
- [Next.js `unstable_cache`](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)
- [Next.js `revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
