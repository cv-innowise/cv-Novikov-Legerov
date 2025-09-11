"use client"

import { FC, MouseEvent, useState } from "react"

import { UserMenu } from "./UserMenu/UserMenu"
import { UserProfile } from "./UserProfile/UserProfile"

export const UserProfileWrapper: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<UserProfile onClick={handleClick} />
			<UserMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
		</>
	)
}
