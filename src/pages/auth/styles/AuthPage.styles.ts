import { SxThemeProps } from "@shared/types/sx.types"

export const authFormStyles = {
	main: {
		display: "flex",
		flexGrow: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	formContainer: {
		justifyContent: "center",
		alignItems: "center",
		maxWidth: "560px",
		width: "90%",
		margin: "0 auto",
		height: "100%",

		"& > .MuiTypography-h4": {
			marginBottom: "24px",
		},

		"& > .MuiTypography-body1": {
			marginBottom: "40px",
		},
	},
} satisfies SxThemeProps
