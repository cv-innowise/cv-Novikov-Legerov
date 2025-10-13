import { SxProps, Theme } from "@mui/material"

export const navItemStyles = {
	container:
		(isActive: boolean): SxProps<Theme> =>
		(theme) => ({
			justifyContent: "center",
			padding: "16px 0 16px 18px",
			borderTopRightRadius: "50px",
			borderBottomRightRadius: "50px",
			transition: "all 0.3s ease",

			"& .MuiListItemIcon-root": {
				justifyContent: "center",
			},
			"&:nth-of-type(4)": {
				marginTop: "20px",
			},

			[theme.breakpoints.down("md")]: {
				padding: "4px 8px",
				borderRadius: "200px",
				height: "40px",
				gap: "8px",
			},
			...(isActive && {
				background: "#0000000a",
			}),
		}),

	icon:
		(isActive: boolean): SxProps<Theme> =>
		(theme) => ({
			minWidth: 40,
			color: theme.palette.icon.color,
			...(isActive && {
				color: theme.palette.icon.active.color,
			}),
		}),

	text:
		(isActive: boolean): SxProps<Theme> =>
		(theme) => ({
			margin: 0,
			"& .MuiListItemText-primary": {
				fontSize: 16,
				fontWeight: 400,
				lineHeight: "24px",
				color: theme.palette.secondary.main,
				...(isActive && {
					color: theme.palette.text.primary,
				}),
			},
			[theme.breakpoints.down("sm")]: {
				display: "none",
			},
		}),
}
