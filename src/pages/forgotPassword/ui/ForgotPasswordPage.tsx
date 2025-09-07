"use client"

import { Stack, Typography, Box } from "@mui/material"
import { useTranslations } from "next-intl"

import AuthForm from "@features/auth/ui/AuthForm"

import { forgotPasswordStyles } from "../styles/ForgotPassword.styles"
import ForgotPasswordForm from "@features/forgootPassword/ui/ForgotPasswordForm"

export const ForgotPasswordPage = ({ mode }: { mode: "login" | "signup" }) => {
	const t = useTranslations()

	return (
		<Box component="main" sx={forgotPasswordStyles.main}>
			<Stack direction="column" sx={forgotPasswordStyles.formContainer}>
				<Typography variant="h4" textAlign="center">
					{t(`forgot-password.title`)}
				</Typography>
				<Typography variant="body1" textAlign="center">
					{t(`forgot-password.subtitle`)}
				</Typography>
				<ForgotPasswordForm />
			</Stack>
		</Box>
	)
}