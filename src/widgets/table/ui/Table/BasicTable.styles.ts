import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
    button: {
        "&.MuiButtonBase-root": {
            minWidth: "48px",
        },
    },
	buttonText: {
		fontSize: "14px",
		fontWeight: "500",

        "@media (max-width: 900px)": {
            display: "none",
        }
	},
} satisfies SxThemeProps
