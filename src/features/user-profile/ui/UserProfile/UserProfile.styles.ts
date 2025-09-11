import { SxThemeProps } from "@shared/types/sx.types"

export const userProfileStyles = {
	profile: {
		minWidth: "56px",
		width: "100%",
		maxWidth: "100%",
		justifyContent: "flex-start",
		gap: "8px",
		borderRadius: "0 200px 200px 0",
		transition: "all 0.3s ease",
		color: "inherit",

		"&:hover": {
			backgroundColor: "#0000000a ",
		},
	},
	avatar: {
		backgroundColor: "primary.main",
		width: "40px",
		height: "40px",
	},

	name: {
		overflowX: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		color: "text.primary",
		textTransform: "none",
	},
} satisfies SxThemeProps
