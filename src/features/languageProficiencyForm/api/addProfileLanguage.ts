import { gql } from "@apollo/client"

const ADD_PROFILE_LANGUAGE = gql`
    mutation AddProfileLanguage($language: AddProfileLanguageInput!) {
        addProfileLanguage(language: $language) {
            id
            languages {
                name
                proficiency
            }
        }
    }
`

export default ADD_PROFILE_LANGUAGE
