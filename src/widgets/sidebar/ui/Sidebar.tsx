"use client"

import { useState } from "react"

import { Box, Drawer, IconButton } from "@mui/material"

import { navItems, NavList } from "@features/navigation"
import { UserProfileWrapper } from "@features/user-profile"
import { LeftArrowIcon, RightArrowIcon } from "@shared/ui/icons"

import { sidebarStyles } from "./Sidebar.styles"

export const Sidebar = () => {
	const [open, setOpen] = useState(true)

	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<Drawer variant="permanent" open={open} sx={sidebarStyles.container(open)}>
			<NavList items={navItems} />
			<Box sx={sidebarStyles.footer}>
				<UserProfileWrapper />
				<IconButton sx={sidebarStyles.arrow} onClick={toggleDrawer}>
					{open ? <LeftArrowIcon /> : <RightArrowIcon />}
				</IconButton>
			</Box>
		</Drawer>
	)
}
