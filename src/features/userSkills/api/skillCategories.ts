import { gql } from "@apollo/client"

const SKILL_CATEGORIES = gql`
  query SkillCategories {
    skillCategories {
        id
        name
        parent {
          id
          name
        }
    }
  }
`

export default SKILL_CATEGORIES;