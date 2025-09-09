import { BoxProps } from "@mui/material";
import { ReactNode } from "react";
import { SubmitHandler, FieldValues, DefaultValues, SubmitErrorHandler } from "react-hook-form";
import * as yup from "yup";

type FormWrapperProps<T extends FieldValues> = {
    onSubmit: SubmitHandler<T>;
    schema?: yup.ObjectSchema<any>;
    defaultValues?: DefaultValues<T>;
    children: ReactNode;
} & Omit<BoxProps, "onSubmit">;

export default FormWrapperProps;