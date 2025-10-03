import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"
import { useTranslations } from "next-intl"

import { SortOrder } from "@widgets/table/const/sort.const"
import { TableHeaderProps } from "./TableHeader.props"
import { commonStyles } from "@shared/ui/theme/commonStyles"

export const TableHeader = <T,>({
	headCells,
	order,
	orderBy,
	onRequestSort,
}: TableHeaderProps<T>) => {
	const t = useTranslations()

	const createSortHandler = (property: string) => () => onRequestSort(property)

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						sx={headCell.disappearance && commonStyles.disappearance(headCell.disappearance)}
					>
						{headCell.id === "0" ? (
							<></>
						) : (
							<TableSortLabel
								active={orderBy === headCell.id}
								direction={orderBy === headCell.id ? order : SortOrder.Asc}
								onClick={createSortHandler(headCell.id)}
							>
								{t(headCell.label)}
							</TableSortLabel>
						)}
					</TableCell>
				))}
				<TableCell />
			</TableRow>
		</TableHead>
	)
}
