import { Theme } from "@mui/material"

import { SxThemeProps } from "@shared/types/sx.types"

export const userFormStyles: SxThemeProps = {
	wrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},

	form: (theme: Theme) => ({
		maxWidth: "852px",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		columnGap: 32,
		rowGap: 16,
		gap: "36px",
		[theme.breakpoints.down("md")]: {
			gridTemplateColumns: "1fr",
		},
	}),
	btn: (theme: Theme) => ({
		gridColumn: "2/3",
		[theme.breakpoints.down("md")]: {
			gridColumn: "1",
			width: "100%",
		},
	}),
}
