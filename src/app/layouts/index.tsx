import type { Metadata } from "next"
import type { ReactNode } from "react"

import { CssBaseline } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"

import ApolloProvider from "@app/providers/apollo/ApolloProvider"
import ThemeProvider from "@app/providers/theme/ThemeProvider"

import "@app/styles/global.scss"

import { NextIntlClientProvider } from "next-intl"

import StoreProvider from "@app/providers/redux/StoreProvider"
import Notification from "@shared/ui/notification/Notification"

export const metadata: Metadata = {
	title: "CV manager",
	description: "CV manager",
}

export function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<NextIntlClientProvider>
				<ApolloProvider>
					<AppRouterCacheProvider>
						<ThemeProvider>
							<CssBaseline />
							<body>
								{children}
								<Notification />
							</body>
						</ThemeProvider>
					</AppRouterCacheProvider>
				</ApolloProvider>
			</NextIntlClientProvider>
		</html>
	)
}
