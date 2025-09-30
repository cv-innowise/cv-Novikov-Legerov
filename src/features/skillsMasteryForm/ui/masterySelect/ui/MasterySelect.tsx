"use client"

import { Controller, FieldValues, useFormContext } from "react-hook-form"

import { MenuItem, TextField } from "@mui/material"
import { useTranslations } from "next-intl"

import { SkillMasteryFormInput } from "@features/skillsMasteryForm/model/SkillMasteryForm.types"

import { Mastery } from "../model/mastery"

export const MasterySelect = () => {
	const t = useTranslations()
	const { control, watch } = useFormContext<SkillMasteryFormInput>()
	const skillValue = watch("skill")

	return (
		<Controller
			name={"mastery"}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					fullWidth
					select
					disabled={!skillValue}
					label={t("Skill mastery")}
					error={!!error}
					helperText={error?.message}
				>
					{Object.values(Mastery).map((mastery) => (
						<MenuItem key={mastery} value={mastery}>
							{t(mastery)}
						</MenuItem>
					))}
				</TextField>
			)}
		/>
	)
}
