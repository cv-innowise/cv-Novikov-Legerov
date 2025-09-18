import { Box } from "@mui/material"

import { UserInfo } from "@entities/user/userInfo"
import { UserForm } from "@features/user/updateUser"
import { Avatar } from "@features/user/uploadAvatar"

import { userPageStyles } from "./UserPage.styles"

interface UserPageProps {
	params: Promise<{ id: string }>
}

const UserPage = async ({ params }: UserPageProps) => {
	const { id } = await params

	return (
		<Box sx={userPageStyles.container}>
			<Avatar userId={id} />
			<UserInfo userId={id} />
			<UserForm userId={id} />
		</Box>
	)
}

export default UserPage
