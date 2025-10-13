import { Cv, SkillCategory } from "cv-graphql"
import { RefObject } from "react"

export type GeneralInfoSectionProps = {
    cv: Cv
    skillCategories: SkillCategory[]
    previewRef: RefObject<HTMLDivElement>
}