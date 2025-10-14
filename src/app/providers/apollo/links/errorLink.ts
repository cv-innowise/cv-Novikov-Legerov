import { CombinedGraphQLErrors } from "@apollo/client/errors"
import { ErrorLink } from "@apollo/client/link/error"

import { RoutesPaths } from "@shared/config"

export const errorLink = new ErrorLink(({ error, operation }) => {
	console.log(operation.operationName)
	if (CombinedGraphQLErrors.is(error)) {
		error.errors.forEach((err) => {
			if (err.message === "Unauthorized") {
				if (typeof window !== "undefined") {
					window.location.href = RoutesPaths.LOGOUT
				}
			}
		})
	}
})
