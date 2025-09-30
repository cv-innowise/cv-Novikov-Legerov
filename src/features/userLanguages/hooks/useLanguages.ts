"use client"

import { Language } from "cv-graphql";
import { useSuspenseQuery } from "@apollo/client/react";
import LANGUAGES from "../api/languages";

type LanguagesResult = {
    languages: Language[]
}

export const useLanguages = () => {
    const { data, error } = useSuspenseQuery<LanguagesResult>(LANGUAGES)

    return {
        languages: data.languages,
        error: error
    }
}