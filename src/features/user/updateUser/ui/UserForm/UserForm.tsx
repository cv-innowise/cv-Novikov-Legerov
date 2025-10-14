"use client"

import { FC } from "react"
import { SubmitHandler } from "react-hook-form"

import { Box } from "@mui/material"
import { useTranslations } from "next-intl"

import { DepartmentsSelect } from "@entities/departments"
import { PositionsSelect } from "@entities/positions"
import { FormButton } from "@shared/ui/form/FormButton"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useProfileUpdate } from "../../hooks/useProfileUpdate"
import { useUserUpdate } from "../../hooks/useUserUpdate"
import { UserFormProps, UserFormValues } from "./UserForm.props"
import { userFormStyles } from "./UserForm.styles"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

export const UserForm: FC<UserFormProps> = ({ user, isCurrentUser }) => {
	const { id: userId } = user

	const t = useTranslations()
	const [updateProfile] = useProfileUpdate()
	const [updateUser] = useUserUpdate()

	const defaultValues = {
		firstName: user.profile.first_name || "",
		lastName: user.profile.last_name || "",
		department: user.department?.id || "",
		position: user.position?.id || "",
	}

	const onSubmit: SubmitHandler<UserFormValues> = async (data) => {
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
				useErrorNotification([error])
			})
	}

	return (
		<FormWrapper
			onSubmit={onSubmit}
			defaultValues={defaultValues}
			sx={userFormStyles.wrapper}
		>
			<Box sx={userFormStyles.form}>
				<FormTextField
					name="firstName"
					slotProps={{
						input: {
							readOnly: !isCurrentUser,
						},
					}}
					fullWidth
					label={t("userForm.firstName")}
				/>
				<FormTextField
					slotProps={{
						input: {
							readOnly: !isCurrentUser,
						},
					}}
					fullWidth
					name="lastName"
					label={t("userForm.lastName")}
				/>

				<DepartmentsSelect
					name="department"
					slotProps={{
						input: {
							readOnly: !isCurrentUser,
						},
					}}
				/>
				<PositionsSelect
					name="position"
					slotProps={{
						input: {
							readOnly: !isCurrentUser,
						},
					}}
				/>
				{isCurrentUser && (
					<FormButton sx={userFormStyles.btn}>{t("userForm.btn")}</FormButton>
				)}
			</Box>
		</FormWrapper>
	)
}
