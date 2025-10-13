import { gql } from "@apollo/client"

export const CV = gql`
	query Cv($cvId: ID!) {
		cv(cvId: $cvId) {
			id
			name
			education
			description
			languages {
				name
				proficiency
			}
			skills {
				name
				categoryId
				mastery
			}
			user {
				id
				position_name
				profile {
					full_name
				}
			}
			projects {
				id
				project {
					id
					name
					domain
					description
					environment
				}
				name
				description
				domain
				start_date
				end_date
				environment
				roles
				responsibilities
			}
		}
	}
`
