import { SubmitHandler } from "react-hook-form"

import { Box, DialogContent } from "@mui/material"
import { useTranslations } from "next-intl"

import { DepartmentsSelect } from "@entities/departments"
import { PositionsSelect } from "@entities/positions"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useProfileUpdate } from "../../hooks/useProfileUpdate"
import { useUserUpdate } from "../../hooks/useUserUpdate"
import {
	UserDialogFormProps,
	UserDialogFormValues,
} from "./UserDialogForm.props"
import { UserDialogFormStyles } from "./UserDialogForm.styles"

export const UserDialogForm = ({ user }: UserDialogFormProps) => {
	const { id: userId } = user

	const [updateProfile] = useProfileUpdate(userId)
	const [updateUser] = useUserUpdate()

	const t = useTranslations()

	const defaultValues = {
		email: user.email,
		password: user && "**********",
		role: user.role,
		firstName: user.profile.first_name || "",
		lastName: user.profile.last_name || "",
		department: user.department?.id || "",
		position: user.position?.id || "",
	}

	const onSubmit: SubmitHandler<UserDialogFormValues> = async (data) => {
		updateProfile({
			variables: {
				profile: {
					userId: userId,
					first_name: data.firstName,
					last_name: data.lastName,
				},
			},
		})
			.then(() =>
				updateUser({
					variables: {
						user: {
							userId: userId,
							departmentId: data.department,
							positionId: data.position,
							role: user.role,
						},
					},
				}),
			)
			.then(() => {
				addNotification(t("userForm.success"), "success")
			})

			.catch((error) => {
				addNotification(error.message, "error")
			})
	}

	return (
		<FormWrapper defaultValues={defaultValues} onSubmit={onSubmit}>
			<DialogContent sx={UserDialogFormStyles.wrapper}>
				<FormTextField disabled name="email" label={t("email")} fullWidth />
				<FormTextField
					disabled
					name="password"
					label={t("password")}
					fullWidth
				/>
				<FormTextField
					name="firstName"
					fullWidth
					label={t("userForm.firstName")}
				/>
				<FormTextField
					fullWidth
					name="lastName"
					label={t("userForm.lastName")}
				/>
				<DepartmentsSelect name="department" />
				<PositionsSelect name="position" />
				<FormTextField name="role" disabled fullWidth />
			</DialogContent>
			<DialogActions confirmButtonText="userForm.update" />
		</FormWrapper>
	)
}
