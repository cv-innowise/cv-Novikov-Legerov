import { Skill, SkillMastery } from "cv-graphql";

export type SkillsCategoryProps = {
    categoryName: string;
    categorySkills: SkillMastery[];
    skills: Skill[];
}