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
	},
	link: {
		color: "secondary.main",
	},
} satisfies SxThemeProps
