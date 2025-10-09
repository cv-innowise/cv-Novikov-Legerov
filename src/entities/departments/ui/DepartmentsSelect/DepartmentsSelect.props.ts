import { Control, FieldPath, FieldValues } from "react-hook-form"
import { TextFieldProps } from "@mui/material"
export type DepartmentsSelectProps<T extends FieldValues> = {
	name: FieldPath<T>
} & TextFieldProps
