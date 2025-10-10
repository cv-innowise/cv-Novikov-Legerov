import { gql } from "@apollo/client"

export const PROJECT = gql`
	query Project($projectId: ID!) {
		project(projectId: $projectId) {
			id
			name
			domain
			internal_name
			start_date
			end_date
			description
		}
	}
`
