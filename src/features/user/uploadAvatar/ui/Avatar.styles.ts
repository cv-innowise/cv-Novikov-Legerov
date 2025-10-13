import { Theme } from "@mui/material"

import { SxThemeProps } from "@shared/types/sx.types"

export const avatarStyles: SxThemeProps = {
	container: (theme: Theme) => ({
		display: "flex",
		gap: "60px",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "32px",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	}),

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
}
