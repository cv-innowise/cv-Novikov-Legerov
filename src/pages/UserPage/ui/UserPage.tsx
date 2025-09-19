import { Box } from "@mui/material"

import { UserProfile } from "@widgets/userProfile"

import { UserPageProps } from "./UserPage.props"
import { userPageStyles } from "./UserPage.styles"

const UserPage = async ({ params }: UserPageProps) => {
	const { id } = await params

	return (
		<Box sx={userPageStyles.container}>
			<UserProfile userId={id} />
		</Box>
	)
}

export default UserPage
