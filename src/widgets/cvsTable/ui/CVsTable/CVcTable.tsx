'use client'

import { BasicTable } from "@widgets/table"
import { CVRow } from "../CVRow/CVRow"
import { cvHeadCells } from "@widgets/cvsTable/const/cvCells"
import { useCVDialog } from "@features/cvForm/hooks/useCVFormDialog"
import { Suspense } from "react"
import { useAuthUserId, useUser } from "@entities/user"
import Loader from "@shared/ui/loader"

const CVsTable = () => {
    const addCV = useCVDialog({mode: "add"})
    const userId = useAuthUserId()
    const { user } = useUser(userId)

    return (
        <BasicTable
            data={user.cvs || []}
            RowComponent={CVRow}
            headCells={cvHeadCells}
            addItemHandle={addCV}
            addButtonText='Add CV'
        />
    )
}

export const CVsTableSuspense = () => {
    return (
        <Suspense fallback={<Loader />}>
            <CVsTable />
        </Suspense>
    )
}   