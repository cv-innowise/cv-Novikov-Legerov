import { gql } from "@apollo/client"

export const SKILLS = gql`
	query Skills {
		skills {
			id
			created_at
			name
			category {
				id
				name
				order
			}
			category_name
			category_parent_name
		}
	}
`
