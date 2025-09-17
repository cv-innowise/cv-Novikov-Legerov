import { AuthResult } from "cv-graphql"
import { isTokenExpired } from "@shared/lib/tokenService"
import {
	getAccessTokenClientSide,
	getRefreshTokenClientSide,
	removeSession,
	setAccessTokenClientSide,
	setSession,
	setTokens,
} from "@shared/model/authStorage"

export const successAuth = ({
	access_token,
	refresh_token,
	user,
}: AuthResult) => {
	setTokens(access_token, refresh_token)
	setSession(user.id, user.email, user.role)
}

export const logout = () => {
	setTokens("", "")
	removeSession()
}

export const updateTokenRequest = async (refresh_token: string | undefined) => {
	if (!refresh_token) return { access_token: "", refresh_token: "" }
	const res = await fetch("https://cv-project-js.inno.ws/api/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${refresh_token}`,
		},
		body: JSON.stringify({
			query: `
                mutation UpdateToken {
                  updateToken {
                    access_token
                    refresh_token
                  }
                }
              `,
		}),
	})

	const data = await res.json()
	const newAccessToken = data.data.updateToken.access_token

	return newAccessToken
}

export const getAccessToken = async (): Promise<string | undefined> => {
	const isServer = typeof window === "undefined"
	const access_token = getAccessTokenClientSide();
	const refresh_token = getRefreshTokenClientSide();

	if (!isServer && isTokenExpired(access_token) && !isTokenExpired(refresh_token)) {
		const newAccessToken = await updateTokenRequest(refresh_token)
		setAccessTokenClientSide(newAccessToken)
		return newAccessToken
	}

	return access_token
}
