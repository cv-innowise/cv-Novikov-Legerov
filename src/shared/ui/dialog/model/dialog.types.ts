import { SubmitHandler } from "react-hook-form"
import { DialogProps } from "@mui/material"

export type DialogState<T> = {
	open: boolean;
	title: string;
	Form: ((props: T) => JSX.Element) | null;
	formProps: T | null;
	maxWidth?: DialogProps['maxWidth'];
}

export type ShowDialogParamsType<T> = {
	title: string;
	Form: ((props: T) => JSX.Element) | null;
	formProps: T | null;
	maxWidth?: DialogProps['maxWidth'];
}
