import { AuthResult } from "cv-graphql";
import { setTokens, setUserId } from "./authStorage";
import client from "@app/providers/apollo/client";

export const successAuth = ({access_token, refresh_token, user}: AuthResult) => {
    setTokens(access_token, refresh_token);
    setUserId(user.id);
}

export const logout = () => {
  setTokens('', '')
  setUserId('')
  client.clearStore()
}