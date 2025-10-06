import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	breadcrumbs: {
		marginBottom: "8px",
		"& .MuiBreadcrumbs-ol": {
			gap: "8px",
			"& > li:first-of-type": {
				paddingLeft: "20px",
			},
		},
	},
	text: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "4px",
		color: "primary.main",
	},
	link: {
		color: "secondary.main",
	},
} satisfies SxThemeProps
