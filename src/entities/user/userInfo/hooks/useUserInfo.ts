import { useSuspenseQuery } from "@apollo/client/react"

import { USER } from "../api/user"
import { UserResult } from "../api/user.types"

export const useUserInfo = (userId: string) => {
	const { data } = useSuspenseQuery<UserResult>(USER, {
		variables: { userId },
	})

	return {
		user: data.user,
	}
}
