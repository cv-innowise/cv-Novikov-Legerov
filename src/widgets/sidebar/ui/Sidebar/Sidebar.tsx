"use client"

import { FC, useState } from "react"

import { Box, Drawer, IconButton } from "@mui/material"

import { UserProfileMenu } from "@entities/userProfileMenu"
import { LeftArrowIcon, RightArrowIcon } from "@shared/ui/icons"
import { navItems } from "@widgets/sidebar/const/navItems.const"

import { NavList } from "../NavList/NavList"
import { SidebarProps } from "./Sidebar.props"
import { sidebarStyles } from "./Sidebar.styles"

export const Sidebar: FC<SidebarProps> = ({ session }) => {
	const [open, setOpen] = useState(true)

	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<Drawer variant="permanent" open={open} sx={sidebarStyles.container(open)}>
			<NavList items={navItems} />
			<Box sx={sidebarStyles.footer}>
				<UserProfileMenu session={session} />
				<IconButton sx={sidebarStyles.arrow} onClick={toggleDrawer}>
					{open ? <LeftArrowIcon /> : <RightArrowIcon />}
				</IconButton>
			</Box>
		</Drawer>
	)
}
