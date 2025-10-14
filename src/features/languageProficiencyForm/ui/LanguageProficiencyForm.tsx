"use client"

import { DialogContent } from "@mui/material"
import { useTranslations } from "next-intl"

import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"
import { LanguageProficiency } from "cv-graphql"
import { useAddProfileLanguage, useUpdateProfileLanguage } from "../hooks"
// import { LanguageProficiencyFormInput } from "../model/LanguageProficiencyForm.types"
import { LanguageProficiencyFormProps } from "./LanguageProficiencyForm.props"
import { styles } from "./LanguageProficiencyForm.styles"
import { LanguageSelect } from "./languageSelect/ui/LanguageSelect"
import { ProficiencySelect } from "./proficiencySelect/ui/ProficiencySelect"
import { Language } from "cv-graphql"
import { Proficiency } from "@shared/model/proficiency"
import { useAuthUserId } from "@entities/user"
import { languageFormValidation } from "@shared/model/validation/validation"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

const LanguageProficiencyForm = ({
	language,
	mode,
	userLanguages,
	languages,
}: LanguageProficiencyFormProps) => {
	const t = useTranslations()
	const schema = languageFormValidation(t)
	
	const [
		addProfileLanguageQuery,
		{ error: addLanguageError, loading: addLanguageLoading },
	] = useAddProfileLanguage()

	const [
		updateProfileLanguageQuery,
		{ error: updateLanguageError, loading: updateLanguageLoading },
	] = useUpdateProfileLanguage()

	const userId = useAuthUserId()
	let defaultValues: LanguageProficiency | undefined = undefined
	let transformedLanguagesData: Language[] = languages

	if (language) {
		defaultValues = language
	}

	const addProfileLanguage = (data: LanguageProficiency) => {
		addProfileLanguageQuery({
			variables: {
				language: {
					userId: userId,
					name: data.name,
					proficiency: data.proficiency,
				},
			},
		}).then(() => {
			addNotification(t("add language notification"), "success")
			hideDialog()
		})
	}

	const updateProfileLanguage = (data: LanguageProficiency) => {
		updateProfileLanguageQuery({
			variables: {
				language: {
					userId: userId,
					name: data.name,
					proficiency: data.proficiency,
				},
			},
		}).then(() => {
			addNotification(t("update language notification"), "success")
			hideDialog()
		})
	}

	if (userLanguages && transformedLanguagesData) {
		transformedLanguagesData = transformedLanguagesData.filter((language) => {
			return !userLanguages.find((userLanguage) => language.name === userLanguage.name)
		})
	}

	const error = addLanguageError ?? updateLanguageError

	useErrorNotification([error])

	return (
		<FormWrapper<LanguageProficiency>
			onSubmit={mode === "add" ? addProfileLanguage : updateProfileLanguage}
			schema={schema}
			defaultValues={defaultValues || { name: undefined, proficiency: Proficiency.Native }}
		>
			<DialogContent sx={styles.content}>
				<LanguageSelect
					languages={transformedLanguagesData ? transformedLanguagesData : []}
					disabled={mode === "update" ? true : false}
				/>
				<ProficiencySelect />
			</DialogContent>
			<DialogActions
				loaders={[addLanguageLoading, updateLanguageLoading]}
				confirmButtonText="Confirm"
			/>
		</FormWrapper>
	)
}

export default LanguageProficiencyForm
