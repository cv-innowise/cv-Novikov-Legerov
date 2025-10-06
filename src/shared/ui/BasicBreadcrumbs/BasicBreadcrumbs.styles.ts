import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	breadcrumbs: {
		marginBottom: "8px",
		"& .MuiBreadcrumbs-ol": {
			gap: "8px",
			"& > li:first-of-type": {
				paddingLeft: "20px",
			},
			"& > li:last-child:not(:only-child) > *": {
				color: "primary.main",
				pointerEvents: "none",
				opacity: 0.6,
			},
			"& > li:only-child > *": {
				color: "text.secondary",
				pointerEvents: "none",
				opacity: 0.6,
			},
		},
	},
	link: {
		color: "text.secondary",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "4px",
	},
} satisfies SxThemeProps
