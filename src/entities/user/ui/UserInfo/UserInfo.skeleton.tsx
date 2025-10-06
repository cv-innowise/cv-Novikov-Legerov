"use client"

import { FC } from "react"

import { Box, Skeleton } from "@mui/material"

import { userInfoStyles } from "./UserInfo.styles"

export const UserInfoSkeleton: FC = () => {
	return (
		<Box sx={userInfoStyles.details}>
			<Skeleton
				variant="text"
				width={160}
				height={36}
				sx={{ mb: "8px" }}
				animation="wave"
			/>
			<Skeleton
				variant="text"
				width={200}
				height={24}
				sx={{ mb: "8px" }}
				animation="wave"
			/>
			<Skeleton variant="text" width={180} height={24} animation="wave" />
		</Box>
	)
}
