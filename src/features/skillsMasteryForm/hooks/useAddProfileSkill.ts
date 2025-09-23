import { useMutation } from "@apollo/client/react";
import ADD_PROFILE_SKILL from "../api/addProfileSkill";
import { AddProfileSkillInput, Profile  } from "cv-graphql";

type addProfileSkillArgs = {
    skill: AddProfileSkillInput
}

type addProfileSkillResult = {
    profile: Profile 
}

export const useAddProfileSkill = () => {
    return useMutation<addProfileSkillResult, addProfileSkillArgs>(ADD_PROFILE_SKILL)
}