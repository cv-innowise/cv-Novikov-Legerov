import { TextFieldProps } from "@mui/material"
import { FieldPath, FieldValues } from "react-hook-form"

export type SkillsSelectProps<T extends FieldValues> = {
    name: FieldPath<T>
} & TextFieldProps