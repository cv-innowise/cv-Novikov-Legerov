"use client"

import { useReactiveVar } from "@apollo/client/react"

import CloseIcon from "@mui/icons-material/Close"
import {
	Box,
	DialogTitle,
	IconButton,
	Dialog as MuiDialog,
	Stack,
} from "@mui/material"
import { useTranslations } from "next-intl"

import { hideDialog } from "../model/dialogService"
import { dialogVar } from "../model/dialogVar"
import { styles } from "./Dialog.styles"

const Dialog = () => {
	const { open, title, Form, formProps, maxWidth } = useReactiveVar(dialogVar)

	const t = useTranslations()

	return (
		<>
			<MuiDialog fullWidth maxWidth={maxWidth} open={open} onClose={hideDialog}>
				<Stack
					sx={styles.title}
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<DialogTitle>{title && t(title)}</DialogTitle>
					<IconButton aria-label="close" onClick={hideDialog}>
						<CloseIcon />
					</IconButton>
				</Stack>
				{Form && <Form key={Form.name} {...formProps} />}
			</MuiDialog>
		</>
	)
}

export default Dialog
