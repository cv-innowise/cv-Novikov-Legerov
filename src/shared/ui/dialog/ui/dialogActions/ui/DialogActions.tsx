import { DialogActions as MuiDialogActions, Button } from "@mui/material"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import { DialogActionsProps } from "./DialogActions.props"
import Loader from "@shared/ui/loader"
import { useTranslations } from "next-intl"
import { styles } from "./DialogActions.styles"
import { FormButton } from "@shared/ui/form/FormButton"

const DialogActions = ({ loaders, confirmButtonText }: DialogActionsProps) => {
    const isLoading = loaders.some(Boolean);
    const t = useTranslations();

	return (
		<MuiDialogActions sx={styles.container}>
			<Button onClick={hideDialog} color="secondary" variant="outlined">
				{t("Cancel")}
			</Button>
			<FormButton disabled={isLoading} type="submit" variant="contained">
				{isLoading ? <Loader /> : t(confirmButtonText)}
			</FormButton>
		</MuiDialogActions>
	)
}

export default DialogActions
