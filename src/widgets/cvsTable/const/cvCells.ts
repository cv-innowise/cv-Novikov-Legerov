import { Cv } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const cvHeadCells: HeadCell<Cv>[] = [
    {
        id: "1",
        label: "cvTable.name",
        getValue: (row) => row.name,
    },
    {
        id: "2",
        label: "cvTable.education",
        getValue: (row) => row.education,
        disappearance: "sm"
    },
    {
        id: "3",
        label: "cvTable.employee",
        getValue: (row) => row.user?.email,
        disappearance: "md"
    },
]
