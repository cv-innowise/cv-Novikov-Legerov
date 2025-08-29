import "@app/providers/i18n/I18nProvider"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import I18nProvider from "@/app/providers/i18n/I18nProvider"
import { CssBaseline } from "@mui/material"

import ApolloProvider from "@app/providers/apollo/ApolloProvider"
import ThemeProvider from "@app/providers/theme/ThemeProvider"
import "@app/styles/global.scss"

export const metadata: Metadata = {
	title: "CV manager",
	description: "CV manager",
}

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<ApolloProvider>
				<I18nProvider>
					<ThemeProvider>
						<CssBaseline />
						<body>{children}</body>
					</ThemeProvider>
				</I18nProvider>
			</ApolloProvider>
		</html>
	)
}
