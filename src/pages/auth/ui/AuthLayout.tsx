"use client"

import { Box, Tab, Tabs } from "@mui/material"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { RoutesPaths } from "@shared/config"

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
					value={RoutesPaths.LOGIN}
					label={t("auth.loginTab")}
					component={Link}
					href={RoutesPaths.LOGIN}
				/>
				<Tab
					value={RoutesPaths.SIGNUP}
					label={t("auth.signupTab")}
					component={Link}
					href={RoutesPaths.SIGNUP}
				/>
			</Tabs>

			<Box component="main" sx={authFormStyles.main}>
				{children}
			</Box>
		</>
	)
}
