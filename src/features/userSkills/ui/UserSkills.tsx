"use client"

import { useEffect, useState } from "react"

import { Stack } from "@mui/material"
import { SkillMastery } from "cv-graphql"
import { useTranslations } from "next-intl"

import { useProfile } from "@entities/userProfileMenu/hooks/useUserProfile"
import { useSkills } from "@features/skillsMasteryForm/hooks"
import { useSkillMasteryDialog } from "@features/skillsMasteryForm/hooks/useSkillMasteryDialog"
import { useUserId } from "@shared/hooks/useUserId"
import { getSession } from "@shared/model/authStorage"
import BulkDeletion from "@shared/ui/bulk-deletion"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useDeleteProfileSkill } from "../hooks/useDeleteProfileSkill"
import { useSkillCategories } from "../hooks/useSkillCategories"
import SkillsCategory from "./skillsCategory/SkillsCategory"
import { userSkillsStyles as styles } from "./UserSkills.styles"

const UserSkills = () => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const t = useTranslations()
	const userId = useUserId()

	useEffect(() => {
		const session = getSession()
		if (session.role === "Admin" || userId === session.id) {
			setIsDisabled(false)
		}
	}, [])

	const {
		data: profileData,
		loading: profileLoading,
		error: profileError,
	} = useProfile(userId)
	const {
		data: skillCategoriesData,
		loading: skillsCategoriesLoading,
		error: skillsCategoriesError,
	} = useSkillCategories()
	const {
		data: skillsData,
		loading: skillsLoading,
		error: skillsError,
	} = useSkills()
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

	const openAddDialog = useSkillMasteryDialog({
		type: "user",
		mode: "add",
		userSkills: profileData?.profile?.skills,
		skills: skillsData?.skills,
	})

	let skillsCategoryMap: { [key: string]: SkillMastery[] } = {}

	if (profileData && skillCategoriesData) {
		const skillCategories = skillCategoriesData.skillCategories
		const skills = profileData.profile.skills

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

	if (profileLoading || skillsCategoriesLoading || skillsLoading)
		return <Loader />

	return (
		<Stack sx={styles.container}>
			<BulkDeletion
				disabled={isDisabled}
				onDelete={deleteSkills}
				onAdd={openAddDialog}
				isLoading={deleteSkillLoading}
			>
				{Object.entries(skillsCategoryMap).map(
					([categoryName, categorySkills]) => {
						return (
							<SkillsCategory
								key={categoryName}
								categoryName={categoryName}
								skills={skillsData?.skills}
								categorySkills={categorySkills}
							/>
						)
					},
				)}
			</BulkDeletion>
		</Stack>
	)
}

export default UserSkills
