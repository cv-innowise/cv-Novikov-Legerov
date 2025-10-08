import { PaletteOptions } from "@mui/material"

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
	},
	text: {
		primary: "#2e2e2eff",
	},
	icon: {
		color: "#2E2E2E",
	},
}

export const darkPalette: PaletteOptions = {
	...commonPalette,
	background: {
		default: "#353535",
		paper: "#121212",
	},
	text: {
		primary: "#ffffff",
	},
	icon: {
		color: "#FFFFFFB2",
	},
}
