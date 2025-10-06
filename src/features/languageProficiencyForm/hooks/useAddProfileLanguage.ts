import { useMutation } from "@apollo/client/react";
import ADD_PROFILE_LANGUAGE from "../api/addProfileLanguage";
import { AddProfileLanguageInput, Profile  } from "cv-graphql";

type AddProfileLanguageArgs = {
    language: AddProfileLanguageInput
}

type AddProfileLanguageResult = {
    profile: Profile 
}

export const useAddProfileLanguage = () => {
    return useMutation<AddProfileLanguageResult, AddProfileLanguageArgs>(ADD_PROFILE_LANGUAGE)
}