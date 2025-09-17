"use client"

import { FC } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

import { Box, Button } from "@mui/material"
import { useTranslations } from "next-intl"

import { DepartmentsSelect } from "@entities/departments"
import { PositionsSelect } from "@entities/positions"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper"

import { useProfileUpdate } from "../hooks/useProfileUpdate"
import { useUserUpdate } from "../hooks/useUserUpdate"
import { UserFormProps, UserFormValues } from "./UseForm.props"
import { userFormStyles } from "./UseForm.styles"

export const UserForm: FC<UserFormProps> = ({ userId }) => {
	const t = useTranslations()

	const [updateUser] = useUserUpdate()

	const [updateProfile] = useProfileUpdate()

	const methods = useForm<UserFormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			department: "",
			position: "",
		},
	})

	const onSubmit: SubmitHandler<UserFormValues> = async (data) => {
		await updateUser({
			variables: {
				user: {
					userId: userId,
					departmentId: data.department,
					positionId: data.position,
				},
			},
		})
		await updateProfile({
			variables: {
				profile: {
					userId: userId,
					first_name: data.firstName,
					last_name: data.lastName,
				},
			},
		})
	}

	return (
		<FormWrapper
			onSubmit={onSubmit}
			// schema={schema}
			width="100%"
		>
			<Box sx={userFormStyles.form}>
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
				<Button
					type="submit"
					variant="contained"
					fullWidth
					sx={userFormStyles.btn}
				>
					{t("userForm.btn")}
				</Button>
			</Box>
		</FormWrapper>
	)
}
