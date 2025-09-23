"use client"

import { Box, Stack } from "@mui/material"

import { useSkillMasteryDialog } from "@features/skillsMasteryForm/hooks/useSkillMasteryDialog"
import { getSession } from "@shared/model/authStorage"
import BulkDeletion from "@shared/ui/bulk-deletion"

import { UserSkillsProps } from "./User.Skills.props"
import { userSkillsStyles as styles } from "./UserSkills.styles"

const UserSkills = ({ disabled = true }: UserSkillsProps) => {
	let session;

	if (typeof window !== "undefined") {
		session = getSession();
		if (session.role === "Admin") disabled = false
	}

	const onDelete = (ids: string[]): Promise<void> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, 1000)
		})
	}

	const openAddDialog = useSkillMasteryDialog({
		type: "user",
		mode: "add",
	})

	return (
		<Stack sx={styles.container}>
			<BulkDeletion disabled={false} onDelete={onDelete} onAdd={openAddDialog} loading={false}>
				<Box></Box>
			</BulkDeletion>
		</Stack>
	)
}

export default UserSkills
