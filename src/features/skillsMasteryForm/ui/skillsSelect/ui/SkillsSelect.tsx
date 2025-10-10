"use client"

import { Controller, useFormContext } from "react-hook-form"

import { Autocomplete, TextField } from "@mui/material"
import { useTranslations } from "next-intl"

import { SkillMasteryFormInput } from "@features/skillsMasteryForm/model/SkillMasteryForm.types"

import { SkillsSelectProps } from "./SkillsSelect.props"

export const SkillsSelect = ({ skills, disabled }: SkillsSelectProps) => {
	const t = useTranslations()
	const { control } = useFormContext<SkillMasteryFormInput>()

	let skillOptions = skills

	return (
		<Controller
			name={"skill"}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Autocomplete
					disabled={disabled}
					{...field}
					value={field.value || null}
					onChange={(_, value) => field.onChange(value)}
					options={skillOptions}
					getOptionLabel={(option) => option.name}
					isOptionEqualToValue={(option, value) => option.id === value.id}
					groupBy={(option) =>
						option.category_parent_name || option.category_name || "Other"
					}
					renderInput={(params) => (
						<TextField
							{...params}
							label={t("Skill")}
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
