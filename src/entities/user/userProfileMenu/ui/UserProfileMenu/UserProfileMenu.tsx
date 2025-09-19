"use client"

import { FC, MouseEvent, useState } from "react"

import { UserMenu } from "../UserMenu/UserMenu"
import { UserProfile } from "../UserProfile/UserProfile"
import { UserProfileMenuProps } from "./UserProfilleMenu.props"

export const UserProfileMenu: FC<UserProfileMenuProps> = ({ session }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<UserProfile session={session} onClick={handleClick} />
			<UserMenu
				userId={session.id}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			/>
		</>
	)
}
