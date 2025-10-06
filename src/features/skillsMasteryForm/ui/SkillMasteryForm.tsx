"use client"

import { DialogContent } from "@mui/material"
import { AddCvSkillInput, AddProfileSkillInput, Skill, UpdateCvSkillInput, UpdateProfileSkillInput } from "cv-graphql"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { useAuthUserId } from "@entities/user"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import { Mastery } from "@shared/model/mastery"
import { skillFormValidation } from "@shared/model/validation/validation"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"

import {
	useAddCvSkill,
	useAddProfileSkill,
	useUpdateCvSkill,
	useUpdateProfileSkill,
} from "../hooks"
import { getTransformedAndFilteredSkills } from "../lib/getTransformedAndFilteredSkills"
import { SkillMasteryFormInput } from "../model/SkillMasteryForm.types"
import { MasterySelect } from "./masterySelect/ui/MasterySelect"
import { SkillMasteryFormProps } from "./SkillMasteryForm.props"
import { styles } from "./SkillMasteryForm.styles"
import { SkillsSelect } from "./skillsSelect/ui/SkillsSelect"

const SkillMasteryForm = ({
	skill,
	mode,
	sourceSkills,
	skills,
	type,
}: SkillMasteryFormProps) => {
	const t = useTranslations()
	const schema = skillFormValidation(t)
	const params = useParams<{ id: string }>()
	const id = params?.id || useAuthUserId()

	const [
		addProfileSkillQuery,
		{ error: addProfileSkillError, loading: addProfileSkillLoading },
	] = useAddProfileSkill()

	const [
		updateProfileSkillQuery,
		{ error: updateProfileSkillError, loading: updateProfileSkillLoading },
	] = useUpdateProfileSkill()

	const [
		addCvSkillQuery,
		{ error: addCvSkillError, loading: addCvSkillLoading },
	] = useAddCvSkill()

	const [
		updateCvSkillQuery,
		{ error: updateCvSkillError, loading: updateCvSkillLoading },
	] = useUpdateCvSkill()

	const skillQueries = {
		addUser: addProfileSkillQuery,
		updateUser: updateProfileSkillQuery,
		addCv: addCvSkillQuery,
		updateCv: updateCvSkillQuery,
	}

	let transformedAndFilteredSkills: Skill[] = getTransformedAndFilteredSkills(
		skills,
		sourceSkills,
	)
	let defaultValues: SkillMasteryFormInput | undefined = skill
		? (() => {
				const foundSkill = skills.find((s) => s.name === skill.name)
				return foundSkill
					? { skill: foundSkill, mastery: skill.mastery }
					: undefined
			})()
		: undefined

	const handleSubmit = (data: SkillMasteryFormInput) => {
		const query = skillQueries[`${mode}${type === "user" ? "User" : "Cv"}`]

		const skill: any = {
			name: data.skill.name,
			categoryId: data.skill.category?.id,
			mastery: data.mastery,
		}

		if (type === "user") {
			skill.userId = id
		} else {
			skill.cvId = id
		}

		query({
			variables: { skill },
		}).then(() => {
			addNotification(t(`${mode} skill notification`), "success")
			hideDialog()
		})
	}

	useErrorNotification([
		addProfileSkillError,
		updateProfileSkillError,
		addCvSkillError,
		updateCvSkillError,
	])

	return (
		<FormWrapper<SkillMasteryFormInput>
			onSubmit={handleSubmit}
			schema={schema}
			defaultValues={
				defaultValues || { skill: undefined, mastery: Mastery.Novice }
			}
		>
			<DialogContent sx={styles.content}>
				<SkillsSelect
					skills={
						transformedAndFilteredSkills ? transformedAndFilteredSkills : []
					}
					disabled={mode === "update" ? true : false}
				/>
				<MasterySelect />
			</DialogContent>
			<DialogActions
				loaders={[
					addProfileSkillLoading,
					updateProfileSkillLoading,
					addCvSkillLoading,
					updateCvSkillLoading,
				]}
				confirmButtonText="Confirm"
			/>
		</FormWrapper>
	)
}

export default SkillMasteryForm
