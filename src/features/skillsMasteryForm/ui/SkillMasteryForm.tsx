"use client"

import { useEffect } from "react"

import { DialogContent } from "@mui/material"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { getSession } from "@shared/model/authStorage"
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
	defaultValues,
	mode,
	userSkills,
	type,
}: SkillMasteryFormProps<SkillMasteryFormInput>) => {
	const {
		data: skillsData,
		loading: skillsLoading,
		error: skillsError,
	} = useSkills()
	const [
		addProfileSkillQuery,
		{ error: addSkillError, loading: addSkillLoading },
	] = useAddProfileSkill()
	const [
		updateProfileSkillQuery,
		{ error: updateSkillError, loading: updateSkillLoading },
	] = useUpdateProfileSkill()

	const t = useTranslations()
	const session = getSession()
	const params = useParams<{ id: string }>()
	let transformedSkillsData
	let userId
	if (params?.id) {
		userId = params.id
	} else {
		userId = session.id
	}

	if (skillsData) {
		transformedSkillsData = [...skillsData.skills].sort((a, b) => {
			if (!a.category?.order || !b.category?.order) {
				return 0;
			}

			if (a.category.order > b.category.order) {
				return 1
			}

			return -1
		})
	}

	if (skillsData && userSkills) {
		transformedSkillsData = skillsData.skills.filter((skill) => {
			userSkills.find((userSkill) => !(skill.id === userSkill.id))
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
				profileSkillInput: {
					userId: userId,
					name: data.skill.name,
					categoryId: data.skill.category?.id,
					mastery: data.mastery,
				},
			},
		})
	}

	const error = addSkillError ?? updateSkillError ?? skillsError

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
					disabled={mode === "update" ? true : false || skillsLoading}
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
