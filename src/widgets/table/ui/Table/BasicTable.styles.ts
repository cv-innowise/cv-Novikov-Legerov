import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	container: {
		padding: "16px 0",
	},
	button: {
		"&.MuiButtonBase-root": {
			minWidth: "48px",
			maxWidth: "220px",
			height: "40px",
			width: "100%",
		},

		"@media (max-width: 900px)": {
			"&.MuiButtonBase-root": {
				width: "40px",
			},
		},
	},
	buttonText: {
		fontSize: "14px",
		fontWeight: "500",

		"@media (max-width: 900px)": {
			display: "none",
		},
	},
} satisfies SxThemeProps
