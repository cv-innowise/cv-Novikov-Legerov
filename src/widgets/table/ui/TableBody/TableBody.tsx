import { TableBody as MuiTableBody } from "@mui/material"

import { useAppSelector } from "@app/providers/store/hooks/hooks"

import { EmptyTableMessage } from "../EmptyTableMessage/EmptyTableMessage"
import { TableBodyProps } from "./TableBody.props"

export function TableBody<T extends { id: string }>({
	data,
	RowComponent,
	onResetSearch,
}: TableBodyProps<T>) {
	const currentUserId = useAppSelector((state) => state.user.id)

	console.log(currentUserId)

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
