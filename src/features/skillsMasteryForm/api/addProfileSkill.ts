import { gql } from "@apollo/client";

const ADD_PROFILE_SKILL = gql`
  mutation AddProfileSkill($skill: AddProfileSkillInput!) {
    addProfileSkill(skill: $skill) {
      id
    }
  }
`;

export default ADD_PROFILE_SKILL;