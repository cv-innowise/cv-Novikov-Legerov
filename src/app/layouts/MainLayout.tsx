import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { Sidebar } from "@widgets/sidebar"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
			<Sidebar />
			<Box sx={{width: "100%"}}>{children}</Box>
		</Box>
	)
}
