"use client"

import { Controller, FieldValues, useFormContext } from "react-hook-form"

import { MenuItem, TextField } from "@mui/material"

import { SelectProps } from "./Select.props"

export const Select = <T extends FieldValues>({
	name,
	items,
	emptyOptionLabel,
	...props
}: SelectProps<T>) => {

	const { control } = useFormContext<T>()
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					select
					error={!!error}
					helperText={error?.message}
					fullWidth
					value={field.value || ""}
					{...props}
				>
					{emptyOptionLabel && <MenuItem value="">{emptyOptionLabel}</MenuItem>}
					{items.map((item) => (
						<MenuItem key={item.id} value={item.id}>
							{item.name}
						</MenuItem>
					))}
				</TextField>
			)}
		/>
	)
}
