"use client"

import { MenuItem, Stack, TableCell, TableRow, Typography } from "@mui/material"
import { RemoveCvProjectInput } from "cv-graphql"
import { format } from "date-fns"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { useDeleteCvProject } from "@features/projectForm/hooks"
import { useCvProjectDialog } from "@features/projectForm/hooks/useCvProjectFormDialog"
import { ActionsMenu } from "@shared/ui/ActionsMenu"
import { useDeletionConfirmDialog } from "@shared/ui/deletionConfirmDialog/hooks/useDeletionConfirmDialog"
import { commonStyles } from "@shared/ui/theme/commonStyles"
import { useProjects } from "@widgets/projectsTable/hooks/useProjects"

import { ProjectRowProps } from "./ProjectRow.props"
import { styles } from "./ProjectRow.styles"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

export const ProjectRow = ({ row: project }: ProjectRowProps) => {
	const t = useTranslations()
	const params = useParams<{ id: string }>()
	const id = params?.id as string
	const { cv, error: cvError } = useCv(id)
	const { projects, error: projectsError } = useProjects()

	const filteredProjects = projects.filter(
		(pr) => !cv.projects?.find((cvPr) => cvPr.project.id === pr.id),
	)

	const handleUpdateProject = useCvProjectDialog({
		mode: "update",
		project: project,
		projects: filteredProjects,
	})

	const handleDeleteProject = useDeletionConfirmDialog("Delete project", {
		content: (
			<>
				{t("Are you sure you want to delete")} {t("Project")}{" "}
				<b>{project.name}</b>?
			</>
		),
		useDelete: useDeleteCvProject,
		deletedObjectArgs: {
			cvId: id,
			projectId: project.project.id,
		} as RemoveCvProjectInput,
	})

	useErrorNotification([cvError, projectsError])

	return (
		<>
			<TableRow sx={styles.firstRow}>
				<TableCell>{project.name}</TableCell>
				<TableCell sx={commonStyles.disappearance("sm")}>
					{project.domain}
				</TableCell>
				<TableCell sx={commonStyles.disappearance("lg")}>
					{format(new Date(project.start_date || ""), "dd/MM/yyyy")}
				</TableCell>
				<TableCell sx={commonStyles.disappearance("md")}>
					{project.end_date
						? format(new Date(project.end_date || ""), "dd/MM/yyyy")
						: t("Till now")}
				</TableCell>
				<TableCell sx={styles.menuCell}>
					<ActionsMenu>
						<MenuItem onClick={handleUpdateProject}>{t("Update")}</MenuItem>
						<MenuItem onClick={handleDeleteProject}>
							{t("Delete project")}
						</MenuItem>
					</ActionsMenu>
				</TableCell>
			</TableRow>
			<TableRow sx={styles.descriptionRow}>
				<TableCell sx={styles.fullWidthCell} colSpan={5}>
					{project.description}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell sx={styles.fullWidthCell} colSpan={5}>
					<Stack flexDirection="row" flexWrap="wrap" gap="8px">
						{project.responsibilities.map((resp) => (
							<Typography key={resp} sx={styles.responsibilities}>
								{resp}
							</Typography>
						))}
					</Stack>
				</TableCell>
			</TableRow>
		</>
	)
}
