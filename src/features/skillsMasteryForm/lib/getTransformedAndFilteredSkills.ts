import { Skill, SkillMastery } from "cv-graphql"

export const getTransformedAndFilteredSkills = (skills: Skill[], sourceSkills: SkillMastery[] | undefined) => {
	let transformedAndFilteredSkills: Skill[] = []

	transformedAndFilteredSkills = [...skills].sort((a, b) => {
		if (!a.category?.order || !b.category?.order) {
			return 0
		}

		if (a.category.order > b.category.order) {
			return 1
		}

		return -1
	})

	if (sourceSkills) {
		transformedAndFilteredSkills = transformedAndFilteredSkills.filter((skill) => {
			return !sourceSkills.find(
				(sourceSkill) => skill.name === sourceSkill.name,
			)
		})
	}

	return transformedAndFilteredSkills
}
