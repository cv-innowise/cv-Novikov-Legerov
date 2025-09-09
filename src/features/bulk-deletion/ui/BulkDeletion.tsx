"use client"

import { memo, useState } from "react"

import { Add, DeleteForever } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import { useTranslations } from "next-intl"

import { BulkDeletionProps } from "./BulkDeletion.props"
import { styles } from "./BulkDeletion.styles"

const BulkDeletion = ({
	children,
	onDelete,
	loading,
	onAdd,
}: BulkDeletionProps) => {
	const t = useTranslations()
	const [isActive, setIsActive] = useState(false)
	const [selectedIds, setSelectedIds] = useState<string[]>([])

	const handleCancel = () => {
		setIsActive(false)
		setSelectedIds([])
	}

	const handleDelete = () => {
		onDelete(selectedIds).then(() => {
			handleCancel()
		})
	}

	const handleAdd = () => {
		onAdd()
	}

	const handleStartSelection = () => {
		setIsActive(true)
	}

	return (
		<Stack spacing="32px">
			{children({ isActive, setIsActive, selectedIds, setSelectedIds })}
			{isActive && (
				<Stack direction="row" spacing={2} justifyContent="flex-end">
					<Button
						sx={styles.button}
						color="secondary"
						variant="outlined"
						onClick={handleCancel}
					>
						{t("Cancel")}
					</Button>
					<Button
						sx={styles.button}
						variant="contained"
						disabled={!selectedIds.length || loading}
						onClick={handleDelete}
					>
						{t("Delete")}
						{!!selectedIds.length && selectedIds.length}
					</Button>
				</Stack>
			)}
			{!isActive /* && canUpdateProfile(profile) */ && (
				<Stack direction="row" spacing={2} justifyContent="flex-end">
					<Button sx={styles.button} color="secondary" onClick={handleAdd}>
						<Add /> {t("Add skill")}
					</Button>
					<Button sx={styles.button} onClick={handleStartSelection}>
						<DeleteForever /> {t("Remove skills")}
					</Button>
				</Stack>
			)}
		</Stack>
	)
}

export default memo(BulkDeletion)
