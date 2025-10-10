"use client"

import { Autocomplete, Chip, TextField } from "@mui/material"
import { useTranslations } from "next-intl"

import { EnvironmentAutocompleteProps } from "./EnvironmentAutocomplete.props"
import { styles } from "../../CvProjectForm.styles"

export const EnvironmentAutocomplete = ({
	environment,
}: EnvironmentAutocompleteProps) => {
	const t = useTranslations()

	return (
		<Autocomplete
			disabled
			fullWidth
			multiple
			renderValue={(value, getTagProps) =>
				value.map((option, index) => (
					<Chip
						{...getTagProps({ index })}
						key={option}
						label={option}
						size="small"
					/>
				))
			}
			value={environment || []}
			options={environment}
			getOptionLabel={(option) => option}
			sx={styles.fullWidthGridElement}
			renderInput={(params) => (
				<TextField {...params} label={t("environment")} />
			)}
		/>
	)
}
