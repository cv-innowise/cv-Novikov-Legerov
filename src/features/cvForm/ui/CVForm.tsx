"use client"

import { useEffect } from "react"

import { DialogContent } from "@mui/material"
import { useTranslations } from "next-intl"

import { useAuthUserId } from "@entities/user"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import { FormButton } from "@shared/ui/form/FormButton"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"
import { CVFormValidation } from "@shared/model/validation/validation"
import { CVFormInput } from "../model/CVForm.types"
import { useCreateCV, useUpdateCV } from "./../hooks"
import { CVFormProps } from "./CVForm.props"
import { styles } from "./CVForm.styles"
import Loader from "@shared/ui/loader"

export const CVForm = ({ mode, cv }: CVFormProps) => {
	const t = useTranslations()
	const schema = CVFormValidation(t)

	const [createCVQuery, { error: createCVError, loading: createCVLoading }] =
		useCreateCV()

	const [updateCVQuery, { error: updateCVError, loading: updateCVLoading }] =
		useUpdateCV()

	const userId = useAuthUserId()

	let defaultValues: CVFormInput = {
		name: "",
		education: "",
		description: "",
	}

	if (cv) {
		defaultValues = {
			name: cv.name,
			education: cv.education || "",
			description: cv.description,
		}
	}

	const createCV = (data: CVFormInput) => {
		createCVQuery({
			variables: {
				cv: {
					name: data.name,
					education: data.education,
					description: data.description,
					userId: userId,
				},
			},
		}).then(() => {
			addNotification(t("create cv notification"), "success")
			hideDialog()
		})
	}

	const updateCV = (data: CVFormInput) => {
		updateCVQuery({
			variables: {
				cv: {
					name: data.name,
					education: data.education,
					description: data.description,
					cvId: cv?.id as string,
				},
			},
		}).then(() => {
			addNotification(t("update cv notification"), "success")
			hideDialog()
		})
	}

	const error = createCVError ?? updateCVError

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

	return (
		<FormWrapper<CVFormInput>
			onSubmit={mode === "add" ? createCV : updateCV}
			schema={schema}
			defaultValues={defaultValues}
		>
			<DialogContent sx={styles.content}>
				<FormTextField<CVFormInput> name="name" label={t("CVForm.name")} />
				<FormTextField<CVFormInput>
					name="education"
					label={t("CVForm.education")}
				/>
				<FormTextField<CVFormInput>
					name="description"
					id="description"
					multiline
					minRows={7}
					label={t("CVForm.description")}
				/>
			</DialogContent>
			{mode === "add" ? (
				<DialogActions
					loaders={[createCVLoading, updateCVLoading]}
					confirmButtonText="Confirm"
				/>
			) : (
				<FormButton sx={styles.updateButton} disabled={updateCVLoading} type="submit" variant="contained">
					{updateCVLoading ? <Loader /> : "Update"}
				</FormButton>
			)}
		</FormWrapper>
	)
}
