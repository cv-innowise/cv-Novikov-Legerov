"use client"

import { ChangeEvent, DragEvent, FC } from "react"

import { Close } from "@mui/icons-material"
import {
	Badge,
	Box,
	IconButton,
	Typography,
	Avatar as UserAvatar,
} from "@mui/material"
import { useTranslations } from "next-intl"

import { fileToBase64 } from "@shared/lib/file"
import { UploadIcon } from "@shared/ui/icons"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useAvatarDelete, useAvatarUpload } from "../hooks/useAvatar"
import { AvatarProps } from "./Avatar.props"
import { avatarStyles } from "./Avatar.styles"

export const Avatar: FC<AvatarProps> = ({ user, isCurrentUser }) => {
	const t = useTranslations()

	const { id: userId, profile } = user

	const avatarUrl = profile?.avatar || ""

	const [uploadAvatar, { loading: uploading }] = useAvatarUpload(userId)
	const [deleteAvatar, { loading: deleting }] = useAvatarDelete(userId)

	const handleUpload = async (files: FileList | null) => {
		const file = files?.[0]
		if (!file) return

		try {
			const avatar = await fileToBase64(file)
			await uploadAvatar({ variables: { avatar: { userId, ...avatar } } })
			addNotification(t("avatar.uploadSuccess"), "success")
		} catch (error) {
			if (error instanceof Error) {
				addNotification(error.message, "error")
			}
		}
	}

	const handleDelete = async () => {
		try {
			await deleteAvatar({ variables: { avatar: { userId } } })
			addNotification(t("avatar.deleteSuccess"), "success")
		} catch (error) {
			if (error instanceof Error) {
				addNotification(error.message, "error")
			}
		}
	}

	const hadnleChange = (event: ChangeEvent<HTMLInputElement>) => {
		handleUpload(event.target.files)
	}

	const handleDragOver = (event: DragEvent) => {
		event.preventDefault()
	}

	const handleDrop = (event: DragEvent) => {
		event.preventDefault()
		handleUpload(event.dataTransfer.files)
	}

	return (
		<Box sx={avatarStyles.container}>
			<Badge
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				badgeContent={
					avatarUrl &&
					isCurrentUser && (
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
			{isCurrentUser && (
				<label onDragOver={handleDragOver} onDrop={handleDrop}>
					<Box sx={avatarStyles.infoBox}>
						<Box sx={avatarStyles.uploadText}>
							<UploadIcon />
							<Typography>{t("avatar.uploadText")}</Typography>
						</Box>
						<Typography sx={avatarStyles.fileRestrictions}>
							{t("avatar.fileRestrictions")}
						</Typography>
						<input
							size={500}
							onChange={hadnleChange}
							disabled={!isCurrentUser}
							type="file"
							accept=".png, .jpg, .jpeg, .gif"
							hidden
						/>
					</Box>
				</label>
			)}
		</Box>
	)
}
