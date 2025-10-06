import { Language, LanguageProficiency } from "cv-graphql";

export type LanguageProficiencyFormProps = {
    language?: LanguageProficiency;
    mode: "add" | "update";
    languages: Language[];
    userLanguages?: LanguageProficiency[];
}