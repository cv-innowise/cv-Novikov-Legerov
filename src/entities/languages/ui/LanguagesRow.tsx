"use client"

import { FC } from "react"

import { MenuItem, TableCell, TableRow } from "@mui/material"
import { useTranslations } from "next-intl"

import { ActionsMenu } from "@shared/ui/ActionsMenu"
import { commonStyles } from "@shared/ui/theme/commonStyles"

import { LanguagesRowProps } from "./LanguagesRow.props"

export const LanguagesRow: FC<LanguagesRowProps> = ({
	row: language,
	hasAccess,
}) => {
	const t = useTranslations()

	return (
		<TableRow>
			<TableCell>{language.name}</TableCell>
			<TableCell>{language.native_name}</TableCell>
			<TableCell sx={commonStyles.disappearance("sm")}>
				{language.iso2}
			</TableCell>
			<TableCell align="right">
				<ActionsMenu>
					<MenuItem disabled={hasAccess}>{t("languagesTable.delete")}</MenuItem>
				</ActionsMenu>
			</TableCell>
		</TableRow>
	)
}
