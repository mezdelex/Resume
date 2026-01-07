import { repositoriesStore } from "@/shared/repositoriesStore";
import { projectsStore } from "@/shared/projectsStore";
import { projectsData } from "@/data/projectsData";
import IProjectsService from "./IProjectsService";

export const projectsService: IProjectsService = {
  sortProjects: () => {
    if (repositoriesStore.repos.length)
      projectsStore.projects = projectsData
        .map((project) =>
          project.id !== ""
            ? {
              ...project,
              pushed_at: repositoriesStore.repos.find(
                (repo) => repo.name === project.id
              )!.pushed_at,
            }
            : project
        )
        .sort((previous, next) =>
          (next.pushed_at ?? "").localeCompare(previous.pushed_at ?? "")
        );
    else projectsStore.projects = projectsData;
  },
};
