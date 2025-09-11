import { gql } from "@apollo/client"

const USER = gql`
	query User($userId: ID!) {
		user(userId: $userId) {
			id
		}
	}
`

export default USER
