import { CombinedGraphQLErrors } from "@apollo/client/errors"
import { ErrorLink } from "@apollo/client/link/error"

export const errorLink = new ErrorLink(({ error }) => {
	if (CombinedGraphQLErrors.is(error)) {
		error.errors.forEach((err) => {
			if (err.message === "Unauthorized") {
			} else {
				console.error(`[GraphQL error]: Message: ${err.message}`)
			}
		})
	}
})
