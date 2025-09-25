import { SxThemeProps } from "@shared/types/sx.types"

export const userSkillsStyles = {
	container: {
		padding: "32px 24px",
		maxWidth: "900px",
		margin: "auto",

		"@media (max-width: 600px)": {
			padding: "32px 16px",
		},
	},
} satisfies SxThemeProps
