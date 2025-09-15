"use client"

import { FC, PropsWithChildren, useState } from "react"

import { Box, Drawer, IconButton } from "@mui/material"

import { LeftArrowIcon, RightArrowIcon } from "@shared/ui/icons"
import { navItems } from "@widgets/sidebar/const/navItems.const"

import { NavList } from "../NavList/NavList"
import { sidebarStyles } from "./Sidebar.styles"

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
	const [open, setOpen] = useState(true)

	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<Drawer variant="permanent" open={open} sx={sidebarStyles.container(open)}>
			<NavList items={navItems} />
			<Box sx={sidebarStyles.footer}>
				{children}
				<IconButton sx={sidebarStyles.arrow} onClick={toggleDrawer}>
					{open ? <LeftArrowIcon /> : <RightArrowIcon />}
				</IconButton>
			</Box>
		</Drawer>
	)
}
