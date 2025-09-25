import { useMutation } from "@apollo/client/react";
import UPDATE_PROFILE_SKILL from "../api/updateProfileSkill";
import { UpdateProfileSkillInput, Profile } from "cv-graphql";

type updateProfileSkillArgs = {
    skill: UpdateProfileSkillInput
}

type updateProfileSkillResult = {
    profile: Profile 
}

export const useUpdateProfileSkill = () => {
    return useMutation<updateProfileSkillResult, updateProfileSkillArgs>(UPDATE_PROFILE_SKILL)
}