"use client"

import { FC, Suspense, useState } from "react"
import { useSelector } from "react-redux"

import { Box, Drawer, IconButton } from "@mui/material"

import { RootState } from "@app/providers/store/store"
import {
	UserProfileMenu,
	UserProfileMenuSkeleton,
} from "@entities/userProfileMenu"
import { LeftArrowIcon, RightArrowIcon } from "@shared/ui/icons"
import { navItems } from "@widgets/sidebar/const/navItems.const"

import { NavList } from "../NavList/NavList"
import { SidebarProps } from "./Sidebar.props"
import { sidebarStyles } from "./Sidebar.styles"

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
				<Suspense fallback={<UserProfileMenuSkeleton />}>
					<UserProfileMenu user={user} />
				</Suspense>
				<IconButton sx={sidebarStyles.arrow} onClick={toggleDrawer}>
					{open ? <LeftArrowIcon /> : <RightArrowIcon />}
				</IconButton>
			</Box>
		</Drawer>
	)
}
