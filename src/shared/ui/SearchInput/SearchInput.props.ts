import { Control, FieldValues, Path } from "react-hook-form"

export interface SearchInputProps<T extends FieldValues> {
	name: Path<T>
	control: Control<T>
	placeholder?: string
}
