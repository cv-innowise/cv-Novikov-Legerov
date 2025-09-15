import { ReactNode } from "react"

import { Box } from "@mui/material"

import { userTabs } from "@shared/const/tabs.const"
import { BasicTabs } from "@shared/ui/BasicTabs"

interface UserLayoutProps {
	params: Promise<{ id: string }>
	children: ReactNode
}

export default async function UserLayout({
	children,
	params,
}: UserLayoutProps) {
	const { id } = await params

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<BasicTabs tabs={userTabs(id)} />
			<Box>{children}</Box>
		</Box>
	)
}
