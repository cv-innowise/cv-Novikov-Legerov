import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { Sidebar } from "@widgets/sidebar"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<Sidebar />
			<Box>{children}</Box>
		</Box>
	)
}
