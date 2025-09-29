import { ReactNode } from "react"
import { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form"

import { BoxProps } from "@mui/material"
import * as yup from "yup"

type FormWrapperProps<T extends FieldValues> = {
	onSubmit: SubmitHandler<T>
	schema?: yup.ObjectSchema<any>
	defaultValues?: DefaultValues<T>
	children: ReactNode
} & Omit<BoxProps, "onSubmit">

export default FormWrapperProps
