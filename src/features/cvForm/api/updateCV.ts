import { gql } from "@apollo/client"

export const UPDATE_CV = gql`
    mutation UpdateCv($cv: UpdateCvInput!) {
        updateCv(cv: $cv) {
            user {
                id
                cvs {
                    id
                    name
                    education
                    description
                }
            }
        }
    }
`