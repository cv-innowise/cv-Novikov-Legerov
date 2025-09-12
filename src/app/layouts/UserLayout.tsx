import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { userTabs } from "@shared/types/tab.types"
import { BasicTabs } from "@shared/ui/basicTabs"

interface UserLayoutProps {
	params: { id: string }
}

export const UserLayout: FC<PropsWithChildren<UserLayoutProps>> = ({
	children,
	params,
}) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<BasicTabs tabs={userTabs(params.id)} />
			<Box>{children}</Box>
		</Box>
	)
}
