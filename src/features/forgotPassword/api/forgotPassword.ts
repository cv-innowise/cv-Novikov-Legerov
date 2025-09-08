import { gql } from "@apollo/client";

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($auth: ForgotPasswordInput!) {
    forgotPassword(auth: $auth)
  }
`;

export default FORGOT_PASSWORD;