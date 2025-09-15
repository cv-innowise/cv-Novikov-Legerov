import { gql } from "@apollo/client";

const LOGIN = gql`
  query Login($auth: AuthInput!) {
    login(auth: $auth) {
      access_token
      refresh_token
      user {
        id
        email
        role
      }
    }
  }
`;

export default LOGIN;