"use client"

import { createContext, memo, useState } from "react"

import { Add, DeleteForever } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import { useTranslations } from "next-intl"

import { BulkDeletionProps } from "./BulkDeletion.props"
import { styles } from "./BulkDeletion.styles"
import { getSession } from "@shared/model/authStorage"

type BulkDeletionContextType = {
	isDeletion: boolean;
	selectedItems: string[];
	setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
	disabled: boolean;
};

export const BulkDeletionContext = createContext<BulkDeletionContextType>({
	isDeletion: false,
	selectedItems: [],
	setSelectedItems: () => {},
	disabled: true
});

const BulkDeletion = ({
	children,
	onDelete,
	loading,
	disabled = true,
	onAdd,
}: BulkDeletionProps) => {
	const t = useTranslations()
	const [isDeletion, setIsDeletion] = useState(false)
	const [selectedItems, setSelectedItems] = useState<string[]>([])

	const handleCancel = () => {
		setIsDeletion(false)
		setSelectedItems([])
	}

	const handleDelete = () => {
		onDelete(selectedItems).then(() => {
			handleCancel();
		})
	}

	const handleAdd = () => {
		onAdd()
	}

	const handleStartSelection = () => {
		setIsDeletion(true)
	}

	return (
		<BulkDeletionContext.Provider value={{isDeletion, selectedItems, setSelectedItems, disabled}}>
			<Stack spacing="32px">
				{children}
				{isDeletion && (
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
							disabled={!selectedItems.length || loading}
							onClick={handleDelete}
						>
							{t("Delete")}
							{!!selectedItems.length && selectedItems.length}
						</Button>
					</Stack>
				)}
				{!isDeletion && !disabled && (
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
		</BulkDeletionContext.Provider>
	)
}

export default memo(BulkDeletion)
