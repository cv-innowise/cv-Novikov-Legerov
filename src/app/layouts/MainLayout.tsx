import { PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { getSession } from "@shared/lib/serverSideCookiesService"
import { BasicBreadcrumbs } from "@shared/ui/BasicBreadcrumbs"
import { Sidebar } from "@widgets/sidebar"

export default async function MainLayout({ children }: PropsWithChildren) {
	const session = await getSession()

	return (
		<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
			<Sidebar session={session} />
			<Box
				sx={{
					padding: {
						xs: "16px 16px 0 16px",
						sm: "16px 24px 0 24px",
					},
					width: "100%",
				}}
			>
				<BasicBreadcrumbs />
				{children}
			</Box>
		</Box>
	)
}
