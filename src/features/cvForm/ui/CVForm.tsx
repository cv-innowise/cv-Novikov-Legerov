"use client"

import { DialogContent } from "@mui/material"
import { useTranslations } from "next-intl"

import { useAuthUserId, useIsAuthUserHasAccess } from "@entities/user"
import { CVFormValidation } from "@shared/model/validation/validation"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import { FormButton } from "@shared/ui/form/FormButton"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

import { CVFormInput } from "../model/CVForm.types"
import { useCreateCV, useUpdateCV } from "./../hooks"
import { CVFormProps } from "./CVForm.props"
import { styles } from "./CVForm.styles"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

export const CVForm = ({ mode, cv }: CVFormProps) => {
	const t = useTranslations()
	const schema = CVFormValidation(t)
	const hasAccess = useIsAuthUserHasAccess(cv)

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
					userId: "userId",
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

	useErrorNotification([error])

	return (
		<FormWrapper<CVFormInput>
			onSubmit={mode === "add" ? createCV : updateCV}
			schema={schema}
			defaultValues={defaultValues}
			sx={{ display: "flex", flexDirection: "column" }}
		>
			<DialogContent sx={styles.content}>
				<FormTextField<CVFormInput>
					sx={{ pointerEvents: !hasAccess ? "none" : "auto" }}
					name="name"
					label={t("CVForm.name")}
				/>
				<FormTextField<CVFormInput>
					sx={{ pointerEvents: !hasAccess ? "none" : "auto" }}
					name="education"
					label={t("CVForm.education")}
				/>
				<FormTextField<CVFormInput>
					sx={{
						pointerEvents: !hasAccess ? "none" : "auto",
					}}
					name="description"
					id="description"
					multiline
					minRows={7}
					label={t("CVForm.description")}
				/>
			</DialogContent>
			{hasAccess &&
				(mode === "add" ? (
					<DialogActions
						loaders={[createCVLoading, updateCVLoading]}
						confirmButtonText="Confirm"
					/>
				) : (
					<FormButton
						sx={styles.updateButton}
						disabled={updateCVLoading}
						type="submit"
						variant="contained"
					>
						{updateCVLoading ? <Loader /> : "Update"}
					</FormButton>
				))}
		</FormWrapper>
	)
}
