"use client"

import { Skill } from "cv-graphql";
import { useQuery, useSuspenseQuery } from "@apollo/client/react";
import SKILLS from "../api/skills";

type SkillsResult = {
	skills: Skill[]
}

export const useSkills = () => {
	const { data, error } = useSuspenseQuery<SkillsResult>(SKILLS)

	return {
		skills: data.skills,
		error: error
	}
}