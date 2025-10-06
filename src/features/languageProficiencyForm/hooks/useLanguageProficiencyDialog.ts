import { showDialog } from "@shared/ui/dialog/model/dialogService"

import LanguageProficiencyForm from "../ui/LanguageProficiencyForm"
import { LanguageProficiencyFormProps } from "../ui/LanguageProficiencyForm.props"

export const useLanguageProficiencyDialog = (formProps: LanguageProficiencyFormProps) => {
    return () => {
        showDialog({
            title: formProps.mode === "add" ? "Add language" : "Update language",
            Form: LanguageProficiencyForm,
            formProps: formProps,
        })
    }
}
