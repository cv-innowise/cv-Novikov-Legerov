import { TableBody as MuiTableBody } from "@mui/material"

import { useAppSelector } from "@app/providers/store/hooks/hooks"
import { useAuthUserId, useIsAuthUserHasAccess } from "@entities/user"

import { EmptyTableMessage } from "../EmptyTableMessage/EmptyTableMessage"
import { TableBodyProps } from "./TableBody.props"

export function TableBody<T extends { id: string }>({
	data,
	RowComponent,
	onResetSearch,
}: TableBodyProps<T>) {
	const currentUserId = useAuthUserId()
	const hasAccess = useIsAuthUserHasAccess()

	return (
		<MuiTableBody>
			{data.length === 0 ? (
				<EmptyTableMessage onResetSearch={onResetSearch} />
			) : (
				data.map((item) => (
					<RowComponent
						hasAccess={hasAccess}
						currentUserId={currentUserId}
						key={item.id}
						row={item}
					/>
				))
			)}
		</MuiTableBody>
	)
}
