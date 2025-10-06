import { useMutation } from "@apollo/client/react";
import { DeleteCvSkillInput, Cv  } from "cv-graphql";
import DELETE_CV_SKILL from "../api/deleteCvSkill";

type deleteCvSkillArgs = {
    cv: DeleteCvSkillInput
}

type deleteCvSkillResult = {
    cv: Cv 
}

export const useDeleteCvSkill = () => {
    return useMutation<deleteCvSkillResult, deleteCvSkillArgs>(DELETE_CV_SKILL)
}