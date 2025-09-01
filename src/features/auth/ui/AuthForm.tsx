"use client"

import type { AuthInput } from "cv-graphql"
import { useTranslation } from "react-i18next"
import { Button, Stack } from "@mui/material"
import routes from "@shared/model/routes"
import FormTextField from "@shared/ui/form/FormTextField"
import FormPasswordField from "@shared/ui/form/FormPasswordField"
import FormWrapper from "@shared/ui/form/FormWrapper/FormWrapper"
import { useLogin } from "../hooks/useLogin"
import { useSignup } from "../hooks/useSignup"
import { authValidation } from "../model/validation/authValidation"
import { successAuth } from "../model/authService"
import { useRouter } from "next/navigation"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

const AuthForm = ({ mode }: { mode: "login" | "signup" }) => {
	const [login, { error: loginError, loading: loginLoading }] = useLogin()
	const [signup, { error: signupError, loading: signupLoading }] = useSignup()
	const error = mode === "login" ? loginError : signupError
	const loading = mode === "login" ? loginLoading : signupLoading
	const link = mode === "login" ? routes.forgotPassword : routes.authRoutes.login
	const { t } = useTranslation();
	const schema = authValidation(t);
  	const router = useRouter();
  
	const handleLink = (): void => {
		router.push(link);
	}

	const handleSubmit = (data: AuthInput) => {
		if (mode === "login") {
			login({
				variables: {
					auth: data,
				},
			}).then((result) => {
				successAuth(result.data!.login);
				router.push(routes.usersRoutes.users + `/${result.data!.login.user.id}`)
			})
		} else {
			signup({
				variables: {
					auth: data,
				},
			})
		}
	}

	if (error) addNotification(t(error.message), 'error');

	return (
		<FormWrapper<AuthInput> onSubmit={handleSubmit} schema={schema} width="100%">
			<Stack alignItems="center" direction="column" sx={{ gap: "20px" }}>
				<FormTextField<AuthInput> name="email" fullWidth placeholder="example@mail.com" label={t('email')} />
				<FormPasswordField<AuthInput> name="password" />
				<Stack sx={{ margin: "40px 0 0" }}  spacing="8px">
					<Button
						variant="contained"
						disabled={loading}
						type="submit"
					>
						{loading ? <Loader /> : t(`auth.${mode}.button`)}
					</Button>
					<Button onClick={handleLink} color="secondary">
						{t(`auth.${mode}.link`)}
					</Button>
				</Stack>
			</Stack>
		</FormWrapper>
	)
}

export default AuthForm
