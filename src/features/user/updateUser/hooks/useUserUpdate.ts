import { useMutation } from "@apollo/client/react"

import { UpdateUserInput } from "cv-graphql"

import { UPDATE_USER } from "../api/updateUser"
import { UpdateUserResult } from "../api/updateUser.types"

export const useUserUpdate = () => {
	return useMutation<UpdateUserResult, { user: UpdateUserInput }>(UPDATE_USER)
}
