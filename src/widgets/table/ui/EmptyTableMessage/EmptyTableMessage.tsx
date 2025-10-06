import { FC } from "react"

import { Button, TableCell, TableRow, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import { EmptyTableMessageProps } from "./EmptyTableMessage.props"

export const EmptyTableMessage: FC<EmptyTableMessageProps> = ({
	onResetSearch,
}) => {
	const t = useTranslations()

	return (
		<TableRow>
			<TableCell colSpan={10} align="center">
				<Typography variant="h5" sx={{ mb: 0.5 }}>
					{t("table.noResultsFound")}
				</Typography>
				<Typography sx={{ mb: 1 }}> {t("table.tryAnotherSearch")}</Typography>
				<Button variant="text" onClick={onResetSearch}>
					{t("table.resetSearch")}
				</Button>
			</TableCell>
		</TableRow>
	)
}
