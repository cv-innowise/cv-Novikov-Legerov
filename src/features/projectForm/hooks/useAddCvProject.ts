import { useMutation } from "@apollo/client/react"

import { AddCvProjectInput, Cv } from "cv-graphql"

import { ADD_CV_PROJECT } from "../api/addProject"

type AddCVProjectArguments = {
    project: AddCvProjectInput
}

type AddCVProjectResult = {
    cv: Cv
}

export const useAddCvProject = () => {
    return useMutation<AddCVProjectResult, AddCVProjectArguments>(ADD_CV_PROJECT)
}
