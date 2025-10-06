import { useMutation } from "@apollo/client/react"
import { CREATE_CV } from "../api/createCV"
import { UpdateCvInput, Cv } from "cv-graphql"

type UpdateCVArguments = {
    cv: UpdateCvInput
}

type UpdateCVResult = {
    cv: Cv
}

export const useUpdateCV = () => {
    return useMutation<UpdateCVResult, UpdateCVArguments>(CREATE_CV)
}