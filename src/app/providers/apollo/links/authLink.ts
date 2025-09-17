import { SetContextLink } from "@apollo/client/link/context";
import { getAccessToken } from "@features/auth/model/authService";

export const authLink = new SetContextLink(async (prevContext, operation) => {
  const token = await getAccessToken();

  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});