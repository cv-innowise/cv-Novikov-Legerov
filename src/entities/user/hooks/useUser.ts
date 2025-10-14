import { useSuspenseQuery } from "@apollo/client/react"

import { USER } from "../api/user"
import { UserResult } from "../api/user.types"

export const useUser = (userId: string) => {
	const { data, error } = useSuspenseQuery<UserResult>(USER, {
		variables: { userId },
	})

	return {
		user: data.user,
		error
	}
}
