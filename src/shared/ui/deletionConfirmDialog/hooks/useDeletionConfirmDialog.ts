import { showDialog } from "@shared/ui/dialog/model/dialogService"
import { DeletionConfirmDialogContent } from "../ui/DeletionDialogContent"
import { DeletionDialogContentProps } from "../ui/DeletionDialogContent.props"

export const useDeletionConfirmDialog = (title: string, formProps: DeletionDialogContentProps) => {
    return () => {
        showDialog({
            title: title,
            Form: DeletionConfirmDialogContent,
            formProps: formProps,
        })
    }
}