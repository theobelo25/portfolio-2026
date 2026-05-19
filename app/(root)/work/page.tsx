import Welcome from "./welcome";
import Projects from "../../../components/shared/projects";
import ProjectFilters from "./project-filters";
import Divider from "./divider";
import CmsUnavailableNotice from "@/components/shared/cms-unavailable-notice";
import { getAllProjects, getAllTags } from "@/lib/actions/projects.actions";
import { mergeCmsFetchFlags } from "@/lib/cms/fetch-result";
import { workPageMetadata } from "@/lib/metadata";
import {
  filterProjectsByTag,
  normalizeFilter,
  resolveActiveFilter,
  type WorkSearchParams,
} from "@/lib/work-filters";

type MaybePromise<T> = T | Promise<T>;

export const metadata = workPageMetadata;

const WorkPage = async ({
  searchParams,
}: {
  searchParams: MaybePromise<WorkSearchParams>;
}) => {
  const { filter } = await searchParams;
  const [projectsResult, tagsResult] = await Promise.all([
    getAllProjects(),
    getAllTags(),
  ]);
  const { cmsUnavailable, cmsDataRejected } = mergeCmsFetchFlags(
    projectsResult,
    tagsResult,
  );
  const projects = projectsResult.data;
  const tags = tagsResult.data;
  const normalizedFilter = normalizeFilter(filter);
  const activeFilter = resolveActiveFilter(normalizedFilter, tags);
  const filteredProjects = filterProjectsByTag(projects, activeFilter);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex flex-col gap-4 pt-30 pb-page-footer"
    >
      <Welcome />
      {cmsUnavailable ? (
        <CmsUnavailableNotice reason="unavailable" />
      ) : cmsDataRejected ? (
        <CmsUnavailableNotice reason="dataRejected" />
      ) : null}
      <ProjectFilters filters={tags} activeFilter={activeFilter} />
      <Divider />
      <Projects
        projects={filteredProjects}
        cmsUnavailable={cmsUnavailable}
        cmsDataRejected={cmsDataRejected}
        emptyFilterTag={
          filteredProjects.length === 0 && activeFilter ? activeFilter : null
        }
      />
    </main>
  );
};

export default WorkPage;
