"use client"

import { useEffect } from "react"

import { DialogContent } from "@mui/material"
import { useTranslations } from "next-intl"

import { useUserId } from "@shared/hooks/useUserId"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useAddProfileSkill, useSkills, useUpdateProfileSkill } from "../hooks"
import { SkillMasteryFormInput } from "../model/SkillMasteryForm.types"
import { MasterySelect } from "./masterySelect/ui/MasterySelect"
import { SkillMasteryFormProps } from "./SkillMasteryForm.props"
import { styles } from "./SkillMasteryForm.styles"
import { SkillsSelect } from "./skillsSelect/ui/SkillsSelect"

const SkillMasteryForm = ({
	skill,
	mode,
	userSkills,
	skills,
	type,
}: SkillMasteryFormProps) => {
	const [
		addProfileSkillQuery,
		{ error: addSkillError, loading: addSkillLoading },
	] = useAddProfileSkill()

	const [
		updateProfileSkillQuery,
		{ error: updateSkillError, loading: updateSkillLoading },
	] = useUpdateProfileSkill()

	const t = useTranslations()
	const userId = useUserId()
	let transformedSkillsData
	let defaultValues: SkillMasteryFormInput | undefined = undefined

	if (skills) {
		transformedSkillsData = [...skills].sort((a, b) => {
			if (!a.category?.order || !b.category?.order) {
				return 0
			}

			if (a.category.order > b.category.order) {
				return 1
			}

			return -1
		})

		if (skill) {
			const foundSkill = skills.find((s) => s.name === skill.name)
			foundSkill
				? (defaultValues = { skill: foundSkill, mastery: skill.mastery })
				: (defaultValues = undefined)
		}
	}

	if (transformedSkillsData && userSkills) {
		transformedSkillsData = transformedSkillsData.filter((skill) => {
			return !userSkills.find((userSkill) => skill.name === userSkill.name)
		})
	}

	const addProfileSkill = (data: SkillMasteryFormInput) => {
		addProfileSkillQuery({
			variables: {
				skill: {
					userId: userId,
					name: data.skill.name,
					categoryId: data.skill.category?.id,
					mastery: data.mastery,
				},
			},
		}).then(() => {
			addNotification(t("add skill notification"), "success")
			hideDialog()
		})
	}

	const updateProfileSkill = (data: SkillMasteryFormInput) => {
		updateProfileSkillQuery({
			variables: {
				skill: {
					userId: userId,
					name: data.skill.name,
					categoryId: data.skill.category?.id,
					mastery: data.mastery,
				},
			},
		}).then(() => {
			addNotification(t("update skill notification"), "success")
			hideDialog()
		})
	}

	const error = addSkillError ?? updateSkillError

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

	return (
		<FormWrapper<SkillMasteryFormInput>
			onSubmit={mode === "add" ? addProfileSkill : updateProfileSkill}
			// schema={schema}
			defaultValues={defaultValues}
		>
			<DialogContent sx={styles.content}>
				<SkillsSelect
					skills={transformedSkillsData ? transformedSkillsData : []}
					disabled={mode === "update" ? true : false}
				/>
				<MasterySelect />
			</DialogContent>
			<DialogActions
				loaders={[addSkillLoading, updateSkillLoading]}
				confirmButtonText="Confirm"
			/>
		</FormWrapper>
	)
}

export default SkillMasteryForm
