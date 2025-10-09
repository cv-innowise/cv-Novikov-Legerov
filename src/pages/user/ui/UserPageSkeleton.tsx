import { Box } from "@mui/material"

import { UserInfoSkeleton } from "@entities/user"
import { UserFormSkeleton } from "@features/user/updateUser/ui/UserForm"
import { AvatarSkeleton } from "@features/user/uploadAvatar"

import { userPageStyles } from "./UserPage.styles"

const UserProfileSkeleton = () => (
	<Box sx={userPageStyles.container}>
		<AvatarSkeleton />
		<UserInfoSkeleton />
		<UserFormSkeleton />
	</Box>
)

export default UserProfileSkeleton
