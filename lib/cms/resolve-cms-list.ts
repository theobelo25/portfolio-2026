import { logCmsTotalParseFailure } from "@/lib/cms/cms-log";
import {
  cmsDataRejected,
  cmsOk,
  type CmsFetchResult,
} from "@/lib/cms/fetch-result";
import {
  mergeTagsFromProjects,
  parseProjects,
} from "@/lib/cms/project-schema";
import { type Project } from "@/types";

export function resolveProjectListFetch(
  data: unknown,
  context: string,
): CmsFetchResult<Project[]> {
  const { items, rawCount, parsedCount } = parseProjects(data);
  if (rawCount > 0 && parsedCount === 0) {
    logCmsTotalParseFailure(context, rawCount);
    return cmsDataRejected([]);
  }
  return cmsOk(items);
}

export function resolveTagsFetch(
  data: unknown,
  context: string,
): CmsFetchResult<string[]> {
  const { items, rawCount, parsedCount } = mergeTagsFromProjects(data);
  if (rawCount > 0 && parsedCount === 0) {
    logCmsTotalParseFailure(context, rawCount);
    return cmsDataRejected([]);
  }
  return cmsOk(items);
}
