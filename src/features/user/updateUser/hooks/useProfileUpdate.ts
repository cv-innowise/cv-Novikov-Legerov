import { useMutation } from "@apollo/client/react"

import { UpdateProfileInput } from "cv-graphql"

import { USER } from "@entities/user/userInfo"

import { UPDATE_PROFILE } from "../api/updateUser"
import { UpdateProfileResult } from "../api/updateUser.types"

export const useProfileUpdate = (userId: string) => {
	return useMutation<UpdateProfileResult, { profile: UpdateProfileInput }>(
		UPDATE_PROFILE,
		{
			refetchQueries: [{ query: USER, variables: { userId } }],
		},
	)
}
