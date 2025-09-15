import { PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { UserProfile, UserProfileWrapper } from "@entities/userProfile"
import { getSession } from "@shared/lib/serverSideCookiesService"
import { BasicBreadcrumbs } from "@shared/ui/BasicBreadcrumbs"
import { Sidebar } from "@widgets/sidebar"

export default async function MainLayout({ children }: PropsWithChildren) {
	const session = await getSession()

	return (
		<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
			<Sidebar>
				<UserProfileWrapper userId={session.id ?? ""}>
					<UserProfile session={session} />
				</UserProfileWrapper>
			</Sidebar>
			<Box sx={{ padding: "16px 24px 0 24px", width: "100%" }}>
				<BasicBreadcrumbs />
				{children}
			</Box>
		</Box>
	)
}
