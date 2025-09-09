import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { BasicBreadcrumbs } from "@shared/ui/basicBreadcrumbs"
import { Sidebar } from "@widgets/sidebar"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
			<Sidebar />
			<Box sx={{ padding: "16px 24px 0 24px", width: "100%" }}>
				<BasicBreadcrumbs />
				{children}
			</Box>
		</Box>
	)
}
