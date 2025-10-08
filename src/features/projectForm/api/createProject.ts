import { gql } from "@apollo/client"

export const CREATE_CV_PROJECT = gql`
    mutation AddCvProject($project: AddCvProjectInput!) {
        addCvProject(project: $project) {
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