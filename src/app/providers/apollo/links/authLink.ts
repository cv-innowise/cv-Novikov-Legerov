import { SetContextLink } from "@apollo/client/link/context";
import { ApolloLink } from "@apollo/client"
import { getAccessToken as getAccessTokenClientSide } from "@shared/model/authStorage";

export const authLink = new SetContextLink(async (prevContext, operation) => {
  let token: string | undefined;

  if (typeof window === "undefined") {
    const { getAccessToken } = await import("@shared/lib/serverSideCookiesService");
    token = await getAccessToken();
  } else {
    token = getAccessTokenClientSide();
  }

  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});