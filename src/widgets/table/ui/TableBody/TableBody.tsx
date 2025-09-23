import { TableBody as MuiTableBody } from "@mui/material"

import { TableBodyProps } from "./TableBody.props"

export function TableBody<T extends { id: string }>({
	data,
	RowComponent,
}: TableBodyProps<T>) {
	return (
		<MuiTableBody>
			{data.map((item) => (
				<RowComponent key={item.id} row={item} />
			))}
		</MuiTableBody>
	)
}
