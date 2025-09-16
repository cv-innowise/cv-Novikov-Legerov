"use client"

import { Controller, FieldValues } from "react-hook-form"

import { MenuItem, TextField } from "@mui/material"

import { SelectProps } from "./Select.props"

export const Select = <T extends FieldValues>({
	name,
	control,
	label,
	rules,
	items,
	emptyOptionLabel,
	disabled,
}: SelectProps<T>) => {
	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField
					select
					label={label}
					error={!!error}
					disabled={disabled}
					helperText={error?.message}
					{...field}
					fullWidth
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
