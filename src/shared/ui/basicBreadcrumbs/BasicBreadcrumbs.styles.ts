import { SxThemeProps } from "@shared/types/sx.types"

export const basicBreadcrumbsStyles = {
	breadcrumbs: {
		marginBottom: "8px",
		"& .MuiBreadcrumbs-ol": {
			gap: "7px",
		},
	},
	text: {
		color: "primary.main",
		paddingLeft: "20px",
	},
	link: {
		color: "secondary.main",
	},
} satisfies SxThemeProps
