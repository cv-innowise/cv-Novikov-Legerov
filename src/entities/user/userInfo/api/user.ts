import { gql } from "@apollo/client"

export const USER = gql`
	query User($userId: ID!) {
		user(userId: $userId) {
			id
			created_at
			email
			profile {
				id
				first_name
				last_name
				full_name
				avatar
			}
			department {
				id
				name
			}
			position {
				id
				name
			}
			is_verified
			role
		}
	}
`
