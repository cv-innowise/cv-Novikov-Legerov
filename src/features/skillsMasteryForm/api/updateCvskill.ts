import { gql } from "@apollo/client"

const UPDATE_CV_SKILL = gql`
    mutation UpdateCvSkill($skill: UpdateCvSkillInput!) {
        updateCvSkill(skill: $skill) {
            id
            skills {
                name
                categoryId
                mastery
            }
        }
    }
`

export default UPDATE_CV_SKILL