'use client'

import { useState, useContext } from "react"
import { SkillButtonProps } from "./SkillButton.props"
import "./SkillButton.styles"
import { LinearProgress, Typography } from "@mui/material"
import ContextualActionButton from "@shared/ui/contextualActionButton/ContextualActionButton"
import { Mastery } from "cv-graphql"
import { BulkDeletionContext } from "@shared/ui/bulk-deletion/BulkDeletion"
import { getMasteryColor } from "@features/user-skills/lib/getMasteryColor"

const SkillButton = ({
    skill,
}: SkillButtonProps) => {

    const { selectedItems, disabled } = useContext(BulkDeletionContext)
    const isSelected = selectedItems.includes(skill.name);
    const color = getMasteryColor(skill.mastery);
    const level = Object.values(Mastery).indexOf(skill.mastery) * 20 + 20;
    
	return (
		<ContextualActionButton
			item={skill}
			disabled={disabled}
			openDialog={() => {}}
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
