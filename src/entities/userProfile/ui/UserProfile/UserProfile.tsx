import { FC } from "react"

import { Avatar, Button, Typography } from "@mui/material"

import { getClient } from "@app/providers/apollo/ApolloClient"
import { PROFILE } from "@entities/userProfile/api/profile"
import { ProfileResult } from "@entities/userProfile/api/profile.types"

import { userProfileStyles } from "./UserProfile.styles"
import { UserProfileProps } from "./UserProflie.props"

export const UserProfile: FC<UserProfileProps> = async ({ session }) => {
	const { id: userId, email } = session

	const { data } = await getClient().query<ProfileResult>({
		query: PROFILE,
		variables: { userId },
	})

	return (
		<Button sx={userProfileStyles.profile}>
			<Avatar sx={userProfileStyles.avatar}>
				{data?.profile?.full_name?.[0] || email[0]}
			</Avatar>
			<Typography sx={userProfileStyles.name}>
				{data?.profile?.full_name || email}
			</Typography>
		</Button>
	)
}
