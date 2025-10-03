import { Description } from "@mui/icons-material"
import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
    menuCell: {
        display: "flex",
        justifyContent: "flex-end",
    },
    description: {
        paddingTop: "0",
    },
    firstRow: {
        "& .MuiTableCell-root": { borderBottom: "none" }
    },
    descriptionRow: {
        opacity: "0.5",
        "& .MuiTableCell-root": { fontSize: "16px" }
    }
} satisfies SxThemeProps
