"use client"

import { FC } from "react"

import { Avatar, Button, Typography } from "@mui/material"

import { useUserProfile } from "../../hooks/useUserProfile"
import { userProfileStyles } from "./UserProfile.styles"
import { UserProfileProps } from "./UserProflie.props"

export const UserProfile: FC<UserProfileProps> = ({ session, onClick }) => {
	const { id: userId, email } = session

	const { profile } = useUserProfile(userId)

	return (
		<Button onClick={onClick} sx={userProfileStyles.profile}>
			<Avatar src={profile?.avatar || ""} sx={userProfileStyles.avatar}>
				{profile.full_name?.[0] || email[0]}
			</Avatar>
			<Typography sx={userProfileStyles.name}>
				{profile.full_name || email}
			</Typography>
		</Button>
	)
}
