import { FC } from "react"

import { Avatar, Button, Typography } from "@mui/material"

import { getClient } from "@app/providers/apollo/ApolloClient"
import { PROFILE } from "@features/user-profile/api/profile"
import { ProfileResult } from "@features/user-profile/api/profile.types"

import { userProfileStyles } from "./UserProfile.styles"

export const UserProfile: FC<{ userId: string }> = async ({ userId }) => {
	const { data } = await getClient().query<ProfileResult>({
		query: PROFILE,
		variables: { userId },
	})

	return (
		<Button sx={userProfileStyles.profile}>
			<Avatar sx={userProfileStyles.avatar}>A</Avatar>
			<Typography sx={userProfileStyles.name}>{data?.profile.id}</Typography>
		</Button>
	)
}
