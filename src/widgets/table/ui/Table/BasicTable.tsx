import { Table, TableContainer } from "@mui/material"

import { TableBody } from "../TableBody/TableBody"
import { TableHeader } from "../TableHeader/TableHeader"
import { BasicTableProps } from "./BasicTable.props"

export function BasicTable<T>({
	headCells,
	data,
	renderRow,
}: BasicTableProps<T>) {
	return (
		<TableContainer>
			<Table stickyHeader>
				<TableHeader headCells={headCells} />
				<TableBody data={data} renderRow={renderRow} />
			</Table>
		</TableContainer>
	)
}
