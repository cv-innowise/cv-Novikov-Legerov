import { gql } from "@apollo/client"

const DELETE_PROFILE_LANGUAGE = gql`
    mutation DeleteProfileLanguage($language: DeleteProfileLanguageInput!) {
        deleteProfileLanguage(language: $language) {
            id
            languages {
                name
                proficiency
            }
        }
    }
`

export default DELETE_PROFILE_LANGUAGE