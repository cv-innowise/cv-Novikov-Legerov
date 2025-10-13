import { SkillCategory, SkillMastery } from "cv-graphql"

export type SkillsSectionProps = {
    skills: SkillMastery[]
    skillCategories: SkillCategory[]
}