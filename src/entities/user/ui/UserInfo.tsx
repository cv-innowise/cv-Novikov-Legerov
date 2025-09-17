import { Box, Typography } from "@mui/material"

import { getClient } from "@app/providers/apollo/ApolloClient"

import { USER } from "../api/user"
import { UserResult } from "../api/user.types"
import { userInfoStyles } from "./UserInfo.styles"

export const UserInfo = async ({ userId }: UserInfoProps) => {
	const { data } = await getClient().query<UserResult>({
		query: USER,
		variables: { userId },
	})

	return (
		<Box sx={userInfoStyles.details}>
			<Typography variant="h5" sx={userInfoStyles.username}>
				{data?.user.profile.full_name}
			</Typography>
			<Typography sx={userInfoStyles.email}>{data?.user.email}</Typography>
			<Typography sx={userInfoStyles.username}>
				A member since Tue Sep 16 2025
			</Typography>
		</Box>
	)
}
