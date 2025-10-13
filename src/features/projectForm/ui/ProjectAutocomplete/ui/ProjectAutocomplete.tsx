"use client"

import { Controller, useFormContext } from "react-hook-form"

import { Autocomplete, TextField } from "@mui/material"
import { useTranslations } from "next-intl"

import { CvProjectFormInput } from "@features/projectForm/model/CvProjectForm.types"

import { ProjectsAutocompleteProps } from "./ProjectAutocomplete.props"

export const ProjectAutocomplete = ({
	projects,
	disabled,
	onChange,
}: ProjectsAutocompleteProps) => {
	const t = useTranslations()
	const { control } = useFormContext<CvProjectFormInput>()

	let projectOptions = projects.map((project) => ({
		id: project.id,
		name: project.name,
	}))

	return (
		<Controller
			name={"project"}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Autocomplete
					disabled={disabled}
					{...field}
					fullWidth
					value={field.value}
					onChange={(_, value) => {
						field.onChange(value)
						onChange(
							projects.find((project) => project.id === value?.id) || null,
						)
					}}
					options={projectOptions}
					getOptionLabel={(option) => option.name}
					isOptionEqualToValue={(option, value) => option.id === value.id}
					renderInput={(params) => (
						<TextField
							{...params}
							label={t("Project")}
							error={!!error}
							helperText={error?.message}
							fullWidth
						/>
					)}
				/>
			)}
		></Controller>
	)
}
