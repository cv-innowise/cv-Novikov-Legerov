import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
    buttonsContainer: {
        position: "sticky",
        bottom: "32px",
        backgroundColor: "background.default",

        "@media(max-width: 540px)": {
            flexDirection: "column",
            alignItems: "center"
        }
    },
    button: {
        justifyContent: "space-evenly",
        fontSize: "14px"
    },
    deleteButton: {
        justifyContent: "center",
        gap: "16px",
        fontSize: "14px",
    },
    deleteAmount: {
        backgroundColor: "background.paper",
        borderRadius: "50%",
        width: "24px",
        height: "24px",
        color: "primary.main",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "24px"
    }
} satisfies SxThemeProps
