import { createTheme } from "@mui/material/styles"
import { Roboto } from "next/font/google"

import { darkPalette, lightPalette } from "./palette"

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export const getTheme = () =>
	createTheme({
		colorSchemes: {
			light: { palette: lightPalette },
			dark: { palette: darkPalette },
		},
		cssVariables: {
			colorSchemeSelector: "class",
		},
		typography: {
			fontFamily: roboto.style.fontFamily,
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 40,
						minWidth: 220,
						height: 48,
					},
				},
			},
			MuiTab: {
				styleOverrides: {
					root: ({ theme }) => ({
						color: theme.vars.palette.text.primary,
						minWidth: 150,
						"&.Mui-selected": {
							fontWeight: 600,
						},
					}),
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						minHeight: 47,
						borderRadius: "0px",
					},
					input: {
						paddingTop: 0,
						paddingBottom: 0,
						boxSizing: 'border-box',
					},
					notchedOutline: {
						borderWidth: "1px !important",
						transition: "border 200ms",
					},
				},
			},
			MuiInputLabel: {
				styleOverrides: {
					root: {
						transform: "translate(12px, 12px) scale(1)",
					},
					shrink: {
						transform: "translate(12px, -9px) scale(0.75)",
					},
				},
			},
			MuiAutocomplete: {
				styleOverrides: {
					groupLabel: ({ theme }) => ({
						color: theme.vars.palette.primary.main,
						backgroundColor: theme.vars.palette.background.default,
					}),
				},
			},
			MuiDialogActions: {
				styleOverrides: {
					root: {
						"& > :not(style) ~ :not(style)": {
							marginLeft: 0,
						},
					},
				},
			},
		},
	})
