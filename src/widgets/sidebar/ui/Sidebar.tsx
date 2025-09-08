"use client"

import { useState } from "react"

import { Box, Drawer, IconButton } from "@mui/material"

import { navItems, NavList } from "@features/navigation"
import { LeftArrowIcon, RightArrowIcon } from "@shared/ui/icons"

import { sidebarStyles } from "./Sidebar.styles"

export const Sidebar = () => {
	const [open, setOpen] = useState(false)

	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<Drawer variant="permanent" open={open} sx={sidebarStyles.container(open)}>
			<NavList items={navItems} />
			<Box sx={sidebarStyles.footer}>
				<IconButton onClick={toggleDrawer}>
					{open ? <LeftArrowIcon /> : <RightArrowIcon />}
				</IconButton>
			</Box>
		</Drawer>
	)
}
