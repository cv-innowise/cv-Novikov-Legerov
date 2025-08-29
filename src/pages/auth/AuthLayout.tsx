"use client"

import { useTranslation } from "react-i18next"

import { Tab, Tabs, Box } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

import routes from "@shared/model/routes"

import { authFormStyles } from "./styles/AuthPage.styles"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const { t } = useTranslation()

	return (
		<>
			<header>
				<Tabs
					sx={{ paddingTop: "6px" }}
					value={pathname}
					centered
					component="header"
				>
					<Tab
						value={routes.authRoutes.login}
						label={t("Log in")}
						component={Link}
						href={routes.authRoutes.login}
					/>
					<Tab
						value={routes.authRoutes.signup}
						label={t("Sign up")}
						component={Link}
						href={routes.authRoutes.signup}
					/>
				</Tabs>
			</header>
			<Box component="main" sx={authFormStyles.main}>
				{children}
			</Box>
		</>
	)
}

export default AuthLayout
