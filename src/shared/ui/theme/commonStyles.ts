import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type Breakpoint = "sm" | "md" | "lg"

export const commonStyles = {
	disappearance: (breakpoint: Breakpoint): SxProps<Theme> => (theme: Theme) => ({
		[theme.breakpoints.down(breakpoint)]: {
			display: "none",
		},
	}),
}