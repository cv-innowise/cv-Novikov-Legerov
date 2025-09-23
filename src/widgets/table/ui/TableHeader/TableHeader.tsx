import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"
import { useTranslations } from "next-intl"

import { SortOrder } from "@widgets/table/const/sort.const"

import { TableHeaderProps } from "./TableHeader.props"

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
				<TableCell />
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : SortOrder.Asc}
							onClick={createSortHandler(headCell.id)}
						>
							{t(headCell.label)}
						</TableSortLabel>
					</TableCell>
				))}
				<TableCell />
			</TableRow>
		</TableHead>
	)
}
