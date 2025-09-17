"use client"

import { Box, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import { useUserInfo } from "../hooks/useUserInfo"
import { userInfoStyles } from "./UserInfo.styles"

export const UserInfo = ({ userId }: UserInfoProps) => {
	const t = useTranslations()

	const { user } = useUserInfo(userId)

	return (
		<Box sx={userInfoStyles.details}>
			<Typography variant="h5" sx={userInfoStyles.username}>
				{user.profile.full_name}
			</Typography>
			<Typography sx={userInfoStyles.email}>{user.email}</Typography>
			<Typography sx={userInfoStyles.username}>
				{t("user.data")} {new Date(+user.created_at).toDateString()}
			</Typography>
		</Box>
	)
}
