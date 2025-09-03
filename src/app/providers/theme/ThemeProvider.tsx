"use client"

import { ReactNode, useEffect, useState } from "react"

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"

import { useTheme } from "@features/theme"
import { getTheme } from "@shared/ui/theme"
import { Theme } from "@features/theme/model/themeSlice"

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light")
	// const themePref = useTheme();

	// useLayoutEffect(() => {
	// 	const savedTheme = localStorage.getItem("theme") as Theme | null
	// 	if (savedTheme) {
	// 		setTheme(savedTheme)
	// 	}
	// }, [])

	// useEffect(() => {
	// 	if (themePref === "system") {
	// 		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
	// 		setTheme(mediaQuery.matches ? "dark" : "light")
	// 	} else {
	// 		setTheme(themePref)
	// 	}
	// }, [themePref])

	return <MuiThemeProvider theme={getTheme(theme)}>{children}</MuiThemeProvider>
}

export default ThemeProvider
