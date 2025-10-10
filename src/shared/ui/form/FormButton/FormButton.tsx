import { FC } from "react"
import { useFormContext } from "react-hook-form"

import { Button } from "@mui/material"

import { FormButtonProps } from "./FormButton.props"

export const FormButton: FC<FormButtonProps> = ({ children, ...props }) => {
	const context = useFormContext()

	if (!context) {
		return (
			<Button type="submit" variant="contained" disabled={props.disabled} {...props}>
				{children}
			</Button>
		)
	}

	const {
		formState: { isDirty },
	} = context
	
	return (
		<Button
			type="submit"
			variant="contained"
			{...props}
			disabled={!isDirty || props.disabled}
		>
			{children}
		</Button>
	)
}
