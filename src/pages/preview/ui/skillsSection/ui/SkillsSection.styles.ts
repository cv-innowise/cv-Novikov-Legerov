import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	skillCategory: {
		color: "primary.main",
        fontWeight: "500"
	},
	tableBody: {
		"& .MuiTableCell-root": {
			borderBottom: "none",
		},
	},
	headerRow: (theme) => ({
		"& .MuiTableCell-root": {
			borderBottom: `1px solid ${theme.palette.primary.main}`,
			paddingBottom: "20px",
		},
	}),
	lastCategoryRow: {
		"& .MuiTableCell-root": {
			borderBottom: `1px solid #bdbdbd`,
			paddingBottom: "20px",
		},
	},
} satisfies SxThemeProps
