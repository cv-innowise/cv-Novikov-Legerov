"use client"

import { MenuItem, TableCell, TableRow } from "@mui/material"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { useAuthUser } from "@entities/user"
import { RoutesPaths } from "@shared/config"
import { ActionsMenu } from "@shared/ui/ActionsMenu"
import { commonStyles } from "@shared/ui/theme/commonStyles"

import { CVRowProps } from "./CVRow.props"
import { styles } from "./CVRow.style"

export const CVRow = ({ row: cv }: CVRowProps) => {
	const t = useTranslations()
	const router = useRouter()
	const userEmail = useAuthUser().email

	const handleDetails = () => {
		router.push(`${RoutesPaths.USERS}/${cv.id}`)
	}

	const handleDeleteCV = () => {}

	return (
		<>
			<TableRow sx={styles.firstRow}>
				<TableCell>{cv.name}</TableCell>
				<TableCell sx={commonStyles.disappearance("sm")}>
					{cv.education}
				</TableCell>
				<TableCell sx={commonStyles.disappearance("md")}>{userEmail}</TableCell>
				<TableCell sx={styles.menuCell}>
					<ActionsMenu>
						<MenuItem onClick={handleDetails}>{t("Details")}</MenuItem>
						<MenuItem onClick={handleDeleteCV}>{t("Delete CV")}</MenuItem>
					</ActionsMenu>
				</TableCell>
			</TableRow>
			<TableRow sx={styles.descriptionRow}>
				<TableCell sx={styles.description} colSpan={4}>
					{cv.description}
				</TableCell>
			</TableRow>
		</>
	)
}
