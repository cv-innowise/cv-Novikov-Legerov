import { gql } from "@apollo/client"

const LANGUAGES = gql`
  query Languages {
    languages {
        id
        name
    }
  }
`

export default LANGUAGES;