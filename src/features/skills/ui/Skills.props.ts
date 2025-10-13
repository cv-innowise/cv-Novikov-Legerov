import { SkillMastery } from "cv-graphql"

export type SkillsProps = {
    sourceSkills: SkillMastery[]
    type: "user" | "cv"
    id: string
    hasAccess: boolean
}