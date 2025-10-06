import { HeadCell } from "@shared/types"
import { SortOrder } from "@widgets/table/const/sort.const"

export interface TableHeaderProps<T> {
	headCells: HeadCell<T>[]
	order: SortOrder
	orderBy: string
	onRequestSort: (property: string) => void
}
