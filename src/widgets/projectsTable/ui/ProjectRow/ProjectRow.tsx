"use client"

import { MenuItem, TableCell, TableRow, Typography } from "@mui/material"
import { format } from "date-fns"
import { useTranslations } from "next-intl"

import { useDeleteCV } from "@features/cvDeletion/hooks/useDeleteCV"
import { ActionsMenu } from "@shared/ui/ActionsMenu"
import { useDeletionConfirmDialog } from "@shared/ui/deletionConfirmDialog/hooks/useDeletionConfirmDialog"
import { commonStyles } from "@shared/ui/theme/commonStyles"

import { ProjectRowProps } from "./ProjectRow.props"
import { styles } from "./ProjectRow.styles"

export const ProjectRow = ({ row: project }: ProjectRowProps) => {
	const t = useTranslations()
	const handleUpdateProject = () => {}

	const handleDeleteProject = useDeletionConfirmDialog("Delete CV", {
		content: (
			<>
				{t("Are you sure you want to delete")} {t("Cv")} <b>{project.name}</b>?
			</>
		),
		useDelete: useDeleteCV,
		deletedObjectArgs: project.id,
	})

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
					<Typography sx={styles.responsibilities}>{project.responsibilities.join(" ")}</Typography>
				</TableCell>
			</TableRow>
		</>
	)
}
