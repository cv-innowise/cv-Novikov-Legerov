import { FC } from "react"

import { HeadCell } from "@shared/types"

export interface BasicTableProps<T extends { id: string }> {
	data: T[]
	headCells: HeadCell<T>[]
	RowComponent: FC<{ row: T; currentUserId: string }>
	addItemHandle?: () => void
	addButtonText?: string
}
