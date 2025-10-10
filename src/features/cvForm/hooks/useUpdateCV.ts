import { useMutation } from "@apollo/client/react"
import { UPDATE_CV } from "../api/updateCV"
import { UpdateCvInput, Cv } from "cv-graphql"

type UpdateCVArguments = {
    cv: UpdateCvInput
}

type UpdateCVResult = {
    cv: Cv
}

export const useUpdateCV = () => {
    return useMutation<UpdateCVResult, UpdateCVArguments>(UPDATE_CV)
}