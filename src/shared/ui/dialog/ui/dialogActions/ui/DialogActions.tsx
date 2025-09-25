import { DialogActions as MuiDialogActions, Button } from "@mui/material"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import { DialogActionsProps } from "./DialogActions.props"
import Loader from "@shared/ui/loader"
import { useTranslations } from "next-intl"
import { styles } from "./DialogActions.styles"

const DialogActions = ({ loaders, confirmButtonText }: DialogActionsProps) => {
    const isLoading = loaders.some(Boolean);
    const t = useTranslations();

	return (
		<MuiDialogActions sx={styles.container}>
			<Button onClick={hideDialog} color="secondary" variant="outlined">
				{t("Cancel")}
			</Button>
			<Button disabled={isLoading} type="submit" variant="contained">
				{isLoading ? <Loader /> : t(confirmButtonText)}
			</Button>
		</MuiDialogActions>
	)
}

export default DialogActions
