import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { userTabs } from "@shared/types/tab.types"
import { BasicTabs } from "@shared/ui/basicTabs/BasicTabs"

export const UserLayout: FC<PropsWithChildren> = ({ children }) => {
	const id = 25

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<BasicTabs tabs={userTabs(id)} />
			<Box>{children}</Box>
		</Box>
	)
}
