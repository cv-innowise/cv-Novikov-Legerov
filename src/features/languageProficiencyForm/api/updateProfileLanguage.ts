import { gql } from "@apollo/client"

const UPDATE_PROFILE_LANGUAGE = gql`
    mutation UpdateProfileLanguage($language: UpdateProfileLanguageInput!) {
        updateProfileLanguage(language: $language) {
            id
            languages {
                name
                proficiency
            }
        }
    }
`

export default UPDATE_PROFILE_LANGUAGE
