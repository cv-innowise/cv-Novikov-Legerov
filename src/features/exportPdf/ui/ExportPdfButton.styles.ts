import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	button: {
		"&.MuiButtonBase-root": {
			minWidth: "160px",
			height: "40px",
		},
		"@media print": {
			display: "none",
		},
	},
} satisfies SxThemeProps
