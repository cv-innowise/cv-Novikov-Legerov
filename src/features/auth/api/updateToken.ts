import { gql } from "@apollo/client";

const UPDATE_TOKEN_MUTATION = gql`
  mutation UpdateToken {
    updateToken {
      access_token
      refresh_token
    }
  }
`;

export default UPDATE_TOKEN_MUTATION;