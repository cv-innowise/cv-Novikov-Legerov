"use client"

import { useContext } from "react"

import { LinearProgress, Typography } from "@mui/material"

import { useSkillMasteryDialog } from "@features/skillsMasteryForm/hooks/useSkillMasteryDialog"
import { getMasteryColor } from "@features/userSkills/lib/getMasteryColor"
import { Mastery } from "@features/userSkills/model/mastery"
import { BulkDeletionContext } from "@shared/ui/bulk-deletion/BulkDeletion"
import ContextualActionButton from "@shared/ui/contextualActionButton/ContextualActionButton"

import { SkillButtonProps } from "./SkillButton.props"
import { styles } from "./SkillButton.styles"

const SkillButton = ({ skill, skills }: SkillButtonProps) => {
	const { selectedItems } = useContext(BulkDeletionContext)
	const isSelected = selectedItems.includes(skill.name)
	const color = getMasteryColor(skill.mastery)
	const level = Object.values(Mastery).indexOf(skill.mastery) * 20 + 20
	const openDialog = useSkillMasteryDialog({
		type: "user",
		mode: "update",
		skill: skill,
		skills: skills,
	})

	return (
		<ContextualActionButton
			color="secondary"
			item={skill}
			openDialog={openDialog}
			sx={styles.button}
		>
			<LinearProgress
				variant="determinate"
				color={isSelected ? "secondary" : color}
				value={isSelected ? 0 : level}
				sx={{ width: "30%" }}
			/>
			<Typography>{skill.name}</Typography>
		</ContextualActionButton>
	)
}

export default SkillButton
