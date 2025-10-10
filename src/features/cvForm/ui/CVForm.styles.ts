import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
    content: {
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "32px"
    },
    updateButton: {
        justifySelf: "end",
        alignSelf: "end",
        width: "48%",
        margin: "16px 24px",
    }
} satisfies SxThemeProps
