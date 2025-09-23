import { Skill } from "cv-graphql";

export type SkillMasteryFormProps<T> = {
    defaultValues?: T;
    type: "user" | "cv"
    mode: "add" | "update";
    userSkills?: Skill[];
}