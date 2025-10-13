import { useMutation } from "@apollo/client/react";
import { AddCvSkillInput, Cv  } from "cv-graphql";
import ADD_CV_SKILL from "../api/addCvSkill";

type addCvSkillArgs = {
    skill: AddCvSkillInput
}

type addCvSkillResult = {
    cv: Cv 
}

export const useAddCvSkill = () => {
    return useMutation<addCvSkillResult, addCvSkillArgs>(ADD_CV_SKILL)
}