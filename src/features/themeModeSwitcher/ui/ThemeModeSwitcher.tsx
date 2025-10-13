"use client"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useColorScheme } from "@mui/material/styles"
import { useTranslations } from "next-intl"

export const ThemeModeSwitcher = () => {
	const { mode, setMode } = useColorScheme()
	const t = useTranslations()
	console.log(mode)
	return (
		<FormControl fullWidth>
			<InputLabel id="color-theme-select">{t("color theme")}</InputLabel>
			<Select
				labelId="color-theme-select"
				label={t("color theme")}
				value={mode ?? "system"}
				onChange={(event) => {
					setMode(event.target.value as "light" | "dark" | "system")
				}}
			>
				<MenuItem value="system">{t("system")}</MenuItem>
				<MenuItem value="light">{t("light")}</MenuItem>
				<MenuItem value="dark">{t("dark")}</MenuItem>
			</Select>
		</FormControl>
	)
}
