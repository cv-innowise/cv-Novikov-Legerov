import { Skill } from "cv-graphql"
import { Mastery } from "@shared/model/mastery"

export type SkillMasteryFormInput = {
    skill: Skill;
    mastery: Mastery;
}
