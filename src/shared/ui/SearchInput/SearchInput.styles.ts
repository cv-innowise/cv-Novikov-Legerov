import { SxThemeProps } from "@shared/types/sx.types"

export const searchInputStyles = {
	input: {
		width: "100%",
		maxWidth: "340px",
		paddingLeft: "20px",
		marginBottom: "8px",

		".MuiOutlinedInput-root": {
			borderRadius: "40px",
			maxHeight: "40px",
			padding: "11px 11px 11px 15px",
		},
	},
} satisfies SxThemeProps
