"use client"

import { Skill } from "cv-graphql";
import { useQuery } from "@apollo/client/react";
import SKILLS from "../api/skills";

type SkillsResult = {
	skills: Skill[]
}

export const useSkills = () => {
	return useQuery<SkillsResult>(SKILLS)
}