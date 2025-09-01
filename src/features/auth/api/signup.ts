import { gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
  mutation Signup($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        email
      }
    }
  }
`;

export default SIGNUP_MUTATION;