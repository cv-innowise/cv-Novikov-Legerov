"use client"

import { ReactNode } from "react"
import {
	CssBaseline,
	InitColorSchemeScript,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material"
import { getTheme } from "@shared/ui/theme"

const ThemeProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	return (
		<>
			<InitColorSchemeScript attribute="class" />
			<MuiThemeProvider theme={getTheme()}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</>
	)
}


export default ThemeProvider;