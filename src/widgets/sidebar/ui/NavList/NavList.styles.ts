import { Theme } from "@mui/material"

import { SxThemeProps } from "@shared/types/sx.types"

export const navListStyles: SxThemeProps = {
	list: (theme: Theme) => ({
		padding: 0,
		display: "flex",
		flexDirection: "column",
		gap: "14px",
		[theme.breakpoints.down("md")]: {
			flexDirection: "row",
			alignItems: "center",

			gap: "10px",

			"& > :nth-of-type(n+4)": {
				display: "none",
			},
		},
	}),
}
