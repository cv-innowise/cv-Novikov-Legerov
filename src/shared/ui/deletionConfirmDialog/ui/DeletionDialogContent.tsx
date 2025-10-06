"use client"

import { DialogContent, Typography } from "@mui/material"

import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import { useTranslations } from "next-intl"
import { DeletionDialogContentProps } from "./DeletionDialogContent.props"
import { addNotification } from "@shared/ui/notification/notification.service"
import { useEffect } from "react"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"

export const DeletionConfirmDialogContent = ({
	content,
	useDelete,
	deletedObjectArgs
}: DeletionDialogContentProps) => {
	const [deleteQuery, { error, loading }] = useDelete(deletedObjectArgs)
	const t = useTranslations()

	const handleDelete = () => {
		deleteQuery().then(() => {
			addNotification(t("delete cv notification"), "success")
			hideDialog()
		})
	}

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

	return (
		<>
			<DialogContent>
				<Typography>{content}</Typography>
			</DialogContent>
			<DialogActions
				onConfirmButtonClick={handleDelete}
				loaders={[loading]}
				confirmButtonText="Confirm"
			/>
		</>
	)
}
