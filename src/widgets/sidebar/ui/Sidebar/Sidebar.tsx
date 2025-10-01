"use client"

import { FC, useState } from "react"

import { Box, Drawer, IconButton } from "@mui/material"

import { UserProfileMenu } from "@entities/userProfileMenu"
import { LeftArrowIcon, RightArrowIcon } from "@shared/ui/icons"
import { navItems } from "@widgets/sidebar/const/navItems.const"

import { NavList } from "../NavList/NavList"
import { SidebarProps } from "./Sidebar.props"
import { sidebarStyles } from "./Sidebar.styles"
import { useSelector } from "react-redux"
import { RootState } from "@app/providers/store/store"

export const Sidebar: FC<SidebarProps> = () => {
	const [open, setOpen] = useState(true)
	const user = useSelector((state: RootState) => state.user)

	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<Drawer variant="permanent" open={open} sx={sidebarStyles.container(open)}>
			<NavList items={navItems} />
			<Box sx={sidebarStyles.footer}>
				<UserProfileMenu user={user} />
				<IconButton sx={sidebarStyles.arrow} onClick={toggleDrawer}>
					{open ? <LeftArrowIcon /> : <RightArrowIcon />}
				</IconButton>
			</Box>
		</Drawer>
	)
}
