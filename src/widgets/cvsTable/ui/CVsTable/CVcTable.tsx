import { BasicTable } from "@widgets/table"
import { CVRow } from "../CVRow/CVRow"
import { cvHeadCells } from "@widgets/cvsTable/const/cvCells"
import { CVsTableProps } from "./CVcTable.props"
import { useCVDialog } from "@features/cvForm/hooks/useCVFormDialog"

export const CVsTable = ({cvs}: CVsTableProps) => {
    const addCV = useCVDialog({mode: "add"})
   
    return (
        <BasicTable
            data={cvs}
            RowComponent={CVRow}
            headCells={cvHeadCells}
            addItemHandle={addCV}
            addButtonText='Add CV'
        />
    )
}