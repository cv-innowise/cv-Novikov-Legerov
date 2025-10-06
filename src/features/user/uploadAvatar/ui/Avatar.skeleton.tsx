"use client"

import { FC } from "react"

import { Box, Skeleton } from "@mui/material"

import { avatarStyles } from "./Avatar.styles"

export const AvatarSkeleton: FC = () => {
	return (
		<Box sx={avatarStyles.container}>
			<Skeleton
				variant="circular"
				animation="wave"
				width={avatarStyles.avatar.width}
				height={avatarStyles.avatar.height}
				sx={{ flexShrink: 0 }}
			/>
			<Box sx={avatarStyles.infoBox}>
				<Box sx={avatarStyles.uploadText}>
					<Skeleton
						variant="circular"
						width={24}
						height={24}
						animation="wave"
					/>
					<Skeleton variant="text" width={140} height={28} animation="wave" />
				</Box>
				<Skeleton
					variant="text"
					width={180}
					height={20}
					animation="wave"
					sx={{ color: "secondary.main" }}
				/>
			</Box>
		</Box>
	)
}
