import { useMutation } from "@apollo/client/react";
import DELETE_PROFILE_LANGUAGE from "../api/deleteProfileLanguage";
import { DeleteProfileLanguageInput, Profile  } from "cv-graphql";

type deleteProfileLanguageArgs = {
    language: DeleteProfileLanguageInput
}

type deleteProfileLanguageResult = {
    profile: Profile 
}

export const useDeleteProfileLanguage = () => {
    return useMutation<deleteProfileLanguageResult, deleteProfileLanguageArgs>(DELETE_PROFILE_LANGUAGE)
}