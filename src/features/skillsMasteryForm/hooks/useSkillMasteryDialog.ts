import { Skill } from "cv-graphql"
import { useParams } from "next/navigation"

import { getSession } from "@shared/model/authStorage"
import { showDialog } from "@shared/ui/dialog/model/dialogService"

import { SkillMasteryFormInput } from "../model/SkillMasteryForm.types"
import SkillMasteryForm from "../ui/SkillMasteryForm"
import { SkillMasteryFormProps } from "../ui/SkillMasteryForm.props"

export const useSkillMasteryDialog = (formProps: SkillMasteryFormProps<SkillMasteryFormInput>) => {
	return () => {
		showDialog({
			title: formProps.mode === "add" ? "Add skill" : "Update skill",
			Form: SkillMasteryForm,
			formProps: formProps,
		})
	}
}
