import { gql } from "@apollo/client"

export const CREATE_CV = gql`
    mutation CreateCv($cv: CreateCvInput!) {
        createCv(cv: $cv) {
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