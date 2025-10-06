import type { Metadata } from "next"
import type { ReactNode } from "react"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"

import ThemeProvider from "@app/providers/theme/ThemeProvider"

import ApolloProvider from "../providers/apollo/ApolloProvider"

import "@app/styles/global.scss"

import { NextIntlClientProvider } from "next-intl"
import StoreProvider from "@app/providers/store/provider/StoreProvider"
import { getAuthUserServerSide } from "@shared/lib/serverSideCookiesService"
import Dialog from "@shared/ui/dialog/ui/Dialog"
import Notification from "@shared/ui/notification/Notification"

export const metadata: Metadata = {
	title: "CV manager",
	description: "CV manager",
}

export const RootLayout = async ({
	children,
}: Readonly<{ children: ReactNode }>) => {
	const user = await getAuthUserServerSide()
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<NextIntlClientProvider>
					<ApolloProvider>
						<AppRouterCacheProvider>
							<ThemeProvider>
								<StoreProvider user={user}>
									{children}
									<Notification />
									<Dialog />
								</StoreProvider>
							</ThemeProvider>
						</AppRouterCacheProvider>
					</ApolloProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
