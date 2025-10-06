"use client"

import type { AuthInput } from "cv-graphql"
import { useEffect } from "react"
import { Button, Stack } from "@mui/material"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { RoutesPaths } from "@shared/config/routes"
import FormPasswordField from "@shared/ui/form/FormPasswordField"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper/FormWrapper"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

import { authValidation } from "../../../shared/model/validation/validation"
import { useLogin } from "../hooks/useLogin"
import { useSignup } from "../hooks/useSignup"
import { successAuth } from "../model/authService"
import { useDispatch } from "react-redux"

const AuthForm = ({ mode }: { mode: "login" | "signup" }) => {
	const [login, { error: loginError, loading: loginLoading }] = useLogin()
	const [signup, { error: signupError, loading: signupLoading }] = useSignup()
	const error = mode === "login" ? loginError : signupError
	const loading = mode === "login" ? loginLoading : signupLoading
	const link =
		mode === "login" ? RoutesPaths.FORGOT_PASSWORD : RoutesPaths.LOGIN
	const t = useTranslations()
	const schema = authValidation(t)
	const router = useRouter()
	const dispatch = useDispatch()

	const handleLink = (): void => {
		router.push(link)
	}

	const handleSubmit = (data: AuthInput) => {
		if (mode === "login") {
			login({
				variables: {
					auth: data,
				},
			}).then((result) => {
				successAuth(result.data!.login, dispatch)
				router.push(RoutesPaths.USERS + `/${result.data!.login.user.id}`)
			})
		} else {
			signup({
				variables: {
					auth: data,
				},
			})
		}
	}

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

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
				<FormPasswordField<AuthInput> name="password" />
				<Stack sx={{ margin: "40px 0 0" }} spacing="8px">
					<Button variant="contained" disabled={loading} type="submit">
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
