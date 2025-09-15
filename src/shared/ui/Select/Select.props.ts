import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions,
} from "react-hook-form"

export interface SelectProps<T extends FieldValues> {
	name: FieldPath<T>
	control: Control<T>
	label: string
	rules?: RegisterOptions<T>
	items: { id: string; name: string }[]
	disabled?: boolean
	emptyOptionLabel?: string
}
