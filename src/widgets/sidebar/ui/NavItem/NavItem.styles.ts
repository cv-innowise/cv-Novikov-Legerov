import { SxThemeProps } from "@shared/types/sx.types"

export const navItemStyles = {
	container: {
		width: "100%",
		padding: "16px 0 16px 18px",
		borderTopRightRadius: "50px",
		borderBottomRightRadius: "50px",
		transition: "all 0.3s ease",

		"&:nth-of-type(4)": {
			marginTop: "20px",
		},

		active: {
			background: "#0000000a",
		},
	},
	icon: {
		minWidth: "40px",
		color: "icon.color",
		active: {
			color: "icon.color.active",
		},
	},

	text: {
		margin: 0,
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
