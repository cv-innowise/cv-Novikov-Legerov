import { SxThemeProps } from "@shared/types/sx.types"

export const avatarStyles = {
	container: {
		display: "flex",
		gap: "60px",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "32px",
	},

	avatar: {
		width: 120,
		height: 120,
		fontSize: "40px",
	},
	infoBox: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "6px",
		cursor: "pointer",
	},
	uploadText: {
		display: "flex",
		gap: "21px",

		"& .MuiTypography-root": {
			fontSize: "20px",
			fontWeight: 500,
		},
	},
	fileRestrictions: {
		color: "secondary.main",
	},
} satisfies SxThemeProps
