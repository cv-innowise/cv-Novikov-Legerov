"use client"

import { FC } from "react"

import { Card, CardContent, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import { RoutesPaths } from "@shared/config"
import { useBreadcrumbs } from "@shared/hooks"

import { ProjectDetailsProps } from "./ProjectDetails.props"

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
	useBreadcrumbs({
		path: `${RoutesPaths.PROJECTS}/${project.id}`,
		text: project.name,
	})

	const t = useTranslations()

	return (
		<Card>
			<CardContent sx={{ backgroundColor: "background.paper" }}>
				<Typography>{project.name}</Typography>
				<Typography>{project.domain}</Typography>
				<Typography>{project.start_date}</Typography>
				<Typography>
					{project.end_date ?? t("projectsTable.tillNow")}
				</Typography>
				<Typography>{project.description}</Typography>
			</CardContent>
		</Card>
	)
}
