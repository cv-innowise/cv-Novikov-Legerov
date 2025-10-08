import { PaletteOptions, Palette } from "@mui/material"

declare module '@mui/material/styles' {
   interface TypeBackground {
    secondary: string;
  }
}

const commonPalette: PaletteOptions = {
	primary: {
		main: "#c63031",
	},
	secondary: {
		main: "#767676",
	},
}

export const lightPalette: PaletteOptions = {
	...commonPalette,
	background: {
		default: "#f5f5f7",
		paper: "#ffffff",
		secondary: "#e2e2e4"
	},
	text: {
		primary: "#2e2e2eff",
	},
}

export const darkPalette: PaletteOptions = {
	...commonPalette,
	background: {
		default: "#353535",
		paper: "#121212",
		secondary: "#555555"
	},
	text: {
		primary: "#ffffff",
	},
}
