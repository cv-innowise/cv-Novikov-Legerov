import { Control, FieldPath, FieldValues } from "react-hook-form"

export interface PositionsSelectProps<T extends FieldValues> {
	name: FieldPath<T>
	control: Control<T>
	disabled?: boolean
}
