import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	container: {
		padding: "32px 24px",
		maxWidth: "900px",
		margin: "auto",

		"@media (max-width: 600px)": {
			padding: "32px 16px",
		},
	},

	languagesContainer: {
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
