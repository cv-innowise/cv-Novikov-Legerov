export interface HeadCell<T> {
	id: string
	label: string
	getValue: (row: T) => string | undefined | null
	disappearance?: "sm" | "md" | "lg"
}
