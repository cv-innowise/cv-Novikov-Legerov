import { useMutation } from "@apollo/client/react"

import { DeleteAvatarInput, UploadAvatarInput } from "cv-graphql"

import { USER } from "@entities/user"

import { DELETE_AVATAR, UPLOAD_AVATAR } from "../api/avatar"
import { UploadAvatarResult } from "../api/avatar.types"

export const useAvatarUpload = (userId: string) => {
	return useMutation<UploadAvatarResult, { avatar: UploadAvatarInput }>(
		UPLOAD_AVATAR,
		{
			refetchQueries: [{ query: USER, variables: { userId } }],
		},
	)
}

export const useAvatarDelete = (userId: string) => {
	return useMutation<null, { avatar: DeleteAvatarInput }>(DELETE_AVATAR, {
		refetchQueries: [{ query: USER, variables: { userId } }],
	})
}
