'use client'

import { useState } from "react"
import { Controller, FieldValues, useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material"

import FormPasswordFieldProps from "./FormPasswordField.props"

const FormPasswordField = <T extends FieldValues>({
	name,
}: FormPasswordFieldProps<T>) => {
	const { control } = useFormContext<T>()
	const [showPassword, setShowPassword] = useState(false)
	const { t } = useTranslation()
	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault()
	}

	const handleMouseUpPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault()
	}

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FormControl variant="outlined" error={!!error} fullWidth>
					<InputLabel htmlFor="outlined-adornment-password">
						{t('password')}
					</InputLabel>
					<OutlinedInput
						{...field}
						id="outlined-adornment-password"
						type={showPassword ? "text" : "password"}
						label="Password"
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									onMouseUp={handleMouseUpPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<FormHelperText>{error?.message}</FormHelperText>
				</FormControl>
			)}
		/>
	)
}

export default FormPasswordField
