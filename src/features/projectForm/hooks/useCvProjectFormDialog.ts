import { showDialog } from "@shared/ui/dialog/model/dialogService"

import CvProjectForm from "../ui/CvProjectForm"
import { CvProjectFormProps } from "../ui/CvProjectForm.props"

export const useCvProjectDialog = (formProps: CvProjectFormProps) => {
    return () => {
        showDialog({
            title: formProps.mode === "add" ? "Add project" : "Update project",
            Form: CvProjectForm,
            formProps: formProps,
            maxWidth: "md",
        })
    }
}
