import { gql } from "@apollo/client"

export const ADD_CV_PROJECT = gql`
	mutation AddCvProject($project: AddCvProjectInput!) {
		addCvProject(project: $project) {
			id
			projects {
				id
				project {
					id
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
