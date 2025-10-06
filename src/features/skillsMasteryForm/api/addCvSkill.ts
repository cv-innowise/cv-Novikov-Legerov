import { gql } from "@apollo/client"

const ADD_CV_SKILL = gql`
    mutation AddCvSkill($skill: AddCvSkillInput!) {
        addCvSkill(skill: $skill) {
            id
            skills {
                name
                categoryId
                mastery
            }
        }
    }
`

export default ADD_CV_SKILL
