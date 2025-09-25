import { TableBody as MuiTableBody } from "@mui/material"

import { EmptyTableMessage } from "../EmptyTableMessage/EmptyTableMessage"
import { TableBodyProps } from "./TableBody.props"

export function TableBody<T extends { id: string }>({
	data,
	RowComponent,
	onResetSearch,
}: TableBodyProps<T>) {
	return (
		<MuiTableBody>
			{data.length === 0 ? (
				<EmptyTableMessage onResetSearch={onResetSearch} />
			) : (
				data.map((item) => <RowComponent key={item.id} row={item} />)
			)}
		</MuiTableBody>
	)
}
