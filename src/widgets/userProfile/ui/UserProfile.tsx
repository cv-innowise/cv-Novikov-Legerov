"use client"

import { FC } from "react"

import { useAppSelector } from "@app/providers/store/hooks/hooks"
import { UserInfo, useUser } from "@entities/user"
import { UserForm } from "@features/user/updateUser/ui/UserForm"
import { Avatar } from "@features/user/uploadAvatar"

import { UserProfileProps } from "./UserProfile.props"

export const UserProfile: FC<UserProfileProps> = ({ userId }) => {
	const { user } = useUser(userId)

	const currentUserId = useAppSelector((state) => state.user.id)

	const isCurrentUser = userId == currentUserId

	return (
		<>
			<Avatar user={user} isCurrentUser={isCurrentUser} />
			<UserInfo user={user} />
			<UserForm user={user} isCurrentUser={isCurrentUser} />
		</>
	)
}
