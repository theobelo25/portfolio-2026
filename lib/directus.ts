import { createDirectus, rest } from "@directus/sdk";

const DIRECTUS_URL =
  "http://theocodesdev-directus-61bcf9-147-93-114-102.traefik.me"; // e.g., 'http://localhost:8055' or your cloud URL
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
