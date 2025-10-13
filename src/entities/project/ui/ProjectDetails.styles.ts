import { SxThemeProps } from "@shared/types/sx.types"

export const projectDetailsStyles = {
	card: {
		borderRadius: "8px",
		width: "100%",
		boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
	},
	content: {
		backgroundColor: "background.default",
		display: "flex",
		flexDirection: "column",
		gap: 1,
		p: 2,
	},
	title: {
		color: "text.primary",
		fontWeight: 700,
		mb: 0.5,
	},
	meta: {
		display: "flex",
		flexDirection: "column",
		gap: 0.5,
		color: "text.primary",
	},
	datesRow: {
		display: "flex",
		gap: 1,
		alignItems: "center",
		flexWrap: "wrap",
	},
	date: {
		backgroundColor: "background.secondary",
		borderRadius: "4px",
		px: 1,
		py: "2px",
		fontSize: "0.85rem",
		color: "text.primary",
	},
	description: {
		color: "text.primary",
		mt: 1,
		whiteSpace: "pre-line",
	},
} satisfies SxThemeProps
