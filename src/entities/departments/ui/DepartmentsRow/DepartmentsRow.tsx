"use client"

import { FC } from "react"

import { MenuItem, TableCell, TableRow } from "@mui/material"
import { useTranslations } from "next-intl"

import { useIsAuthUserHasAccess } from "@entities/user"
import { ActionsMenu } from "@shared/ui/ActionsMenu"

import { DepartmentsRowProps } from "./DepartmentsRow.props"

export const DepartmentsRow: FC<DepartmentsRowProps> = ({
	row: department,
	hasAccess,
}) => {
	const t = useTranslations()

	return (
		<TableRow>
			<TableCell>{department.name}</TableCell>
			<TableCell align="right">
				<ActionsMenu>
					<MenuItem disabled={hasAccess}>
						{t("depatmentsTable.delete")}
					</MenuItem>
				</ActionsMenu>
			</TableCell>
		</TableRow>
	)
}
