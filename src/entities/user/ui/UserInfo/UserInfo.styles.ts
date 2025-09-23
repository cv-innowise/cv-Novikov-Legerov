import { SxThemeProps } from "@shared/types/sx.types"

export const userInfoStyles = {
	details: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: "66px",
	},
	username: {
		marginBottom: "8px",
	},
	email: {
		color: "secondary.main",
	},
} satisfies SxThemeProps
