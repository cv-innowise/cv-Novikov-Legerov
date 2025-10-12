import { Mastery } from "@shared/model/mastery"
import { SkillCategory, SkillMastery } from "cv-graphql"

export const getSkillCategoriesMap = (
	skills: SkillMastery[],
	skillCategories: SkillCategory[],
) => {
	const skillCategoriesMap: { [key: string]: string[] } = {}

	skills.map((skill) => {
		let category = skillCategories.find(
			(category) => category.id === skill.categoryId,
		)
		while (true) {
			if (category?.parent) {
				category = category.parent
				continue
			}
			break
		}

		if (!skillCategoriesMap[category!.name]) {
			skillCategoriesMap[category!.name] = []
		}

		skillCategoriesMap[category!.name] = [
			...skillCategoriesMap[category!.name],
			skill.name,
		]
	})

    return skillCategoriesMap
}

export const getSkillCategoriesMasteryMap = (
	skills: SkillMastery[],
	skillCategories: SkillCategory[],
) => {
	const skillCategoriesMap: { [key: string]: { name: string, mastery: Mastery }[] } = {}

	skills.map((skill) => {
		let category = skillCategories.find(
			(category) => category.id === skill.categoryId,
		)
		while (true) {
			if (category?.parent) {
				category = category.parent
				continue
			}
			break
		}

		if (!skillCategoriesMap[category!.name]) {
			skillCategoriesMap[category!.name] = []
		}

		skillCategoriesMap[category!.name] = [
			...skillCategoriesMap[category!.name],
			{ name: skill.name, mastery: skill.mastery },
		]
	})

    return skillCategoriesMap
}