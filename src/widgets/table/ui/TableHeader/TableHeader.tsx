import { FC } from "react"

import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"

import { TableHeaderProps } from "./TableHeader.props"

export const TableHeader: FC<TableHeaderProps> = ({ headCells }) => {
	return (
		<TableHead>
			<TableRow>
				<TableCell />
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>
						<TableSortLabel>{headCell.label}</TableSortLabel>
					</TableCell>
				))}
				<TableCell />
			</TableRow>
		</TableHead>
	)
}
