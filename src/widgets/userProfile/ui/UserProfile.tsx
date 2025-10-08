"use client"

import { FC } from "react"

import { useAuthUserId, UserInfo, useUser } from "@entities/user"
import { UserForm } from "@features/user/updateUser/ui/UserForm"
import { Avatar } from "@features/user/uploadAvatar"
import { RoutesPaths } from "@shared/config"
import { BreadcrumbIconType } from "@shared/const"
import { useBreadcrumbs } from "@shared/hooks"

import { UserProfileProps } from "./UserProfile.props"

export const UserProfile: FC<UserProfileProps> = ({ userId }) => {
	const { user } = useUser(userId)
	console.log(user)
	const currentUserId = useAuthUserId()

	useBreadcrumbs({
		path: `${RoutesPaths.USERS}/${user.id}`,
		text: user.profile.full_name ?? user.email,
		icon: BreadcrumbIconType.Person,
	})

	const isCurrentUser = userId === currentUserId

	return (
		<>
			<Avatar user={user} isCurrentUser={isCurrentUser} />
			<UserInfo user={user} />
			<UserForm user={user} isCurrentUser={isCurrentUser} />
		</>
	)
}
