import { SxThemeProps } from "@shared/types/sx.types"

export const styles = {
    container: {
        "@media (max-width: 600px)": {
            justifyContent: "center"
        },
         "@media (max-width: 530px)": {
            flexDirection: "column-reverse",
            gap: "15px"
        },
    },
} satisfies SxThemeProps
