import { gql } from "@apollo/client"

export const CV = gql`
	query Cv($cvId: ID!) {
        cv(cvId: $cvId) {
            id
            name
            education
            description
            skills {
                name
                categoryId
                mastery
            }
            user {
                id
            }
        }
    }
`
