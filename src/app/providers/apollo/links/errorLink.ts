import { ApolloClient, Observable } from "@apollo/client"
import { CombinedGraphQLErrors } from "@apollo/client/errors"
import { ErrorLink } from "@apollo/client/link/error"
import { UpdateTokenResult } from "cv-graphql"

import UPDATE_TOKEN_MUTATION from "@features/auth/api/updateToken"
import {
	getRefreshToken,
	setAccessToken,
} from "@shared/model/authStorage";

import client from "../client"

let isRefreshing = false
let refreshPromise: Promise<ApolloClient.MutateResult<UpdateTokenResult>>

export const errorLink = new ErrorLink(({ error, operation, forward }) => {
	if (CombinedGraphQLErrors.is(error)) {
		if (error.errors.some((err) => err.message === "Unauthorized")) {
			if (!isRefreshing) {
				isRefreshing = true
				refreshPromise = client
					.mutate<UpdateTokenResult>({
						mutation: UPDATE_TOKEN_MUTATION,
						context: {
							headers: {
								authorization: `Bearer ${getRefreshToken()}`,
							},
						},
					})
					.catch((err) => {
						throw err
					})
					.finally(() => {
						isRefreshing = false
					})
			}

			return new Observable((observer) => {
				refreshPromise
					.then((data) => {
						if (data.data) {
							setAccessToken(data.data.access_token)
							forward(operation).subscribe({
								next: observer.next.bind(observer),
								error: observer.error.bind(observer),
								complete: observer.complete.bind(observer),
							})
						}
					})
					.catch((err) => {
						observer.error(err)
					})
			})
		}
	}
})
