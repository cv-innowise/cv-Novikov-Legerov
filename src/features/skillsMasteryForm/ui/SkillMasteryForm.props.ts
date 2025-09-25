import { Skill, SkillMastery } from "cv-graphql";

export type SkillMasteryFormProps = {
    skill?: SkillMastery;
    type: "user" | "cv";
    mode: "add" | "update";
    skills: Skill[] | undefined;
    userSkills?: SkillMastery[];
}