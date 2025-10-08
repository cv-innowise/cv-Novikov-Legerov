import { Cv, CvProject } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const projectHeadCells: HeadCell<CvProject>[] = [
    {
        id: "1",
        label: "projectTable.name",
        getValue: (row) => row.name,
    },
    {
        id: "2",
        label: "projectTable.domain",
        getValue: (row) => row.domain,
        disappearance: "sm"
    },
    {
        id: "3",
        label: "projectTable.startDate",
        getValue: (row) => row.start_date,
        disappearance: "lg"
    },
     {
        id: "4",
        label: "projectTable.endDate",
        getValue: (row) => row.end_date,
        disappearance: "md"
    }
]
