import { AuthResult } from "cv-graphql";
import { removeUserID, setTokens, setUserID } from "@shared/model/authStorage";

export const successAuth = ({access_token, refresh_token, user}: AuthResult) => {
    setTokens(access_token, refresh_token);
    setUserID(user.id);
}

export const logout = () => {
  setTokens('', '')
  removeUserID();
}