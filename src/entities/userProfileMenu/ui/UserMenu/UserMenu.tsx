"use client"

import { FC } from "react"

import { AccountCircle, Logout, Settings } from "@mui/icons-material"
import {
	Divider,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@mui/material"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { RoutesPaths } from "@shared/config"

import { UserMenuProps } from "./UserMenu.props"
import { userMenuStyles } from "./UserMenu.styles"

export const UserMenu: FC<UserMenuProps> = ({
	anchorEl,
	open,
	onClose,
	userId,
}) => {
	const t = useTranslations()

	return (
		<Menu
			transformOrigin={{ horizontal: "left", vertical: "bottom" }}
			anchorOrigin={{ horizontal: "left", vertical: "top" }}
			sx={userMenuStyles.menu}
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
		>
			<MenuItem
				component={Link}
				href={`${RoutesPaths.USERS}/${userId}`}
				onClick={onClose}
			>
				<ListItemIcon>
					<AccountCircle />
				</ListItemIcon>
				<ListItemText>{t("user.menu.profile")}</ListItemText>
			</MenuItem>
			<MenuItem component={Link} href={RoutesPaths.SETTINGS} onClick={onClose}>
				<ListItemIcon>
					<Settings />
				</ListItemIcon>
				<ListItemText>{t("user.menu.settings")}</ListItemText>
			</MenuItem>
			<Divider />
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<Logout />
				</ListItemIcon>
				<ListItemText>{t("user.menu.logout")}</ListItemText>
			</MenuItem>
		</Menu>
	)
}
