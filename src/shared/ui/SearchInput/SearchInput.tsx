"use client"

import { Controller, FieldValues } from "react-hook-form"

import { Close, Search } from "@mui/icons-material"
import { IconButton, InputAdornment, TextField } from "@mui/material"

import { SearchInputProps } from "./SearchInput.props"
import { searchInputStyles } from "./SearchInput.styles"

export const SearchInput = <T extends FieldValues>({
	name,
	control,
	placeholder,
}: SearchInputProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					sx={searchInputStyles.input}
					placeholder={placeholder}
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<Search />
								</InputAdornment>
							),
							endAdornment: field.value && (
								<InputAdornment position="end">
									<IconButton onClick={() => field.onChange("")}>
										<Close />
									</IconButton>
								</InputAdornment>
							),
						},
					}}
				/>
			)}
		/>
	)
}
