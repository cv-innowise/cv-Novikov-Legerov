import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	button: {
		padding: "8px 16px",
		maxWidth: "284px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "start",
		gap: "16px",
		textTransform: "none",
		minWidth: "0px",

		"&.Mui-disabled": {
			color: "secondary.main",
		},

		"@media (max-width: 900px)": {
			maxWidth: "none",
		},
	},
} satisfies SxThemeProps
