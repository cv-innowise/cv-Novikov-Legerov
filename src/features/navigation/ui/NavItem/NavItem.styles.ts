import { SxThemeProps } from "@shared/types/sx.types"

export const navItemStyles = {
	container: {
		width: "100%",
		padding: "16px",
		borderTopRightRadius: "50px",
		borderBottomRightRadius: "50px",
		transition: "all 0.3s ease",

		active: {
			background: "#0000000a",
		},
	},
	icon: {
		minWidth: "40px",
		color: "#00000099",
		active: {
			color: "#2E2E2E",
		},
	},

	text: {
		"& .MuiListItemText-primary": {
			fontSize: "16px",
			fontWeight: "400",
			lineHeight: "24px",
			color: "secondary.main",
		},

		active: {
			"& .MuiListItemText-primary": {
				color: "text.primary",
			},
		},
	},
} satisfies SxThemeProps
