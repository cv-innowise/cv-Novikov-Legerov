import { useEffect } from "react"
import { FieldValues, FormProvider, useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import { Box } from "@mui/material"

import FormWrapperProps from "./FormWrapper.props"

const FormWrapper = <T extends FieldValues>({
	children,
	onSubmit,
	schema,
	defaultValues,
	...props
}: FormWrapperProps<T>) => {
	const methods = useForm<T>({
		resolver: schema ? yupResolver(schema) : undefined,
		defaultValues: defaultValues,
	})

	return (
		<FormProvider {...methods}>
			<Box
				component="form"
				onSubmit={methods.handleSubmit(onSubmit)}
				{...props}
			>
				{children}
			</Box>
		</FormProvider>
	)
}

export default FormWrapper
