"use client"

import { Controller, FieldValues, useFormContext } from "react-hook-form"

import { MenuItem, TextField } from "@mui/material"
import { useTranslations } from "next-intl"

import { LanguageProficiencyFormInput } from "@features/languageProficiencyForm/model/LanguageProficiencyForm.types"
import { Select } from "@shared/ui/form/Select"
import { LanguageProficiency } from "cv-graphql"
import { LanguageSelectProps } from "./LanguageSelect.props"

export const LanguageSelect = ({
	languages,
	disabled,
}: LanguageSelectProps) => {
	const t = useTranslations()
	// const { control } = useFormContext<LanguageProficiencyFormInput>()
    const items = languages.map((language) => ({
        id: language.name,
        name: language.name
    }))
	return (
		<Select<LanguageProficiency>
            name="name"
			label={t("Language")}
			items={items}
			disabled={disabled}
		/>

		/* <Controller
            name={"name"}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    select
                    disabled={disabled}
                    label={t("Language")}
                    error={!!error}
                    helperText={error?.message}
                >
                    {Object.values(languages).map((language) => (
                        <MenuItem key={language} value={language}>
                            {t('language')}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        /> */
	)
}
