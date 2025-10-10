import { gql } from "@apollo/client"

const REMOVE_CV_PROJECT = gql`
	mutation RemoveCvProject($project: RemoveCvProjectInput!) {
		removeCvProject(project: $project) {
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

export default REMOVE_CV_PROJECT
