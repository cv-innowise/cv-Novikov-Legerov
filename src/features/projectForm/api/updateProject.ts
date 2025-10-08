import { gql } from "@apollo/client"

export const UPDATE_CV_PROJECT = gql`
    mutation UpdateCvProject($project: UpdateCvProjectInput!) {
        updateCvProject(project: $project) {
            cv {
                id
                projects {
                    id
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
    }
`