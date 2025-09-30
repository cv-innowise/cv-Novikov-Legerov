import { FC } from "react"
import { useFormContext } from "react-hook-form"

import { Button } from "@mui/material"

import { FormButtonProps } from "./FormButton.props"

export const FormButton: FC<FormButtonProps> = ({ children, ...props }) => {
	const {
		formState: { isDirty },
	} = useFormContext()
	return (
		<Button type="submit" variant="contained" {...props} disabled={!isDirty || props.disabled}>
			{children}
		</Button>
	)
}
