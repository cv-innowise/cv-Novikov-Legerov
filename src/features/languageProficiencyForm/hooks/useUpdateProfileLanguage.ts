import { useMutation } from "@apollo/client/react";
import UPDATE_PROFILE_LANGUAGE from "../api/updateProfileLanguage";
import { Profile, UpdateProfileLanguageInput  } from "cv-graphql";

type UpdateProfileLanguageArgs = {
    language: UpdateProfileLanguageInput
}

type UpdateProfileLanguageResult = {
    profile: Profile 
}

export const useUpdateProfileLanguage = () => {
    return useMutation<UpdateProfileLanguageResult, UpdateProfileLanguageArgs>(UPDATE_PROFILE_LANGUAGE)
}