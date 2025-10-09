"use client"

import { FieldValues } from "react-hook-form"

import { useTranslations } from "next-intl"

import { useDepartments } from "@entities/departments/hooks/useDepartments"
import { Select } from "@shared/ui/form/Select"

import { DepartmentsSelectProps } from "./DepartmentsSelect.props"

export const DepartmentsSelect = <T extends FieldValues>({
	name,
	...props
}: DepartmentsSelectProps<T>) => {
	const t = useTranslations()
	const { departments } = useDepartments()

	return (
		<Select
			name={name}
			emptyOptionLabel={t("departments.nodepartment")}
			label={t("departments.label")}
			items={departments}
			{...props}
		/>
	)
}
