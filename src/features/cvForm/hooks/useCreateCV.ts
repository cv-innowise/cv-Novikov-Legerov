import { useMutation } from "@apollo/client/react"

import { CreateCvInput, Cv } from "cv-graphql"

import { CREATE_CV } from "../api/createCV"
import { USER } from "@entities/user"

type CreateCVArguments = {
	cv: CreateCvInput
}

type CreateCVResult = {
	cv: Cv
}

export const useCreateCV = () => {
	return useMutation<CreateCVResult, CreateCVArguments>(CREATE_CV, {
		refetchQueries: [USER],
	})
}
