import { makeVar } from "@apollo/client";
import { DialogState } from "./dialog.types";

export const dialogVar = makeVar<DialogState<any>>({
    open: false,
    title: "",
    Form: null,
    formProps: null,
    maxWidth: "sm"
})