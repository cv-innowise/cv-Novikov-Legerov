"use client"

import { Button, Stack } from "@mui/material"
import { ForgotPasswordInput } from "cv-graphql"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useForgotPassword } from "@features/forgotPassword/hooks/useForgotPassword"
import { RoutesPaths } from "@shared/config"
import { emailValidationForm } from "@shared/model/validation/validation"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper/FormWrapper"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

const ForgotPasswordForm = () => {
	const link = RoutesPaths.LOGIN
	const t = useTranslations()
	const schema = emailValidationForm(t)
	const router = useRouter()
	const handleLink = (): void => {
		router.push(link)
	}
	const [forgotPassword, { error, loading }] = useForgotPassword()

	const handleSubmit = (data: ForgotPasswordInput) => {
		forgotPassword({
			variables: { auth: data },
		}).then(() => {
			addNotification(t("forgot-password.message"), "info")
			router.push(link)
		})
	}

	useErrorNotification([error])

	return (
		<FormWrapper<ForgotPasswordInput>
			onSubmit={handleSubmit}
			schema={schema}
			width="100%"
		>
			<Stack alignItems="center" direction="column" sx={{ gap: "20px" }}>
				<FormTextField<ForgotPasswordInput>
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
