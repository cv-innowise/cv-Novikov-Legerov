import { AuthResult } from "cv-graphql";
import { setTokens } from "@shared/model/authStorage";
import client from "@app/providers/apollo/client";

export const successAuth = ({access_token, refresh_token, user}: AuthResult) => {
    setTokens(access_token, refresh_token);
}

export const logout = () => {
  setTokens('', '')
  client.clearStore()
}