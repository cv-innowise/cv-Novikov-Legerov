import { getAccessToken } from "@/features/auth/model/authStorage";
import { SetContextLink } from "@apollo/client/link/context";

export const authLink = new SetContextLink((prevContext, operation) => {
  const token = getAccessToken();
  
  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});