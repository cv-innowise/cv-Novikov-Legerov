"use client"

import { FC } from "react"

import { Box, Skeleton } from "@mui/material"

import { userProfileMenuStyles } from "./UserProfileMenu.styles"

export const UserProfileMenuSkeleton: FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "8px",
			}}
		>
			<Skeleton
				variant="circular"
				width={userProfileMenuStyles.avatar.width}
				height={userProfileMenuStyles.avatar.height}
				animation="wave"
			/>

			<Skeleton
				variant="rectangular"
				width={120}
				height={24}
				animation="wave"
				sx={{ borderRadius: "4px" }}
			/>
		</Box>
	)
}
