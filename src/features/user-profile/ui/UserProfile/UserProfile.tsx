import { FC } from "react"

import { Avatar, Button, Typography } from "@mui/material"

import { UserProfileProps } from "./UserProfile.props"
import { userProfileStyles } from "./UserProfile.styles"

export const UserProfile: FC<UserProfileProps> = ({ onClick }) => {
	return (
		<Button sx={userProfileStyles.profile} onClick={onClick}>
			<Avatar sx={userProfileStyles.avatar}>A</Avatar>
			<Typography sx={userProfileStyles.name}>Alex Legerov</Typography>
		</Button>
	)
}
