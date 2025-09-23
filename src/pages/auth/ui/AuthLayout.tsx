"use client"

import { Box, Tab, Tabs } from "@mui/material"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

import routes from "@shared/model/routes"
import AuthRoute from "@shared/ui/AuthRoute"

import { authFormStyles } from "../styles/AuthPage.styles"

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const t = useTranslations()

	return (
		<>
			<Tabs
				sx={{ paddingTop: "6px" }}
				value={pathname}
				centered
				component="header"
			>
				<Tab
					value={routes.authRoutes.login}
					label={t("auth.loginTab")}
					component={Link}
					href={routes.authRoutes.login}
				/>
				<Tab
					value={routes.authRoutes.signup}
					label={t("auth.signupTab")}
					component={Link}
					href={routes.authRoutes.signup}
				/>
			</Tabs>

			<Box component="main" sx={authFormStyles.main}>
				{children}
			</Box>
		</>
	)
}
