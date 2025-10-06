import { useMutation } from "@apollo/client/react";
import { Cv, UpdateCvSkillInput  } from "cv-graphql";
import UPDATE_CV_SKILL from "../api/updateCvskill";

type updateCvSkillArgs = {
    skill: UpdateCvSkillInput
}

type updateCvSkillResult = {
    cv: Cv 
}

export const useUpdateCvSkill = () => {
    return useMutation<updateCvSkillResult, updateCvSkillArgs>(UPDATE_CV_SKILL)
}