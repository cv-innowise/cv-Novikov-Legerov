import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { UserProfile, UserProfileWrapper } from "@features/user-profile"
import { getUserID } from "@shared/lib/serverSideCookiesService"
import { BasicBreadcrumbs } from "@shared/ui/basicBreadcrumbs"
import { Sidebar } from "@widgets/sidebar"

export const MainLayout: FC<PropsWithChildren> = async ({ children }) => {
	const userId = await getUserID()

	return (
		<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
			<Sidebar>
				<UserProfileWrapper userId={userId ?? ""}>
					<UserProfile userId={userId ?? ""} />
				</UserProfileWrapper>
			</Sidebar>
			<Box sx={{ padding: "16px 24px 0 24px", width: "100%" }}>
				<BasicBreadcrumbs />
				{children}
			</Box>
		</Box>
	)
}
