import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { userTabs } from "@shared/types/tab.types"
import { BasicTabs } from "@shared/ui/basicTabs"

export const UserLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<BasicTabs tabs={userTabs(33)} />
			<Box>{children}</Box>
		</Box>
	)
}
