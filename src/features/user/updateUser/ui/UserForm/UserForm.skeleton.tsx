"use client"

import { FC } from "react"

import { Box, Skeleton } from "@mui/material"

import { userFormStyles } from "./UserForm.styles"

export const UserFormSkeleton: FC = () => {
	return (
		<Box sx={userFormStyles.wrapper}>
			<Box sx={userFormStyles.form}>
				<Skeleton variant="rounded" height={56} width="100%" animation="wave" />
				<Skeleton variant="rounded" height={56} width="100%" animation="wave" />
				<Skeleton variant="rounded" height={56} width="100%" animation="wave" />
				<Skeleton variant="rounded" height={56} width="100%" animation="wave" />
				<Skeleton
					variant="rounded"
					animation="wave"
					width="100%"
					height={30}
					sx={{ gridColumn: "2/3" }}
				/>
			</Box>
		</Box>
	)
}
