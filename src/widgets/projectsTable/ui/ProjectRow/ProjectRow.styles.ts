import { Description } from "@mui/icons-material"

import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
	menuCell: {
		display: "flex",
		justifyContent: "flex-end",
	},
	fullWidthCell: {
		paddingTop: "0",
	},
	firstRow: {
		"& .MuiTableCell-root": { borderBottom: "none" },
	},
	descriptionRow: {
		opacity: "0.5",
		"& .MuiTableCell-root": { borderBottom: "none" },
	},
	responsibilities: {
		borderRadius: "16px",
		fontSize: "13px",
		color: "text.primary",
		backgroundColor: "background.secondary",
		width: "fit-content",
		padding: "2px 8px",
	}
} satisfies SxThemeProps
