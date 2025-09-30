import { useSuspenseQuery, useQuery } from "@apollo/client/react"

import { PROFILE } from "../api/profile"
import { ProfileResult } from "../api/profile.types"

export const useUserProfile = (userId: string) => {
	const { data, error } = useSuspenseQuery<ProfileResult>(PROFILE, {
		variables: { userId },
	})

	return {
		profile: data.profile,
		error: error
	}
}