import { ReactNode } from "react"

export interface TableBodyProps<T> {
	data: T[]
	renderRow: (item: T) => ReactNode
}
