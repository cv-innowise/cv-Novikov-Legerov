"use client"

import { FC } from "react"

import { MenuItem, TableCell, TableRow } from "@mui/material"
import { useTranslations } from "next-intl"

import { ActionsMenu } from "@shared/ui/ActionsMenu"

import { PositionsRowProps } from "./PositionsRow.props"

export const PositionsRow: FC<PositionsRowProps> = ({
	row: position,
	hasAccess,
}) => {
	const t = useTranslations()

	return (
		<TableRow>
			<TableCell>{position.name}</TableCell>
			<TableCell align="right">
				<ActionsMenu>
					<MenuItem disabled={hasAccess}>{t("positionsTable.delete")}</MenuItem>
				</ActionsMenu>
			</TableCell>
		</TableRow>
	)
}
