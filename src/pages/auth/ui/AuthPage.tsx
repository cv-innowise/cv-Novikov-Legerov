"use client"

import { useTranslations } from "next-intl"
import { Stack, Typography } from "@mui/material"
import AuthForm from "@features/auth/ui/AuthForm"
import { authFormStyles } from "../styles/AuthPage.styles"

const AuthPage = ({ mode }: { mode: "login" | "signup" }) => {
	const t = useTranslations();

	return (
		<Stack direction="column" sx={authFormStyles.formContainer}>
			<Typography variant="h4" textAlign="center">
				{t(`auth.${mode}.title`)}
			</Typography>
			<Typography variant="body1" textAlign="center">
				{t(`auth.${mode}.subtitle`)}
			</Typography>
			<AuthForm mode={mode} />
		</Stack>
	)
}

export default AuthPage
