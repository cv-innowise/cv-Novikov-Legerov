import { useMutation } from "@apollo/client/react"

import { UpdateCvProjectInput, Cv } from "cv-graphql"

import { UPDATE_CV_PROJECT } from "../api/updateProject"

type UpdateCVProjectArguments = {
    project: UpdateCvProjectInput
}

type UpdateCVProjectResult = {
    cv: Cv
}

export const useUpdateCVProject = () => {
    return useMutation<UpdateCVProjectResult, UpdateCVProjectArguments>(UPDATE_CV_PROJECT)
}
