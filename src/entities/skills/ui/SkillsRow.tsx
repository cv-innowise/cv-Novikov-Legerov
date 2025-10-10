"use client"

import { FC } from "react"

import { MenuItem, TableCell, TableRow } from "@mui/material"
import { useTranslations } from "next-intl"

import { ActionsMenu } from "@shared/ui/ActionsMenu"

import { SkillsRowProps } from "./SkillsRow.props"

export const SkillsRow: FC<SkillsRowProps> = ({ row: skill, hasAccess }) => {
	const t = useTranslations()

	return (
		<TableRow>
			<TableCell>{skill.name}</TableCell>
			<TableCell>{skill.category?.name}</TableCell>
			<TableCell align="right">
				<ActionsMenu>
					<MenuItem disabled={hasAccess}>{t("skillsTable.delete")}</MenuItem>
				</ActionsMenu>
			</TableCell>
		</TableRow>
	)
}
