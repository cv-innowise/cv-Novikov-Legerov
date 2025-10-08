"use client"

import { Suspense, useEffect } from "react"

import { Stack } from "@mui/material"
import { SkillMastery } from "cv-graphql"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { useAuthUser, useAuthUserId } from "@entities/user"
import { useUserProfile } from "@entities/userProfileMenu/hooks/useUserProfile"
import { useSkillMasteryDialog } from "@features/skillsMasteryForm/hooks/useSkillMasteryDialog"
import { RoutesPaths } from "@shared/config"
import { BreadcrumbIconType } from "@shared/const"
import { useBreadcrumbs } from "@shared/hooks"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import BulkDeletion from "@shared/ui/bulk-deletion"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useDeleteCvSkill } from "../hooks/useDeleteCvSkill"
import { useDeleteProfileSkill } from "../hooks/useDeleteProfileSkill"
import { useSkillCategories } from "../hooks/useSkillCategories"
import { useSkills } from "../hooks/useSkills"
import { SkillsProps } from "./Skills.props"
import { userSkillsStyles as styles } from "./Skills.styles"
import SkillsCategory from "./skillsCategory/SkillsCategory"

const Skills = ({ sourceSkills, type, id }: SkillsProps) => {
	const t = useTranslations()

	const { skillCategories, error: skillsCategoriesError } = useSkillCategories()
	const { skills, error: skillsError } = useSkills()

	const [
		deleteProfileSkillQuery,
		{ error: deleteProfileSkillError, loading: deleteProfileSkillLoading },
	] = useDeleteProfileSkill()

	const [
		deleteCvSkillQuery,
		{ error: deleteCvSkillError, loading: deleteCvSkillLoading },
	] = useDeleteCvSkill()

	const deleteProfileSkills = async (names: string[]) => {
		await deleteProfileSkillQuery({
			variables: {
				skill: {
					userId: id,
					name: names,
				},
			},
		})
		addNotification(t("delete skill notification"), "success")
	}

	const deleteCvSkills = async (names: string[]) => {
		await deleteCvSkillQuery({
			variables: {
				cv: {
					cvId: id,
					name: names,
				},
			},
		})
		addNotification(t("delete skill notification"), "success")
	}

	const error =
		skillsCategoriesError ||
		skillsError ||
		deleteProfileSkillError ||
		deleteCvSkillError

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

	const openAddDialog = useSkillMasteryDialog({
		type: type,
		mode: "add",
		sourceSkills: sourceSkills,
		skills,
	})

	let skillsCategoryMap: { [key: string]: SkillMastery[] } = {}

	if (skillCategories) {
		const skills = sourceSkills

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
				onDelete={type === "user" ? deleteProfileSkills : deleteCvSkills}
				onAdd={openAddDialog}
				isLoading={deleteProfileSkillLoading || deleteCvSkillLoading}
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

const UserSkills = () => {
	const params = useParams<{ id: string }>()
	const id = params?.id || useAuthUserId()
	const user = useAuthUser()
	const { profile, error } = useUserProfile(id)

	useBreadcrumbs({
		path: `${RoutesPaths.USERS}/${profile.id}`,
		text: profile.full_name || user.email || "",
		icon: BreadcrumbIconType.Person,
	})

	useErrorNotification([error])

	return <Skills sourceSkills={profile.skills} type="user" id={id} />
}

export const UserSkillsSuspense = () => {
	return (
		<Suspense fallback={<Loader />}>
			<UserSkills />
		</Suspense>
	)
}

export const CvSkills = () => {
	const params = useParams<{ id: string }>()
	const id = params?.id as string

	const { cv, error } = useCv(id)

	useErrorNotification([error])

	return <Skills sourceSkills={cv.skills} type="cv" id={id} />
}

export const CvSkillsSuspense = () => {
	return (
		<Suspense fallback={<Loader />}>
			<CvSkills />
		</Suspense>
	)
}
