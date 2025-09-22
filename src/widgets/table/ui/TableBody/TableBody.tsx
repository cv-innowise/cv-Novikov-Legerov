import { TableBody as MuiTableBody } from "@mui/material"

import { TableBodyProps } from "./TableBody.props"

export function TableBody<T>({ data, renderRow }: TableBodyProps<T>) {
	return <MuiTableBody>{data.map((item) => renderRow(item))}</MuiTableBody>
}
