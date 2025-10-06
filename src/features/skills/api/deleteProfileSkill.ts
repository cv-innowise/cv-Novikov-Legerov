import { gql } from "@apollo/client"

const DELETE_PROFILE_SKILL = gql`
	mutation DeleteProfileSkill($skill: DeleteProfileSkillInput!) {
		deleteProfileSkill(skill: $skill) {
			id
			skills {
				name
				categoryId
				mastery
			}
		}
	}
`

export default DELETE_PROFILE_SKILL
