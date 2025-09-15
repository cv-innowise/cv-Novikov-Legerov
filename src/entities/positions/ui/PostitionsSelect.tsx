"use client"

import { FieldValues } from "react-hook-form"

import { useTranslations } from "next-intl"

import { Select } from "@shared/ui/Select"

import { usePositions } from "../hooks/usePositions"
import { PositionsSelectProps } from "./PostitionsSelect.props"

export const PositionsSelect = <T extends FieldValues>({
	name,
	control,
	disabled,
}: PositionsSelectProps<T>) => {
	const t = useTranslations()
	const { positions } = usePositions()

	return (
		<Select
			name={name}
			control={control}
			emptyOptionLabel={t("positions.noposition")}
			label={t("positions.label")}
			items={positions}
			disabled={disabled}
		/>
	)
}
