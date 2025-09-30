"use client"

import { Controller, FieldValues, useFormContext } from "react-hook-form"

import { MenuItem, TextField } from "@mui/material"
import { useTranslations } from "next-intl"

import { LanguageProficiencyFormInput } from "@features/languageProficiencyForm/model/LanguageProficiencyForm.types"
import { Select } from "@shared/ui/form/Select"

import { Proficiency } from "../model/proficiency"

export const ProficiencySelect = () => {
	const t = useTranslations()
	const { control, watch } = useFormContext<LanguageProficiencyFormInput>()
	const languageValue = watch("name")
	const items = Object.values(Proficiency).map((value) => ({
		id: value,
		name: value,
	}))
	return (
		<Select<LanguageProficiencyFormInput>
			name="proficiency"
			label={t("Language proficiency")}
			items={items}
			disabled={!languageValue}
		/>
		// <Controller
		//     name={"proficiency"}
		//     defaultValue={Proficiency.A1}
		//     control={control}
		//     render={({ field, fieldState: { error } }) => (
		//         <TextField
		//             {...field}
		//             fullWidth
		//             select
		//             disabled={!languageValue}
		//             label={t("Language proficiency")}
		//             error={!!error}
		//             helperText={error?.message}
		//         >
		//             {Object.values(Proficiency).map((proficiency) => (
		//                 <MenuItem key={proficiency} value={proficiency}>
		//                     {proficiency}
		//                 </MenuItem>
		//             ))}
		//         </TextField>
		//     )}
		// />
	)
}
