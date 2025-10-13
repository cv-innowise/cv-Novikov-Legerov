import { Theme } from "@mui/material"
import { padding, SxProps } from "@mui/system"

export const sidebarStyles = {
	container:
		(open: boolean): SxProps<Theme> =>
		(theme: Theme) => ({
			width: open ? 200 : 56,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			"& .MuiDrawer-paper": {
				display: "flex",
				justifyContent: "space-between",
				padding: "44px 0 16px 0",
				width: open ? 200 : 56,
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				overflowX: "hidden",
				border: "none",
				backgroundColor: theme.vars?.palette.background.default,
			},
		}),

	footer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: "22px",
	} satisfies SxProps<Theme>,

	arrow: {
		color: "icon.color",
		padding: "10px",
		marginLeft: "13px",
	} satisfies SxProps<Theme>,
}
