import { CombinedGraphQLErrors } from "@apollo/client/errors"
import { ErrorLink } from "@apollo/client/link/error"

import { logout } from "@features/auth/model/authService"

export const errorLink = new ErrorLink(({ error }) => {
	if (CombinedGraphQLErrors.is(error)) {
		error.errors.forEach((err) => {
			if (err.message === "Unauthorized") {
				logout();
			} else {
				console.error(`[GraphQL error]: Message: ${err.message}`)
			}
		})
	}
})
