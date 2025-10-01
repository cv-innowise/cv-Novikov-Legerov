import { useTranslations } from "next-intl"

import { showDialog } from "@shared/ui/dialog/model/dialogService"

import { UserDialogForm } from "../ui/UserDialogForm"
import { UserDialogFormProps } from "../ui/UserDialogForm/UserDialogForm.props"

export const useUserDialog = (formProps: UserDialogFormProps) => {
	return () => {
		showDialog({
			maxWidth: "md",
			title: "userForm.title",
			Form: UserDialogForm,
			formProps,
		})
	}
}
