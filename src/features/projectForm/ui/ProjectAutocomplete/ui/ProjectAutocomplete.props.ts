import { Project } from "cv-graphql"
import { SetStateAction } from "react"

export type ProjectsAutocompleteProps = {
    projects: Project[]
    disabled: boolean
    onChange: (value: SetStateAction<Project | null>) => void
}