"use client"

import { FC, MouseEvent, ReactNode, useState } from "react"

import { Box } from "@mui/material"

import { UserMenu } from "./UserMenu/UserMenu"

interface UserProfileWrapperProps {
	userId: string
	children: ReactNode
}

export const UserProfileWrapper: FC<UserProfileWrapperProps> = ({
	children,
	userId,
}) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<Box sx={{ width: "100%" }} onClick={handleClick}>
				{children}
			</Box>
			<UserMenu
				userId={userId}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			/>
		</>
	)
}
