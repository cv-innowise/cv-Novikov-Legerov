"use client"

import { FC } from "react"

import { UserInfo, useUser } from "@entities/user"
import { UserForm } from "@features/user/updateUser"
import { Avatar } from "@features/user/uploadAvatar"

import { UserProfileProps } from "./UserProfile.props"

export const UserProfile: FC<UserProfileProps> = ({ userId }) => {
	const { user } = useUser(userId)

	return (
		<>
			<Avatar user={user} />
			<UserInfo user={user} />
			<UserForm user={user} />
		</>
	)
}
