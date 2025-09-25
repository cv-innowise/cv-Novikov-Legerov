import { showDialog } from "@shared/ui/dialog/model/dialogService"

import SkillMasteryForm from "../ui/SkillMasteryForm"
import { SkillMasteryFormProps } from "../ui/SkillMasteryForm.props"

export const useSkillMasteryDialog = (formProps: SkillMasteryFormProps) => {
	return () => {
		showDialog({
			title: formProps.mode === "add" ? "Add skill" : "Update skill",
			Form: SkillMasteryForm,
			formProps: formProps,
		})
	}
}
