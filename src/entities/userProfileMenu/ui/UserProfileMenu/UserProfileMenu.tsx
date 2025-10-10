"use client"

import { FC, MouseEvent, useState } from "react"

import { Avatar, Button, Typography } from "@mui/material"

import { useUserProfile } from "@entities/userProfileMenu/hooks/useUserProfile"

import { UserMenu } from "../UserMenu/UserMenu"
import { UserProfileMenuSkeleton } from "./UserProfileMenu.skeleton"
import { userProfileMenuStyles } from "./UserProfileMenu.styles"
import { UserProfileMenuProps } from "./UserProfilleMenu.props"

export const UserProfileMenu: FC<UserProfileMenuProps> = ({ user }) => {
	const { id: userId, email } = user

	const { profile } = useUserProfile(userId as string)

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<Button onClick={handleClick} sx={userProfileMenuStyles.profile}>
				<Avatar src={profile?.avatar || ""} sx={userProfileMenuStyles.avatar}>
					{profile.full_name?.[0] || email![0]}
				</Avatar>
				<Typography sx={userProfileMenuStyles.name}>
					{profile.full_name || email}
				</Typography>
			</Button>
			<UserMenu
				userId={userId as string}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			/>
		</>
	)
}
