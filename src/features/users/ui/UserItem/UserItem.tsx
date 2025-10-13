"use client"

import { FC } from "react"

import { KeyboardArrowRight } from "@mui/icons-material"
import {
	Avatar,
	IconButton,
	MenuItem,
	TableCell,
	TableRow,
} from "@mui/material"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { useUserDialog } from "@features/user/updateUser/hooks/useUserDialog"
import { RoutesPaths } from "@shared/config"
import { ActionsMenu } from "@shared/ui/ActionsMenu"
import { commonStyles } from "@shared/ui/theme/commonStyles"

import { UserItemProps } from "./UserItem.props"

export const UserItem: FC<UserItemProps> = ({ row: user, currentUserId }) => {
	const t = useTranslations()
	const router = useRouter()
	const isCurrentUser = user.id == currentUserId

	const openUserDialog = useUserDialog({ user })

	const handleProfile = () => {
		router.push(`${RoutesPaths.USERS}/${user.id}`)
	}
	const handleDelete = () => {}
	const handleUpdate = () => {
		openUserDialog()
	}

	return (
		<TableRow>
			<TableCell>
				<Avatar src={user.profile.avatar || ""}>
					{user.profile.full_name?.at(0) || user.email.at(0)}
				</Avatar>
			</TableCell>
			<TableCell>{user.profile.first_name}</TableCell>
			<TableCell sx={commonStyles.disappearance("sm")}>
				{user.profile.last_name}
			</TableCell>
			<TableCell sx={commonStyles.disappearance("md")}>{user.email}</TableCell>
			<TableCell>{user.department?.name}</TableCell>
			<TableCell sx={commonStyles.disappearance("md")}>
				{user.position?.name}
			</TableCell>
			<TableCell>
				{isCurrentUser ? (
					<ActionsMenu>
						<MenuItem onClick={handleProfile}>{t("user.profile")}</MenuItem>
						<MenuItem onClick={handleUpdate}>{t("user.update")}</MenuItem>
						<MenuItem onClick={handleDelete}>{t("user.delete")}</MenuItem>
					</ActionsMenu>
				) : (
					<IconButton onClick={handleProfile}>
						<KeyboardArrowRight />
					</IconButton>
				)}
			</TableCell>
		</TableRow>
	)
}
