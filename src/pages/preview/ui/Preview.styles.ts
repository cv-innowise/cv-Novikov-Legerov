import { Title } from "@mui/icons-material"
import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
    container: {
        padding: "32px 24px",
        maxWidth: "900px",
        margin: "auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "32px",

        "@media (max-width: 600px)": {
            padding: "32px 16px",
        },
    },

    
} satisfies SxThemeProps
