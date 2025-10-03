import { PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { BasicBreadcrumbs } from "@shared/ui/basic-breadcrumbs"
import { Sidebar } from "@widgets/sidebar"

export default async function MainLayout({ children }: PropsWithChildren) {

	return (
			<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
				<Sidebar />
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
