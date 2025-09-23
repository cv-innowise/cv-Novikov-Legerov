"use client"

import { useContext, useState } from "react"

import { SkillButtonProps } from "./SkillButton.props"

import "./SkillButton.styles"

import { LinearProgress, Typography } from "@mui/material"
import { Mastery } from "cv-graphql"

import { useSkillMasteryDialog } from "@features/skillsMasteryForm/hooks/useSkillMasteryDialog"
import { getMasteryColor } from "@features/user-skills/lib/getMasteryColor"
import { BulkDeletionContext } from "@shared/ui/bulk-deletion/BulkDeletion"
import ContextualActionButton from "@shared/ui/contextualActionButton/ContextualActionButton"

const SkillButton = ({ skill }: SkillButtonProps) => {
	const { selectedItems, disabled } = useContext(BulkDeletionContext)
	const isSelected = selectedItems.includes(skill.name)
	const color = getMasteryColor(skill.mastery)
	const level = Object.values(Mastery).indexOf(skill.mastery) * 20 + 20;
	const openDialog = useSkillMasteryDialog({ type: "user", mode: "update" });

	return (
		<ContextualActionButton
			item={skill}
			disabled={disabled}
			openDialog={openDialog}
		>
			<LinearProgress
				variant="determinate"
				color={isSelected ? "secondary" : color}
				value={isSelected ? 0 : level}
			/>
			<Typography>{skill.name}</Typography>
		</ContextualActionButton>
	)
}

export default SkillButton
