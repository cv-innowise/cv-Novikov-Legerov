import { useMutation } from "@apollo/client/react"

import { AddCvProjectInput, Cv } from "cv-graphql"

import { CREATE_CV_PROJECT } from "../api/createProject"

type CreateCVProjectArguments = {
    project: AddCvProjectInput
}

type CreateCVProjectResult = {
    cv: Cv
}

export const useCreateCVProject = () => {
    return useMutation<CreateCVProjectResult, CreateCVProjectArguments>(CREATE_CV_PROJECT)
}
