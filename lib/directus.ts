import { createDirectus, rest } from "@directus/sdk";

/** Server: set DIRECTUS_URL. Client (image URLs): set NEXT_PUBLIC_DIRECTUS_URL when it differs. */
const rawDirectusUrl =
  process.env.DIRECTUS_URL ??
  process.env.NEXT_PUBLIC_DIRECTUS_URL ??
  "https://admin.theocodes.dev";

/** Directus SDK requires an absolute URL; env values like `host.example` are normalized. */
const DIRECTUS_URL = /^https?:\/\//i.test(rawDirectusUrl)
  ? rawDirectusUrl
  : `https://${rawDirectusUrl}`;
// const PUBLIC_TOKEN = "YOUR_OPTIONAL_STATIC_TOKEN"; // Use for private data/actions, otherwise can be omitted

// Create the client instance
const directus = createDirectus(DIRECTUS_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  }),
); // Use the REST API

// Optional: If using a static token
// if (PUBLIC_TOKEN) {
//   directus.with(staticToken(PUBLIC_TOKEN));
// }

// Important for Next.js: disable force-cache for dynamic data
// By default, Next.js force-caches fetch requests.
// directus.requestOptions.cache = "no-store";

export default directus;
