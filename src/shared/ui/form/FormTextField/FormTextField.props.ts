import { FieldValues, Path } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

type FormTextFieldProps<T extends FieldValues> = {
    name: Path<T>;
} & TextFieldProps;

export default FormTextFieldProps;