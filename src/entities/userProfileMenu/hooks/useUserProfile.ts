import { useSuspenseQuery } from "@apollo/client/react"

import { PROFILE } from "../api/profile"
import { ProfileResult } from "../api/profile.types"

export const useUserProfile = (userId: string) => {
	const { data } = useSuspenseQuery<ProfileResult>(PROFILE, {
		variables: { userId },
	})

	return {
		profile: data.profile,
	}
}
