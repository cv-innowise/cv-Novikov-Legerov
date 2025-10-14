import { ReactNode } from "react"

import { Box } from "@mui/material"
import { Metadata } from "next"

import { userTabs } from "@shared/const/tabs.const"
import { BasicTabs } from "@shared/ui/basicTabs"

interface UserLayoutProps {
	params: Promise<{ id: string }>
	children: ReactNode
}

export async function generateMetadata({
	params,
}: UserLayoutProps): Promise<Metadata> {
	const { id } = await params

	return {
		title: `Profile ${id}`,
		description: `Information about user ${id}`,
	}
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
