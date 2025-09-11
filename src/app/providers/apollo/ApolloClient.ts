import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from "@apollo/client-integration-nextjs"
import { ApolloLink } from "@apollo/client"
import { authLink, errorLink, httpLink } from "./links"

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: ApolloLink.from([authLink, errorLink, httpLink]),
	})
})
