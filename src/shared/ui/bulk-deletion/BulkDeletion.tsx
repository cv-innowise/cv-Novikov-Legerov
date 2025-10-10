"use client"

import { createContext, memo, useEffect, useState } from "react"

import { Add, DeleteForever } from "@mui/icons-material"
import { Button, Stack, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import Loader from "../loader"
import { BulkDeletionProps } from "./BulkDeletion.props"
import { styles } from "./BulkDeletion.styles"

type BulkDeletionContextType = {
	isDeletion: boolean
	selectedItems: string[]
	setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
	hasAccess: boolean
}

export const BulkDeletionContext = createContext<BulkDeletionContextType>({
	isDeletion: false,
	selectedItems: [],
	setSelectedItems: () => {},
	hasAccess: false,
})

const BulkDeletion = ({
	children,
	onDelete,
	isLoading,
	onAdd,
	mode,
	hasAccess
}: BulkDeletionProps) => {
	const t = useTranslations()
	const [isDeletion, setIsDeletion] = useState(false)
	const [selectedItems, setSelectedItems] = useState<string[]>([])
	
	const handleCancel = () => {
		setIsDeletion(false)
		setSelectedItems([])
	}

	const handleDelete = async () => {
		await onDelete(selectedItems)
		handleCancel()
	}

	const handleAdd = () => {
		onAdd()
	}

	const handleStartSelection = () => {
		setIsDeletion(true)
	}

	return (
		<BulkDeletionContext.Provider
			value={{ isDeletion, selectedItems, setSelectedItems, hasAccess }}
		>
			<Stack spacing="32px">
				{children}
				{isDeletion && (
					<Stack
						direction="row"
						spacing={2}
						justifyContent="flex-end"
						sx={styles.buttonsContainer}
					>
						<Button
							sx={styles.button}
							color="secondary"
							variant="outlined"
							onClick={handleCancel}
						>
							{t("Cancel")}
						</Button>
						<Button
							sx={styles.deleteButton}
							variant="contained"
							disabled={!selectedItems.length || isLoading}
							onClick={handleDelete}
						>
							{isLoading ? (
								<Loader />
							) : (
								<>
									{t("Delete")}
									{!!selectedItems.length && (
										<Typography sx={styles.deleteAmount}>
											{selectedItems.length}
										</Typography>
									)}
								</>
							)}
						</Button>
					</Stack>
				)}
				{!isDeletion && hasAccess && (
					<Stack
						direction="row"
						spacing={2}
						justifyContent="flex-end"
						sx={styles.buttonsContainer}
					>
						<Button sx={styles.button} color="secondary" onClick={handleAdd}>
							<Add /> {mode === "skills" ? t("Add skill") : t("Add language")}
						</Button>
						<Button sx={styles.button} onClick={handleStartSelection}>
							<DeleteForever />
							{mode === "skills" ? t("Remove skills") : t("Remove languages")}
						</Button>
					</Stack>
				)}
			</Stack>
		</BulkDeletionContext.Provider>
	)
}

export default memo(BulkDeletion)
