"use client"

import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { Box, Button } from "@mui/material"

import { DepartmentsSelect } from "@entities/departments"
import { PositionsSelect } from "@entities/positions"

interface UserFormValues {
	departmentId: string
	positionId: string
}

export const UserForm: FC = () => {
	const { control, handleSubmit } = useForm<UserFormValues>({
		defaultValues: {
			departmentId: "",
			positionId: "",
		},
	})

	const onSubmit: SubmitHandler<UserFormValues> = (data) => {
		console.log("Form submit:", data)
	}

	return (
		<Box
			width={410}
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				marginTop: "30px",
			}}
		>
			<PositionsSelect name="positionId" control={control} />
			<DepartmentsSelect name="departmentId" control={control} />

			<Button type="submit" variant="contained">
				Save
			</Button>
		</Box>
	)
}
