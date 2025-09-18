"use client"

import { ChangeEvent, FC } from "react"

import { Close } from "@mui/icons-material"
import {
	Badge,
	Box,
	IconButton,
	Typography,
	Avatar as UserAvatar,
} from "@mui/material"
import { useTranslations } from "next-intl"

import { useUserProfile } from "@entities/user/userProfile"
import { fileToBase64 } from "@shared/lib/file"
import { UploadIcon } from "@shared/ui/icons"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useAvatarDelete, useAvatarUpload } from "../hooks/useAvatar"
import { AvatarProps } from "./Avatar.props"
import { avatarStyles } from "./Avatar.styles"

export const Avatar: FC<AvatarProps> = ({ userId }) => {
	const t = useTranslations()

	const { profile } = useUserProfile(userId)

	const avatarUrl = profile?.avatar || ""

	const [uploadAvatar, { loading: uploading }] = useAvatarUpload(userId)
	const [deleteAvatar, { loading: deleting }] = useAvatarDelete(userId)

	const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (!file) return

		try {
			const avatar = await fileToBase64(file)
			await uploadAvatar({ variables: { avatar: { userId, ...avatar } } })
			addNotification(t("avatar.uploadSuccess"))
		} catch (error) {
			if (error instanceof Error) {
				addNotification(error.message, "error")
			}
		}
	}

	const handleDelete = async () => {
		try {
			await deleteAvatar({ variables: { avatar: { userId } } })
			addNotification(t("avatar.deleteSuccess"))
		} catch (error) {
			if (error instanceof Error) {
				addNotification(error.message, "error")
			}
		}
	}

	return (
		<Box sx={avatarStyles.container}>
			<Badge
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				badgeContent={
					avatarUrl && (
						<IconButton disabled={uploading || deleting} onClick={handleDelete}>
							<Close />
						</IconButton>
					)
				}
			>
				<UserAvatar src={avatarUrl} sx={avatarStyles.avatar}>
					{!avatarUrl && profile.full_name?.at(0)}
				</UserAvatar>
			</Badge>
			<label>
				<Box sx={avatarStyles.infoBox}>
					<Box sx={avatarStyles.uploadText}>
						<UploadIcon />
						<Typography>{t("avatar.uploadText")}</Typography>
					</Box>
					<Typography sx={avatarStyles.fileRestrictions}>
						{t("avatar.fileRestrictions")}
					</Typography>
					<input
						onChange={handleUpload}
						type="file"
						accept=".png, .jpg, .jpeg, .gif"
						hidden
					/>
				</Box>
			</label>
		</Box>
	)
}
