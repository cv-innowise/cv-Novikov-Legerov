import { FieldValues, Path } from "react-hook-form";

type FormPasswordFiledProps<T extends FieldValues> = {
    name: Path<T>;
};

export default FormPasswordFiledProps;