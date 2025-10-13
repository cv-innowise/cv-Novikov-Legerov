import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	content: {
		maxWidth: "lg",
		padding: "16px 24px",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "32px",

		"@media (max-width: 600px)": {
			gridTemplateColumns: "1fr",
		},
	},
	fullWidthGridElement: {
		gridColumn: "span 2",
		"@media (max-width: 600px)": {
			gridColumn: "auto",
		},
	},
} satisfies SxThemeProps
