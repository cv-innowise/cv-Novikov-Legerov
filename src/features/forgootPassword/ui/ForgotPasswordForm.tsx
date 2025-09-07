"use client"

import type { AuthInput } from "cv-graphql"

import { useState } from "react"

import { Button, Stack } from "@mui/material"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import routes from "@shared/model/routes"
import { emailValidationForm } from "@shared/model/validation/validation"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper/FormWrapper"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

const ForgotPasswordForm = () => {
	const link = routes.authRoutes.login
	const t = useTranslations()
	const schema = emailValidationForm(t)
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)
	const handleLink = (): void => {
		router.push(link)
	}

	const handleSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			addNotification(t("forgot-password.message"), "info");
			setLoading(false);
			router.push(link)
		}, 1000)
	}

	return (
		<FormWrapper<AuthInput>
			onSubmit={handleSubmit}
			schema={schema}
			width="100%"
		>
			<Stack alignItems="center" direction="column" sx={{ gap: "20px" }}>
				<FormTextField<AuthInput>
					name="email"
					fullWidth
					placeholder="example@mail.com"
					label={t("email")}
				/>
				<Stack sx={{ margin: "40px 0 0" }} spacing="8px">
					<Button variant="contained" disabled={loading} type="submit">
						{loading ? <Loader /> : t(`forgot-password.button`)}
					</Button>
					<Button onClick={handleLink} color="secondary">
						{t(`forgot-password.link`)}
					</Button>
				</Stack>
			</Stack>
		</FormWrapper>
	)
}

export default ForgotPasswordForm
