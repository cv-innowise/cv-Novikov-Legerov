"use client"

import { Stack } from "@mui/material"

import BulkDeletion from "@features/bulk-deletion/ui/BulkDeletion"

import { userSkillsStyles as styles } from "./UserSkills.styles"

const UserSkills = () => {
	const onDelete = (ids: string[]): Promise<void> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, 1000)
		})
	}

	return (
		<Stack sx={styles.container}>
			<BulkDeletion onDelete={onDelete} onAdd={() => {}} loading={false}>
				{({ isActive, selectedIds }) => (
					<></>
				)}
			</BulkDeletion>
		</Stack>
	)
}

export default UserSkills
