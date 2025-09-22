import { TableBodyProps } from "../TableBody/TableBody.props"
import { TableHeaderProps } from "../TableHeader/TableHeader.props"

export interface BasicTableProps<T>
	extends TableHeaderProps,
		TableBodyProps<T> {}
