"use client"

import { useSuspenseQuery } from "@apollo/client/react"

import { SKILLS, SkillsResult } from "@entities/skills"

export const useSkills = () => {
	const { data, error } = useSuspenseQuery<SkillsResult>(SKILLS)

	return {
		skills: data.skills,
		error: error,
	}
}
