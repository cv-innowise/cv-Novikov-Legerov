import type { Metadata } from "next"
import type { ReactNode } from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import ApolloProvider from "@app/providers/apollo/ApolloProvider"
import ThemeProvider from "@app/providers/theme/ThemeProvider"
import "@app/styles/global.scss"
import { NextIntlClientProvider } from "next-intl"
import Notification from "@shared/ui/notification/Notification"

export const metadata: Metadata = {
	title: "CV manager",
	description: "CV manager",
}

export function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<NextIntlClientProvider>
					<ApolloProvider>
						<AppRouterCacheProvider>
							<ThemeProvider>
								{children}
								<Notification />
							</ThemeProvider>
						</AppRouterCacheProvider>
					</ApolloProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
