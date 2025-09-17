import { SxThemeProps } from "@shared/types/sx.types"

export const userInfoStyles = {
	details: {
		marginTop: "30px",
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
