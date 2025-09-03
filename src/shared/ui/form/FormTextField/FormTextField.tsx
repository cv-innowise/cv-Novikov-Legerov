import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"

import { TextField } from "@mui/material"

import FormTextFieldProps from "./FormTextField.props"

const FormTextField = <T extends FieldValues>({
	name,
	...props
}: FormTextFieldProps<T>) => {
	const { control } = useFormContext<T>()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					value={field.value || ""}
					error={!!error}
					helperText={error?.message}
					{...props}
				/>
			)}
		/>
	)
}

export default FormTextField
