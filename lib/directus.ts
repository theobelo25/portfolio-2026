import { createDirectus, rest } from "@directus/sdk";
import { type DirectusSchema } from "@/lib/cms/directus-schema";
import { directusServerUrl } from "./directus-env";

// cache: "no-store" avoids Next treating SDK fetch as default force-cache.
// Project data is cached at the app layer (unstable_cache + tags in projects.actions).
const directus = createDirectus<DirectusSchema>(directusServerUrl()).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  }),
);

export default directus;
