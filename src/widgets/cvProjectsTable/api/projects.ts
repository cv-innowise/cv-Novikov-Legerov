import { gql } from "@apollo/client"

export const PROJECTS = gql`
	query Projects {
		projects {
			id
			name
			domain
			start_date
			end_date
			description
			environment
		}
	}
`
