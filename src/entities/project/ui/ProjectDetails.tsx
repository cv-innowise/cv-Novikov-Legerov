"use client"

import { FC } from "react"

import { Box, Card, CardContent, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import { RoutesPaths } from "@shared/config"
import { useBreadcrumbs } from "@shared/hooks"

import { ProjectDetailsProps } from "./ProjectDetails.props"
import { projectDetailsStyles } from "./ProjectDetails.styles"

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
	useBreadcrumbs({
		path: `${RoutesPaths.PROJECTS}/${project.id}`,
		text: project.name,
	})

	const t = useTranslations()

	return (
		<Card sx={projectDetailsStyles.card}>
			<CardContent sx={projectDetailsStyles.content}>
				<Typography variant="h6" sx={projectDetailsStyles.title}>
					{project.name}
				</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					{project.domain}
				</Typography>
				<Box sx={projectDetailsStyles.meta}>
					<Box sx={projectDetailsStyles.datesRow}>
						<Typography sx={projectDetailsStyles.date} component="span">
							{project.start_date}
						</Typography>
						<Typography color="text.secondary">—</Typography>
						<Typography sx={projectDetailsStyles.date} component="span">
							{project.end_date ?? t("projectsTable.tillNow")}
						</Typography>
					</Box>
					<Typography>{project.description}</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}
