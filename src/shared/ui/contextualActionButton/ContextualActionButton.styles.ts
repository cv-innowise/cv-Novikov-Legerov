import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	button: {
		display: "flex",
		"& > :nth-of-type(1)": {
			width: "27.5%",
		},
		"& > :nth-of-type(2)": {
			width: "72.5%",
		},
	},
} satisfies SxThemeProps
