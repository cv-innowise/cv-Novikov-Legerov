import { Cv } from "cv-graphql";

export type CVFormProps = {
    mode: "add" | "update";
    cv?: Cv
}