import { useSuspenseQuery } from "@apollo/client/react"

import { PROJECTS } from "../api/projects"
import { Project } from "cv-graphql"

type ProjectsResult = {
    projects: Project[]
}

export const useProjects = () => {
    const { data, error } = useSuspenseQuery<ProjectsResult>(PROJECTS)

    return {
        projects: data.projects,
        error: error
    }
}
