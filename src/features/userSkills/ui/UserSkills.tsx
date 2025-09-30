"use client"

import { Suspense, useEffect } from "react"

import { Stack } from "@mui/material"
import { SkillMastery } from "cv-graphql"
import { useTranslations } from "next-intl"

import { useUserProfile } from "@entities/userProfileMenu/hooks/useUserProfile"
import { useSkillMasteryDialog } from "@features/skillsMasteryForm/hooks/useSkillMasteryDialog"
import BulkDeletion from "@shared/ui/bulk-deletion"
import { addNotification } from "@shared/ui/notification/notification.service"
import { UserSkillsProps } from "./UserSkills.props"
import { useDeleteProfileSkill } from "../hooks/useDeleteProfileSkill"
import { useSkillCategories } from "../hooks/useSkillCategories"
import { useSkills } from "../hooks/useSkills"
import SkillsCategory from "./skillsCategory/SkillsCategory"
import { userSkillsStyles as styles } from "./UserSkills.styles"
import Loader from "@shared/ui/loader"

const UserSkills = ({
	userId,
	isDisabled,
}: UserSkillsProps) => {
	const t = useTranslations()

	const { profile, error: profileError } = useUserProfile(userId)
	const { skillCategories, error: skillsCategoriesError } = useSkillCategories()
	const { skills, error: skillsError } = useSkills()

	const [
		deleteProfileSkillQuery,
		{ error: deleteSkillError, loading: deleteSkillLoading },
	] = useDeleteProfileSkill()

	const deleteSkills = async (names: string[]) => {
		await deleteProfileSkillQuery({
			variables: {
				skill: {
					userId: userId,
					name: names,
				},
			},
		})
		addNotification(t("delete skill notification"), "success")
	}

	const error =
		profileError || skillsCategoriesError || skillsError || deleteSkillError

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

	const openAddDialog =
		profile && skills
			? useSkillMasteryDialog({
					type: "user",
					mode: "add",
					userSkills: profile.skills,
					skills,
				})
			: () => {}

	let skillsCategoryMap: { [key: string]: SkillMastery[] } = {}

	if (profile && skillCategories) {
		const skills = profile.skills

		skills.forEach((skill) => {
			let category = skillCategories.find(
				(category) => category.id === skill.categoryId,
			)

			while (true) {
				if (category?.parent) {
					category = category.parent
				} else break
			}

			const categoryName = category ? category.name : "other"

			if (!skillsCategoryMap[categoryName]) {
				skillsCategoryMap[categoryName] = []
			}
			skillsCategoryMap[categoryName].push(skill)
		})
	}

	return (
		<Stack sx={styles.container}>
			<BulkDeletion
				onDelete={deleteSkills}
				onAdd={openAddDialog}
				isLoading={deleteSkillLoading}
				isDisabled={isDisabled}
				mode="skills"
			>
				{Object.entries(skillsCategoryMap).map(
					([categoryName, categorySkills]) => {
						return (
							<SkillsCategory
								key={categoryName}
								categoryName={categoryName}
								skills={skills}
								categorySkills={categorySkills}
							/>
						)
					},
				)}
			</BulkDeletion>
		</Stack>
	)
}

export const UserSkillsSuspense = ({userId, isDisabled}: UserSkillsProps) => {
	return (
		<Suspense fallback={<Loader />}>
			<UserSkills userId={userId} isDisabled={isDisabled} />
		</Suspense>
	)
}