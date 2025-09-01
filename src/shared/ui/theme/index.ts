import { createTheme, PaletteMode } from "@mui/material/styles"

import palette from "./palette"

export const getTheme = (mode: PaletteMode) =>
	createTheme({
		palette: palette[mode],
		typography: {
			fontFamily: `Roboto, Helvetica, Arial, sans-serif`,
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
					root: {
						color: mode === "light" ? "#2e2e2eff" : "#f5f5f7",
						minWidth: 150,
						"&.Mui-selected": {
							fontWeight: 600,
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						height: 48,
						padding: "12px",
						borderRadius: 0,
					},
					input: {
						padding: 0,
					},
					notchedOutline: {
						borderWidth: "1px !important",
						transition: "border 200ms",
					},
				},
			},
		},
	})
