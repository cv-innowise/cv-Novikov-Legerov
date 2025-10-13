import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export const sidebarStyles = {
	container:
		(open: boolean): SxProps<Theme> =>
		(theme: Theme) => ({
			width: open ? 200 : 56,
			[theme.breakpoints.down("md")]: {
				width: 0,
			},
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
				[theme.breakpoints.down("md")]: {
					width: "100%",
					height: 56,
					flexDirection: "row",
					display: "grid",
					gridTemplateColumns: "3fr 1fr",
					padding: "0 16px",
					gap: "10px",
					alignItems: "center",
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					top: "auto",
				},
			},
		}),

	footer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: "22px",
	} satisfies SxProps<Theme>,

	arrow: (theme: Theme) =>
		({
			color: "icon.color",
			padding: "10px",
			marginLeft: "13px",
			[theme.breakpoints.down("md")]: {
				display: "none",
			},
		}) satisfies SxProps<Theme>,
}
