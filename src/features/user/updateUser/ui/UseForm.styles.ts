import { SxThemeProps } from "@shared/types/sx.types"

export const userFormStyles = {
	wrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	form: {
		maxWidth: "852px",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		columnGap: 32,
		rowGap: 16,
		gap: "36px",
	},
	btn: {
		gridColumn: "2/3",
	},
} satisfies SxThemeProps
