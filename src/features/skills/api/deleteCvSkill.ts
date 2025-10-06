import { gql } from "@apollo/client"

const DELETE_CV_SKILL = gql`
    mutation DeleteCvSkill($skill: DeleteCvSkillInput !) {
        deleteCvSkill(skill: $skill) {
            id
            skills {
                name
                categoryId
                mastery
            }
        }
    }
`

export default DELETE_CV_SKILL
