import { Control, FieldPath, FieldValues } from "react-hook-form"
import { TextFieldProps } from "@mui/material"
export type PositionsSelectProps<T extends FieldValues> = {
	name: FieldPath<T>
} & TextFieldProps
