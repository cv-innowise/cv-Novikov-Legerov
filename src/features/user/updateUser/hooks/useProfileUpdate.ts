import { useMutation } from "@apollo/client/react"

import { UpdateProfileInput } from "cv-graphql"

import { UPDATE_PROFILE } from "../api/updateUser"
import { UpdateProfileResult } from "../api/updateUser.types"

export const useProfileUpdate = () => {
	return useMutation<UpdateProfileResult, { profile: UpdateProfileInput }>(
		UPDATE_PROFILE,
	)
}
