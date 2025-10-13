import { useMutation } from "@apollo/client/react";
import DELETE_PROFILE_SKILL from "../api/deleteProfileSkill";
import { DeleteProfileSkillInput, Profile  } from "cv-graphql";

type deleteProfileSkillArgs = {
    skill: DeleteProfileSkillInput
}

type deleteProfileSkillResult = {
    profile: Profile 
}

export const useDeleteProfileSkill = () => {
    return useMutation<deleteProfileSkillResult, deleteProfileSkillArgs>(DELETE_PROFILE_SKILL)
}