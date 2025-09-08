"use client"

import { FC } from "react"

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItemProps } from "./NavItem.props"
import { navItemStyles } from "./NavItem.styles"

export const NavItem: FC<NavItemProps> = ({ to, label, icon, id }) => {
	const pathname = usePathname()

	const isActive = pathname === to

	return (
		<ListItemButton
			sx={{
				...navItemStyles.container,
				...(isActive && navItemStyles.container.active),
			}}
			id={id}
			component={Link}
			href={to}
		>
			<ListItemIcon
				sx={{
					...navItemStyles.icon,
					...(isActive && navItemStyles.icon.active),
				}}
			>
				{icon}
			</ListItemIcon>
			<ListItemText
				sx={{
					...navItemStyles.text,
					...(isActive && navItemStyles.text.active),
				}}
				primary={label}
			/>
		</ListItemButton>
	)
}
