import { gql } from "@apollo/client"

const UPDATE_PROFILE_SKILL = gql`
	mutation UpdateProfileSkill($skill: UpdateProfileSkillInput!) {
		updateProfileSkill(skill: $skill) {
			id
			skills {
				name
				categoryId
				mastery
			}
		}
	}
`

export default UPDATE_PROFILE_SKILL