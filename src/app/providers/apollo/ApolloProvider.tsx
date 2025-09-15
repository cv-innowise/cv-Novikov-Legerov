"use client"

import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from "@apollo/client-integration-nextjs"
import { ApolloLink } from "@apollo/client"
import { authLink, errorLink, httpLink } from "./links"

function makeClient() {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: ApolloLink.from([authLink, errorLink, httpLink]),
	})
}

const ApolloProvider = ({ children }: React.PropsWithChildren) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}

export default ApolloProvider;