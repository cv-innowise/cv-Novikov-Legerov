import { CvProject, Project } from "cv-graphql"

export type CvProjectFormProps = {
    mode: "add" | "update"
    project?: CvProject
    projects: Project[]
}