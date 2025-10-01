import { gql } from "@apollo/client"

export const UPDATE_USER = gql`
	mutation UpdateUser($user: UpdateUserInput!) {
		updateUser(user: $user) {
			id
			profile {
				id
				avatar
				first_name
				last_name
				full_name
			}
			department {
				id
				name
			}
			position {
				id
				name
			}
		}
	}
`

export const UPDATE_PROFILE = gql`
	mutation UpdateProfile($profile: UpdateProfileInput!) {
		updateProfile(profile: $profile) {
			id
			first_name
			last_name
			avatar
			full_name
		}
	}
`
