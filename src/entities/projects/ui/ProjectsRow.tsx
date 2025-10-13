"use client"

import { FC } from "react"

import { MenuItem, TableCell, TableRow } from "@mui/material"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { RoutesPaths } from "@shared/config"
import { ActionsMenu } from "@shared/ui/ActionsMenu"
import { commonStyles } from "@shared/ui/theme/commonStyles"

import { ProjectsRowProps } from "./ProjectsRow.props"

export const ProjectsRow: FC<ProjectsRowProps> = ({ row: project }) => {
	const t = useTranslations()

	const router = useRouter()

	const hadnleProject = () => {
		router.push(`${RoutesPaths.PROJECTS}/${project.id}`)
	}

	return (
		<TableRow>
			<TableCell>{project.name}</TableCell>
			<TableCell>{project.internal_name}</TableCell>
			<TableCell sx={commonStyles.disappearance("sm")}>
				{project.domain}
			</TableCell>
			<TableCell sx={commonStyles.disappearance("md")}>
				{project.start_date}
			</TableCell>
			<TableCell sx={commonStyles.disappearance("md")}>
				{project.end_date || t("projectsTable.tillNow")}
			</TableCell>
			<TableCell align="right">
				<ActionsMenu>
					<MenuItem onClick={hadnleProject}>
						{t("projectsTable.actions")}
					</MenuItem>
				</ActionsMenu>
			</TableCell>
		</TableRow>
	)
}
