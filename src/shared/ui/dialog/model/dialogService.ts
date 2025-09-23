import { ShowDialogParamsType } from "./dialog.types"
import { dialogVar } from "./dialogVar"

export const showDialog = <T>({
	title,
	Form,
	formProps,
	maxWidth
}: ShowDialogParamsType<T>) => {
	dialogVar({
		open: true,
		title: title,
		Form: Form,
		formProps: formProps,
		maxWidth: maxWidth
	})
}

export const hideDialog = () => {
  const prev = dialogVar();
  dialogVar({
    ...prev,
    open: false,
  })
}
