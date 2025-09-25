import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	container: {
		gap: "8px",
		"@media (max-width: 600px)": {
			justifyContent: "center",
		},
		"@media (max-width: 530px)": {
			flexDirection: "column-reverse",
		},
	},
} satisfies SxThemeProps
