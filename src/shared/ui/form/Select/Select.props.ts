import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions,
} from "react-hook-form"

import { TextFieldProps } from "@mui/material";

export type SelectProps<T extends FieldValues> = {
	name: FieldPath<T>
	items: { id: string; name: string }[]
	emptyOptionLabel?: string
} & TextFieldProps;
