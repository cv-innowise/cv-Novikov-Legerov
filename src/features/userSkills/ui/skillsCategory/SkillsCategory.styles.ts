import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr",
		width: "100%",

		"@media (max-width: 900px)": {
			gridTemplateColumns: "1fr 1fr",
		},

		"@media (max-width: 600px)": {
			gridTemplateColumns: "1fr",
		},
	},
} satisfies SxThemeProps
