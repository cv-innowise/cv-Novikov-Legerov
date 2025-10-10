"use client"

import { Controller, useFormContext } from "react-hook-form"

import { DatePicker as DatePickerMui } from "@mui/x-date-pickers"
import { useTranslations } from "next-intl"

import { CvProjectFormInput } from "@features/projectForm/model/CvProjectForm.types"

import { DatePickerProps } from "./DatePicker.props"

export const DatePicker = ({ name, label }: DatePickerProps) => {
	const t = useTranslations()
	const { control } = useFormContext<CvProjectFormInput>()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<DatePickerMui
					{...field}
					label={t(label)}
					value={field.value || null}											
					slotProps={{
						textField: {
							error: !!error,
							helperText: error?.message,
						},
					}}
				/>
			)}
		></Controller>
	)
}
