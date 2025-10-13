import { gql } from "@apollo/client"

export const LANGUAGES = gql`
	query Languages {
		languages {
			id
			name
			native_name
			iso2
		}
	}
`
