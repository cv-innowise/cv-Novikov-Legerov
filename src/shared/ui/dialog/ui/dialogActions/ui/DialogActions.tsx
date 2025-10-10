import { Button, DialogActions as MuiDialogActions } from "@mui/material"
import { useTranslations } from "next-intl"

import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import Loader from "@shared/ui/loader"

import { DialogActionsProps } from "./DialogActions.props"
import { styles } from "./DialogActions.styles"
import { FormButton } from "@shared/ui/form/FormButton"

const DialogActions = ({ loaders, confirmButtonText, onConfirmButtonClick }: DialogActionsProps) => {
	const isLoading = loaders?.some(Boolean)
	const t = useTranslations()

	return (
		<MuiDialogActions sx={styles.container}>
			<Button onClick={hideDialog} color="secondary" variant="outlined">
				{t("Cancel")}
			</Button>
			<FormButton onClick={onConfirmButtonClick} disabled={isLoading} type="submit" variant="contained">
				{isLoading ? <Loader /> : t(confirmButtonText)}
			</FormButton>
		</MuiDialogActions>
	)
}

export default DialogActions
