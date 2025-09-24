import { FC } from "react"

export interface TableBodyProps<T extends { id: string }> {
	data: T[]
	RowComponent: FC<{ row: T }>
	onResetSearch: () => void
}
