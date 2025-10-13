import { gql } from "@apollo/client"

export const UPDATE_CV_PROJECT = gql`
	mutation UpdateCvProject($project: UpdateCvProjectInput!) {
		updateCvProject(project: $project) {
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
