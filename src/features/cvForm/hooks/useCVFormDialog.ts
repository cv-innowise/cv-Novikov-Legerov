import { showDialog } from "@shared/ui/dialog/model/dialogService"

import { CVForm } from "../ui/CVForm"
import { CVFormProps } from "../ui/CVForm.props"

export const useCVDialog = (formProps: CVFormProps) => {
    return () => {
        showDialog({
            title: formProps.mode === "add" ? "Add CV" : "Update CV",
            Form: CVForm,
            formProps: formProps,
        })
    }
}
