/** Result of a CMS list fetch — distinguishes outage, rejection, and empty collection. */
export type CmsFetchResult<T> = {
  data: T;
  /** Directus request failed (network, auth, 5xx, etc.). */
  cmsUnavailable: boolean;
  /** Directus responded but every item failed validation. */
  cmsDataRejected: boolean;
};

export function cmsOk<T>(data: T): CmsFetchResult<T> {
  return { data, cmsUnavailable: false, cmsDataRejected: false };
}

export function cmsUnavailable<T>(emptyValue: T): CmsFetchResult<T> {
  return { data: emptyValue, cmsUnavailable: true, cmsDataRejected: false };
}

export function cmsDataRejected<T>(emptyValue: T): CmsFetchResult<T> {
  return { data: emptyValue, cmsUnavailable: false, cmsDataRejected: true };
}

/** Prefer outage over rejection when combining parallel fetches. */
export function mergeCmsFetchFlags(
  ...results: Pick<CmsFetchResult<unknown>, "cmsUnavailable" | "cmsDataRejected">[]
): Pick<CmsFetchResult<unknown>, "cmsUnavailable" | "cmsDataRejected"> {
  const cmsUnavailable = results.some((r) => r.cmsUnavailable);
  const cmsDataRejected =
    !cmsUnavailable && results.some((r) => r.cmsDataRejected);
  return { cmsUnavailable, cmsDataRejected };
}
