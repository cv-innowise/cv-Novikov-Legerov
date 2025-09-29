"use client"

import { FC, MouseEvent, useState } from "react"

import { MoreVert } from "@mui/icons-material"
import { IconButton, Menu } from "@mui/material"

import { ActionMenuProps } from "./ActionsMenu.props"

export const ActionsMenu: FC<ActionMenuProps> = ({ children, icon }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<IconButton onClick={handleClick}>{icon || <MoreVert />}</IconButton>
			<Menu
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				onClick={handleClose}
			>
				{children}
			</Menu>
		</>
	)
}
